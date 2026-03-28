import { JustWorkflowIt } from './JustWorkflowIt';
import { HttpRequest } from '@smithy/protocol-http';
import { HttpApiKeyAuthSigner, NoAuthSigner } from '@smithy/core';
import type {
  ApiKeyIdentity,
  HttpAuthScheme,
  Identity,
  IdentityProvider,
  IdentityProviderConfig,
  TokenIdentity,
} from '@smithy/types';

/**
 * Retry configuration with exponential backoff and jitter
 */
export interface RetryConfig {
  /**
   * Maximum number of retry attempts (default: 3)
   */
  maxAttempts?: number;

  /**
   * Base delay in milliseconds for exponential backoff (default: 100ms)
   */
  baseDelayMs?: number;

  /**
   * Maximum delay in milliseconds between retries (default: 5000ms)
   */
  maxDelayMs?: number;

  /**
   * Whether to add jitter to retry delays (default: true)
   * Jitter helps prevent thundering herd problem
   */
  enableJitter?: boolean;

  /**
   * HTTP status codes that should trigger a retry (default: [429, 500, 502, 503, 504])
   */
  retryableStatusCodes?: number[];
}

/**
 * Token bucket rate limiter configuration
 */
export interface RateLimitConfig {
  /**
   * Maximum number of tokens in the bucket (max concurrent requests)
   */
  maxTokens: number;

  /**
   * Rate at which tokens are refilled (tokens per second)
   */
  refillRate: number;
}

/**
 * Configuration for creating an authenticated JustWorkflowIt API client
 */
export interface AuthenticatedClientConfig {
  /**
   * API endpoint URL
   * @default 'https://api.justworkflowit.com'
   */
  endpoint?: string;

  /**
   * Access token for authentication
   * Can be a static string or a function that returns a Promise<string>
   * Function form is useful for dynamic token refresh (e.g., from Amplify)
   */
  accessToken: string | (() => Promise<string>);

  /**
   * Retry configuration with exponential backoff
   * Pass false to disable retries
   * @default { maxAttempts: 3, baseDelayMs: 100, maxDelayMs: 5000, enableJitter: true }
   */
  retry?: RetryConfig | false;

  /**
   * Optional token bucket rate limiter
   * Pass false to disable rate limiting
   * @default false (disabled)
   */
  rateLimit?: RateLimitConfig | false;
}

/**
 * Simple token bucket rate limiter
 */
class TokenBucket {
  private tokens: number;
  private lastRefill: number;
  private readonly maxTokens: number;
  private readonly refillRate: number;

  constructor(config: RateLimitConfig) {
    this.maxTokens = config.maxTokens;
    this.refillRate = config.refillRate;
    this.tokens = config.maxTokens;
    this.lastRefill = Date.now();
  }

  async acquire(): Promise<void> {
    while (true) {
      this.refill();

      if (this.tokens >= 1) {
        this.tokens -= 1;
        return;
      }

      // Wait for tokens to refill
      const waitMs = (1 / this.refillRate) * 1000;
      await new Promise(resolve => setTimeout(resolve, waitMs));
    }
  }

  private refill(): void {
    const now = Date.now();
    const elapsedSeconds = (now - this.lastRefill) / 1000;
    const tokensToAdd = elapsedSeconds * this.refillRate;

    this.tokens = Math.min(this.maxTokens, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }
}

/**
 * Calculate exponential backoff delay with optional jitter
 */
function calculateBackoffDelay(
  attempt: number,
  baseDelayMs: number,
  maxDelayMs: number,
  enableJitter: boolean
): number {
  const exponentialDelay = baseDelayMs * Math.pow(2, attempt);
  const cappedDelay = Math.min(exponentialDelay, maxDelayMs);

  if (!enableJitter) {
    return cappedDelay;
  }

  // Add jitter: random value between 0 and cappedDelay
  return Math.floor(Math.random() * cappedDelay);
}

/**
 * Check if an error is retryable
 */
function isRetryableError(error: unknown, retryableStatusCodes: number[]): boolean {
  if (!error || typeof error !== 'object') {
    return false;
  }

  const err = error as { $metadata?: { httpStatusCode?: number }; name?: string };

  // Retry on specific HTTP status codes
  const statusCode = err.$metadata?.httpStatusCode;
  if (statusCode && retryableStatusCodes.includes(statusCode)) {
    return true;
  }

  // Retry on network errors
  const errorName = err.name;
  if (
    errorName === 'NetworkError' ||
    errorName === 'TimeoutError' ||
    errorName === 'ConnectTimeoutError'
  ) {
    return true;
  }

  return false;
}

/**
 * Default retry configuration
 */
const DEFAULT_RETRY_CONFIG: Required<RetryConfig> = {
  maxAttempts: 3,
  baseDelayMs: 100,
  maxDelayMs: 5000,
  enableJitter: true,
  retryableStatusCodes: [429, 500, 502, 503, 504],
};

/**
 * Create an authenticated JustWorkflowIt API client with retry and rate limiting
 *
 * @example
 * // Basic usage with static token
 * const client = createAuthenticatedClient({
 *   accessToken: 'my-token',
 * });
 *
 * @example
 * // With dynamic token (e.g., from Amplify)
 * const client = createAuthenticatedClient({
 *   accessToken: async () => {
 *     const session = await fetchAuthSession();
 *     return session.tokens?.accessToken?.toString() ?? '';
 *   },
 * });
 *
 * @example
 * // Local development with custom retry config
 * const client = createAuthenticatedClient({
 *   endpoint: 'http://localhost:3002',
 *   accessToken: 'dev-token',
 *   retry: { maxAttempts: 5, baseDelayMs: 200 },
 * });
 *
 * @example
 * // With rate limiting (10 requests per second)
 * const client = createAuthenticatedClient({
 *   accessToken: 'my-token',
 *   rateLimit: { maxTokens: 10, refillRate: 10 },
 * });
 *
 * @example
 * // Disable retries
 * const client = createAuthenticatedClient({
 *   accessToken: 'my-token',
 *   retry: false,
 * });
 */
export function createAuthenticatedClient(config: AuthenticatedClientConfig): JustWorkflowIt {
  const endpoint = config.endpoint ?? 'https://api.justworkflowit.com';
  const getToken =
    typeof config.accessToken === 'function'
      ? config.accessToken
      : () => Promise.resolve(config.accessToken as string);

  type ProviderFactory<TIdentity extends Identity> = (
    config: IdentityProviderConfig
  ) => IdentityProvider<TIdentity> | undefined;

  const cognitoIdentityProviderFactory: ProviderFactory<TokenIdentity> = () => {
    return async () =>
      ({
        token: await getToken(),
      }) satisfies TokenIdentity;
  };

  const apiKeyIdentityProviderFactory: ProviderFactory<ApiKeyIdentity> = () => {
    return async () =>
      ({
        apiKey: `Bearer ${await getToken()}`,
      }) satisfies ApiKeyIdentity;
  };

  const noAuthIdentityProviderFactory: ProviderFactory<Identity> = () => {
    return async () =>
      ({
        token: await getToken(),
      }) as Identity;
  };

  const cognitoSigner = {
    async sign(request: HttpRequest, identity: Identity): Promise<HttpRequest> {
      const tokenIdentity = identity as TokenIdentity;
      const cloned = HttpRequest.clone(request);
      // Only add Authorization header if we have a token
      // This allows demo mode requests to proceed without auth
      if (tokenIdentity.token) {
        cloned.headers['Authorization'] = `Bearer ${tokenIdentity.token}`;
      }
      return cloned;
    },
  };

  const apiKeySigner = new HttpApiKeyAuthSigner();
  // Use cognitoSigner for noAuth too — sends the token if available,
  // so the server can identify the user for PRIVATE listing access etc.
  const httpAuthSchemes: HttpAuthScheme[] = [
    {
      schemeId: 'aws.auth#cognitoUserPools',
      identityProvider: cognitoIdentityProviderFactory,
      signer: cognitoSigner,
    },
    {
      schemeId: 'smithy.api#httpApiKeyAuth',
      identityProvider: apiKeyIdentityProviderFactory,
      signer: apiKeySigner,
    },
    {
      schemeId: 'smithy.api#noAuth',
      identityProvider: noAuthIdentityProviderFactory,
      signer: cognitoSigner,
    },
  ];

  const client = new JustWorkflowIt({ endpoint, httpAuthSchemes });


  // Initialize retry config
  const retryConfig: Required<RetryConfig> | false =
    config.retry === false
      ? false
      : {
          ...DEFAULT_RETRY_CONFIG,
          ...(config.retry ?? {}),
        };

  // Initialize rate limiter
  const rateLimiter = config.rateLimit ? new TokenBucket(config.rateLimit) : null;

  // Add rate limiting middleware (if enabled)
  if (rateLimiter) {
    client.middlewareStack.add(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (next: any) => async (args: any) => {
        await rateLimiter.acquire();
        return next(args);
      },
      {
        step: 'finalizeRequest',
        name: 'rateLimiter',
        priority: 'high',
      }
    );
  }

  // Add retry middleware with exponential backoff (if enabled)
  if (retryConfig) {
    client.middlewareStack.add(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (next: any) => async (args: any) => {
        let attempt = 0;
        let lastError: unknown;

        while (attempt <= retryConfig.maxAttempts) {
          try {
            return await next(args);
          } catch (error) {
            lastError = error;

            // Don't retry if we've exhausted attempts
            if (attempt >= retryConfig.maxAttempts) {
              throw error;
            }

            // Check if error is retryable
            if (!isRetryableError(error, retryConfig.retryableStatusCodes)) {
              throw error;
            }

            // Calculate backoff delay
            const delayMs = calculateBackoffDelay(
              attempt,
              retryConfig.baseDelayMs,
              retryConfig.maxDelayMs,
              retryConfig.enableJitter
            );

            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, delayMs));

            attempt++;
          }
        }

        throw lastError;
      },
      {
        step: 'finalizeRequest',
        name: 'retryWithBackoff',
        priority: 'low',
      }
    );
  }

  return client;
}

/**
 * Re-export JustWorkflowIt type for convenience
 */
export type { JustWorkflowIt } from './JustWorkflowIt';

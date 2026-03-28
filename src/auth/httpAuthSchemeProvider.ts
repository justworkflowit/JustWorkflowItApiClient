// smithy-typescript generated code
import { JustWorkflowItClientResolvedConfig } from "../JustWorkflowItClient";
import {
  doesIdentityRequireRefresh,
  isIdentityExpired,
  memoizeIdentityProvider,
} from "@smithy/core";
import {
  ApiKeyIdentity,
  ApiKeyIdentityProvider,
  HandlerExecutionContext,
  HttpApiKeyAuthLocation,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { getSmithyContext } from "@smithy/util-middleware";

/**
 * @internal
 */
export interface JustWorkflowItHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
}

/**
 * @internal
 */
export interface JustWorkflowItHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<JustWorkflowItClientResolvedConfig, HandlerExecutionContext, JustWorkflowItHttpAuthSchemeParameters, object> {}

/**
 * @internal
 */
export const defaultJustWorkflowItHttpAuthSchemeParametersProvider = async (config: JustWorkflowItClientResolvedConfig, context: HandlerExecutionContext, input: object): Promise<JustWorkflowItHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
  };
};

function createAwsAuthCognitoUserPoolsHttpAuthOption(authParameters: JustWorkflowItHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#cognitoUserPools",
  };
};

function createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters: JustWorkflowItHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#httpApiKeyAuth",
    signingProperties: {
      name: "Authorization",
      in: HttpApiKeyAuthLocation.HEADER,
      scheme: undefined,
    },
  };
};

function createSmithyApiNoAuthHttpAuthOption(authParameters: JustWorkflowItHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#noAuth",
  };
};

/**
 * @internal
 */
export interface JustWorkflowItHttpAuthSchemeProvider extends HttpAuthSchemeProvider<JustWorkflowItHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultJustWorkflowItHttpAuthSchemeProvider: JustWorkflowItHttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    case "CreateInterest": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    };
    case "GetMarketplaceListing": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    };
    case "GetPublicInvitationDetails": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    };
    case "HandleStripeConnectWebhook": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    };
    case "HandleStripeWebhook": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    };
    case "ListMarketplaceListings": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    };
    case "SearchMarketplaceOrganizations": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    };
    default: {
      options.push(createAwsAuthCognitoUserPoolsHttpAuthOption(authParameters));
      options.push(createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters));
    };
  };
  return options;
};

/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: JustWorkflowItHttpAuthSchemeProvider;

  /**
   * The API key to use when making requests.
   */
  apiKey?: ApiKeyIdentity | ApiKeyIdentityProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: JustWorkflowItHttpAuthSchemeProvider;

  /**
   * The API key to use when making requests.
   */
  readonly apiKey?: ApiKeyIdentityProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(config: T & HttpAuthSchemeInputConfig): T & HttpAuthSchemeResolvedConfig => {
  const apiKey = memoizeIdentityProvider(config.apiKey, isIdentityExpired, doesIdentityRequireRefresh);
  return Object.assign(
    config, {
    apiKey,
  }) as T & HttpAuthSchemeResolvedConfig;
};

// smithy-typescript generated code
import { JustWorkflowItHttpAuthSchemeProvider } from "./httpAuthSchemeProvider";
import {
  ApiKeyIdentity,
  ApiKeyIdentityProvider,
  HttpAuthScheme,
} from "@smithy/types";

/**
 * @internal
 */
export interface HttpAuthExtensionConfiguration {
  setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void;
  httpAuthSchemes(): HttpAuthScheme[];
  setHttpAuthSchemeProvider(httpAuthSchemeProvider: JustWorkflowItHttpAuthSchemeProvider): void;
  httpAuthSchemeProvider(): JustWorkflowItHttpAuthSchemeProvider;
  setApiKey(apiKey: ApiKeyIdentity | ApiKeyIdentityProvider): void;
  apiKey(): ApiKeyIdentity | ApiKeyIdentityProvider | undefined;
}

/**
 * @internal
 */
export type HttpAuthRuntimeConfig = Partial<{
  httpAuthSchemes: HttpAuthScheme[];
  httpAuthSchemeProvider: JustWorkflowItHttpAuthSchemeProvider;
  apiKey: ApiKeyIdentity | ApiKeyIdentityProvider;
}>;

/**
 * @internal
 */
export const getHttpAuthExtensionConfiguration = (runtimeConfig: HttpAuthRuntimeConfig): HttpAuthExtensionConfiguration => {
  let _httpAuthSchemes = runtimeConfig.httpAuthSchemes!;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider!;
  let _apiKey = runtimeConfig.apiKey;
  return {
    setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void {
      const index = _httpAuthSchemes.findIndex(scheme => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes(): HttpAuthScheme[] {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider: JustWorkflowItHttpAuthSchemeProvider): void {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider(): JustWorkflowItHttpAuthSchemeProvider {
      return _httpAuthSchemeProvider;
    },
    setApiKey(apiKey: ApiKeyIdentity | ApiKeyIdentityProvider): void {
        _apiKey = apiKey;
    },
    apiKey(): ApiKeyIdentity | ApiKeyIdentityProvider | undefined {
        return _apiKey;
    },
  }
};

/**
 * @internal
 */
export const resolveHttpAuthRuntimeConfig = (config: HttpAuthExtensionConfiguration): HttpAuthRuntimeConfig => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    apiKey: config.apiKey(),
  };
};

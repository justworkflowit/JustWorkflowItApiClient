// smithy-typescript generated code
import {
  getHttpAuthExtensionConfiguration,
  resolveHttpAuthRuntimeConfig,
} from "./auth/httpAuthExtensionConfiguration";
import {
  getAwsRegionExtensionConfiguration,
  resolveAwsRegionExtensionConfiguration,
} from "@aws-sdk/region-config-resolver";
import {
  getHttpHandlerExtensionConfiguration,
  resolveHttpHandlerRuntimeConfig,
} from "@smithy/protocol-http";
import {
  getDefaultExtensionConfiguration,
  resolveDefaultRuntimeConfig,
} from "@smithy/smithy-client";
import { JustWorkflowItExtensionConfiguration } from "./extensionConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
    configure(extensionConfiguration: JustWorkflowItExtensionConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
    extensions: RuntimeExtension[]
}

/**
 * @internal
 */
export const resolveRuntimeExtensions = (
    runtimeConfig: any,
    extensions: RuntimeExtension[]
) => {
  const extensionConfiguration: JustWorkflowItExtensionConfiguration = Object.assign(
    getDefaultExtensionConfiguration(runtimeConfig),
    getHttpHandlerExtensionConfiguration(runtimeConfig),
    getHttpAuthExtensionConfiguration(runtimeConfig),
    getAwsRegionExtensionConfiguration(runtimeConfig),
  );

  extensions.forEach(extension => extension.configure(extensionConfiguration));

  return Object.assign(runtimeConfig,
    resolveDefaultRuntimeConfig(extensionConfiguration),
    resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    resolveHttpAuthRuntimeConfig(extensionConfiguration),
    resolveAwsRegionExtensionConfiguration(extensionConfiguration),
  );
}

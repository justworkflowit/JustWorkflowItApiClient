// smithy-typescript generated code
import {
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  defaultJustWorkflowItHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptOrganizationInvitationCommandInput,
  AcceptOrganizationInvitationCommandOutput,
} from "./commands/AcceptOrganizationInvitationCommand";
import {
  AdminBackfillSubscriptionsCommandInput,
  AdminBackfillSubscriptionsCommandOutput,
} from "./commands/AdminBackfillSubscriptionsCommand";
import {
  AdminCleanupTestBillingDataCommandInput,
  AdminCleanupTestBillingDataCommandOutput,
} from "./commands/AdminCleanupTestBillingDataCommand";
import {
  AdminCreateImpersonationSessionCommandInput,
  AdminCreateImpersonationSessionCommandOutput,
} from "./commands/AdminCreateImpersonationSessionCommand";
import {
  AdminCreateRoleCommandInput,
  AdminCreateRoleCommandOutput,
} from "./commands/AdminCreateRoleCommand";
import {
  AdminCreateSubscriptionPlanCommandInput,
  AdminCreateSubscriptionPlanCommandOutput,
} from "./commands/AdminCreateSubscriptionPlanCommand";
import {
  AdminDeleteOrganizationFeatureOverrideCommandInput,
  AdminDeleteOrganizationFeatureOverrideCommandOutput,
} from "./commands/AdminDeleteOrganizationFeatureOverrideCommand";
import {
  AdminDeleteRoleCommandInput,
  AdminDeleteRoleCommandOutput,
} from "./commands/AdminDeleteRoleCommand";
import {
  AdminDeleteSubscriptionPlanCommandInput,
  AdminDeleteSubscriptionPlanCommandOutput,
} from "./commands/AdminDeleteSubscriptionPlanCommand";
import {
  AdminGenerateInvoicesCommandInput,
  AdminGenerateInvoicesCommandOutput,
} from "./commands/AdminGenerateInvoicesCommand";
import {
  AdminGetBillingHealthCommandInput,
  AdminGetBillingHealthCommandOutput,
} from "./commands/AdminGetBillingHealthCommand";
import {
  AdminGetOrganizationCommandInput,
  AdminGetOrganizationCommandOutput,
} from "./commands/AdminGetOrganizationCommand";
import {
  AdminGetRoleCommandInput,
  AdminGetRoleCommandOutput,
} from "./commands/AdminGetRoleCommand";
import {
  AdminGetSubscriptionPlanCommandInput,
  AdminGetSubscriptionPlanCommandOutput,
} from "./commands/AdminGetSubscriptionPlanCommand";
import {
  AdminListOrganizationFeatureOverridesCommandInput,
  AdminListOrganizationFeatureOverridesCommandOutput,
} from "./commands/AdminListOrganizationFeatureOverridesCommand";
import {
  AdminListOrganizationMembersCommandInput,
  AdminListOrganizationMembersCommandOutput,
} from "./commands/AdminListOrganizationMembersCommand";
import {
  AdminListOrganizationsCommandInput,
  AdminListOrganizationsCommandOutput,
} from "./commands/AdminListOrganizationsCommand";
import {
  AdminListRolesCommandInput,
  AdminListRolesCommandOutput,
} from "./commands/AdminListRolesCommand";
import {
  AdminListSubscriptionPlansCommandInput,
  AdminListSubscriptionPlansCommandOutput,
} from "./commands/AdminListSubscriptionPlansCommand";
import {
  AdminSendTestInvoiceCommandInput,
  AdminSendTestInvoiceCommandOutput,
} from "./commands/AdminSendTestInvoiceCommand";
import {
  AdminSetOrganizationFeatureOverrideCommandInput,
  AdminSetOrganizationFeatureOverrideCommandOutput,
} from "./commands/AdminSetOrganizationFeatureOverrideCommand";
import {
  AdminTriggerUsageSyncCommandInput,
  AdminTriggerUsageSyncCommandOutput,
} from "./commands/AdminTriggerUsageSyncCommand";
import {
  AdminUpdateOrganizationSubscriptionPlanCommandInput,
  AdminUpdateOrganizationSubscriptionPlanCommandOutput,
} from "./commands/AdminUpdateOrganizationSubscriptionPlanCommand";
import {
  AdminUpdateRoleCommandInput,
  AdminUpdateRoleCommandOutput,
} from "./commands/AdminUpdateRoleCommand";
import {
  AdminUpdateSubscriptionPlanCommandInput,
  AdminUpdateSubscriptionPlanCommandOutput,
} from "./commands/AdminUpdateSubscriptionPlanCommand";
import {
  AllowlistMarketplaceListingCommandInput,
  AllowlistMarketplaceListingCommandOutput,
} from "./commands/AllowlistMarketplaceListingCommand";
import {
  CancelJobCommandInput,
  CancelJobCommandOutput,
} from "./commands/CancelJobCommand";
import {
  CancelOrganizationInvitationCommandInput,
  CancelOrganizationInvitationCommandOutput,
} from "./commands/CancelOrganizationInvitationCommand";
import {
  CreateApiAuthTokenCommandInput,
  CreateApiAuthTokenCommandOutput,
} from "./commands/CreateApiAuthTokenCommand";
import {
  CreateBillingSetupIntentCommandInput,
  CreateBillingSetupIntentCommandOutput,
} from "./commands/CreateBillingSetupIntentCommand";
import {
  CreateConnectOnboardingLinkCommandInput,
  CreateConnectOnboardingLinkCommandOutput,
} from "./commands/CreateConnectOnboardingLinkCommand";
import {
  CreateInterestCommandInput,
  CreateInterestCommandOutput,
} from "./commands/CreateInterestCommand";
import {
  CreateMarketplaceListingVersionCommandInput,
  CreateMarketplaceListingVersionCommandOutput,
} from "./commands/CreateMarketplaceListingVersionCommand";
import {
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
} from "./commands/CreateOrganizationCommand";
import {
  CreateOrganizationInvitationCommandInput,
  CreateOrganizationInvitationCommandOutput,
} from "./commands/CreateOrganizationInvitationCommand";
import {
  CreateOrganizationSecretCommandInput,
  CreateOrganizationSecretCommandOutput,
} from "./commands/CreateOrganizationSecretCommand";
import {
  CreateResourcePoolCommandInput,
  CreateResourcePoolCommandOutput,
} from "./commands/CreateResourcePoolCommand";
import {
  CreateRoleCommandInput,
  CreateRoleCommandOutput,
} from "./commands/CreateRoleCommand";
import {
  DeleteBillingPaymentMethodCommandInput,
  DeleteBillingPaymentMethodCommandOutput,
} from "./commands/DeleteBillingPaymentMethodCommand";
import {
  DeleteMarketplaceListingBillingOverrideCommandInput,
  DeleteMarketplaceListingBillingOverrideCommandOutput,
} from "./commands/DeleteMarketplaceListingBillingOverrideCommand";
import {
  DeleteOrganizationCommandInput,
  DeleteOrganizationCommandOutput,
} from "./commands/DeleteOrganizationCommand";
import {
  DeleteOrganizationSecretCommandInput,
  DeleteOrganizationSecretCommandOutput,
} from "./commands/DeleteOrganizationSecretCommand";
import {
  DeleteResourcePoolCommandInput,
  DeleteResourcePoolCommandOutput,
} from "./commands/DeleteResourcePoolCommand";
import {
  DeleteRoleCommandInput,
  DeleteRoleCommandOutput,
} from "./commands/DeleteRoleCommand";
import {
  GetApiAuthTokenCommandInput,
  GetApiAuthTokenCommandOutput,
} from "./commands/GetApiAuthTokenCommand";
import {
  GetConnectAccountStatusCommandInput,
  GetConnectAccountStatusCommandOutput,
} from "./commands/GetConnectAccountStatusCommand";
import {
  GetConsumerListingUsageTimeSeriesCommandInput,
  GetConsumerListingUsageTimeSeriesCommandOutput,
} from "./commands/GetConsumerListingUsageTimeSeriesCommand";
import {
  GetJobCommandInput,
  GetJobCommandOutput,
} from "./commands/GetJobCommand";
import {
  GetMarketplaceListingCommandInput,
  GetMarketplaceListingCommandOutput,
} from "./commands/GetMarketplaceListingCommand";
import {
  GetMarketplaceListingVersionCommandInput,
  GetMarketplaceListingVersionCommandOutput,
} from "./commands/GetMarketplaceListingVersionCommand";
import {
  GetMyPermissionsCommandInput,
  GetMyPermissionsCommandOutput,
} from "./commands/GetMyPermissionsCommand";
import {
  GetOrganizationCommandInput,
  GetOrganizationCommandOutput,
} from "./commands/GetOrganizationCommand";
import {
  GetOrganizationInvitationCommandInput,
  GetOrganizationInvitationCommandOutput,
} from "./commands/GetOrganizationInvitationCommand";
import {
  GetOrganizationSecretCommandInput,
  GetOrganizationSecretCommandOutput,
} from "./commands/GetOrganizationSecretCommand";
import {
  GetOrganizationSubscriptionPlanCommandInput,
  GetOrganizationSubscriptionPlanCommandOutput,
} from "./commands/GetOrganizationSubscriptionPlanCommand";
import {
  GetPublicInvitationDetailsCommandInput,
  GetPublicInvitationDetailsCommandOutput,
} from "./commands/GetPublicInvitationDetailsCommand";
import {
  GetPublisherListingConsumerBreakdownCommandInput,
  GetPublisherListingConsumerBreakdownCommandOutput,
} from "./commands/GetPublisherListingConsumerBreakdownCommand";
import {
  GetPublisherListingUsageTimeSeriesCommandInput,
  GetPublisherListingUsageTimeSeriesCommandOutput,
} from "./commands/GetPublisherListingUsageTimeSeriesCommand";
import {
  GetResourcePoolCommandInput,
  GetResourcePoolCommandOutput,
} from "./commands/GetResourcePoolCommand";
import {
  GetRoleCommandInput,
  GetRoleCommandOutput,
} from "./commands/GetRoleCommand";
import {
  GetSubscriptionPlanCommandInput,
  GetSubscriptionPlanCommandOutput,
} from "./commands/GetSubscriptionPlanCommand";
import {
  GetTaggedWorkflowVersionCommandInput,
  GetTaggedWorkflowVersionCommandOutput,
} from "./commands/GetTaggedWorkflowVersionCommand";
import {
  GetWorkflowCommandInput,
  GetWorkflowCommandOutput,
} from "./commands/GetWorkflowCommand";
import {
  GetWorkflowMetricTimeSeriesCommandInput,
  GetWorkflowMetricTimeSeriesCommandOutput,
} from "./commands/GetWorkflowMetricTimeSeriesCommand";
import {
  GetWorkflowStateCommandInput,
  GetWorkflowStateCommandOutput,
} from "./commands/GetWorkflowStateCommand";
import {
  GetWorkflowVersionCommandInput,
  GetWorkflowVersionCommandOutput,
} from "./commands/GetWorkflowVersionCommand";
import {
  GrantMarketplaceAccessCommandInput,
  GrantMarketplaceAccessCommandOutput,
} from "./commands/GrantMarketplaceAccessCommand";
import {
  HandleStripeConnectWebhookCommandInput,
  HandleStripeConnectWebhookCommandOutput,
} from "./commands/HandleStripeConnectWebhookCommand";
import {
  HandleStripeWebhookCommandInput,
  HandleStripeWebhookCommandOutput,
} from "./commands/HandleStripeWebhookCommand";
import {
  IsMarketplaceListingAllowlistedCommandInput,
  IsMarketplaceListingAllowlistedCommandOutput,
} from "./commands/IsMarketplaceListingAllowlistedCommand";
import {
  ListAllowlistedMarketplaceListingsCommandInput,
  ListAllowlistedMarketplaceListingsCommandOutput,
} from "./commands/ListAllowlistedMarketplaceListingsCommand";
import {
  ListApiAuthTokensCommandInput,
  ListApiAuthTokensCommandOutput,
} from "./commands/ListApiAuthTokensCommand";
import {
  ListBillingPaymentMethodsCommandInput,
  ListBillingPaymentMethodsCommandOutput,
} from "./commands/ListBillingPaymentMethodsCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput,
} from "./commands/ListJobsCommand";
import {
  ListMarketplaceListingBillingOverridesCommandInput,
  ListMarketplaceListingBillingOverridesCommandOutput,
} from "./commands/ListMarketplaceListingBillingOverridesCommand";
import {
  ListMarketplaceListingVersionsCommandInput,
  ListMarketplaceListingVersionsCommandOutput,
} from "./commands/ListMarketplaceListingVersionsCommand";
import {
  ListMarketplaceListingsCommandInput,
  ListMarketplaceListingsCommandOutput,
} from "./commands/ListMarketplaceListingsCommand";
import {
  ListMyMarketplaceListingsCommandInput,
  ListMyMarketplaceListingsCommandOutput,
} from "./commands/ListMyMarketplaceListingsCommand";
import {
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "./commands/ListNotificationsCommand";
import {
  ListOrganizationInvitationsForUserCommandInput,
  ListOrganizationInvitationsForUserCommandOutput,
} from "./commands/ListOrganizationInvitationsForUserCommand";
import {
  ListOrganizationSecretsCommandInput,
  ListOrganizationSecretsCommandOutput,
} from "./commands/ListOrganizationSecretsCommand";
import {
  ListOrganizationUsersAndInvitationsCommandInput,
  ListOrganizationUsersAndInvitationsCommandOutput,
} from "./commands/ListOrganizationUsersAndInvitationsCommand";
import {
  ListOrganizationsCommandInput,
  ListOrganizationsCommandOutput,
} from "./commands/ListOrganizationsCommand";
import {
  ListResourcePoolsCommandInput,
  ListResourcePoolsCommandOutput,
} from "./commands/ListResourcePoolsCommand";
import {
  ListRolesCommandInput,
  ListRolesCommandOutput,
} from "./commands/ListRolesCommand";
import {
  ListSubscriptionPlansCommandInput,
  ListSubscriptionPlansCommandOutput,
} from "./commands/ListSubscriptionPlansCommand";
import {
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput,
} from "./commands/ListWorkflowVersionsCommand";
import {
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  MarkAllNotificationsReadCommandInput,
  MarkAllNotificationsReadCommandOutput,
} from "./commands/MarkAllNotificationsReadCommand";
import {
  MarkNotificationReadCommandInput,
  MarkNotificationReadCommandOutput,
} from "./commands/MarkNotificationReadCommand";
import {
  PublishWorkflowToMarketplaceCommandInput,
  PublishWorkflowToMarketplaceCommandOutput,
} from "./commands/PublishWorkflowToMarketplaceCommand";
import {
  RegisterWorkflowCommandInput,
  RegisterWorkflowCommandOutput,
} from "./commands/RegisterWorkflowCommand";
import {
  RegisterWorkflowVersionCommandInput,
  RegisterWorkflowVersionCommandOutput,
} from "./commands/RegisterWorkflowVersionCommand";
import {
  RejectOrganizationInvitationCommandInput,
  RejectOrganizationInvitationCommandOutput,
} from "./commands/RejectOrganizationInvitationCommand";
import {
  RemoveOrganizationMembershipCommandInput,
  RemoveOrganizationMembershipCommandOutput,
} from "./commands/RemoveOrganizationMembershipCommand";
import {
  ResolveOrganizationSecretCommandInput,
  ResolveOrganizationSecretCommandOutput,
} from "./commands/ResolveOrganizationSecretCommand";
import {
  ResumeJobCommandInput,
  ResumeJobCommandOutput,
} from "./commands/ResumeJobCommand";
import {
  RevokeApiAuthTokenCommandInput,
  RevokeApiAuthTokenCommandOutput,
} from "./commands/RevokeApiAuthTokenCommand";
import {
  RevokeMarketplaceAccessCommandInput,
  RevokeMarketplaceAccessCommandOutput,
} from "./commands/RevokeMarketplaceAccessCommand";
import {
  SearchMarketplaceOrganizationsCommandInput,
  SearchMarketplaceOrganizationsCommandOutput,
} from "./commands/SearchMarketplaceOrganizationsCommand";
import {
  SendJobEventCommandInput,
  SendJobEventCommandOutput,
} from "./commands/SendJobEventCommand";
import {
  SetWorkflowVersionTagCommandInput,
  SetWorkflowVersionTagCommandOutput,
} from "./commands/SetWorkflowVersionTagCommand";
import {
  SubmitJobCommandInput,
  SubmitJobCommandOutput,
} from "./commands/SubmitJobCommand";
import {
  UnallowlistMarketplaceListingCommandInput,
  UnallowlistMarketplaceListingCommandOutput,
} from "./commands/UnallowlistMarketplaceListingCommand";
import {
  UnpublishWorkflowFromMarketplaceCommandInput,
  UnpublishWorkflowFromMarketplaceCommandOutput,
} from "./commands/UnpublishWorkflowFromMarketplaceCommand";
import {
  UpdateApiAuthTokenCommandInput,
  UpdateApiAuthTokenCommandOutput,
} from "./commands/UpdateApiAuthTokenCommand";
import {
  UpdateMarketplaceListingBillingCommandInput,
  UpdateMarketplaceListingBillingCommandOutput,
} from "./commands/UpdateMarketplaceListingBillingCommand";
import {
  UpdateMarketplaceListingMetadataCommandInput,
  UpdateMarketplaceListingMetadataCommandOutput,
} from "./commands/UpdateMarketplaceListingMetadataCommand";
import {
  UpdateOrganizationCommandInput,
  UpdateOrganizationCommandOutput,
} from "./commands/UpdateOrganizationCommand";
import {
  UpdateOrganizationMembershipCommandInput,
  UpdateOrganizationMembershipCommandOutput,
} from "./commands/UpdateOrganizationMembershipCommand";
import {
  UpdateOrganizationSecretCommandInput,
  UpdateOrganizationSecretCommandOutput,
} from "./commands/UpdateOrganizationSecretCommand";
import {
  UpdateResourcePoolCommandInput,
  UpdateResourcePoolCommandOutput,
} from "./commands/UpdateResourcePoolCommand";
import {
  UpdateRoleCommandInput,
  UpdateRoleCommandOutput,
} from "./commands/UpdateRoleCommand";
import {
  UpsertMarketplaceListingBillingOverrideCommandInput,
  UpsertMarketplaceListingBillingOverrideCommandOutput,
} from "./commands/UpsertMarketplaceListingBillingOverrideCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  RuntimeExtension,
  RuntimeExtensionsConfig,
  resolveRuntimeExtensions,
} from "./runtimeExtensions";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemePlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

export { __Client }

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptOrganizationInvitationCommandInput
  | AdminBackfillSubscriptionsCommandInput
  | AdminCleanupTestBillingDataCommandInput
  | AdminCreateImpersonationSessionCommandInput
  | AdminCreateRoleCommandInput
  | AdminCreateSubscriptionPlanCommandInput
  | AdminDeleteOrganizationFeatureOverrideCommandInput
  | AdminDeleteRoleCommandInput
  | AdminDeleteSubscriptionPlanCommandInput
  | AdminGenerateInvoicesCommandInput
  | AdminGetBillingHealthCommandInput
  | AdminGetOrganizationCommandInput
  | AdminGetRoleCommandInput
  | AdminGetSubscriptionPlanCommandInput
  | AdminListOrganizationFeatureOverridesCommandInput
  | AdminListOrganizationMembersCommandInput
  | AdminListOrganizationsCommandInput
  | AdminListRolesCommandInput
  | AdminListSubscriptionPlansCommandInput
  | AdminSendTestInvoiceCommandInput
  | AdminSetOrganizationFeatureOverrideCommandInput
  | AdminTriggerUsageSyncCommandInput
  | AdminUpdateOrganizationSubscriptionPlanCommandInput
  | AdminUpdateRoleCommandInput
  | AdminUpdateSubscriptionPlanCommandInput
  | AllowlistMarketplaceListingCommandInput
  | CancelJobCommandInput
  | CancelOrganizationInvitationCommandInput
  | CreateApiAuthTokenCommandInput
  | CreateBillingSetupIntentCommandInput
  | CreateConnectOnboardingLinkCommandInput
  | CreateInterestCommandInput
  | CreateMarketplaceListingVersionCommandInput
  | CreateOrganizationCommandInput
  | CreateOrganizationInvitationCommandInput
  | CreateOrganizationSecretCommandInput
  | CreateResourcePoolCommandInput
  | CreateRoleCommandInput
  | DeleteBillingPaymentMethodCommandInput
  | DeleteMarketplaceListingBillingOverrideCommandInput
  | DeleteOrganizationCommandInput
  | DeleteOrganizationSecretCommandInput
  | DeleteResourcePoolCommandInput
  | DeleteRoleCommandInput
  | GetApiAuthTokenCommandInput
  | GetConnectAccountStatusCommandInput
  | GetConsumerListingUsageTimeSeriesCommandInput
  | GetJobCommandInput
  | GetMarketplaceListingCommandInput
  | GetMarketplaceListingVersionCommandInput
  | GetMyPermissionsCommandInput
  | GetOrganizationCommandInput
  | GetOrganizationInvitationCommandInput
  | GetOrganizationSecretCommandInput
  | GetOrganizationSubscriptionPlanCommandInput
  | GetPublicInvitationDetailsCommandInput
  | GetPublisherListingConsumerBreakdownCommandInput
  | GetPublisherListingUsageTimeSeriesCommandInput
  | GetResourcePoolCommandInput
  | GetRoleCommandInput
  | GetSubscriptionPlanCommandInput
  | GetTaggedWorkflowVersionCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowMetricTimeSeriesCommandInput
  | GetWorkflowStateCommandInput
  | GetWorkflowVersionCommandInput
  | GrantMarketplaceAccessCommandInput
  | HandleStripeConnectWebhookCommandInput
  | HandleStripeWebhookCommandInput
  | IsMarketplaceListingAllowlistedCommandInput
  | ListAllowlistedMarketplaceListingsCommandInput
  | ListApiAuthTokensCommandInput
  | ListBillingPaymentMethodsCommandInput
  | ListJobsCommandInput
  | ListMarketplaceListingBillingOverridesCommandInput
  | ListMarketplaceListingVersionsCommandInput
  | ListMarketplaceListingsCommandInput
  | ListMyMarketplaceListingsCommandInput
  | ListNotificationsCommandInput
  | ListOrganizationInvitationsForUserCommandInput
  | ListOrganizationSecretsCommandInput
  | ListOrganizationUsersAndInvitationsCommandInput
  | ListOrganizationsCommandInput
  | ListResourcePoolsCommandInput
  | ListRolesCommandInput
  | ListSubscriptionPlansCommandInput
  | ListWorkflowVersionsCommandInput
  | ListWorkflowsCommandInput
  | MarkAllNotificationsReadCommandInput
  | MarkNotificationReadCommandInput
  | PublishWorkflowToMarketplaceCommandInput
  | RegisterWorkflowCommandInput
  | RegisterWorkflowVersionCommandInput
  | RejectOrganizationInvitationCommandInput
  | RemoveOrganizationMembershipCommandInput
  | ResolveOrganizationSecretCommandInput
  | ResumeJobCommandInput
  | RevokeApiAuthTokenCommandInput
  | RevokeMarketplaceAccessCommandInput
  | SearchMarketplaceOrganizationsCommandInput
  | SendJobEventCommandInput
  | SetWorkflowVersionTagCommandInput
  | SubmitJobCommandInput
  | UnallowlistMarketplaceListingCommandInput
  | UnpublishWorkflowFromMarketplaceCommandInput
  | UpdateApiAuthTokenCommandInput
  | UpdateMarketplaceListingBillingCommandInput
  | UpdateMarketplaceListingMetadataCommandInput
  | UpdateOrganizationCommandInput
  | UpdateOrganizationMembershipCommandInput
  | UpdateOrganizationSecretCommandInput
  | UpdateResourcePoolCommandInput
  | UpdateRoleCommandInput
  | UpsertMarketplaceListingBillingOverrideCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptOrganizationInvitationCommandOutput
  | AdminBackfillSubscriptionsCommandOutput
  | AdminCleanupTestBillingDataCommandOutput
  | AdminCreateImpersonationSessionCommandOutput
  | AdminCreateRoleCommandOutput
  | AdminCreateSubscriptionPlanCommandOutput
  | AdminDeleteOrganizationFeatureOverrideCommandOutput
  | AdminDeleteRoleCommandOutput
  | AdminDeleteSubscriptionPlanCommandOutput
  | AdminGenerateInvoicesCommandOutput
  | AdminGetBillingHealthCommandOutput
  | AdminGetOrganizationCommandOutput
  | AdminGetRoleCommandOutput
  | AdminGetSubscriptionPlanCommandOutput
  | AdminListOrganizationFeatureOverridesCommandOutput
  | AdminListOrganizationMembersCommandOutput
  | AdminListOrganizationsCommandOutput
  | AdminListRolesCommandOutput
  | AdminListSubscriptionPlansCommandOutput
  | AdminSendTestInvoiceCommandOutput
  | AdminSetOrganizationFeatureOverrideCommandOutput
  | AdminTriggerUsageSyncCommandOutput
  | AdminUpdateOrganizationSubscriptionPlanCommandOutput
  | AdminUpdateRoleCommandOutput
  | AdminUpdateSubscriptionPlanCommandOutput
  | AllowlistMarketplaceListingCommandOutput
  | CancelJobCommandOutput
  | CancelOrganizationInvitationCommandOutput
  | CreateApiAuthTokenCommandOutput
  | CreateBillingSetupIntentCommandOutput
  | CreateConnectOnboardingLinkCommandOutput
  | CreateInterestCommandOutput
  | CreateMarketplaceListingVersionCommandOutput
  | CreateOrganizationCommandOutput
  | CreateOrganizationInvitationCommandOutput
  | CreateOrganizationSecretCommandOutput
  | CreateResourcePoolCommandOutput
  | CreateRoleCommandOutput
  | DeleteBillingPaymentMethodCommandOutput
  | DeleteMarketplaceListingBillingOverrideCommandOutput
  | DeleteOrganizationCommandOutput
  | DeleteOrganizationSecretCommandOutput
  | DeleteResourcePoolCommandOutput
  | DeleteRoleCommandOutput
  | GetApiAuthTokenCommandOutput
  | GetConnectAccountStatusCommandOutput
  | GetConsumerListingUsageTimeSeriesCommandOutput
  | GetJobCommandOutput
  | GetMarketplaceListingCommandOutput
  | GetMarketplaceListingVersionCommandOutput
  | GetMyPermissionsCommandOutput
  | GetOrganizationCommandOutput
  | GetOrganizationInvitationCommandOutput
  | GetOrganizationSecretCommandOutput
  | GetOrganizationSubscriptionPlanCommandOutput
  | GetPublicInvitationDetailsCommandOutput
  | GetPublisherListingConsumerBreakdownCommandOutput
  | GetPublisherListingUsageTimeSeriesCommandOutput
  | GetResourcePoolCommandOutput
  | GetRoleCommandOutput
  | GetSubscriptionPlanCommandOutput
  | GetTaggedWorkflowVersionCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowMetricTimeSeriesCommandOutput
  | GetWorkflowStateCommandOutput
  | GetWorkflowVersionCommandOutput
  | GrantMarketplaceAccessCommandOutput
  | HandleStripeConnectWebhookCommandOutput
  | HandleStripeWebhookCommandOutput
  | IsMarketplaceListingAllowlistedCommandOutput
  | ListAllowlistedMarketplaceListingsCommandOutput
  | ListApiAuthTokensCommandOutput
  | ListBillingPaymentMethodsCommandOutput
  | ListJobsCommandOutput
  | ListMarketplaceListingBillingOverridesCommandOutput
  | ListMarketplaceListingVersionsCommandOutput
  | ListMarketplaceListingsCommandOutput
  | ListMyMarketplaceListingsCommandOutput
  | ListNotificationsCommandOutput
  | ListOrganizationInvitationsForUserCommandOutput
  | ListOrganizationSecretsCommandOutput
  | ListOrganizationUsersAndInvitationsCommandOutput
  | ListOrganizationsCommandOutput
  | ListResourcePoolsCommandOutput
  | ListRolesCommandOutput
  | ListSubscriptionPlansCommandOutput
  | ListWorkflowVersionsCommandOutput
  | ListWorkflowsCommandOutput
  | MarkAllNotificationsReadCommandOutput
  | MarkNotificationReadCommandOutput
  | PublishWorkflowToMarketplaceCommandOutput
  | RegisterWorkflowCommandOutput
  | RegisterWorkflowVersionCommandOutput
  | RejectOrganizationInvitationCommandOutput
  | RemoveOrganizationMembershipCommandOutput
  | ResolveOrganizationSecretCommandOutput
  | ResumeJobCommandOutput
  | RevokeApiAuthTokenCommandOutput
  | RevokeMarketplaceAccessCommandOutput
  | SearchMarketplaceOrganizationsCommandOutput
  | SendJobEventCommandOutput
  | SetWorkflowVersionTagCommandOutput
  | SubmitJobCommandOutput
  | UnallowlistMarketplaceListingCommandOutput
  | UnpublishWorkflowFromMarketplaceCommandOutput
  | UpdateApiAuthTokenCommandOutput
  | UpdateMarketplaceListingBillingCommandOutput
  | UpdateMarketplaceListingMetadataCommandOutput
  | UpdateOrganizationCommandOutput
  | UpdateOrganizationMembershipCommandOutput
  | UpdateOrganizationSecretCommandOutput
  | UpdateResourcePoolCommandOutput
  | UpdateRoleCommandOutput
  | UpsertMarketplaceListingBillingOverrideCommandOutput;

/**
 * @public
 */
export interface ClientDefaults
  extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

}

/**
 * @public
 */
export type JustWorkflowItClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RetryInputConfig
  & RegionInputConfig
  & HostHeaderInputConfig
  & EndpointsInputConfig
  & UserAgentInputConfig
  & HttpAuthSchemeInputConfig
/**
 * @public
 *
 *  The configuration interface of JustWorkflowItClient class constructor that set the region, credentials and other options.
 */
export interface JustWorkflowItClientConfig extends JustWorkflowItClientConfigType {}

/**
 * @public
 */
export type JustWorkflowItClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RuntimeExtensionsConfig
  & RetryResolvedConfig
  & RegionResolvedConfig
  & HostHeaderResolvedConfig
  & EndpointsResolvedConfig
  & UserAgentResolvedConfig
  & HttpAuthSchemeResolvedConfig
/**
 * @public
 *
 *  The resolved configuration interface of JustWorkflowItClient class. This is resolved and normalized from the {@link JustWorkflowItClientConfig | constructor configuration interface}.
 */
export interface JustWorkflowItClientResolvedConfig extends JustWorkflowItClientResolvedConfigType {}

/**
 * @public
 */
export class JustWorkflowItClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  JustWorkflowItClientResolvedConfig
> {
  /**
   * The resolved configuration of JustWorkflowItClient class. This is resolved and normalized from the {@link JustWorkflowItClientConfig | constructor configuration interface}.
   */
  readonly config: JustWorkflowItClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<JustWorkflowItClientConfig>) {
    let _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    let _config_1 = resolveRetryConfig(_config_0);
    let _config_2 = resolveRegionConfig(_config_1);
    let _config_3 = resolveHostHeaderConfig(_config_2);
    let _config_4 = resolveEndpointsConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHttpAuthSchemeConfig(_config_5);
    let _config_7 = resolveRuntimeExtensions(_config_6, configuration?.extensions || []);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config
    ));
    this.middlewareStack.use(getContentLengthPlugin(this.config
    ));
    this.middlewareStack.use(getHttpSigningPlugin(this.config
    ));
    this.middlewareStack.use(getHostHeaderPlugin(this.config
    ));
    this.middlewareStack.use(getLoggerPlugin(this.config
    ));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config
    ));
    this.middlewareStack.use(getUserAgentPlugin(this.config
    ));
    this.middlewareStack.use(getHttpAuthSchemePlugin(this.config
      , {
        httpAuthSchemeParametersProvider: defaultJustWorkflowItHttpAuthSchemeParametersProvider,identityProviderConfigProvider: async (config: JustWorkflowItClientResolvedConfig) => new DefaultIdentityProviderConfig({
          "smithy.api#httpApiKeyAuth": config.apiKey,}), }
    ));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}

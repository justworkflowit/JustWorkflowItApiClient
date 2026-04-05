// smithy-typescript generated code
import {
  JustWorkflowItClient,
  JustWorkflowItClientConfig,
} from "./JustWorkflowItClient";
import {
  AcceptOrganizationInvitationCommand,
  AcceptOrganizationInvitationCommandInput,
  AcceptOrganizationInvitationCommandOutput,
} from "./commands/AcceptOrganizationInvitationCommand";
import {
  AdminBackfillSubscriptionsCommand,
  AdminBackfillSubscriptionsCommandInput,
  AdminBackfillSubscriptionsCommandOutput,
} from "./commands/AdminBackfillSubscriptionsCommand";
import {
  AdminCleanupTestBillingDataCommand,
  AdminCleanupTestBillingDataCommandInput,
  AdminCleanupTestBillingDataCommandOutput,
} from "./commands/AdminCleanupTestBillingDataCommand";
import {
  AdminCreateImpersonationSessionCommand,
  AdminCreateImpersonationSessionCommandInput,
  AdminCreateImpersonationSessionCommandOutput,
} from "./commands/AdminCreateImpersonationSessionCommand";
import {
  AdminCreateRoleCommand,
  AdminCreateRoleCommandInput,
  AdminCreateRoleCommandOutput,
} from "./commands/AdminCreateRoleCommand";
import {
  AdminCreateSubscriptionPlanCommand,
  AdminCreateSubscriptionPlanCommandInput,
  AdminCreateSubscriptionPlanCommandOutput,
} from "./commands/AdminCreateSubscriptionPlanCommand";
import {
  AdminDeleteOrganizationFeatureOverrideCommand,
  AdminDeleteOrganizationFeatureOverrideCommandInput,
  AdminDeleteOrganizationFeatureOverrideCommandOutput,
} from "./commands/AdminDeleteOrganizationFeatureOverrideCommand";
import {
  AdminDeleteRoleCommand,
  AdminDeleteRoleCommandInput,
  AdminDeleteRoleCommandOutput,
} from "./commands/AdminDeleteRoleCommand";
import {
  AdminDeleteSubscriptionPlanCommand,
  AdminDeleteSubscriptionPlanCommandInput,
  AdminDeleteSubscriptionPlanCommandOutput,
} from "./commands/AdminDeleteSubscriptionPlanCommand";
import {
  AdminGenerateInvoicesCommand,
  AdminGenerateInvoicesCommandInput,
  AdminGenerateInvoicesCommandOutput,
} from "./commands/AdminGenerateInvoicesCommand";
import {
  AdminGetBillingHealthCommand,
  AdminGetBillingHealthCommandInput,
  AdminGetBillingHealthCommandOutput,
} from "./commands/AdminGetBillingHealthCommand";
import {
  AdminGetOrganizationCommand,
  AdminGetOrganizationCommandInput,
  AdminGetOrganizationCommandOutput,
} from "./commands/AdminGetOrganizationCommand";
import {
  AdminGetRoleCommand,
  AdminGetRoleCommandInput,
  AdminGetRoleCommandOutput,
} from "./commands/AdminGetRoleCommand";
import {
  AdminGetSubscriptionPlanCommand,
  AdminGetSubscriptionPlanCommandInput,
  AdminGetSubscriptionPlanCommandOutput,
} from "./commands/AdminGetSubscriptionPlanCommand";
import {
  AdminListOrganizationFeatureOverridesCommand,
  AdminListOrganizationFeatureOverridesCommandInput,
  AdminListOrganizationFeatureOverridesCommandOutput,
} from "./commands/AdminListOrganizationFeatureOverridesCommand";
import {
  AdminListOrganizationMembersCommand,
  AdminListOrganizationMembersCommandInput,
  AdminListOrganizationMembersCommandOutput,
} from "./commands/AdminListOrganizationMembersCommand";
import {
  AdminListOrganizationsCommand,
  AdminListOrganizationsCommandInput,
  AdminListOrganizationsCommandOutput,
} from "./commands/AdminListOrganizationsCommand";
import {
  AdminListRolesCommand,
  AdminListRolesCommandInput,
  AdminListRolesCommandOutput,
} from "./commands/AdminListRolesCommand";
import {
  AdminListSubscriptionPlansCommand,
  AdminListSubscriptionPlansCommandInput,
  AdminListSubscriptionPlansCommandOutput,
} from "./commands/AdminListSubscriptionPlansCommand";
import {
  AdminSendTestInvoiceCommand,
  AdminSendTestInvoiceCommandInput,
  AdminSendTestInvoiceCommandOutput,
} from "./commands/AdminSendTestInvoiceCommand";
import {
  AdminSetOrganizationFeatureOverrideCommand,
  AdminSetOrganizationFeatureOverrideCommandInput,
  AdminSetOrganizationFeatureOverrideCommandOutput,
} from "./commands/AdminSetOrganizationFeatureOverrideCommand";
import {
  AdminTriggerUsageSyncCommand,
  AdminTriggerUsageSyncCommandInput,
  AdminTriggerUsageSyncCommandOutput,
} from "./commands/AdminTriggerUsageSyncCommand";
import {
  AdminUpdateOrganizationSubscriptionPlanCommand,
  AdminUpdateOrganizationSubscriptionPlanCommandInput,
  AdminUpdateOrganizationSubscriptionPlanCommandOutput,
} from "./commands/AdminUpdateOrganizationSubscriptionPlanCommand";
import {
  AdminUpdateRoleCommand,
  AdminUpdateRoleCommandInput,
  AdminUpdateRoleCommandOutput,
} from "./commands/AdminUpdateRoleCommand";
import {
  AdminUpdateSubscriptionPlanCommand,
  AdminUpdateSubscriptionPlanCommandInput,
  AdminUpdateSubscriptionPlanCommandOutput,
} from "./commands/AdminUpdateSubscriptionPlanCommand";
import {
  AllowlistMarketplaceListingCommand,
  AllowlistMarketplaceListingCommandInput,
  AllowlistMarketplaceListingCommandOutput,
} from "./commands/AllowlistMarketplaceListingCommand";
import {
  CancelJobCommand,
  CancelJobCommandInput,
  CancelJobCommandOutput,
} from "./commands/CancelJobCommand";
import {
  CancelOrganizationInvitationCommand,
  CancelOrganizationInvitationCommandInput,
  CancelOrganizationInvitationCommandOutput,
} from "./commands/CancelOrganizationInvitationCommand";
import {
  ChangeOrganizationSubscriptionPlanCommand,
  ChangeOrganizationSubscriptionPlanCommandInput,
  ChangeOrganizationSubscriptionPlanCommandOutput,
} from "./commands/ChangeOrganizationSubscriptionPlanCommand";
import {
  CreateApiAuthTokenCommand,
  CreateApiAuthTokenCommandInput,
  CreateApiAuthTokenCommandOutput,
} from "./commands/CreateApiAuthTokenCommand";
import {
  CreateBillingSetupIntentCommand,
  CreateBillingSetupIntentCommandInput,
  CreateBillingSetupIntentCommandOutput,
} from "./commands/CreateBillingSetupIntentCommand";
import {
  CreateConnectOnboardingLinkCommand,
  CreateConnectOnboardingLinkCommandInput,
  CreateConnectOnboardingLinkCommandOutput,
} from "./commands/CreateConnectOnboardingLinkCommand";
import {
  CreateInterestCommand,
  CreateInterestCommandInput,
  CreateInterestCommandOutput,
} from "./commands/CreateInterestCommand";
import {
  CreateMarketplaceListingVersionCommand,
  CreateMarketplaceListingVersionCommandInput,
  CreateMarketplaceListingVersionCommandOutput,
} from "./commands/CreateMarketplaceListingVersionCommand";
import {
  CreateOrganizationCommand,
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
} from "./commands/CreateOrganizationCommand";
import {
  CreateOrganizationInvitationCommand,
  CreateOrganizationInvitationCommandInput,
  CreateOrganizationInvitationCommandOutput,
} from "./commands/CreateOrganizationInvitationCommand";
import {
  CreateOrganizationSecretCommand,
  CreateOrganizationSecretCommandInput,
  CreateOrganizationSecretCommandOutput,
} from "./commands/CreateOrganizationSecretCommand";
import {
  CreateResourcePoolCommand,
  CreateResourcePoolCommandInput,
  CreateResourcePoolCommandOutput,
} from "./commands/CreateResourcePoolCommand";
import {
  CreateRoleCommand,
  CreateRoleCommandInput,
  CreateRoleCommandOutput,
} from "./commands/CreateRoleCommand";
import {
  DeleteBillingPaymentMethodCommand,
  DeleteBillingPaymentMethodCommandInput,
  DeleteBillingPaymentMethodCommandOutput,
} from "./commands/DeleteBillingPaymentMethodCommand";
import {
  DeleteMarketplaceListingBillingOverrideCommand,
  DeleteMarketplaceListingBillingOverrideCommandInput,
  DeleteMarketplaceListingBillingOverrideCommandOutput,
} from "./commands/DeleteMarketplaceListingBillingOverrideCommand";
import {
  DeleteOrganizationCommand,
  DeleteOrganizationCommandInput,
  DeleteOrganizationCommandOutput,
} from "./commands/DeleteOrganizationCommand";
import {
  DeleteOrganizationSecretCommand,
  DeleteOrganizationSecretCommandInput,
  DeleteOrganizationSecretCommandOutput,
} from "./commands/DeleteOrganizationSecretCommand";
import {
  DeleteResourcePoolCommand,
  DeleteResourcePoolCommandInput,
  DeleteResourcePoolCommandOutput,
} from "./commands/DeleteResourcePoolCommand";
import {
  DeleteRoleCommand,
  DeleteRoleCommandInput,
  DeleteRoleCommandOutput,
} from "./commands/DeleteRoleCommand";
import {
  GetApiAuthTokenCommand,
  GetApiAuthTokenCommandInput,
  GetApiAuthTokenCommandOutput,
} from "./commands/GetApiAuthTokenCommand";
import {
  GetConnectAccountStatusCommand,
  GetConnectAccountStatusCommandInput,
  GetConnectAccountStatusCommandOutput,
} from "./commands/GetConnectAccountStatusCommand";
import {
  GetConsumerListingUsageTimeSeriesCommand,
  GetConsumerListingUsageTimeSeriesCommandInput,
  GetConsumerListingUsageTimeSeriesCommandOutput,
} from "./commands/GetConsumerListingUsageTimeSeriesCommand";
import {
  GetJobCommand,
  GetJobCommandInput,
  GetJobCommandOutput,
} from "./commands/GetJobCommand";
import {
  GetMarketplaceListingCommand,
  GetMarketplaceListingCommandInput,
  GetMarketplaceListingCommandOutput,
} from "./commands/GetMarketplaceListingCommand";
import {
  GetMarketplaceListingVersionCommand,
  GetMarketplaceListingVersionCommandInput,
  GetMarketplaceListingVersionCommandOutput,
} from "./commands/GetMarketplaceListingVersionCommand";
import {
  GetMyPermissionsCommand,
  GetMyPermissionsCommandInput,
  GetMyPermissionsCommandOutput,
} from "./commands/GetMyPermissionsCommand";
import {
  GetOrganizationCommand,
  GetOrganizationCommandInput,
  GetOrganizationCommandOutput,
} from "./commands/GetOrganizationCommand";
import {
  GetOrganizationInvitationCommand,
  GetOrganizationInvitationCommandInput,
  GetOrganizationInvitationCommandOutput,
} from "./commands/GetOrganizationInvitationCommand";
import {
  GetOrganizationSecretCommand,
  GetOrganizationSecretCommandInput,
  GetOrganizationSecretCommandOutput,
} from "./commands/GetOrganizationSecretCommand";
import {
  GetOrganizationSubscriptionPlanCommand,
  GetOrganizationSubscriptionPlanCommandInput,
  GetOrganizationSubscriptionPlanCommandOutput,
} from "./commands/GetOrganizationSubscriptionPlanCommand";
import {
  GetPublicInvitationDetailsCommand,
  GetPublicInvitationDetailsCommandInput,
  GetPublicInvitationDetailsCommandOutput,
} from "./commands/GetPublicInvitationDetailsCommand";
import {
  GetPublisherListingConsumerBreakdownCommand,
  GetPublisherListingConsumerBreakdownCommandInput,
  GetPublisherListingConsumerBreakdownCommandOutput,
} from "./commands/GetPublisherListingConsumerBreakdownCommand";
import {
  GetPublisherListingUsageTimeSeriesCommand,
  GetPublisherListingUsageTimeSeriesCommandInput,
  GetPublisherListingUsageTimeSeriesCommandOutput,
} from "./commands/GetPublisherListingUsageTimeSeriesCommand";
import {
  GetResourcePoolCommand,
  GetResourcePoolCommandInput,
  GetResourcePoolCommandOutput,
} from "./commands/GetResourcePoolCommand";
import {
  GetRoleCommand,
  GetRoleCommandInput,
  GetRoleCommandOutput,
} from "./commands/GetRoleCommand";
import {
  GetSubscriptionPlanCommand,
  GetSubscriptionPlanCommandInput,
  GetSubscriptionPlanCommandOutput,
} from "./commands/GetSubscriptionPlanCommand";
import {
  GetTaggedWorkflowVersionCommand,
  GetTaggedWorkflowVersionCommandInput,
  GetTaggedWorkflowVersionCommandOutput,
} from "./commands/GetTaggedWorkflowVersionCommand";
import {
  GetWorkflowCommand,
  GetWorkflowCommandInput,
  GetWorkflowCommandOutput,
} from "./commands/GetWorkflowCommand";
import {
  GetWorkflowMetricTimeSeriesCommand,
  GetWorkflowMetricTimeSeriesCommandInput,
  GetWorkflowMetricTimeSeriesCommandOutput,
} from "./commands/GetWorkflowMetricTimeSeriesCommand";
import {
  GetWorkflowStateCommand,
  GetWorkflowStateCommandInput,
  GetWorkflowStateCommandOutput,
} from "./commands/GetWorkflowStateCommand";
import {
  GetWorkflowStateMetadataCommand,
  GetWorkflowStateMetadataCommandInput,
  GetWorkflowStateMetadataCommandOutput,
} from "./commands/GetWorkflowStateMetadataCommand";
import {
  GetWorkflowVersionCommand,
  GetWorkflowVersionCommandInput,
  GetWorkflowVersionCommandOutput,
} from "./commands/GetWorkflowVersionCommand";
import {
  GrantMarketplaceAccessCommand,
  GrantMarketplaceAccessCommandInput,
  GrantMarketplaceAccessCommandOutput,
} from "./commands/GrantMarketplaceAccessCommand";
import {
  HandleStripeConnectWebhookCommand,
  HandleStripeConnectWebhookCommandInput,
  HandleStripeConnectWebhookCommandOutput,
} from "./commands/HandleStripeConnectWebhookCommand";
import {
  HandleStripeWebhookCommand,
  HandleStripeWebhookCommandInput,
  HandleStripeWebhookCommandOutput,
} from "./commands/HandleStripeWebhookCommand";
import {
  IsMarketplaceListingAllowlistedCommand,
  IsMarketplaceListingAllowlistedCommandInput,
  IsMarketplaceListingAllowlistedCommandOutput,
} from "./commands/IsMarketplaceListingAllowlistedCommand";
import {
  ListAllowlistedMarketplaceListingsCommand,
  ListAllowlistedMarketplaceListingsCommandInput,
  ListAllowlistedMarketplaceListingsCommandOutput,
} from "./commands/ListAllowlistedMarketplaceListingsCommand";
import {
  ListApiAuthTokensCommand,
  ListApiAuthTokensCommandInput,
  ListApiAuthTokensCommandOutput,
} from "./commands/ListApiAuthTokensCommand";
import {
  ListBillingPaymentMethodsCommand,
  ListBillingPaymentMethodsCommandInput,
  ListBillingPaymentMethodsCommandOutput,
} from "./commands/ListBillingPaymentMethodsCommand";
import {
  ListJobsCommand,
  ListJobsCommandInput,
  ListJobsCommandOutput,
} from "./commands/ListJobsCommand";
import {
  ListMarketplaceListingBillingOverridesCommand,
  ListMarketplaceListingBillingOverridesCommandInput,
  ListMarketplaceListingBillingOverridesCommandOutput,
} from "./commands/ListMarketplaceListingBillingOverridesCommand";
import {
  ListMarketplaceListingVersionsCommand,
  ListMarketplaceListingVersionsCommandInput,
  ListMarketplaceListingVersionsCommandOutput,
} from "./commands/ListMarketplaceListingVersionsCommand";
import {
  ListMarketplaceListingsCommand,
  ListMarketplaceListingsCommandInput,
  ListMarketplaceListingsCommandOutput,
} from "./commands/ListMarketplaceListingsCommand";
import {
  ListMyMarketplaceListingsCommand,
  ListMyMarketplaceListingsCommandInput,
  ListMyMarketplaceListingsCommandOutput,
} from "./commands/ListMyMarketplaceListingsCommand";
import {
  ListNotificationsCommand,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "./commands/ListNotificationsCommand";
import {
  ListOrganizationInvitationsForUserCommand,
  ListOrganizationInvitationsForUserCommandInput,
  ListOrganizationInvitationsForUserCommandOutput,
} from "./commands/ListOrganizationInvitationsForUserCommand";
import {
  ListOrganizationSecretsCommand,
  ListOrganizationSecretsCommandInput,
  ListOrganizationSecretsCommandOutput,
} from "./commands/ListOrganizationSecretsCommand";
import {
  ListOrganizationUsersAndInvitationsCommand,
  ListOrganizationUsersAndInvitationsCommandInput,
  ListOrganizationUsersAndInvitationsCommandOutput,
} from "./commands/ListOrganizationUsersAndInvitationsCommand";
import {
  ListOrganizationsCommand,
  ListOrganizationsCommandInput,
  ListOrganizationsCommandOutput,
} from "./commands/ListOrganizationsCommand";
import {
  ListResourcePoolsCommand,
  ListResourcePoolsCommandInput,
  ListResourcePoolsCommandOutput,
} from "./commands/ListResourcePoolsCommand";
import {
  ListRolesCommand,
  ListRolesCommandInput,
  ListRolesCommandOutput,
} from "./commands/ListRolesCommand";
import {
  ListSubscriptionPlansCommand,
  ListSubscriptionPlansCommandInput,
  ListSubscriptionPlansCommandOutput,
} from "./commands/ListSubscriptionPlansCommand";
import {
  ListWorkflowVersionsCommand,
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput,
} from "./commands/ListWorkflowVersionsCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  MarkAllNotificationsReadCommand,
  MarkAllNotificationsReadCommandInput,
  MarkAllNotificationsReadCommandOutput,
} from "./commands/MarkAllNotificationsReadCommand";
import {
  MarkNotificationReadCommand,
  MarkNotificationReadCommandInput,
  MarkNotificationReadCommandOutput,
} from "./commands/MarkNotificationReadCommand";
import {
  PublishWorkflowToMarketplaceCommand,
  PublishWorkflowToMarketplaceCommandInput,
  PublishWorkflowToMarketplaceCommandOutput,
} from "./commands/PublishWorkflowToMarketplaceCommand";
import {
  RegisterWorkflowCommand,
  RegisterWorkflowCommandInput,
  RegisterWorkflowCommandOutput,
} from "./commands/RegisterWorkflowCommand";
import {
  RegisterWorkflowVersionCommand,
  RegisterWorkflowVersionCommandInput,
  RegisterWorkflowVersionCommandOutput,
} from "./commands/RegisterWorkflowVersionCommand";
import {
  RejectOrganizationInvitationCommand,
  RejectOrganizationInvitationCommandInput,
  RejectOrganizationInvitationCommandOutput,
} from "./commands/RejectOrganizationInvitationCommand";
import {
  RemoveOrganizationMembershipCommand,
  RemoveOrganizationMembershipCommandInput,
  RemoveOrganizationMembershipCommandOutput,
} from "./commands/RemoveOrganizationMembershipCommand";
import {
  ResolveOrganizationSecretCommand,
  ResolveOrganizationSecretCommandInput,
  ResolveOrganizationSecretCommandOutput,
} from "./commands/ResolveOrganizationSecretCommand";
import {
  ResumeJobCommand,
  ResumeJobCommandInput,
  ResumeJobCommandOutput,
} from "./commands/ResumeJobCommand";
import {
  RevokeApiAuthTokenCommand,
  RevokeApiAuthTokenCommandInput,
  RevokeApiAuthTokenCommandOutput,
} from "./commands/RevokeApiAuthTokenCommand";
import {
  RevokeMarketplaceAccessCommand,
  RevokeMarketplaceAccessCommandInput,
  RevokeMarketplaceAccessCommandOutput,
} from "./commands/RevokeMarketplaceAccessCommand";
import {
  SearchMarketplaceOrganizationsCommand,
  SearchMarketplaceOrganizationsCommandInput,
  SearchMarketplaceOrganizationsCommandOutput,
} from "./commands/SearchMarketplaceOrganizationsCommand";
import {
  SendJobEventCommand,
  SendJobEventCommandInput,
  SendJobEventCommandOutput,
} from "./commands/SendJobEventCommand";
import {
  SetWorkflowVersionTagCommand,
  SetWorkflowVersionTagCommandInput,
  SetWorkflowVersionTagCommandOutput,
} from "./commands/SetWorkflowVersionTagCommand";
import {
  SubmitJobCommand,
  SubmitJobCommandInput,
  SubmitJobCommandOutput,
} from "./commands/SubmitJobCommand";
import {
  UnallowlistMarketplaceListingCommand,
  UnallowlistMarketplaceListingCommandInput,
  UnallowlistMarketplaceListingCommandOutput,
} from "./commands/UnallowlistMarketplaceListingCommand";
import {
  UnpublishWorkflowFromMarketplaceCommand,
  UnpublishWorkflowFromMarketplaceCommandInput,
  UnpublishWorkflowFromMarketplaceCommandOutput,
} from "./commands/UnpublishWorkflowFromMarketplaceCommand";
import {
  UpdateApiAuthTokenCommand,
  UpdateApiAuthTokenCommandInput,
  UpdateApiAuthTokenCommandOutput,
} from "./commands/UpdateApiAuthTokenCommand";
import {
  UpdateMarketplaceListingBillingCommand,
  UpdateMarketplaceListingBillingCommandInput,
  UpdateMarketplaceListingBillingCommandOutput,
} from "./commands/UpdateMarketplaceListingBillingCommand";
import {
  UpdateMarketplaceListingMetadataCommand,
  UpdateMarketplaceListingMetadataCommandInput,
  UpdateMarketplaceListingMetadataCommandOutput,
} from "./commands/UpdateMarketplaceListingMetadataCommand";
import {
  UpdateOrganizationCommand,
  UpdateOrganizationCommandInput,
  UpdateOrganizationCommandOutput,
} from "./commands/UpdateOrganizationCommand";
import {
  UpdateOrganizationMembershipCommand,
  UpdateOrganizationMembershipCommandInput,
  UpdateOrganizationMembershipCommandOutput,
} from "./commands/UpdateOrganizationMembershipCommand";
import {
  UpdateOrganizationSecretCommand,
  UpdateOrganizationSecretCommandInput,
  UpdateOrganizationSecretCommandOutput,
} from "./commands/UpdateOrganizationSecretCommand";
import {
  UpdateResourcePoolCommand,
  UpdateResourcePoolCommandInput,
  UpdateResourcePoolCommandOutput,
} from "./commands/UpdateResourcePoolCommand";
import {
  UpdateRoleCommand,
  UpdateRoleCommandInput,
  UpdateRoleCommandOutput,
} from "./commands/UpdateRoleCommand";
import {
  UpsertMarketplaceListingBillingOverrideCommand,
  UpsertMarketplaceListingBillingOverrideCommandInput,
  UpsertMarketplaceListingBillingOverrideCommandOutput,
} from "./commands/UpsertMarketplaceListingBillingOverrideCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  AcceptOrganizationInvitationCommand,
  AdminBackfillSubscriptionsCommand,
  AdminCleanupTestBillingDataCommand,
  AdminCreateImpersonationSessionCommand,
  AdminCreateRoleCommand,
  AdminCreateSubscriptionPlanCommand,
  AdminDeleteOrganizationFeatureOverrideCommand,
  AdminDeleteRoleCommand,
  AdminDeleteSubscriptionPlanCommand,
  AdminGenerateInvoicesCommand,
  AdminGetBillingHealthCommand,
  AdminGetOrganizationCommand,
  AdminGetRoleCommand,
  AdminGetSubscriptionPlanCommand,
  AdminListOrganizationFeatureOverridesCommand,
  AdminListOrganizationMembersCommand,
  AdminListOrganizationsCommand,
  AdminListRolesCommand,
  AdminListSubscriptionPlansCommand,
  AdminSendTestInvoiceCommand,
  AdminSetOrganizationFeatureOverrideCommand,
  AdminTriggerUsageSyncCommand,
  AdminUpdateOrganizationSubscriptionPlanCommand,
  AdminUpdateRoleCommand,
  AdminUpdateSubscriptionPlanCommand,
  AllowlistMarketplaceListingCommand,
  CancelJobCommand,
  CancelOrganizationInvitationCommand,
  ChangeOrganizationSubscriptionPlanCommand,
  CreateApiAuthTokenCommand,
  CreateBillingSetupIntentCommand,
  CreateConnectOnboardingLinkCommand,
  CreateInterestCommand,
  CreateMarketplaceListingVersionCommand,
  CreateOrganizationCommand,
  CreateOrganizationInvitationCommand,
  CreateOrganizationSecretCommand,
  CreateResourcePoolCommand,
  CreateRoleCommand,
  DeleteBillingPaymentMethodCommand,
  DeleteMarketplaceListingBillingOverrideCommand,
  DeleteOrganizationCommand,
  DeleteOrganizationSecretCommand,
  DeleteResourcePoolCommand,
  DeleteRoleCommand,
  GetApiAuthTokenCommand,
  GetConnectAccountStatusCommand,
  GetConsumerListingUsageTimeSeriesCommand,
  GetJobCommand,
  GetMarketplaceListingCommand,
  GetMarketplaceListingVersionCommand,
  GetMyPermissionsCommand,
  GetOrganizationCommand,
  GetOrganizationInvitationCommand,
  GetOrganizationSecretCommand,
  GetOrganizationSubscriptionPlanCommand,
  GetPublicInvitationDetailsCommand,
  GetPublisherListingConsumerBreakdownCommand,
  GetPublisherListingUsageTimeSeriesCommand,
  GetResourcePoolCommand,
  GetRoleCommand,
  GetSubscriptionPlanCommand,
  GetTaggedWorkflowVersionCommand,
  GetWorkflowCommand,
  GetWorkflowMetricTimeSeriesCommand,
  GetWorkflowStateCommand,
  GetWorkflowStateMetadataCommand,
  GetWorkflowVersionCommand,
  GrantMarketplaceAccessCommand,
  HandleStripeConnectWebhookCommand,
  HandleStripeWebhookCommand,
  IsMarketplaceListingAllowlistedCommand,
  ListAllowlistedMarketplaceListingsCommand,
  ListApiAuthTokensCommand,
  ListBillingPaymentMethodsCommand,
  ListJobsCommand,
  ListMarketplaceListingBillingOverridesCommand,
  ListMarketplaceListingsCommand,
  ListMarketplaceListingVersionsCommand,
  ListMyMarketplaceListingsCommand,
  ListNotificationsCommand,
  ListOrganizationInvitationsForUserCommand,
  ListOrganizationsCommand,
  ListOrganizationSecretsCommand,
  ListOrganizationUsersAndInvitationsCommand,
  ListResourcePoolsCommand,
  ListRolesCommand,
  ListSubscriptionPlansCommand,
  ListWorkflowsCommand,
  ListWorkflowVersionsCommand,
  MarkAllNotificationsReadCommand,
  MarkNotificationReadCommand,
  PublishWorkflowToMarketplaceCommand,
  RegisterWorkflowCommand,
  RegisterWorkflowVersionCommand,
  RejectOrganizationInvitationCommand,
  RemoveOrganizationMembershipCommand,
  ResolveOrganizationSecretCommand,
  ResumeJobCommand,
  RevokeApiAuthTokenCommand,
  RevokeMarketplaceAccessCommand,
  SearchMarketplaceOrganizationsCommand,
  SendJobEventCommand,
  SetWorkflowVersionTagCommand,
  SubmitJobCommand,
  UnallowlistMarketplaceListingCommand,
  UnpublishWorkflowFromMarketplaceCommand,
  UpdateApiAuthTokenCommand,
  UpdateMarketplaceListingBillingCommand,
  UpdateMarketplaceListingMetadataCommand,
  UpdateOrganizationCommand,
  UpdateOrganizationMembershipCommand,
  UpdateOrganizationSecretCommand,
  UpdateResourcePoolCommand,
  UpdateRoleCommand,
  UpsertMarketplaceListingBillingOverrideCommand,
}

export interface JustWorkflowIt {
  /**
   * @see {@link AcceptOrganizationInvitationCommand}
   */
  acceptOrganizationInvitation(
    args: AcceptOrganizationInvitationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AcceptOrganizationInvitationCommandOutput>;
  acceptOrganizationInvitation(
    args: AcceptOrganizationInvitationCommandInput,
    cb: (err: any, data?: AcceptOrganizationInvitationCommandOutput) => void
  ): void;
  acceptOrganizationInvitation(
    args: AcceptOrganizationInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptOrganizationInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminBackfillSubscriptionsCommand}
   */
  adminBackfillSubscriptions(): Promise<AdminBackfillSubscriptionsCommandOutput>;
  adminBackfillSubscriptions(
    args: AdminBackfillSubscriptionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminBackfillSubscriptionsCommandOutput>;
  adminBackfillSubscriptions(
    args: AdminBackfillSubscriptionsCommandInput,
    cb: (err: any, data?: AdminBackfillSubscriptionsCommandOutput) => void
  ): void;
  adminBackfillSubscriptions(
    args: AdminBackfillSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminBackfillSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminCleanupTestBillingDataCommand}
   */
  adminCleanupTestBillingData(
    args: AdminCleanupTestBillingDataCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminCleanupTestBillingDataCommandOutput>;
  adminCleanupTestBillingData(
    args: AdminCleanupTestBillingDataCommandInput,
    cb: (err: any, data?: AdminCleanupTestBillingDataCommandOutput) => void
  ): void;
  adminCleanupTestBillingData(
    args: AdminCleanupTestBillingDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminCleanupTestBillingDataCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminCreateImpersonationSessionCommand}
   */
  adminCreateImpersonationSession(
    args: AdminCreateImpersonationSessionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminCreateImpersonationSessionCommandOutput>;
  adminCreateImpersonationSession(
    args: AdminCreateImpersonationSessionCommandInput,
    cb: (err: any, data?: AdminCreateImpersonationSessionCommandOutput) => void
  ): void;
  adminCreateImpersonationSession(
    args: AdminCreateImpersonationSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminCreateImpersonationSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminCreateRoleCommand}
   */
  adminCreateRole(
    args: AdminCreateRoleCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminCreateRoleCommandOutput>;
  adminCreateRole(
    args: AdminCreateRoleCommandInput,
    cb: (err: any, data?: AdminCreateRoleCommandOutput) => void
  ): void;
  adminCreateRole(
    args: AdminCreateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminCreateRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminCreateSubscriptionPlanCommand}
   */
  adminCreateSubscriptionPlan(
    args: AdminCreateSubscriptionPlanCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminCreateSubscriptionPlanCommandOutput>;
  adminCreateSubscriptionPlan(
    args: AdminCreateSubscriptionPlanCommandInput,
    cb: (err: any, data?: AdminCreateSubscriptionPlanCommandOutput) => void
  ): void;
  adminCreateSubscriptionPlan(
    args: AdminCreateSubscriptionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminCreateSubscriptionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDeleteOrganizationFeatureOverrideCommand}
   */
  adminDeleteOrganizationFeatureOverride(
    args: AdminDeleteOrganizationFeatureOverrideCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminDeleteOrganizationFeatureOverrideCommandOutput>;
  adminDeleteOrganizationFeatureOverride(
    args: AdminDeleteOrganizationFeatureOverrideCommandInput,
    cb: (err: any, data?: AdminDeleteOrganizationFeatureOverrideCommandOutput) => void
  ): void;
  adminDeleteOrganizationFeatureOverride(
    args: AdminDeleteOrganizationFeatureOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDeleteOrganizationFeatureOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDeleteRoleCommand}
   */
  adminDeleteRole(
    args: AdminDeleteRoleCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminDeleteRoleCommandOutput>;
  adminDeleteRole(
    args: AdminDeleteRoleCommandInput,
    cb: (err: any, data?: AdminDeleteRoleCommandOutput) => void
  ): void;
  adminDeleteRole(
    args: AdminDeleteRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDeleteRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDeleteSubscriptionPlanCommand}
   */
  adminDeleteSubscriptionPlan(
    args: AdminDeleteSubscriptionPlanCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminDeleteSubscriptionPlanCommandOutput>;
  adminDeleteSubscriptionPlan(
    args: AdminDeleteSubscriptionPlanCommandInput,
    cb: (err: any, data?: AdminDeleteSubscriptionPlanCommandOutput) => void
  ): void;
  adminDeleteSubscriptionPlan(
    args: AdminDeleteSubscriptionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDeleteSubscriptionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGenerateInvoicesCommand}
   */
  adminGenerateInvoices(
    args: AdminGenerateInvoicesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminGenerateInvoicesCommandOutput>;
  adminGenerateInvoices(
    args: AdminGenerateInvoicesCommandInput,
    cb: (err: any, data?: AdminGenerateInvoicesCommandOutput) => void
  ): void;
  adminGenerateInvoices(
    args: AdminGenerateInvoicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminGenerateInvoicesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGetBillingHealthCommand}
   */
  adminGetBillingHealth(): Promise<AdminGetBillingHealthCommandOutput>;
  adminGetBillingHealth(
    args: AdminGetBillingHealthCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminGetBillingHealthCommandOutput>;
  adminGetBillingHealth(
    args: AdminGetBillingHealthCommandInput,
    cb: (err: any, data?: AdminGetBillingHealthCommandOutput) => void
  ): void;
  adminGetBillingHealth(
    args: AdminGetBillingHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminGetBillingHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGetOrganizationCommand}
   */
  adminGetOrganization(
    args: AdminGetOrganizationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminGetOrganizationCommandOutput>;
  adminGetOrganization(
    args: AdminGetOrganizationCommandInput,
    cb: (err: any, data?: AdminGetOrganizationCommandOutput) => void
  ): void;
  adminGetOrganization(
    args: AdminGetOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminGetOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGetRoleCommand}
   */
  adminGetRole(
    args: AdminGetRoleCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminGetRoleCommandOutput>;
  adminGetRole(
    args: AdminGetRoleCommandInput,
    cb: (err: any, data?: AdminGetRoleCommandOutput) => void
  ): void;
  adminGetRole(
    args: AdminGetRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminGetRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGetSubscriptionPlanCommand}
   */
  adminGetSubscriptionPlan(
    args: AdminGetSubscriptionPlanCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminGetSubscriptionPlanCommandOutput>;
  adminGetSubscriptionPlan(
    args: AdminGetSubscriptionPlanCommandInput,
    cb: (err: any, data?: AdminGetSubscriptionPlanCommandOutput) => void
  ): void;
  adminGetSubscriptionPlan(
    args: AdminGetSubscriptionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminGetSubscriptionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListOrganizationFeatureOverridesCommand}
   */
  adminListOrganizationFeatureOverrides(
    args: AdminListOrganizationFeatureOverridesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminListOrganizationFeatureOverridesCommandOutput>;
  adminListOrganizationFeatureOverrides(
    args: AdminListOrganizationFeatureOverridesCommandInput,
    cb: (err: any, data?: AdminListOrganizationFeatureOverridesCommandOutput) => void
  ): void;
  adminListOrganizationFeatureOverrides(
    args: AdminListOrganizationFeatureOverridesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListOrganizationFeatureOverridesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListOrganizationMembersCommand}
   */
  adminListOrganizationMembers(
    args: AdminListOrganizationMembersCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminListOrganizationMembersCommandOutput>;
  adminListOrganizationMembers(
    args: AdminListOrganizationMembersCommandInput,
    cb: (err: any, data?: AdminListOrganizationMembersCommandOutput) => void
  ): void;
  adminListOrganizationMembers(
    args: AdminListOrganizationMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListOrganizationMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListOrganizationsCommand}
   */
  adminListOrganizations(): Promise<AdminListOrganizationsCommandOutput>;
  adminListOrganizations(
    args: AdminListOrganizationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminListOrganizationsCommandOutput>;
  adminListOrganizations(
    args: AdminListOrganizationsCommandInput,
    cb: (err: any, data?: AdminListOrganizationsCommandOutput) => void
  ): void;
  adminListOrganizations(
    args: AdminListOrganizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListOrganizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListRolesCommand}
   */
  adminListRoles(
    args: AdminListRolesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminListRolesCommandOutput>;
  adminListRoles(
    args: AdminListRolesCommandInput,
    cb: (err: any, data?: AdminListRolesCommandOutput) => void
  ): void;
  adminListRoles(
    args: AdminListRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListSubscriptionPlansCommand}
   */
  adminListSubscriptionPlans(): Promise<AdminListSubscriptionPlansCommandOutput>;
  adminListSubscriptionPlans(
    args: AdminListSubscriptionPlansCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminListSubscriptionPlansCommandOutput>;
  adminListSubscriptionPlans(
    args: AdminListSubscriptionPlansCommandInput,
    cb: (err: any, data?: AdminListSubscriptionPlansCommandOutput) => void
  ): void;
  adminListSubscriptionPlans(
    args: AdminListSubscriptionPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListSubscriptionPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminSendTestInvoiceCommand}
   */
  adminSendTestInvoice(
    args: AdminSendTestInvoiceCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminSendTestInvoiceCommandOutput>;
  adminSendTestInvoice(
    args: AdminSendTestInvoiceCommandInput,
    cb: (err: any, data?: AdminSendTestInvoiceCommandOutput) => void
  ): void;
  adminSendTestInvoice(
    args: AdminSendTestInvoiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminSendTestInvoiceCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminSetOrganizationFeatureOverrideCommand}
   */
  adminSetOrganizationFeatureOverride(
    args: AdminSetOrganizationFeatureOverrideCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminSetOrganizationFeatureOverrideCommandOutput>;
  adminSetOrganizationFeatureOverride(
    args: AdminSetOrganizationFeatureOverrideCommandInput,
    cb: (err: any, data?: AdminSetOrganizationFeatureOverrideCommandOutput) => void
  ): void;
  adminSetOrganizationFeatureOverride(
    args: AdminSetOrganizationFeatureOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminSetOrganizationFeatureOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminTriggerUsageSyncCommand}
   */
  adminTriggerUsageSync(): Promise<AdminTriggerUsageSyncCommandOutput>;
  adminTriggerUsageSync(
    args: AdminTriggerUsageSyncCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminTriggerUsageSyncCommandOutput>;
  adminTriggerUsageSync(
    args: AdminTriggerUsageSyncCommandInput,
    cb: (err: any, data?: AdminTriggerUsageSyncCommandOutput) => void
  ): void;
  adminTriggerUsageSync(
    args: AdminTriggerUsageSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminTriggerUsageSyncCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUpdateOrganizationSubscriptionPlanCommand}
   */
  adminUpdateOrganizationSubscriptionPlan(
    args: AdminUpdateOrganizationSubscriptionPlanCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminUpdateOrganizationSubscriptionPlanCommandOutput>;
  adminUpdateOrganizationSubscriptionPlan(
    args: AdminUpdateOrganizationSubscriptionPlanCommandInput,
    cb: (err: any, data?: AdminUpdateOrganizationSubscriptionPlanCommandOutput) => void
  ): void;
  adminUpdateOrganizationSubscriptionPlan(
    args: AdminUpdateOrganizationSubscriptionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUpdateOrganizationSubscriptionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUpdateRoleCommand}
   */
  adminUpdateRole(
    args: AdminUpdateRoleCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminUpdateRoleCommandOutput>;
  adminUpdateRole(
    args: AdminUpdateRoleCommandInput,
    cb: (err: any, data?: AdminUpdateRoleCommandOutput) => void
  ): void;
  adminUpdateRole(
    args: AdminUpdateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUpdateRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUpdateSubscriptionPlanCommand}
   */
  adminUpdateSubscriptionPlan(
    args: AdminUpdateSubscriptionPlanCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AdminUpdateSubscriptionPlanCommandOutput>;
  adminUpdateSubscriptionPlan(
    args: AdminUpdateSubscriptionPlanCommandInput,
    cb: (err: any, data?: AdminUpdateSubscriptionPlanCommandOutput) => void
  ): void;
  adminUpdateSubscriptionPlan(
    args: AdminUpdateSubscriptionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUpdateSubscriptionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link AllowlistMarketplaceListingCommand}
   */
  allowlistMarketplaceListing(
    args: AllowlistMarketplaceListingCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<AllowlistMarketplaceListingCommandOutput>;
  allowlistMarketplaceListing(
    args: AllowlistMarketplaceListingCommandInput,
    cb: (err: any, data?: AllowlistMarketplaceListingCommandOutput) => void
  ): void;
  allowlistMarketplaceListing(
    args: AllowlistMarketplaceListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllowlistMarketplaceListingCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(
    args: CancelJobCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CancelJobCommandOutput>;
  cancelJob(
    args: CancelJobCommandInput,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelOrganizationInvitationCommand}
   */
  cancelOrganizationInvitation(
    args: CancelOrganizationInvitationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CancelOrganizationInvitationCommandOutput>;
  cancelOrganizationInvitation(
    args: CancelOrganizationInvitationCommandInput,
    cb: (err: any, data?: CancelOrganizationInvitationCommandOutput) => void
  ): void;
  cancelOrganizationInvitation(
    args: CancelOrganizationInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelOrganizationInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeOrganizationSubscriptionPlanCommand}
   */
  changeOrganizationSubscriptionPlan(
    args: ChangeOrganizationSubscriptionPlanCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ChangeOrganizationSubscriptionPlanCommandOutput>;
  changeOrganizationSubscriptionPlan(
    args: ChangeOrganizationSubscriptionPlanCommandInput,
    cb: (err: any, data?: ChangeOrganizationSubscriptionPlanCommandOutput) => void
  ): void;
  changeOrganizationSubscriptionPlan(
    args: ChangeOrganizationSubscriptionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeOrganizationSubscriptionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiAuthTokenCommand}
   */
  createApiAuthToken(
    args: CreateApiAuthTokenCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateApiAuthTokenCommandOutput>;
  createApiAuthToken(
    args: CreateApiAuthTokenCommandInput,
    cb: (err: any, data?: CreateApiAuthTokenCommandOutput) => void
  ): void;
  createApiAuthToken(
    args: CreateApiAuthTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiAuthTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBillingSetupIntentCommand}
   */
  createBillingSetupIntent(
    args: CreateBillingSetupIntentCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateBillingSetupIntentCommandOutput>;
  createBillingSetupIntent(
    args: CreateBillingSetupIntentCommandInput,
    cb: (err: any, data?: CreateBillingSetupIntentCommandOutput) => void
  ): void;
  createBillingSetupIntent(
    args: CreateBillingSetupIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillingSetupIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectOnboardingLinkCommand}
   */
  createConnectOnboardingLink(
    args: CreateConnectOnboardingLinkCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateConnectOnboardingLinkCommandOutput>;
  createConnectOnboardingLink(
    args: CreateConnectOnboardingLinkCommandInput,
    cb: (err: any, data?: CreateConnectOnboardingLinkCommandOutput) => void
  ): void;
  createConnectOnboardingLink(
    args: CreateConnectOnboardingLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectOnboardingLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInterestCommand}
   */
  createInterest(
    args: CreateInterestCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateInterestCommandOutput>;
  createInterest(
    args: CreateInterestCommandInput,
    cb: (err: any, data?: CreateInterestCommandOutput) => void
  ): void;
  createInterest(
    args: CreateInterestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInterestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMarketplaceListingVersionCommand}
   */
  createMarketplaceListingVersion(
    args: CreateMarketplaceListingVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateMarketplaceListingVersionCommandOutput>;
  createMarketplaceListingVersion(
    args: CreateMarketplaceListingVersionCommandInput,
    cb: (err: any, data?: CreateMarketplaceListingVersionCommandOutput) => void
  ): void;
  createMarketplaceListingVersion(
    args: CreateMarketplaceListingVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMarketplaceListingVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrganizationCommand}
   */
  createOrganization(
    args: CreateOrganizationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateOrganizationCommandOutput>;
  createOrganization(
    args: CreateOrganizationCommandInput,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;
  createOrganization(
    args: CreateOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrganizationInvitationCommand}
   */
  createOrganizationInvitation(
    args: CreateOrganizationInvitationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateOrganizationInvitationCommandOutput>;
  createOrganizationInvitation(
    args: CreateOrganizationInvitationCommandInput,
    cb: (err: any, data?: CreateOrganizationInvitationCommandOutput) => void
  ): void;
  createOrganizationInvitation(
    args: CreateOrganizationInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrganizationInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrganizationSecretCommand}
   */
  createOrganizationSecret(
    args: CreateOrganizationSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateOrganizationSecretCommandOutput>;
  createOrganizationSecret(
    args: CreateOrganizationSecretCommandInput,
    cb: (err: any, data?: CreateOrganizationSecretCommandOutput) => void
  ): void;
  createOrganizationSecret(
    args: CreateOrganizationSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrganizationSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourcePoolCommand}
   */
  createResourcePool(
    args: CreateResourcePoolCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateResourcePoolCommandOutput>;
  createResourcePool(
    args: CreateResourcePoolCommandInput,
    cb: (err: any, data?: CreateResourcePoolCommandOutput) => void
  ): void;
  createResourcePool(
    args: CreateResourcePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourcePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoleCommand}
   */
  createRole(
    args: CreateRoleCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateRoleCommandOutput>;
  createRole(
    args: CreateRoleCommandInput,
    cb: (err: any, data?: CreateRoleCommandOutput) => void
  ): void;
  createRole(
    args: CreateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBillingPaymentMethodCommand}
   */
  deleteBillingPaymentMethod(
    args: DeleteBillingPaymentMethodCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteBillingPaymentMethodCommandOutput>;
  deleteBillingPaymentMethod(
    args: DeleteBillingPaymentMethodCommandInput,
    cb: (err: any, data?: DeleteBillingPaymentMethodCommandOutput) => void
  ): void;
  deleteBillingPaymentMethod(
    args: DeleteBillingPaymentMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBillingPaymentMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMarketplaceListingBillingOverrideCommand}
   */
  deleteMarketplaceListingBillingOverride(
    args: DeleteMarketplaceListingBillingOverrideCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteMarketplaceListingBillingOverrideCommandOutput>;
  deleteMarketplaceListingBillingOverride(
    args: DeleteMarketplaceListingBillingOverrideCommandInput,
    cb: (err: any, data?: DeleteMarketplaceListingBillingOverrideCommandOutput) => void
  ): void;
  deleteMarketplaceListingBillingOverride(
    args: DeleteMarketplaceListingBillingOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMarketplaceListingBillingOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrganizationCommand}
   */
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteOrganizationCommandOutput>;
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrganizationSecretCommand}
   */
  deleteOrganizationSecret(
    args: DeleteOrganizationSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteOrganizationSecretCommandOutput>;
  deleteOrganizationSecret(
    args: DeleteOrganizationSecretCommandInput,
    cb: (err: any, data?: DeleteOrganizationSecretCommandOutput) => void
  ): void;
  deleteOrganizationSecret(
    args: DeleteOrganizationSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePoolCommand}
   */
  deleteResourcePool(
    args: DeleteResourcePoolCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteResourcePoolCommandOutput>;
  deleteResourcePool(
    args: DeleteResourcePoolCommandInput,
    cb: (err: any, data?: DeleteResourcePoolCommandOutput) => void
  ): void;
  deleteResourcePool(
    args: DeleteResourcePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoleCommand}
   */
  deleteRole(
    args: DeleteRoleCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteRoleCommandOutput>;
  deleteRole(
    args: DeleteRoleCommandInput,
    cb: (err: any, data?: DeleteRoleCommandOutput) => void
  ): void;
  deleteRole(
    args: DeleteRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiAuthTokenCommand}
   */
  getApiAuthToken(
    args: GetApiAuthTokenCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetApiAuthTokenCommandOutput>;
  getApiAuthToken(
    args: GetApiAuthTokenCommandInput,
    cb: (err: any, data?: GetApiAuthTokenCommandOutput) => void
  ): void;
  getApiAuthToken(
    args: GetApiAuthTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiAuthTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectAccountStatusCommand}
   */
  getConnectAccountStatus(
    args: GetConnectAccountStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetConnectAccountStatusCommandOutput>;
  getConnectAccountStatus(
    args: GetConnectAccountStatusCommandInput,
    cb: (err: any, data?: GetConnectAccountStatusCommandOutput) => void
  ): void;
  getConnectAccountStatus(
    args: GetConnectAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectAccountStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConsumerListingUsageTimeSeriesCommand}
   */
  getConsumerListingUsageTimeSeries(
    args: GetConsumerListingUsageTimeSeriesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetConsumerListingUsageTimeSeriesCommandOutput>;
  getConsumerListingUsageTimeSeries(
    args: GetConsumerListingUsageTimeSeriesCommandInput,
    cb: (err: any, data?: GetConsumerListingUsageTimeSeriesCommandOutput) => void
  ): void;
  getConsumerListingUsageTimeSeries(
    args: GetConsumerListingUsageTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConsumerListingUsageTimeSeriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetJobCommandOutput>;
  getJob(
    args: GetJobCommandInput,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMarketplaceListingCommand}
   */
  getMarketplaceListing(
    args: GetMarketplaceListingCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetMarketplaceListingCommandOutput>;
  getMarketplaceListing(
    args: GetMarketplaceListingCommandInput,
    cb: (err: any, data?: GetMarketplaceListingCommandOutput) => void
  ): void;
  getMarketplaceListing(
    args: GetMarketplaceListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMarketplaceListingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMarketplaceListingVersionCommand}
   */
  getMarketplaceListingVersion(
    args: GetMarketplaceListingVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetMarketplaceListingVersionCommandOutput>;
  getMarketplaceListingVersion(
    args: GetMarketplaceListingVersionCommandInput,
    cb: (err: any, data?: GetMarketplaceListingVersionCommandOutput) => void
  ): void;
  getMarketplaceListingVersion(
    args: GetMarketplaceListingVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMarketplaceListingVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMyPermissionsCommand}
   */
  getMyPermissions(
    args: GetMyPermissionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetMyPermissionsCommandOutput>;
  getMyPermissions(
    args: GetMyPermissionsCommandInput,
    cb: (err: any, data?: GetMyPermissionsCommandOutput) => void
  ): void;
  getMyPermissions(
    args: GetMyPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMyPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationCommand}
   */
  getOrganization(
    args: GetOrganizationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetOrganizationCommandOutput>;
  getOrganization(
    args: GetOrganizationCommandInput,
    cb: (err: any, data?: GetOrganizationCommandOutput) => void
  ): void;
  getOrganization(
    args: GetOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationInvitationCommand}
   */
  getOrganizationInvitation(
    args: GetOrganizationInvitationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetOrganizationInvitationCommandOutput>;
  getOrganizationInvitation(
    args: GetOrganizationInvitationCommandInput,
    cb: (err: any, data?: GetOrganizationInvitationCommandOutput) => void
  ): void;
  getOrganizationInvitation(
    args: GetOrganizationInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationSecretCommand}
   */
  getOrganizationSecret(
    args: GetOrganizationSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetOrganizationSecretCommandOutput>;
  getOrganizationSecret(
    args: GetOrganizationSecretCommandInput,
    cb: (err: any, data?: GetOrganizationSecretCommandOutput) => void
  ): void;
  getOrganizationSecret(
    args: GetOrganizationSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationSubscriptionPlanCommand}
   */
  getOrganizationSubscriptionPlan(
    args: GetOrganizationSubscriptionPlanCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetOrganizationSubscriptionPlanCommandOutput>;
  getOrganizationSubscriptionPlan(
    args: GetOrganizationSubscriptionPlanCommandInput,
    cb: (err: any, data?: GetOrganizationSubscriptionPlanCommandOutput) => void
  ): void;
  getOrganizationSubscriptionPlan(
    args: GetOrganizationSubscriptionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationSubscriptionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicInvitationDetailsCommand}
   */
  getPublicInvitationDetails(
    args: GetPublicInvitationDetailsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPublicInvitationDetailsCommandOutput>;
  getPublicInvitationDetails(
    args: GetPublicInvitationDetailsCommandInput,
    cb: (err: any, data?: GetPublicInvitationDetailsCommandOutput) => void
  ): void;
  getPublicInvitationDetails(
    args: GetPublicInvitationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicInvitationDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublisherListingConsumerBreakdownCommand}
   */
  getPublisherListingConsumerBreakdown(
    args: GetPublisherListingConsumerBreakdownCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPublisherListingConsumerBreakdownCommandOutput>;
  getPublisherListingConsumerBreakdown(
    args: GetPublisherListingConsumerBreakdownCommandInput,
    cb: (err: any, data?: GetPublisherListingConsumerBreakdownCommandOutput) => void
  ): void;
  getPublisherListingConsumerBreakdown(
    args: GetPublisherListingConsumerBreakdownCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublisherListingConsumerBreakdownCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublisherListingUsageTimeSeriesCommand}
   */
  getPublisherListingUsageTimeSeries(
    args: GetPublisherListingUsageTimeSeriesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPublisherListingUsageTimeSeriesCommandOutput>;
  getPublisherListingUsageTimeSeries(
    args: GetPublisherListingUsageTimeSeriesCommandInput,
    cb: (err: any, data?: GetPublisherListingUsageTimeSeriesCommandOutput) => void
  ): void;
  getPublisherListingUsageTimeSeries(
    args: GetPublisherListingUsageTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublisherListingUsageTimeSeriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoolCommand}
   */
  getResourcePool(
    args: GetResourcePoolCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetResourcePoolCommandOutput>;
  getResourcePool(
    args: GetResourcePoolCommandInput,
    cb: (err: any, data?: GetResourcePoolCommandOutput) => void
  ): void;
  getResourcePool(
    args: GetResourcePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRoleCommand}
   */
  getRole(
    args: GetRoleCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetRoleCommandOutput>;
  getRole(
    args: GetRoleCommandInput,
    cb: (err: any, data?: GetRoleCommandOutput) => void
  ): void;
  getRole(
    args: GetRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionPlanCommand}
   */
  getSubscriptionPlan(
    args: GetSubscriptionPlanCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetSubscriptionPlanCommandOutput>;
  getSubscriptionPlan(
    args: GetSubscriptionPlanCommandInput,
    cb: (err: any, data?: GetSubscriptionPlanCommandOutput) => void
  ): void;
  getSubscriptionPlan(
    args: GetSubscriptionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaggedWorkflowVersionCommand}
   */
  getTaggedWorkflowVersion(
    args: GetTaggedWorkflowVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetTaggedWorkflowVersionCommandOutput>;
  getTaggedWorkflowVersion(
    args: GetTaggedWorkflowVersionCommandInput,
    cb: (err: any, data?: GetTaggedWorkflowVersionCommandOutput) => void
  ): void;
  getTaggedWorkflowVersion(
    args: GetTaggedWorkflowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaggedWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(
    args: GetWorkflowCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetWorkflowCommandOutput>;
  getWorkflow(
    args: GetWorkflowCommandInput,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowMetricTimeSeriesCommand}
   */
  getWorkflowMetricTimeSeries(
    args: GetWorkflowMetricTimeSeriesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetWorkflowMetricTimeSeriesCommandOutput>;
  getWorkflowMetricTimeSeries(
    args: GetWorkflowMetricTimeSeriesCommandInput,
    cb: (err: any, data?: GetWorkflowMetricTimeSeriesCommandOutput) => void
  ): void;
  getWorkflowMetricTimeSeries(
    args: GetWorkflowMetricTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowMetricTimeSeriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowStateCommand}
   */
  getWorkflowState(
    args: GetWorkflowStateCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetWorkflowStateCommandOutput>;
  getWorkflowState(
    args: GetWorkflowStateCommandInput,
    cb: (err: any, data?: GetWorkflowStateCommandOutput) => void
  ): void;
  getWorkflowState(
    args: GetWorkflowStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowStateMetadataCommand}
   */
  getWorkflowStateMetadata(
    args: GetWorkflowStateMetadataCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetWorkflowStateMetadataCommandOutput>;
  getWorkflowStateMetadata(
    args: GetWorkflowStateMetadataCommandInput,
    cb: (err: any, data?: GetWorkflowStateMetadataCommandOutput) => void
  ): void;
  getWorkflowStateMetadata(
    args: GetWorkflowStateMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowStateMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowVersionCommand}
   */
  getWorkflowVersion(
    args: GetWorkflowVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetWorkflowVersionCommandOutput>;
  getWorkflowVersion(
    args: GetWorkflowVersionCommandInput,
    cb: (err: any, data?: GetWorkflowVersionCommandOutput) => void
  ): void;
  getWorkflowVersion(
    args: GetWorkflowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GrantMarketplaceAccessCommand}
   */
  grantMarketplaceAccess(
    args: GrantMarketplaceAccessCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GrantMarketplaceAccessCommandOutput>;
  grantMarketplaceAccess(
    args: GrantMarketplaceAccessCommandInput,
    cb: (err: any, data?: GrantMarketplaceAccessCommandOutput) => void
  ): void;
  grantMarketplaceAccess(
    args: GrantMarketplaceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GrantMarketplaceAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link HandleStripeConnectWebhookCommand}
   */
  handleStripeConnectWebhook(): Promise<HandleStripeConnectWebhookCommandOutput>;
  handleStripeConnectWebhook(
    args: HandleStripeConnectWebhookCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<HandleStripeConnectWebhookCommandOutput>;
  handleStripeConnectWebhook(
    args: HandleStripeConnectWebhookCommandInput,
    cb: (err: any, data?: HandleStripeConnectWebhookCommandOutput) => void
  ): void;
  handleStripeConnectWebhook(
    args: HandleStripeConnectWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HandleStripeConnectWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link HandleStripeWebhookCommand}
   */
  handleStripeWebhook(): Promise<HandleStripeWebhookCommandOutput>;
  handleStripeWebhook(
    args: HandleStripeWebhookCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<HandleStripeWebhookCommandOutput>;
  handleStripeWebhook(
    args: HandleStripeWebhookCommandInput,
    cb: (err: any, data?: HandleStripeWebhookCommandOutput) => void
  ): void;
  handleStripeWebhook(
    args: HandleStripeWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HandleStripeWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link IsMarketplaceListingAllowlistedCommand}
   */
  isMarketplaceListingAllowlisted(
    args: IsMarketplaceListingAllowlistedCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<IsMarketplaceListingAllowlistedCommandOutput>;
  isMarketplaceListingAllowlisted(
    args: IsMarketplaceListingAllowlistedCommandInput,
    cb: (err: any, data?: IsMarketplaceListingAllowlistedCommandOutput) => void
  ): void;
  isMarketplaceListingAllowlisted(
    args: IsMarketplaceListingAllowlistedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IsMarketplaceListingAllowlistedCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAllowlistedMarketplaceListingsCommand}
   */
  listAllowlistedMarketplaceListings(
    args: ListAllowlistedMarketplaceListingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListAllowlistedMarketplaceListingsCommandOutput>;
  listAllowlistedMarketplaceListings(
    args: ListAllowlistedMarketplaceListingsCommandInput,
    cb: (err: any, data?: ListAllowlistedMarketplaceListingsCommandOutput) => void
  ): void;
  listAllowlistedMarketplaceListings(
    args: ListAllowlistedMarketplaceListingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAllowlistedMarketplaceListingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApiAuthTokensCommand}
   */
  listApiAuthTokens(
    args: ListApiAuthTokensCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListApiAuthTokensCommandOutput>;
  listApiAuthTokens(
    args: ListApiAuthTokensCommandInput,
    cb: (err: any, data?: ListApiAuthTokensCommandOutput) => void
  ): void;
  listApiAuthTokens(
    args: ListApiAuthTokensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApiAuthTokensCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillingPaymentMethodsCommand}
   */
  listBillingPaymentMethods(
    args: ListBillingPaymentMethodsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListBillingPaymentMethodsCommandOutput>;
  listBillingPaymentMethods(
    args: ListBillingPaymentMethodsCommandInput,
    cb: (err: any, data?: ListBillingPaymentMethodsCommandOutput) => void
  ): void;
  listBillingPaymentMethods(
    args: ListBillingPaymentMethodsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillingPaymentMethodsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(
    args: ListJobsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMarketplaceListingBillingOverridesCommand}
   */
  listMarketplaceListingBillingOverrides(
    args: ListMarketplaceListingBillingOverridesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListMarketplaceListingBillingOverridesCommandOutput>;
  listMarketplaceListingBillingOverrides(
    args: ListMarketplaceListingBillingOverridesCommandInput,
    cb: (err: any, data?: ListMarketplaceListingBillingOverridesCommandOutput) => void
  ): void;
  listMarketplaceListingBillingOverrides(
    args: ListMarketplaceListingBillingOverridesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMarketplaceListingBillingOverridesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMarketplaceListingsCommand}
   */
  listMarketplaceListings(): Promise<ListMarketplaceListingsCommandOutput>;
  listMarketplaceListings(
    args: ListMarketplaceListingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListMarketplaceListingsCommandOutput>;
  listMarketplaceListings(
    args: ListMarketplaceListingsCommandInput,
    cb: (err: any, data?: ListMarketplaceListingsCommandOutput) => void
  ): void;
  listMarketplaceListings(
    args: ListMarketplaceListingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMarketplaceListingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMarketplaceListingVersionsCommand}
   */
  listMarketplaceListingVersions(
    args: ListMarketplaceListingVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListMarketplaceListingVersionsCommandOutput>;
  listMarketplaceListingVersions(
    args: ListMarketplaceListingVersionsCommandInput,
    cb: (err: any, data?: ListMarketplaceListingVersionsCommandOutput) => void
  ): void;
  listMarketplaceListingVersions(
    args: ListMarketplaceListingVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMarketplaceListingVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMyMarketplaceListingsCommand}
   */
  listMyMarketplaceListings(
    args: ListMyMarketplaceListingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListMyMarketplaceListingsCommandOutput>;
  listMyMarketplaceListings(
    args: ListMyMarketplaceListingsCommandInput,
    cb: (err: any, data?: ListMyMarketplaceListingsCommandOutput) => void
  ): void;
  listMyMarketplaceListings(
    args: ListMyMarketplaceListingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMyMarketplaceListingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationsCommand}
   */
  listNotifications(
    args: ListNotificationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  listNotifications(
    args: ListNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationInvitationsForUserCommand}
   */
  listOrganizationInvitationsForUser(): Promise<ListOrganizationInvitationsForUserCommandOutput>;
  listOrganizationInvitationsForUser(
    args: ListOrganizationInvitationsForUserCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListOrganizationInvitationsForUserCommandOutput>;
  listOrganizationInvitationsForUser(
    args: ListOrganizationInvitationsForUserCommandInput,
    cb: (err: any, data?: ListOrganizationInvitationsForUserCommandOutput) => void
  ): void;
  listOrganizationInvitationsForUser(
    args: ListOrganizationInvitationsForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationInvitationsForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationsCommand}
   */
  listOrganizations(): Promise<ListOrganizationsCommandOutput>;
  listOrganizations(
    args: ListOrganizationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListOrganizationsCommandOutput>;
  listOrganizations(
    args: ListOrganizationsCommandInput,
    cb: (err: any, data?: ListOrganizationsCommandOutput) => void
  ): void;
  listOrganizations(
    args: ListOrganizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationSecretsCommand}
   */
  listOrganizationSecrets(
    args: ListOrganizationSecretsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListOrganizationSecretsCommandOutput>;
  listOrganizationSecrets(
    args: ListOrganizationSecretsCommandInput,
    cb: (err: any, data?: ListOrganizationSecretsCommandOutput) => void
  ): void;
  listOrganizationSecrets(
    args: ListOrganizationSecretsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationSecretsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationUsersAndInvitationsCommand}
   */
  listOrganizationUsersAndInvitations(
    args: ListOrganizationUsersAndInvitationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListOrganizationUsersAndInvitationsCommandOutput>;
  listOrganizationUsersAndInvitations(
    args: ListOrganizationUsersAndInvitationsCommandInput,
    cb: (err: any, data?: ListOrganizationUsersAndInvitationsCommandOutput) => void
  ): void;
  listOrganizationUsersAndInvitations(
    args: ListOrganizationUsersAndInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationUsersAndInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcePoolsCommand}
   */
  listResourcePools(
    args: ListResourcePoolsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListResourcePoolsCommandOutput>;
  listResourcePools(
    args: ListResourcePoolsCommandInput,
    cb: (err: any, data?: ListResourcePoolsCommandOutput) => void
  ): void;
  listResourcePools(
    args: ListResourcePoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcePoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRolesCommand}
   */
  listRoles(
    args: ListRolesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListRolesCommandOutput>;
  listRoles(
    args: ListRolesCommandInput,
    cb: (err: any, data?: ListRolesCommandOutput) => void
  ): void;
  listRoles(
    args: ListRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionPlansCommand}
   */
  listSubscriptionPlans(): Promise<ListSubscriptionPlansCommandOutput>;
  listSubscriptionPlans(
    args: ListSubscriptionPlansCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListSubscriptionPlansCommandOutput>;
  listSubscriptionPlans(
    args: ListSubscriptionPlansCommandInput,
    cb: (err: any, data?: ListSubscriptionPlansCommandOutput) => void
  ): void;
  listSubscriptionPlans(
    args: ListSubscriptionPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowVersionsCommand}
   */
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListWorkflowVersionsCommandOutput>;
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    cb: (err: any, data?: ListWorkflowVersionsCommandOutput) => void
  ): void;
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link MarkAllNotificationsReadCommand}
   */
  markAllNotificationsRead(
    args: MarkAllNotificationsReadCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<MarkAllNotificationsReadCommandOutput>;
  markAllNotificationsRead(
    args: MarkAllNotificationsReadCommandInput,
    cb: (err: any, data?: MarkAllNotificationsReadCommandOutput) => void
  ): void;
  markAllNotificationsRead(
    args: MarkAllNotificationsReadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MarkAllNotificationsReadCommandOutput) => void
  ): void;

  /**
   * @see {@link MarkNotificationReadCommand}
   */
  markNotificationRead(
    args: MarkNotificationReadCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<MarkNotificationReadCommandOutput>;
  markNotificationRead(
    args: MarkNotificationReadCommandInput,
    cb: (err: any, data?: MarkNotificationReadCommandOutput) => void
  ): void;
  markNotificationRead(
    args: MarkNotificationReadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MarkNotificationReadCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishWorkflowToMarketplaceCommand}
   */
  publishWorkflowToMarketplace(
    args: PublishWorkflowToMarketplaceCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<PublishWorkflowToMarketplaceCommandOutput>;
  publishWorkflowToMarketplace(
    args: PublishWorkflowToMarketplaceCommandInput,
    cb: (err: any, data?: PublishWorkflowToMarketplaceCommandOutput) => void
  ): void;
  publishWorkflowToMarketplace(
    args: PublishWorkflowToMarketplaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishWorkflowToMarketplaceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterWorkflowCommand}
   */
  registerWorkflow(
    args: RegisterWorkflowCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RegisterWorkflowCommandOutput>;
  registerWorkflow(
    args: RegisterWorkflowCommandInput,
    cb: (err: any, data?: RegisterWorkflowCommandOutput) => void
  ): void;
  registerWorkflow(
    args: RegisterWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterWorkflowVersionCommand}
   */
  registerWorkflowVersion(
    args: RegisterWorkflowVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RegisterWorkflowVersionCommandOutput>;
  registerWorkflowVersion(
    args: RegisterWorkflowVersionCommandInput,
    cb: (err: any, data?: RegisterWorkflowVersionCommandOutput) => void
  ): void;
  registerWorkflowVersion(
    args: RegisterWorkflowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectOrganizationInvitationCommand}
   */
  rejectOrganizationInvitation(
    args: RejectOrganizationInvitationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RejectOrganizationInvitationCommandOutput>;
  rejectOrganizationInvitation(
    args: RejectOrganizationInvitationCommandInput,
    cb: (err: any, data?: RejectOrganizationInvitationCommandOutput) => void
  ): void;
  rejectOrganizationInvitation(
    args: RejectOrganizationInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectOrganizationInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveOrganizationMembershipCommand}
   */
  removeOrganizationMembership(
    args: RemoveOrganizationMembershipCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RemoveOrganizationMembershipCommandOutput>;
  removeOrganizationMembership(
    args: RemoveOrganizationMembershipCommandInput,
    cb: (err: any, data?: RemoveOrganizationMembershipCommandOutput) => void
  ): void;
  removeOrganizationMembership(
    args: RemoveOrganizationMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveOrganizationMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link ResolveOrganizationSecretCommand}
   */
  resolveOrganizationSecret(
    args: ResolveOrganizationSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ResolveOrganizationSecretCommandOutput>;
  resolveOrganizationSecret(
    args: ResolveOrganizationSecretCommandInput,
    cb: (err: any, data?: ResolveOrganizationSecretCommandOutput) => void
  ): void;
  resolveOrganizationSecret(
    args: ResolveOrganizationSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveOrganizationSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeJobCommand}
   */
  resumeJob(
    args: ResumeJobCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ResumeJobCommandOutput>;
  resumeJob(
    args: ResumeJobCommandInput,
    cb: (err: any, data?: ResumeJobCommandOutput) => void
  ): void;
  resumeJob(
    args: ResumeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeApiAuthTokenCommand}
   */
  revokeApiAuthToken(
    args: RevokeApiAuthTokenCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RevokeApiAuthTokenCommandOutput>;
  revokeApiAuthToken(
    args: RevokeApiAuthTokenCommandInput,
    cb: (err: any, data?: RevokeApiAuthTokenCommandOutput) => void
  ): void;
  revokeApiAuthToken(
    args: RevokeApiAuthTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeApiAuthTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeMarketplaceAccessCommand}
   */
  revokeMarketplaceAccess(
    args: RevokeMarketplaceAccessCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RevokeMarketplaceAccessCommandOutput>;
  revokeMarketplaceAccess(
    args: RevokeMarketplaceAccessCommandInput,
    cb: (err: any, data?: RevokeMarketplaceAccessCommandOutput) => void
  ): void;
  revokeMarketplaceAccess(
    args: RevokeMarketplaceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeMarketplaceAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchMarketplaceOrganizationsCommand}
   */
  searchMarketplaceOrganizations(): Promise<SearchMarketplaceOrganizationsCommandOutput>;
  searchMarketplaceOrganizations(
    args: SearchMarketplaceOrganizationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SearchMarketplaceOrganizationsCommandOutput>;
  searchMarketplaceOrganizations(
    args: SearchMarketplaceOrganizationsCommandInput,
    cb: (err: any, data?: SearchMarketplaceOrganizationsCommandOutput) => void
  ): void;
  searchMarketplaceOrganizations(
    args: SearchMarketplaceOrganizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchMarketplaceOrganizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendJobEventCommand}
   */
  sendJobEvent(
    args: SendJobEventCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SendJobEventCommandOutput>;
  sendJobEvent(
    args: SendJobEventCommandInput,
    cb: (err: any, data?: SendJobEventCommandOutput) => void
  ): void;
  sendJobEvent(
    args: SendJobEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendJobEventCommandOutput) => void
  ): void;

  /**
   * @see {@link SetWorkflowVersionTagCommand}
   */
  setWorkflowVersionTag(
    args: SetWorkflowVersionTagCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SetWorkflowVersionTagCommandOutput>;
  setWorkflowVersionTag(
    args: SetWorkflowVersionTagCommandInput,
    cb: (err: any, data?: SetWorkflowVersionTagCommandOutput) => void
  ): void;
  setWorkflowVersionTag(
    args: SetWorkflowVersionTagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetWorkflowVersionTagCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitJobCommand}
   */
  submitJob(
    args: SubmitJobCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SubmitJobCommandOutput>;
  submitJob(
    args: SubmitJobCommandInput,
    cb: (err: any, data?: SubmitJobCommandOutput) => void
  ): void;
  submitJob(
    args: SubmitJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UnallowlistMarketplaceListingCommand}
   */
  unallowlistMarketplaceListing(
    args: UnallowlistMarketplaceListingCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UnallowlistMarketplaceListingCommandOutput>;
  unallowlistMarketplaceListing(
    args: UnallowlistMarketplaceListingCommandInput,
    cb: (err: any, data?: UnallowlistMarketplaceListingCommandOutput) => void
  ): void;
  unallowlistMarketplaceListing(
    args: UnallowlistMarketplaceListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnallowlistMarketplaceListingCommandOutput) => void
  ): void;

  /**
   * @see {@link UnpublishWorkflowFromMarketplaceCommand}
   */
  unpublishWorkflowFromMarketplace(
    args: UnpublishWorkflowFromMarketplaceCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UnpublishWorkflowFromMarketplaceCommandOutput>;
  unpublishWorkflowFromMarketplace(
    args: UnpublishWorkflowFromMarketplaceCommandInput,
    cb: (err: any, data?: UnpublishWorkflowFromMarketplaceCommandOutput) => void
  ): void;
  unpublishWorkflowFromMarketplace(
    args: UnpublishWorkflowFromMarketplaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnpublishWorkflowFromMarketplaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiAuthTokenCommand}
   */
  updateApiAuthToken(
    args: UpdateApiAuthTokenCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateApiAuthTokenCommandOutput>;
  updateApiAuthToken(
    args: UpdateApiAuthTokenCommandInput,
    cb: (err: any, data?: UpdateApiAuthTokenCommandOutput) => void
  ): void;
  updateApiAuthToken(
    args: UpdateApiAuthTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiAuthTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMarketplaceListingBillingCommand}
   */
  updateMarketplaceListingBilling(
    args: UpdateMarketplaceListingBillingCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateMarketplaceListingBillingCommandOutput>;
  updateMarketplaceListingBilling(
    args: UpdateMarketplaceListingBillingCommandInput,
    cb: (err: any, data?: UpdateMarketplaceListingBillingCommandOutput) => void
  ): void;
  updateMarketplaceListingBilling(
    args: UpdateMarketplaceListingBillingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMarketplaceListingBillingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMarketplaceListingMetadataCommand}
   */
  updateMarketplaceListingMetadata(
    args: UpdateMarketplaceListingMetadataCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateMarketplaceListingMetadataCommandOutput>;
  updateMarketplaceListingMetadata(
    args: UpdateMarketplaceListingMetadataCommandInput,
    cb: (err: any, data?: UpdateMarketplaceListingMetadataCommandOutput) => void
  ): void;
  updateMarketplaceListingMetadata(
    args: UpdateMarketplaceListingMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMarketplaceListingMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrganizationCommand}
   */
  updateOrganization(
    args: UpdateOrganizationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateOrganizationCommandOutput>;
  updateOrganization(
    args: UpdateOrganizationCommandInput,
    cb: (err: any, data?: UpdateOrganizationCommandOutput) => void
  ): void;
  updateOrganization(
    args: UpdateOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrganizationMembershipCommand}
   */
  updateOrganizationMembership(
    args: UpdateOrganizationMembershipCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateOrganizationMembershipCommandOutput>;
  updateOrganizationMembership(
    args: UpdateOrganizationMembershipCommandInput,
    cb: (err: any, data?: UpdateOrganizationMembershipCommandOutput) => void
  ): void;
  updateOrganizationMembership(
    args: UpdateOrganizationMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrganizationSecretCommand}
   */
  updateOrganizationSecret(
    args: UpdateOrganizationSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateOrganizationSecretCommandOutput>;
  updateOrganizationSecret(
    args: UpdateOrganizationSecretCommandInput,
    cb: (err: any, data?: UpdateOrganizationSecretCommandOutput) => void
  ): void;
  updateOrganizationSecret(
    args: UpdateOrganizationSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourcePoolCommand}
   */
  updateResourcePool(
    args: UpdateResourcePoolCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateResourcePoolCommandOutput>;
  updateResourcePool(
    args: UpdateResourcePoolCommandInput,
    cb: (err: any, data?: UpdateResourcePoolCommandOutput) => void
  ): void;
  updateResourcePool(
    args: UpdateResourcePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourcePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoleCommand}
   */
  updateRole(
    args: UpdateRoleCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateRoleCommandOutput>;
  updateRole(
    args: UpdateRoleCommandInput,
    cb: (err: any, data?: UpdateRoleCommandOutput) => void
  ): void;
  updateRole(
    args: UpdateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpsertMarketplaceListingBillingOverrideCommand}
   */
  upsertMarketplaceListingBillingOverride(
    args: UpsertMarketplaceListingBillingOverrideCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpsertMarketplaceListingBillingOverrideCommandOutput>;
  upsertMarketplaceListingBillingOverride(
    args: UpsertMarketplaceListingBillingOverrideCommandInput,
    cb: (err: any, data?: UpsertMarketplaceListingBillingOverrideCommandOutput) => void
  ): void;
  upsertMarketplaceListingBillingOverride(
    args: UpsertMarketplaceListingBillingOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpsertMarketplaceListingBillingOverrideCommandOutput) => void
  ): void;

}

/**
 * @public
 */
export class JustWorkflowIt extends JustWorkflowItClient implements JustWorkflowIt {}
createAggregatedClient(commands, JustWorkflowIt);

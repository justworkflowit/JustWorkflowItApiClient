// smithy-typescript generated code
import { JustWorkflowItServiceException as __BaseException } from "./JustWorkflowItServiceException";
import {
  SENSITIVE_STRING,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

/**
 * @public
 */
export interface AcceptOrganizationInvitationInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;
}

/**
 * @public
 */
export interface AcceptOrganizationInvitationOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  userId: string;
}

/**
 * Authentication failed due to missing, invalid, or expired credentials. Verify the authentication token is valid and not expired.
 * @public
 */
export class AuthenticationError extends __BaseException {
  readonly name: "AuthenticationError" = "AuthenticationError";
    static readonly errorType = 'AuthenticationError';
    readonly isJustWorkflowItException = true;
    static readonly statusCode = 401;
  readonly $fault: "client" = "client";
  errorType: string;
  statusCode: number;
  /**
   * @internal
   */
  constructor(opts: Omit<__ExceptionOptionType<AuthenticationError, __BaseException>, "statusCode" | "$metadata" | "errorType" | "isJustWorkflowItException">) {
    super({
            name: "AuthenticationError",
            $fault: "client",
            ...opts
          ,$metadata: { httpStatusCode: AuthenticationError.statusCode },
      });
    Object.setPrototypeOf(this, AuthenticationError.prototype);
      this.statusCode = AuthenticationError.statusCode;
      this.errorType = AuthenticationError.errorType
  }
}

/**
 * Authorization failed due to insufficient permissions. The authenticated user or API token does not have permission to perform this operation.
 * @public
 */
export class AuthorizationError extends __BaseException {
  readonly name: "AuthorizationError" = "AuthorizationError";
    static readonly errorType = 'AuthorizationError';
    readonly isJustWorkflowItException = true;
    static readonly statusCode = 403;
  readonly $fault: "client" = "client";
  errorType: string;
  statusCode: number;
  /**
   * @internal
   */
  constructor(opts: Omit<__ExceptionOptionType<AuthorizationError, __BaseException>, "statusCode" | "$metadata" | "errorType" | "isJustWorkflowItException">) {
    super({
            name: "AuthorizationError",
            $fault: "client",
            ...opts
          ,$metadata: { httpStatusCode: AuthorizationError.statusCode },
      });
    Object.setPrototypeOf(this, AuthorizationError.prototype);
      this.statusCode = AuthorizationError.statusCode;
      this.errorType = AuthorizationError.errorType
  }
}

/**
 * The requested resource was not found. Verify the resource ID is correct and the resource exists in the specified organization.
 * @public
 */
export class NotFoundError extends __BaseException {
  readonly name: "NotFoundError" = "NotFoundError";
    static readonly errorType = 'NotFoundError';
    readonly isJustWorkflowItException = true;
    static readonly statusCode = 404;
  readonly $fault: "client" = "client";
  errorType: string;
  statusCode: number;
  /**
   * @internal
   */
  constructor(opts: Omit<__ExceptionOptionType<NotFoundError, __BaseException>, "statusCode" | "$metadata" | "errorType" | "isJustWorkflowItException">) {
    super({
            name: "NotFoundError",
            $fault: "client",
            ...opts
          ,$metadata: { httpStatusCode: NotFoundError.statusCode },
      });
    Object.setPrototypeOf(this, NotFoundError.prototype);
      this.statusCode = NotFoundError.statusCode;
      this.errorType = NotFoundError.errorType
  }
}

/**
 * An unexpected server error occurred. If the problem persists, contact support with the error details.
 * @public
 */
export class UnhandledError extends __BaseException {
  readonly name: "UnhandledError" = "UnhandledError";
    static readonly errorType = 'UnhandledError';
    readonly isJustWorkflowItException = true;
    static readonly statusCode = 500;
  readonly $fault: "server" = "server";
  errorType: string;
  statusCode: number;
  /**
   * @internal
   */
  constructor(opts: Omit<__ExceptionOptionType<UnhandledError, __BaseException>, "statusCode" | "$metadata" | "errorType" | "isJustWorkflowItException">) {
    super({
            name: "UnhandledError",
            $fault: "server",
            ...opts
          ,$metadata: { httpStatusCode: UnhandledError.statusCode },
      });
    Object.setPrototypeOf(this, UnhandledError.prototype);
      this.statusCode = UnhandledError.statusCode;
      this.errorType = UnhandledError.errorType
  }
}

/**
 * Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
 * @public
 */
export class ValidationError extends __BaseException {
  readonly name: "ValidationError" = "ValidationError";
    static readonly errorType = 'ValidationError';
    readonly isJustWorkflowItException = true;
    static readonly statusCode = 400;
  readonly $fault: "client" = "client";
  errorType: string;
  statusCode: number;
  /**
   * Map of string key-value pairs for flexible data structures.
   * @public
   */
  fields?: Record<string, string> | undefined;

  /**
   * @internal
   */
  constructor(opts: Omit<__ExceptionOptionType<ValidationError, __BaseException>, "statusCode" | "$metadata" | "errorType" | "isJustWorkflowItException">) {
    super({
            name: "ValidationError",
            $fault: "client",
            ...opts
          ,$metadata: { httpStatusCode: ValidationError.statusCode },
      });
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.fields = opts.fields;
      this.statusCode = ValidationError.statusCode;
      this.errorType = ValidationError.errorType
  }
}

/**
 * @public
 */
export interface AdminBackfillSubscriptionsInput {
}

/**
 * @public
 */
export interface AdminBackfillSubscriptionsOutput {
  totalSynced: number;
  totalSkipped: number;
  totalFailed: number;
  /**
   * List of string values.
   * @public
   */
  errors: (string)[];
}

/**
 * @public
 */
export interface AdminCleanupTestBillingDataInput {
  /**
   * The organization ID whose test billing data should be cleaned up.
   * @public
   */
  organizationId: string;

  /**
   * Delete records older than this many days.
   * @public
   */
  maxAgeDays: number;
}

/**
 * @public
 */
export interface AdminCleanupTestBillingDataOutput {
  /**
   * Number of MarketplaceUsageSync records deleted.
   * @public
   */
  usageSyncsDeleted: number;

  /**
   * Number of MarketplaceInvoice records deleted (line items cascade).
   * @public
   */
  invoicesDeleted: number;

  /**
   * Number of Stripe objects cleaned up (voided invoices + deleted invoice items).
   * @public
   */
  stripeObjectsCleaned: number;
}

/**
 * @public
 */
export interface AdminCreateImpersonationSessionInput {
  /**
   * The user ID of the user to impersonate.
   * @public
   */
  targetUserId: string;

  /**
   * The organization context for the impersonation.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface AdminCreateImpersonationSessionOutput {
  /**
   * The short-lived impersonation token. Use as Bearer token.
   * @public
   */
  token: string;

  /**
   * When the token expires (1 hour from creation).
   * @public
   */
  expiresAt: Date;

  /**
   * Email of the user being impersonated.
   * @public
   */
  targetEmail: string;

  /**
   * Display name of the user being impersonated.
   * @public
   */
  targetName: string;

  /**
   * Name of the organization.
   * @public
   */
  organizationName: string;
}

/**
 * @public
 */
export interface AdminCreateRoleInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  description?: string | undefined;
}

/**
 * @public
 */
export interface AdminCreateRoleOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;

  name: string;
  description?: string | undefined;
  createdAt: Date;
}

/**
 * @public
 */
export interface AdminCreateSubscriptionPlanInput {
  name: string;
  description?: string | undefined;
  monthlyPriceUsd?: number | undefined;
  /**
   * Feature key/value pairs for this plan.
   * @public
   */
  features?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AdminCreateSubscriptionPlanOutput {
  id: string;
  name: string;
}

/**
 * @public
 */
export interface AdminDeleteOrganizationFeatureOverrideInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  featureKey: string;
}

/**
 * @public
 */
export interface AdminDeleteOrganizationFeatureOverrideOutput {
}

/**
 * @public
 */
export interface AdminDeleteRoleInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;
}

/**
 * @public
 */
export interface AdminDeleteRoleOutput {
}

/**
 * @public
 */
export interface AdminDeleteSubscriptionPlanInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  planId: string;
}

/**
 * @public
 */
export interface AdminDeleteSubscriptionPlanOutput {
}

/**
 * The request conflicts with the current state of the resource. For example, trying to delete a resource that is still in use.
 * @public
 */
export class ConflictError extends __BaseException {
  readonly name: "ConflictError" = "ConflictError";
    static readonly errorType = 'ConflictError';
    readonly isJustWorkflowItException = true;
    static readonly statusCode = 409;
  readonly $fault: "client" = "client";
  errorType: string;
  statusCode: number;
  /**
   * @internal
   */
  constructor(opts: Omit<__ExceptionOptionType<ConflictError, __BaseException>, "statusCode" | "$metadata" | "errorType" | "isJustWorkflowItException">) {
    super({
            name: "ConflictError",
            $fault: "client",
            ...opts
          ,$metadata: { httpStatusCode: ConflictError.statusCode },
      });
    Object.setPrototypeOf(this, ConflictError.prototype);
      this.statusCode = ConflictError.statusCode;
      this.errorType = ConflictError.errorType
  }
}

/**
 * @public
 */
export interface AdminGenerateInvoicesInput {
  billingPeriodStart: Date;
  billingPeriodEnd: Date;
  /**
   * When true, returns a preview of invoices without creating them in the database or sending to Stripe.
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * Preview of an invoice line item.
 * @public
 */
export interface InvoiceLineItemPreview {
  marketplaceListingId: string;
  publisherOrganizationId: string;
  description: string;
  billingModel: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  platformFee: number;
  publisherPayout: number;
}

/**
 * Preview of a marketplace invoice that would be generated.
 * @public
 */
export interface InvoicePreview {
  consumerOrganizationId: string;
  consumerOrganizationName: string;
  totalAmount: number;
  platformFeeAmount: number;
  lineItems: (InvoiceLineItemPreview)[];
}

/**
 * @public
 */
export interface AdminGenerateInvoicesOutput {
  invoiceCount: number;
  totalAmount: number;
  dryRun: boolean;
  /**
   * Invoice previews returned when dryRun=true. Empty array when dryRun=false.
   * @public
   */
  invoices: (InvoicePreview)[];
}

/**
 * @public
 */
export interface AdminGetBillingHealthInput {
}

/**
 * @public
 */
export interface AdminGetBillingHealthOutput {
  totalOrganizations: number;
  orgsWithoutSubscription: number;
  orgsWithoutStripeCustomer: number;
  orgsWithSubscription: number;
}

/**
 * @public
 */
export interface AdminGetOrganizationInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface AdminGetOrganizationOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  key: string;
  displayName: string;
  /**
   * Name of the subscription plan.
   * @public
   */
  subscriptionPlanName?: string | undefined;

  /**
   * ID of the subscription plan.
   * @public
   */
  subscriptionPlanId?: string | undefined;

  memberCount: number;
  workflowCount: number;
  jobCount: number;
  roleCount: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface AdminGetRoleInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;
}

/**
 * @public
 * @enum
 */
export const PermissionEnum = {
  /**
   * Permission to create API authentication tokens.
   */
  APITOKEN_CREATE: "apitoken:create",
  /**
   * Permission to view API token details.
   */
  APITOKEN_READ: "apitoken:read",
  /**
   * Permission to revoke API authentication tokens.
   */
  APITOKEN_REVOKE: "apitoken:revoke",
  /**
   * Permission to update API token permissions and expiration.
   */
  APITOKEN_UPDATE: "apitoken:update",
  /**
   * Permission to manage organization billing settings and payment methods.
   */
  BILLING_MANAGE: "billing:manage",
  /**
   * Permission to cancel running or pending jobs.
   */
  JOB_CANCEL: "job:cancel",
  /**
   * Permission to delete job records.
   */
  JOB_DELETE: "job:delete",
  /**
   * Permission to send external events to jobs for event-driven workflows.
   */
  JOB_EVENT_SEND: "job:event:send",
  /**
   * Permission to list jobs in an organization.
   */
  JOB_LIST: "job:list",
  /**
   * Permission to view job details and execution state.
   */
  JOB_READ: "job:read",
  /**
   * Permission to submit new workflow jobs for execution.
   */
  JOB_SUBMIT: "job:submit",
  /**
   * Permission to update job metadata.
   */
  JOB_UPDATE: "job:update",
  /**
   * Permission to manage the organization's marketplace allowlist - approve or remove marketplace listings for use in workflows.
   */
  MARKETPLACE_ALLOWLIST: "marketplace:allowlist",
  /**
   * Permission to grant or revoke access to private marketplace listings.
   */
  MARKETPLACE_GRANT: "marketplace:grant",
  /**
   * Permission to publish workflow versions to the marketplace.
   */
  MARKETPLACE_PUBLISH: "marketplace:publish",
  /**
   * Permission to remove workflow versions from the marketplace.
   */
  MARKETPLACE_UNPUBLISH: "marketplace:unpublish",
  /**
   * Permission to view workflow execution metrics and analytics.
   */
  METRICS_READ: "metrics:read",
  /**
   * Permission to list notifications in an organization.
   */
  NOTIFICATION_LIST: "notification:list",
  /**
   * Permission to mark notifications as read.
   */
  NOTIFICATION_UPDATE: "notification:update",
  /**
   * Permission to permanently delete an organization and all its resources.
   */
  ORGANIZATION_DELETE: "organization:delete",
  /**
   * Permission to view organization details and list organizations.
   */
  ORGANIZATION_READ: "organization:read",
  /**
   * Permission to update organization settings such as display name.
   */
  ORGANIZATION_UPDATE: "organization:update",
  /**
   * Permission to create resource pools for controlling concurrent execution.
   */
  RESOURCEPOOL_CREATE: "resourcepool:create",
  /**
   * Permission to delete resource pools.
   */
  RESOURCEPOOL_DELETE: "resourcepool:delete",
  /**
   * Permission to list resource pools in an organization.
   */
  RESOURCEPOOL_LIST: "resourcepool:list",
  /**
   * Permission to view resource pool details.
   */
  RESOURCEPOOL_READ: "resourcepool:read",
  /**
   * Permission to update resource pool configuration.
   */
  RESOURCEPOOL_UPDATE: "resourcepool:update",
  /**
   * Permission to create organization secrets.
   */
  SECRET_CREATE: "secret:create",
  /**
   * Permission to permanently delete organization secrets.
   */
  SECRET_DELETE: "secret:delete",
  /**
   * Permission to list organization secrets (metadata only, never values).
   */
  SECRET_LIST: "secret:list",
  /**
   * Permission to view organization secret metadata (never values).
   */
  SECRET_READ: "secret:read",
  /**
   * Permission to resolve (decrypt) organization secret values at runtime. Only granted to execution-scoped tokens during workflow step execution.
   */
  SECRET_RESOLVE: "secret:resolve",
  /**
   * Permission to update organization secret values and descriptions.
   */
  SECRET_UPDATE: "secret:update",
  /**
   * Staff permission to view all organizations, users, and system-wide data. Grants access to admin portal read operations.
   */
  STAFF_READ: "staff:read",
  /**
   * Staff permission to modify organizations, users, and system-wide data. Grants access to admin portal write operations.
   */
  STAFF_WRITE: "staff:write",
  /**
   * Permission to view subscription plan details and usage.
   */
  SUBSCRIPTIONPLAN_READ: "subscription:read",
  /**
   * Permission to create new workflows in an organization.
   */
  WORKFLOW_CREATE: "workflow:create",
  /**
   * Permission to delete workflows.
   */
  WORKFLOW_DELETE: "workflow:delete",
  /**
   * Permission to view workflow details and list workflows.
   */
  WORKFLOW_READ: "workflow:read",
  /**
   * Permission to update workflow settings and metadata.
   */
  WORKFLOW_UPDATE: "workflow:update",
  /**
   * Permission to create new versions of workflows.
   */
  WORKFLOW_VERSION_CREATE: "workflow:version:create",
  /**
   * Permission to view workflow version details and definitions.
   */
  WORKFLOW_VERSION_READ: "workflow:version:read",
} as const
/**
 * @public
 */
export type PermissionEnum = typeof PermissionEnum[keyof typeof PermissionEnum]

/**
 * @public
 */
export interface AdminRoleUser {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  userId: string;

  email: string;
  name?: string | undefined;
}

/**
 * @public
 */
export interface AdminGetRoleOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;

  name: string;
  description?: string | undefined;
  permissions: (PermissionEnum)[];
  /**
   * Users assigned to this role.
   * @public
   */
  users: (AdminRoleUser)[];

  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface AdminGetSubscriptionPlanInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  planId: string;
}

/**
 * @public
 */
export interface AdminSubscriptionFeature {
  key: string;
  label: string;
  description?: string | undefined;
  value: string;
  visibility: string;
}

/**
 * @public
 */
export interface AdminPlanOrganization {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  key: string;
  displayName: string;
}

/**
 * @public
 */
export interface AdminGetSubscriptionPlanOutput {
  id: string;
  name: string;
  description?: string | undefined;
  monthlyPriceUsd: number;
  stripeProductId?: string | undefined;
  stripePriceId?: string | undefined;
  features: (AdminSubscriptionFeature)[];
  organizations: (AdminPlanOrganization)[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface AdminListOrganizationFeatureOverridesInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface OrganizationFeatureOverrideDetail {
  featureKey: string;
  featureLabel: string;
  overrideValue: string;
  planValue?: string | undefined;
  reason?: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface AdminListOrganizationFeatureOverridesOutput {
  overrides: (OrganizationFeatureOverrideDetail)[];
}

/**
 * @public
 */
export interface AdminListOrganizationMembersInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface AdminOrganizationMember {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  userId: string;

  email: string;
  name?: string | undefined;
  joinedAt: Date;
}

/**
 * @public
 */
export interface AdminListOrganizationMembersOutput {
  members: (AdminOrganizationMember)[];
}

/**
 * @public
 */
export interface AdminListOrganizationsInput {
  /**
   * Optional search query to filter organizations by name or key.
   * @public
   */
  search?: string | undefined;

  /**
   * Maximum number of organizations to return per page.
   * @public
   */
  limit?: number | undefined;

  /**
   * Pagination token from a previous request.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary of an organization for admin purposes, including subscription plan info.
 * @public
 */
export interface AdminOrganizationSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  /**
   * Globally unique, URL-safe identifier.
   * @public
   */
  key: string;

  displayName: string;
  /**
   * Name of the subscription plan this organization is on.
   * @public
   */
  subscriptionPlanName?: string | undefined;

  /**
   * Number of members in the organization.
   * @public
   */
  memberCount: number;

  /**
   * Number of workflows owned by the organization.
   * @public
   */
  workflowCount: number;

  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface AdminListOrganizationsOutput {
  /**
   * List of organizations matching the query.
   * @public
   */
  organizations: (AdminOrganizationSummary)[];

  /**
   * Pagination token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface AdminListRolesInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface AdminRoleSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;

  name: string;
  description?: string | undefined;
  /**
   * Number of permissions assigned to this role.
   * @public
   */
  permissionCount: number;

  /**
   * Number of users assigned to this role.
   * @public
   */
  userCount: number;

  createdAt: Date;
}

/**
 * @public
 */
export interface AdminListRolesOutput {
  roles: (AdminRoleSummary)[];
}

/**
 * @public
 */
export interface AdminSubscriptionPlanSummary {
  id: string;
  name: string;
  description?: string | undefined;
  monthlyPriceUsd: number;
  featureCount: number;
  organizationCount: number;
}

/**
 * @public
 */
export interface AdminListSubscriptionPlansOutput {
  plans: (AdminSubscriptionPlanSummary)[];
}

/**
 * @public
 */
export interface AdminSendTestInvoiceInput {
  organizationId: string;
  billingPeriodStart: Date;
  billingPeriodEnd: Date;
  testEmail: string;
}

/**
 * @public
 */
export interface AdminSendTestInvoiceOutput {
  sent: boolean;
  totalAmount: number;
  hostedInvoiceUrl?: string | undefined;
  invoicePdfUrl?: string | undefined;
  invoices: (InvoicePreview)[];
}

/**
 * @public
 */
export interface AdminSetOrganizationFeatureOverrideInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  featureKey: string;
  value: string;
  reason?: string | undefined;
}

/**
 * @public
 */
export interface AdminSetOrganizationFeatureOverrideOutput {
  featureKey: string;
  value: string;
}

/**
 * @public
 */
export interface AdminTriggerUsageSyncInput {
  /**
   * The date to sync usage for. Defaults to yesterday UTC if not provided. Epoch seconds.
   * @public
   */
  usageDate?: Date | undefined;
}

/**
 * @public
 */
export interface AdminTriggerUsageSyncOutput {
  synced: number;
  skipped: number;
}

/**
 * @public
 */
export interface AdminUpdateOrganizationSubscriptionPlanInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  subscriptionPlanId: string;
}

/**
 * @public
 */
export interface AdminUpdateOrganizationSubscriptionPlanOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  subscriptionPlanId: string;
  subscriptionPlanName: string;
}

/**
 * @public
 */
export interface AdminUpdateRoleInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;

  name?: string | undefined;
  description?: string | undefined;
  /**
   * Full list of permissions for this role. Replaces existing permissions.
   * @public
   */
  permissions?: (PermissionEnum)[] | undefined;
}

/**
 * @public
 */
export interface AdminUpdateRoleOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;

  name: string;
  description?: string | undefined;
  permissions: (PermissionEnum)[];
  updatedAt: Date;
}

/**
 * @public
 */
export interface AdminUpdateSubscriptionPlanInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  planId: string;

  name?: string | undefined;
  description?: string | undefined;
  monthlyPriceUsd?: number | undefined;
  /**
   * Full replacement of feature key/value pairs. If provided, replaces all existing features.
   * @public
   */
  features?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AdminUpdateSubscriptionPlanOutput {
  id: string;
  name: string;
}

/**
 * @public
 */
export interface AggregatedMetricResult {
  timestamp: Date;
  value: number;
}

/**
 * @public
 */
export interface AllowlistMarketplaceListingInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * The ID of the marketplace listing to allowlist.
   * @public
   */
  listingId: string;
}

/**
 * @public
 */
export interface AllowlistMarketplaceListingOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  allowlistEntryId: string;
}

/**
 * @public
 */
export interface CreateApiAuthTokenInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  expiresAt: Date;
  permissions: (PermissionEnum)[];
}

/**
 * @public
 */
export interface CreateApiAuthTokenOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  apiAuthTokenId: string;

  name: string;
  createdAt: Date;
  expiresAt?: Date | undefined;
  token: string;
}

/**
 * @public
 */
export interface GetApiAuthTokenInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  apiAuthTokenId: string;
}

/**
 * @public
 */
export interface GetApiAuthTokenOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  apiAuthTokenId: string;

  name: string;
  expiresAt: Date;
  createdAt: Date;
  permissions: (PermissionEnum)[];
}

/**
 * @public
 */
export interface ListApiAuthTokensInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface ApiAuthTokenSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  apiAuthTokenId: string;

  name: string;
  expiresAt: Date;
  createdAt: Date;
  permissions: (PermissionEnum)[];
}

/**
 * @public
 */
export interface ListApiAuthTokensOutput {
  tokens: (ApiAuthTokenSummary)[];
}

/**
 * @public
 */
export interface RevokeApiAuthTokenInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  apiAuthTokenId: string;
}

/**
 * @public
 */
export interface UpdateApiAuthTokenInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  apiAuthTokenId: string;

  permissions?: (PermissionEnum)[] | undefined;
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateApiAuthTokenOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  apiAuthTokenId: string;

  name: string;
  createdAt: Date;
  expiresAt: Date;
  permissions: (PermissionEnum)[];
}

/**
 * Represents a saved payment method.
 * @public
 */
export interface BillingPaymentMethod {
  paymentMethodId: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  isDefault: boolean;
}

/**
 * @public
 */
export interface CancelJobInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  jobId: string;
}

/**
 * @public
 */
export interface CancelJobOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  jobId: string;
}

/**
 * @public
 */
export interface CancelOrganizationInvitationInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  /**
   * Job was manually cancelled before completion.
   */
  CANCELLED: "CANCELLED",
  /**
   * Job failed due to an error in workflow execution.
   */
  FAILED: "FAILED",
  /**
   * Job has been submitted but not yet started execution.
   */
  PENDING: "PENDING",
  /**
   * Job is currently executing workflow steps.
   */
  RUNNING: "RUNNING",
  /**
   * Job completed successfully with all steps executed.
   */
  SUCCEEDED: "SUCCEEDED",
} as const
/**
 * @public
 */
export type JobStatus = typeof JobStatus[keyof typeof JobStatus]

/**
 * Summary information about a child job.
 * @public
 */
export interface ChildJobSummary {
  /**
   * Unique identifier of the child job.
   * @public
   */
  jobId: string;

  /**
   * Current status of the child job.
   * @public
   */
  status: JobStatus;

  /**
   * Name of the workflow being executed by the child job.
   * @public
   */
  workflowName: string;

  /**
   * Name of the step in the parent job that spawned this child job.
   * @public
   */
  parentStepName: string;

  /**
   * When the child job was created.
   * @public
   */
  createdAt: Date;

  /**
   * When the child job finished (if completed).
   * @public
   */
  finishedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ConsumerUsageBreakdown {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  organizationName: string;
  organizationKey: string;
  /**
   * Total transaction units used by this organization.
   * @public
   */
  units: number;

  /**
   * Total invocations by this organization.
   * @public
   */
  invocations: number;

  /**
   * Estimated cost for this organization based on billing model/override.
   * @public
   */
  estimatedCost?: number | undefined;
}

/**
 * @public
 */
export interface CreateBillingSetupIntentInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface CreateBillingSetupIntentOutput {
  clientSecret: string;
}

/**
 * @public
 */
export interface CreateConnectOnboardingLinkInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  returnUrl: string;
  refreshUrl: string;
}

/**
 * @public
 */
export interface CreateConnectOnboardingLinkOutput {
  url: string;
}

/**
 * Input for creating an interest record.
 * @public
 */
export interface CreateInterestInput {
  /**
   * Email address of the interested user.
   * @public
   */
  emailAddress: string;

  /**
   * Full name of the interested user.
   * @public
   */
  personName: string;

  /**
   * Name of the user's company or organization.
   * @public
   */
  company?: string | undefined;

  /**
   * Cloud provider the user primarily uses (e.g., AWS, Azure, GCP).
   * @public
   */
  cloud?: string | undefined;

  /**
   * User's primary goal or use case for workflow orchestration.
   * @public
   */
  goal?: string | undefined;

  /**
   * Current solution the user is using for workflow orchestration.
   * @public
   */
  currentSolution?: string | undefined;

  /**
   * Feedback from viewing a product demo.
   * @public
   */
  demoFeedback?: string | undefined;

  /**
   * Whether the user wants to join the beta program.
   * @public
   */
  joinBeta?: boolean | undefined;

  /**
   * Whether the user wants to receive product updates and announcements.
   * @public
   */
  receiveUpdates?: boolean | undefined;
}

/**
 * Output from creating an interest record.
 * @public
 */
export interface CreateInterestOutput {
  /**
   * Unique identifier of the created interest record.
   * @public
   */
  interestId: string;
}

/**
 * @public
 */
export interface CreateMarketplaceListingVersionInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * The workflow version ID to use for this listing version.
   * @public
   */
  workflowVersionId: string;
}

/**
 * @public
 */
export interface CreateMarketplaceListingVersionOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;

  versionNumber: number;
}

/**
 * @public
 */
export interface CreateOrganizationInput {
  /**
   * Can only contain the alphabet, numbers, underscores and hyphens.
   * @public
   */
  name: string;

  /**
   * Optional URL-safe identifier. Lowercase alphanumeric, dashes, and underscores only. Auto-generated from name if not provided. Immutable after creation.
   * @public
   */
  key?: string | undefined;

  /**
   * Must be between 3-50 characters.
   * @public
   */
  displayName: string;
}

/**
 * @public
 */
export interface CreateOrganizationOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  /**
   * Globally unique, URL-safe identifier. Alphanumeric, dashes, and underscores only. Immutable after creation.
   * @public
   */
  key: string;

  displayName: string;
  createdAt: Date;
}

/**
 * @public
 * @enum
 */
export const OrgRole = {
  /**
   * Standard member access with permissions defined by assigned roles.
   */
  MEMBER: "member",
  /**
   * Full administrative access including organization deletion and billing management.
   */
  OWNER: "owner",
} as const
/**
 * @public
 */
export type OrgRole = typeof OrgRole[keyof typeof OrgRole]

/**
 * @public
 */
export interface CreateOrganizationInvitationInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  email: string;
  /**
   * Organization role defining a user's permissions and access level within an organization.
   * @public
   */
  role: OrgRole;
}

/**
 * @public
 */
export interface CreateOrganizationInvitationOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;
}

/**
 * @public
 */
export interface CreateOrganizationSecretInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  key: string;
  /**
   * A string value that should never be logged or returned in API responses.
   * @public
   */
  value: string;

  description?: string | undefined;
}

/**
 * @internal
 */
export const CreateOrganizationSecretInputFilterSensitiveLog = (obj: CreateOrganizationSecretInput): any => ({
  ...obj,
  ...(obj.value && { value:
    SENSITIVE_STRING
  }),
})

/**
 * @public
 */
export interface CreateOrganizationSecretOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  secretId: string;

  key: string;
}

/**
 * @public
 */
export interface CreateResourcePoolInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  workerLimit: number;
  targetsAllWorkflows?: boolean | undefined;
  targetedWorkflowIds?: (string)[] | undefined;
}

/**
 * @public
 */
export interface CreateResourcePoolOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  poolId: string;
}

/**
 * @public
 */
export interface CreateRoleInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateRoleOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;
}

/**
 * @public
 */
export interface DeleteBillingPaymentMethodInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  paymentMethodId: string;
}

/**
 * @public
 */
export interface DeleteBillingPaymentMethodOutput {
}

/**
 * @public
 */
export interface DeleteMarketplaceListingBillingOverrideInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  organizationKey: string;
}

/**
 * @public
 */
export interface DeleteOrganizationInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface DeleteOrganizationSecretInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  secretId: string;
}

/**
 * @public
 */
export interface DeleteResourcePoolInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  poolId: string;
}

/**
 * @public
 */
export interface DeleteResourcePoolOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  poolId: string;
}

/**
 * @public
 */
export interface DeleteRoleInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;
}

/**
 * @public
 * @enum
 */
export const HistorySource = {
  /**
   * History item was generated by the workflow engine during step execution.
   */
  ENGINE: "engine",
  /**
   * History item was sent externally via SendJobEvent API.
   */
  EXTERNAL: "external",
} as const
/**
 * @public
 */
export type HistorySource = typeof HistorySource[keyof typeof HistorySource]

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  /**
   * Step failed with an error and workflow execution is halted.
   */
  FAILURE: "failure",
  /**
   * Step completed successfully and workflow can proceed.
   */
  SUCCESS: "success",
  /**
   * Step executed successfully but is waiting for external input before proceeding.
   */
  SUCCESSFUL_BUT_INCOMPLETE: "successful_but_incomplete",
} as const
/**
 * @public
 */
export type ExecutionStatus = typeof ExecutionStatus[keyof typeof ExecutionStatus]

/**
 * @public
 */
export interface StepExecutorOutput {
  /**
   * Execution status of a workflow step indicating success, partial success, or failure.
   * @public
   */
  status: ExecutionStatus;

  payload?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface ExecutionHistoryItem {
  id: string;
  stepName: string;
  stepExecutorType: string;
  /**
   * Source of an execution history item indicating whether it was generated by the workflow engine or sent externally.
   * @public
   */
  historySource: HistorySource;

  input: __DocumentType;
  output: StepExecutorOutput;
  startTimestamp: Date;
  endTimestamp: Date;
  /**
   * List of string values.
   * @public
   */
  errors: (string)[];

  /**
   * List of string values.
   * @public
   */
  warnings: (string)[];

  /**
   * Optional event ID for external events sent via SendJobEvent API. Used by WaitForEventIds step executor.
   * @public
   */
  eventId?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectAccountStatusInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface GetConnectAccountStatusOutput {
  onboarded: boolean;
  payoutsEnabled: boolean;
  accountId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UsageTimeBucket = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
} as const
/**
 * @public
 */
export type UsageTimeBucket = typeof UsageTimeBucket[keyof typeof UsageTimeBucket]

/**
 * @public
 */
export interface GetConsumerListingUsageTimeSeriesInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * Start of the time range (inclusive).
   * @public
   */
  since: Date;

  /**
   * End of the time range (exclusive).
   * @public
   */
  until: Date;

  /**
   * Time bucket granularity. Defaults to DAILY.
   * @public
   */
  bucket?: UsageTimeBucket | undefined;
}

/**
 * @public
 */
export interface UsageTimeSeriesDataPoint {
  timestamp: Date;
  /**
   * Total transaction units in this bucket.
   * @public
   */
  units: number;

  /**
   * Total number of invocations (job submissions) in this bucket.
   * @public
   */
  invocations: number;

  /**
   * Estimated cost based on billing model.
   * @public
   */
  estimatedCost?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const MarketplaceBillingModel = {
  /**
   * No charge for using the workflow.
   */
  FREE: "FREE",
  /**
   * Cost per workflow invocation (job submission).
   */
  PER_INVOCATION: "PER_INVOCATION",
  /**
   * Flat monthly subscription fee.
   */
  PER_MONTH: "PER_MONTH",
  /**
   * Cost per billable transaction unit.
   */
  PER_TRANSACTION_UNIT: "PER_TRANSACTION_UNIT",
} as const
/**
 * @public
 */
export type MarketplaceBillingModel = typeof MarketplaceBillingModel[keyof typeof MarketplaceBillingModel]

/**
 * @public
 */
export interface GetConsumerListingUsageTimeSeriesOutput {
  dataPoints: (UsageTimeSeriesDataPoint)[];
  /**
   * Total transaction units across all data points.
   * @public
   */
  totalUnits: number;

  /**
   * Total invocations across all data points.
   * @public
   */
  totalInvocations: number;

  /**
   * Total estimated cost across all data points.
   * @public
   */
  totalEstimatedCost?: number | undefined;

  /**
   * The billing model that applies to this consumer.
   * @public
   */
  effectiveBillingModel: MarketplaceBillingModel;

  /**
   * The effective cost per unit (after override if applicable).
   * @public
   */
  effectiveCostPerUnit?: number | undefined;

  /**
   * The effective cost per invocation (after override if applicable).
   * @public
   */
  effectiveCostPerInvocation?: number | undefined;

  /**
   * The effective cost per month (after override if applicable).
   * @public
   */
  effectiveCostPerMonth?: number | undefined;
}

/**
 * @public
 */
export interface GetJobInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  jobId: string;
}

/**
 * @public
 */
export interface WorkflowVersionOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;

  versionNumber: number;
}

/**
 * @public
 */
export interface JobSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  jobId: string;

  /**
   * Represents the current status of a workflow job execution.
   * @public
   */
  status: JobStatus;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  workflowName: string;
  workflowVersion: WorkflowVersionOutput;
  submittedByUser: string;
  createdAt: Date;
  updatedAt: Date;
  startedAt?: Date | undefined;
  finishedAt?: Date | undefined;
  /**
   * ID of the parent job if this job was spawned by a RunChildJob step. Null for top-level jobs.
   * @public
   */
  parentJobId?: string | undefined;

  /**
   * Name of the step in the parent job that spawned this child job.
   * @public
   */
  parentStepName?: string | undefined;

  /**
   * ID of the root job in the hierarchy. Null if this is a root job.
   * @public
   */
  rootJobId?: string | undefined;

  /**
   * Total billable transaction units consumed by this job and all its child jobs.
   * @public
   */
  billableTransactionUnits?: number | undefined;
}

/**
 * Summary information about a parent job.
 * @public
 */
export interface ParentJobInfo {
  /**
   * Unique identifier of the parent job.
   * @public
   */
  jobId: string;

  /**
   * Current status of the parent job.
   * @public
   */
  status: JobStatus;

  /**
   * Name of the workflow being executed by the parent job.
   * @public
   */
  workflowName: string;

  /**
   * Name of the step in the parent job that spawned this child job.
   * @public
   */
  stepName: string;
}

/**
 * @public
 */
export interface GetJobOutput {
  job: JobSummary;
  /**
   * Parent job information if this job was spawned by a RunChildJob step.
   * @public
   */
  parentJob?: ParentJobInfo | undefined;

  /**
   * List of child jobs spawned by this job's RunChildJob steps.
   * @public
   */
  childJobs?: (ChildJobSummary)[] | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceListingInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;
}

/**
 * Summary of a marketplace listing version.
 * @public
 */
export interface MarketplaceListingVersionSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;

  versionNumber: number;
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowVersionId: string;

  /**
   * The workflow version number from the underlying WorkflowVersion.
   * @public
   */
  workflowVersionNumber: number;

  /**
   * The workflow name.
   * @public
   */
  workflowName: string;

  /**
   * The workflow ID.
   * @public
   */
  workflowId: string;

  /**
   * JSON schema for workflow input (extracted from definitions.workflowInput). Null if no input defined.
   * @public
   */
  inputSchema?: string | undefined;

  /**
   * JSON schema for workflow output (extracted from definitions.workflowOutput).
   * @public
   */
  outputSchema: string;

  createdAt: Date;
}

/**
 * @public
 * @enum
 */
export const RateLimitWindowUnit = {
  /**
   * Rate limit window measured in hours.
   */
  HOURS: "HOURS",
  /**
   * Rate limit window measured in minutes.
   */
  MINUTES: "MINUTES",
} as const
/**
 * @public
 */
export type RateLimitWindowUnit = typeof RateLimitWindowUnit[keyof typeof RateLimitWindowUnit]

/**
 * @public
 * @enum
 */
export const MarketplaceListingStatus = {
  /**
   * Listing has been archived and is no longer visible.
   */
  ARCHIVED: "ARCHIVED",
  /**
   * Listing is not yet published and only visible to the owner.
   */
  DRAFT: "DRAFT",
  /**
   * Listing is active and visible according to visibility settings.
   */
  PUBLISHED: "PUBLISHED",
} as const
/**
 * @public
 */
export type MarketplaceListingStatus = typeof MarketplaceListingStatus[keyof typeof MarketplaceListingStatus]

/**
 * @public
 * @enum
 */
export const MarketplaceVisibility = {
  /**
   * Only granted organizations can see the listing.
   */
  PRIVATE: "PRIVATE",
  /**
   * Anyone can see and consume the listing.
   */
  PUBLIC: "PUBLIC",
} as const
/**
 * @public
 */
export type MarketplaceVisibility = typeof MarketplaceVisibility[keyof typeof MarketplaceVisibility]

/**
 * @public
 */
export interface GetMarketplaceListingOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * Unique identifier within the organization. URL-safe. Immutable after creation.
   * @public
   */
  key: string;

  title: string;
  description?: string | undefined;
  /**
   * Controls who can view and access a marketplace listing.
   * @public
   */
  visibility: MarketplaceVisibility;

  /**
   * Lifecycle status of a marketplace listing.
   * @public
   */
  status: MarketplaceListingStatus;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  organizationName: string;
  /**
   * The organization's URL-safe key.
   * @public
   */
  organizationKey: string;

  /**
   * The latest version details (highest version number).
   * @public
   */
  latestVersion: MarketplaceListingVersionSummary;

  /**
   * Total number of versions for this listing.
   * @public
   */
  totalVersions: number;

  /**
   * Billing model for this listing.
   * @public
   */
  billingModel: MarketplaceBillingModel;

  /**
   * Cost per transaction unit in dollars (for PER_TRANSACTION_UNIT billing model). Max $0.005.
   * @public
   */
  costPerUnit?: number | undefined;

  /**
   * Cost per invocation in dollars (for PER_INVOCATION billing model). Max $5.00.
   * @public
   */
  costPerInvocation?: number | undefined;

  /**
   * Monthly cost in dollars (for PER_MONTH billing model). Max $100.00.
   * @public
   */
  costPerMonth?: number | undefined;

  /**
   * Maximum number of job submissions allowed per consumer organization in the rate limit window.
   * @public
   */
  rateLimitMaxRequests: number;

  /**
   * Duration of the rate limit window.
   * @public
   */
  rateLimitWindowValue: number;

  /**
   * Time unit for the rate limit window.
   * @public
   */
  rateLimitWindowUnit: RateLimitWindowUnit;

  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface GetMarketplaceListingVersionInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;
}

/**
 * @public
 */
export interface GetMarketplaceListingVersionOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;

  versionNumber: number;
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowVersionId: string;

  workflowVersionNumber: number;
  workflowName: string;
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  /**
   * JSON schema for workflow input (extracted from definitions.workflowInput). Null if no input defined.
   * @public
   */
  inputSchema?: string | undefined;

  /**
   * JSON schema for workflow output (extracted from definitions.workflowOutput).
   * @public
   */
  outputSchema: string;

  createdAt: Date;
}

/**
 * @public
 */
export interface GetMyPermissionsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface GetMyPermissionsOutput {
  /**
   * List of permissions the user has for this organization
   * @public
   */
  permissions: (PermissionEnum)[];
}

/**
 * @public
 */
export interface GetOrganizationInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface GetOrganizationOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  /**
   * Globally unique, URL-safe identifier. Alphanumeric, dashes, and underscores only. Immutable after creation.
   * @public
   */
  key: string;

  displayName: string;
  createdAt: Date;
}

/**
 * @public
 */
export interface GetOrganizationInvitationInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;
}

/**
 * @public
 */
export interface GetOrganizationInvitationOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;

  email: string;
  /**
   * Organization role defining a user's permissions and access level within an organization.
   * @public
   */
  role: OrgRole;

  createdAt: Date;
  acceptedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetOrganizationSecretInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  secretId: string;
}

/**
 * @public
 */
export interface GetOrganizationSecretOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  secretId: string;

  key: string;
  description?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  createdByEmail?: string | undefined;
  updatedByEmail?: string | undefined;
}

/**
 * @public
 */
export interface GetOrganizationSubscriptionPlanInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface SubscriptionFeature {
  key: string;
  label: string;
  description?: string | undefined;
  value: string;
}

/**
 * @public
 */
export interface SubscriptionPlanDetails {
  id: string;
  name: string;
  description?: string | undefined;
  features: (SubscriptionFeature)[];
}

/**
 * @public
 */
export interface GetOrganizationSubscriptionPlanOutput {
  plan: SubscriptionPlanDetails;
}

/**
 * @public
 */
export interface GetPublicInvitationDetailsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;
}

/**
 * @public
 */
export interface GetPublicInvitationDetailsOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;

  email: string;
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  organizationName: string;
  inviterName: string;
  /**
   * Organization role defining a user's permissions and access level within an organization.
   * @public
   */
  role: OrgRole;

  expiresAt: Date;
  isExpired: boolean;
}

/**
 * @public
 */
export interface GetPublisherListingConsumerBreakdownInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * Start of the time range (inclusive).
   * @public
   */
  since: Date;

  /**
   * End of the time range (exclusive).
   * @public
   */
  until: Date;
}

/**
 * @public
 */
export interface GetPublisherListingConsumerBreakdownOutput {
  consumers: (ConsumerUsageBreakdown)[];
  /**
   * Total transaction units across all consumers.
   * @public
   */
  totalUnits: number;

  /**
   * Total invocations across all consumers.
   * @public
   */
  totalInvocations: number;

  /**
   * Total estimated cost across all consumers.
   * @public
   */
  totalEstimatedCost?: number | undefined;
}

/**
 * @public
 */
export interface GetPublisherListingUsageTimeSeriesInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * Start of the time range (inclusive).
   * @public
   */
  since: Date;

  /**
   * End of the time range (exclusive).
   * @public
   */
  until: Date;

  /**
   * Time bucket granularity. Defaults to DAILY.
   * @public
   */
  bucket?: UsageTimeBucket | undefined;
}

/**
 * @public
 */
export interface GetPublisherListingUsageTimeSeriesOutput {
  dataPoints: (UsageTimeSeriesDataPoint)[];
  /**
   * Total transaction units across all data points.
   * @public
   */
  totalUnits: number;

  /**
   * Total invocations across all data points.
   * @public
   */
  totalInvocations: number;

  /**
   * Total estimated cost across all data points.
   * @public
   */
  totalEstimatedCost?: number | undefined;
}

/**
 * @public
 */
export interface GetResourcePoolInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  poolId: string;
}

/**
 * @public
 */
export interface ResourcePoolDetail {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  poolId: string;

  name: string;
  workerLimit: number;
  targetsAllWorkflows: boolean;
  targetedWorkflowIds?: (string)[] | undefined;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface GetResourcePoolOutput {
  resourcePool: ResourcePoolDetail;
}

/**
 * @public
 */
export interface GetRoleInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;
}

/**
 * @public
 */
export interface GetRoleOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;

  name: string;
  description?: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionPlanInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  subscriptionPlanId: string;
}

/**
 * @public
 */
export interface GetSubscriptionPlanOutput {
  plan: SubscriptionPlanDetails;
}

/**
 * @public
 */
export interface GetTaggedWorkflowVersionInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  tag: string;
}

/**
 * @public
 */
export interface GetTaggedWorkflowVersionOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;

  versionNumber: number;
}

/**
 * @public
 */
export interface GetWorkflowInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;
}

/**
 * @public
 */
export interface GetWorkflowOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  name: string;
  createdAt: Date;
}

/**
 * @public
 * @enum
 */
export const MetricAggregation = {
  /**
   * Average value over the time bucket.
   */
  AVG: "avg",
  /**
   * Total count of occurrences.
   */
  COUNT: "count",
  /**
   * Maximum value observed in the time bucket.
   */
  MAX: "max",
} as const
/**
 * @public
 */
export type MetricAggregation = typeof MetricAggregation[keyof typeof MetricAggregation]

/**
 * @public
 * @enum
 */
export const TimeBucket = {
  /**
   * Aggregate metrics by day.
   */
  DAY: "day",
  /**
   * Aggregate metrics by hour.
   */
  HOUR: "hour",
} as const
/**
 * @public
 */
export type TimeBucket = typeof TimeBucket[keyof typeof TimeBucket]

/**
 * @public
 * @enum
 */
export const WorkflowMetricType = {
  /**
   * Total billable transaction units consumed by workflow executions.
   */
  BILLABLE_TRANSACTION_UNITS: "billable_transaction_units",
  /**
   * Count of jobs that completed successfully.
   */
  JOBS_COMPLETED_SUCCESSFULLY: "jobs_completed_successfully",
  /**
   * Count of jobs that failed during execution.
   */
  JOBS_FAILED: "jobs_failed",
  /**
   * Count of jobs submitted for execution.
   */
  JOBS_SUBMITTED: "jobs_submitted",
  /**
   * Duration of job execution in seconds from start to completion.
   */
  JOB_DURATION_SECONDS: "job_duration_seconds",
  /**
   * Count of jobs that exceeded timeout limits.
   */
  JOB_TIMEOUT_COUNT: "job_timeout_count",
  /**
   * Resource pool utilization percentage.
   */
  RESOURCE_UTILIZATION: "resource_utilization",
  /**
   * Number of resource pool workers available for use.
   */
  RESOURCE_UTILIZATION_AVAILABLE: "resource_utilization_available",
  /**
   * Number of resource pool workers currently in use.
   */
  RESOURCE_UTILIZATION_USED: "resource_utilization_used",
  /**
   * Duration of workflow step execution in seconds.
   */
  STEP_DURATION_SECONDS: "step_duration_seconds",
  /**
   * Count of individual workflow step failures.
   */
  STEP_FAILURES: "step_failures",
  /**
   * Count of workflow step retry attempts.
   */
  STEP_RETRIES: "step_retries",
} as const
/**
 * @public
 */
export type WorkflowMetricType = typeof WorkflowMetricType[keyof typeof WorkflowMetricType]

/**
 * @public
 */
export interface GetWorkflowMetricTimeSeriesInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Types of workflow metrics available for analysis and monitoring.
   * @public
   */
  metric: WorkflowMetricType;

  /**
   * Aggregation methods for metric data points over time.
   * @public
   */
  aggregation: MetricAggregation;

  /**
   * Time bucket granularity for metric aggregation.
   * @public
   */
  bucket: TimeBucket;

  since: Date;
  until: Date;
}

/**
 * @public
 */
export interface GetWorkflowMetricTimeSeriesOutput {
  results: (AggregatedMetricResult)[];
}

/**
 * @public
 */
export interface GetWorkflowStateInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  jobId: string;
}

/**
 * @public
 */
export interface WorkflowState {
  nextStepName?: string | undefined;
  executionData: __DocumentType;
  executionHistory: (ExecutionHistoryItem)[];
}

/**
 * @public
 */
export interface GetWorkflowStateOutput {
  state: WorkflowState;
}

/**
 * @public
 */
export interface GetWorkflowVersionInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;
}

/**
 * @public
 */
export interface GetWorkflowVersionOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;

  versionNumber: number;
  definition: string;
  createdAt: Date;
  tags: (string)[];
}

/**
 * @public
 */
export interface GrantMarketplaceAccessInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * The organization ID to grant access to.
   * @public
   */
  grantedOrganizationId: string;
}

/**
 * @public
 */
export interface GrantMarketplaceAccessOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  grantId: string;
}

/**
 * @public
 */
export interface HandleStripeConnectWebhookInput {
}

/**
 * @public
 */
export interface HandleStripeConnectWebhookOutput {
  received: boolean;
}

/**
 * @public
 */
export interface HandleStripeWebhookInput {
}

/**
 * @public
 */
export interface HandleStripeWebhookOutput {
  received: boolean;
}

/**
 * @public
 */
export interface IsMarketplaceListingAllowlistedInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;
}

/**
 * @public
 */
export interface IsMarketplaceListingAllowlistedOutput {
  isAllowlisted: boolean;
  allowlistedAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const JobHierarchyFilter = {
  /**
   * Return all jobs regardless of parent/child status.
   */
  ALL: "ALL",
  /**
   * Return only child jobs (has parentJobId).
   */
  CHILD_JOBS_ONLY: "CHILD_JOBS_ONLY",
  /**
   * Return only top-level jobs (no parentJobId).
   */
  TOP_LEVEL_ONLY: "TOP_LEVEL_ONLY",
} as const
/**
 * @public
 */
export type JobHierarchyFilter = typeof JobHierarchyFilter[keyof typeof JobHierarchyFilter]

/**
 * @public
 */
export interface ListJobsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Represents the current status of a workflow job execution.
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * Filter jobs by workflow name (case-insensitive contains match).
   * @public
   */
  workflowName?: string | undefined;

  /**
   * Filter jobs by exact workflow version number.
   * @public
   */
  workflowVersionNumber?: number | undefined;

  /**
   * Filter jobs created on or after this ISO 8601 timestamp.
   * @public
   */
  createdAfter?: string | undefined;

  /**
   * Filter jobs created on or before this ISO 8601 timestamp.
   * @public
   */
  createdBefore?: string | undefined;

  /**
   * Filter by parent/child relationship. Defaults to ALL.
   * @public
   */
  jobHierarchy?: JobHierarchyFilter | undefined;

  pageToken?: string | undefined;
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListJobsOutput {
  jobs: (JobSummary)[];
  nextPageToken?: string | undefined;
  totalCount: number;
}

/**
 * @public
 */
export interface ResumeJobInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  jobId: string;
}

/**
 * @public
 */
export interface ResumeJobOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  jobId: string;
}

/**
 * Input for sending an external event to a job.
 * @public
 */
export interface SendJobEventInput {
  /**
   * Organization ID that owns the job.
   * @public
   */
  organizationId: string;

  /**
   * Unique identifier of the job to send the event to.
   * @public
   */
  jobId: string;

  /**
   * Event identifier that workflows can wait for using WaitForEventIds steps.
   * @public
   */
  eventId: string;

  /**
   * Optional payload data to include with the event. Reserved for future extensibility.
   * @public
   */
  payload?: __DocumentType | undefined;
}

/**
 * Output from sending an external event to a job.
 * @public
 */
export interface SendJobEventOutput {
  /**
   * Unique identifier of the job that received the event.
   * @public
   */
  jobId: string;

  /**
   * Event identifier that was sent.
   * @public
   */
  eventId: string;
}

/**
 * @public
 */
export type WorkflowVersionSelector =
  | WorkflowVersionSelector.TagMember
  | WorkflowVersionSelector.VersionIdMember
  | WorkflowVersionSelector.VersionNumberMember
  | WorkflowVersionSelector.$UnknownMember

/**
 * @public
 */
export namespace WorkflowVersionSelector {

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  export interface VersionIdMember {
    versionId: string;
    versionNumber?: never;
    tag?: never;
    $unknown?: never;
  }

  export interface VersionNumberMember {
    versionId?: never;
    versionNumber: number;
    tag?: never;
    $unknown?: never;
  }

  export interface TagMember {
    versionId?: never;
    versionNumber?: never;
    tag: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    versionId?: never;
    versionNumber?: never;
    tag?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    versionId: (value: string) => T;
    versionNumber: (value: number) => T;
    tag: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: WorkflowVersionSelector,
    visitor: Visitor<T>
  ): T => {
    if (value.versionId !== undefined) return visitor.versionId(value.versionId);
    if (value.versionNumber !== undefined) return visitor.versionNumber(value.versionNumber);
    if (value.tag !== undefined) return visitor.tag(value.tag);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

}

/**
 * Input for submitting a new workflow job.
 * @public
 */
export interface SubmitJobInput {
  /**
   * Organization ID that owns the workflow.
   * @public
   */
  organizationId: string;

  /**
   * Unique identifier of the workflow to execute.
   * @public
   */
  workflowId: string;

  /**
   * Selector for which version of the workflow to execute.
   * @public
   */
  workflowVersion: WorkflowVersionSelector;

  /**
   * Optional input data to pass to the workflow execution.
   * @public
   */
  inputJson?: __DocumentType | undefined;
}

/**
 * Output from submitting a workflow job.
 * @public
 */
export interface SubmitJobOutput {
  /**
   * Unique identifier of the created job.
   * @public
   */
  jobId: string;
}

/**
 * @public
 */
export interface ListAllowlistedMarketplaceListingsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Optional search term to filter allowlisted listings by title or description.
   * @public
   */
  search?: string | undefined;

  /**
   * Maximum number of listings to return. Defaults to 50.
   * @public
   */
  limit?: number | undefined;

  /**
   * Token for pagination to retrieve the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface MarketplaceListingSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * Unique identifier within the organization. URL-safe. Immutable after creation.
   * @public
   */
  key: string;

  title: string;
  description?: string | undefined;
  /**
   * Controls who can view and access a marketplace listing.
   * @public
   */
  visibility: MarketplaceVisibility;

  /**
   * Lifecycle status of a marketplace listing.
   * @public
   */
  status: MarketplaceListingStatus;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  organizationName: string;
  /**
   * The organization's URL-safe key.
   * @public
   */
  organizationKey: string;

  /**
   * The workflow name from the latest version.
   * @public
   */
  workflowName: string;

  /**
   * The listing version number of the latest version.
   * @public
   */
  latestVersionNumber: number;

  /**
   * The workflow version number of the latest version.
   * @public
   */
  workflowVersionNumber: number;

  /**
   * Total number of versions for this listing.
   * @public
   */
  totalVersions: number;

  /**
   * Billing model for this listing.
   * @public
   */
  billingModel: MarketplaceBillingModel;

  /**
   * Cost per transaction unit in dollars (for PER_TRANSACTION_UNIT billing model). Max $0.005.
   * @public
   */
  costPerUnit?: number | undefined;

  /**
   * Cost per invocation in dollars (for PER_INVOCATION billing model). Max $5.00.
   * @public
   */
  costPerInvocation?: number | undefined;

  /**
   * Monthly cost in dollars (for PER_MONTH billing model). Max $100.00.
   * @public
   */
  costPerMonth?: number | undefined;

  /**
   * Maximum number of job submissions allowed per consumer organization in the rate limit window.
   * @public
   */
  rateLimitMaxRequests: number;

  /**
   * Duration of the rate limit window.
   * @public
   */
  rateLimitWindowValue: number;

  /**
   * Time unit for the rate limit window.
   * @public
   */
  rateLimitWindowUnit: RateLimitWindowUnit;

  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface ListAllowlistedMarketplaceListingsOutput {
  listings: (MarketplaceListingSummary)[];
  /**
   * Token to retrieve the next page of results, if available.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceListingBillingOverridesInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;
}

/**
 * @public
 */
export interface MarketplaceBillingOverride {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  id: string;

  organizationKey: string;
  /**
   * Billing model for marketplace listings.
   * @public
   */
  billingModel?: MarketplaceBillingModel | undefined;

  /**
   * Cost per transaction unit in dollars. Maximum $0.005 per unit.
   * @public
   */
  costPerUnit?: number | undefined;

  /**
   * Cost per invocation in dollars. Maximum $5.00 per invocation.
   * @public
   */
  costPerInvocation?: number | undefined;

  /**
   * Monthly subscription cost in dollars. Maximum $100.00 per month.
   * @public
   */
  costPerMonth?: number | undefined;

  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface ListMarketplaceListingBillingOverridesOutput {
  overrides: (MarketplaceBillingOverride)[];
}

/**
 * @public
 */
export interface ListMarketplaceListingVersionsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;
}

/**
 * @public
 */
export interface ListMarketplaceListingVersionsOutput {
  versions: (MarketplaceListingVersionSummary)[];
}

/**
 * @public
 */
export interface ListMyMarketplaceListingsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Filter by listing status.
   * @public
   */
  status?: MarketplaceListingStatus | undefined;

  /**
   * Maximum number of listings to return. Defaults to 50.
   * @public
   */
  limit?: number | undefined;

  /**
   * Token for pagination to retrieve the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMyMarketplaceListingsOutput {
  listings: (MarketplaceListingSummary)[];
  /**
   * Token to retrieve the next page of results, if available.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface MarkAllNotificationsReadInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface MarkAllNotificationsReadOutput {
  markedCount: number;
}

/**
 * @public
 */
export interface ListMarketplaceListingsInput {
  /**
   * Optional search term to filter listings by title or description.
   * @public
   */
  search?: string | undefined;

  /**
   * Filter by organization ID to show only listings from a specific organization.
   * @public
   */
  organizationId?: string | undefined;

  /**
   * Maximum number of listings to return. Defaults to 50.
   * @public
   */
  limit?: number | undefined;

  /**
   * Token for pagination to retrieve the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceListingsOutput {
  listings: (MarketplaceListingSummary)[];
  /**
   * Token to retrieve the next page of results, if available.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface MarkNotificationReadInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  notificationId: string;
}

/**
 * @public
 */
export interface MarkNotificationReadOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  notificationId: string;
}

/**
 * @public
 */
export interface ListNotificationsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 * @enum
 */
export const NotificationSeverityEnum = {
  ERROR: "ERROR",
  INFO: "INFO",
  WARNING: "WARNING",
} as const
/**
 * @public
 */
export type NotificationSeverityEnum = typeof NotificationSeverityEnum[keyof typeof NotificationSeverityEnum]

/**
 * @public
 */
export interface NotificationSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  notificationId: string;

  severity: NotificationSeverityEnum;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  notifications: (NotificationSummary)[];
  unreadCount: number;
}

/**
 * @public
 */
export interface ListOrganizationsInput {
}

/**
 * @public
 */
export interface OrganizationSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  /**
   * Globally unique, URL-safe identifier. Alphanumeric, dashes, and underscores only. Immutable after creation.
   * @public
   */
  key: string;

  displayName: string;
  createdAt: Date;
}

/**
 * @public
 */
export interface ListOrganizationsOutput {
  organizations: (OrganizationSummary)[];
}

/**
 * @public
 */
export interface ListOrganizationUsersAndInvitationsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface OrganizationInvitationSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;

  email: string;
  /**
   * Organization role defining a user's permissions and access level within an organization.
   * @public
   */
  role: OrgRole;

  invitedAt: Date;
}

/**
 * @public
 */
export interface OrganizationUserSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  userId: string;

  email: string;
  /**
   * Organization role defining a user's permissions and access level within an organization.
   * @public
   */
  role: OrgRole;

  joinedAt: Date;
}

/**
 * @public
 */
export interface ListOrganizationUsersAndInvitationsOutput {
  users: (OrganizationUserSummary)[];
  invitations: (OrganizationInvitationSummary)[];
}

/**
 * @public
 */
export interface ListBillingPaymentMethodsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface ListBillingPaymentMethodsOutput {
  paymentMethods: (BillingPaymentMethod)[];
}

/**
 * @public
 */
export interface RejectOrganizationInvitationInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;
}

/**
 * @public
 */
export interface RejectOrganizationInvitationOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  invitationId: string;
}

/**
 * @public
 */
export interface RemoveOrganizationMembershipInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  userId: string;
}

/**
 * @public
 */
export interface UpdateOrganizationMembershipInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  userId: string;

  /**
   * Organization role defining a user's permissions and access level within an organization.
   * @public
   */
  role: OrgRole;
}

/**
 * @public
 */
export interface UpdateOrganizationMembershipOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  userId: string;

  /**
   * Organization role defining a user's permissions and access level within an organization.
   * @public
   */
  role: OrgRole;
}

/**
 * @public
 */
export interface ListRolesInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface RoleSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;

  name: string;
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListRolesOutput {
  roles: (RoleSummary)[];
}

/**
 * @public
 */
export interface UpdateRoleInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;

  name?: string | undefined;
  description?: string | undefined;
  permissions: (PermissionEnum)[];
}

/**
 * @public
 */
export interface UpdateRoleOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  roleId: string;

  name: string;
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcePoolsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface ResourcePoolSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  poolId: string;

  name: string;
  workerLimit: number;
  targetsAllWorkflows: boolean;
  targetedWorkflowIds?: (string)[] | undefined;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @public
 */
export interface ListResourcePoolsOutput {
  resourcePools: (ResourcePoolSummary)[];
}

/**
 * @public
 */
export interface UpdateResourcePoolInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  poolId: string;

  name?: string | undefined;
  workerLimit?: number | undefined;
  targetsAllWorkflows?: boolean | undefined;
  targetedWorkflowIds?: (string)[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourcePoolOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  poolId: string;
}

/**
 * @public
 */
export interface UpdateOrganizationInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  displayName: string;
}

/**
 * @public
 */
export interface UpdateOrganizationOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
  /**
   * Globally unique, URL-safe identifier. Alphanumeric, dashes, and underscores only. Immutable after creation.
   * @public
   */
  key: string;

  displayName: string;
  createdAt: Date;
}

/**
 * @public
 */
export interface ListWorkflowsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface WorkflowSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  name: string;
  createdAt: Date;
}

/**
 * @public
 */
export interface ListWorkflowsOutput {
  workflows: (WorkflowSummary)[];
}

/**
 * @public
 */
export interface RegisterWorkflowInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  name: string;
}

/**
 * @public
 */
export interface RegisterWorkflowOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;
}

/**
 * @public
 */
export interface SetWorkflowVersionTagInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  tag: string;
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;
}

/**
 * @public
 */
export interface SetWorkflowVersionTagOutput {
  success: boolean;
}

/**
 * @public
 */
export interface ListWorkflowVersionsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;
}

/**
 * @public
 */
export interface WorkflowVersionSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;

  versionNumber: number;
  definition: string;
  createdAt: Date;
  tags: (string)[];
}

/**
 * @public
 */
export interface ListWorkflowVersionsOutput {
  versions: (WorkflowVersionSummary)[];
}

/**
 * @public
 */
export interface RegisterWorkflowVersionInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  definition: string;
}

/**
 * @public
 */
export interface RegisterWorkflowVersionOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  workflowId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  versionId: string;

  versionNumber: number;
}

/**
 * @public
 */
export interface ListOrganizationSecretsInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;
}

/**
 * @public
 */
export interface OrganizationSecretSummary {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  secretId: string;

  key: string;
  description?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  createdByEmail?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationSecretsOutput {
  secrets: (OrganizationSecretSummary)[];
}

/**
 * @public
 */
export interface UpdateOrganizationSecretInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  secretId: string;

  /**
   * A string value that should never be logged or returned in API responses.
   * @public
   */
  value?: string | undefined;

  description?: string | undefined;
}

/**
 * @internal
 */
export const UpdateOrganizationSecretInputFilterSensitiveLog = (obj: UpdateOrganizationSecretInput): any => ({
  ...obj,
  ...(obj.value && { value:
    SENSITIVE_STRING
  }),
})

/**
 * @public
 */
export interface UpdateOrganizationSecretOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  secretId: string;

  key: string;
  description?: string | undefined;
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface PublishWorkflowToMarketplaceInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * The ID of the workflow version to publish.
   * @public
   */
  workflowVersionId: string;

  /**
   * Optional URL-safe identifier unique within the organization. Lowercase alphanumeric, dashes, and underscores only. Auto-generated from title if not provided. Immutable after creation.
   * @public
   */
  key?: string | undefined;

  /**
   * Display title for the marketplace listing.
   * @public
   */
  title: string;

  /**
   * Optional description explaining what the workflow does.
   * @public
   */
  description?: string | undefined;

  /**
   * Visibility setting for the listing. Defaults to PUBLIC.
   * @public
   */
  visibility?: MarketplaceVisibility | undefined;

  /**
   * Maximum number of job submissions allowed per consumer organization in the rate limit window. Defaults to 10.
   * @public
   */
  rateLimitMaxRequests?: number | undefined;

  /**
   * Duration of the rate limit window. Defaults to 1.
   * @public
   */
  rateLimitWindowValue?: number | undefined;

  /**
   * Time unit for the rate limit window. Defaults to HOURS.
   * @public
   */
  rateLimitWindowUnit?: RateLimitWindowUnit | undefined;
}

/**
 * @public
 */
export interface PublishWorkflowToMarketplaceOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * The URL-safe key assigned to this listing.
   * @public
   */
  key: string;
}

/**
 * @public
 */
export interface ResolveOrganizationSecretInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  key?: string | undefined;
}

/**
 * @public
 */
export interface ResolveOrganizationSecretOutput {
  key: string;
  /**
   * A string value that should never be logged or returned in API responses.
   * @public
   */
  value: string;
}

/**
 * @internal
 */
export const ResolveOrganizationSecretOutputFilterSensitiveLog = (obj: ResolveOrganizationSecretOutput): any => ({
  ...obj,
  ...(obj.value && { value:
    SENSITIVE_STRING
  }),
})

/**
 * @public
 */
export interface RevokeMarketplaceAccessInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  grantedOrganizationId: string;
}

/**
 * @public
 */
export interface SearchMarketplaceOrganizationsInput {
  /**
   * Optional search term to filter organizations by name.
   * @public
   */
  search?: string | undefined;

  /**
   * Maximum number of organizations to return. Defaults to 10.
   * @public
   */
  limit?: number | undefined;
}

/**
 * An organization that has published listings on the marketplace.
 * @public
 */
export interface MarketplaceOrganization {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * The organization's URL-safe key.
   * @public
   */
  key: string;

  name: string;
  displayName: string;
}

/**
 * @public
 */
export interface SearchMarketplaceOrganizationsOutput {
  organizations: (MarketplaceOrganization)[];
}

/**
 * @public
 */
export interface ListSubscriptionPlansOutput {
  plans: (SubscriptionPlanDetails)[];
}

/**
 * @public
 */
export interface UnallowlistMarketplaceListingInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;
}

/**
 * @public
 */
export interface UnpublishWorkflowFromMarketplaceInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;
}

/**
 * @public
 */
export interface UpdateMarketplaceListingBillingInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * The billing model for this listing.
   * @public
   */
  billingModel?: MarketplaceBillingModel | undefined;

  /**
   * Cost per transaction unit in dollars (for PER_TRANSACTION_UNIT billing model). Max $0.005.
   * @public
   */
  costPerUnit?: number | undefined;

  /**
   * Cost per invocation in dollars (for PER_INVOCATION billing model). Max $5.00.
   * @public
   */
  costPerInvocation?: number | undefined;

  /**
   * Monthly cost in dollars (for PER_MONTH billing model). Max $100.00.
   * @public
   */
  costPerMonth?: number | undefined;

  /**
   * Maximum number of job submissions allowed per consumer organization in the rate limit window.
   * @public
   */
  rateLimitMaxRequests?: number | undefined;

  /**
   * Duration of the rate limit window.
   * @public
   */
  rateLimitWindowValue?: number | undefined;

  /**
   * Time unit for the rate limit window.
   * @public
   */
  rateLimitWindowUnit?: RateLimitWindowUnit | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceListingBillingOutput {
  success: boolean;
}

/**
 * @public
 */
export interface UpdateMarketplaceListingMetadataInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * Updated description for the listing.
   * @public
   */
  description?: string | undefined;

  /**
   * Updated visibility setting for the listing.
   * @public
   */
  visibility?: MarketplaceVisibility | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceListingMetadataOutput {
  success: boolean;
}

/**
 * @public
 */
export interface UpsertMarketplaceListingBillingOverrideInput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  organizationId: string;

  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  listingId: string;

  /**
   * The organization key to create an override for.
   * @public
   */
  organizationKey: string;

  /**
   * Override billing model (null = use listing default).
   * @public
   */
  billingModel?: MarketplaceBillingModel | undefined;

  /**
   * Override cost per unit (null = use listing default). Max $0.005.
   * @public
   */
  costPerUnit?: number | undefined;

  /**
   * Override cost per invocation (null = use listing default). Max $5.00.
   * @public
   */
  costPerInvocation?: number | undefined;

  /**
   * Override monthly cost (null = use listing default). Max $100.00.
   * @public
   */
  costPerMonth?: number | undefined;
}

/**
 * @public
 */
export interface UpsertMarketplaceListingBillingOverrideOutput {
  /**
   * Universally unique identifier in standard UUID format with hyphens.
   * @public
   */
  id: string;
}

/**
 * @public
 */
export interface ListOrganizationInvitationsForUserInput {
}

/**
 * @public
 */
export interface ListOrganizationInvitationsForUserOutput {
  invitations: (OrganizationInvitationSummary)[];
}

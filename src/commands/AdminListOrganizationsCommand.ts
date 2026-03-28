// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminListOrganizationsInput,
  AdminListOrganizationsOutput,
} from "../models/models_0";
import {
  de_AdminListOrganizationsCommand,
  se_AdminListOrganizationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdminListOrganizationsCommand}.
 */
export interface AdminListOrganizationsCommandInput extends AdminListOrganizationsInput {}
/**
 * @public
 *
 * The output of {@link AdminListOrganizationsCommand}.
 */
export interface AdminListOrganizationsCommandOutput extends AdminListOrganizationsOutput, __MetadataBearer {}

/**
 * Lists all organizations across the entire platform with summary metrics, restricted to callers with the `staff:read` permission. **Requires:** `staff:read` permission (staff/internal use only). **Supports:** - **Search** (`search` query param): case-insensitive substring match against an organization's `name`, `key`, and `displayName` fields simultaneously. - **Pagination** (`limit` + `nextToken`): cursor-based, default page size 50, max 100. Pass the returned `nextToken` back on the next request to fetch the next page. Results are ordered by `createdAt` descending (newest first). **Each result includes** the organization ID, name, key, displayName, current subscription plan name, member count, and workflow count. **Related endpoints:** - Use `AdminGetOrganization` to retrieve full details (job count, role count, plan ID) for a specific organization. - Use `AdminUpdateOrganizationSubscriptionPlan` to change an organization's plan after locating it here. - Use `AdminListOrganizationFeatureOverrides` / `AdminSetOrganizationFeatureOverride` to inspect or adjust per-organization feature flag overrides. - The non-admin `ListOrganizations` endpoint returns only organizations the authenticated user belongs to; this endpoint returns all organizations regardless of membership. **Errors:** `401 AuthenticationError` if unauthenticated, `403 AuthorizationError` if the caller lacks `staff:read`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminListOrganizationsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminListOrganizationsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminListOrganizationsInput
 *   search: "STRING_VALUE",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new AdminListOrganizationsCommand(input);
 * const response = await client.send(command);
 * // { // AdminListOrganizationsOutput
 * //   organizations: [ // AdminOrganizationSummaryList // required
 * //     { // AdminOrganizationSummary
 * //       organizationId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       subscriptionPlanName: "STRING_VALUE",
 * //       memberCount: Number("int"), // required
 * //       workflowCount: Number("int"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AdminListOrganizationsCommandInput - {@link AdminListOrganizationsCommandInput}
 * @returns {@link AdminListOrganizationsCommandOutput}
 * @see {@link AdminListOrganizationsCommandInput} for command's `input` shape.
 * @see {@link AdminListOrganizationsCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
 *
 * @throws {@link AuthorizationError} (client fault)
 *  Authorization failed due to insufficient permissions. The authenticated user or API token does not have permission to perform this operation.
 *
 * @throws {@link AuthenticationError} (client fault)
 *  Authentication failed due to missing, invalid, or expired credentials. Verify the authentication token is valid and not expired.
 *
 * @throws {@link UnhandledError} (server fault)
 *  An unexpected server error occurred. If the problem persists, contact support with the error details.
 *
 * @throws {@link JustWorkflowItServiceException}
 * <p>Base exception class for all service exceptions from JustWorkflowIt service.</p>
 *
 *
 * @public
 */
export class AdminListOrganizationsCommand extends $Command.classBuilder<AdminListOrganizationsCommandInput, AdminListOrganizationsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminListOrganizations", {

  })
  .n("JustWorkflowItClient", "AdminListOrganizationsCommand")
  .f(void 0, void 0)
  .ser(se_AdminListOrganizationsCommand)
  .de(de_AdminListOrganizationsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminListOrganizationsInput;
      output: AdminListOrganizationsOutput;
  };
  sdk: {
      input: AdminListOrganizationsCommandInput;
      output: AdminListOrganizationsCommandOutput;
  };
};
}

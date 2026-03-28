// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminGetOrganizationInput,
  AdminGetOrganizationOutput,
} from "../models/models_0";
import {
  de_AdminGetOrganizationCommand,
  se_AdminGetOrganizationCommand,
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
 * The input for {@link AdminGetOrganizationCommand}.
 */
export interface AdminGetOrganizationCommandInput extends AdminGetOrganizationInput {}
/**
 * @public
 *
 * The output of {@link AdminGetOrganizationCommand}.
 */
export interface AdminGetOrganizationCommandOutput extends AdminGetOrganizationOutput, __MetadataBearer {}

/**
 * Retrieves full admin-level details for a single organization by ID, including aggregate counts for members, workflows, jobs, and roles that are not available through the standard `GetOrganization` endpoint. **Requires:** `staff:read` permission (internal/staff use only). **Response fields of note:** - `subscriptionPlanId` / `subscriptionPlanName` — identifies the current plan; use `AdminUpdateOrganizationSubscriptionPlan` to change it. - `jobCount` / `roleCount` — additional counters beyond what `AdminListOrganizations` returns in its summary list. **Related endpoints:** - `AdminListOrganizations` — find organizations by name/key search, then call this endpoint for the full detail view. - `AdminListRoles` / `AdminGetRole` — drill into the role definitions counted by `roleCount`. - `AdminListOrganizationFeatureOverrides` / `AdminSetOrganizationFeatureOverride` — inspect or override per-organization feature flags. - `GetOrganizationSubscriptionPlan` — retrieves plan usage and limits from the organization owner's perspective. **Errors:** `404 NotFoundError` if the organization does not exist, `403 AuthorizationError` if the caller lacks `staff:read`, `401 AuthenticationError` if unauthenticated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminGetOrganizationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminGetOrganizationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminGetOrganizationInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new AdminGetOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // AdminGetOrganizationOutput
 * //   organizationId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   subscriptionPlanName: "STRING_VALUE",
 * //   subscriptionPlanId: "STRING_VALUE",
 * //   memberCount: Number("int"), // required
 * //   workflowCount: Number("int"), // required
 * //   jobCount: Number("int"), // required
 * //   roleCount: Number("int"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param AdminGetOrganizationCommandInput - {@link AdminGetOrganizationCommandInput}
 * @returns {@link AdminGetOrganizationCommandOutput}
 * @see {@link AdminGetOrganizationCommandInput} for command's `input` shape.
 * @see {@link AdminGetOrganizationCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
 *
 * @throws {@link NotFoundError} (client fault)
 *  The requested resource was not found. Verify the resource ID is correct and the resource exists in the specified organization.
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
export class AdminGetOrganizationCommand extends $Command.classBuilder<AdminGetOrganizationCommandInput, AdminGetOrganizationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminGetOrganization", {

  })
  .n("JustWorkflowItClient", "AdminGetOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_AdminGetOrganizationCommand)
  .de(de_AdminGetOrganizationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminGetOrganizationInput;
      output: AdminGetOrganizationOutput;
  };
  sdk: {
      input: AdminGetOrganizationCommandInput;
      output: AdminGetOrganizationCommandOutput;
  };
};
}

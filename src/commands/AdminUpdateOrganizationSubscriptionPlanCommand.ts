// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminUpdateOrganizationSubscriptionPlanInput,
  AdminUpdateOrganizationSubscriptionPlanOutput,
} from "../models/models_0";
import {
  de_AdminUpdateOrganizationSubscriptionPlanCommand,
  se_AdminUpdateOrganizationSubscriptionPlanCommand,
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
 * The input for {@link AdminUpdateOrganizationSubscriptionPlanCommand}.
 */
export interface AdminUpdateOrganizationSubscriptionPlanCommandInput extends AdminUpdateOrganizationSubscriptionPlanInput {}
/**
 * @public
 *
 * The output of {@link AdminUpdateOrganizationSubscriptionPlanCommand}.
 */
export interface AdminUpdateOrganizationSubscriptionPlanCommandOutput extends AdminUpdateOrganizationSubscriptionPlanOutput, __MetadataBearer {}

/**
 * Assigns a new subscription plan to an organization, immediately updating both the platform database record and the organization's Stripe subscription (best-effort).
 *
 * **Requires `staff:write` permission** — this is an internal admin-only endpoint.
 *
 * **Behavior:**
 * - `subscriptionPlanId` in the request body must reference an existing plan; returns `404` if the organization or plan is not found.
 * - After updating the database record, the handler attempts to create or update the Stripe subscription. If the Stripe sync fails, the error is logged but the plan assignment is **not** rolled back — the database change persists regardless.
 * - Any per-organization feature overrides (managed via `AdminSetOrganizationFeatureOverride`) remain active after the plan change and continue to take precedence over the new plan's values.
 *
 * **Related operations:**
 * - Use `AdminListSubscriptionPlans` or `AdminGetSubscriptionPlan` to browse available plans before assigning one.
 * - Use `GetOrganizationSubscriptionPlan` to verify the organization's effective plan and resolved feature values after the change.
 * - Use `AdminListOrganizationFeatureOverrides` to audit any per-org overrides still active on top of the new plan.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminUpdateOrganizationSubscriptionPlanCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminUpdateOrganizationSubscriptionPlanCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminUpdateOrganizationSubscriptionPlanInput
 *   organizationId: "STRING_VALUE", // required
 *   subscriptionPlanId: "STRING_VALUE", // required
 * };
 * const command = new AdminUpdateOrganizationSubscriptionPlanCommand(input);
 * const response = await client.send(command);
 * // { // AdminUpdateOrganizationSubscriptionPlanOutput
 * //   organizationId: "STRING_VALUE", // required
 * //   subscriptionPlanId: "STRING_VALUE", // required
 * //   subscriptionPlanName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AdminUpdateOrganizationSubscriptionPlanCommandInput - {@link AdminUpdateOrganizationSubscriptionPlanCommandInput}
 * @returns {@link AdminUpdateOrganizationSubscriptionPlanCommandOutput}
 * @see {@link AdminUpdateOrganizationSubscriptionPlanCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateOrganizationSubscriptionPlanCommandOutput} for command's `response` shape.
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
export class AdminUpdateOrganizationSubscriptionPlanCommand extends $Command.classBuilder<AdminUpdateOrganizationSubscriptionPlanCommandInput, AdminUpdateOrganizationSubscriptionPlanCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminUpdateOrganizationSubscriptionPlan", {

  })
  .n("JustWorkflowItClient", "AdminUpdateOrganizationSubscriptionPlanCommand")
  .f(void 0, void 0)
  .ser(se_AdminUpdateOrganizationSubscriptionPlanCommand)
  .de(de_AdminUpdateOrganizationSubscriptionPlanCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminUpdateOrganizationSubscriptionPlanInput;
      output: AdminUpdateOrganizationSubscriptionPlanOutput;
  };
  sdk: {
      input: AdminUpdateOrganizationSubscriptionPlanCommandInput;
      output: AdminUpdateOrganizationSubscriptionPlanCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ChangeOrganizationSubscriptionPlanInput,
  ChangeOrganizationSubscriptionPlanOutput,
} from "../models/models_0";
import {
  de_ChangeOrganizationSubscriptionPlanCommand,
  se_ChangeOrganizationSubscriptionPlanCommand,
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
 * The input for {@link ChangeOrganizationSubscriptionPlanCommand}.
 */
export interface ChangeOrganizationSubscriptionPlanCommandInput extends ChangeOrganizationSubscriptionPlanInput {}
/**
 * @public
 *
 * The output of {@link ChangeOrganizationSubscriptionPlanCommand}.
 */
export interface ChangeOrganizationSubscriptionPlanCommandOutput extends ChangeOrganizationSubscriptionPlanOutput, __MetadataBearer {}

/**
 * Changes the subscription plan for an organization. The caller must have `organization:update` permission.
 *
 * **Validation:**
 * - The target plan must exist and be a valid public plan.
 * - For paid plans, the organization must have at least one payment method on file.
 *
 * **Stripe sync:** After updating the database, the handler creates or updates the Stripe subscription. If the Stripe sync fails, the error is logged but the plan change is not rolled back.
 *
 * **Notifications:** A notification is created for the organization when the plan changes.
 *
 * **Related operations:**
 * - `ListSubscriptionPlans` — browse available plans before choosing one.
 * - `GetOrganizationSubscriptionPlan` — verify the effective plan after the change.
 * - `CreateBillingSetupIntent` — add a payment method if required for paid plans.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ChangeOrganizationSubscriptionPlanCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ChangeOrganizationSubscriptionPlanCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ChangeOrganizationSubscriptionPlanInput
 *   organizationId: "STRING_VALUE", // required
 *   subscriptionPlanId: "STRING_VALUE", // required
 * };
 * const command = new ChangeOrganizationSubscriptionPlanCommand(input);
 * const response = await client.send(command);
 * // { // ChangeOrganizationSubscriptionPlanOutput
 * //   organizationId: "STRING_VALUE", // required
 * //   subscriptionPlanId: "STRING_VALUE", // required
 * //   subscriptionPlanName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ChangeOrganizationSubscriptionPlanCommandInput - {@link ChangeOrganizationSubscriptionPlanCommandInput}
 * @returns {@link ChangeOrganizationSubscriptionPlanCommandOutput}
 * @see {@link ChangeOrganizationSubscriptionPlanCommandInput} for command's `input` shape.
 * @see {@link ChangeOrganizationSubscriptionPlanCommandOutput} for command's `response` shape.
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
export class ChangeOrganizationSubscriptionPlanCommand extends $Command.classBuilder<ChangeOrganizationSubscriptionPlanCommandInput, ChangeOrganizationSubscriptionPlanCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ChangeOrganizationSubscriptionPlan", {

  })
  .n("JustWorkflowItClient", "ChangeOrganizationSubscriptionPlanCommand")
  .f(void 0, void 0)
  .ser(se_ChangeOrganizationSubscriptionPlanCommand)
  .de(de_ChangeOrganizationSubscriptionPlanCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ChangeOrganizationSubscriptionPlanInput;
      output: ChangeOrganizationSubscriptionPlanOutput;
  };
  sdk: {
      input: ChangeOrganizationSubscriptionPlanCommandInput;
      output: ChangeOrganizationSubscriptionPlanCommandOutput;
  };
};
}

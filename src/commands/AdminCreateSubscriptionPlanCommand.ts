// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminCreateSubscriptionPlanInput,
  AdminCreateSubscriptionPlanOutput,
} from "../models/models_0";
import {
  de_AdminCreateSubscriptionPlanCommand,
  se_AdminCreateSubscriptionPlanCommand,
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
 * The input for {@link AdminCreateSubscriptionPlanCommand}.
 */
export interface AdminCreateSubscriptionPlanCommandInput extends AdminCreateSubscriptionPlanInput {}
/**
 * @public
 *
 * The output of {@link AdminCreateSubscriptionPlanCommand}.
 */
export interface AdminCreateSubscriptionPlanCommandOutput extends AdminCreateSubscriptionPlanOutput, __MetadataBearer {}

/**
 * Creates a new subscription plan in both the platform database and Stripe, returning the new plan's `id` and `name`.
 *
 * **Requires `staff:write` permission** — this is an internal admin-only endpoint.
 *
 * **Request fields:**
 * - `name` *(required)* — display name for the plan.
 * - `description` *(optional)* — human-readable description.
 * - `monthlyPriceUsd` *(optional)* — defaults to `0` if omitted.
 * - `features` *(optional)* — a key/value map of feature values to attach. Keys must match pre-existing `SubscriptionFeature` records in the database; unrecognised keys are **silently ignored**.
 *
 * **Stripe sync:** After persisting the plan, the handler synchronously calls Stripe to create a corresponding Product and Price. If the Stripe call fails, the request returns an error but the database record may already exist; use `AdminListSubscriptionPlans` to confirm the plan state.
 *
 * **Response:** Returns only `id` and `name`. To retrieve the full plan including all features and enrolled organizations, call `AdminGetSubscriptionPlan`.
 *
 * **Related operations:**
 * - `AdminUpdateSubscriptionPlan` — update name, pricing, or features (features are fully replaced when provided).
 * - `AdminDeleteSubscriptionPlan` — delete the plan; fails with `409 Conflict` if any organizations are still assigned to it.
 * - `AdminUpdateOrganizationSubscriptionPlan` — assign the new plan to an organization.
 * - `AdminListSubscriptionPlans` — list all plans with feature and organization counts.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminCreateSubscriptionPlanCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminCreateSubscriptionPlanCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminCreateSubscriptionPlanInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   monthlyPriceUsd: Number("double"),
 *   features: { // AdminFeatureValueMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new AdminCreateSubscriptionPlanCommand(input);
 * const response = await client.send(command);
 * // { // AdminCreateSubscriptionPlanOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AdminCreateSubscriptionPlanCommandInput - {@link AdminCreateSubscriptionPlanCommandInput}
 * @returns {@link AdminCreateSubscriptionPlanCommandOutput}
 * @see {@link AdminCreateSubscriptionPlanCommandInput} for command's `input` shape.
 * @see {@link AdminCreateSubscriptionPlanCommandOutput} for command's `response` shape.
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
export class AdminCreateSubscriptionPlanCommand extends $Command.classBuilder<AdminCreateSubscriptionPlanCommandInput, AdminCreateSubscriptionPlanCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminCreateSubscriptionPlan", {

  })
  .n("JustWorkflowItClient", "AdminCreateSubscriptionPlanCommand")
  .f(void 0, void 0)
  .ser(se_AdminCreateSubscriptionPlanCommand)
  .de(de_AdminCreateSubscriptionPlanCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminCreateSubscriptionPlanInput;
      output: AdminCreateSubscriptionPlanOutput;
  };
  sdk: {
      input: AdminCreateSubscriptionPlanCommandInput;
      output: AdminCreateSubscriptionPlanCommandOutput;
  };
};
}

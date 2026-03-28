// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetSubscriptionPlanInput,
  GetSubscriptionPlanOutput,
} from "../models/models_0";
import {
  de_GetSubscriptionPlanCommand,
  se_GetSubscriptionPlanCommand,
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
 * The input for {@link GetSubscriptionPlanCommand}.
 */
export interface GetSubscriptionPlanCommandInput extends GetSubscriptionPlanInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionPlanCommand}.
 */
export interface GetSubscriptionPlanCommandOutput extends GetSubscriptionPlanOutput, __MetadataBearer {}

/**
 * Retrieves a single subscription plan by ID, returning its `id`, `name`, `description`, and public-facing `features` (key, label, description, value).
 *
 * **Permissions:** Requires `subscription:read`.
 *
 * **Feature visibility:** Features with `ADMIN` visibility are silently excluded. To retrieve the full feature set including admin-only entries, pricing (`monthlyPriceUsd`), Stripe identifiers, and enrolled organizations, use `AdminGetSubscriptionPlan` instead.
 *
 * **Per-org overrides not applied:** Returned feature values reflect the base plan definition only. Use `GetOrganizationSubscriptionPlan` to see the plan currently assigned to your organization, or `AdminListOrganizationFeatureOverrides` to audit per-org customisations.
 *
 * **Error conditions:** Returns `404 Not Found` if `subscriptionPlanId` does not match any existing plan.
 *
 * **Related operations:**
 * - `ListSubscriptionPlans` — returns all plans in one response using the same `SubscriptionPlanDetails` shape and the same visibility filtering; use when you need to enumerate plans rather than fetch a known one.
 * - `GetOrganizationSubscriptionPlan` — resolves the plan assigned to a specific organization, including the same public feature values.
 * - `AdminGetSubscriptionPlan` — admin-only variant that includes `ADMIN`-visibility features, `monthlyPriceUsd`, Stripe IDs, `createdAt`/`updatedAt`, and the full list of enrolled organizations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetSubscriptionPlanCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetSubscriptionPlanCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetSubscriptionPlanInput
 *   subscriptionPlanId: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionPlanCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionPlanOutput
 * //   plan: { // SubscriptionPlanDetails
 * //     id: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     features: [ // SubscriptionFeatureList // required
 * //       { // SubscriptionFeature
 * //         key: "STRING_VALUE", // required
 * //         label: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSubscriptionPlanCommandInput - {@link GetSubscriptionPlanCommandInput}
 * @returns {@link GetSubscriptionPlanCommandOutput}
 * @see {@link GetSubscriptionPlanCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionPlanCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link NotFoundError} (client fault)
 *  The requested resource was not found. Verify the resource ID is correct and the resource exists in the specified organization.
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
export class GetSubscriptionPlanCommand extends $Command.classBuilder<GetSubscriptionPlanCommandInput, GetSubscriptionPlanCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetSubscriptionPlan", {

  })
  .n("JustWorkflowItClient", "GetSubscriptionPlanCommand")
  .f(void 0, void 0)
  .ser(se_GetSubscriptionPlanCommand)
  .de(de_GetSubscriptionPlanCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetSubscriptionPlanInput;
      output: GetSubscriptionPlanOutput;
  };
  sdk: {
      input: GetSubscriptionPlanCommandInput;
      output: GetSubscriptionPlanCommandOutput;
  };
};
}

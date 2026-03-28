// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetOrganizationSubscriptionPlanInput,
  GetOrganizationSubscriptionPlanOutput,
} from "../models/models_0";
import {
  de_GetOrganizationSubscriptionPlanCommand,
  se_GetOrganizationSubscriptionPlanCommand,
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
 * The input for {@link GetOrganizationSubscriptionPlanCommand}.
 */
export interface GetOrganizationSubscriptionPlanCommandInput extends GetOrganizationSubscriptionPlanInput {}
/**
 * @public
 *
 * The output of {@link GetOrganizationSubscriptionPlanCommand}.
 */
export interface GetOrganizationSubscriptionPlanCommandOutput extends GetOrganizationSubscriptionPlanOutput, __MetadataBearer {}

/**
 * Returns the subscription plan currently assigned to an organization, including its `id`, `name`, `description`, and all public-facing `features` (key, label, description, value).
 *
 * **Permissions:** Requires `subscription:read`.
 *
 * **Feature visibility:** Features with `ADMIN` visibility are excluded from the response. Use `AdminGetSubscriptionPlan` to retrieve the full feature set including admin-only entries.
 *
 * **Per-org overrides are not applied:** The returned feature values reflect the base plan definition only. If an admin has set per-organization overrides via `AdminSetOrganizationFeatureOverride`, those overridden values are **not** reflected here. Use `AdminListOrganizationFeatureOverrides` to audit active overrides for this organization.
 *
 * **Error conditions:** Returns `404 Not Found` if the organization does not exist or has no subscription plan assigned.
 *
 * **Related operations:**
 * - `ListSubscriptionPlans` / `GetSubscriptionPlan` — browse available plans without org context (same shape, same visibility filtering).
 * - `AdminUpdateOrganizationSubscriptionPlan` — change which plan is assigned to this organization.
 * - `AdminListOrganizationFeatureOverrides` — view per-org feature overrides that supersede the values returned here.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetOrganizationSubscriptionPlanCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetOrganizationSubscriptionPlanCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetOrganizationSubscriptionPlanInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new GetOrganizationSubscriptionPlanCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationSubscriptionPlanOutput
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
 * @param GetOrganizationSubscriptionPlanCommandInput - {@link GetOrganizationSubscriptionPlanCommandInput}
 * @returns {@link GetOrganizationSubscriptionPlanCommandOutput}
 * @see {@link GetOrganizationSubscriptionPlanCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationSubscriptionPlanCommandOutput} for command's `response` shape.
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
export class GetOrganizationSubscriptionPlanCommand extends $Command.classBuilder<GetOrganizationSubscriptionPlanCommandInput, GetOrganizationSubscriptionPlanCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetOrganizationSubscriptionPlan", {

  })
  .n("JustWorkflowItClient", "GetOrganizationSubscriptionPlanCommand")
  .f(void 0, void 0)
  .ser(se_GetOrganizationSubscriptionPlanCommand)
  .de(de_GetOrganizationSubscriptionPlanCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetOrganizationSubscriptionPlanInput;
      output: GetOrganizationSubscriptionPlanOutput;
  };
  sdk: {
      input: GetOrganizationSubscriptionPlanCommandInput;
      output: GetOrganizationSubscriptionPlanCommandOutput;
  };
};
}

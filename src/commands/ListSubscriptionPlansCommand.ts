// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { ListSubscriptionPlansOutput } from "../models/models_0";
import {
  de_ListSubscriptionPlansCommand,
  se_ListSubscriptionPlansCommand,
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
 * The input for {@link ListSubscriptionPlansCommand}.
 */
export interface ListSubscriptionPlansCommandInput {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionPlansCommand}.
 */
export interface ListSubscriptionPlansCommandOutput extends ListSubscriptionPlansOutput, __MetadataBearer {}

/**
 * Lists all available subscription plans, returning each plan's `id`, `name`, `description`, and public-facing `features` (key, label, description, value).
 *
 * **Permissions:** Requires `subscription:read`.
 *
 * **Feature visibility:** Features with `ADMIN` visibility are silently excluded. To retrieve the complete feature set including admin-only entries, use `AdminListSubscriptionPlans` or `AdminGetSubscriptionPlan`.
 *
 * **No pagination:** All plans are returned in a single response. The result set is small by design.
 *
 * **Per-org overrides not applied:** Feature values reflect the base plan definition only. Use `GetOrganizationSubscriptionPlan` to see the resolved effective values for a specific organization (still without overrides applied), or `AdminListOrganizationFeatureOverrides` to audit any per-org customisations.
 *
 * **Related operations:**
 * - `GetSubscriptionPlan` — retrieve a single plan by ID; returns the same `SubscriptionPlanDetails` shape with the same visibility filtering.
 * - `GetOrganizationSubscriptionPlan` — retrieve the plan currently assigned to your organization.
 * - `AdminListSubscriptionPlans` — admin-only variant that includes `monthlyPriceUsd`, `featureCount`, and `organizationCount` for each plan.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListSubscriptionPlansCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListSubscriptionPlansCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = {};
 * const command = new ListSubscriptionPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionPlansOutput
 * //   plans: [ // SubscriptionPlanDetailsList // required
 * //     { // SubscriptionPlanDetails
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       features: [ // SubscriptionFeatureList // required
 * //         { // SubscriptionFeature
 * //           key: "STRING_VALUE", // required
 * //           label: "STRING_VALUE", // required
 * //           description: "STRING_VALUE",
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSubscriptionPlansCommandInput - {@link ListSubscriptionPlansCommandInput}
 * @returns {@link ListSubscriptionPlansCommandOutput}
 * @see {@link ListSubscriptionPlansCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionPlansCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
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
export class ListSubscriptionPlansCommand extends $Command.classBuilder<ListSubscriptionPlansCommandInput, ListSubscriptionPlansCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListSubscriptionPlans", {

  })
  .n("JustWorkflowItClient", "ListSubscriptionPlansCommand")
  .f(void 0, void 0)
  .ser(se_ListSubscriptionPlansCommand)
  .de(de_ListSubscriptionPlansCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: {};
      output: ListSubscriptionPlansOutput;
  };
  sdk: {
      input: ListSubscriptionPlansCommandInput;
      output: ListSubscriptionPlansCommandOutput;
  };
};
}

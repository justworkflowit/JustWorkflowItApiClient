// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminUpdateSubscriptionPlanInput,
  AdminUpdateSubscriptionPlanOutput,
} from "../models/models_0";
import {
  de_AdminUpdateSubscriptionPlanCommand,
  se_AdminUpdateSubscriptionPlanCommand,
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
 * The input for {@link AdminUpdateSubscriptionPlanCommand}.
 */
export interface AdminUpdateSubscriptionPlanCommandInput extends AdminUpdateSubscriptionPlanInput {}
/**
 * @public
 *
 * The output of {@link AdminUpdateSubscriptionPlanCommand}.
 */
export interface AdminUpdateSubscriptionPlanCommandOutput extends AdminUpdateSubscriptionPlanOutput, __MetadataBearer {}

/**
 * Partially updates a subscription plan's metadata and/or feature values, then synchronously syncs the changes to Stripe — **requires `staff:write` permission**.
 *
 * **Request fields (all optional):**
 * - `name`, `description`, `monthlyPriceUsd` — updated in-place; omit any field to leave it unchanged.
 * - `features` — a key/value map of feature values. **If provided, fully replaces all existing feature values** for this plan (delete-then-insert in a single transaction). Omit `features` entirely to leave existing features untouched. Unrecognised feature keys are silently ignored.
 *
 * **Stripe sync:** After persisting the database changes, the handler synchronously updates the linked Stripe Product and, if `monthlyPriceUsd` changed, creates a new Stripe Price. If the Stripe sync fails, the request may return an error after the database update has already committed.
 *
 * **Response:** Returns only `id` and `name`. Use `AdminGetSubscriptionPlan` to retrieve the full updated plan including all features (including `ADMIN`-visibility ones) and enrolled organizations.
 *
 * **Error conditions:** Returns `404 Not Found` if `planId` does not match an existing plan.
 *
 * **Related operations:**
 * - `AdminGetSubscriptionPlan` — get the full plan record after updating to verify all changes.
 * - `AdminCreateSubscriptionPlan` — create a new plan; uses the same `features` map format.
 * - `AdminDeleteSubscriptionPlan` — delete the plan; fails with `409 Conflict` if organizations are still assigned.
 * - `AdminListSubscriptionPlans` — list all plans with feature and organization counts.
 * - `AdminSetOrganizationFeatureOverride` — override individual feature values for a specific organization without touching the plan definition.
 * - `AdminUpdateOrganizationSubscriptionPlan` — assign this (or another) plan to an organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminUpdateSubscriptionPlanCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminUpdateSubscriptionPlanCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminUpdateSubscriptionPlanInput
 *   planId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   monthlyPriceUsd: Number("double"),
 *   features: { // AdminFeatureValueMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new AdminUpdateSubscriptionPlanCommand(input);
 * const response = await client.send(command);
 * // { // AdminUpdateSubscriptionPlanOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AdminUpdateSubscriptionPlanCommandInput - {@link AdminUpdateSubscriptionPlanCommandInput}
 * @returns {@link AdminUpdateSubscriptionPlanCommandOutput}
 * @see {@link AdminUpdateSubscriptionPlanCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateSubscriptionPlanCommandOutput} for command's `response` shape.
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
export class AdminUpdateSubscriptionPlanCommand extends $Command.classBuilder<AdminUpdateSubscriptionPlanCommandInput, AdminUpdateSubscriptionPlanCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminUpdateSubscriptionPlan", {

  })
  .n("JustWorkflowItClient", "AdminUpdateSubscriptionPlanCommand")
  .f(void 0, void 0)
  .ser(se_AdminUpdateSubscriptionPlanCommand)
  .de(de_AdminUpdateSubscriptionPlanCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminUpdateSubscriptionPlanInput;
      output: AdminUpdateSubscriptionPlanOutput;
  };
  sdk: {
      input: AdminUpdateSubscriptionPlanCommandInput;
      output: AdminUpdateSubscriptionPlanCommandOutput;
  };
};
}

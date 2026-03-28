// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { AdminListSubscriptionPlansOutput } from "../models/models_0";
import {
  de_AdminListSubscriptionPlansCommand,
  se_AdminListSubscriptionPlansCommand,
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
 * The input for {@link AdminListSubscriptionPlansCommand}.
 */
export interface AdminListSubscriptionPlansCommandInput {}
/**
 * @public
 *
 * The output of {@link AdminListSubscriptionPlansCommand}.
 */
export interface AdminListSubscriptionPlansCommandOutput extends AdminListSubscriptionPlansOutput, __MetadataBearer {}

/**
 * Lists every subscription plan in the system ordered by ascending monthly price, returning a lightweight summary (name, description, `monthlyPriceUsd`, `featureCount`, and `organizationCount`) suitable for at-a-glance plan management.
 *
 * **Requires `staff:read` permission** — this is an internal admin-only endpoint and is not accessible to regular organization users.
 *
 * **Response details:**
 * - `featureCount` — total number of feature entries attached to the plan (all visibility levels, including `ADMIN`-only features hidden from the public `ListSubscriptionPlans` endpoint).
 * - `organizationCount` — number of organizations currently assigned to the plan. Plans with `organizationCount > 0` cannot be deleted (see `AdminDeleteSubscriptionPlan`).
 * - Results are ordered by `monthlyPriceUsd` ascending.
 *
 * **Related operations:**
 * - Use `AdminGetSubscriptionPlan` to retrieve the full feature list and enrolled organizations for a specific plan.
 * - Use `AdminCreateSubscriptionPlan` or `AdminUpdateSubscriptionPlan` to manage plan definitions.
 * - Use `AdminUpdateOrganizationSubscriptionPlan` to move an organization onto one of the listed plans.
 * - The non-admin counterpart `ListSubscriptionPlans` returns the same plans but with public-visibility features only and without org/feature counts.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminListSubscriptionPlansCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminListSubscriptionPlansCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = {};
 * const command = new AdminListSubscriptionPlansCommand(input);
 * const response = await client.send(command);
 * // { // AdminListSubscriptionPlansOutput
 * //   plans: [ // AdminSubscriptionPlanSummaryList // required
 * //     { // AdminSubscriptionPlanSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       monthlyPriceUsd: Number("double"), // required
 * //       featureCount: Number("int"), // required
 * //       organizationCount: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminListSubscriptionPlansCommandInput - {@link AdminListSubscriptionPlansCommandInput}
 * @returns {@link AdminListSubscriptionPlansCommandOutput}
 * @see {@link AdminListSubscriptionPlansCommandInput} for command's `input` shape.
 * @see {@link AdminListSubscriptionPlansCommandOutput} for command's `response` shape.
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
export class AdminListSubscriptionPlansCommand extends $Command.classBuilder<AdminListSubscriptionPlansCommandInput, AdminListSubscriptionPlansCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminListSubscriptionPlans", {

  })
  .n("JustWorkflowItClient", "AdminListSubscriptionPlansCommand")
  .f(void 0, void 0)
  .ser(se_AdminListSubscriptionPlansCommand)
  .de(de_AdminListSubscriptionPlansCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: {};
      output: AdminListSubscriptionPlansOutput;
  };
  sdk: {
      input: AdminListSubscriptionPlansCommandInput;
      output: AdminListSubscriptionPlansCommandOutput;
  };
};
}

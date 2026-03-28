// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminDeleteSubscriptionPlanInput,
  AdminDeleteSubscriptionPlanOutput,
} from "../models/models_0";
import {
  de_AdminDeleteSubscriptionPlanCommand,
  se_AdminDeleteSubscriptionPlanCommand,
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
 * The input for {@link AdminDeleteSubscriptionPlanCommand}.
 */
export interface AdminDeleteSubscriptionPlanCommandInput extends AdminDeleteSubscriptionPlanInput {}
/**
 * @public
 *
 * The output of {@link AdminDeleteSubscriptionPlanCommand}.
 */
export interface AdminDeleteSubscriptionPlanCommandOutput extends AdminDeleteSubscriptionPlanOutput, __MetadataBearer {}

/**
 * Permanently deletes a subscription plan and its associated feature values, first archiving the corresponding Stripe product (if one exists) before removing the database records.
 *
 * **Requires `staff:write` permission** — this is an internal admin-only endpoint.
 *
 * **Pre-conditions and error cases:**
 * - Returns `404 Not Found` if `planId` does not match any existing plan.
 * - Returns `409 Conflict` if one or more organizations are currently assigned to the plan. Use `AdminGetSubscriptionPlan` to inspect the `organizations` list and `AdminUpdateOrganizationSubscriptionPlan` to migrate them to another plan before retrying.
 *
 * **Deletion behavior:**
 * - If the plan has a linked Stripe product (`stripeProductId`), that product is **archived in Stripe** synchronously before the database records are removed. Archiving is non-reversible via this API.
 * - All `SubscriptionFeatureValue` rows attached to the plan are deleted in the same database transaction as the plan record itself.
 * - The operation is idempotent at the HTTP level (`@idempotent`), though repeated calls after a successful deletion will return `404`.
 *
 * **Related operations:**
 * - Use `AdminListSubscriptionPlans` (which includes `organizationCount`) to identify plans safe to delete.
 * - Use `AdminGetSubscriptionPlan` to see the full list of enrolled organizations before attempting deletion.
 * - Use `AdminUpdateOrganizationSubscriptionPlan` to move organizations off a plan prior to deletion.
 * - Use `AdminCreateSubscriptionPlan` to create a replacement plan if needed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminDeleteSubscriptionPlanCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminDeleteSubscriptionPlanCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminDeleteSubscriptionPlanInput
 *   planId: "STRING_VALUE", // required
 * };
 * const command = new AdminDeleteSubscriptionPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminDeleteSubscriptionPlanCommandInput - {@link AdminDeleteSubscriptionPlanCommandInput}
 * @returns {@link AdminDeleteSubscriptionPlanCommandOutput}
 * @see {@link AdminDeleteSubscriptionPlanCommandInput} for command's `input` shape.
 * @see {@link AdminDeleteSubscriptionPlanCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
 *
 * @throws {@link NotFoundError} (client fault)
 *  The requested resource was not found. Verify the resource ID is correct and the resource exists in the specified organization.
 *
 * @throws {@link ConflictError} (client fault)
 *  The request conflicts with the current state of the resource. For example, trying to delete a resource that is still in use.
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
export class AdminDeleteSubscriptionPlanCommand extends $Command.classBuilder<AdminDeleteSubscriptionPlanCommandInput, AdminDeleteSubscriptionPlanCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminDeleteSubscriptionPlan", {

  })
  .n("JustWorkflowItClient", "AdminDeleteSubscriptionPlanCommand")
  .f(void 0, void 0)
  .ser(se_AdminDeleteSubscriptionPlanCommand)
  .de(de_AdminDeleteSubscriptionPlanCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminDeleteSubscriptionPlanInput;
      output: {};
  };
  sdk: {
      input: AdminDeleteSubscriptionPlanCommandInput;
      output: AdminDeleteSubscriptionPlanCommandOutput;
  };
};
}

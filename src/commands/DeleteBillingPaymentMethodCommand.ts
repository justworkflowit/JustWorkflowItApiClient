// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  DeleteBillingPaymentMethodInput,
  DeleteBillingPaymentMethodOutput,
} from "../models/models_0";
import {
  de_DeleteBillingPaymentMethodCommand,
  se_DeleteBillingPaymentMethodCommand,
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
 * The input for {@link DeleteBillingPaymentMethodCommand}.
 */
export interface DeleteBillingPaymentMethodCommandInput extends DeleteBillingPaymentMethodInput {}
/**
 * @public
 *
 * The output of {@link DeleteBillingPaymentMethodCommand}.
 */
export interface DeleteBillingPaymentMethodCommandOutput extends DeleteBillingPaymentMethodOutput, __MetadataBearer {}

/**
 * Permanently detaches a saved payment method from the organization's Stripe customer and refreshes the organization's internal payment card cache.
 *
 * **Required permission:** `billing:manage`
 *
 * **Important behaviors:**
 * - Verifies the `paymentMethodId` belongs to the organization's Stripe customer before detaching. Attempting to delete a payment method from another organization returns an error.
 * - Returns `404` if the organization has no billing configured (no Stripe customer exists yet).
 * - After detaching, the `hasValidPaymentCard` cache is immediately refreshed. If the removed card was the only non-expired card, the organization will lose its valid payment card status, which may affect access to paid features.
 * - This operation is **idempotent** — Stripe's detach call is safe to retry if interrupted.
 *
 * **Typical payment management flow:** Call `ListBillingPaymentMethods` to retrieve the `paymentMethodId` values currently attached → call this endpoint to remove an unwanted card → call `ListBillingPaymentMethods` again to confirm removal. To add a new card, use `CreateBillingSetupIntent` to obtain a client secret for Stripe.js before removing the old one.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, DeleteBillingPaymentMethodCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, DeleteBillingPaymentMethodCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // DeleteBillingPaymentMethodInput
 *   organizationId: "STRING_VALUE", // required
 *   paymentMethodId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBillingPaymentMethodCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBillingPaymentMethodCommandInput - {@link DeleteBillingPaymentMethodCommandInput}
 * @returns {@link DeleteBillingPaymentMethodCommandOutput}
 * @see {@link DeleteBillingPaymentMethodCommandInput} for command's `input` shape.
 * @see {@link DeleteBillingPaymentMethodCommandOutput} for command's `response` shape.
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
export class DeleteBillingPaymentMethodCommand extends $Command.classBuilder<DeleteBillingPaymentMethodCommandInput, DeleteBillingPaymentMethodCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "DeleteBillingPaymentMethod", {

  })
  .n("JustWorkflowItClient", "DeleteBillingPaymentMethodCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBillingPaymentMethodCommand)
  .de(de_DeleteBillingPaymentMethodCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: DeleteBillingPaymentMethodInput;
      output: {};
  };
  sdk: {
      input: DeleteBillingPaymentMethodCommandInput;
      output: DeleteBillingPaymentMethodCommandOutput;
  };
};
}

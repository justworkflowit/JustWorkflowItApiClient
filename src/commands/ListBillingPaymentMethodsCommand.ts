// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListBillingPaymentMethodsInput,
  ListBillingPaymentMethodsOutput,
} from "../models/models_0";
import {
  de_ListBillingPaymentMethodsCommand,
  se_ListBillingPaymentMethodsCommand,
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
 * The input for {@link ListBillingPaymentMethodsCommand}.
 */
export interface ListBillingPaymentMethodsCommandInput extends ListBillingPaymentMethodsInput {}
/**
 * @public
 *
 * The output of {@link ListBillingPaymentMethodsCommand}.
 */
export interface ListBillingPaymentMethodsCommandOutput extends ListBillingPaymentMethodsOutput, __MetadataBearer {}

/**
 * Lists all saved card payment methods attached to the organization's Stripe customer, returned in the order Stripe provides them.
 *
 * **Required permission:** `billing:manage`
 *
 * **Response fields per payment method:**
 * - `paymentMethodId` — the Stripe payment method ID, used with `DeleteBillingPaymentMethod`
 * - `brand`, `last4`, `expMonth`, `expYear` — card details for display
 * - `isDefault` — `true` if this card is set as the Stripe customer's default invoice payment method
 *
 * **Important behaviors:**
 * - Returns an empty array if the organization has never set up billing (no Stripe customer exists yet). Use `CreateBillingSetupIntent` to begin the card-collection flow.
 * - Data is fetched **live from Stripe** on every call, not from a local cache. As a side effect, each call refreshes the organization's internal `hasValidPaymentCard` cache.
 * - Only **card** payment methods are returned; other Stripe payment method types are excluded.
 *
 * **Typical payment management flow:** Call `CreateBillingSetupIntent` to get a client secret → use Stripe.js on the frontend to collect card details → call `ListBillingPaymentMethods` to confirm the new card appears → call `DeleteBillingPaymentMethod` to remove unwanted cards.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListBillingPaymentMethodsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListBillingPaymentMethodsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListBillingPaymentMethodsInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new ListBillingPaymentMethodsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillingPaymentMethodsOutput
 * //   paymentMethods: [ // BillingPaymentMethodList // required
 * //     { // BillingPaymentMethod
 * //       paymentMethodId: "STRING_VALUE", // required
 * //       brand: "STRING_VALUE", // required
 * //       last4: "STRING_VALUE", // required
 * //       expMonth: Number("int"), // required
 * //       expYear: Number("int"), // required
 * //       isDefault: true || false, // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBillingPaymentMethodsCommandInput - {@link ListBillingPaymentMethodsCommandInput}
 * @returns {@link ListBillingPaymentMethodsCommandOutput}
 * @see {@link ListBillingPaymentMethodsCommandInput} for command's `input` shape.
 * @see {@link ListBillingPaymentMethodsCommandOutput} for command's `response` shape.
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
export class ListBillingPaymentMethodsCommand extends $Command.classBuilder<ListBillingPaymentMethodsCommandInput, ListBillingPaymentMethodsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListBillingPaymentMethods", {

  })
  .n("JustWorkflowItClient", "ListBillingPaymentMethodsCommand")
  .f(void 0, void 0)
  .ser(se_ListBillingPaymentMethodsCommand)
  .de(de_ListBillingPaymentMethodsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListBillingPaymentMethodsInput;
      output: ListBillingPaymentMethodsOutput;
  };
  sdk: {
      input: ListBillingPaymentMethodsCommandInput;
      output: ListBillingPaymentMethodsCommandOutput;
  };
};
}

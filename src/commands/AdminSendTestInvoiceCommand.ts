// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminSendTestInvoiceInput,
  AdminSendTestInvoiceOutput,
} from "../models/models_0";
import {
  de_AdminSendTestInvoiceCommand,
  se_AdminSendTestInvoiceCommand,
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
 * The input for {@link AdminSendTestInvoiceCommand}.
 */
export interface AdminSendTestInvoiceCommandInput extends AdminSendTestInvoiceInput {}
/**
 * @public
 *
 * The output of {@link AdminSendTestInvoiceCommand}.
 */
export interface AdminSendTestInvoiceCommandOutput extends AdminSendTestInvoiceOutput, __MetadataBearer {}

/**
 * Sends a test Stripe invoice email to a specified address for previewing what an organization's bill would look like, without affecting the organization's actual Stripe account.
 *
 * **Requires `staff:write` permission.**
 *
 * **How it works:**
 * - Internally runs a dry-run of `AdminGenerateInvoices` to compute marketplace usage line items for the billing period.
 * - Builds a full invoice (subscription plan fee + marketplace usage) attributed to the target organization, but created under the JustWorkflowIt HQ Stripe account to avoid polluting the customer's Stripe account.
 * - Finalizes and delivers the invoice via Stripe to `testEmail`. The invoice remains open (`PENDING`) — it is not voided after sending.
 * - Returns `hostedInvoiceUrl` and `invoicePdfUrl` for the Stripe-hosted invoice, plus an `invoices` preview array showing the full line item breakdown.
 *
 * **Idempotency:** Re-running for the same `organizationId` and `billingPeriodStart` replaces the previous test invoice record, so repeated calls are safe.
 *
 * **Typical workflow:** Run `AdminTriggerUsageSync` for each day in the billing period first to ensure usage data is current, then call this endpoint to preview the invoice email before committing with `AdminGenerateInvoices`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminSendTestInvoiceCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminSendTestInvoiceCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminSendTestInvoiceInput
 *   organizationId: "STRING_VALUE", // required
 *   billingPeriodStart: new Date("TIMESTAMP"), // required
 *   billingPeriodEnd: new Date("TIMESTAMP"), // required
 *   testEmail: "STRING_VALUE", // required
 * };
 * const command = new AdminSendTestInvoiceCommand(input);
 * const response = await client.send(command);
 * // { // AdminSendTestInvoiceOutput
 * //   sent: true || false, // required
 * //   totalAmount: Number("double"), // required
 * //   hostedInvoiceUrl: "STRING_VALUE",
 * //   invoicePdfUrl: "STRING_VALUE",
 * //   invoices: [ // InvoicePreviewList // required
 * //     { // InvoicePreview
 * //       consumerOrganizationId: "STRING_VALUE", // required
 * //       consumerOrganizationName: "STRING_VALUE", // required
 * //       totalAmount: Number("double"), // required
 * //       platformFeeAmount: Number("double"), // required
 * //       lineItems: [ // InvoiceLineItemPreviewList // required
 * //         { // InvoiceLineItemPreview
 * //           marketplaceListingId: "STRING_VALUE", // required
 * //           publisherOrganizationId: "STRING_VALUE", // required
 * //           description: "STRING_VALUE", // required
 * //           billingModel: "STRING_VALUE", // required
 * //           quantity: Number("double"), // required
 * //           unitPrice: Number("double"), // required
 * //           lineTotal: Number("double"), // required
 * //           platformFee: Number("double"), // required
 * //           publisherPayout: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminSendTestInvoiceCommandInput - {@link AdminSendTestInvoiceCommandInput}
 * @returns {@link AdminSendTestInvoiceCommandOutput}
 * @see {@link AdminSendTestInvoiceCommandInput} for command's `input` shape.
 * @see {@link AdminSendTestInvoiceCommandOutput} for command's `response` shape.
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
export class AdminSendTestInvoiceCommand extends $Command.classBuilder<AdminSendTestInvoiceCommandInput, AdminSendTestInvoiceCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminSendTestInvoice", {

  })
  .n("JustWorkflowItClient", "AdminSendTestInvoiceCommand")
  .f(void 0, void 0)
  .ser(se_AdminSendTestInvoiceCommand)
  .de(de_AdminSendTestInvoiceCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminSendTestInvoiceInput;
      output: AdminSendTestInvoiceOutput;
  };
  sdk: {
      input: AdminSendTestInvoiceCommandInput;
      output: AdminSendTestInvoiceCommandOutput;
  };
};
}

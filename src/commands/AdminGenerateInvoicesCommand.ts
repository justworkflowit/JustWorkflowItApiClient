// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminGenerateInvoicesInput,
  AdminGenerateInvoicesOutput,
} from "../models/models_0";
import {
  de_AdminGenerateInvoicesCommand,
  se_AdminGenerateInvoicesCommand,
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
 * The input for {@link AdminGenerateInvoicesCommand}.
 */
export interface AdminGenerateInvoicesCommandInput extends AdminGenerateInvoicesInput {}
/**
 * @public
 *
 * The output of {@link AdminGenerateInvoicesCommand}.
 */
export interface AdminGenerateInvoicesCommandOutput extends AdminGenerateInvoicesOutput, __MetadataBearer {}

/**
 * Generates finalized Stripe invoices for all organizations covering marketplace usage and subscription plan fees within a specified billing period. **Requires `staff:write` permission.** Each invoice includes a subscription plan fee line item (always present, even at $0) plus per-listing marketplace usage line items aggregated from `BillableWorkTransaction` records. The platform retains a **30% fee** on all marketplace line item revenue. **`dryRun` mode:** When `dryRun=true`, returns a full preview of invoices that *would* be generated without writing to the database or submitting anything to Stripe. Use this to validate amounts before committing. **Idempotency:** Re-running with `dryRun=false` is safe — any organization that already has an invoice for the given `billingPeriodStart` is silently skipped. Only new invoices are created and submitted. **Typical workflow:** 1. Run `AdminTriggerUsageSync` for each day in the billing period to ensure `BillableWorkTransaction` records are populated and synced as Stripe pending invoice items. 2. Call `AdminGenerateInvoices` with `dryRun=true` to preview amounts across all organizations. 3. Call `AdminGenerateInvoices` with `dryRun=false` to finalize and charge via Stripe (`charge_automatically`). 4. Use `AdminSendTestInvoice` to send a preview invoice email for a specific organization without affecting production invoice records.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminGenerateInvoicesCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminGenerateInvoicesCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminGenerateInvoicesInput
 *   billingPeriodStart: new Date("TIMESTAMP"), // required
 *   billingPeriodEnd: new Date("TIMESTAMP"), // required
 *   dryRun: true || false,
 * };
 * const command = new AdminGenerateInvoicesCommand(input);
 * const response = await client.send(command);
 * // { // AdminGenerateInvoicesOutput
 * //   invoiceCount: Number("int"), // required
 * //   totalAmount: Number("double"), // required
 * //   dryRun: true || false, // required
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
 * @param AdminGenerateInvoicesCommandInput - {@link AdminGenerateInvoicesCommandInput}
 * @returns {@link AdminGenerateInvoicesCommandOutput}
 * @see {@link AdminGenerateInvoicesCommandInput} for command's `input` shape.
 * @see {@link AdminGenerateInvoicesCommandOutput} for command's `response` shape.
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
export class AdminGenerateInvoicesCommand extends $Command.classBuilder<AdminGenerateInvoicesCommandInput, AdminGenerateInvoicesCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminGenerateInvoices", {

  })
  .n("JustWorkflowItClient", "AdminGenerateInvoicesCommand")
  .f(void 0, void 0)
  .ser(se_AdminGenerateInvoicesCommand)
  .de(de_AdminGenerateInvoicesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminGenerateInvoicesInput;
      output: AdminGenerateInvoicesOutput;
  };
  sdk: {
      input: AdminGenerateInvoicesCommandInput;
      output: AdminGenerateInvoicesCommandOutput;
  };
};
}

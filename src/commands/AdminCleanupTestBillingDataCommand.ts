// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminCleanupTestBillingDataInput,
  AdminCleanupTestBillingDataOutput,
} from "../models/models_0";
import {
  de_AdminCleanupTestBillingDataCommand,
  se_AdminCleanupTestBillingDataCommand,
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
 * The input for {@link AdminCleanupTestBillingDataCommand}.
 */
export interface AdminCleanupTestBillingDataCommandInput extends AdminCleanupTestBillingDataInput {}
/**
 * @public
 *
 * The output of {@link AdminCleanupTestBillingDataCommand}.
 */
export interface AdminCleanupTestBillingDataCommandOutput extends AdminCleanupTestBillingDataOutput, __MetadataBearer {}

/**
 * Deletes stale billing artifacts left behind by integration tests — `MarketplaceUsageSync` records, `MarketplaceInvoice` / `MarketplaceInvoiceLineItem` records, and their corresponding Stripe objects (pending invoice items and draft/open invoices are voided). Only affects records belonging to the specified organization that are older than `maxAgeDays`. **Requires `staff:write` permission.** **Typical usage:** Call from integration test cleanup to prevent Stripe dashboard clutter when running against live keys. Safe to call repeatedly — skips records that have already been cleaned up.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminCleanupTestBillingDataCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminCleanupTestBillingDataCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminCleanupTestBillingDataInput
 *   organizationId: "STRING_VALUE", // required
 *   maxAgeDays: Number("int"), // required
 * };
 * const command = new AdminCleanupTestBillingDataCommand(input);
 * const response = await client.send(command);
 * // { // AdminCleanupTestBillingDataOutput
 * //   usageSyncsDeleted: Number("int"), // required
 * //   invoicesDeleted: Number("int"), // required
 * //   stripeObjectsCleaned: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param AdminCleanupTestBillingDataCommandInput - {@link AdminCleanupTestBillingDataCommandInput}
 * @returns {@link AdminCleanupTestBillingDataCommandOutput}
 * @see {@link AdminCleanupTestBillingDataCommandInput} for command's `input` shape.
 * @see {@link AdminCleanupTestBillingDataCommandOutput} for command's `response` shape.
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
export class AdminCleanupTestBillingDataCommand extends $Command.classBuilder<AdminCleanupTestBillingDataCommandInput, AdminCleanupTestBillingDataCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminCleanupTestBillingData", {

  })
  .n("JustWorkflowItClient", "AdminCleanupTestBillingDataCommand")
  .f(void 0, void 0)
  .ser(se_AdminCleanupTestBillingDataCommand)
  .de(de_AdminCleanupTestBillingDataCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminCleanupTestBillingDataInput;
      output: AdminCleanupTestBillingDataOutput;
  };
  sdk: {
      input: AdminCleanupTestBillingDataCommandInput;
      output: AdminCleanupTestBillingDataCommandOutput;
  };
};
}

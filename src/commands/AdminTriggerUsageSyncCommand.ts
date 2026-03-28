// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminTriggerUsageSyncInput,
  AdminTriggerUsageSyncOutput,
} from "../models/models_0";
import {
  de_AdminTriggerUsageSyncCommand,
  se_AdminTriggerUsageSyncCommand,
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
 * The input for {@link AdminTriggerUsageSyncCommand}.
 */
export interface AdminTriggerUsageSyncCommandInput extends AdminTriggerUsageSyncInput {}
/**
 * @public
 *
 * The output of {@link AdminTriggerUsageSyncCommand}.
 */
export interface AdminTriggerUsageSyncCommandOutput extends AdminTriggerUsageSyncOutput, __MetadataBearer {}

/**
 * Manually runs the daily marketplace usage sync for a specific date, creating Stripe pending invoice items for all billable `(org, listing)` pairs. **Requires `staff:write` permission.**
 *
 * - Queries `BillableWorkTransaction` records for `usageDate` (epoch seconds; defaults to yesterday UTC if omitted), aggregates by `(organizationId, marketplaceListingId)`, and applies per-org billing overrides configured via `UpsertMarketplaceListingBillingOverride`.
 * - Creates Stripe **pending invoice items** on each org's Stripe customer — these are automatically rolled into the customer's next subscription invoice when Stripe finalizes it.
 * - **Idempotent:** A unique constraint on `(organizationId, marketplaceListingId, usageDate)` prevents duplicate Stripe items. Safe to re-run and useful for backfilling missed days.
 * - Skips: orgs without a Stripe customer, zero-amount line items, and any `(org, listing, date)` combination already synced.
 * - Returns `synced` (new Stripe invoice items created) and `skipped` counts.
 *
 * **Typical workflow:** Call `AdminTriggerUsageSync` for each day in the billing period to populate usage → preview with `AdminGenerateInvoices` (`dryRun=true`) → finalize with `AdminGenerateInvoices` (`dryRun=false`). Use `AdminSendTestInvoice` to preview the invoice email for a specific org before committing. This endpoint exposes the same logic as the automated daily Lambda cron, which runs at 02:00 UTC for the previous day.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminTriggerUsageSyncCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminTriggerUsageSyncCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminTriggerUsageSyncInput
 *   usageDate: new Date("TIMESTAMP"),
 * };
 * const command = new AdminTriggerUsageSyncCommand(input);
 * const response = await client.send(command);
 * // { // AdminTriggerUsageSyncOutput
 * //   synced: Number("int"), // required
 * //   skipped: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param AdminTriggerUsageSyncCommandInput - {@link AdminTriggerUsageSyncCommandInput}
 * @returns {@link AdminTriggerUsageSyncCommandOutput}
 * @see {@link AdminTriggerUsageSyncCommandInput} for command's `input` shape.
 * @see {@link AdminTriggerUsageSyncCommandOutput} for command's `response` shape.
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
export class AdminTriggerUsageSyncCommand extends $Command.classBuilder<AdminTriggerUsageSyncCommandInput, AdminTriggerUsageSyncCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminTriggerUsageSync", {

  })
  .n("JustWorkflowItClient", "AdminTriggerUsageSyncCommand")
  .f(void 0, void 0)
  .ser(se_AdminTriggerUsageSyncCommand)
  .de(de_AdminTriggerUsageSyncCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminTriggerUsageSyncInput;
      output: AdminTriggerUsageSyncOutput;
  };
  sdk: {
      input: AdminTriggerUsageSyncCommandInput;
      output: AdminTriggerUsageSyncCommandOutput;
  };
};
}

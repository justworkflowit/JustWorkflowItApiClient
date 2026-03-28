// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetConsumerListingUsageTimeSeriesInput,
  GetConsumerListingUsageTimeSeriesOutput,
} from "../models/models_0";
import {
  de_GetConsumerListingUsageTimeSeriesCommand,
  se_GetConsumerListingUsageTimeSeriesCommand,
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
 * The input for {@link GetConsumerListingUsageTimeSeriesCommand}.
 */
export interface GetConsumerListingUsageTimeSeriesCommandInput extends GetConsumerListingUsageTimeSeriesInput {}
/**
 * @public
 *
 * The output of {@link GetConsumerListingUsageTimeSeriesCommand}.
 */
export interface GetConsumerListingUsageTimeSeriesCommandOutput extends GetConsumerListingUsageTimeSeriesOutput, __MetadataBearer {}

/**
 * Returns a time-bucketed series of the calling organization's own usage against a subscribed marketplace listing — the consumer-side counterpart to `GetPublisherListingUsageTimeSeries`, scoped exclusively to the requesting organization's billable activity.
 *
 * **Permission required:** `organization:read`
 *
 * **Required query parameters:** `since` (inclusive) and `until` (exclusive) as ISO 8601 date-time strings. Optional `bucket`: `HOURLY` or `DAILY` (default `DAILY`). **Every bucket** in the range always appears in `dataPoints` — empty periods return zero-value entries rather than being omitted, so the series is always contiguous.
 *
 * **Response highlights:**
 * - `dataPoints` — ordered array of `\{ timestamp, units, invocations, estimatedCost \}` entries, one per bucket; `invocations` counts only `JOB_SUBMISSION` events
 * - `totalUnits`, `totalInvocations`, `totalEstimatedCost` — aggregates across the full window
 * - `effectiveBillingModel`, `effectiveCostPerUnit`, `effectiveCostPerInvocation`, `effectiveCostPerMonth` — the **override-adjusted** rates actually applied to this consumer; if the publisher has set a custom override via `UpsertMarketplaceListingBillingOverride`, these fields reflect that override rather than the listing defaults shown in `GetMarketplaceListing`
 *
 * **Key difference from publisher endpoints:** `estimatedCost` values here are calculated using the consumer's effective (override-aware) rates, making this the accurate source of truth for what the calling organization will actually be billed — whereas `GetPublisherListingUsageTimeSeries` uses listing-level defaults only.
 *
 * **Related endpoints:**
 * - `GetPublisherListingUsageTimeSeries` — publisher view of total usage across all consumers for the same listing
 * - `GetPublisherListingConsumerBreakdown` — publisher view of per-org usage and effective costs for a time window
 * - `AllowlistMarketplaceListing` — must be called before `SubmitJob` can target this listing; job submissions generate the billable transactions reported here
 * - `ListAllowlistedMarketplaceListings` — lists all listings the organization has subscribed to, with billing model details
 *
 * **Errors:** `403 Forbidden` if missing `organization:read` permission; `404 Not Found` if the listing does not exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetConsumerListingUsageTimeSeriesCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetConsumerListingUsageTimeSeriesCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetConsumerListingUsageTimeSeriesInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   since: new Date("TIMESTAMP"), // required
 *   until: new Date("TIMESTAMP"), // required
 *   bucket: "HOURLY" || "DAILY",
 * };
 * const command = new GetConsumerListingUsageTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // GetConsumerListingUsageTimeSeriesOutput
 * //   dataPoints: [ // UsageTimeSeriesDataPointList // required
 * //     { // UsageTimeSeriesDataPoint
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       units: Number("float"), // required
 * //       invocations: Number("long"), // required
 * //       estimatedCost: Number("float"),
 * //     },
 * //   ],
 * //   totalUnits: Number("float"), // required
 * //   totalInvocations: Number("long"), // required
 * //   totalEstimatedCost: Number("float"),
 * //   effectiveBillingModel: "FREE" || "PER_TRANSACTION_UNIT" || "PER_INVOCATION" || "PER_MONTH", // required
 * //   effectiveCostPerUnit: Number("float"),
 * //   effectiveCostPerInvocation: Number("float"),
 * //   effectiveCostPerMonth: Number("float"),
 * // };
 *
 * ```
 *
 * @param GetConsumerListingUsageTimeSeriesCommandInput - {@link GetConsumerListingUsageTimeSeriesCommandInput}
 * @returns {@link GetConsumerListingUsageTimeSeriesCommandOutput}
 * @see {@link GetConsumerListingUsageTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link GetConsumerListingUsageTimeSeriesCommandOutput} for command's `response` shape.
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
export class GetConsumerListingUsageTimeSeriesCommand extends $Command.classBuilder<GetConsumerListingUsageTimeSeriesCommandInput, GetConsumerListingUsageTimeSeriesCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetConsumerListingUsageTimeSeries", {

  })
  .n("JustWorkflowItClient", "GetConsumerListingUsageTimeSeriesCommand")
  .f(void 0, void 0)
  .ser(se_GetConsumerListingUsageTimeSeriesCommand)
  .de(de_GetConsumerListingUsageTimeSeriesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetConsumerListingUsageTimeSeriesInput;
      output: GetConsumerListingUsageTimeSeriesOutput;
  };
  sdk: {
      input: GetConsumerListingUsageTimeSeriesCommandInput;
      output: GetConsumerListingUsageTimeSeriesCommandOutput;
  };
};
}

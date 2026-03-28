// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetPublisherListingUsageTimeSeriesInput,
  GetPublisherListingUsageTimeSeriesOutput,
} from "../models/models_0";
import {
  de_GetPublisherListingUsageTimeSeriesCommand,
  se_GetPublisherListingUsageTimeSeriesCommand,
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
 * The input for {@link GetPublisherListingUsageTimeSeriesCommand}.
 */
export interface GetPublisherListingUsageTimeSeriesCommandInput extends GetPublisherListingUsageTimeSeriesInput {}
/**
 * @public
 *
 * The output of {@link GetPublisherListingUsageTimeSeriesCommand}.
 */
export interface GetPublisherListingUsageTimeSeriesCommandOutput extends GetPublisherListingUsageTimeSeriesOutput, __MetadataBearer {}

/**
 * Returns a time-bucketed series of aggregate usage metrics for a publisher's marketplace listing, showing total `units`, `invocations`, and `estimatedCost` rolled up across **all** consuming organizations — the primary data source for charting adoption and revenue over time.
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Required query parameters:** `since` (inclusive) and `until` (exclusive) as ISO 8601 date-time strings defining the analysis window.
 *
 * **Optional `bucket` parameter:** `HOURLY` or `DAILY` (default `DAILY`). **Every bucket** in the requested range always appears in `dataPoints` — empty periods return zero-value entries rather than being omitted, ensuring the series is contiguous.
 *
 * **Response fields:**
 * - `dataPoints` — ordered array of `\{ timestamp, units, invocations, estimatedCost \}` entries, one per bucket; `invocations` counts only `JOB_SUBMISSION` events
 * - `totalUnits`, `totalInvocations`, `totalEstimatedCost` — aggregates across the entire window
 * - `estimatedCost` values use the listing-level billing model configured via `UpdateMarketplaceListingBilling`; per-consumer billing overrides are **not** reflected here
 *
 * **Related endpoints:**
 * - `GetPublisherListingConsumerBreakdown` — same publisher scope but broken down per consuming organization (no time bucketing), with override-aware cost estimates per consumer
 * - `GetConsumerListingUsageTimeSeries` — consumer-side counterpart scoped to a single organization's own usage, including their effective override-adjusted billing rates
 * - `UpdateMarketplaceListingBilling` — configure the pricing model and rates that determine `estimatedCost` in this response
 *
 * **Errors:** `403 Forbidden` if missing `marketplace:publish` permission; `404 Not Found` if the listing does not exist or belongs to a different organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetPublisherListingUsageTimeSeriesCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetPublisherListingUsageTimeSeriesCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetPublisherListingUsageTimeSeriesInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   since: new Date("TIMESTAMP"), // required
 *   until: new Date("TIMESTAMP"), // required
 *   bucket: "HOURLY" || "DAILY",
 * };
 * const command = new GetPublisherListingUsageTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // GetPublisherListingUsageTimeSeriesOutput
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
 * // };
 *
 * ```
 *
 * @param GetPublisherListingUsageTimeSeriesCommandInput - {@link GetPublisherListingUsageTimeSeriesCommandInput}
 * @returns {@link GetPublisherListingUsageTimeSeriesCommandOutput}
 * @see {@link GetPublisherListingUsageTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link GetPublisherListingUsageTimeSeriesCommandOutput} for command's `response` shape.
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
export class GetPublisherListingUsageTimeSeriesCommand extends $Command.classBuilder<GetPublisherListingUsageTimeSeriesCommandInput, GetPublisherListingUsageTimeSeriesCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetPublisherListingUsageTimeSeries", {

  })
  .n("JustWorkflowItClient", "GetPublisherListingUsageTimeSeriesCommand")
  .f(void 0, void 0)
  .ser(se_GetPublisherListingUsageTimeSeriesCommand)
  .de(de_GetPublisherListingUsageTimeSeriesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetPublisherListingUsageTimeSeriesInput;
      output: GetPublisherListingUsageTimeSeriesOutput;
  };
  sdk: {
      input: GetPublisherListingUsageTimeSeriesCommandInput;
      output: GetPublisherListingUsageTimeSeriesCommandOutput;
  };
};
}

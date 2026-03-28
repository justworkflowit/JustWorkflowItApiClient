// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetWorkflowMetricTimeSeriesInput,
  GetWorkflowMetricTimeSeriesOutput,
} from "../models/models_0";
import {
  de_GetWorkflowMetricTimeSeriesCommand,
  se_GetWorkflowMetricTimeSeriesCommand,
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
 * The input for {@link GetWorkflowMetricTimeSeriesCommand}.
 */
export interface GetWorkflowMetricTimeSeriesCommandInput extends GetWorkflowMetricTimeSeriesInput {}
/**
 * @public
 *
 * The output of {@link GetWorkflowMetricTimeSeriesCommand}.
 */
export interface GetWorkflowMetricTimeSeriesCommandOutput extends GetWorkflowMetricTimeSeriesOutput, __MetadataBearer {}

/**
 * Retrieves aggregated time series data for a specific workflow metric, returning an ordered list of `\{timestamp, value\}` data points bucketed by hour or day.
 *
 * Required query parameters:
 * - `metric` — one of `jobs_submitted`, `jobs_completed_successfully`, `jobs_failed`, `job_duration_seconds`, `job_timeout_count`, `step_failures`, `step_duration_seconds`, `step_retries`, `resource_utilization`, `resource_utilization_used`, `resource_utilization_available`, `billable_transaction_units`
 * - `aggregation` — `count`, `avg`, or `max` applied within each time bucket
 * - `bucket` — granularity: `hour` or `day`
 * - `since` / `until` — ISO 8601 date-time strings defining the query window
 *
 * Behavior notes:
 * - Requires `metrics:read` permission and a human (non-API-token) caller.
 * - The `billable_transaction_units` metric is sourced from billing transaction records and returns a single aggregated value for the full time window rather than per-bucket data points.
 * - Use `ListJobs` or `GetJob` to drill into individual job outcomes behind the aggregated counts.
 * - For marketplace usage analytics, see `GetPublisherListingUsageTimeSeries` (publisher view) and `GetConsumerListingUsageTimeSeries` (consumer view) instead.
 * - Returns `ValidationError` if any required parameter is missing or invalid, and `AuthorizationError` if the caller lacks `metrics:read` or is an API token user.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetWorkflowMetricTimeSeriesCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetWorkflowMetricTimeSeriesCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetWorkflowMetricTimeSeriesInput
 *   organizationId: "STRING_VALUE", // required
 *   metric: "jobs_submitted" || "jobs_completed_successfully" || "jobs_failed" || "job_duration_seconds" || "job_timeout_count" || "step_failures" || "step_duration_seconds" || "step_retries" || "resource_utilization" || "resource_utilization_used" || "resource_utilization_available" || "billable_transaction_units", // required
 *   aggregation: "count" || "avg" || "max", // required
 *   bucket: "hour" || "day", // required
 *   since: new Date("TIMESTAMP"), // required
 *   until: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetWorkflowMetricTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowMetricTimeSeriesOutput
 * //   results: [ // AggregatedMetricResultList // required
 * //     { // AggregatedMetricResult
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       value: Number("double"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetWorkflowMetricTimeSeriesCommandInput - {@link GetWorkflowMetricTimeSeriesCommandInput}
 * @returns {@link GetWorkflowMetricTimeSeriesCommandOutput}
 * @see {@link GetWorkflowMetricTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowMetricTimeSeriesCommandOutput} for command's `response` shape.
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
export class GetWorkflowMetricTimeSeriesCommand extends $Command.classBuilder<GetWorkflowMetricTimeSeriesCommandInput, GetWorkflowMetricTimeSeriesCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetWorkflowMetricTimeSeries", {

  })
  .n("JustWorkflowItClient", "GetWorkflowMetricTimeSeriesCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowMetricTimeSeriesCommand)
  .de(de_GetWorkflowMetricTimeSeriesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetWorkflowMetricTimeSeriesInput;
      output: GetWorkflowMetricTimeSeriesOutput;
  };
  sdk: {
      input: GetWorkflowMetricTimeSeriesCommandInput;
      output: GetWorkflowMetricTimeSeriesCommandOutput;
  };
};
}

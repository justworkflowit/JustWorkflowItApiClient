// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetPublisherListingConsumerBreakdownInput,
  GetPublisherListingConsumerBreakdownOutput,
} from "../models/models_0";
import {
  de_GetPublisherListingConsumerBreakdownCommand,
  se_GetPublisherListingConsumerBreakdownCommand,
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
 * The input for {@link GetPublisherListingConsumerBreakdownCommand}.
 */
export interface GetPublisherListingConsumerBreakdownCommandInput extends GetPublisherListingConsumerBreakdownInput {}
/**
 * @public
 *
 * The output of {@link GetPublisherListingConsumerBreakdownCommand}.
 */
export interface GetPublisherListingConsumerBreakdownCommandOutput extends GetPublisherListingConsumerBreakdownOutput, __MetadataBearer {}

/**
 * Returns a per-consumer breakdown of marketplace listing usage over a specified time window, showing each consuming organization's transaction units, invocations, and estimated cost — sorted by usage descending (heaviest consumers first).
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Required query parameters:** `since` (inclusive) and `until` (exclusive) as ISO 8601 date-time strings define the analysis window; both are mandatory.
 *
 * **Response shape:** The `consumers` array has one entry per organization that submitted at least one job against the listing in the window. Each entry includes `organizationName`, `organizationKey`, `units`, `invocations`, and `estimatedCost`. Estimated costs respect per-consumer billing overrides — organizations with a custom override (set via `UpsertMarketplaceListingBillingOverride`) are billed at their override rate rather than the listing default. Top-level `totalUnits`, `totalInvocations`, and `totalEstimatedCost` summarize across all consumers. **No pagination** — all consumers are returned in a single response.
 *
 * **Related endpoints:**
 * - `GetPublisherListingUsageTimeSeries` — same publisher view but aggregated as a time-bucketed series (hourly/daily) across all consumers rather than per-org
 * - `GetConsumerListingUsageTimeSeries` — consumer-side counterpart showing a single org's own usage over time with their effective billing rate
 * - `ListMarketplaceListingBillingOverrides` / `UpsertMarketplaceListingBillingOverride` — manage the per-consumer pricing overrides that affect `estimatedCost` values returned here
 * - `RevokeMarketplaceAccess` — call this endpoint first to identify active consumers before revoking access to a private listing
 *
 * **Errors:** `403 Forbidden` if missing `marketplace:publish` permission; `404 Not Found` if the listing does not exist or belongs to a different organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetPublisherListingConsumerBreakdownCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetPublisherListingConsumerBreakdownCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetPublisherListingConsumerBreakdownInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   since: new Date("TIMESTAMP"), // required
 *   until: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetPublisherListingConsumerBreakdownCommand(input);
 * const response = await client.send(command);
 * // { // GetPublisherListingConsumerBreakdownOutput
 * //   consumers: [ // ConsumerUsageBreakdownList // required
 * //     { // ConsumerUsageBreakdown
 * //       organizationId: "STRING_VALUE", // required
 * //       organizationName: "STRING_VALUE", // required
 * //       organizationKey: "STRING_VALUE", // required
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
 * @param GetPublisherListingConsumerBreakdownCommandInput - {@link GetPublisherListingConsumerBreakdownCommandInput}
 * @returns {@link GetPublisherListingConsumerBreakdownCommandOutput}
 * @see {@link GetPublisherListingConsumerBreakdownCommandInput} for command's `input` shape.
 * @see {@link GetPublisherListingConsumerBreakdownCommandOutput} for command's `response` shape.
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
export class GetPublisherListingConsumerBreakdownCommand extends $Command.classBuilder<GetPublisherListingConsumerBreakdownCommandInput, GetPublisherListingConsumerBreakdownCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetPublisherListingConsumerBreakdown", {

  })
  .n("JustWorkflowItClient", "GetPublisherListingConsumerBreakdownCommand")
  .f(void 0, void 0)
  .ser(se_GetPublisherListingConsumerBreakdownCommand)
  .de(de_GetPublisherListingConsumerBreakdownCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetPublisherListingConsumerBreakdownInput;
      output: GetPublisherListingConsumerBreakdownOutput;
  };
  sdk: {
      input: GetPublisherListingConsumerBreakdownCommandInput;
      output: GetPublisherListingConsumerBreakdownCommandOutput;
  };
};
}

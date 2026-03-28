// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListMyMarketplaceListingsInput,
  ListMyMarketplaceListingsOutput,
} from "../models/models_0";
import {
  de_ListMyMarketplaceListingsCommand,
  se_ListMyMarketplaceListingsCommand,
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
 * The input for {@link ListMyMarketplaceListingsCommand}.
 */
export interface ListMyMarketplaceListingsCommandInput extends ListMyMarketplaceListingsInput {}
/**
 * @public
 *
 * The output of {@link ListMyMarketplaceListingsCommand}.
 */
export interface ListMyMarketplaceListingsCommandOutput extends ListMyMarketplaceListingsOutput, __MetadataBearer {}

/**
 * Lists all marketplace listings **owned by the calling organization** across all lifecycle statuses — the publisher's counterpart to the public `ListMarketplaceListings` discovery endpoint.
 *
 * **Key differences from `ListMarketplaceListings`:**
 * - Scoped to the authenticated organization's own listings only (no `organizationId` filter needed)
 * - Returns listings in **all statuses**: `DRAFT`, `PUBLISHED`, and `ARCHIVED` — use the `status` query parameter to narrow results
 * - Requires `marketplace:publish` permission; returns `403 Forbidden` if missing
 *
 * **Pagination:** Cursor-based via `nextToken` (default page size **50**, ordered newest-first). Pass the `nextToken` from the previous response to fetch the next page.
 *
 * **Response shape:** Each entry is a `MarketplaceListingSummary` including billing model, pricing fields, per-consumer rate limits, and latest version metadata (`workflowName`, `latestVersionNumber`, `workflowVersionNumber`).
 *
 * **Publisher workflow:**
 * 1. Create a listing: `PublishWorkflowToMarketplace`
 * 2. Add new versions: `CreateMarketplaceListingVersion`
 * 3. Monitor usage: `GetPublisherListingUsageTimeSeries`, `GetPublisherListingConsumerBreakdown`
 * 4. Manage access for private listings: `GrantMarketplaceAccess`, `RevokeMarketplaceAccess`
 * 5. Archive a listing: `UnpublishWorkflowFromMarketplace` (sets status to `ARCHIVED`)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListMyMarketplaceListingsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListMyMarketplaceListingsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListMyMarketplaceListingsInput
 *   organizationId: "STRING_VALUE", // required
 *   status: "DRAFT" || "PUBLISHED" || "ARCHIVED",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMyMarketplaceListingsCommand(input);
 * const response = await client.send(command);
 * // { // ListMyMarketplaceListingsOutput
 * //   listings: [ // MarketplaceListingSummaryList // required
 * //     { // MarketplaceListingSummary
 * //       listingId: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       visibility: "PUBLIC" || "PRIVATE", // required
 * //       status: "DRAFT" || "PUBLISHED" || "ARCHIVED", // required
 * //       organizationId: "STRING_VALUE", // required
 * //       organizationName: "STRING_VALUE", // required
 * //       organizationKey: "STRING_VALUE", // required
 * //       workflowName: "STRING_VALUE", // required
 * //       latestVersionNumber: Number("int"), // required
 * //       workflowVersionNumber: Number("int"), // required
 * //       totalVersions: Number("int"), // required
 * //       billingModel: "FREE" || "PER_TRANSACTION_UNIT" || "PER_INVOCATION" || "PER_MONTH", // required
 * //       costPerUnit: Number("float"),
 * //       costPerInvocation: Number("float"),
 * //       costPerMonth: Number("float"),
 * //       rateLimitMaxRequests: Number("int"), // required
 * //       rateLimitWindowValue: Number("int"), // required
 * //       rateLimitWindowUnit: "MINUTES" || "HOURS", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMyMarketplaceListingsCommandInput - {@link ListMyMarketplaceListingsCommandInput}
 * @returns {@link ListMyMarketplaceListingsCommandOutput}
 * @see {@link ListMyMarketplaceListingsCommandInput} for command's `input` shape.
 * @see {@link ListMyMarketplaceListingsCommandOutput} for command's `response` shape.
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
export class ListMyMarketplaceListingsCommand extends $Command.classBuilder<ListMyMarketplaceListingsCommandInput, ListMyMarketplaceListingsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListMyMarketplaceListings", {

  })
  .n("JustWorkflowItClient", "ListMyMarketplaceListingsCommand")
  .f(void 0, void 0)
  .ser(se_ListMyMarketplaceListingsCommand)
  .de(de_ListMyMarketplaceListingsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListMyMarketplaceListingsInput;
      output: ListMyMarketplaceListingsOutput;
  };
  sdk: {
      input: ListMyMarketplaceListingsCommandInput;
      output: ListMyMarketplaceListingsCommandOutput;
  };
};
}

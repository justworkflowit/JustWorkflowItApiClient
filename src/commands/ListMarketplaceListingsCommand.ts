// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListMarketplaceListingsInput,
  ListMarketplaceListingsOutput,
} from "../models/models_0";
import {
  de_ListMarketplaceListingsCommand,
  se_ListMarketplaceListingsCommand,
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
 * The input for {@link ListMarketplaceListingsCommand}.
 */
export interface ListMarketplaceListingsCommandInput extends ListMarketplaceListingsInput {}
/**
 * @public
 *
 * The output of {@link ListMarketplaceListingsCommand}.
 */
export interface ListMarketplaceListingsCommandOutput extends ListMarketplaceListingsOutput, __MetadataBearer {}

/**
 * Lists all **published** marketplace listings available for discovery. No authentication required — anyone can browse the marketplace.
 *
 * **Filtering:**
 * - `search`: filters by title or description (case-insensitive substring match)
 * - `organizationId`: narrows results to listings published by a specific organization
 * - **Pagination**: use `limit` (default 50) and `nextToken` to page through large result sets
 *
 * **Visibility:** Only `PUBLISHED` listings are returned. `PUBLIC` listings are always included. `PRIVATE` listings are included only when the request is made by an authenticated caller whose organization has been granted access via `GrantMarketplaceAccess`.
 *
 * Each result includes billing details (`billingModel`, `costPerUnit`, `costPerInvocation`, `costPerMonth`), per-consumer rate limits, and latest version metadata (`workflowName`, `latestVersionNumber`).
 *
 * **Related endpoints:**
 * - Use `GetMarketplaceListing` to retrieve the full details and input schema for a single listing
 * - Use `SearchMarketplaceOrganizations` to discover publishers by name
 * - Use `AllowlistMarketplaceListing` to approve a listing for use in your organization's workflows before calling `SubmitJob`
 * - Authenticated publishers can view their own listings (all statuses) via `ListMyMarketplaceListings`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListMarketplaceListingsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListMarketplaceListingsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListMarketplaceListingsInput
 *   search: "STRING_VALUE",
 *   organizationId: "STRING_VALUE",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMarketplaceListingsCommand(input);
 * const response = await client.send(command);
 * // { // ListMarketplaceListingsOutput
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
 * @param ListMarketplaceListingsCommandInput - {@link ListMarketplaceListingsCommandInput}
 * @returns {@link ListMarketplaceListingsCommandOutput}
 * @see {@link ListMarketplaceListingsCommandInput} for command's `input` shape.
 * @see {@link ListMarketplaceListingsCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
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
export class ListMarketplaceListingsCommand extends $Command.classBuilder<ListMarketplaceListingsCommandInput, ListMarketplaceListingsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListMarketplaceListings", {

  })
  .n("JustWorkflowItClient", "ListMarketplaceListingsCommand")
  .f(void 0, void 0)
  .ser(se_ListMarketplaceListingsCommand)
  .de(de_ListMarketplaceListingsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListMarketplaceListingsInput;
      output: ListMarketplaceListingsOutput;
  };
  sdk: {
      input: ListMarketplaceListingsCommandInput;
      output: ListMarketplaceListingsCommandOutput;
  };
};
}

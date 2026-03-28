// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListAllowlistedMarketplaceListingsInput,
  ListAllowlistedMarketplaceListingsOutput,
} from "../models/models_0";
import {
  de_ListAllowlistedMarketplaceListingsCommand,
  se_ListAllowlistedMarketplaceListingsCommand,
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
 * The input for {@link ListAllowlistedMarketplaceListingsCommand}.
 */
export interface ListAllowlistedMarketplaceListingsCommandInput extends ListAllowlistedMarketplaceListingsInput {}
/**
 * @public
 *
 * The output of {@link ListAllowlistedMarketplaceListingsCommand}.
 */
export interface ListAllowlistedMarketplaceListingsCommandOutput extends ListAllowlistedMarketplaceListingsOutput, __MetadataBearer {}

/**
 * Returns all marketplace listings the organization has explicitly approved for use in workflow job submissions, with full billing and rate-limit details for each entry.
 *
 * **Permission required:** `marketplace:allowlist`
 *
 * **Filtering & pagination:**
 * - `search`: case-insensitive substring match against listing title or description
 * - `limit`: caps results per page (default **50**)
 * - `nextToken`: opaque pagination cursor — pass the `nextToken` from the previous response to retrieve the next page; omit when absent to signal the end of results
 *
 * **Response shape:** Each entry is a `MarketplaceListingSummary` — identical in structure to results from `ListMarketplaceListings` — including `billingModel`, pricing fields (`costPerUnit`, `costPerInvocation`, `costPerMonth`), per-consumer rate-limit settings, and latest version metadata (`workflowName`, `latestVersionNumber`).
 *
 * **Allowlist lifecycle:**
 * - Add a listing: `AllowlistMarketplaceListing` (POST `/marketplace/allowlist`)
 * - Remove a listing: `UnallowlistMarketplaceListing` (DELETE `/marketplace/allowlist/\{listingId\}`)
 * - Check a single listing: `IsMarketplaceListingAllowlisted` (returns `isAllowlisted` boolean and `allowlistedAt` timestamp)
 * - A listing must be on the allowlist before `SubmitJob` will accept it as the target workflow for a job
 *
 * **Errors:** `401 Unauthorized` if unauthenticated; `403 Forbidden` if the caller lacks `marketplace:allowlist` permission.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListAllowlistedMarketplaceListingsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListAllowlistedMarketplaceListingsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListAllowlistedMarketplaceListingsInput
 *   organizationId: "STRING_VALUE", // required
 *   search: "STRING_VALUE",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAllowlistedMarketplaceListingsCommand(input);
 * const response = await client.send(command);
 * // { // ListAllowlistedMarketplaceListingsOutput
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
 * @param ListAllowlistedMarketplaceListingsCommandInput - {@link ListAllowlistedMarketplaceListingsCommandInput}
 * @returns {@link ListAllowlistedMarketplaceListingsCommandOutput}
 * @see {@link ListAllowlistedMarketplaceListingsCommandInput} for command's `input` shape.
 * @see {@link ListAllowlistedMarketplaceListingsCommandOutput} for command's `response` shape.
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
export class ListAllowlistedMarketplaceListingsCommand extends $Command.classBuilder<ListAllowlistedMarketplaceListingsCommandInput, ListAllowlistedMarketplaceListingsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListAllowlistedMarketplaceListings", {

  })
  .n("JustWorkflowItClient", "ListAllowlistedMarketplaceListingsCommand")
  .f(void 0, void 0)
  .ser(se_ListAllowlistedMarketplaceListingsCommand)
  .de(de_ListAllowlistedMarketplaceListingsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListAllowlistedMarketplaceListingsInput;
      output: ListAllowlistedMarketplaceListingsOutput;
  };
  sdk: {
      input: ListAllowlistedMarketplaceListingsCommandInput;
      output: ListAllowlistedMarketplaceListingsCommandOutput;
  };
};
}

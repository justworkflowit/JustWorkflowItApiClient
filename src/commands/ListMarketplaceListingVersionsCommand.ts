// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListMarketplaceListingVersionsInput,
  ListMarketplaceListingVersionsOutput,
} from "../models/models_0";
import {
  de_ListMarketplaceListingVersionsCommand,
  se_ListMarketplaceListingVersionsCommand,
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
 * The input for {@link ListMarketplaceListingVersionsCommand}.
 */
export interface ListMarketplaceListingVersionsCommandInput extends ListMarketplaceListingVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListMarketplaceListingVersionsCommand}.
 */
export interface ListMarketplaceListingVersionsCommandOutput extends ListMarketplaceListingVersionsOutput, __MetadataBearer {}

/**
 * Lists all versions of a marketplace listing owned by the calling organization, ordered newest-first by `versionNumber` — the publisher's complete version history for a listing.
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Response shape:** Returns the full `versions` array in a single response — **no pagination**. Each `MarketplaceListingVersionSummary` entry includes:
 * - `versionNumber` — monotonically increasing integer (version 1 created by `PublishWorkflowToMarketplace`)
 * - `workflowVersionId`, `workflowVersionNumber`, `workflowName`, `workflowId` — the underlying workflow version details
 * - `inputSchema` — JSON Schema string for the workflow input, or `null` if none is defined
 *
 * **Publisher version management workflow:**
 * 1. Create a new version: `CreateMarketplaceListingVersion`
 * 2. Inspect a single version in detail: `GetMarketplaceListingVersion`
 *
 * **Errors:** `403 Forbidden` if missing `marketplace:publish` permission; `404 Not Found` if the listing does not exist or belongs to a different organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListMarketplaceListingVersionsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListMarketplaceListingVersionsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListMarketplaceListingVersionsInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 * };
 * const command = new ListMarketplaceListingVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListMarketplaceListingVersionsOutput
 * //   versions: [ // MarketplaceListingVersionSummaryList // required
 * //     { // MarketplaceListingVersionSummary
 * //       versionId: "STRING_VALUE", // required
 * //       versionNumber: Number("int"), // required
 * //       workflowVersionId: "STRING_VALUE", // required
 * //       workflowVersionNumber: Number("int"), // required
 * //       workflowName: "STRING_VALUE", // required
 * //       workflowId: "STRING_VALUE", // required
 * //       inputSchema: "STRING_VALUE",
 * //       outputSchema: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMarketplaceListingVersionsCommandInput - {@link ListMarketplaceListingVersionsCommandInput}
 * @returns {@link ListMarketplaceListingVersionsCommandOutput}
 * @see {@link ListMarketplaceListingVersionsCommandInput} for command's `input` shape.
 * @see {@link ListMarketplaceListingVersionsCommandOutput} for command's `response` shape.
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
export class ListMarketplaceListingVersionsCommand extends $Command.classBuilder<ListMarketplaceListingVersionsCommandInput, ListMarketplaceListingVersionsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListMarketplaceListingVersions", {

  })
  .n("JustWorkflowItClient", "ListMarketplaceListingVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListMarketplaceListingVersionsCommand)
  .de(de_ListMarketplaceListingVersionsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListMarketplaceListingVersionsInput;
      output: ListMarketplaceListingVersionsOutput;
  };
  sdk: {
      input: ListMarketplaceListingVersionsCommandInput;
      output: ListMarketplaceListingVersionsCommandOutput;
  };
};
}

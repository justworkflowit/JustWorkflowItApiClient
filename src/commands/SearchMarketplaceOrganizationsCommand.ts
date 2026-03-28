// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  SearchMarketplaceOrganizationsInput,
  SearchMarketplaceOrganizationsOutput,
} from "../models/models_0";
import {
  de_SearchMarketplaceOrganizationsCommand,
  se_SearchMarketplaceOrganizationsCommand,
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
 * The input for {@link SearchMarketplaceOrganizationsCommand}.
 */
export interface SearchMarketplaceOrganizationsCommandInput extends SearchMarketplaceOrganizationsInput {}
/**
 * @public
 *
 * The output of {@link SearchMarketplaceOrganizationsCommand}.
 */
export interface SearchMarketplaceOrganizationsCommandOutput extends SearchMarketplaceOrganizationsOutput, __MetadataBearer {}

/**
 * Searches for organizations that have published at least one **public** marketplace listing, enabling discovery of workflow publishers by name.
 *
 * **No authentication required** — this endpoint is fully public.
 *
 * **Filtering & result shape:**
 * - `search`: case-insensitive substring match against both the organization `name` and `displayName` fields
 * - `limit`: caps the number of results returned (default **10**); no pagination token is supported — refine your search term if results exceed the limit
 * - Results are ordered alphabetically by `displayName`
 * - Only organizations with at least one `PUBLISHED` + `PUBLIC` listing are included; organizations with only `DRAFT`, `ARCHIVED`, or `PRIVATE` listings are excluded
 *
 * **Typical discovery flow:**
 * 1. Call this endpoint to find a publisher organization by name and obtain its `organizationId`
 * 2. Pass that `organizationId` as a query parameter to `ListMarketplaceListings` to browse only that organization's listings
 * 3. Call `GetMarketplaceListing` to inspect billing model and input schema before allowlisting
 * 4. Call `AllowlistMarketplaceListing` to approve a listing for use in your workflows
 *
 * **Related endpoints:** `ListMarketplaceListings` (supports `organizationId` filter), `GetMarketplaceListing`, `AllowlistMarketplaceListing`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, SearchMarketplaceOrganizationsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, SearchMarketplaceOrganizationsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // SearchMarketplaceOrganizationsInput
 *   search: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new SearchMarketplaceOrganizationsCommand(input);
 * const response = await client.send(command);
 * // { // SearchMarketplaceOrganizationsOutput
 * //   organizations: [ // MarketplaceOrganizationList // required
 * //     { // MarketplaceOrganization
 * //       organizationId: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchMarketplaceOrganizationsCommandInput - {@link SearchMarketplaceOrganizationsCommandInput}
 * @returns {@link SearchMarketplaceOrganizationsCommandOutput}
 * @see {@link SearchMarketplaceOrganizationsCommandInput} for command's `input` shape.
 * @see {@link SearchMarketplaceOrganizationsCommandOutput} for command's `response` shape.
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
export class SearchMarketplaceOrganizationsCommand extends $Command.classBuilder<SearchMarketplaceOrganizationsCommandInput, SearchMarketplaceOrganizationsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "SearchMarketplaceOrganizations", {

  })
  .n("JustWorkflowItClient", "SearchMarketplaceOrganizationsCommand")
  .f(void 0, void 0)
  .ser(se_SearchMarketplaceOrganizationsCommand)
  .de(de_SearchMarketplaceOrganizationsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: SearchMarketplaceOrganizationsInput;
      output: SearchMarketplaceOrganizationsOutput;
  };
  sdk: {
      input: SearchMarketplaceOrganizationsCommandInput;
      output: SearchMarketplaceOrganizationsCommandOutput;
  };
};
}

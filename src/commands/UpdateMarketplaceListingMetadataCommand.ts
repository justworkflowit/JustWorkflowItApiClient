// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  UpdateMarketplaceListingMetadataInput,
  UpdateMarketplaceListingMetadataOutput,
} from "../models/models_0";
import {
  de_UpdateMarketplaceListingMetadataCommand,
  se_UpdateMarketplaceListingMetadataCommand,
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
 * The input for {@link UpdateMarketplaceListingMetadataCommand}.
 */
export interface UpdateMarketplaceListingMetadataCommandInput extends UpdateMarketplaceListingMetadataInput {}
/**
 * @public
 *
 * The output of {@link UpdateMarketplaceListingMetadataCommand}.
 */
export interface UpdateMarketplaceListingMetadataCommandOutput extends UpdateMarketplaceListingMetadataOutput, __MetadataBearer {}

/**
 * Updates the mutable metadata fields of an existing marketplace listing — specifically `description` and `visibility` — while leaving immutable fields (`title`, `key`) unchanged.
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Updatable fields:**
 * - `description` — plain-text description shown to consumers (max 2,000 chars); screened by a content filter and rejected with `422 Validation` if profanity is detected
 * - `visibility` — `PUBLIC` (discoverable by anyone) or `PRIVATE` (only organizations granted explicit access via `GrantMarketplaceAccess` can see or use the listing)
 *
 * **Immutable fields:** `title` and `key` are permanently set at creation via `PublishWorkflowToMarketplace` and cannot be changed here.
 *
 * **Visibility change implications:** Switching from `PUBLIC` to `PRIVATE` immediately hides the listing from `ListMarketplaceListings` and `GetMarketplaceListing` for unauthenticated and non-granted callers. Existing allowlists held by consumer organizations remain intact — use `RevokeMarketplaceAccess` to explicitly remove individual organizations if needed. Switching back to `PUBLIC` re-exposes the listing without requiring any grant management.
 *
 * **Response:** Returns `\{ success: true \}` with `200 OK` on success.
 *
 * **Related endpoints:**
 * - `PublishWorkflowToMarketplace` — sets the immutable `title` and `key` at creation
 * - `UpdateMarketplaceListingBilling` — update pricing model and rate limits (separate from metadata)
 * - `GrantMarketplaceAccess` / `RevokeMarketplaceAccess` — manage per-organization access for `PRIVATE` listings
 * - `UnpublishWorkflowFromMarketplace` — archive the listing entirely as a harder alternative to switching visibility to `PRIVATE`
 *
 * **Errors:** `404 Not Found` if the listing does not exist or belongs to a different organization; `403 Forbidden` if missing `marketplace:publish` permission; `422 Validation` if `description` contains profanity.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UpdateMarketplaceListingMetadataCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UpdateMarketplaceListingMetadataCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UpdateMarketplaceListingMetadataInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   visibility: "PUBLIC" || "PRIVATE",
 * };
 * const command = new UpdateMarketplaceListingMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMarketplaceListingMetadataOutput
 * //   success: true || false, // required
 * // };
 *
 * ```
 *
 * @param UpdateMarketplaceListingMetadataCommandInput - {@link UpdateMarketplaceListingMetadataCommandInput}
 * @returns {@link UpdateMarketplaceListingMetadataCommandOutput}
 * @see {@link UpdateMarketplaceListingMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateMarketplaceListingMetadataCommandOutput} for command's `response` shape.
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
export class UpdateMarketplaceListingMetadataCommand extends $Command.classBuilder<UpdateMarketplaceListingMetadataCommandInput, UpdateMarketplaceListingMetadataCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UpdateMarketplaceListingMetadata", {

  })
  .n("JustWorkflowItClient", "UpdateMarketplaceListingMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMarketplaceListingMetadataCommand)
  .de(de_UpdateMarketplaceListingMetadataCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UpdateMarketplaceListingMetadataInput;
      output: UpdateMarketplaceListingMetadataOutput;
  };
  sdk: {
      input: UpdateMarketplaceListingMetadataCommandInput;
      output: UpdateMarketplaceListingMetadataCommandOutput;
  };
};
}

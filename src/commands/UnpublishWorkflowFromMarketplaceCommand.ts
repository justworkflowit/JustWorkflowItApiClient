// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { UnpublishWorkflowFromMarketplaceInput } from "../models/models_0";
import {
  de_UnpublishWorkflowFromMarketplaceCommand,
  se_UnpublishWorkflowFromMarketplaceCommand,
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
 * The input for {@link UnpublishWorkflowFromMarketplaceCommand}.
 */
export interface UnpublishWorkflowFromMarketplaceCommandInput extends UnpublishWorkflowFromMarketplaceInput {}
/**
 * @public
 *
 * The output of {@link UnpublishWorkflowFromMarketplaceCommand}.
 */
export interface UnpublishWorkflowFromMarketplaceCommandOutput extends __MetadataBearer {}

/**
 * Archives a marketplace listing, immediately removing it from public discovery while preserving all listing data, versions, and historical usage records.
 *
 * **Permission required:** `marketplace:unpublish`
 *
 * **Key behaviors:**
 * - Sets the listing `status` to `ARCHIVED` — it will no longer appear in `ListMarketplaceListings`, `GetMarketplaceListing`, or any consumer's `ListAllowlistedMarketplaceListings` results
 * - The listing and all its versions remain in the system and are accessible to the publisher via `ListMyMarketplaceListings` (filter `status=ARCHIVED`) and `ListMarketplaceListingVersions`
 * - Consumer organizations that had previously allowlisted this listing will be unable to submit new jobs against it; use `GetPublisherListingConsumerBreakdown` beforehand to assess active consumers
 * - This operation is **idempotent** — calling it on an already-archived listing has no effect
 * - Returns `204 No Content` on success
 *
 * **Irreversibility:** There is no 're-publish' operation — once archived, the listing cannot be restored to `PUBLISHED` status via the API. Consider updating visibility to `PRIVATE` via `UpdateMarketplaceListingMetadata` as a reversible alternative if you only want to restrict discovery temporarily.
 *
 * **Related endpoints:**
 * - `PublishWorkflowToMarketplace` — creates a new listing (counterpart to this operation)
 * - `ListMyMarketplaceListings` — view archived listings by filtering on `status=ARCHIVED`
 * - `UpdateMarketplaceListingMetadata` — change visibility to `PRIVATE` as a softer alternative to archiving
 * - `RevokeMarketplaceAccess` — revoke access for specific organizations on a `PRIVATE` listing without fully archiving it
 *
 * **Errors:** `403 Forbidden` if missing `marketplace:unpublish` permission; `404 Not Found` if the listing does not exist or belongs to a different organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UnpublishWorkflowFromMarketplaceCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UnpublishWorkflowFromMarketplaceCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UnpublishWorkflowFromMarketplaceInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 * };
 * const command = new UnpublishWorkflowFromMarketplaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnpublishWorkflowFromMarketplaceCommandInput - {@link UnpublishWorkflowFromMarketplaceCommandInput}
 * @returns {@link UnpublishWorkflowFromMarketplaceCommandOutput}
 * @see {@link UnpublishWorkflowFromMarketplaceCommandInput} for command's `input` shape.
 * @see {@link UnpublishWorkflowFromMarketplaceCommandOutput} for command's `response` shape.
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
export class UnpublishWorkflowFromMarketplaceCommand extends $Command.classBuilder<UnpublishWorkflowFromMarketplaceCommandInput, UnpublishWorkflowFromMarketplaceCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UnpublishWorkflowFromMarketplace", {

  })
  .n("JustWorkflowItClient", "UnpublishWorkflowFromMarketplaceCommand")
  .f(void 0, void 0)
  .ser(se_UnpublishWorkflowFromMarketplaceCommand)
  .de(de_UnpublishWorkflowFromMarketplaceCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UnpublishWorkflowFromMarketplaceInput;
      output: {};
  };
  sdk: {
      input: UnpublishWorkflowFromMarketplaceCommandInput;
      output: UnpublishWorkflowFromMarketplaceCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { RevokeMarketplaceAccessInput } from "../models/models_0";
import {
  de_RevokeMarketplaceAccessCommand,
  se_RevokeMarketplaceAccessCommand,
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
 * The input for {@link RevokeMarketplaceAccessCommand}.
 */
export interface RevokeMarketplaceAccessCommandInput extends RevokeMarketplaceAccessInput {}
/**
 * @public
 *
 * The output of {@link RevokeMarketplaceAccessCommand}.
 */
export interface RevokeMarketplaceAccessCommandOutput extends __MetadataBearer {}

/**
 * Revokes a previously granted organization's access to a `PRIVATE` marketplace listing, immediately preventing that organization from discovering the listing or submitting new jobs against it. **Permission required:** `marketplace:grant` **Key behaviors:** - Deletes the grant record identified by `listingId` + `grantedOrganizationId` — after revocation, the target organization can no longer see the listing in `ListMarketplaceListings` or `GetMarketplaceListing`, and any future `SubmitJob` calls targeting this listing will be rejected for that organization - Jobs already running at the time of revocation are unaffected; only new submissions are blocked - **Not truly idempotent** despite the HTTP `DELETE` semantics: returns `404 Not Found` if no grant exists for the specified `grantedOrganizationId` — use `GrantMarketplaceAccess` to confirm a grant exists before calling this endpoint - Returns `204 No Content` on success **Related endpoints:** - `GrantMarketplaceAccess` — the counterpart that creates an access grant for an organization - `UpdateMarketplaceListingMetadata` — change visibility from `PRIVATE` back to `PUBLIC` as an alternative to managing individual grants - `GetPublisherListingConsumerBreakdown` — identify active consumers before revoking access - `UnpublishWorkflowFromMarketplace` — harder alternative that removes the listing from all consumers entirely **Errors:** `403 Forbidden` if missing `marketplace:grant` permission; `404 Not Found` if the listing does not exist, belongs to a different organization, or no grant exists for the specified `grantedOrganizationId`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, RevokeMarketplaceAccessCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, RevokeMarketplaceAccessCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // RevokeMarketplaceAccessInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   grantedOrganizationId: "STRING_VALUE", // required
 * };
 * const command = new RevokeMarketplaceAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeMarketplaceAccessCommandInput - {@link RevokeMarketplaceAccessCommandInput}
 * @returns {@link RevokeMarketplaceAccessCommandOutput}
 * @see {@link RevokeMarketplaceAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeMarketplaceAccessCommandOutput} for command's `response` shape.
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
export class RevokeMarketplaceAccessCommand extends $Command.classBuilder<RevokeMarketplaceAccessCommandInput, RevokeMarketplaceAccessCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "RevokeMarketplaceAccess", {

  })
  .n("JustWorkflowItClient", "RevokeMarketplaceAccessCommand")
  .f(void 0, void 0)
  .ser(se_RevokeMarketplaceAccessCommand)
  .de(de_RevokeMarketplaceAccessCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: RevokeMarketplaceAccessInput;
      output: {};
  };
  sdk: {
      input: RevokeMarketplaceAccessCommandInput;
      output: RevokeMarketplaceAccessCommandOutput;
  };
};
}

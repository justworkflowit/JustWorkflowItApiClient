// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { UnallowlistMarketplaceListingInput } from "../models/models_0";
import {
  de_UnallowlistMarketplaceListingCommand,
  se_UnallowlistMarketplaceListingCommand,
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
 * The input for {@link UnallowlistMarketplaceListingCommand}.
 */
export interface UnallowlistMarketplaceListingCommandInput extends UnallowlistMarketplaceListingInput {}
/**
 * @public
 *
 * The output of {@link UnallowlistMarketplaceListingCommand}.
 */
export interface UnallowlistMarketplaceListingCommandOutput extends __MetadataBearer {}

/**
 * Removes a marketplace listing from the organization's allowlist, **immediately preventing new `SubmitJob` calls from targeting that listing** — any workflow job submitted after removal will be rejected until the listing is re-approved via `AllowlistMarketplaceListing`. **Permission required:** `marketplace:allowlist` **Behavior:** - Permanently deletes the allowlist entry (not soft-deleted); the listing must be re-added explicitly to restore access - **Not idempotent in practice:** returns `404 Not Found` if the listing is not currently on the allowlist — call `IsMarketplaceListingAllowlisted` first to check status before removing - Jobs already running at the time of removal are unaffected; only future `SubmitJob` submissions are blocked **Allowlist lifecycle:** - Add a listing: `AllowlistMarketplaceListing` - View all approved listings: `ListAllowlistedMarketplaceListings` - Check a single listing: `IsMarketplaceListingAllowlisted` **Errors:** `401 Unauthorized` if unauthenticated; `403 Forbidden` if missing `marketplace:allowlist` permission; `404 Not Found` if the listing is not on the organization's allowlist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UnallowlistMarketplaceListingCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UnallowlistMarketplaceListingCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UnallowlistMarketplaceListingInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 * };
 * const command = new UnallowlistMarketplaceListingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnallowlistMarketplaceListingCommandInput - {@link UnallowlistMarketplaceListingCommandInput}
 * @returns {@link UnallowlistMarketplaceListingCommandOutput}
 * @see {@link UnallowlistMarketplaceListingCommandInput} for command's `input` shape.
 * @see {@link UnallowlistMarketplaceListingCommandOutput} for command's `response` shape.
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
export class UnallowlistMarketplaceListingCommand extends $Command.classBuilder<UnallowlistMarketplaceListingCommandInput, UnallowlistMarketplaceListingCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UnallowlistMarketplaceListing", {

  })
  .n("JustWorkflowItClient", "UnallowlistMarketplaceListingCommand")
  .f(void 0, void 0)
  .ser(se_UnallowlistMarketplaceListingCommand)
  .de(de_UnallowlistMarketplaceListingCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UnallowlistMarketplaceListingInput;
      output: {};
  };
  sdk: {
      input: UnallowlistMarketplaceListingCommandInput;
      output: UnallowlistMarketplaceListingCommandOutput;
  };
};
}

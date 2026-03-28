// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AllowlistMarketplaceListingInput,
  AllowlistMarketplaceListingOutput,
} from "../models/models_0";
import {
  de_AllowlistMarketplaceListingCommand,
  se_AllowlistMarketplaceListingCommand,
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
 * The input for {@link AllowlistMarketplaceListingCommand}.
 */
export interface AllowlistMarketplaceListingCommandInput extends AllowlistMarketplaceListingInput {}
/**
 * @public
 *
 * The output of {@link AllowlistMarketplaceListingCommand}.
 */
export interface AllowlistMarketplaceListingCommandOutput extends AllowlistMarketplaceListingOutput, __MetadataBearer {}

/**
 * Adds a marketplace listing to the organization's allowlist, **enabling it to be used as the target workflow in `SubmitJob` calls** — a listing must be allowlisted before any job can be submitted against it.
 *
 * **Permission required:** `marketplace:allowlist`
 *
 * **Billing prerequisite:** The organization must have a valid payment card on file (via `CreateBillingSetupIntent` / `ListBillingPaymentMethods`) before this call will succeed. This requirement is waived for demo organizations.
 *
 * **Request body:** Supply the `listingId` of the listing to approve. Discover listings via `ListMarketplaceListings` (public) or inspect a specific one with `GetMarketplaceListing` before allowlisting.
 *
 * **Response:** Returns an `allowlistEntryId` (UUID) identifying the new allowlist entry.
 *
 * **Allowlist lifecycle:**
 * - View all approved listings: `ListAllowlistedMarketplaceListings`
 * - Check a single listing: `IsMarketplaceListingAllowlisted`
 * - Remove a listing: `UnallowlistMarketplaceListing`
 *
 * **Errors:** `401 Unauthorized` if unauthenticated; `403 Forbidden` if missing `marketplace:allowlist` permission or no valid payment method; `404 Not Found` if the listing does not exist or is not accessible to this organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AllowlistMarketplaceListingCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AllowlistMarketplaceListingCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AllowlistMarketplaceListingInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 * };
 * const command = new AllowlistMarketplaceListingCommand(input);
 * const response = await client.send(command);
 * // { // AllowlistMarketplaceListingOutput
 * //   allowlistEntryId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AllowlistMarketplaceListingCommandInput - {@link AllowlistMarketplaceListingCommandInput}
 * @returns {@link AllowlistMarketplaceListingCommandOutput}
 * @see {@link AllowlistMarketplaceListingCommandInput} for command's `input` shape.
 * @see {@link AllowlistMarketplaceListingCommandOutput} for command's `response` shape.
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
export class AllowlistMarketplaceListingCommand extends $Command.classBuilder<AllowlistMarketplaceListingCommandInput, AllowlistMarketplaceListingCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AllowlistMarketplaceListing", {

  })
  .n("JustWorkflowItClient", "AllowlistMarketplaceListingCommand")
  .f(void 0, void 0)
  .ser(se_AllowlistMarketplaceListingCommand)
  .de(de_AllowlistMarketplaceListingCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AllowlistMarketplaceListingInput;
      output: AllowlistMarketplaceListingOutput;
  };
  sdk: {
      input: AllowlistMarketplaceListingCommandInput;
      output: AllowlistMarketplaceListingCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  IsMarketplaceListingAllowlistedInput,
  IsMarketplaceListingAllowlistedOutput,
} from "../models/models_0";
import {
  de_IsMarketplaceListingAllowlistedCommand,
  se_IsMarketplaceListingAllowlistedCommand,
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
 * The input for {@link IsMarketplaceListingAllowlistedCommand}.
 */
export interface IsMarketplaceListingAllowlistedCommandInput extends IsMarketplaceListingAllowlistedInput {}
/**
 * @public
 *
 * The output of {@link IsMarketplaceListingAllowlistedCommand}.
 */
export interface IsMarketplaceListingAllowlistedCommandOutput extends IsMarketplaceListingAllowlistedOutput, __MetadataBearer {}

/**
 * Returns an `isAllowlisted` boolean and an `allowlistedAt` timestamp indicating whether a specific marketplace listing has been approved for use by the organization — a lightweight alternative to `ListAllowlistedMarketplaceListings` when you only need to check a single listing.
 *
 * **Permission required:** `marketplace:allowlist`
 *
 * **Response fields:**
 * - `isAllowlisted` — `true` if the listing is on the allowlist, `false` otherwise
 * - `allowlistedAt` — ISO 8601 timestamp of when the listing was approved; absent when `isAllowlisted` is `false`
 *
 * **Always returns `200 OK`** — a listing that is not allowlisted returns `\{ isAllowlisted: false \}` rather than a `404`.
 *
 * **Allowlist lifecycle:**
 * - Add a listing: `AllowlistMarketplaceListing` (requires a valid payment method on file)
 * - Remove a listing: `UnallowlistMarketplaceListing` — call this endpoint first to confirm the listing is present before attempting removal, since `UnallowlistMarketplaceListing` returns `404` if the entry does not exist
 * - View all approved listings with full billing details: `ListAllowlistedMarketplaceListings`
 * - A listing must be allowlisted before `SubmitJob` will accept it as a target workflow
 *
 * **Errors:** `401 Unauthorized` if unauthenticated; `403 Forbidden` if missing `marketplace:allowlist` permission.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, IsMarketplaceListingAllowlistedCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, IsMarketplaceListingAllowlistedCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // IsMarketplaceListingAllowlistedInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 * };
 * const command = new IsMarketplaceListingAllowlistedCommand(input);
 * const response = await client.send(command);
 * // { // IsMarketplaceListingAllowlistedOutput
 * //   isAllowlisted: true || false, // required
 * //   allowlistedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param IsMarketplaceListingAllowlistedCommandInput - {@link IsMarketplaceListingAllowlistedCommandInput}
 * @returns {@link IsMarketplaceListingAllowlistedCommandOutput}
 * @see {@link IsMarketplaceListingAllowlistedCommandInput} for command's `input` shape.
 * @see {@link IsMarketplaceListingAllowlistedCommandOutput} for command's `response` shape.
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
export class IsMarketplaceListingAllowlistedCommand extends $Command.classBuilder<IsMarketplaceListingAllowlistedCommandInput, IsMarketplaceListingAllowlistedCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "IsMarketplaceListingAllowlisted", {

  })
  .n("JustWorkflowItClient", "IsMarketplaceListingAllowlistedCommand")
  .f(void 0, void 0)
  .ser(se_IsMarketplaceListingAllowlistedCommand)
  .de(de_IsMarketplaceListingAllowlistedCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: IsMarketplaceListingAllowlistedInput;
      output: IsMarketplaceListingAllowlistedOutput;
  };
  sdk: {
      input: IsMarketplaceListingAllowlistedCommandInput;
      output: IsMarketplaceListingAllowlistedCommandOutput;
  };
};
}

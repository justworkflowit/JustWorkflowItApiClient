// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GrantMarketplaceAccessInput,
  GrantMarketplaceAccessOutput,
} from "../models/models_0";
import {
  de_GrantMarketplaceAccessCommand,
  se_GrantMarketplaceAccessCommand,
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
 * The input for {@link GrantMarketplaceAccessCommand}.
 */
export interface GrantMarketplaceAccessCommandInput extends GrantMarketplaceAccessInput {}
/**
 * @public
 *
 * The output of {@link GrantMarketplaceAccessCommand}.
 */
export interface GrantMarketplaceAccessCommandOutput extends GrantMarketplaceAccessOutput, __MetadataBearer {}

/**
 * Grants a specified organization access to a `PRIVATE` marketplace listing, allowing them to discover the listing and submit jobs against it. **Permission required:** `marketplace:grant` **Key behaviors:** - Creates an access grant linking the `listingId` to the `grantedOrganizationId` — once granted, the target organization will see the listing in `ListMarketplaceListings` and `GetMarketplaceListing`, and can submit jobs via `SubmitJob` - The grant is recorded with the `grantedById` user for audit purposes - Returns the `grantId` identifying the created grant record - If the organization already has access, the behavior depends on the implementation (check for existing grants first) **Related endpoints:** - `RevokeMarketplaceAccess` — the counterpart that removes an organization's access to this listing - `UpdateMarketplaceListingMetadata` — change visibility from `PRIVATE` to `PUBLIC` as an alternative to managing individual grants - `GetPublisherListingConsumerBreakdown` — view which organizations are consuming this listing - `ListMarketplaceListings` — the granted organization will see this listing after access is granted **Errors:** `403 Forbidden` if missing `marketplace:grant` permission; `404 Not Found` if the listing does not exist or belongs to a different organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GrantMarketplaceAccessCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GrantMarketplaceAccessCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GrantMarketplaceAccessInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   grantedOrganizationId: "STRING_VALUE", // required
 * };
 * const command = new GrantMarketplaceAccessCommand(input);
 * const response = await client.send(command);
 * // { // GrantMarketplaceAccessOutput
 * //   grantId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GrantMarketplaceAccessCommandInput - {@link GrantMarketplaceAccessCommandInput}
 * @returns {@link GrantMarketplaceAccessCommandOutput}
 * @see {@link GrantMarketplaceAccessCommandInput} for command's `input` shape.
 * @see {@link GrantMarketplaceAccessCommandOutput} for command's `response` shape.
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
export class GrantMarketplaceAccessCommand extends $Command.classBuilder<GrantMarketplaceAccessCommandInput, GrantMarketplaceAccessCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GrantMarketplaceAccess", {

  })
  .n("JustWorkflowItClient", "GrantMarketplaceAccessCommand")
  .f(void 0, void 0)
  .ser(se_GrantMarketplaceAccessCommand)
  .de(de_GrantMarketplaceAccessCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GrantMarketplaceAccessInput;
      output: GrantMarketplaceAccessOutput;
  };
  sdk: {
      input: GrantMarketplaceAccessCommandInput;
      output: GrantMarketplaceAccessCommandOutput;
  };
};
}

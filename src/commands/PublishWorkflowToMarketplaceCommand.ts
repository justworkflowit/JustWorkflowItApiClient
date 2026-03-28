// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  PublishWorkflowToMarketplaceInput,
  PublishWorkflowToMarketplaceOutput,
} from "../models/models_0";
import {
  de_PublishWorkflowToMarketplaceCommand,
  se_PublishWorkflowToMarketplaceCommand,
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
 * The input for {@link PublishWorkflowToMarketplaceCommand}.
 */
export interface PublishWorkflowToMarketplaceCommandInput extends PublishWorkflowToMarketplaceInput {}
/**
 * @public
 *
 * The output of {@link PublishWorkflowToMarketplaceCommand}.
 */
export interface PublishWorkflowToMarketplaceCommandOutput extends PublishWorkflowToMarketplaceOutput, __MetadataBearer {}

/**
 * Creates a new **published** marketplace listing from a workflow version, automatically generating listing version 1 — the listing is immediately visible to other organizations upon creation.
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Key behaviors:**
 * - The listing status is set to `PUBLISHED` immediately (there is no draft step)
 * - A `key` (URL-safe identifier, unique per organization) is auto-generated from `title` if omitted — the key is **immutable after creation**
 * - Version 1 is created atomically; consumers see this version when they browse via `GetMarketplaceListing` or `ListMarketplaceListings`
 * - Visibility defaults to `PUBLIC`; supply `PRIVATE` and use `GrantMarketplaceAccess` to control which organizations can discover and use the listing
 * - Rate limit defaults to 10 requests per hour per consumer organization
 *
 * **Publisher workflow after creation:**
 * 1. Add more workflow versions: `CreateMarketplaceListingVersion`
 * 2. Update description or visibility: `UpdateMarketplaceListingMetadata`
 * 3. Configure pricing: `UpdateMarketplaceListingBilling`
 * 4. Monitor usage: `GetPublisherListingUsageTimeSeries`, `GetPublisherListingConsumerBreakdown`
 * 5. Archive when retired: `UnpublishWorkflowFromMarketplace`
 *
 * **Errors:** `404 Not Found` if `workflowVersionId` does not exist or belongs to a different organization; `422 Validation` if the `key` is already taken within the organization or contains invalid characters.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, PublishWorkflowToMarketplaceCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, PublishWorkflowToMarketplaceCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // PublishWorkflowToMarketplaceInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowVersionId: "STRING_VALUE", // required
 *   key: "STRING_VALUE",
 *   title: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   visibility: "PUBLIC" || "PRIVATE",
 *   rateLimitMaxRequests: Number("int"),
 *   rateLimitWindowValue: Number("int"),
 *   rateLimitWindowUnit: "MINUTES" || "HOURS",
 * };
 * const command = new PublishWorkflowToMarketplaceCommand(input);
 * const response = await client.send(command);
 * // { // PublishWorkflowToMarketplaceOutput
 * //   listingId: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PublishWorkflowToMarketplaceCommandInput - {@link PublishWorkflowToMarketplaceCommandInput}
 * @returns {@link PublishWorkflowToMarketplaceCommandOutput}
 * @see {@link PublishWorkflowToMarketplaceCommandInput} for command's `input` shape.
 * @see {@link PublishWorkflowToMarketplaceCommandOutput} for command's `response` shape.
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
export class PublishWorkflowToMarketplaceCommand extends $Command.classBuilder<PublishWorkflowToMarketplaceCommandInput, PublishWorkflowToMarketplaceCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "PublishWorkflowToMarketplace", {

  })
  .n("JustWorkflowItClient", "PublishWorkflowToMarketplaceCommand")
  .f(void 0, void 0)
  .ser(se_PublishWorkflowToMarketplaceCommand)
  .de(de_PublishWorkflowToMarketplaceCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: PublishWorkflowToMarketplaceInput;
      output: PublishWorkflowToMarketplaceOutput;
  };
  sdk: {
      input: PublishWorkflowToMarketplaceCommandInput;
      output: PublishWorkflowToMarketplaceCommandOutput;
  };
};
}

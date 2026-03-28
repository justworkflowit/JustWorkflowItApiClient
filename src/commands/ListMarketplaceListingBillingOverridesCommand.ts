// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListMarketplaceListingBillingOverridesInput,
  ListMarketplaceListingBillingOverridesOutput,
} from "../models/models_0";
import {
  de_ListMarketplaceListingBillingOverridesCommand,
  se_ListMarketplaceListingBillingOverridesCommand,
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
 * The input for {@link ListMarketplaceListingBillingOverridesCommand}.
 */
export interface ListMarketplaceListingBillingOverridesCommandInput extends ListMarketplaceListingBillingOverridesInput {}
/**
 * @public
 *
 * The output of {@link ListMarketplaceListingBillingOverridesCommand}.
 */
export interface ListMarketplaceListingBillingOverridesCommandOutput extends ListMarketplaceListingBillingOverridesOutput, __MetadataBearer {}

/**
 * Lists all per-organization billing overrides configured for a marketplace listing, ordered alphabetically by `organizationKey` — giving publishers a complete view of which consumer organizations receive custom pricing instead of the listing defaults.
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Override behavior:** Each override can selectively replace `billingModel`, `costPerUnit`, `costPerInvocation`, and/or `costPerMonth` for a specific consumer organization. Fields not set on the override fall back to the listing-level defaults configured via `UpdateMarketplaceListingBilling`. To see what effective pricing a consumer is actually being billed at, use `GetPublisherListingConsumerBreakdown`.
 *
 * **Response:** Returns the full `overrides` array in a single response — no pagination. Each entry includes the override `id`, `organizationKey`, the overridden cost fields (nullable — `null` means the listing default applies for that field), and `createdAt`/`updatedAt` timestamps.
 *
 * **Override lifecycle:**
 * - Create or replace an override: `UpsertMarketplaceListingBillingOverride` (PUT `/billing/overrides/\{organizationKey\}`)
 * - Remove an override (restores consumer to listing defaults): `DeleteMarketplaceListingBillingOverride`
 * - Update listing-level defaults that overrides supersede: `UpdateMarketplaceListingBilling`
 *
 * **Errors:** `403 Forbidden` if missing `marketplace:publish` permission; `404 Not Found` if the listing does not exist or belongs to a different organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListMarketplaceListingBillingOverridesCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListMarketplaceListingBillingOverridesCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListMarketplaceListingBillingOverridesInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 * };
 * const command = new ListMarketplaceListingBillingOverridesCommand(input);
 * const response = await client.send(command);
 * // { // ListMarketplaceListingBillingOverridesOutput
 * //   overrides: [ // MarketplaceBillingOverrideList // required
 * //     { // MarketplaceBillingOverride
 * //       id: "STRING_VALUE", // required
 * //       organizationKey: "STRING_VALUE", // required
 * //       billingModel: "FREE" || "PER_TRANSACTION_UNIT" || "PER_INVOCATION" || "PER_MONTH",
 * //       costPerUnit: Number("float"),
 * //       costPerInvocation: Number("float"),
 * //       costPerMonth: Number("float"),
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMarketplaceListingBillingOverridesCommandInput - {@link ListMarketplaceListingBillingOverridesCommandInput}
 * @returns {@link ListMarketplaceListingBillingOverridesCommandOutput}
 * @see {@link ListMarketplaceListingBillingOverridesCommandInput} for command's `input` shape.
 * @see {@link ListMarketplaceListingBillingOverridesCommandOutput} for command's `response` shape.
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
export class ListMarketplaceListingBillingOverridesCommand extends $Command.classBuilder<ListMarketplaceListingBillingOverridesCommandInput, ListMarketplaceListingBillingOverridesCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListMarketplaceListingBillingOverrides", {

  })
  .n("JustWorkflowItClient", "ListMarketplaceListingBillingOverridesCommand")
  .f(void 0, void 0)
  .ser(se_ListMarketplaceListingBillingOverridesCommand)
  .de(de_ListMarketplaceListingBillingOverridesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListMarketplaceListingBillingOverridesInput;
      output: ListMarketplaceListingBillingOverridesOutput;
  };
  sdk: {
      input: ListMarketplaceListingBillingOverridesCommandInput;
      output: ListMarketplaceListingBillingOverridesCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { DeleteMarketplaceListingBillingOverrideInput } from "../models/models_0";
import {
  de_DeleteMarketplaceListingBillingOverrideCommand,
  se_DeleteMarketplaceListingBillingOverrideCommand,
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
 * The input for {@link DeleteMarketplaceListingBillingOverrideCommand}.
 */
export interface DeleteMarketplaceListingBillingOverrideCommandInput extends DeleteMarketplaceListingBillingOverrideInput {}
/**
 * @public
 *
 * The output of {@link DeleteMarketplaceListingBillingOverrideCommand}.
 */
export interface DeleteMarketplaceListingBillingOverrideCommandOutput extends __MetadataBearer {}

/**
 * Removes an organization-specific billing override for a marketplace listing, immediately reverting that consumer organization to the listing-level pricing defaults configured via `UpdateMarketplaceListingBilling`.
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Key behaviors:**
 * - The `organizationKey` path parameter identifies the consumer organization whose override to remove — obtain it from `ListMarketplaceListingBillingOverrides` or `GetPublisherListingConsumerBreakdown`
 * - After deletion, the affected consumer is billed at the listing-level `billingModel` and cost fields; any fields that were only set on the override revert to the listing defaults immediately
 * - **Not truly idempotent** despite the `@idempotent` trait: returns `404 Not Found` if no override exists for the given `organizationKey` — use `ListMarketplaceListingBillingOverrides` to confirm the override is present before calling this endpoint
 * - Returns `204 No Content` on success
 *
 * **Billing override lifecycle:**
 * - Create or replace: `UpsertMarketplaceListingBillingOverride` (PUT `…/billing/overrides/\{organizationKey\}`)
 * - List all overrides: `ListMarketplaceListingBillingOverrides`
 * - Update listing-level defaults the overrides supersede: `UpdateMarketplaceListingBilling`
 * - Verify effective pricing per consumer after deletion: `GetPublisherListingConsumerBreakdown`
 *
 * **Errors:** `403 Forbidden` if missing `marketplace:publish` permission; `404 Not Found` if the listing does not belong to this organization or if no billing override exists for the specified `organizationKey`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, DeleteMarketplaceListingBillingOverrideCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, DeleteMarketplaceListingBillingOverrideCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // DeleteMarketplaceListingBillingOverrideInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   organizationKey: "STRING_VALUE", // required
 * };
 * const command = new DeleteMarketplaceListingBillingOverrideCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMarketplaceListingBillingOverrideCommandInput - {@link DeleteMarketplaceListingBillingOverrideCommandInput}
 * @returns {@link DeleteMarketplaceListingBillingOverrideCommandOutput}
 * @see {@link DeleteMarketplaceListingBillingOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteMarketplaceListingBillingOverrideCommandOutput} for command's `response` shape.
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
export class DeleteMarketplaceListingBillingOverrideCommand extends $Command.classBuilder<DeleteMarketplaceListingBillingOverrideCommandInput, DeleteMarketplaceListingBillingOverrideCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "DeleteMarketplaceListingBillingOverride", {

  })
  .n("JustWorkflowItClient", "DeleteMarketplaceListingBillingOverrideCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMarketplaceListingBillingOverrideCommand)
  .de(de_DeleteMarketplaceListingBillingOverrideCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: DeleteMarketplaceListingBillingOverrideInput;
      output: {};
  };
  sdk: {
      input: DeleteMarketplaceListingBillingOverrideCommandInput;
      output: DeleteMarketplaceListingBillingOverrideCommandOutput;
  };
};
}

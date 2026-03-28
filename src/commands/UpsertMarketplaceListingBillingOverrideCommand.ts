// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  UpsertMarketplaceListingBillingOverrideInput,
  UpsertMarketplaceListingBillingOverrideOutput,
} from "../models/models_0";
import {
  de_UpsertMarketplaceListingBillingOverrideCommand,
  se_UpsertMarketplaceListingBillingOverrideCommand,
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
 * The input for {@link UpsertMarketplaceListingBillingOverrideCommand}.
 */
export interface UpsertMarketplaceListingBillingOverrideCommandInput extends UpsertMarketplaceListingBillingOverrideInput {}
/**
 * @public
 *
 * The output of {@link UpsertMarketplaceListingBillingOverrideCommand}.
 */
export interface UpsertMarketplaceListingBillingOverrideCommandOutput extends UpsertMarketplaceListingBillingOverrideOutput, __MetadataBearer {}

/**
 * Sets a **custom billing override** for a specific consumer organization on a marketplace listing, superseding the listing-level pricing configured via `UpdateMarketplaceListingBilling` — uses PUT semantics so calling it again fully replaces any prior override.
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Path parameter:** `organizationKey` is the URL-safe key of the **consumer** organization to override (not the publisher). Obtain it from `ListMarketplaceListingBillingOverrides` or `GetPublisherListingConsumerBreakdown`. The publisher organization cannot create an override for itself — doing so returns `422 Validation`.
 *
 * **Request body (all fields optional):**
 * - `billingModel` — override the billing model for this consumer (`FREE`, `PER_TRANSACTION_UNIT`, `PER_INVOCATION`, `PER_MONTH`); omit to inherit the listing default
 * - `costPerUnit` / `costPerInvocation` / `costPerMonth` — override the corresponding cost field; omit (or pass `null`) to fall back to the listing-level value for that field
 *
 * **Key behaviors:**
 * - **Upsert semantics:** creates the override if it does not exist, or fully replaces it if it does — the entire override record is replaced on each call
 * - The target consumer organization must exist; an unknown `organizationKey` returns `404 Not Found`
 * - Changes take effect immediately — the next billable usage event for the consumer is calculated using the new override
 *
 * **Override lifecycle:**
 * - View all existing overrides: `ListMarketplaceListingBillingOverrides`
 * - Remove an override (restore consumer to listing defaults): `DeleteMarketplaceListingBillingOverride`
 * - Update listing-level defaults that overrides supersede: `UpdateMarketplaceListingBilling`
 * - Verify effective pricing per consumer: `GetPublisherListingConsumerBreakdown`
 *
 * **Errors:** `403 Forbidden` if missing `marketplace:publish` permission; `404 Not Found` if the listing or target organization does not exist; `422 Validation` if attempting a self-override or if the listing belongs to a different organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UpsertMarketplaceListingBillingOverrideCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UpsertMarketplaceListingBillingOverrideCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UpsertMarketplaceListingBillingOverrideInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   organizationKey: "STRING_VALUE", // required
 *   billingModel: "FREE" || "PER_TRANSACTION_UNIT" || "PER_INVOCATION" || "PER_MONTH",
 *   costPerUnit: Number("float"),
 *   costPerInvocation: Number("float"),
 *   costPerMonth: Number("float"),
 * };
 * const command = new UpsertMarketplaceListingBillingOverrideCommand(input);
 * const response = await client.send(command);
 * // { // UpsertMarketplaceListingBillingOverrideOutput
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpsertMarketplaceListingBillingOverrideCommandInput - {@link UpsertMarketplaceListingBillingOverrideCommandInput}
 * @returns {@link UpsertMarketplaceListingBillingOverrideCommandOutput}
 * @see {@link UpsertMarketplaceListingBillingOverrideCommandInput} for command's `input` shape.
 * @see {@link UpsertMarketplaceListingBillingOverrideCommandOutput} for command's `response` shape.
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
export class UpsertMarketplaceListingBillingOverrideCommand extends $Command.classBuilder<UpsertMarketplaceListingBillingOverrideCommandInput, UpsertMarketplaceListingBillingOverrideCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UpsertMarketplaceListingBillingOverride", {

  })
  .n("JustWorkflowItClient", "UpsertMarketplaceListingBillingOverrideCommand")
  .f(void 0, void 0)
  .ser(se_UpsertMarketplaceListingBillingOverrideCommand)
  .de(de_UpsertMarketplaceListingBillingOverrideCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UpsertMarketplaceListingBillingOverrideInput;
      output: UpsertMarketplaceListingBillingOverrideOutput;
  };
  sdk: {
      input: UpsertMarketplaceListingBillingOverrideCommandInput;
      output: UpsertMarketplaceListingBillingOverrideCommandOutput;
  };
};
}

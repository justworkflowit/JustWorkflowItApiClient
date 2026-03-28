// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  UpdateMarketplaceListingBillingInput,
  UpdateMarketplaceListingBillingOutput,
} from "../models/models_0";
import {
  de_UpdateMarketplaceListingBillingCommand,
  se_UpdateMarketplaceListingBillingCommand,
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
 * The input for {@link UpdateMarketplaceListingBillingCommand}.
 */
export interface UpdateMarketplaceListingBillingCommandInput extends UpdateMarketplaceListingBillingInput {}
/**
 * @public
 *
 * The output of {@link UpdateMarketplaceListingBillingCommand}.
 */
export interface UpdateMarketplaceListingBillingCommandOutput extends UpdateMarketplaceListingBillingOutput, __MetadataBearer {}

/**
 * Updates the pricing model and per-consumer rate limits for a marketplace listing — all fields are optional and only provided values are changed (partial update semantics).
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Updatable fields:**
 * - `billingModel` — one of `FREE`, `PER_TRANSACTION_UNIT` (max $0.005/unit), `PER_INVOCATION` (max $5.00), or `PER_MONTH` (max $100.00)
 * - `costPerUnit` / `costPerInvocation` / `costPerMonth` — the cost field matching the chosen `billingModel` **must** be provided when changing the model; omitting the required cost field returns `422 Validation`
 * - `rateLimitMaxRequests`, `rateLimitWindowValue`, `rateLimitWindowUnit` — per-consumer rate limit (e.g. 10 requests per hour); applies to all consumers unless overridden via `UpsertMarketplaceListingBillingOverride`
 *
 * **Billing changes take effect immediately** — the updated pricing is reflected in `GetMarketplaceListing`, `ListMarketplaceListings`, and consumer-facing usage estimates on the next request.
 *
 * **Related endpoints:**
 * - `UpsertMarketplaceListingBillingOverride` / `ListMarketplaceListingBillingOverrides` / `DeleteMarketplaceListingBillingOverride` — set organization-specific pricing overrides that supersede the defaults configured here
 * - `UpdateMarketplaceListingMetadata` — update `description` and `visibility` (separate from billing)
 * - `GetPublisherListingUsageTimeSeries` and `GetPublisherListingConsumerBreakdown` — monitor billable usage after changing pricing
 * - `PublishWorkflowToMarketplace` — sets the initial billing model at listing creation time
 *
 * **Response:** Returns `\{ success: true \}` with `200 OK` on success.
 *
 * **Errors:** `404 Not Found` if the listing does not exist or belongs to a different organization; `403 Forbidden` if missing `marketplace:publish` permission; `422 Validation` if a required cost field is missing for the specified billing model.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UpdateMarketplaceListingBillingCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UpdateMarketplaceListingBillingCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UpdateMarketplaceListingBillingInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   billingModel: "FREE" || "PER_TRANSACTION_UNIT" || "PER_INVOCATION" || "PER_MONTH",
 *   costPerUnit: Number("float"),
 *   costPerInvocation: Number("float"),
 *   costPerMonth: Number("float"),
 *   rateLimitMaxRequests: Number("int"),
 *   rateLimitWindowValue: Number("int"),
 *   rateLimitWindowUnit: "MINUTES" || "HOURS",
 * };
 * const command = new UpdateMarketplaceListingBillingCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMarketplaceListingBillingOutput
 * //   success: true || false, // required
 * // };
 *
 * ```
 *
 * @param UpdateMarketplaceListingBillingCommandInput - {@link UpdateMarketplaceListingBillingCommandInput}
 * @returns {@link UpdateMarketplaceListingBillingCommandOutput}
 * @see {@link UpdateMarketplaceListingBillingCommandInput} for command's `input` shape.
 * @see {@link UpdateMarketplaceListingBillingCommandOutput} for command's `response` shape.
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
export class UpdateMarketplaceListingBillingCommand extends $Command.classBuilder<UpdateMarketplaceListingBillingCommandInput, UpdateMarketplaceListingBillingCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UpdateMarketplaceListingBilling", {

  })
  .n("JustWorkflowItClient", "UpdateMarketplaceListingBillingCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMarketplaceListingBillingCommand)
  .de(de_UpdateMarketplaceListingBillingCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UpdateMarketplaceListingBillingInput;
      output: UpdateMarketplaceListingBillingOutput;
  };
  sdk: {
      input: UpdateMarketplaceListingBillingCommandInput;
      output: UpdateMarketplaceListingBillingCommandOutput;
  };
};
}

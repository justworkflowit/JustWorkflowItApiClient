// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  HandleStripeWebhookInput,
  HandleStripeWebhookOutput,
} from "../models/models_0";
import {
  de_HandleStripeWebhookCommand,
  se_HandleStripeWebhookCommand,
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
 * The input for {@link HandleStripeWebhookCommand}.
 */
export interface HandleStripeWebhookCommandInput extends HandleStripeWebhookInput {}
/**
 * @public
 *
 * The output of {@link HandleStripeWebhookCommand}.
 */
export interface HandleStripeWebhookCommandOutput extends HandleStripeWebhookOutput, __MetadataBearer {}

/**
 * Receives Stripe webhook events and processes billing state changes — **not authenticated via JWT**; requests are verified using the `Stripe-Signature` header and the configured webhook secret.
 *
 * **Authentication:** No JWT required. Every request must include a valid `Stripe-Signature` header; requests missing the header or raw body return `\{ received: false \}` (still HTTP 200, per Stripe convention). This endpoint must be registered in the Stripe dashboard.
 *
 * **Processed event types:**
 * - `payment_method.attached` / `payment_method.detached` / `payment_method.automatically_updated` — refreshes the organization's internal `hasValidPaymentCard` cache, reflected by `ListBillingPaymentMethods`
 * - `customer.deleted` — clears the organization's Stripe customer reference
 * - `account.updated` — updates Connect account `onboarded` and `payoutsEnabled` flags, reflected by `GetConnectAccountStatus`
 * - `invoice.created` — injects marketplace usage line items into a draft subscription invoice
 * - `invoice.paid` / `invoice.payment_failed` / `invoice.voided` — transitions invoice records to their final state
 *
 * All other event types are silently ignored with `\{ received: true \}`. Always returns HTTP 200 regardless of event type — this is required by Stripe to prevent retries.
 *
 * **Note:** `GetConnectAccountStatus` reads state populated by this webhook. There may be a short delay between a user completing Stripe Connect onboarding and `GetConnectAccountStatus` reflecting `payoutsEnabled: true`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, HandleStripeWebhookCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, HandleStripeWebhookCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = {};
 * const command = new HandleStripeWebhookCommand(input);
 * const response = await client.send(command);
 * // { // HandleStripeWebhookOutput
 * //   received: true || false, // required
 * // };
 *
 * ```
 *
 * @param HandleStripeWebhookCommandInput - {@link HandleStripeWebhookCommandInput}
 * @returns {@link HandleStripeWebhookCommandOutput}
 * @see {@link HandleStripeWebhookCommandInput} for command's `input` shape.
 * @see {@link HandleStripeWebhookCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
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
export class HandleStripeWebhookCommand extends $Command.classBuilder<HandleStripeWebhookCommandInput, HandleStripeWebhookCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "HandleStripeWebhook", {

  })
  .n("JustWorkflowItClient", "HandleStripeWebhookCommand")
  .f(void 0, void 0)
  .ser(se_HandleStripeWebhookCommand)
  .de(de_HandleStripeWebhookCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: {};
      output: HandleStripeWebhookOutput;
  };
  sdk: {
      input: HandleStripeWebhookCommandInput;
      output: HandleStripeWebhookCommandOutput;
  };
};
}

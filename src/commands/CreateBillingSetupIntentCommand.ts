// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateBillingSetupIntentInput,
  CreateBillingSetupIntentOutput,
} from "../models/models_0";
import {
  de_CreateBillingSetupIntentCommand,
  se_CreateBillingSetupIntentCommand,
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
 * The input for {@link CreateBillingSetupIntentCommand}.
 */
export interface CreateBillingSetupIntentCommandInput extends CreateBillingSetupIntentInput {}
/**
 * @public
 *
 * The output of {@link CreateBillingSetupIntentCommand}.
 */
export interface CreateBillingSetupIntentCommandOutput extends CreateBillingSetupIntentOutput, __MetadataBearer {}

/**
 * Creates a Stripe `SetupIntent` scoped to the organization's Stripe customer, returning a `clientSecret` for use with Stripe.js to securely collect and save a card payment method.
 *
 * **Required permission:** `billing:manage`
 *
 * **Important behaviors:**
 * - If the organization does not yet have a Stripe customer, one is automatically created before the `SetupIntent` is issued. No prior billing setup is needed.
 * - Only **card** payment methods are supported by the returned `SetupIntent`.
 * - The `clientSecret` is single-use and short-lived — pass it directly to `stripe.confirmCardSetup()` on the frontend; do not cache or reuse it.
 * - After the frontend completes card collection with the `clientSecret`, call `ListBillingPaymentMethods` to confirm the new card appears and obtain its `paymentMethodId`.
 *
 * **Typical payment setup flow:**
 * 1. Call `CreateBillingSetupIntent` to obtain a `clientSecret`.
 * 2. Use `stripe.confirmCardSetup(clientSecret, ...)` in the browser to collect card details.
 * 3. Call `ListBillingPaymentMethods` to verify the card was saved.
 * 4. Call `DeleteBillingPaymentMethod` to remove any unwanted cards.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateBillingSetupIntentCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateBillingSetupIntentCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateBillingSetupIntentInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new CreateBillingSetupIntentCommand(input);
 * const response = await client.send(command);
 * // { // CreateBillingSetupIntentOutput
 * //   clientSecret: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateBillingSetupIntentCommandInput - {@link CreateBillingSetupIntentCommandInput}
 * @returns {@link CreateBillingSetupIntentCommandOutput}
 * @see {@link CreateBillingSetupIntentCommandInput} for command's `input` shape.
 * @see {@link CreateBillingSetupIntentCommandOutput} for command's `response` shape.
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
export class CreateBillingSetupIntentCommand extends $Command.classBuilder<CreateBillingSetupIntentCommandInput, CreateBillingSetupIntentCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateBillingSetupIntent", {

  })
  .n("JustWorkflowItClient", "CreateBillingSetupIntentCommand")
  .f(void 0, void 0)
  .ser(se_CreateBillingSetupIntentCommand)
  .de(de_CreateBillingSetupIntentCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateBillingSetupIntentInput;
      output: CreateBillingSetupIntentOutput;
  };
  sdk: {
      input: CreateBillingSetupIntentCommandInput;
      output: CreateBillingSetupIntentCommandOutput;
  };
};
}

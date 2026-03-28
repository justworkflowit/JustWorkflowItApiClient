// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  HandleStripeConnectWebhookInput,
  HandleStripeConnectWebhookOutput,
} from "../models/models_0";
import {
  de_HandleStripeConnectWebhookCommand,
  se_HandleStripeConnectWebhookCommand,
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
 * The input for {@link HandleStripeConnectWebhookCommand}.
 */
export interface HandleStripeConnectWebhookCommandInput extends HandleStripeConnectWebhookInput {}
/**
 * @public
 *
 * The output of {@link HandleStripeConnectWebhookCommand}.
 */
export interface HandleStripeConnectWebhookCommandOutput extends HandleStripeConnectWebhookOutput, __MetadataBearer {}

/**
 * Receives Stripe Connect webhook events (e.g., account.updated). Uses a separate signing secret from the regular Stripe webhook endpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, HandleStripeConnectWebhookCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, HandleStripeConnectWebhookCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = {};
 * const command = new HandleStripeConnectWebhookCommand(input);
 * const response = await client.send(command);
 * // { // HandleStripeConnectWebhookOutput
 * //   received: true || false, // required
 * // };
 *
 * ```
 *
 * @param HandleStripeConnectWebhookCommandInput - {@link HandleStripeConnectWebhookCommandInput}
 * @returns {@link HandleStripeConnectWebhookCommandOutput}
 * @see {@link HandleStripeConnectWebhookCommandInput} for command's `input` shape.
 * @see {@link HandleStripeConnectWebhookCommandOutput} for command's `response` shape.
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
export class HandleStripeConnectWebhookCommand extends $Command.classBuilder<HandleStripeConnectWebhookCommandInput, HandleStripeConnectWebhookCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "HandleStripeConnectWebhook", {

  })
  .n("JustWorkflowItClient", "HandleStripeConnectWebhookCommand")
  .f(void 0, void 0)
  .ser(se_HandleStripeConnectWebhookCommand)
  .de(de_HandleStripeConnectWebhookCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: {};
      output: HandleStripeConnectWebhookOutput;
  };
  sdk: {
      input: HandleStripeConnectWebhookCommandInput;
      output: HandleStripeConnectWebhookCommandOutput;
  };
};
}

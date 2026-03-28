// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  MarkNotificationReadInput,
  MarkNotificationReadOutput,
} from "../models/models_0";
import {
  de_MarkNotificationReadCommand,
  se_MarkNotificationReadCommand,
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
 * The input for {@link MarkNotificationReadCommand}.
 */
export interface MarkNotificationReadCommandInput extends MarkNotificationReadInput {}
/**
 * @public
 *
 * The output of {@link MarkNotificationReadCommand}.
 */
export interface MarkNotificationReadCommandOutput extends MarkNotificationReadOutput, __MetadataBearer {}

/**
 * Marks a single notification as read for the current user. Idempotent — calling again on an already-read notification is a no-op. **Permissions required:** `notification:update`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, MarkNotificationReadCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, MarkNotificationReadCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // MarkNotificationReadInput
 *   organizationId: "STRING_VALUE", // required
 *   notificationId: "STRING_VALUE", // required
 * };
 * const command = new MarkNotificationReadCommand(input);
 * const response = await client.send(command);
 * // { // MarkNotificationReadOutput
 * //   notificationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param MarkNotificationReadCommandInput - {@link MarkNotificationReadCommandInput}
 * @returns {@link MarkNotificationReadCommandOutput}
 * @see {@link MarkNotificationReadCommandInput} for command's `input` shape.
 * @see {@link MarkNotificationReadCommandOutput} for command's `response` shape.
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
export class MarkNotificationReadCommand extends $Command.classBuilder<MarkNotificationReadCommandInput, MarkNotificationReadCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "MarkNotificationRead", {

  })
  .n("JustWorkflowItClient", "MarkNotificationReadCommand")
  .f(void 0, void 0)
  .ser(se_MarkNotificationReadCommand)
  .de(de_MarkNotificationReadCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: MarkNotificationReadInput;
      output: MarkNotificationReadOutput;
  };
  sdk: {
      input: MarkNotificationReadCommandInput;
      output: MarkNotificationReadCommandOutput;
  };
};
}

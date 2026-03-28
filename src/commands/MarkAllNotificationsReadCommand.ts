// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  MarkAllNotificationsReadInput,
  MarkAllNotificationsReadOutput,
} from "../models/models_0";
import {
  de_MarkAllNotificationsReadCommand,
  se_MarkAllNotificationsReadCommand,
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
 * The input for {@link MarkAllNotificationsReadCommand}.
 */
export interface MarkAllNotificationsReadCommandInput extends MarkAllNotificationsReadInput {}
/**
 * @public
 *
 * The output of {@link MarkAllNotificationsReadCommand}.
 */
export interface MarkAllNotificationsReadCommandOutput extends MarkAllNotificationsReadOutput, __MetadataBearer {}

/**
 * Marks all notifications in the organization as read for the current user. **Permissions required:** `notification:update`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, MarkAllNotificationsReadCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, MarkAllNotificationsReadCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // MarkAllNotificationsReadInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new MarkAllNotificationsReadCommand(input);
 * const response = await client.send(command);
 * // { // MarkAllNotificationsReadOutput
 * //   markedCount: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param MarkAllNotificationsReadCommandInput - {@link MarkAllNotificationsReadCommandInput}
 * @returns {@link MarkAllNotificationsReadCommandOutput}
 * @see {@link MarkAllNotificationsReadCommandInput} for command's `input` shape.
 * @see {@link MarkAllNotificationsReadCommandOutput} for command's `response` shape.
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
export class MarkAllNotificationsReadCommand extends $Command.classBuilder<MarkAllNotificationsReadCommandInput, MarkAllNotificationsReadCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "MarkAllNotificationsRead", {

  })
  .n("JustWorkflowItClient", "MarkAllNotificationsReadCommand")
  .f(void 0, void 0)
  .ser(se_MarkAllNotificationsReadCommand)
  .de(de_MarkAllNotificationsReadCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: MarkAllNotificationsReadInput;
      output: MarkAllNotificationsReadOutput;
  };
  sdk: {
      input: MarkAllNotificationsReadCommandInput;
      output: MarkAllNotificationsReadCommandOutput;
  };
};
}

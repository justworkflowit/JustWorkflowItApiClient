// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetChatSpecResultInput,
  GetChatSpecResultOutput,
} from "../models/models_0";
import {
  de_GetChatSpecResultCommand,
  se_GetChatSpecResultCommand,
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
 * The input for {@link GetChatSpecResultCommand}.
 */
export interface GetChatSpecResultCommandInput extends GetChatSpecResultInput {}
/**
 * @public
 *
 * The output of {@link GetChatSpecResultCommand}.
 */
export interface GetChatSpecResultCommandOutput extends GetChatSpecResultOutput, __MetadataBearer {}

/**
 * Polls for the result of an AI workflow spec generation request. Returns the current status and, when complete, the generated definition.
 *
 * **Permissions required:** `workflow:version:create`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetChatSpecResultCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetChatSpecResultCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetChatSpecResultInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   requestId: "STRING_VALUE", // required
 * };
 * const command = new GetChatSpecResultCommand(input);
 * const response = await client.send(command);
 * // { // GetChatSpecResultOutput
 * //   status: "STRING_VALUE", // required
 * //   definition: "STRING_VALUE",
 * //   explanation: "STRING_VALUE",
 * //   stubs: [ // StubStepNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   error: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChatSpecResultCommandInput - {@link GetChatSpecResultCommandInput}
 * @returns {@link GetChatSpecResultCommandOutput}
 * @see {@link GetChatSpecResultCommandInput} for command's `input` shape.
 * @see {@link GetChatSpecResultCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
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
export class GetChatSpecResultCommand extends $Command.classBuilder<GetChatSpecResultCommandInput, GetChatSpecResultCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetChatSpecResult", {

  })
  .n("JustWorkflowItClient", "GetChatSpecResultCommand")
  .f(void 0, void 0)
  .ser(se_GetChatSpecResultCommand)
  .de(de_GetChatSpecResultCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetChatSpecResultInput;
      output: GetChatSpecResultOutput;
  };
  sdk: {
      input: GetChatSpecResultCommandInput;
      output: GetChatSpecResultCommandOutput;
  };
};
}

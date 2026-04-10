// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ChatWorkflowSpecInput,
  ChatWorkflowSpecOutput,
} from "../models/models_0";
import {
  de_ChatWorkflowSpecCommand,
  se_ChatWorkflowSpecCommand,
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
 * The input for {@link ChatWorkflowSpecCommand}.
 */
export interface ChatWorkflowSpecCommandInput extends ChatWorkflowSpecInput {}
/**
 * @public
 *
 * The output of {@link ChatWorkflowSpecCommand}.
 */
export interface ChatWorkflowSpecCommandOutput extends ChatWorkflowSpecOutput, __MetadataBearer {}

/**
 * Uses AI (AWS Bedrock) to generate or refine a workflow version definition based on a natural-language prompt. The endpoint gathers organization context — allowlisted marketplace listings with their input/output schemas, existing workflow versions, and available step executor types — then generates a valid workflow spec. The generated spec is validated through the full engine validation pipeline before being returned. If validation fails internally, the AI retries with error feedback. Only fully validated specs are returned.
 *
 * **Request body:**
 * - `message` — the user's natural-language request (e.g., 'Create a workflow that calls the data-enrichment listing then transforms the result')
 * - `conversationHistory` — optional array of prior messages for multi-turn context
 * - `currentDefinition` — optional current editor contents for refinement
 *
 * **Response:**
 * - `definition` — a validated JSON workflow definition string ready to use
 * - `explanation` — natural-language explanation of what was generated and any stub steps the user needs to implement
 * - `stubs` — list of step names that are noop placeholders the user should replace with real implementations
 *
 * **Permissions required:** `workflow:version:create`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ChatWorkflowSpecCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ChatWorkflowSpecCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ChatWorkflowSpecInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   message: "STRING_VALUE", // required
 *   conversationHistory: [ // ChatMessageList
 *     { // ChatMessage
 *       role: "STRING_VALUE", // required
 *       content: "STRING_VALUE", // required
 *     },
 *   ],
 *   currentDefinition: "STRING_VALUE",
 * };
 * const command = new ChatWorkflowSpecCommand(input);
 * const response = await client.send(command);
 * // { // ChatWorkflowSpecOutput
 * //   definition: "STRING_VALUE", // required
 * //   explanation: "STRING_VALUE", // required
 * //   stubs: [ // StubStepNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ChatWorkflowSpecCommandInput - {@link ChatWorkflowSpecCommandInput}
 * @returns {@link ChatWorkflowSpecCommandOutput}
 * @see {@link ChatWorkflowSpecCommandInput} for command's `input` shape.
 * @see {@link ChatWorkflowSpecCommandOutput} for command's `response` shape.
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
export class ChatWorkflowSpecCommand extends $Command.classBuilder<ChatWorkflowSpecCommandInput, ChatWorkflowSpecCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ChatWorkflowSpec", {

  })
  .n("JustWorkflowItClient", "ChatWorkflowSpecCommand")
  .f(void 0, void 0)
  .ser(se_ChatWorkflowSpecCommand)
  .de(de_ChatWorkflowSpecCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ChatWorkflowSpecInput;
      output: ChatWorkflowSpecOutput;
  };
  sdk: {
      input: ChatWorkflowSpecCommandInput;
      output: ChatWorkflowSpecCommandOutput;
  };
};
}

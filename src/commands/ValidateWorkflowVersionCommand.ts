// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ValidateWorkflowVersionInput,
  ValidateWorkflowVersionOutput,
} from "../models/models_0";
import {
  de_ValidateWorkflowVersionCommand,
  se_ValidateWorkflowVersionCommand,
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
 * The input for {@link ValidateWorkflowVersionCommand}.
 */
export interface ValidateWorkflowVersionCommandInput extends ValidateWorkflowVersionInput {}
/**
 * @public
 *
 * The output of {@link ValidateWorkflowVersionCommand}.
 */
export interface ValidateWorkflowVersionCommandOutput extends ValidateWorkflowVersionOutput, __MetadataBearer {}

/**
 * Validates a workflow version definition without persisting it. Runs the full validation pipeline — JSON parsing, marketplace listing resolution, child workflow resolution, secret binding checks, and engine dry-run — and returns structured validation results. Use this to pre-flight a definition before calling `RegisterWorkflowVersion`.
 *
 * **Permissions required:** `workflow:version:create`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ValidateWorkflowVersionCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ValidateWorkflowVersionCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ValidateWorkflowVersionInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   definition: "STRING_VALUE", // required
 * };
 * const command = new ValidateWorkflowVersionCommand(input);
 * const response = await client.send(command);
 * // { // ValidateWorkflowVersionOutput
 * //   valid: true || false, // required
 * //   errors: [ // ValidationErrorList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   definition: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ValidateWorkflowVersionCommandInput - {@link ValidateWorkflowVersionCommandInput}
 * @returns {@link ValidateWorkflowVersionCommandOutput}
 * @see {@link ValidateWorkflowVersionCommandInput} for command's `input` shape.
 * @see {@link ValidateWorkflowVersionCommandOutput} for command's `response` shape.
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
export class ValidateWorkflowVersionCommand extends $Command.classBuilder<ValidateWorkflowVersionCommandInput, ValidateWorkflowVersionCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ValidateWorkflowVersion", {

  })
  .n("JustWorkflowItClient", "ValidateWorkflowVersionCommand")
  .f(void 0, void 0)
  .ser(se_ValidateWorkflowVersionCommand)
  .de(de_ValidateWorkflowVersionCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ValidateWorkflowVersionInput;
      output: ValidateWorkflowVersionOutput;
  };
  sdk: {
      input: ValidateWorkflowVersionCommandInput;
      output: ValidateWorkflowVersionCommandOutput;
  };
};
}

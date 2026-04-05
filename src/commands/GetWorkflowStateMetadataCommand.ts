// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetWorkflowStateMetadataInput,
  GetWorkflowStateMetadataOutput,
} from "../models/models_0";
import {
  de_GetWorkflowStateMetadataCommand,
  se_GetWorkflowStateMetadataCommand,
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
 * The input for {@link GetWorkflowStateMetadataCommand}.
 */
export interface GetWorkflowStateMetadataCommandInput extends GetWorkflowStateMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStateMetadataCommand}.
 */
export interface GetWorkflowStateMetadataCommandOutput extends GetWorkflowStateMetadataOutput, __MetadataBearer {}

/**
 * Returns metadata about the workflow state file without downloading its contents — use this to check the file size before deciding whether to fetch the full state via `GetWorkflowState`.
 *
 * **Permissions required:** `job:read`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetWorkflowStateMetadataCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetWorkflowStateMetadataCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetWorkflowStateMetadataInput
 *   organizationId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowStateMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStateMetadataOutput
 * //   contentLengthBytes: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetWorkflowStateMetadataCommandInput - {@link GetWorkflowStateMetadataCommandInput}
 * @returns {@link GetWorkflowStateMetadataCommandOutput}
 * @see {@link GetWorkflowStateMetadataCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStateMetadataCommandOutput} for command's `response` shape.
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
export class GetWorkflowStateMetadataCommand extends $Command.classBuilder<GetWorkflowStateMetadataCommandInput, GetWorkflowStateMetadataCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetWorkflowStateMetadata", {

  })
  .n("JustWorkflowItClient", "GetWorkflowStateMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowStateMetadataCommand)
  .de(de_GetWorkflowStateMetadataCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetWorkflowStateMetadataInput;
      output: GetWorkflowStateMetadataOutput;
  };
  sdk: {
      input: GetWorkflowStateMetadataCommandInput;
      output: GetWorkflowStateMetadataCommandOutput;
  };
};
}

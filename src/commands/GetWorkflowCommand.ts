// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetWorkflowInput,
  GetWorkflowOutput,
} from "../models/models_0";
import {
  de_GetWorkflowCommand,
  se_GetWorkflowCommand,
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
 * The input for {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandInput extends GetWorkflowInput {}
/**
 * @public
 *
 * The output of {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandOutput extends GetWorkflowOutput, __MetadataBearer {}

/**
 * Retrieves a workflow container by ID, returning its `workflowId`, `name`, and `createdAt` timestamp — the lightweight counterpart to `ListWorkflows` when you already know the `workflowId`.
 *
 * **Response fields**
 *
 * - `workflowId` — UUID of the workflow container
 * - `name` — the unique display name within the organization
 * - `createdAt` — ISO 8601 timestamp of when the workflow was first registered
 *
 * **Related operations**
 *
 * - `ListWorkflows` — returns the same `WorkflowSummary` shape for every workflow in the organization (sorted A-Z by name, no pagination)
 * - `ListWorkflowVersions` — enumerate all immutable versions registered under this workflow
 * - `GetWorkflowVersion` — fetch a specific version including its full step `definition`
 * - `GetTaggedWorkflowVersion` — resolve a named tag (e.g. `$LIVE`) to a concrete `versionId`
 * - `SubmitJob` — execute a version of this workflow; reference the `workflowId` returned here
 *
 * **Error conditions**
 *
 * Returns `NotFoundError` if the `workflowId` does not exist within the given `organizationId`.
 *
 * **Permissions required:** `workflow:read`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetWorkflowCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetWorkflowCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetWorkflowInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowOutput
 * //   workflowId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetWorkflowCommandInput - {@link GetWorkflowCommandInput}
 * @returns {@link GetWorkflowCommandOutput}
 * @see {@link GetWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowCommandOutput} for command's `response` shape.
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
export class GetWorkflowCommand extends $Command.classBuilder<GetWorkflowCommandInput, GetWorkflowCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetWorkflow", {

  })
  .n("JustWorkflowItClient", "GetWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowCommand)
  .de(de_GetWorkflowCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetWorkflowInput;
      output: GetWorkflowOutput;
  };
  sdk: {
      input: GetWorkflowCommandInput;
      output: GetWorkflowCommandOutput;
  };
};
}

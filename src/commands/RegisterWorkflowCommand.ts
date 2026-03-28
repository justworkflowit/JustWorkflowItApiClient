// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  RegisterWorkflowInput,
  RegisterWorkflowOutput,
} from "../models/models_0";
import {
  de_RegisterWorkflowCommand,
  se_RegisterWorkflowCommand,
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
 * The input for {@link RegisterWorkflowCommand}.
 */
export interface RegisterWorkflowCommandInput extends RegisterWorkflowInput {}
/**
 * @public
 *
 * The output of {@link RegisterWorkflowCommand}.
 */
export interface RegisterWorkflowCommandOutput extends RegisterWorkflowOutput, __MetadataBearer {}

/**
 * Creates a named workflow container within an organization and returns its `workflowId`. A workflow is a logical container that holds one or more immutable versions — registering it does not define any steps or make it executable. **Typical lifecycle:** 1. `RegisterWorkflow` — create the container, receive `workflowId` 2. `RegisterWorkflowVersion` — attach a step definition, receive `versionId` 3. `SetWorkflowVersionTag` — optionally pin a version to a tag such as `$LIVE` 4. `SubmitJob` — execute a specific version as a job **Key behaviors:** - Workflow names must be **unique within the organization**. Submitting a duplicate name returns a `ValidationError` with message 'A workflow already exists with this name.' - Returns only `workflowId`. Use `GetWorkflow` to fetch full metadata, or `ListWorkflows` to enumerate all workflows in the organization. - Deleting a workflow is not supported via the public API; contact support for bulk cleanup. **Permissions required:** `workflow:create` **Errors:** `ValidationError` (duplicate name or invalid input), `NotFoundError` (organization not found), `AuthorizationError` (missing `workflow:create` permission).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, RegisterWorkflowCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, RegisterWorkflowCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // RegisterWorkflowInput
 *   organizationId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new RegisterWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // RegisterWorkflowOutput
 * //   workflowId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RegisterWorkflowCommandInput - {@link RegisterWorkflowCommandInput}
 * @returns {@link RegisterWorkflowCommandOutput}
 * @see {@link RegisterWorkflowCommandInput} for command's `input` shape.
 * @see {@link RegisterWorkflowCommandOutput} for command's `response` shape.
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
export class RegisterWorkflowCommand extends $Command.classBuilder<RegisterWorkflowCommandInput, RegisterWorkflowCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "RegisterWorkflow", {

  })
  .n("JustWorkflowItClient", "RegisterWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_RegisterWorkflowCommand)
  .de(de_RegisterWorkflowCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: RegisterWorkflowInput;
      output: RegisterWorkflowOutput;
  };
  sdk: {
      input: RegisterWorkflowCommandInput;
      output: RegisterWorkflowCommandOutput;
  };
};
}

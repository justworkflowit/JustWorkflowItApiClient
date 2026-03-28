// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListWorkflowsInput,
  ListWorkflowsOutput,
} from "../models/models_0";
import {
  de_ListWorkflowsCommand,
  se_ListWorkflowsCommand,
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
 * The input for {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandInput extends ListWorkflowsInput {}
/**
 * @public
 *
 * The output of {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandOutput extends ListWorkflowsOutput, __MetadataBearer {}

/**
 * Lists all workflow containers registered in an organization, returning each workflow's `workflowId`, `name`, and `createdAt` timestamp, sorted alphabetically by name. **Key behaviors:** - Returns all workflows without pagination — the full list is returned in a single response, ordered A-Z by name. - Each entry is a summary (name + ID + creation date only). Use `GetWorkflow` to fetch a single workflow by ID, or `ListWorkflowVersions` to inspect the versions registered under a workflow. - Workflows are containers — they hold one or more immutable versions. Use `RegisterWorkflowVersion` to add a version, and `SubmitJob` to execute one. - Version tags (e.g., `$LIVE`) can be resolved via `GetTaggedWorkflowVersion` to find which version is currently active. **Permissions required:** `workflow:read` **Errors:** Returns `NotFoundError` if the organization does not exist, `AuthorizationError` if the caller lacks `workflow:read` permission.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListWorkflowsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListWorkflowsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListWorkflowsInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowsOutput
 * //   workflows: [ // WorkflowSummaryList // required
 * //     { // WorkflowSummary
 * //       workflowId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkflowsCommandInput - {@link ListWorkflowsCommandInput}
 * @returns {@link ListWorkflowsCommandOutput}
 * @see {@link ListWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowsCommandOutput} for command's `response` shape.
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
export class ListWorkflowsCommand extends $Command.classBuilder<ListWorkflowsCommandInput, ListWorkflowsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListWorkflows", {

  })
  .n("JustWorkflowItClient", "ListWorkflowsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkflowsCommand)
  .de(de_ListWorkflowsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListWorkflowsInput;
      output: ListWorkflowsOutput;
  };
  sdk: {
      input: ListWorkflowsCommandInput;
      output: ListWorkflowsCommandOutput;
  };
};
}

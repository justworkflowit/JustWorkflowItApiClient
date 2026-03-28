// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListWorkflowVersionsInput,
  ListWorkflowVersionsOutput,
} from "../models/models_0";
import {
  de_ListWorkflowVersionsCommand,
  se_ListWorkflowVersionsCommand,
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
 * The input for {@link ListWorkflowVersionsCommand}.
 */
export interface ListWorkflowVersionsCommandInput extends ListWorkflowVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListWorkflowVersionsCommand}.
 */
export interface ListWorkflowVersionsCommandOutput extends ListWorkflowVersionsOutput, __MetadataBearer {}

/**
 * Lists all registered versions of a workflow, ordered from newest to oldest by `versionNumber`, with each version's complete `definition` and any assigned tags (e.g. `$LIVE`).
 *
 * **Response fields per version**
 *
 * - `versionId` — UUID used to reference this version in `GetWorkflowVersion`, `SetWorkflowVersionTag`, and `SubmitJob`
 * - `versionNumber` — monotonically increasing integer assigned at registration time; versions are returned in descending order (latest first)
 * - `definition` — the full workflow step definition string registered via `RegisterWorkflowVersion`
 * - `tags` — list of tag strings currently pointing to this version (e.g. `$LIVE`); an empty list means the version is untagged
 *
 * **Key behaviors**
 *
 * - Returns all versions in a single response — no pagination
 * - To retrieve a single version by ID, use `GetWorkflowVersion`; to resolve a tag (e.g. `$LIVE`) to a `versionId`, use `GetTaggedWorkflowVersion`
 * - Use `SetWorkflowVersionTag` to pin a tag to a version, then pass that tag or `versionId` to `SubmitJob` to execute it
 * - Returns `NotFoundError` if the `workflowId` does not exist within the organization
 *
 * **Permissions required:** `workflow:version:read`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListWorkflowVersionsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListWorkflowVersionsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListWorkflowVersionsInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowVersionsOutput
 * //   versions: [ // WorkflowVersionSummaryList // required
 * //     { // WorkflowVersionSummary
 * //       versionId: "STRING_VALUE", // required
 * //       versionNumber: Number("int"), // required
 * //       definition: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       tags: [ // WorkflowVersionTagList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkflowVersionsCommandInput - {@link ListWorkflowVersionsCommandInput}
 * @returns {@link ListWorkflowVersionsCommandOutput}
 * @see {@link ListWorkflowVersionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowVersionsCommandOutput} for command's `response` shape.
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
export class ListWorkflowVersionsCommand extends $Command.classBuilder<ListWorkflowVersionsCommandInput, ListWorkflowVersionsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListWorkflowVersions", {

  })
  .n("JustWorkflowItClient", "ListWorkflowVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkflowVersionsCommand)
  .de(de_ListWorkflowVersionsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListWorkflowVersionsInput;
      output: ListWorkflowVersionsOutput;
  };
  sdk: {
      input: ListWorkflowVersionsCommandInput;
      output: ListWorkflowVersionsCommandOutput;
  };
};
}

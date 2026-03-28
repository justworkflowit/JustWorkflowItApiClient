// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetWorkflowVersionInput,
  GetWorkflowVersionOutput,
} from "../models/models_0";
import {
  de_GetWorkflowVersionCommand,
  se_GetWorkflowVersionCommand,
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
 * The input for {@link GetWorkflowVersionCommand}.
 */
export interface GetWorkflowVersionCommandInput extends GetWorkflowVersionInput {}
/**
 * @public
 *
 * The output of {@link GetWorkflowVersionCommand}.
 */
export interface GetWorkflowVersionCommandOutput extends GetWorkflowVersionOutput, __MetadataBearer {}

/**
 * Retrieves the complete definition and metadata for a single, immutable workflow version identified by its `versionId`.
 *
 * **Response fields**
 *
 * - `versionId` — UUID of this version, used in `SubmitJob` and `SetWorkflowVersionTag`
 * - `versionNumber` — monotonically increasing integer assigned at registration time
 * - `definition` — the full JSON-encoded step definition registered via `RegisterWorkflowVersion`
 * - `createdAt` — ISO 8601 timestamp of when this version was registered
 * - `tags` — list of tag strings currently pointing to this version (e.g. `$LIVE`); empty list if untagged
 *
 * **Related operations**
 *
 * - `ListWorkflowVersions` — returns the same shape for every version under a workflow (ordered newest-first, no pagination); prefer this when you need to compare or select across versions
 * - `GetTaggedWorkflowVersion` — resolves a named tag (e.g. `$LIVE`) to a `versionId`; use the returned `versionId` here to fetch the full `definition`
 * - `RegisterWorkflowVersion` — creates new immutable versions; the `versionId` in its response is the same ID accepted by this operation
 * - `SetWorkflowVersionTag` — assigns or moves a tag to this version
 * - `SubmitJob` — executes a version as a job; pass the `versionId` returned here as the version selector
 *
 * **Errors:** `NotFoundError` if the `versionId` does not exist within the given `workflowId` and `organizationId`.
 *
 * **Permissions required:** `workflow:version:read`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetWorkflowVersionCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetWorkflowVersionCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetWorkflowVersionInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowVersionOutput
 * //   workflowId: "STRING_VALUE", // required
 * //   versionId: "STRING_VALUE", // required
 * //   versionNumber: Number("int"), // required
 * //   definition: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   tags: [ // WorkflowVersionTagList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetWorkflowVersionCommandInput - {@link GetWorkflowVersionCommandInput}
 * @returns {@link GetWorkflowVersionCommandOutput}
 * @see {@link GetWorkflowVersionCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowVersionCommandOutput} for command's `response` shape.
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
export class GetWorkflowVersionCommand extends $Command.classBuilder<GetWorkflowVersionCommandInput, GetWorkflowVersionCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetWorkflowVersion", {

  })
  .n("JustWorkflowItClient", "GetWorkflowVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowVersionCommand)
  .de(de_GetWorkflowVersionCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetWorkflowVersionInput;
      output: GetWorkflowVersionOutput;
  };
  sdk: {
      input: GetWorkflowVersionCommandInput;
      output: GetWorkflowVersionCommandOutput;
  };
};
}

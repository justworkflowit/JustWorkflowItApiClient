// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetTaggedWorkflowVersionInput,
  GetTaggedWorkflowVersionOutput,
} from "../models/models_0";
import {
  de_GetTaggedWorkflowVersionCommand,
  se_GetTaggedWorkflowVersionCommand,
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
 * The input for {@link GetTaggedWorkflowVersionCommand}.
 */
export interface GetTaggedWorkflowVersionCommandInput extends GetTaggedWorkflowVersionInput {}
/**
 * @public
 *
 * The output of {@link GetTaggedWorkflowVersionCommand}.
 */
export interface GetTaggedWorkflowVersionCommandOutput extends GetTaggedWorkflowVersionOutput, __MetadataBearer {}

/**
 * Resolves a named tag (e.g. `$LIVE`) to the `versionId` and `versionNumber` of the workflow version it currently points to.
 *
 * **Use case:** Tags act as mutable pointers to immutable versions. Rather than hardcoding a `versionId` in callers, pin a tag such as `$LIVE` to the current release and reference the tag — this decouples job submission from version management.
 *
 * **Tag format:** Tags must match `$LIVE` or the pattern `$[A-Z_]+` (dollar-prefixed, uppercase letters and underscores only).
 *
 * **Response:** Returns only `versionId` and `versionNumber`. Use `GetWorkflowVersion` with the returned `versionId` to fetch the full step `definition`. Pass the `versionId` to `SubmitJob` to execute that version.
 *
 * **Related operations:**
 * - `SetWorkflowVersionTag` — move a tag to a different version (requires `workflow:version:create`)
 * - `ListWorkflowVersions` — enumerate all versions with their currently assigned tags
 * - `GetWorkflowVersion` — fetch the full definition for a resolved `versionId`
 *
 * **Errors:** `NotFoundError` if the tag is not assigned to any version for the given workflow. **Permissions required:** `workflow:version:read`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetTaggedWorkflowVersionCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetTaggedWorkflowVersionCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetTaggedWorkflowVersionInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   tag: "STRING_VALUE", // required
 * };
 * const command = new GetTaggedWorkflowVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetTaggedWorkflowVersionOutput
 * //   versionId: "STRING_VALUE", // required
 * //   versionNumber: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetTaggedWorkflowVersionCommandInput - {@link GetTaggedWorkflowVersionCommandInput}
 * @returns {@link GetTaggedWorkflowVersionCommandOutput}
 * @see {@link GetTaggedWorkflowVersionCommandInput} for command's `input` shape.
 * @see {@link GetTaggedWorkflowVersionCommandOutput} for command's `response` shape.
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
export class GetTaggedWorkflowVersionCommand extends $Command.classBuilder<GetTaggedWorkflowVersionCommandInput, GetTaggedWorkflowVersionCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetTaggedWorkflowVersion", {

  })
  .n("JustWorkflowItClient", "GetTaggedWorkflowVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetTaggedWorkflowVersionCommand)
  .de(de_GetTaggedWorkflowVersionCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetTaggedWorkflowVersionInput;
      output: GetTaggedWorkflowVersionOutput;
  };
  sdk: {
      input: GetTaggedWorkflowVersionCommandInput;
      output: GetTaggedWorkflowVersionCommandOutput;
  };
};
}

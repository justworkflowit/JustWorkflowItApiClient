// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  SetWorkflowVersionTagInput,
  SetWorkflowVersionTagOutput,
} from "../models/models_0";
import {
  de_SetWorkflowVersionTagCommand,
  se_SetWorkflowVersionTagCommand,
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
 * The input for {@link SetWorkflowVersionTagCommand}.
 */
export interface SetWorkflowVersionTagCommandInput extends SetWorkflowVersionTagInput {}
/**
 * @public
 *
 * The output of {@link SetWorkflowVersionTagCommand}.
 */
export interface SetWorkflowVersionTagCommandOutput extends SetWorkflowVersionTagOutput, __MetadataBearer {}

/**
 * Sets or moves a named tag to a specific workflow version, creating the tag if it does not exist or atomically moving it if it already points to a different version.
 *
 * **Use case:** Tags are mutable pointers to immutable versions. Pin a tag such as `$LIVE` to the current release so callers can reference `$LIVE` via `GetTaggedWorkflowVersion` or `SubmitJob` without hardcoding a `versionId` — promoting a new release is a single `SetWorkflowVersionTag` call.
 *
 * **Tag format:** Must match `$LIVE` or the pattern `$[A-Z_]+` (dollar-prefixed, uppercase letters and underscores only).
 *
 * **Request body:** `versionId` — the UUID of the workflow version to assign the tag to. The version must already exist under the given `workflowId` (registered via `RegisterWorkflowVersion`).
 *
 * **Response:** Returns `\{ 'success': true \}` on success. The operation is idempotent — calling it with the same `versionId` and tag has no effect.
 *
 * **Related operations:**
 * - `GetTaggedWorkflowVersion` — resolve a tag back to its current `versionId` and `versionNumber` (requires `workflow:version:read`)
 * - `ListWorkflowVersions` — lists all versions with their currently assigned tags
 * - `RegisterWorkflowVersion` — creates the immutable version you are tagging
 * - `SubmitJob` — can reference a version by tag via the `WorkflowVersionSelector`
 *
 * **Permissions required:** `workflow:version:create`
 *
 * **Errors:** `NotFoundError` if the `workflowId` or `versionId` does not exist within the organization. `ValidationError` if the tag format is invalid.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, SetWorkflowVersionTagCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, SetWorkflowVersionTagCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // SetWorkflowVersionTagInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   tag: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE", // required
 * };
 * const command = new SetWorkflowVersionTagCommand(input);
 * const response = await client.send(command);
 * // { // SetWorkflowVersionTagOutput
 * //   success: true || false, // required
 * // };
 *
 * ```
 *
 * @param SetWorkflowVersionTagCommandInput - {@link SetWorkflowVersionTagCommandInput}
 * @returns {@link SetWorkflowVersionTagCommandOutput}
 * @see {@link SetWorkflowVersionTagCommandInput} for command's `input` shape.
 * @see {@link SetWorkflowVersionTagCommandOutput} for command's `response` shape.
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
export class SetWorkflowVersionTagCommand extends $Command.classBuilder<SetWorkflowVersionTagCommandInput, SetWorkflowVersionTagCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "SetWorkflowVersionTag", {

  })
  .n("JustWorkflowItClient", "SetWorkflowVersionTagCommand")
  .f(void 0, void 0)
  .ser(se_SetWorkflowVersionTagCommand)
  .de(de_SetWorkflowVersionTagCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: SetWorkflowVersionTagInput;
      output: SetWorkflowVersionTagOutput;
  };
  sdk: {
      input: SetWorkflowVersionTagCommandInput;
      output: SetWorkflowVersionTagCommandOutput;
  };
};
}

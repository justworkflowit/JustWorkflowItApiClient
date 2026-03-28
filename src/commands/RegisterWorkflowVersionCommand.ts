// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  RegisterWorkflowVersionInput,
  RegisterWorkflowVersionOutput,
} from "../models/models_0";
import {
  de_RegisterWorkflowVersionCommand,
  se_RegisterWorkflowVersionCommand,
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
 * The input for {@link RegisterWorkflowVersionCommand}.
 */
export interface RegisterWorkflowVersionCommandInput extends RegisterWorkflowVersionInput {}
/**
 * @public
 *
 * The output of {@link RegisterWorkflowVersionCommand}.
 */
export interface RegisterWorkflowVersionCommandOutput extends RegisterWorkflowVersionOutput, __MetadataBearer {}

/**
 * Registers a new immutable version of a workflow by validating and persisting a step `definition` (JSON string), returning the auto-assigned `versionId` and `versionNumber`.
 *
 * **Request body**
 *
 * - `definition` — a JSON-encoded workflow definition. The server validates it as parseable JSON and performs a dry-run through the workflow engine before persisting; a malformed or structurally invalid definition returns a `ValidationError` with a descriptive message.
 *
 * **Deduplication:** If the `$LIVE` tag is already set on this workflow and the submitted definition is byte-for-byte identical after minification (SHA-256 match), the existing live version is returned instead of creating a new record — the response is identical to a normal create.
 *
 * **Marketplace steps:** If the definition includes `RunMarketplaceJob` steps, every referenced listing must be allowlisted via `AllowlistMarketplaceListing` before this call succeeds. A valid payment method must also be on file (add one with `CreateBillingSetupIntent`); otherwise a `ValidationError` is returned.
 *
 * **Typical lifecycle:**
 * 1. `RegisterWorkflow` — create the named workflow container
 * 2. `RegisterWorkflowVersion` *(this operation)* — attach a versioned step definition, receive `versionId`
 * 3. `SetWorkflowVersionTag` — optionally pin the version to a tag such as `$LIVE`
 * 4. `SubmitJob` — execute the version as a job
 *
 * **Related operations:** `GetWorkflowVersion` fetches the stored definition and assigned tags for a single version. `ListWorkflowVersions` enumerates all versions newest-first. `GetTaggedWorkflowVersion` resolves a tag to a concrete `versionId`.
 *
 * **Permissions required:** `workflow:version:create`
 *
 * **Errors:** `ValidationError` (invalid JSON, engine validation failure, un-allowlisted marketplace listing, or missing payment method), `NotFoundError` (workflow not found), `AuthorizationError` (missing permission).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, RegisterWorkflowVersionCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, RegisterWorkflowVersionCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // RegisterWorkflowVersionInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   definition: "STRING_VALUE", // required
 * };
 * const command = new RegisterWorkflowVersionCommand(input);
 * const response = await client.send(command);
 * // { // RegisterWorkflowVersionOutput
 * //   workflowId: "STRING_VALUE", // required
 * //   versionId: "STRING_VALUE", // required
 * //   versionNumber: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param RegisterWorkflowVersionCommandInput - {@link RegisterWorkflowVersionCommandInput}
 * @returns {@link RegisterWorkflowVersionCommandOutput}
 * @see {@link RegisterWorkflowVersionCommandInput} for command's `input` shape.
 * @see {@link RegisterWorkflowVersionCommandOutput} for command's `response` shape.
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
export class RegisterWorkflowVersionCommand extends $Command.classBuilder<RegisterWorkflowVersionCommandInput, RegisterWorkflowVersionCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "RegisterWorkflowVersion", {

  })
  .n("JustWorkflowItClient", "RegisterWorkflowVersionCommand")
  .f(void 0, void 0)
  .ser(se_RegisterWorkflowVersionCommand)
  .de(de_RegisterWorkflowVersionCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: RegisterWorkflowVersionInput;
      output: RegisterWorkflowVersionOutput;
  };
  sdk: {
      input: RegisterWorkflowVersionCommandInput;
      output: RegisterWorkflowVersionCommandOutput;
  };
};
}

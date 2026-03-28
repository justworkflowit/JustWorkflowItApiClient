// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ResolveOrganizationSecretInput,
  ResolveOrganizationSecretOutput,
  ResolveOrganizationSecretOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ResolveOrganizationSecretCommand,
  se_ResolveOrganizationSecretCommand,
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
 * The input for {@link ResolveOrganizationSecretCommand}.
 */
export interface ResolveOrganizationSecretCommandInput extends ResolveOrganizationSecretInput {}
/**
 * @public
 *
 * The output of {@link ResolveOrganizationSecretCommand}.
 */
export interface ResolveOrganizationSecretCommandOutput extends ResolveOrganizationSecretOutput, __MetadataBearer {}

/**
 * Resolves (decrypts) a single organization secret value by key. This endpoint is only callable by execution-scoped tokens issued during workflow step execution — human users and API auth tokens cannot access it.
 *
 * **Required permission:** `secret:resolve` (automatically granted to execution-scoped tokens)
 *
 * **Request:** `key` — the secret key to resolve.
 *
 * **Response:** `key` and `value` (the decrypted plaintext). Each call creates a billable transaction and audit log entry.
 *
 * **Errors:** `NotFoundError` if the key doesn't exist or isn't in the token's allowed secret keys.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ResolveOrganizationSecretCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ResolveOrganizationSecretCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ResolveOrganizationSecretInput
 *   organizationId: "STRING_VALUE", // required
 *   key: "STRING_VALUE",
 * };
 * const command = new ResolveOrganizationSecretCommand(input);
 * const response = await client.send(command);
 * // { // ResolveOrganizationSecretOutput
 * //   key: "STRING_VALUE", // required
 * //   value: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ResolveOrganizationSecretCommandInput - {@link ResolveOrganizationSecretCommandInput}
 * @returns {@link ResolveOrganizationSecretCommandOutput}
 * @see {@link ResolveOrganizationSecretCommandInput} for command's `input` shape.
 * @see {@link ResolveOrganizationSecretCommandOutput} for command's `response` shape.
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
export class ResolveOrganizationSecretCommand extends $Command.classBuilder<ResolveOrganizationSecretCommandInput, ResolveOrganizationSecretCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ResolveOrganizationSecret", {

  })
  .n("JustWorkflowItClient", "ResolveOrganizationSecretCommand")
  .f(void 0, ResolveOrganizationSecretOutputFilterSensitiveLog)
  .ser(se_ResolveOrganizationSecretCommand)
  .de(de_ResolveOrganizationSecretCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ResolveOrganizationSecretInput;
      output: ResolveOrganizationSecretOutput;
  };
  sdk: {
      input: ResolveOrganizationSecretCommandInput;
      output: ResolveOrganizationSecretCommandOutput;
  };
};
}

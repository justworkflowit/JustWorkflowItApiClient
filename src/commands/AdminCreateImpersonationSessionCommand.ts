// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminCreateImpersonationSessionInput,
  AdminCreateImpersonationSessionOutput,
} from "../models/models_0";
import {
  de_AdminCreateImpersonationSessionCommand,
  se_AdminCreateImpersonationSessionCommand,
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
 * The input for {@link AdminCreateImpersonationSessionCommand}.
 */
export interface AdminCreateImpersonationSessionCommandInput extends AdminCreateImpersonationSessionInput {}
/**
 * @public
 *
 * The output of {@link AdminCreateImpersonationSessionCommand}.
 */
export interface AdminCreateImpersonationSessionCommandOutput extends AdminCreateImpersonationSessionOutput, __MetadataBearer {}

/**
 * Creates a short-lived impersonation token allowing the admin to act as the target user within a specific organization. The token expires in 1 hour. All actions are logged with the admin's identity for audit. Requires staff:write permission.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminCreateImpersonationSessionCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminCreateImpersonationSessionCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminCreateImpersonationSessionInput
 *   targetUserId: "STRING_VALUE", // required
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new AdminCreateImpersonationSessionCommand(input);
 * const response = await client.send(command);
 * // { // AdminCreateImpersonationSessionOutput
 * //   token: "STRING_VALUE", // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * //   targetEmail: "STRING_VALUE", // required
 * //   targetName: "STRING_VALUE", // required
 * //   organizationName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AdminCreateImpersonationSessionCommandInput - {@link AdminCreateImpersonationSessionCommandInput}
 * @returns {@link AdminCreateImpersonationSessionCommandOutput}
 * @see {@link AdminCreateImpersonationSessionCommandInput} for command's `input` shape.
 * @see {@link AdminCreateImpersonationSessionCommandOutput} for command's `response` shape.
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
export class AdminCreateImpersonationSessionCommand extends $Command.classBuilder<AdminCreateImpersonationSessionCommandInput, AdminCreateImpersonationSessionCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminCreateImpersonationSession", {

  })
  .n("JustWorkflowItClient", "AdminCreateImpersonationSessionCommand")
  .f(void 0, void 0)
  .ser(se_AdminCreateImpersonationSessionCommand)
  .de(de_AdminCreateImpersonationSessionCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminCreateImpersonationSessionInput;
      output: AdminCreateImpersonationSessionOutput;
  };
  sdk: {
      input: AdminCreateImpersonationSessionCommandInput;
      output: AdminCreateImpersonationSessionCommandOutput;
  };
};
}

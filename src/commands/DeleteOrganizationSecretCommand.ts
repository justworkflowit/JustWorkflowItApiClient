// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { DeleteOrganizationSecretInput } from "../models/models_0";
import {
  de_DeleteOrganizationSecretCommand,
  se_DeleteOrganizationSecretCommand,
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
 * The input for {@link DeleteOrganizationSecretCommand}.
 */
export interface DeleteOrganizationSecretCommandInput extends DeleteOrganizationSecretInput {}
/**
 * @public
 *
 * The output of {@link DeleteOrganizationSecretCommand}.
 */
export interface DeleteOrganizationSecretCommandOutput extends __MetadataBearer {}

/**
 * Permanently deletes an organization secret. The encrypted value is removed from the database. This action is irreversible.
 *
 * **Required permission:** `secret:delete`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, DeleteOrganizationSecretCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, DeleteOrganizationSecretCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // DeleteOrganizationSecretInput
 *   organizationId: "STRING_VALUE", // required
 *   secretId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOrganizationSecretCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOrganizationSecretCommandInput - {@link DeleteOrganizationSecretCommandInput}
 * @returns {@link DeleteOrganizationSecretCommandOutput}
 * @see {@link DeleteOrganizationSecretCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationSecretCommandOutput} for command's `response` shape.
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
export class DeleteOrganizationSecretCommand extends $Command.classBuilder<DeleteOrganizationSecretCommandInput, DeleteOrganizationSecretCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "DeleteOrganizationSecret", {

  })
  .n("JustWorkflowItClient", "DeleteOrganizationSecretCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOrganizationSecretCommand)
  .de(de_DeleteOrganizationSecretCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: DeleteOrganizationSecretInput;
      output: {};
  };
  sdk: {
      input: DeleteOrganizationSecretCommandInput;
      output: DeleteOrganizationSecretCommandOutput;
  };
};
}

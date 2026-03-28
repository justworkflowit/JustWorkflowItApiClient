// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  UpdateOrganizationSecretInput,
  UpdateOrganizationSecretInputFilterSensitiveLog,
  UpdateOrganizationSecretOutput,
} from "../models/models_0";
import {
  de_UpdateOrganizationSecretCommand,
  se_UpdateOrganizationSecretCommand,
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
 * The input for {@link UpdateOrganizationSecretCommand}.
 */
export interface UpdateOrganizationSecretCommandInput extends UpdateOrganizationSecretInput {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationSecretCommand}.
 */
export interface UpdateOrganizationSecretCommandOutput extends UpdateOrganizationSecretOutput, __MetadataBearer {}

/**
 * Updates an organization secret's value and/or description. The value is re-encrypted using a fresh data encryption key. At least one of `value` or `description` must be provided.
 *
 * **Required permission:** `secret:update`
 *
 * **Response:** returns updated metadata (never the value).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UpdateOrganizationSecretCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UpdateOrganizationSecretCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UpdateOrganizationSecretInput
 *   organizationId: "STRING_VALUE", // required
 *   secretId: "STRING_VALUE", // required
 *   value: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateOrganizationSecretCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOrganizationSecretOutput
 * //   secretId: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateOrganizationSecretCommandInput - {@link UpdateOrganizationSecretCommandInput}
 * @returns {@link UpdateOrganizationSecretCommandOutput}
 * @see {@link UpdateOrganizationSecretCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationSecretCommandOutput} for command's `response` shape.
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
export class UpdateOrganizationSecretCommand extends $Command.classBuilder<UpdateOrganizationSecretCommandInput, UpdateOrganizationSecretCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UpdateOrganizationSecret", {

  })
  .n("JustWorkflowItClient", "UpdateOrganizationSecretCommand")
  .f(UpdateOrganizationSecretInputFilterSensitiveLog, void 0)
  .ser(se_UpdateOrganizationSecretCommand)
  .de(de_UpdateOrganizationSecretCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UpdateOrganizationSecretInput;
      output: UpdateOrganizationSecretOutput;
  };
  sdk: {
      input: UpdateOrganizationSecretCommandInput;
      output: UpdateOrganizationSecretCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateOrganizationSecretInput,
  CreateOrganizationSecretInputFilterSensitiveLog,
  CreateOrganizationSecretOutput,
} from "../models/models_0";
import {
  de_CreateOrganizationSecretCommand,
  se_CreateOrganizationSecretCommand,
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
 * The input for {@link CreateOrganizationSecretCommand}.
 */
export interface CreateOrganizationSecretCommandInput extends CreateOrganizationSecretInput {}
/**
 * @public
 *
 * The output of {@link CreateOrganizationSecretCommand}.
 */
export interface CreateOrganizationSecretCommandOutput extends CreateOrganizationSecretOutput, __MetadataBearer {}

/**
 * Creates a new organization secret with a unique key and encrypted value. The value is encrypted using KMS envelope encryption and stored securely — it is never returned in any API response.
 *
 * **Required permission:** `secret:create`
 *
 * **Request fields:** `key` (unique within the organization, alphanumeric + underscores), `value` (the secret value to encrypt and store), `description` (optional human-readable description).
 *
 * **Response:** returns `secretId` and `key`. The `value` field is write-only and cannot be retrieved after creation.
 *
 * **Errors:** `ValidationError` if a secret with the same `key` already exists in the organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateOrganizationSecretCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateOrganizationSecretCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateOrganizationSecretInput
 *   organizationId: "STRING_VALUE", // required
 *   key: "STRING_VALUE", // required
 *   value: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateOrganizationSecretCommand(input);
 * const response = await client.send(command);
 * // { // CreateOrganizationSecretOutput
 * //   secretId: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateOrganizationSecretCommandInput - {@link CreateOrganizationSecretCommandInput}
 * @returns {@link CreateOrganizationSecretCommandOutput}
 * @see {@link CreateOrganizationSecretCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationSecretCommandOutput} for command's `response` shape.
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
export class CreateOrganizationSecretCommand extends $Command.classBuilder<CreateOrganizationSecretCommandInput, CreateOrganizationSecretCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateOrganizationSecret", {

  })
  .n("JustWorkflowItClient", "CreateOrganizationSecretCommand")
  .f(CreateOrganizationSecretInputFilterSensitiveLog, void 0)
  .ser(se_CreateOrganizationSecretCommand)
  .de(de_CreateOrganizationSecretCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateOrganizationSecretInput;
      output: CreateOrganizationSecretOutput;
  };
  sdk: {
      input: CreateOrganizationSecretCommandInput;
      output: CreateOrganizationSecretCommandOutput;
  };
};
}

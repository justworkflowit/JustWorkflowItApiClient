// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetOrganizationSecretInput,
  GetOrganizationSecretOutput,
} from "../models/models_0";
import {
  de_GetOrganizationSecretCommand,
  se_GetOrganizationSecretCommand,
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
 * The input for {@link GetOrganizationSecretCommand}.
 */
export interface GetOrganizationSecretCommandInput extends GetOrganizationSecretInput {}
/**
 * @public
 *
 * The output of {@link GetOrganizationSecretCommand}.
 */
export interface GetOrganizationSecretCommandOutput extends GetOrganizationSecretOutput, __MetadataBearer {}

/**
 * Retrieves metadata for a single organization secret by ID — **the secret value is never returned**.
 *
 * **Required permission:** `secret:read`
 *
 * **Response fields:** `secretId`, `key`, `description`, `createdAt`, `updatedAt`, `createdByEmail`, `updatedByEmail`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetOrganizationSecretCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetOrganizationSecretCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetOrganizationSecretInput
 *   organizationId: "STRING_VALUE", // required
 *   secretId: "STRING_VALUE", // required
 * };
 * const command = new GetOrganizationSecretCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationSecretOutput
 * //   secretId: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   createdByEmail: "STRING_VALUE",
 * //   updatedByEmail: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOrganizationSecretCommandInput - {@link GetOrganizationSecretCommandInput}
 * @returns {@link GetOrganizationSecretCommandOutput}
 * @see {@link GetOrganizationSecretCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationSecretCommandOutput} for command's `response` shape.
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
export class GetOrganizationSecretCommand extends $Command.classBuilder<GetOrganizationSecretCommandInput, GetOrganizationSecretCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetOrganizationSecret", {

  })
  .n("JustWorkflowItClient", "GetOrganizationSecretCommand")
  .f(void 0, void 0)
  .ser(se_GetOrganizationSecretCommand)
  .de(de_GetOrganizationSecretCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetOrganizationSecretInput;
      output: GetOrganizationSecretOutput;
  };
  sdk: {
      input: GetOrganizationSecretCommandInput;
      output: GetOrganizationSecretCommandOutput;
  };
};
}

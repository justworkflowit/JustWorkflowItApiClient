// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListOrganizationSecretsInput,
  ListOrganizationSecretsOutput,
} from "../models/models_0";
import {
  de_ListOrganizationSecretsCommand,
  se_ListOrganizationSecretsCommand,
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
 * The input for {@link ListOrganizationSecretsCommand}.
 */
export interface ListOrganizationSecretsCommandInput extends ListOrganizationSecretsInput {}
/**
 * @public
 *
 * The output of {@link ListOrganizationSecretsCommand}.
 */
export interface ListOrganizationSecretsCommandOutput extends ListOrganizationSecretsOutput, __MetadataBearer {}

/**
 * Lists all organization secrets, returning metadata only — **never the secret values**. Returns key, description, timestamps, and creator email for each secret.
 *
 * **Required permission:** `secret:list`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListOrganizationSecretsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListOrganizationSecretsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListOrganizationSecretsInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new ListOrganizationSecretsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationSecretsOutput
 * //   secrets: [ // OrganizationSecretSummaryList // required
 * //     { // OrganizationSecretSummary
 * //       secretId: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       createdByEmail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOrganizationSecretsCommandInput - {@link ListOrganizationSecretsCommandInput}
 * @returns {@link ListOrganizationSecretsCommandOutput}
 * @see {@link ListOrganizationSecretsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationSecretsCommandOutput} for command's `response` shape.
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
export class ListOrganizationSecretsCommand extends $Command.classBuilder<ListOrganizationSecretsCommandInput, ListOrganizationSecretsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListOrganizationSecrets", {

  })
  .n("JustWorkflowItClient", "ListOrganizationSecretsCommand")
  .f(void 0, void 0)
  .ser(se_ListOrganizationSecretsCommand)
  .de(de_ListOrganizationSecretsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListOrganizationSecretsInput;
      output: ListOrganizationSecretsOutput;
  };
  sdk: {
      input: ListOrganizationSecretsCommandInput;
      output: ListOrganizationSecretsCommandOutput;
  };
};
}

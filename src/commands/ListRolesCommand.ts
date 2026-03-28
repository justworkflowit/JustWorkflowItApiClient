// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListRolesInput,
  ListRolesOutput,
} from "../models/models_0";
import {
  de_ListRolesCommand,
  se_ListRolesCommand,
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
 * The input for {@link ListRolesCommand}.
 */
export interface ListRolesCommandInput extends ListRolesInput {}
/**
 * @public
 *
 * The output of {@link ListRolesCommand}.
 */
export interface ListRolesCommandOutput extends ListRolesOutput, __MetadataBearer {}

/**
 * Lists all custom roles defined in an organization, returning each role's ID, name, and optional description. **Response:** Returns a flat array of `RoleSummary` objects — no pagination. Each summary includes `roleId`, `name`, and `description`. To retrieve a role's full permission set, call `GetRole` with the returned `roleId`. **Related operations:** - `CreateRole` — define a new custom role with specific permissions - `GetRole` — fetch the complete permission list for a single role - `UpdateRole` — modify a role's name, description, or permissions (changes apply immediately to all assigned users) - `DeleteRole` — remove a role (assigned users lose its permissions) - `UpdateOrganizationMembership` — assign a role to a user after discovering available roles via this endpoint **Errors:** Returns `401 AuthenticationError` if unauthenticated, `403 AuthorizationError` if the caller lacks access to the organization, and `404 NotFoundError` if the organization does not exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListRolesCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListRolesCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListRolesInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new ListRolesCommand(input);
 * const response = await client.send(command);
 * // { // ListRolesOutput
 * //   roles: [ // RoleSummaryList // required
 * //     { // RoleSummary
 * //       roleId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRolesCommandInput - {@link ListRolesCommandInput}
 * @returns {@link ListRolesCommandOutput}
 * @see {@link ListRolesCommandInput} for command's `input` shape.
 * @see {@link ListRolesCommandOutput} for command's `response` shape.
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
export class ListRolesCommand extends $Command.classBuilder<ListRolesCommandInput, ListRolesCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListRoles", {

  })
  .n("JustWorkflowItClient", "ListRolesCommand")
  .f(void 0, void 0)
  .ser(se_ListRolesCommand)
  .de(de_ListRolesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListRolesInput;
      output: ListRolesOutput;
  };
  sdk: {
      input: ListRolesCommandInput;
      output: ListRolesCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateRoleInput,
  CreateRoleOutput,
} from "../models/models_0";
import {
  de_CreateRoleCommand,
  se_CreateRoleCommand,
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
 * The input for {@link CreateRoleCommand}.
 */
export interface CreateRoleCommandInput extends CreateRoleInput {}
/**
 * @public
 *
 * The output of {@link CreateRoleCommand}.
 */
export interface CreateRoleCommandOutput extends CreateRoleOutput, __MetadataBearer {}

/**
 * Creates a new custom role within an organization, returning a `roleId` that can be used to assign permissions and grant membership. **Request fields:** - `name` (required) — display name for the role - `description` (optional) — human-readable description of the role's purpose **Key behaviors:** - Roles are created **without any permissions** — call `UpdateRole` immediately after creation to assign the permission set (e.g. `job:read`, `workflow:read`). - The response returns only the `roleId`. Retrieve the full role with `GetRole` or enumerate all roles with `ListRoles`. - Once permissions are attached via `UpdateRole`, assign the role to organization members via `UpdateOrganizationMembership`. Permission changes take effect immediately for all assigned users. - To remove the role, use `DeleteRole` — affected members will lose its permissions instantly. **Related operations:** `GetRole` (read full permissions), `UpdateRole` (set permissions), `DeleteRole` (remove role), `ListRoles` (enumerate all custom roles), `UpdateOrganizationMembership` (assign role to a user), `GetMyPermissions` (verify effective permissions after assignment). Returns `401 AuthenticationError` if unauthenticated, `403 AuthorizationError` if the caller lacks access to the organization, and `404 NotFoundError` if the organization does not exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateRoleCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateRoleCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateRoleInput
 *   organizationId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateRoleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoleOutput
 * //   roleId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRoleCommandInput - {@link CreateRoleCommandInput}
 * @returns {@link CreateRoleCommandOutput}
 * @see {@link CreateRoleCommandInput} for command's `input` shape.
 * @see {@link CreateRoleCommandOutput} for command's `response` shape.
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
export class CreateRoleCommand extends $Command.classBuilder<CreateRoleCommandInput, CreateRoleCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateRole", {

  })
  .n("JustWorkflowItClient", "CreateRoleCommand")
  .f(void 0, void 0)
  .ser(se_CreateRoleCommand)
  .de(de_CreateRoleCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateRoleInput;
      output: CreateRoleOutput;
  };
  sdk: {
      input: CreateRoleCommandInput;
      output: CreateRoleCommandOutput;
  };
};
}

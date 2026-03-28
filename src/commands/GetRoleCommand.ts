// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetRoleInput,
  GetRoleOutput,
} from "../models/models_0";
import {
  de_GetRoleCommand,
  se_GetRoleCommand,
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
 * The input for {@link GetRoleCommand}.
 */
export interface GetRoleCommandInput extends GetRoleInput {}
/**
 * @public
 *
 * The output of {@link GetRoleCommand}.
 */
export interface GetRoleCommandOutput extends GetRoleOutput, __MetadataBearer {}

/**
 * Retrieves the `roleId`, `name`, and `description` for a single custom role within an organization. **Response fields:** - `roleId` — the role's unique identifier (use this with `UpdateOrganizationMembership` to assign the role to members) - `name` — display name of the role - `description` — optional human-readable description of the role's purpose **Related operations:** - `ListRoles` — returns the same fields for all custom roles in the organization; use it to discover `roleId` values before calling this endpoint - `UpdateRole` — modify the role's name, description, or permission set; changes apply immediately to all assigned users - `DeleteRole` — permanently removes the role and strips its permissions from all assigned members - `AdminGetRole` — staff-only equivalent at `/admin/organizations/\{organizationId\}/roles/\{roleId\}` that includes the full permission list - `GetMyPermissions` — verify the effective permissions a user holds after role assignment - `UpdateOrganizationMembership` — assign a role to a member using the returned `roleId` **Errors:** Returns `NotFoundError` (404) if the `roleId` does not exist within the specified organization, `AuthorizationError` (403) if the caller lacks access, and `AuthenticationError` (401) if unauthenticated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetRoleCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetRoleCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetRoleInput
 *   organizationId: "STRING_VALUE", // required
 *   roleId: "STRING_VALUE", // required
 * };
 * const command = new GetRoleCommand(input);
 * const response = await client.send(command);
 * // { // GetRoleOutput
 * //   roleId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRoleCommandInput - {@link GetRoleCommandInput}
 * @returns {@link GetRoleCommandOutput}
 * @see {@link GetRoleCommandInput} for command's `input` shape.
 * @see {@link GetRoleCommandOutput} for command's `response` shape.
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
export class GetRoleCommand extends $Command.classBuilder<GetRoleCommandInput, GetRoleCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetRole", {

  })
  .n("JustWorkflowItClient", "GetRoleCommand")
  .f(void 0, void 0)
  .ser(se_GetRoleCommand)
  .de(de_GetRoleCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetRoleInput;
      output: GetRoleOutput;
  };
  sdk: {
      input: GetRoleCommandInput;
      output: GetRoleCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminCreateRoleInput,
  AdminCreateRoleOutput,
} from "../models/models_0";
import {
  de_AdminCreateRoleCommand,
  se_AdminCreateRoleCommand,
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
 * The input for {@link AdminCreateRoleCommand}.
 */
export interface AdminCreateRoleCommandInput extends AdminCreateRoleInput {}
/**
 * @public
 *
 * The output of {@link AdminCreateRoleCommand}.
 */
export interface AdminCreateRoleCommandOutput extends AdminCreateRoleOutput, __MetadataBearer {}

/**
 * Creates a new empty role (no permissions) in the specified organization, returning the new `roleId` with a `201 Created` response. **Requires:** `staff:write` permission (internal/staff use only). **Request body:** - `name` (**required**) — display name for the role - `description` (optional) — human-readable description of the role's purpose **Behavior notes:** - The role is created with **no permissions** assigned. Use `AdminUpdateRole` immediately after to add permissions via its `permissions` array (full-replace semantics). - `name` is not enforced as unique within an organization, so avoid creating duplicate role names unintentionally. - The returned `roleId` is the UUID to use in all subsequent `AdminGetRole`, `AdminUpdateRole`, and `AdminDeleteRole` calls. - This is the staff-only counterpart to `CreateRole`, which creates roles scoped to the requesting user's own organization. **Related endpoints:** `AdminListRoles` — lists all roles and their `permissionCount`; `AdminGetRole` — retrieves the full permission list and assigned users for a role; `AdminUpdateRole` — assigns permissions or renames the role; `AdminDeleteRole` — removes the role (affected users lose its permissions). **Errors:** `404 NotFoundError` if the organization does not exist, `403 AuthorizationError` if the caller lacks `staff:write`, `401 AuthenticationError` if unauthenticated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminCreateRoleCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminCreateRoleCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminCreateRoleInput
 *   organizationId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new AdminCreateRoleCommand(input);
 * const response = await client.send(command);
 * // { // AdminCreateRoleOutput
 * //   roleId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param AdminCreateRoleCommandInput - {@link AdminCreateRoleCommandInput}
 * @returns {@link AdminCreateRoleCommandOutput}
 * @see {@link AdminCreateRoleCommandInput} for command's `input` shape.
 * @see {@link AdminCreateRoleCommandOutput} for command's `response` shape.
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
export class AdminCreateRoleCommand extends $Command.classBuilder<AdminCreateRoleCommandInput, AdminCreateRoleCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminCreateRole", {

  })
  .n("JustWorkflowItClient", "AdminCreateRoleCommand")
  .f(void 0, void 0)
  .ser(se_AdminCreateRoleCommand)
  .de(de_AdminCreateRoleCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminCreateRoleInput;
      output: AdminCreateRoleOutput;
  };
  sdk: {
      input: AdminCreateRoleCommandInput;
      output: AdminCreateRoleCommandOutput;
  };
};
}

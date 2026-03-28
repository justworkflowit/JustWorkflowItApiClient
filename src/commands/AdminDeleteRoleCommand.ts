// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminDeleteRoleInput,
  AdminDeleteRoleOutput,
} from "../models/models_0";
import {
  de_AdminDeleteRoleCommand,
  se_AdminDeleteRoleCommand,
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
 * The input for {@link AdminDeleteRoleCommand}.
 */
export interface AdminDeleteRoleCommandInput extends AdminDeleteRoleInput {}
/**
 * @public
 *
 * The output of {@link AdminDeleteRoleCommand}.
 */
export interface AdminDeleteRoleCommandOutput extends AdminDeleteRoleOutput, __MetadataBearer {}

/**
 * Permanently deletes a custom role from an organization, immediately revoking its permissions from all assigned users. **Requires:** `staff:write` permission (internal/staff use only). **Behavior:** - Executes atomically: removes all permission assignments (`RolePermission` records) and all user-role assignments (`UserRole` records) before deleting the role itself. - Permission revocation is **immediate** — users who held this role lose its associated permissions as soon as the call returns. - The role record is permanently deleted and cannot be recovered. To inspect which users will be affected before deleting, call `AdminGetRole` first (its `users` array lists all assigned members). - Returns `200` with an empty body on success. **Related endpoints:** - `AdminListRoles` — enumerate all roles for the organization to find the `roleId` to delete. - `AdminGetRole` — preview the full permission list and assigned users before deleting. - `AdminCreateRole` / `AdminUpdateRole` — create a replacement role or modify an existing one instead of deleting. - `DeleteRole` — non-admin counterpart; allows organization owners to delete roles scoped to their own organization. **Errors:** `404 NotFoundError` if the role does not exist or does not belong to the specified organization, `403 AuthorizationError` if the caller lacks `staff:write`, `401 AuthenticationError` if unauthenticated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminDeleteRoleCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminDeleteRoleCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminDeleteRoleInput
 *   organizationId: "STRING_VALUE", // required
 *   roleId: "STRING_VALUE", // required
 * };
 * const command = new AdminDeleteRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminDeleteRoleCommandInput - {@link AdminDeleteRoleCommandInput}
 * @returns {@link AdminDeleteRoleCommandOutput}
 * @see {@link AdminDeleteRoleCommandInput} for command's `input` shape.
 * @see {@link AdminDeleteRoleCommandOutput} for command's `response` shape.
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
export class AdminDeleteRoleCommand extends $Command.classBuilder<AdminDeleteRoleCommandInput, AdminDeleteRoleCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminDeleteRole", {

  })
  .n("JustWorkflowItClient", "AdminDeleteRoleCommand")
  .f(void 0, void 0)
  .ser(se_AdminDeleteRoleCommand)
  .de(de_AdminDeleteRoleCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminDeleteRoleInput;
      output: {};
  };
  sdk: {
      input: AdminDeleteRoleCommandInput;
      output: AdminDeleteRoleCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { DeleteRoleInput } from "../models/models_0";
import {
  de_DeleteRoleCommand,
  se_DeleteRoleCommand,
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
 * The input for {@link DeleteRoleCommand}.
 */
export interface DeleteRoleCommandInput extends DeleteRoleInput {}
/**
 * @public
 *
 * The output of {@link DeleteRoleCommand}.
 */
export interface DeleteRoleCommandOutput extends __MetadataBearer {}

/**
 * Permanently deletes a custom role from the organization, atomically removing all permission assignments from every member who held it — permission loss is immediate and irreversible. **What happens on deletion (single transaction):** - All `RolePermission` records are removed (the role's permission set is erased) - All `UserRole` assignments are deleted — any member assigned this role instantly loses the permissions it granted - The role record itself is permanently deleted **Impact on users:** Affected members' effective permissions drop immediately. Use `GetMyPermissions` to verify a user's permissions before and after deletion, and `ListOrganizationUsersAndInvitations` to identify who held the role. **Before deleting:** Consider using `UpdateRole` to clear the permission set first if you want to preview the impact, or reassign affected members via `UpdateOrganizationMembership` to a different role. **Related operations:** `CreateRole` — create a replacement role; `GetRole` — inspect the role's permissions before deleting; `ListRoles` — enumerate all custom roles in the organization; `UpdateOrganizationMembership` — reassign members to a different role prior to deletion. **Errors:** Returns `NotFoundError` (404) if the `roleId` does not exist within the specified organization. Returns `AuthorizationError` (403) if the caller lacks access to the organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, DeleteRoleCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, DeleteRoleCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // DeleteRoleInput
 *   organizationId: "STRING_VALUE", // required
 *   roleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRoleCommandInput - {@link DeleteRoleCommandInput}
 * @returns {@link DeleteRoleCommandOutput}
 * @see {@link DeleteRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteRoleCommandOutput} for command's `response` shape.
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
export class DeleteRoleCommand extends $Command.classBuilder<DeleteRoleCommandInput, DeleteRoleCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "DeleteRole", {

  })
  .n("JustWorkflowItClient", "DeleteRoleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRoleCommand)
  .de(de_DeleteRoleCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: DeleteRoleInput;
      output: {};
  };
  sdk: {
      input: DeleteRoleCommandInput;
      output: DeleteRoleCommandOutput;
  };
};
}

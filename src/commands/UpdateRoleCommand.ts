// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  UpdateRoleInput,
  UpdateRoleOutput,
} from "../models/models_0";
import {
  de_UpdateRoleCommand,
  se_UpdateRoleCommand,
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
 * The input for {@link UpdateRoleCommand}.
 */
export interface UpdateRoleCommandInput extends UpdateRoleInput {}
/**
 * @public
 *
 * The output of {@link UpdateRoleCommand}.
 */
export interface UpdateRoleCommandOutput extends UpdateRoleOutput, __MetadataBearer {}

/**
 * Updates a custom role's `name`, `description`, and/or `permissions` within an organization — all changes are applied atomically and take effect immediately for every user currently assigned this role. **`permissions` is a full replacement**, not an additive patch. Pass the complete desired set of permission strings; any permissions omitted from the list are removed. To clear all permissions, send an empty array. **Updateable fields:** - `name` — display name of the role (optional; omit to leave unchanged) - `description` — human-readable description (optional; omit to leave unchanged) - `permissions` — complete permission set to apply (required) **Workflow:** 1. Use `ListRoles` to discover `roleId` values, or `CreateRole` if the role does not yet exist. 2. Call `GetRole` to inspect the current state before overwriting. 3. Call `UpdateRole` with the full desired permission set. 4. Verify effective permissions for affected users via `GetMyPermissions`. **Related operations:** `GetRole` (read current state), `CreateRole` (create a role to update), `DeleteRole` (remove a role entirely), `UpdateOrganizationMembership` (assign this role to members), `AdminUpdateRole` (staff-only equivalent with additional response fields including `permissions` and `updatedAt`). **Errors:** Returns `NotFoundError` (404) if the `roleId` does not exist in the organization. Returns `AuthorizationError` (403) if the caller lacks access, and `AuthenticationError` (401) if unauthenticated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UpdateRoleCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UpdateRoleCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UpdateRoleInput
 *   organizationId: "STRING_VALUE", // required
 *   roleId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   permissions: [ // RolePermissionsList // required
 *     "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 *   ],
 * };
 * const command = new UpdateRoleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRoleOutput
 * //   roleId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRoleCommandInput - {@link UpdateRoleCommandInput}
 * @returns {@link UpdateRoleCommandOutput}
 * @see {@link UpdateRoleCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleCommandOutput} for command's `response` shape.
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
export class UpdateRoleCommand extends $Command.classBuilder<UpdateRoleCommandInput, UpdateRoleCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UpdateRole", {

  })
  .n("JustWorkflowItClient", "UpdateRoleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRoleCommand)
  .de(de_UpdateRoleCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UpdateRoleInput;
      output: UpdateRoleOutput;
  };
  sdk: {
      input: UpdateRoleCommandInput;
      output: UpdateRoleCommandOutput;
  };
};
}

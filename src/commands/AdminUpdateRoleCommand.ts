// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminUpdateRoleInput,
  AdminUpdateRoleOutput,
} from "../models/models_0";
import {
  de_AdminUpdateRoleCommand,
  se_AdminUpdateRoleCommand,
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
 * The input for {@link AdminUpdateRoleCommand}.
 */
export interface AdminUpdateRoleCommandInput extends AdminUpdateRoleInput {}
/**
 * @public
 *
 * The output of {@link AdminUpdateRoleCommand}.
 */
export interface AdminUpdateRoleCommandOutput extends AdminUpdateRoleOutput, __MetadataBearer {}

/**
 * Updates a role's `name`, `description`, and/or `permissions` within an organization. All request body fields are optional — only fields that are present in the request are modified. **Requires:** `staff:write` permission (internal/staff use only). **Key behavior — full-replace semantics for permissions:** If the `permissions` array is included in the request body, it **completely replaces** the role's existing permission set (all prior `RolePermission` records are deleted and recreated). Omitting `permissions` entirely leaves existing permissions unchanged. To add a single permission without removing others, first call `AdminGetRole` to retrieve the current `permissions` list, append the new permission, then send the full updated array here. **Effect on users:** Permission changes take effect immediately — all users currently assigned to this role gain or lose permissions as soon as the call returns. **Response:** Returns the updated role with its new `name`, `description`, `permissions` array, and `updatedAt` timestamp. **Related endpoints:** - `AdminGetRole` — retrieve the current permission list and assigned users before modifying. - `AdminListRoles` — enumerate all roles for the organization to find the target `roleId`. - `AdminCreateRole` — creates a new empty role; use this endpoint immediately after to assign permissions. - `AdminDeleteRole` — permanently removes a role and revokes its permissions from all assigned users. - `UpdateRole` — non-admin counterpart for organization owners acting within their own organization. **Errors:** `404 NotFoundError` if the role or organization does not exist, `403 AuthorizationError` if the caller lacks `staff:write`, `401 AuthenticationError` if unauthenticated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminUpdateRoleCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminUpdateRoleCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminUpdateRoleInput
 *   organizationId: "STRING_VALUE", // required
 *   roleId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   permissions: [ // PermissionNameList
 *     "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 *   ],
 * };
 * const command = new AdminUpdateRoleCommand(input);
 * const response = await client.send(command);
 * // { // AdminUpdateRoleOutput
 * //   roleId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   permissions: [ // PermissionNameList // required
 * //     "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 * //   ],
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param AdminUpdateRoleCommandInput - {@link AdminUpdateRoleCommandInput}
 * @returns {@link AdminUpdateRoleCommandOutput}
 * @see {@link AdminUpdateRoleCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateRoleCommandOutput} for command's `response` shape.
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
export class AdminUpdateRoleCommand extends $Command.classBuilder<AdminUpdateRoleCommandInput, AdminUpdateRoleCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminUpdateRole", {

  })
  .n("JustWorkflowItClient", "AdminUpdateRoleCommand")
  .f(void 0, void 0)
  .ser(se_AdminUpdateRoleCommand)
  .de(de_AdminUpdateRoleCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminUpdateRoleInput;
      output: AdminUpdateRoleOutput;
  };
  sdk: {
      input: AdminUpdateRoleCommandInput;
      output: AdminUpdateRoleCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminGetRoleInput,
  AdminGetRoleOutput,
} from "../models/models_0";
import {
  de_AdminGetRoleCommand,
  se_AdminGetRoleCommand,
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
 * The input for {@link AdminGetRoleCommand}.
 */
export interface AdminGetRoleCommandInput extends AdminGetRoleInput {}
/**
 * @public
 *
 * The output of {@link AdminGetRoleCommand}.
 */
export interface AdminGetRoleCommandOutput extends AdminGetRoleOutput, __MetadataBearer {}

/**
 * Retrieves the full details of a specific role within an organization, including its complete `permissions` array and the list of `users` currently assigned to the role. **Requires:** `staff:read` permission (internal/staff use only). **Response includes:** - `permissions` — the exhaustive list of permission names granted by this role (e.g. `jobs:read`, `workflows:write`) - `users` — each assigned member with their `userId`, `email`, and optional `name` - `createdAt` / `updatedAt` timestamps **Key distinctions from related endpoints:** - `AdminListRoles` returns only summary counts (`permissionCount`, `userCount`) — call this endpoint to drill into the actual permission strings and user identities. - `GetRole` is the non-admin counterpart; it is scoped to the requesting user's own organization and does not expose the `users` list. - Use `AdminUpdateRole` to modify permissions (full-replace semantics — the `permissions` array you send becomes the new complete set). - Use `AdminDeleteRole` to remove the role; inspect this endpoint's `users` array first to understand which members will be affected. **Errors:** `404 NotFoundError` if the role or organization does not exist, `403 AuthorizationError` if the caller lacks `staff:read`, `401 AuthenticationError` if unauthenticated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminGetRoleCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminGetRoleCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminGetRoleInput
 *   organizationId: "STRING_VALUE", // required
 *   roleId: "STRING_VALUE", // required
 * };
 * const command = new AdminGetRoleCommand(input);
 * const response = await client.send(command);
 * // { // AdminGetRoleOutput
 * //   roleId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   permissions: [ // PermissionNameList // required
 * //     "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 * //   ],
 * //   users: [ // AdminRoleUserList // required
 * //     { // AdminRoleUser
 * //       userId: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param AdminGetRoleCommandInput - {@link AdminGetRoleCommandInput}
 * @returns {@link AdminGetRoleCommandOutput}
 * @see {@link AdminGetRoleCommandInput} for command's `input` shape.
 * @see {@link AdminGetRoleCommandOutput} for command's `response` shape.
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
export class AdminGetRoleCommand extends $Command.classBuilder<AdminGetRoleCommandInput, AdminGetRoleCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminGetRole", {

  })
  .n("JustWorkflowItClient", "AdminGetRoleCommand")
  .f(void 0, void 0)
  .ser(se_AdminGetRoleCommand)
  .de(de_AdminGetRoleCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminGetRoleInput;
      output: AdminGetRoleOutput;
  };
  sdk: {
      input: AdminGetRoleCommandInput;
      output: AdminGetRoleCommandOutput;
  };
};
}

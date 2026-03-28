// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminListRolesInput,
  AdminListRolesOutput,
} from "../models/models_0";
import {
  de_AdminListRolesCommand,
  se_AdminListRolesCommand,
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
 * The input for {@link AdminListRolesCommand}.
 */
export interface AdminListRolesCommandInput extends AdminListRolesInput {}
/**
 * @public
 *
 * The output of {@link AdminListRolesCommand}.
 */
export interface AdminListRolesCommandOutput extends AdminListRolesOutput, __MetadataBearer {}

/**
 * Lists all custom roles defined for an organization, returning a summary of each role including its name, description, `permissionCount`, `userCount`, and `createdAt` timestamp — ordered alphabetically by name. **Requires:** `staff:read` permission (internal/staff use only). **Response notes:** - Each entry includes aggregate counts (`permissionCount`, `userCount`) but not the actual permission names or assigned users. Use `AdminGetRole` to retrieve the full permission list and member details for a specific role. - Returns all roles regardless of whether they have any permissions or members assigned. - The non-admin `ListRoles` endpoint returns the same role list but is scoped to the requesting user's own access; this endpoint is accessible to staff for any organization. **Related endpoints:** - `AdminGetOrganization` — includes a `roleCount` field that matches the number of entries returned here. - `AdminGetRole` — drill into a specific role for its full permission list and assigned users. - `AdminCreateRole` / `AdminUpdateRole` / `AdminDeleteRole` — manage roles (require `staff:write`). **Errors:** `404 NotFoundError` if the organization does not exist, `403 AuthorizationError` if the caller lacks `staff:read`, `401 AuthenticationError` if unauthenticated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminListRolesCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminListRolesCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminListRolesInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new AdminListRolesCommand(input);
 * const response = await client.send(command);
 * // { // AdminListRolesOutput
 * //   roles: [ // AdminRoleSummaryList // required
 * //     { // AdminRoleSummary
 * //       roleId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       permissionCount: Number("int"), // required
 * //       userCount: Number("int"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminListRolesCommandInput - {@link AdminListRolesCommandInput}
 * @returns {@link AdminListRolesCommandOutput}
 * @see {@link AdminListRolesCommandInput} for command's `input` shape.
 * @see {@link AdminListRolesCommandOutput} for command's `response` shape.
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
export class AdminListRolesCommand extends $Command.classBuilder<AdminListRolesCommandInput, AdminListRolesCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminListRoles", {

  })
  .n("JustWorkflowItClient", "AdminListRolesCommand")
  .f(void 0, void 0)
  .ser(se_AdminListRolesCommand)
  .de(de_AdminListRolesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminListRolesInput;
      output: AdminListRolesOutput;
  };
  sdk: {
      input: AdminListRolesCommandInput;
      output: AdminListRolesCommandOutput;
  };
};
}

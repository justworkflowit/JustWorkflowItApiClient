// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetMyPermissionsInput,
  GetMyPermissionsOutput,
} from "../models/models_0";
import {
  de_GetMyPermissionsCommand,
  se_GetMyPermissionsCommand,
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
 * The input for {@link GetMyPermissionsCommand}.
 */
export interface GetMyPermissionsCommandInput extends GetMyPermissionsInput {}
/**
 * @public
 *
 * The output of {@link GetMyPermissionsCommand}.
 */
export interface GetMyPermissionsCommandOutput extends GetMyPermissionsOutput, __MetadataBearer {}

/**
 * Returns the complete set of permission strings the authenticated user holds within the specified organization, as resolved by the request's authorization context. **Key behaviors:** - Permissions are pre-resolved by the auth middleware from the user's assigned role(s); this endpoint simply exposes that already-computed set — it adds no extra latency. - Returns an empty list (not an error) if the user has no permissions in the organization. - For API auth token users, permissions reflect the token's role rather than the underlying user's role — use `GetApiAuthToken` to inspect token-level permission configuration. **Common use cases:** - Drive client-side UI gating: conditionally render controls (e.g. 'Submit Job', 'Manage Members') based on the returned permission strings. - Use alongside `GetRole` or `ListRoles` to understand which role grants a particular permission. - Pair with `ListOrganizationUsersAndInvitations` to correlate a member's role with their effective permissions. **Errors:** Returns `401 AuthenticationError` if unauthenticated, `404 NotFoundError` if the organization does not exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetMyPermissionsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetMyPermissionsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetMyPermissionsInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new GetMyPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // GetMyPermissionsOutput
 * //   permissions: [ // PermissionNameList // required
 * //     "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMyPermissionsCommandInput - {@link GetMyPermissionsCommandInput}
 * @returns {@link GetMyPermissionsCommandOutput}
 * @see {@link GetMyPermissionsCommandInput} for command's `input` shape.
 * @see {@link GetMyPermissionsCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
 *
 * @throws {@link NotFoundError} (client fault)
 *  The requested resource was not found. Verify the resource ID is correct and the resource exists in the specified organization.
 *
 * @throws {@link AuthenticationError} (client fault)
 *  Authentication failed due to missing, invalid, or expired credentials. Verify the authentication token is valid and not expired.
 *
 * @throws {@link AuthorizationError} (client fault)
 *  Authorization failed due to insufficient permissions. The authenticated user or API token does not have permission to perform this operation.
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
export class GetMyPermissionsCommand extends $Command.classBuilder<GetMyPermissionsCommandInput, GetMyPermissionsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetMyPermissions", {

  })
  .n("JustWorkflowItClient", "GetMyPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_GetMyPermissionsCommand)
  .de(de_GetMyPermissionsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetMyPermissionsInput;
      output: GetMyPermissionsOutput;
  };
  sdk: {
      input: GetMyPermissionsCommandInput;
      output: GetMyPermissionsCommandOutput;
  };
};
}

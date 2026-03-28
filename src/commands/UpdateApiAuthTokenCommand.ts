// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  UpdateApiAuthTokenInput,
  UpdateApiAuthTokenOutput,
} from "../models/models_0";
import {
  de_UpdateApiAuthTokenCommand,
  se_UpdateApiAuthTokenCommand,
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
 * The input for {@link UpdateApiAuthTokenCommand}.
 */
export interface UpdateApiAuthTokenCommandInput extends UpdateApiAuthTokenInput {}
/**
 * @public
 *
 * The output of {@link UpdateApiAuthTokenCommand}.
 */
export interface UpdateApiAuthTokenCommandOutput extends UpdateApiAuthTokenOutput, __MetadataBearer {}

/**
 * Updates an existing API authentication token's permissions and/or expiration date — both fields are optional and independently mutable in a single request.
 *
 * **Required permission:** `apitoken:update`
 *
 * **Request fields (all optional, at least one should be provided):**
 * - `permissions` — replaces the token's permission set atomically; the previous permissions are fully discarded and replaced with the supplied list.
 * - `expiresAt` — ISO 8601 datetime; moves the token's expiration to a new value (can extend or shorten).
 *
 * **Behavior:**
 * - Changes are applied in a single database transaction and take effect **immediately** for all subsequent API calls authenticated with the token.
 * - Cannot update a revoked token — returns `ValidationError` if the token is already revoked. Use `RevokeApiAuthToken` to permanently invalidate a token instead.
 * - Does **not** return the raw token value; only metadata (`apiAuthTokenId`, `name`, `createdAt`, `expiresAt`, `permissions`) is returned.
 *
 * **Token lifecycle:** Use `CreateApiAuthToken` to issue a new token. Use `GetApiAuthToken` or `ListApiAuthTokens` to inspect current metadata. Use `RevokeApiAuthToken` to permanently invalidate.
 *
 * **Errors:** `ValidationError` if the token does not exist or is revoked; `AuthorizationError` if the caller lacks `apitoken:update`; `NotFoundError` if the organization does not exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UpdateApiAuthTokenCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UpdateApiAuthTokenCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UpdateApiAuthTokenInput
 *   organizationId: "STRING_VALUE", // required
 *   apiAuthTokenId: "STRING_VALUE", // required
 *   permissions: [ // PermissionNameList
 *     "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 *   ],
 *   expiresAt: new Date("TIMESTAMP"),
 * };
 * const command = new UpdateApiAuthTokenCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiAuthTokenOutput
 * //   apiAuthTokenId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * //   permissions: [ // PermissionNameList // required
 * //     "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateApiAuthTokenCommandInput - {@link UpdateApiAuthTokenCommandInput}
 * @returns {@link UpdateApiAuthTokenCommandOutput}
 * @see {@link UpdateApiAuthTokenCommandInput} for command's `input` shape.
 * @see {@link UpdateApiAuthTokenCommandOutput} for command's `response` shape.
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
export class UpdateApiAuthTokenCommand extends $Command.classBuilder<UpdateApiAuthTokenCommandInput, UpdateApiAuthTokenCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UpdateApiAuthToken", {

  })
  .n("JustWorkflowItClient", "UpdateApiAuthTokenCommand")
  .f(void 0, void 0)
  .ser(se_UpdateApiAuthTokenCommand)
  .de(de_UpdateApiAuthTokenCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UpdateApiAuthTokenInput;
      output: UpdateApiAuthTokenOutput;
  };
  sdk: {
      input: UpdateApiAuthTokenCommandInput;
      output: UpdateApiAuthTokenCommandOutput;
  };
};
}

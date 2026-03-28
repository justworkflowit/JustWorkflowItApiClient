// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateApiAuthTokenInput,
  CreateApiAuthTokenOutput,
} from "../models/models_0";
import {
  de_CreateApiAuthTokenCommand,
  se_CreateApiAuthTokenCommand,
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
 * The input for {@link CreateApiAuthTokenCommand}.
 */
export interface CreateApiAuthTokenCommandInput extends CreateApiAuthTokenInput {}
/**
 * @public
 *
 * The output of {@link CreateApiAuthTokenCommand}.
 */
export interface CreateApiAuthTokenCommandOutput extends CreateApiAuthTokenOutput, __MetadataBearer {}

/**
 * Creates a new API authentication token scoped to a specific set of permissions, returning the raw token value **exactly once** — store it immediately as it cannot be retrieved again.
 *
 * **Required permission:** `apitoken:create`
 *
 * **Request fields:** `name` (must be unique among active tokens in the organization), `expiresAt` (ISO 8601 datetime), `permissions` (list of permission names to grant).
 *
 * **Response:** returns `apiAuthTokenId`, `name`, `createdAt`, `expiresAt`, and `token`. The `token` field is the bearer credential to use in the `Authorization` header for API calls — it is **not** returned by `GetApiAuthToken` or `ListApiAuthTokens`.
 *
 * **Token lifecycle:**
 * - Use `GetApiAuthToken` or `ListApiAuthTokens` to inspect metadata (never the token value) after creation.
 * - Use `UpdateApiAuthToken` to modify permissions or extend expiration; changes take effect immediately.
 * - Use `RevokeApiAuthToken` to permanently invalidate a token.
 *
 * **Errors:** `ValidationError` if an active token with the same `name` already exists in the organization; `AuthorizationError` if the caller lacks `apitoken:create`; `NotFoundError` if the organization does not exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateApiAuthTokenCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateApiAuthTokenCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateApiAuthTokenInput
 *   organizationId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   expiresAt: new Date("TIMESTAMP"), // required
 *   permissions: [ // PermissionNameList // required
 *     "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 *   ],
 * };
 * const command = new CreateApiAuthTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateApiAuthTokenOutput
 * //   apiAuthTokenId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   token: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateApiAuthTokenCommandInput - {@link CreateApiAuthTokenCommandInput}
 * @returns {@link CreateApiAuthTokenCommandOutput}
 * @see {@link CreateApiAuthTokenCommandInput} for command's `input` shape.
 * @see {@link CreateApiAuthTokenCommandOutput} for command's `response` shape.
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
export class CreateApiAuthTokenCommand extends $Command.classBuilder<CreateApiAuthTokenCommandInput, CreateApiAuthTokenCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateApiAuthToken", {

  })
  .n("JustWorkflowItClient", "CreateApiAuthTokenCommand")
  .f(void 0, void 0)
  .ser(se_CreateApiAuthTokenCommand)
  .de(de_CreateApiAuthTokenCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateApiAuthTokenInput;
      output: CreateApiAuthTokenOutput;
  };
  sdk: {
      input: CreateApiAuthTokenCommandInput;
      output: CreateApiAuthTokenCommandOutput;
  };
};
}

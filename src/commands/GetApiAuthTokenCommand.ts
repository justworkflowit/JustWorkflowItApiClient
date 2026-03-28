// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetApiAuthTokenInput,
  GetApiAuthTokenOutput,
} from "../models/models_0";
import {
  de_GetApiAuthTokenCommand,
  se_GetApiAuthTokenCommand,
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
 * The input for {@link GetApiAuthTokenCommand}.
 */
export interface GetApiAuthTokenCommandInput extends GetApiAuthTokenInput {}
/**
 * @public
 *
 * The output of {@link GetApiAuthTokenCommand}.
 */
export interface GetApiAuthTokenCommandOutput extends GetApiAuthTokenOutput, __MetadataBearer {}

/**
 * Retrieves metadata for a single API authentication token by ID — **the raw token value is never returned** by this endpoint or any other after initial creation.
 *
 * **Required permission:** `apitoken:read`
 *
 * **Response fields:** `apiAuthTokenId`, `name`, `createdAt`, `expiresAt`, `permissions`, and `isRevoked`.
 *
 * **Token lifecycle context:**
 * - The token value is returned **only once** at creation via `CreateApiAuthToken` — store it immediately.
 * - Use this endpoint to inspect a token's current permissions, expiration, or revocation status for a known `apiAuthTokenId`.
 * - Use `ListApiAuthTokens` to enumerate all tokens in the organization when you don't have a specific ID.
 * - Use `UpdateApiAuthToken` to change permissions or extend expiration; use `RevokeApiAuthToken` to permanently invalidate the token.
 *
 * **Errors:** `NotFoundError` if `apiAuthTokenId` does not exist in the organization; `AuthorizationError` if the caller lacks `apitoken:read`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetApiAuthTokenCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetApiAuthTokenCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetApiAuthTokenInput
 *   organizationId: "STRING_VALUE", // required
 *   apiAuthTokenId: "STRING_VALUE", // required
 * };
 * const command = new GetApiAuthTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetApiAuthTokenOutput
 * //   apiAuthTokenId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   permissions: [ // PermissionNameList // required
 * //     "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetApiAuthTokenCommandInput - {@link GetApiAuthTokenCommandInput}
 * @returns {@link GetApiAuthTokenCommandOutput}
 * @see {@link GetApiAuthTokenCommandInput} for command's `input` shape.
 * @see {@link GetApiAuthTokenCommandOutput} for command's `response` shape.
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
export class GetApiAuthTokenCommand extends $Command.classBuilder<GetApiAuthTokenCommandInput, GetApiAuthTokenCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetApiAuthToken", {

  })
  .n("JustWorkflowItClient", "GetApiAuthTokenCommand")
  .f(void 0, void 0)
  .ser(se_GetApiAuthTokenCommand)
  .de(de_GetApiAuthTokenCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetApiAuthTokenInput;
      output: GetApiAuthTokenOutput;
  };
  sdk: {
      input: GetApiAuthTokenCommandInput;
      output: GetApiAuthTokenCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { RevokeApiAuthTokenInput } from "../models/models_0";
import {
  de_RevokeApiAuthTokenCommand,
  se_RevokeApiAuthTokenCommand,
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
 * The input for {@link RevokeApiAuthTokenCommand}.
 */
export interface RevokeApiAuthTokenCommandInput extends RevokeApiAuthTokenInput {}
/**
 * @public
 *
 * The output of {@link RevokeApiAuthTokenCommand}.
 */
export interface RevokeApiAuthTokenCommandOutput extends __MetadataBearer {}

/**
 * Permanently revokes an API authentication token, invalidating it immediately and preventing any further API calls authenticated with it.
 *
 * **Required permission:** `apitoken:revoke`
 *
 * **Behavior:**
 * - Invalidation is **immediate** — the token is removed from the auth cache synchronously, so in-flight requests using it will be rejected before this call returns.
 * - Revocation is **irreversible** — the token record and its associated permissions are permanently deleted. There is no way to restore a revoked token.
 * - Returns HTTP 200 with an empty body on success.
 *
 * **Token lifecycle:** Use `CreateApiAuthToken` to issue a new token. Use `UpdateApiAuthToken` to adjust permissions or extend expiration without revoking. Use `ListApiAuthTokens` or `GetApiAuthToken` to inspect active tokens before revoking.
 *
 * **Errors:** `NotFoundError` if `apiAuthTokenId` does not exist in the organization; `AuthorizationError` if the caller lacks `apitoken:revoke`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, RevokeApiAuthTokenCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, RevokeApiAuthTokenCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // RevokeApiAuthTokenInput
 *   organizationId: "STRING_VALUE", // required
 *   apiAuthTokenId: "STRING_VALUE", // required
 * };
 * const command = new RevokeApiAuthTokenCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeApiAuthTokenCommandInput - {@link RevokeApiAuthTokenCommandInput}
 * @returns {@link RevokeApiAuthTokenCommandOutput}
 * @see {@link RevokeApiAuthTokenCommandInput} for command's `input` shape.
 * @see {@link RevokeApiAuthTokenCommandOutput} for command's `response` shape.
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
export class RevokeApiAuthTokenCommand extends $Command.classBuilder<RevokeApiAuthTokenCommandInput, RevokeApiAuthTokenCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "RevokeApiAuthToken", {

  })
  .n("JustWorkflowItClient", "RevokeApiAuthTokenCommand")
  .f(void 0, void 0)
  .ser(se_RevokeApiAuthTokenCommand)
  .de(de_RevokeApiAuthTokenCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: RevokeApiAuthTokenInput;
      output: {};
  };
  sdk: {
      input: RevokeApiAuthTokenCommandInput;
      output: RevokeApiAuthTokenCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListApiAuthTokensInput,
  ListApiAuthTokensOutput,
} from "../models/models_0";
import {
  de_ListApiAuthTokensCommand,
  se_ListApiAuthTokensCommand,
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
 * The input for {@link ListApiAuthTokensCommand}.
 */
export interface ListApiAuthTokensCommandInput extends ListApiAuthTokensInput {}
/**
 * @public
 *
 * The output of {@link ListApiAuthTokensCommand}.
 */
export interface ListApiAuthTokensCommandOutput extends ListApiAuthTokensOutput, __MetadataBearer {}

/**
 * Lists all API authentication tokens in an organization, returning metadata for each token — **never the token value itself**. **Returned per token:** `apiAuthTokenId`, `name`, `permissions`, `createdAt`, and `expiresAt`. Results are not paginated; all tokens are returned in a single response. **Lifecycle:** Use `CreateApiAuthToken` to provision a new token (the raw token value is returned **only once** at creation time). Use `UpdateApiAuthToken` to adjust permissions or extend expiration. Use `RevokeApiAuthToken` to immediately invalidate a token. Use `GetApiAuthToken` to fetch metadata for a single known token. **Requires:** `apitoken:read` permission on the organization. **Errors:** `AuthorizationError` if the caller lacks `apitoken:read`; `NotFoundError` if the organization does not exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListApiAuthTokensCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListApiAuthTokensCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListApiAuthTokensInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new ListApiAuthTokensCommand(input);
 * const response = await client.send(command);
 * // { // ListApiAuthTokensOutput
 * //   tokens: [ // ApiAuthTokenSummaryList // required
 * //     { // ApiAuthTokenSummary
 * //       apiAuthTokenId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       expiresAt: new Date("TIMESTAMP"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       permissions: [ // PermissionNameList // required
 * //         "organization:read" || "organization:update" || "organization:delete" || "workflow:create" || "workflow:read" || "workflow:update" || "workflow:delete" || "workflow:version:create" || "workflow:version:read" || "apitoken:create" || "apitoken:update" || "apitoken:read" || "apitoken:revoke" || "job:submit" || "job:read" || "job:list" || "job:update" || "job:cancel" || "job:delete" || "job:event:send" || "resourcepool:create" || "resourcepool:read" || "resourcepool:list" || "resourcepool:update" || "resourcepool:delete" || "subscription:read" || "metrics:read" || "marketplace:publish" || "marketplace:unpublish" || "marketplace:grant" || "marketplace:allowlist" || "secret:create" || "secret:list" || "secret:read" || "secret:update" || "secret:delete" || "secret:resolve" || "notification:list" || "notification:update" || "billing:manage" || "staff:read" || "staff:write",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListApiAuthTokensCommandInput - {@link ListApiAuthTokensCommandInput}
 * @returns {@link ListApiAuthTokensCommandOutput}
 * @see {@link ListApiAuthTokensCommandInput} for command's `input` shape.
 * @see {@link ListApiAuthTokensCommandOutput} for command's `response` shape.
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
export class ListApiAuthTokensCommand extends $Command.classBuilder<ListApiAuthTokensCommandInput, ListApiAuthTokensCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListApiAuthTokens", {

  })
  .n("JustWorkflowItClient", "ListApiAuthTokensCommand")
  .f(void 0, void 0)
  .ser(se_ListApiAuthTokensCommand)
  .de(de_ListApiAuthTokensCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListApiAuthTokensInput;
      output: ListApiAuthTokensOutput;
  };
  sdk: {
      input: ListApiAuthTokensCommandInput;
      output: ListApiAuthTokensCommandOutput;
  };
};
}

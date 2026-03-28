// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  DeleteResourcePoolInput,
  DeleteResourcePoolOutput,
} from "../models/models_0";
import {
  de_DeleteResourcePoolCommand,
  se_DeleteResourcePoolCommand,
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
 * The input for {@link DeleteResourcePoolCommand}.
 */
export interface DeleteResourcePoolCommandInput extends DeleteResourcePoolInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePoolCommand}.
 */
export interface DeleteResourcePoolCommandOutput extends DeleteResourcePoolOutput, __MetadataBearer {}

/**
 * Permanently deletes a resource pool by ID, removing all its workflow targeting associations. **Jobs already running are not interrupted** — only future `SubmitJob` calls will no longer be constrained by this pool's `workerLimit`. **Constraints:** - The default resource pool cannot be deleted; attempting to do so returns a `400` validation error. - Deletion is idempotent: repeating the request after the pool is gone returns `404`. **Related operations:** - Use `ListResourcePools` to enumerate all pools and find the `poolId` to delete. - Use `UpdateResourcePool` to adjust the `workerLimit` or retarget workflows instead of deleting. - Use `CreateResourcePool` to replace a deleted pool with a new one. - Use `GetOrganizationSubscriptionPlan` to see how the deletion frees up capacity toward your plan's `maxJobConcurrency` limit. **Permissions required:** `resourcepool:delete` **Errors:** `400` if the pool is the default pool; `403` if the caller lacks permission; `404` if the pool or organization is not found.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, DeleteResourcePoolCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, DeleteResourcePoolCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // DeleteResourcePoolInput
 *   organizationId: "STRING_VALUE", // required
 *   poolId: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourcePoolCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResourcePoolOutput
 * //   poolId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteResourcePoolCommandInput - {@link DeleteResourcePoolCommandInput}
 * @returns {@link DeleteResourcePoolCommandOutput}
 * @see {@link DeleteResourcePoolCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePoolCommandOutput} for command's `response` shape.
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
export class DeleteResourcePoolCommand extends $Command.classBuilder<DeleteResourcePoolCommandInput, DeleteResourcePoolCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "DeleteResourcePool", {

  })
  .n("JustWorkflowItClient", "DeleteResourcePoolCommand")
  .f(void 0, void 0)
  .ser(se_DeleteResourcePoolCommand)
  .de(de_DeleteResourcePoolCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: DeleteResourcePoolInput;
      output: DeleteResourcePoolOutput;
  };
  sdk: {
      input: DeleteResourcePoolCommandInput;
      output: DeleteResourcePoolCommandOutput;
  };
};
}

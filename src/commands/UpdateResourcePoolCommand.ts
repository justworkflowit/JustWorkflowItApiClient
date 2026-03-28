// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  UpdateResourcePoolInput,
  UpdateResourcePoolOutput,
} from "../models/models_0";
import {
  de_UpdateResourcePoolCommand,
  se_UpdateResourcePoolCommand,
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
 * The input for {@link UpdateResourcePoolCommand}.
 */
export interface UpdateResourcePoolCommandInput extends UpdateResourcePoolInput {}
/**
 * @public
 *
 * The output of {@link UpdateResourcePoolCommand}.
 */
export interface UpdateResourcePoolCommandOutput extends UpdateResourcePoolOutput, __MetadataBearer {}

/**
 * Updates a resource pool's `name`, `workerLimit`, or workflow targeting — replacing the existing target set atomically. **Targeting:** Supply `targetsAllWorkflows: true` to apply the pool org-wide, or provide one or more `targetedWorkflowIds` to scope it to specific workflows. Omitting both returns a `400` validation error. The existing workflow associations are fully replaced on each call, so always send the complete desired target list. **Concurrency cap:** If `workerLimit` is supplied, the sum of `workerLimit` across all pools in the organization (excluding this pool) plus the new value must not exceed your plan's `maxJobConcurrency` limit. Use `GetOrganizationSubscriptionPlan` to check available headroom before updating. **Effect timing:** Changes apply to new `SubmitJob` calls only — jobs already running or queued are not interrupted. **Related operations:** Use `GetResourcePool` to confirm the update, `ListResourcePools` to view all pools and their current limits, `CreateResourcePool` to add a pool, and `DeleteResourcePool` to remove one entirely. **Permissions required:** `resourcepool:update` **Errors:** `400` if no target is specified or the new `workerLimit` would exceed the plan cap; `403` if the caller lacks permission; `404` if the pool or organization is not found.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UpdateResourcePoolCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UpdateResourcePoolCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UpdateResourcePoolInput
 *   organizationId: "STRING_VALUE", // required
 *   poolId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   workerLimit: Number("int"),
 *   targetsAllWorkflows: true || false,
 *   targetedWorkflowIds: [ // ResourcePoolWorkflowIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateResourcePoolCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourcePoolOutput
 * //   poolId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateResourcePoolCommandInput - {@link UpdateResourcePoolCommandInput}
 * @returns {@link UpdateResourcePoolCommandOutput}
 * @see {@link UpdateResourcePoolCommandInput} for command's `input` shape.
 * @see {@link UpdateResourcePoolCommandOutput} for command's `response` shape.
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
export class UpdateResourcePoolCommand extends $Command.classBuilder<UpdateResourcePoolCommandInput, UpdateResourcePoolCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UpdateResourcePool", {

  })
  .n("JustWorkflowItClient", "UpdateResourcePoolCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResourcePoolCommand)
  .de(de_UpdateResourcePoolCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UpdateResourcePoolInput;
      output: UpdateResourcePoolOutput;
  };
  sdk: {
      input: UpdateResourcePoolCommandInput;
      output: UpdateResourcePoolCommandOutput;
  };
};
}

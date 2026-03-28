// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateResourcePoolInput,
  CreateResourcePoolOutput,
} from "../models/models_0";
import {
  de_CreateResourcePoolCommand,
  se_CreateResourcePoolCommand,
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
 * The input for {@link CreateResourcePoolCommand}.
 */
export interface CreateResourcePoolCommandInput extends CreateResourcePoolInput {}
/**
 * @public
 *
 * The output of {@link CreateResourcePoolCommand}.
 */
export interface CreateResourcePoolCommandOutput extends CreateResourcePoolOutput, __MetadataBearer {}

/**
 * Creates a new resource pool to cap the number of concurrent workers for specific workflows or all workflows in an organization. **Targeting:** Set `targetsAllWorkflows: true` to apply the limit org-wide, or provide one or more `targetedWorkflowIds` to scope the pool to specific workflows. At least one target is required — omitting both returns a `400` validation error. **Concurrency cap:** The new pool's `workerLimit` is validated against your subscription plan's `maxJobConcurrency` limit. The sum of `workerLimit` across **all** pools in the organization cannot exceed this cap. Use `GetOrganizationSubscriptionPlan` to check the current limit and your remaining headroom before creating a pool. **On success:** Returns the new `poolId`. Use `GetResourcePool` to retrieve full pool details, or `ListResourcePools` to see all pools in the organization. Use `UpdateResourcePool` to change the limit or retarget workflows later, and `DeleteResourcePool` to remove the pool (the default pool cannot be deleted). **Permissions required:** `resourcepool:create` **Errors:** `400` if no target is specified or the worker limit would exceed the plan cap; `403` if the caller lacks permission; `404` if the organization is not found.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateResourcePoolCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateResourcePoolCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateResourcePoolInput
 *   organizationId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   workerLimit: Number("int"), // required
 *   targetsAllWorkflows: true || false,
 *   targetedWorkflowIds: [ // ResourcePoolWorkflowIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateResourcePoolCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourcePoolOutput
 * //   poolId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateResourcePoolCommandInput - {@link CreateResourcePoolCommandInput}
 * @returns {@link CreateResourcePoolCommandOutput}
 * @see {@link CreateResourcePoolCommandInput} for command's `input` shape.
 * @see {@link CreateResourcePoolCommandOutput} for command's `response` shape.
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
export class CreateResourcePoolCommand extends $Command.classBuilder<CreateResourcePoolCommandInput, CreateResourcePoolCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateResourcePool", {

  })
  .n("JustWorkflowItClient", "CreateResourcePoolCommand")
  .f(void 0, void 0)
  .ser(se_CreateResourcePoolCommand)
  .de(de_CreateResourcePoolCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateResourcePoolInput;
      output: CreateResourcePoolOutput;
  };
  sdk: {
      input: CreateResourcePoolCommandInput;
      output: CreateResourcePoolCommandOutput;
  };
};
}

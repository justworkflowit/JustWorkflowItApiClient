// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetResourcePoolInput,
  GetResourcePoolOutput,
} from "../models/models_0";
import {
  de_GetResourcePoolCommand,
  se_GetResourcePoolCommand,
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
 * The input for {@link GetResourcePoolCommand}.
 */
export interface GetResourcePoolCommandInput extends GetResourcePoolInput {}
/**
 * @public
 *
 * The output of {@link GetResourcePoolCommand}.
 */
export interface GetResourcePoolCommandOutput extends GetResourcePoolOutput, __MetadataBearer {}

/**
 * Retrieves full details for a single resource pool by `poolId`, including its `name`, `workerLimit`, `targetsAllWorkflows` flag, `targetedWorkflowIds`, and timestamps. **Response shape:** Returns a `ResourcePoolDetail` object — identical fields to the `ResourcePoolSummary` entries returned by `ListResourcePools`, but scoped to one pool for direct lookup by ID. **Related operations:** - Use `ListResourcePools` to enumerate all pools and discover a `poolId`. - Use `UpdateResourcePool` to change the `workerLimit` or retarget workflows, then call this endpoint to confirm the update. - Use `CreateResourcePool` to add a new pool; `CreateResourcePool` returns only the new `poolId` — use `GetResourcePool` to fetch its full details immediately after creation. - Use `DeleteResourcePool` to remove the pool entirely (the default pool cannot be deleted). - Use `GetOrganizationSubscriptionPlan` to check how the pool's `workerLimit` relates to your plan's `maxJobConcurrency` cap. **Permissions required:** `resourcepool:read` **Errors:** `403` if the caller lacks permission; `404` if the pool or organization is not found.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetResourcePoolCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetResourcePoolCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetResourcePoolInput
 *   organizationId: "STRING_VALUE", // required
 *   poolId: "STRING_VALUE", // required
 * };
 * const command = new GetResourcePoolCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePoolOutput
 * //   resourcePool: { // ResourcePoolDetail
 * //     poolId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     workerLimit: Number("int"), // required
 * //     targetsAllWorkflows: true || false, // required
 * //     targetedWorkflowIds: [ // ResourcePoolWorkflowIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourcePoolCommandInput - {@link GetResourcePoolCommandInput}
 * @returns {@link GetResourcePoolCommandOutput}
 * @see {@link GetResourcePoolCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoolCommandOutput} for command's `response` shape.
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
export class GetResourcePoolCommand extends $Command.classBuilder<GetResourcePoolCommandInput, GetResourcePoolCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetResourcePool", {

  })
  .n("JustWorkflowItClient", "GetResourcePoolCommand")
  .f(void 0, void 0)
  .ser(se_GetResourcePoolCommand)
  .de(de_GetResourcePoolCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetResourcePoolInput;
      output: GetResourcePoolOutput;
  };
  sdk: {
      input: GetResourcePoolCommandInput;
      output: GetResourcePoolCommandOutput;
  };
};
}

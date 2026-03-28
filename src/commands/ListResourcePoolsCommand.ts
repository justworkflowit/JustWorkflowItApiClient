// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListResourcePoolsInput,
  ListResourcePoolsOutput,
} from "../models/models_0";
import {
  de_ListResourcePoolsCommand,
  se_ListResourcePoolsCommand,
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
 * The input for {@link ListResourcePoolsCommand}.
 */
export interface ListResourcePoolsCommandInput extends ListResourcePoolsInput {}
/**
 * @public
 *
 * The output of {@link ListResourcePoolsCommand}.
 */
export interface ListResourcePoolsCommandOutput extends ListResourcePoolsOutput, __MetadataBearer {}

/**
 * Lists all resource pools defined in an organization, ordered by creation date (newest first). Each result includes the pool's `workerLimit`, whether it `targetsAllWorkflows`, and the list of `targetedWorkflowIds` for workflow-specific pools. **Related operations:** - Use `CreateResourcePool` to add a new pool — the total `workerLimit` across all pools is capped by your subscription plan's `maxJobConcurrency` limit. - Use `GetResourcePool` to retrieve full details for a single pool by ID. - Use `UpdateResourcePool` to change a pool's worker limit or targeted workflows. - Use `DeleteResourcePool` to remove a pool (the default pool cannot be deleted). - Use `GetOrganizationSubscriptionPlan` to check how many concurrent workers your plan allows. **Permissions required:** `resourcepool:list` **Errors:** Returns `403` if the caller lacks permission, `404` if the organization is not found.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListResourcePoolsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListResourcePoolsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListResourcePoolsInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new ListResourcePoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcePoolsOutput
 * //   resourcePools: [ // ResourcePoolSummaryList // required
 * //     { // ResourcePoolSummary
 * //       poolId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       workerLimit: Number("int"), // required
 * //       targetsAllWorkflows: true || false, // required
 * //       targetedWorkflowIds: [ // ResourcePoolWorkflowIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResourcePoolsCommandInput - {@link ListResourcePoolsCommandInput}
 * @returns {@link ListResourcePoolsCommandOutput}
 * @see {@link ListResourcePoolsCommandInput} for command's `input` shape.
 * @see {@link ListResourcePoolsCommandOutput} for command's `response` shape.
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
export class ListResourcePoolsCommand extends $Command.classBuilder<ListResourcePoolsCommandInput, ListResourcePoolsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListResourcePools", {

  })
  .n("JustWorkflowItClient", "ListResourcePoolsCommand")
  .f(void 0, void 0)
  .ser(se_ListResourcePoolsCommand)
  .de(de_ListResourcePoolsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListResourcePoolsInput;
      output: ListResourcePoolsOutput;
  };
  sdk: {
      input: ListResourcePoolsCommandInput;
      output: ListResourcePoolsCommandOutput;
  };
};
}

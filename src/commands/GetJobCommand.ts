// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetJobInput,
  GetJobOutput,
} from "../models/models_0";
import {
  de_GetJobCommand,
  se_GetJobCommand,
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
 * The input for {@link GetJobCommand}.
 */
export interface GetJobCommandInput extends GetJobInput {}
/**
 * @public
 *
 * The output of {@link GetJobCommand}.
 */
export interface GetJobCommandOutput extends GetJobOutput, __MetadataBearer {}

/**
 * Retrieves full details for a single job, including status, timestamps, billing, and the complete parent/child job hierarchy — use this as the primary polling endpoint after `SubmitJob`.
 *
 * **Response highlights**
 *
 * - `job` — a `JobSummary` with all fields: current `status`, workflow name/version, submitter, `createdAt`/`startedAt`/`finishedAt` timestamps, and `billableTransactionUnits` aggregated across the entire job hierarchy (this job plus all descendants)
 * - `parentJob` — populated when this job was spawned by a `RunChildJob` step; includes the parent job ID, status, workflow name, and the step name that triggered this child
 * - `childJobs` — list of child jobs this job itself has spawned via `RunChildJob` steps; omitted (not an empty array) when there are no children
 *
 * **Compared to related endpoints**
 *
 * - `ListJobs` returns the same `JobSummary` shape but without `parentJob`/`childJobs` hierarchy detail — use `GetJob` when you need the full orchestration graph
 * - `GetWorkflowState` returns step-by-step execution history, intermediate data, and current `nextStepName`; use it for debugging rather than status polling
 * - `SendJobEvent` / `ResumeJob` / `CancelJob` act on the job once you know its current state
 *
 * **Error conditions**
 *
 * Returns `NotFoundError` if the `jobId` does not exist within the given `organizationId`. Parent job resolution is best-effort — if the parent has been deleted, `parentJob` is omitted rather than causing an error.
 *
 * **Permissions required:** `job:read`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetJobCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetJobCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetJobInput
 *   organizationId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * // { // GetJobOutput
 * //   job: { // JobSummary
 * //     jobId: "STRING_VALUE", // required
 * //     status: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED", // required
 * //     workflowId: "STRING_VALUE", // required
 * //     workflowName: "STRING_VALUE", // required
 * //     workflowVersion: { // WorkflowVersionOutput
 * //       versionId: "STRING_VALUE", // required
 * //       versionNumber: Number("int"), // required
 * //     },
 * //     submittedByUser: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     startedAt: new Date("TIMESTAMP"),
 * //     finishedAt: new Date("TIMESTAMP"),
 * //     parentJobId: "STRING_VALUE",
 * //     parentStepName: "STRING_VALUE",
 * //     rootJobId: "STRING_VALUE",
 * //     billableTransactionUnits: Number("double"),
 * //   },
 * //   parentJob: { // ParentJobInfo
 * //     jobId: "STRING_VALUE", // required
 * //     status: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED", // required
 * //     workflowName: "STRING_VALUE", // required
 * //     stepName: "STRING_VALUE", // required
 * //   },
 * //   childJobs: [ // ChildJobSummaryList
 * //     { // ChildJobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       status: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED", // required
 * //       workflowName: "STRING_VALUE", // required
 * //       parentStepName: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       finishedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetJobCommandInput - {@link GetJobCommandInput}
 * @returns {@link GetJobCommandOutput}
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
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
export class GetJobCommand extends $Command.classBuilder<GetJobCommandInput, GetJobCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetJob", {

  })
  .n("JustWorkflowItClient", "GetJobCommand")
  .f(void 0, void 0)
  .ser(se_GetJobCommand)
  .de(de_GetJobCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetJobInput;
      output: GetJobOutput;
  };
  sdk: {
      input: GetJobCommandInput;
      output: GetJobCommandOutput;
  };
};
}

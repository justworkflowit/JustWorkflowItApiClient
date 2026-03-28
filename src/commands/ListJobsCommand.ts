// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListJobsInput,
  ListJobsOutput,
} from "../models/models_0";
import {
  de_ListJobsCommand,
  se_ListJobsCommand,
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
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsInput {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsOutput, __MetadataBearer {}

/**
 * Lists all jobs in an organization, sorted by creation time (newest first), with optional filtering and cursor-based pagination.
 *
 * **Filtering & pagination**
 *
 * - Filter by `status` query param: `PENDING`, `RUNNING`, `SUCCEEDED`, `FAILED`, or `CANCELLED`
 * - Pass `pageSize` (default: 25) and `pageToken` from a previous response to page through results
 * - The response always includes a `totalCount` reflecting the total matching jobs (ignoring pagination)
 * - When `nextPageToken` is absent, you have reached the last page
 *
 * **Response fields**
 *
 * Each `JobSummary` includes the job ID, current status, workflow name/version, submitter, timestamps, and `billableTransactionUnits` (the total units consumed by this job and all its child jobs).
 *
 * **Related operations**
 *
 * - Use `SubmitJob` to create a new job and obtain its `jobId`
 * - Use `GetJob` to fetch a single job with full parent/child hierarchy details not present in list summaries
 * - Use `GetWorkflowState` to inspect step-by-step execution history and current workflow data for a specific job
 * - Use `SendJobEvent` to unblock a `RUNNING` job that is waiting on an external event
 *
 * **Permissions required:** `job:list`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListJobsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListJobsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListJobsInput
 *   organizationId: "STRING_VALUE", // required
 *   status: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED",
 *   workflowName: "STRING_VALUE",
 *   workflowVersionNumber: Number("int"),
 *   createdAfter: "STRING_VALUE",
 *   createdBefore: "STRING_VALUE",
 *   jobHierarchy: "ALL" || "TOP_LEVEL_ONLY" || "CHILD_JOBS_ONLY",
 *   pageToken: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsOutput
 * //   jobs: [ // JobSummaryList // required
 * //     { // JobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       status: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED", // required
 * //       workflowId: "STRING_VALUE", // required
 * //       workflowName: "STRING_VALUE", // required
 * //       workflowVersion: { // WorkflowVersionOutput
 * //         versionId: "STRING_VALUE", // required
 * //         versionNumber: Number("int"), // required
 * //       },
 * //       submittedByUser: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       startedAt: new Date("TIMESTAMP"),
 * //       finishedAt: new Date("TIMESTAMP"),
 * //       parentJobId: "STRING_VALUE",
 * //       parentStepName: "STRING_VALUE",
 * //       rootJobId: "STRING_VALUE",
 * //       billableTransactionUnits: Number("double"),
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * //   totalCount: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
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
export class ListJobsCommand extends $Command.classBuilder<ListJobsCommandInput, ListJobsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListJobs", {

  })
  .n("JustWorkflowItClient", "ListJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListJobsCommand)
  .de(de_ListJobsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListJobsInput;
      output: ListJobsOutput;
  };
  sdk: {
      input: ListJobsCommandInput;
      output: ListJobsCommandOutput;
  };
};
}

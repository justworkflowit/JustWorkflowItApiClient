// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ResumeJobInput,
  ResumeJobOutput,
} from "../models/models_0";
import {
  de_ResumeJobCommand,
  se_ResumeJobCommand,
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
 * The input for {@link ResumeJobCommand}.
 */
export interface ResumeJobCommandInput extends ResumeJobInput {}
/**
 * @public
 *
 * The output of {@link ResumeJobCommand}.
 */
export interface ResumeJobCommandOutput extends ResumeJobOutput, __MetadataBearer {}

/**
 * Restarts a `FAILED` or `CANCELLED` job from its last completed step, re-queuing it as `PENDING` and replaying execution asynchronously from where it left off.
 *
 * **Resumable statuses**
 *
 * Only jobs in `FAILED` or `CANCELLED` status can be resumed. Attempting to resume a job in any other status (`PENDING`, `RUNNING`, `SUCCEEDED`) returns a `ValidationError`. Use `GetJob` to confirm the current status before calling this endpoint.
 *
 * **Execution semantics**
 *
 * The job is atomically set back to `PENDING`, enqueued in the job queue, and a `JOB_SUBMITTED` scheduler event is fired — identical to the flow triggered by `SubmitJob`. The engine resumes from the last successfully completed step rather than restarting the entire workflow, preserving prior step outputs in execution history.
 *
 * **Billing**
 *
 * Each resumption records a `JOB_RESUMPTION` billable transaction against the job, separate from the original submission cost. Check cumulative usage via `GetOrganizationSubscriptionPlan`.
 *
 * **Error conditions**
 *
 * - `ValidationError` — job is not in a resumable status (`FAILED` or `CANCELLED`)
 * - `NotFoundError` — `jobId` does not exist within the given `organizationId`
 *
 * **Related operations**
 *
 * - `GetJob` / `ListJobs` — poll status before and after resumption; the job transitions `FAILED`/`CANCELLED` → `PENDING` → `RUNNING` → terminal
 * - `GetWorkflowState` — inspect execution history to understand which step failed and what data is available before deciding to resume
 * - `CancelJob` — abort a running job; the resulting `CANCELLED` state is resumable
 * - `SubmitJob` — use instead if a full restart with fresh input is preferred over resuming from the failure point
 * - `SendJobEvent` — unblock a `RUNNING` job waiting on a `WaitForEventIds` step (different from resumption)
 *
 * **Permissions required:** `job:submit`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ResumeJobCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ResumeJobCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ResumeJobInput
 *   organizationId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new ResumeJobCommand(input);
 * const response = await client.send(command);
 * // { // ResumeJobOutput
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ResumeJobCommandInput - {@link ResumeJobCommandInput}
 * @returns {@link ResumeJobCommandOutput}
 * @see {@link ResumeJobCommandInput} for command's `input` shape.
 * @see {@link ResumeJobCommandOutput} for command's `response` shape.
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
export class ResumeJobCommand extends $Command.classBuilder<ResumeJobCommandInput, ResumeJobCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ResumeJob", {

  })
  .n("JustWorkflowItClient", "ResumeJobCommand")
  .f(void 0, void 0)
  .ser(se_ResumeJobCommand)
  .de(de_ResumeJobCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ResumeJobInput;
      output: ResumeJobOutput;
  };
  sdk: {
      input: ResumeJobCommandInput;
      output: ResumeJobCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CancelJobInput,
  CancelJobOutput,
} from "../models/models_0";
import {
  de_CancelJobCommand,
  se_CancelJobCommand,
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
 * The input for {@link CancelJobCommand}.
 */
export interface CancelJobCommandInput extends CancelJobInput {}
/**
 * @public
 *
 * The output of {@link CancelJobCommand}.
 */
export interface CancelJobCommandOutput extends CancelJobOutput, __MetadataBearer {}

/**
 * Immediately marks a `PENDING` or `RUNNING` job as `CANCELLED`, preventing the scheduler from starting any new steps — the `jobId` is returned synchronously once the status update is committed.
 *
 * **Cancellation semantics**
 *
 * Cancellation is a database-level status update, not a signal sent to in-flight step executors. Steps that are already executing when `CancelJob` is called may still run to completion; no new steps will be dispatched afterward.
 *
 * **Error conditions**
 *
 * - Returns `ValidationError` if the job is already in a terminal state (`SUCCEEDED`, `FAILED`, or `CANCELLED`) — you cannot cancel a job that has already finished.
 * - Returns `NotFoundError` if the `jobId` does not exist within the given `organizationId`.
 *
 * **Child jobs**
 *
 * Cancelling a parent job does not automatically cancel its running child jobs. Use `GetJob` to discover child job IDs (via `childJobs`) and cancel each one individually if needed.
 *
 * **Related operations**
 *
 * - `GetJob` / `ListJobs` — poll the job status before and after cancellation
 * - `GetWorkflowState` — inspect which steps ran before cancellation took effect
 * - `ResumeJob` — a `CANCELLED` job can be resumed later from its last completed step
 * - `SubmitJob` — submit a fresh job if a full restart is preferred over resuming
 *
 * **Permissions required:** `job:cancel`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CancelJobCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CancelJobCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CancelJobInput
 *   organizationId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * // { // CancelJobOutput
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelJobCommandInput - {@link CancelJobCommandInput}
 * @returns {@link CancelJobCommandOutput}
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
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
export class CancelJobCommand extends $Command.classBuilder<CancelJobCommandInput, CancelJobCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CancelJob", {

  })
  .n("JustWorkflowItClient", "CancelJobCommand")
  .f(void 0, void 0)
  .ser(se_CancelJobCommand)
  .de(de_CancelJobCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CancelJobInput;
      output: CancelJobOutput;
  };
  sdk: {
      input: CancelJobCommandInput;
      output: CancelJobCommandOutput;
  };
};
}

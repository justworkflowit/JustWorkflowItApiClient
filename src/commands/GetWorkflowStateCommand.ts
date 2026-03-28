// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetWorkflowStateInput,
  GetWorkflowStateOutput,
} from "../models/models_0";
import {
  de_GetWorkflowStateCommand,
  se_GetWorkflowStateCommand,
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
 * The input for {@link GetWorkflowStateCommand}.
 */
export interface GetWorkflowStateCommandInput extends GetWorkflowStateInput {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStateCommand}.
 */
export interface GetWorkflowStateCommandOutput extends GetWorkflowStateOutput, __MetadataBearer {}

/**
 * Returns the full internal execution state of a job — `executionHistory`, accumulated `executionData`, and the `nextStepName` queued for the next scheduler cycle — making it the primary endpoint for debugging and deep inspection of workflow execution.
 *
 * **Response structure**
 *
 * - `executionHistory` — ordered list of every step execution attempt, each with: `stepName`, `stepExecutorType`, `historySource` (`'engine'` for normal steps, `'external'` for events delivered via `SendJobEvent`), per-step `input`/`output` (including `payload` and `status`), `startTimestamp`/`endTimestamp`, and any `errors`/`warnings` emitted.
 * - `executionData` — the live workflow data object accumulated across all completed steps; this is the data the engine passes into each subsequent step as its input context.
 * - `nextStepName` — the step the scheduler will execute next. Absent (not an empty string) once the job has reached a terminal state.
 *
 * **When to use vs. related endpoints**
 *
 * - `GetJob` is the right polling endpoint for status, timestamps, and parent/child hierarchy — prefer it for lightweight status checks.
 * - `GetWorkflowState` is for deep inspection: examining step-level inputs/outputs, diagnosing why a step failed, or verifying that an event sent via `SendJobEvent` was recorded (look for `historySource: 'external'` entries).
 * - Before calling `ResumeJob` on a `FAILED` job, inspect this endpoint to understand exactly which step failed and what `executionData` is available.
 *
 * **Error conditions**
 *
 * Returns `NotFoundError` if no state record exists for the given `jobId` within the `organizationId`. A newly submitted job may not have a state record until the scheduler has processed its first cycle.
 *
 * **Permissions required:** `job:read`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetWorkflowStateCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetWorkflowStateCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetWorkflowStateInput
 *   organizationId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowStateCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStateOutput
 * //   state: { // WorkflowState
 * //     nextStepName: "STRING_VALUE",
 * //     executionData: "DOCUMENT_VALUE", // required
 * //     executionHistory: [ // ExecutionHistoryList // required
 * //       { // ExecutionHistoryItem
 * //         id: "STRING_VALUE", // required
 * //         stepName: "STRING_VALUE", // required
 * //         stepExecutorType: "STRING_VALUE", // required
 * //         historySource: "engine" || "external", // required
 * //         input: "DOCUMENT_VALUE", // required
 * //         output: { // StepExecutorOutput
 * //           status: "success" || "successful_but_incomplete" || "failure", // required
 * //           payload: "DOCUMENT_VALUE",
 * //         },
 * //         startTimestamp: new Date("TIMESTAMP"), // required
 * //         endTimestamp: new Date("TIMESTAMP"), // required
 * //         errors: [ // stringList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         warnings: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         eventId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkflowStateCommandInput - {@link GetWorkflowStateCommandInput}
 * @returns {@link GetWorkflowStateCommandOutput}
 * @see {@link GetWorkflowStateCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStateCommandOutput} for command's `response` shape.
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
export class GetWorkflowStateCommand extends $Command.classBuilder<GetWorkflowStateCommandInput, GetWorkflowStateCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetWorkflowState", {

  })
  .n("JustWorkflowItClient", "GetWorkflowStateCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowStateCommand)
  .de(de_GetWorkflowStateCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetWorkflowStateInput;
      output: GetWorkflowStateOutput;
  };
  sdk: {
      input: GetWorkflowStateCommandInput;
      output: GetWorkflowStateCommandOutput;
  };
};
}

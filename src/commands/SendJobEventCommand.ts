// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  SendJobEventInput,
  SendJobEventOutput,
} from "../models/models_0";
import {
  de_SendJobEventCommand,
  se_SendJobEventCommand,
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
 * The input for {@link SendJobEventCommand}.
 */
export interface SendJobEventCommandInput extends SendJobEventInput {}
/**
 * @public
 *
 * The output of {@link SendJobEventCommand}.
 */
export interface SendJobEventCommandOutput extends SendJobEventOutput, __MetadataBearer {}

/**
 * Delivers a named external event to a `RUNNING` job, unblocking any `WaitForEventIds` step that is waiting for the matching `eventId` — the event is dispatched asynchronously via the scheduler and appears in execution history with `historySource: 'external'`.
 *
 * **When to use**
 *
 * Workflows that need to pause and wait for out-of-band signals (approvals, webhook callbacks, third-party confirmations) define a `WaitForEventIds` step listing one or more expected event IDs. Call `SendJobEvent` with the matching `eventId` once the external condition is met to resume execution.
 *
 * **Request behavior**
 *
 * - The job must be in `RUNNING` status — sending an event to a `PENDING`, `SUCCEEDED`, `FAILED`, or `CANCELLED` job returns a `ValidationError`.
 * - `eventId` must exactly match the identifier the workflow step is waiting for; unrecognised event IDs are recorded in history but do not advance the workflow.
 * - `payload` is accepted but currently reserved for future use — the engine does not pass payload data into workflow execution data at this time.
 * - Each call is metered as an `EXTERNAL_EVENT` billable transaction against the job.
 *
 * **Asynchronous dispatch**
 *
 * The API returns `200` as soon as the event is committed and the scheduler message is enqueued. Actual workflow resumption happens asynchronously; poll `GetJob` for status changes or inspect the full event history via `GetWorkflowState`.
 *
 * **Related operations**
 *
 * - `SubmitJob` — create the job and obtain its `jobId`
 * - `GetJob` / `ListJobs` — poll current job status
 * - `GetWorkflowState` — inspect execution history, including events sent via this endpoint
 * - `CancelJob` / `ResumeJob` — other lifecycle controls for a running job
 *
 * **Permissions required:** `job:event:send`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, SendJobEventCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, SendJobEventCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // SendJobEventInput
 *   organizationId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   eventId: "STRING_VALUE", // required
 *   payload: "DOCUMENT_VALUE",
 * };
 * const command = new SendJobEventCommand(input);
 * const response = await client.send(command);
 * // { // SendJobEventOutput
 * //   jobId: "STRING_VALUE", // required
 * //   eventId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendJobEventCommandInput - {@link SendJobEventCommandInput}
 * @returns {@link SendJobEventCommandOutput}
 * @see {@link SendJobEventCommandInput} for command's `input` shape.
 * @see {@link SendJobEventCommandOutput} for command's `response` shape.
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
export class SendJobEventCommand extends $Command.classBuilder<SendJobEventCommandInput, SendJobEventCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "SendJobEvent", {

  })
  .n("JustWorkflowItClient", "SendJobEventCommand")
  .f(void 0, void 0)
  .ser(se_SendJobEventCommand)
  .de(de_SendJobEventCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: SendJobEventInput;
      output: SendJobEventOutput;
  };
  sdk: {
      input: SendJobEventCommandInput;
      output: SendJobEventCommandOutput;
  };
};
}

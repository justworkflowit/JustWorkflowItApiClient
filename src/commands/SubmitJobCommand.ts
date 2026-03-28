// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  SubmitJobInput,
  SubmitJobOutput,
} from "../models/models_0";
import {
  de_SubmitJobCommand,
  se_SubmitJobCommand,
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
 * The input for {@link SubmitJobCommand}.
 */
export interface SubmitJobCommandInput extends SubmitJobInput {}
/**
 * @public
 *
 * The output of {@link SubmitJobCommand}.
 */
export interface SubmitJobCommandOutput extends SubmitJobOutput, __MetadataBearer {}

/**
 * Submits a workflow job for asynchronous execution and immediately returns a `jobId` for tracking — the job begins in `PENDING` status and transitions to `RUNNING`, `SUCCEEDED`, or `FAILED` as the engine progresses.
 *
 * **Workflow version selection**
 *
 * Specify the target version via `workflowVersion` using one of three mutually exclusive selectors: a specific `versionId`, a `versionNumber`, or a named `tag` (e.g. `'$LIVE'`). Use `ListWorkflowVersions` or `GetTaggedWorkflowVersion` to discover available versions and tags.
 *
 * **Input validation**
 *
 * `inputJson` is validated against the workflow definition by the engine *before* the job is queued. If the input is invalid, a `ValidationError` is returned synchronously and no job record is created.
 *
 * **Quota enforcement**
 *
 * Submissions count against your subscription plan's `MaxJobsPerDay` limit (UTC day boundary). Exceeding the limit returns a `ValidationError` with an upgrade prompt. Check your current limits with `GetOrganizationSubscriptionPlan`.
 *
 * **Job lifecycle & related operations**
 *
 * - `GetJob` / `ListJobs` — poll current status and timestamps
 * - `GetWorkflowState` — inspect step-by-step execution history and intermediate data
 * - `SendJobEvent` — unblock a `RUNNING` job waiting on a `WaitForEventIds` step
 * - `CancelJob` — abort a `PENDING` or `RUNNING` job
 * - `ResumeJob` — retry a `FAILED` job from its last completed step
 *
 * **Permissions required:** `job:submit`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, SubmitJobCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, SubmitJobCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // SubmitJobInput
 *   organizationId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   workflowVersion: { // WorkflowVersionSelector Union: only one key present
 *     versionId: "STRING_VALUE",
 *     versionNumber: Number("int"),
 *     tag: "STRING_VALUE",
 *   },
 *   inputJson: "DOCUMENT_VALUE",
 * };
 * const command = new SubmitJobCommand(input);
 * const response = await client.send(command);
 * // { // SubmitJobOutput
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SubmitJobCommandInput - {@link SubmitJobCommandInput}
 * @returns {@link SubmitJobCommandOutput}
 * @see {@link SubmitJobCommandInput} for command's `input` shape.
 * @see {@link SubmitJobCommandOutput} for command's `response` shape.
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
export class SubmitJobCommand extends $Command.classBuilder<SubmitJobCommandInput, SubmitJobCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "SubmitJob", {

  })
  .n("JustWorkflowItClient", "SubmitJobCommand")
  .f(void 0, void 0)
  .ser(se_SubmitJobCommand)
  .de(de_SubmitJobCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: SubmitJobInput;
      output: SubmitJobOutput;
  };
  sdk: {
      input: SubmitJobCommandInput;
      output: SubmitJobCommandOutput;
  };
};
}

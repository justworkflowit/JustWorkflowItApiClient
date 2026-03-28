// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminBackfillSubscriptionsInput,
  AdminBackfillSubscriptionsOutput,
} from "../models/models_0";
import {
  de_AdminBackfillSubscriptionsCommand,
  se_AdminBackfillSubscriptionsCommand,
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
 * The input for {@link AdminBackfillSubscriptionsCommand}.
 */
export interface AdminBackfillSubscriptionsCommandInput extends AdminBackfillSubscriptionsInput {}
/**
 * @public
 *
 * The output of {@link AdminBackfillSubscriptionsCommand}.
 */
export interface AdminBackfillSubscriptionsCommandOutput extends AdminBackfillSubscriptionsOutput, __MetadataBearer {}

/**
 * Backfills Stripe subscriptions for all organizations that have a subscription plan but no Stripe subscription. Syncs all plans to Stripe first, then creates subscriptions. Idempotent — safe to run multiple times. **Requires `staff:write` permission.**
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminBackfillSubscriptionsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminBackfillSubscriptionsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = {};
 * const command = new AdminBackfillSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // AdminBackfillSubscriptionsOutput
 * //   totalSynced: Number("int"), // required
 * //   totalSkipped: Number("int"), // required
 * //   totalFailed: Number("int"), // required
 * //   errors: [ // stringList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminBackfillSubscriptionsCommandInput - {@link AdminBackfillSubscriptionsCommandInput}
 * @returns {@link AdminBackfillSubscriptionsCommandOutput}
 * @see {@link AdminBackfillSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link AdminBackfillSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
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
export class AdminBackfillSubscriptionsCommand extends $Command.classBuilder<AdminBackfillSubscriptionsCommandInput, AdminBackfillSubscriptionsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminBackfillSubscriptions", {

  })
  .n("JustWorkflowItClient", "AdminBackfillSubscriptionsCommand")
  .f(void 0, void 0)
  .ser(se_AdminBackfillSubscriptionsCommand)
  .de(de_AdminBackfillSubscriptionsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: {};
      output: AdminBackfillSubscriptionsOutput;
  };
  sdk: {
      input: AdminBackfillSubscriptionsCommandInput;
      output: AdminBackfillSubscriptionsCommandOutput;
  };
};
}

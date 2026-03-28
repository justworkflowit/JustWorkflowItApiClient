// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminGetBillingHealthInput,
  AdminGetBillingHealthOutput,
} from "../models/models_0";
import {
  de_AdminGetBillingHealthCommand,
  se_AdminGetBillingHealthCommand,
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
 * The input for {@link AdminGetBillingHealthCommand}.
 */
export interface AdminGetBillingHealthCommandInput extends AdminGetBillingHealthInput {}
/**
 * @public
 *
 * The output of {@link AdminGetBillingHealthCommand}.
 */
export interface AdminGetBillingHealthCommandOutput extends AdminGetBillingHealthOutput, __MetadataBearer {}

/**
 * Returns billing health metrics: counts of organizations missing Stripe subscriptions, missing Stripe customers, etc. **Requires `staff:read` permission.**
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminGetBillingHealthCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminGetBillingHealthCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = {};
 * const command = new AdminGetBillingHealthCommand(input);
 * const response = await client.send(command);
 * // { // AdminGetBillingHealthOutput
 * //   totalOrganizations: Number("int"), // required
 * //   orgsWithoutSubscription: Number("int"), // required
 * //   orgsWithoutStripeCustomer: Number("int"), // required
 * //   orgsWithSubscription: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param AdminGetBillingHealthCommandInput - {@link AdminGetBillingHealthCommandInput}
 * @returns {@link AdminGetBillingHealthCommandOutput}
 * @see {@link AdminGetBillingHealthCommandInput} for command's `input` shape.
 * @see {@link AdminGetBillingHealthCommandOutput} for command's `response` shape.
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
export class AdminGetBillingHealthCommand extends $Command.classBuilder<AdminGetBillingHealthCommandInput, AdminGetBillingHealthCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminGetBillingHealth", {

  })
  .n("JustWorkflowItClient", "AdminGetBillingHealthCommand")
  .f(void 0, void 0)
  .ser(se_AdminGetBillingHealthCommand)
  .de(de_AdminGetBillingHealthCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: {};
      output: AdminGetBillingHealthOutput;
  };
  sdk: {
      input: AdminGetBillingHealthCommandInput;
      output: AdminGetBillingHealthCommandOutput;
  };
};
}

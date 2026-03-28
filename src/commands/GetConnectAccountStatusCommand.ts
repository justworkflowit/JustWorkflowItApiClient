// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetConnectAccountStatusInput,
  GetConnectAccountStatusOutput,
} from "../models/models_0";
import {
  de_GetConnectAccountStatusCommand,
  se_GetConnectAccountStatusCommand,
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
 * The input for {@link GetConnectAccountStatusCommand}.
 */
export interface GetConnectAccountStatusCommandInput extends GetConnectAccountStatusInput {}
/**
 * @public
 *
 * The output of {@link GetConnectAccountStatusCommand}.
 */
export interface GetConnectAccountStatusCommandOutput extends GetConnectAccountStatusOutput, __MetadataBearer {}

/**
 * Returns the cached Stripe Connect account status for an organization, indicating whether publisher onboarding is complete and payouts are active.
 *
 * **Required permission:** `billing:manage`
 *
 * **Response fields:**
 * - `onboarded` — `true` when the organization has submitted all required business details to Stripe (`details_submitted`).
 * - `payoutsEnabled` — `true` when Stripe has enabled payouts on the account. This is the gate for marketplace publishing.
 * - `accountId` — The Stripe Connect account ID, or `null` if `CreateConnectOnboardingLink` has never been called (no account created yet).
 *
 * **Important:** Status is read from the database, not fetched live from Stripe. It is updated automatically when Stripe delivers an `account.updated` event to `HandleStripeWebhook`. There may be a short delay between the user completing onboarding and this endpoint reflecting the change.
 *
 * **Typical publisher setup flow:**
 * 1. Call `CreateConnectOnboardingLink` to generate the Stripe-hosted onboarding URL and redirect the user.
 * 2. After the user returns from Stripe, poll `GetConnectAccountStatus` until `payoutsEnabled` is `true`.
 * 3. Once `payoutsEnabled` is `true`, the organization may publish workflows via `PublishWorkflowToMarketplace` and will receive automated payouts from marketplace usage.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetConnectAccountStatusCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetConnectAccountStatusCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetConnectAccountStatusInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectAccountStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectAccountStatusOutput
 * //   onboarded: true || false, // required
 * //   payoutsEnabled: true || false, // required
 * //   accountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectAccountStatusCommandInput - {@link GetConnectAccountStatusCommandInput}
 * @returns {@link GetConnectAccountStatusCommandOutput}
 * @see {@link GetConnectAccountStatusCommandInput} for command's `input` shape.
 * @see {@link GetConnectAccountStatusCommandOutput} for command's `response` shape.
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
export class GetConnectAccountStatusCommand extends $Command.classBuilder<GetConnectAccountStatusCommandInput, GetConnectAccountStatusCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetConnectAccountStatus", {

  })
  .n("JustWorkflowItClient", "GetConnectAccountStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectAccountStatusCommand)
  .de(de_GetConnectAccountStatusCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetConnectAccountStatusInput;
      output: GetConnectAccountStatusOutput;
  };
  sdk: {
      input: GetConnectAccountStatusCommandInput;
      output: GetConnectAccountStatusCommandOutput;
  };
};
}

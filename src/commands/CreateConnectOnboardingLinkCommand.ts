// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateConnectOnboardingLinkInput,
  CreateConnectOnboardingLinkOutput,
} from "../models/models_0";
import {
  de_CreateConnectOnboardingLinkCommand,
  se_CreateConnectOnboardingLinkCommand,
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
 * The input for {@link CreateConnectOnboardingLinkCommand}.
 */
export interface CreateConnectOnboardingLinkCommandInput extends CreateConnectOnboardingLinkInput {}
/**
 * @public
 *
 * The output of {@link CreateConnectOnboardingLinkCommand}.
 */
export interface CreateConnectOnboardingLinkCommandOutput extends CreateConnectOnboardingLinkOutput, __MetadataBearer {}

/**
 * Generates a Stripe Connect `account_onboarding` link that enables an organization to complete publisher onboarding and receive marketplace payouts.
 *
 * **Required permission:** `billing:manage`
 *
 * **How it works:**
 * - If the organization does not yet have a Stripe Connect account, one is automatically created (Express type) before the link is generated.
 * - Returns a short-lived Stripe-hosted `url` that the user must visit to submit their business details. Once submitted, Stripe redirects to `returnUrl`. If the link expires before completion, Stripe redirects to `refreshUrl` — call this endpoint again to generate a fresh link.
 * - The link type is `account_onboarding` and is single-use; do not cache or reuse it.
 *
 * **Typical publisher setup flow:**
 * 1. Call `CreateConnectOnboardingLink` with your `returnUrl` and `refreshUrl`, then redirect the user to the returned `url`.
 * 2. After the user returns, call `GetConnectAccountStatus` to check `onboarded` and `payoutsEnabled` before allowing listing publication.
 * 3. Once `payoutsEnabled` is `true`, the organization can publish workflows via `PublishWorkflowToMarketplace` and receive automated payouts from marketplace usage.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateConnectOnboardingLinkCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateConnectOnboardingLinkCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateConnectOnboardingLinkInput
 *   organizationId: "STRING_VALUE", // required
 *   returnUrl: "STRING_VALUE", // required
 *   refreshUrl: "STRING_VALUE", // required
 * };
 * const command = new CreateConnectOnboardingLinkCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectOnboardingLinkOutput
 * //   url: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConnectOnboardingLinkCommandInput - {@link CreateConnectOnboardingLinkCommandInput}
 * @returns {@link CreateConnectOnboardingLinkCommandOutput}
 * @see {@link CreateConnectOnboardingLinkCommandInput} for command's `input` shape.
 * @see {@link CreateConnectOnboardingLinkCommandOutput} for command's `response` shape.
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
export class CreateConnectOnboardingLinkCommand extends $Command.classBuilder<CreateConnectOnboardingLinkCommandInput, CreateConnectOnboardingLinkCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateConnectOnboardingLink", {

  })
  .n("JustWorkflowItClient", "CreateConnectOnboardingLinkCommand")
  .f(void 0, void 0)
  .ser(se_CreateConnectOnboardingLinkCommand)
  .de(de_CreateConnectOnboardingLinkCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateConnectOnboardingLinkInput;
      output: CreateConnectOnboardingLinkOutput;
  };
  sdk: {
      input: CreateConnectOnboardingLinkCommandInput;
      output: CreateConnectOnboardingLinkCommandOutput;
  };
};
}

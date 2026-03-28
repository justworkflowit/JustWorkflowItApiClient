// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetPublicInvitationDetailsInput,
  GetPublicInvitationDetailsOutput,
} from "../models/models_0";
import {
  de_GetPublicInvitationDetailsCommand,
  se_GetPublicInvitationDetailsCommand,
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
 * The input for {@link GetPublicInvitationDetailsCommand}.
 */
export interface GetPublicInvitationDetailsCommandInput extends GetPublicInvitationDetailsInput {}
/**
 * @public
 *
 * The output of {@link GetPublicInvitationDetailsCommand}.
 */
export interface GetPublicInvitationDetailsCommandOutput extends GetPublicInvitationDetailsOutput, __MetadataBearer {}

/**
 * Retrieves publicly visible details about a pending organization invitation without requiring authentication — intended for rendering invitation landing pages before the recipient has signed in. **Typical flow:** Invitation emails link directly to this endpoint. Use the returned data (`organizationName`, `inviterName`, `role`) to show a pre-login landing page, then direct the user to sign in or register. Once authenticated, call `AcceptOrganizationInvitation` or `RejectOrganizationInvitation` to act on the invitation. **Key response fields:** - `expiresAt` — defaults to 7 days after creation if not set explicitly when the invitation was created - `isExpired` — `true` if the invitation is past its expiration; expired invitations can no longer be accepted - `inviterName` — falls back to 'A team member' if the inviter profile has no display name. **Related endpoints:** `CreateOrganizationInvitation` generates the invitation and triggers the email; `GetOrganizationInvitation` returns full invitation details for authenticated organization members; `ListOrganizationInvitationsForUser` lists all pending invitations for the signed-in user. **Errors:** Returns `404` if the `invitationId` does not exist. No authentication is required and no authorization errors are possible.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetPublicInvitationDetailsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetPublicInvitationDetailsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetPublicInvitationDetailsInput
 *   invitationId: "STRING_VALUE", // required
 * };
 * const command = new GetPublicInvitationDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicInvitationDetailsOutput
 * //   invitationId: "STRING_VALUE", // required
 * //   email: "STRING_VALUE", // required
 * //   organizationId: "STRING_VALUE", // required
 * //   organizationName: "STRING_VALUE", // required
 * //   inviterName: "STRING_VALUE", // required
 * //   role: "owner" || "member", // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * //   isExpired: true || false, // required
 * // };
 *
 * ```
 *
 * @param GetPublicInvitationDetailsCommandInput - {@link GetPublicInvitationDetailsCommandInput}
 * @returns {@link GetPublicInvitationDetailsCommandOutput}
 * @see {@link GetPublicInvitationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetPublicInvitationDetailsCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
 *
 * @throws {@link NotFoundError} (client fault)
 *  The requested resource was not found. Verify the resource ID is correct and the resource exists in the specified organization.
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
export class GetPublicInvitationDetailsCommand extends $Command.classBuilder<GetPublicInvitationDetailsCommandInput, GetPublicInvitationDetailsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetPublicInvitationDetails", {

  })
  .n("JustWorkflowItClient", "GetPublicInvitationDetailsCommand")
  .f(void 0, void 0)
  .ser(se_GetPublicInvitationDetailsCommand)
  .de(de_GetPublicInvitationDetailsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetPublicInvitationDetailsInput;
      output: GetPublicInvitationDetailsOutput;
  };
  sdk: {
      input: GetPublicInvitationDetailsCommandInput;
      output: GetPublicInvitationDetailsCommandOutput;
  };
};
}

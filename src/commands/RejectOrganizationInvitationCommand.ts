// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  RejectOrganizationInvitationInput,
  RejectOrganizationInvitationOutput,
} from "../models/models_0";
import {
  de_RejectOrganizationInvitationCommand,
  se_RejectOrganizationInvitationCommand,
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
 * The input for {@link RejectOrganizationInvitationCommand}.
 */
export interface RejectOrganizationInvitationCommandInput extends RejectOrganizationInvitationInput {}
/**
 * @public
 *
 * The output of {@link RejectOrganizationInvitationCommand}.
 */
export interface RejectOrganizationInvitationCommandOutput extends RejectOrganizationInvitationOutput, __MetadataBearer {}

/**
 * Permanently declines an organization invitation, deleting it from the system so it can no longer be accepted. **Behavior:** - The invitation record is **deleted** upon rejection — it will no longer appear in `ListOrganizationInvitationsForUser` or be retrievable via `GetOrganizationInvitation`. - Only the invited user (the authenticated caller) can reject an invitation. To revoke an invitation from the sender's side, use `CancelOrganizationInvitation` instead. - The counterpart action is `AcceptOrganizationInvitation`, which adds the caller to the organization with the assigned role. **Errors:** Returns `404 NotFoundError` if the invitation does not exist or has already been accepted, rejected, or cancelled. Returns `401 AuthenticationError` if unauthenticated. **Related:** Use `ListOrganizationInvitationsForUser` to list all pending invitations before deciding to accept or reject.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, RejectOrganizationInvitationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, RejectOrganizationInvitationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // RejectOrganizationInvitationInput
 *   organizationId: "STRING_VALUE", // required
 *   invitationId: "STRING_VALUE", // required
 * };
 * const command = new RejectOrganizationInvitationCommand(input);
 * const response = await client.send(command);
 * // { // RejectOrganizationInvitationOutput
 * //   organizationId: "STRING_VALUE", // required
 * //   invitationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RejectOrganizationInvitationCommandInput - {@link RejectOrganizationInvitationCommandInput}
 * @returns {@link RejectOrganizationInvitationCommandOutput}
 * @see {@link RejectOrganizationInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectOrganizationInvitationCommandOutput} for command's `response` shape.
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
export class RejectOrganizationInvitationCommand extends $Command.classBuilder<RejectOrganizationInvitationCommandInput, RejectOrganizationInvitationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "RejectOrganizationInvitation", {

  })
  .n("JustWorkflowItClient", "RejectOrganizationInvitationCommand")
  .f(void 0, void 0)
  .ser(se_RejectOrganizationInvitationCommand)
  .de(de_RejectOrganizationInvitationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: RejectOrganizationInvitationInput;
      output: RejectOrganizationInvitationOutput;
  };
  sdk: {
      input: RejectOrganizationInvitationCommandInput;
      output: RejectOrganizationInvitationCommandOutput;
  };
};
}

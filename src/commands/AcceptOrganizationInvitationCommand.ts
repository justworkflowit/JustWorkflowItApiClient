// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AcceptOrganizationInvitationInput,
  AcceptOrganizationInvitationOutput,
} from "../models/models_0";
import {
  de_AcceptOrganizationInvitationCommand,
  se_AcceptOrganizationInvitationCommand,
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
 * The input for {@link AcceptOrganizationInvitationCommand}.
 */
export interface AcceptOrganizationInvitationCommandInput extends AcceptOrganizationInvitationInput {}
/**
 * @public
 *
 * The output of {@link AcceptOrganizationInvitationCommand}.
 */
export interface AcceptOrganizationInvitationCommandOutput extends AcceptOrganizationInvitationOutput, __MetadataBearer {}

/**
 * Accepts a pending organization invitation, granting the authenticated user membership with the role defined in the invitation. **Flow:** Use `GetPublicInvitationDetails` (no authentication required) to preview the invitation before signing in, or `GetOrganizationInvitation` to inspect it as an authenticated user. Once accepted, the user immediately appears in `ListOrganizationUsersAndInvitations` with the permissions of the assigned role. **Behavior:** - The role is determined by the invitation itself — callers cannot choose a different role at acceptance time. - Acceptance is atomic: a membership record is created and the invitation is stamped with an `acceptedAt` timestamp in a single transaction. - Returns a `400 ValidationError` if the invitation has already been accepted or has expired. - Expired or already-accepted invitations cannot be reused; the inviter must call `CreateOrganizationInvitation` to issue a new one. - To decline without joining, use `RejectOrganizationInvitation`. To view all pending invitations for your account, use `ListOrganizationInvitationsForUser`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AcceptOrganizationInvitationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AcceptOrganizationInvitationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AcceptOrganizationInvitationInput
 *   organizationId: "STRING_VALUE", // required
 *   invitationId: "STRING_VALUE", // required
 * };
 * const command = new AcceptOrganizationInvitationCommand(input);
 * const response = await client.send(command);
 * // { // AcceptOrganizationInvitationOutput
 * //   organizationId: "STRING_VALUE", // required
 * //   userId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AcceptOrganizationInvitationCommandInput - {@link AcceptOrganizationInvitationCommandInput}
 * @returns {@link AcceptOrganizationInvitationCommandOutput}
 * @see {@link AcceptOrganizationInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptOrganizationInvitationCommandOutput} for command's `response` shape.
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
export class AcceptOrganizationInvitationCommand extends $Command.classBuilder<AcceptOrganizationInvitationCommandInput, AcceptOrganizationInvitationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AcceptOrganizationInvitation", {

  })
  .n("JustWorkflowItClient", "AcceptOrganizationInvitationCommand")
  .f(void 0, void 0)
  .ser(se_AcceptOrganizationInvitationCommand)
  .de(de_AcceptOrganizationInvitationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AcceptOrganizationInvitationInput;
      output: AcceptOrganizationInvitationOutput;
  };
  sdk: {
      input: AcceptOrganizationInvitationCommandInput;
      output: AcceptOrganizationInvitationCommandOutput;
  };
};
}

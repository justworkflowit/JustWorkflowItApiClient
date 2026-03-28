// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateOrganizationInvitationInput,
  CreateOrganizationInvitationOutput,
} from "../models/models_0";
import {
  de_CreateOrganizationInvitationCommand,
  se_CreateOrganizationInvitationCommand,
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
 * The input for {@link CreateOrganizationInvitationCommand}.
 */
export interface CreateOrganizationInvitationCommandInput extends CreateOrganizationInvitationInput {}
/**
 * @public
 *
 * The output of {@link CreateOrganizationInvitationCommand}.
 */
export interface CreateOrganizationInvitationCommandOutput extends CreateOrganizationInvitationOutput, __MetadataBearer {}

/**
 * Creates a new organization invitation for the specified `email` address and assigns the invitee the given `role` (`owner` or `member`) upon acceptance. An invitation email is sent automatically — email delivery failure is non-fatal and the invitation is still created. **Invitation lifecycle:** Invitations expire after **7 days**. Use `GetPublicInvitationDetails` (unauthenticated) to inspect expiry before the invitee logs in. The invitee accepts via `AcceptOrganizationInvitation` or declines via `RejectOrganizationInvitation`. Cancel a pending invitation at any time with `CancelOrganizationInvitation`. All active members and pending invitations appear together in `ListOrganizationUsersAndInvitations`. The invitee can view all their incoming invitations via `ListOrganizationInvitationsForUser`. **Subscription plan limits:** The combined count of current members plus pending (unaccepted) invitations must not exceed the `MaxOrgMembers` limit for the organization's plan. Exceeding this limit returns a `ValidationError` (400). Check current usage with `GetOrganizationSubscriptionPlan`. **Response:** Returns only the `invitationId`. Retrieve full invitation details (email, role, `createdAt`, `acceptedAt`) via `GetOrganizationInvitation`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateOrganizationInvitationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateOrganizationInvitationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateOrganizationInvitationInput
 *   organizationId: "STRING_VALUE", // required
 *   email: "STRING_VALUE", // required
 *   role: "owner" || "member", // required
 * };
 * const command = new CreateOrganizationInvitationCommand(input);
 * const response = await client.send(command);
 * // { // CreateOrganizationInvitationOutput
 * //   invitationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateOrganizationInvitationCommandInput - {@link CreateOrganizationInvitationCommandInput}
 * @returns {@link CreateOrganizationInvitationCommandOutput}
 * @see {@link CreateOrganizationInvitationCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationInvitationCommandOutput} for command's `response` shape.
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
export class CreateOrganizationInvitationCommand extends $Command.classBuilder<CreateOrganizationInvitationCommandInput, CreateOrganizationInvitationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateOrganizationInvitation", {

  })
  .n("JustWorkflowItClient", "CreateOrganizationInvitationCommand")
  .f(void 0, void 0)
  .ser(se_CreateOrganizationInvitationCommand)
  .de(de_CreateOrganizationInvitationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateOrganizationInvitationInput;
      output: CreateOrganizationInvitationOutput;
  };
  sdk: {
      input: CreateOrganizationInvitationCommandInput;
      output: CreateOrganizationInvitationCommandOutput;
  };
};
}

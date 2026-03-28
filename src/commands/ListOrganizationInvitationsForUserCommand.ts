// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListOrganizationInvitationsForUserInput,
  ListOrganizationInvitationsForUserOutput,
} from "../models/models_0";
import {
  de_ListOrganizationInvitationsForUserCommand,
  se_ListOrganizationInvitationsForUserCommand,
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
 * The input for {@link ListOrganizationInvitationsForUserCommand}.
 */
export interface ListOrganizationInvitationsForUserCommandInput extends ListOrganizationInvitationsForUserInput {}
/**
 * @public
 *
 * The output of {@link ListOrganizationInvitationsForUserCommand}.
 */
export interface ListOrganizationInvitationsForUserCommandOutput extends ListOrganizationInvitationsForUserOutput, __MetadataBearer {}

/**
 * Lists all pending organization invitations addressed to the authenticated user's email, across all organizations. **Key behaviors:** - Invitations are matched by the user's **email address**, so invitations sent before account creation are automatically surfaced once the user signs up. - Returns all non-accepted invitations, including expired ones — check the `isExpired` flag to determine whether an invitation can still be acted upon. - No pagination — all matching invitations are returned in a single response. **Interplay with related endpoints:** - Call `AcceptOrganizationInvitation` or `RejectOrganizationInvitation` to act on an invitation returned here. - Use `GetPublicInvitationDetails` to fetch details about a specific invitation without authentication (e.g., for a pre-login landing page). - Organization admins can view all pending invitations for their org via `ListOrganizationUsersAndInvitations`, or cancel an invitation via `CancelOrganizationInvitation`. **Errors:** Returns `401 AuthenticationError` if unauthenticated. Returns an empty `invitations` list (not an error) if there are no pending invitations for the user.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListOrganizationInvitationsForUserCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListOrganizationInvitationsForUserCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = {};
 * const command = new ListOrganizationInvitationsForUserCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationInvitationsForUserOutput
 * //   invitations: [ // OrganizationInvitationSummaryList // required
 * //     { // OrganizationInvitationSummary
 * //       organizationId: "STRING_VALUE", // required
 * //       invitationId: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //       role: "owner" || "member", // required
 * //       invitedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOrganizationInvitationsForUserCommandInput - {@link ListOrganizationInvitationsForUserCommandInput}
 * @returns {@link ListOrganizationInvitationsForUserCommandOutput}
 * @see {@link ListOrganizationInvitationsForUserCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationInvitationsForUserCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
 *
 * @throws {@link NotFoundError} (client fault)
 *  The requested resource was not found. Verify the resource ID is correct and the resource exists in the specified organization.
 *
 * @throws {@link AuthenticationError} (client fault)
 *  Authentication failed due to missing, invalid, or expired credentials. Verify the authentication token is valid and not expired.
 *
 * @throws {@link AuthorizationError} (client fault)
 *  Authorization failed due to insufficient permissions. The authenticated user or API token does not have permission to perform this operation.
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
export class ListOrganizationInvitationsForUserCommand extends $Command.classBuilder<ListOrganizationInvitationsForUserCommandInput, ListOrganizationInvitationsForUserCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListOrganizationInvitationsForUser", {

  })
  .n("JustWorkflowItClient", "ListOrganizationInvitationsForUserCommand")
  .f(void 0, void 0)
  .ser(se_ListOrganizationInvitationsForUserCommand)
  .de(de_ListOrganizationInvitationsForUserCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: {};
      output: ListOrganizationInvitationsForUserOutput;
  };
  sdk: {
      input: ListOrganizationInvitationsForUserCommandInput;
      output: ListOrganizationInvitationsForUserCommandOutput;
  };
};
}

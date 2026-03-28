// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListOrganizationUsersAndInvitationsInput,
  ListOrganizationUsersAndInvitationsOutput,
} from "../models/models_0";
import {
  de_ListOrganizationUsersAndInvitationsCommand,
  se_ListOrganizationUsersAndInvitationsCommand,
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
 * The input for {@link ListOrganizationUsersAndInvitationsCommand}.
 */
export interface ListOrganizationUsersAndInvitationsCommandInput extends ListOrganizationUsersAndInvitationsInput {}
/**
 * @public
 *
 * The output of {@link ListOrganizationUsersAndInvitationsCommand}.
 */
export interface ListOrganizationUsersAndInvitationsCommandOutput extends ListOrganizationUsersAndInvitationsOutput, __MetadataBearer {}

/**
 * Returns a combined snapshot of all **current members** and **pending invitations** for an organization in a single call — the primary endpoint for rendering a membership management UI. **Response arrays:** - `users` — active members with `userId`, `email`, `role` (`owner` or `member`), and `joinedAt` - `invitations` — pending (unaccepted) invitations only with `invitationId`, `email`, `role`, and `invitedAt`; accepted, rejected, and cancelled invitations are excluded **No pagination** — all members and invitations are returned in one response. **Permission required:** `organization:read` — held by all organization members by default. **Membership lifecycle interplay:** Invitations created via `CreateOrganizationInvitation` appear in the `invitations` array until the invitee accepts (via `AcceptOrganizationInvitation`), rejects (via `RejectOrganizationInvitation`), or the sender cancels (via `CancelOrganizationInvitation`). On acceptance the user moves into the `users` array. Use `UpdateOrganizationMembership` to change a member's role or `RemoveOrganizationMembership` to remove them. To verify a specific user's effective permissions after a role change, call `GetMyPermissions`. **Errors:** Returns `NotFoundError` (404) if the organization does not exist, and `AuthorizationError` (403) if the caller lacks `organization:read`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListOrganizationUsersAndInvitationsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListOrganizationUsersAndInvitationsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListOrganizationUsersAndInvitationsInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new ListOrganizationUsersAndInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationUsersAndInvitationsOutput
 * //   users: [ // OrganizationUserSummaryList // required
 * //     { // OrganizationUserSummary
 * //       userId: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //       role: "owner" || "member", // required
 * //       joinedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
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
 * @param ListOrganizationUsersAndInvitationsCommandInput - {@link ListOrganizationUsersAndInvitationsCommandInput}
 * @returns {@link ListOrganizationUsersAndInvitationsCommandOutput}
 * @see {@link ListOrganizationUsersAndInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationUsersAndInvitationsCommandOutput} for command's `response` shape.
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
export class ListOrganizationUsersAndInvitationsCommand extends $Command.classBuilder<ListOrganizationUsersAndInvitationsCommandInput, ListOrganizationUsersAndInvitationsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListOrganizationUsersAndInvitations", {

  })
  .n("JustWorkflowItClient", "ListOrganizationUsersAndInvitationsCommand")
  .f(void 0, void 0)
  .ser(se_ListOrganizationUsersAndInvitationsCommand)
  .de(de_ListOrganizationUsersAndInvitationsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListOrganizationUsersAndInvitationsInput;
      output: ListOrganizationUsersAndInvitationsOutput;
  };
  sdk: {
      input: ListOrganizationUsersAndInvitationsCommandInput;
      output: ListOrganizationUsersAndInvitationsCommandOutput;
  };
};
}

// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { CancelOrganizationInvitationInput } from "../models/models_0";
import {
  de_CancelOrganizationInvitationCommand,
  se_CancelOrganizationInvitationCommand,
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
 * The input for {@link CancelOrganizationInvitationCommand}.
 */
export interface CancelOrganizationInvitationCommandInput extends CancelOrganizationInvitationInput {}
/**
 * @public
 *
 * The output of {@link CancelOrganizationInvitationCommand}.
 */
export interface CancelOrganizationInvitationCommandOutput extends __MetadataBearer {}

/**
 * Permanently cancels a pending organization invitation by deleting it, immediately invalidating the invitation link sent to the invitee. **Behavior:** - The invitation record is **permanently deleted** — it cannot be retrieved via `GetOrganizationInvitation` afterward - Any existing invitation link (emailed to the invitee) becomes immediately invalid; attempts to accept or reject it will return `NotFoundError` - This operation is idempotent: cancelling an already-cancelled (or never-existing) invitation returns `NotFoundError` - Only affects **pending** invitations; use `RemoveOrganizationMembership` to remove a user who has already accepted **Related endpoints:** - `CreateOrganizationInvitation` — create a new invitation after cancelling - `GetOrganizationInvitation` — inspect an invitation before cancelling - `ListOrganizationUsersAndInvitations` — view all pending invitations for the organization - `RejectOrganizationInvitation` — invitee-initiated decline (soft reject, preserves the record)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CancelOrganizationInvitationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CancelOrganizationInvitationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CancelOrganizationInvitationInput
 *   organizationId: "STRING_VALUE", // required
 *   invitationId: "STRING_VALUE", // required
 * };
 * const command = new CancelOrganizationInvitationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelOrganizationInvitationCommandInput - {@link CancelOrganizationInvitationCommandInput}
 * @returns {@link CancelOrganizationInvitationCommandOutput}
 * @see {@link CancelOrganizationInvitationCommandInput} for command's `input` shape.
 * @see {@link CancelOrganizationInvitationCommandOutput} for command's `response` shape.
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
export class CancelOrganizationInvitationCommand extends $Command.classBuilder<CancelOrganizationInvitationCommandInput, CancelOrganizationInvitationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CancelOrganizationInvitation", {

  })
  .n("JustWorkflowItClient", "CancelOrganizationInvitationCommand")
  .f(void 0, void 0)
  .ser(se_CancelOrganizationInvitationCommand)
  .de(de_CancelOrganizationInvitationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CancelOrganizationInvitationInput;
      output: {};
  };
  sdk: {
      input: CancelOrganizationInvitationCommandInput;
      output: CancelOrganizationInvitationCommandOutput;
  };
};
}

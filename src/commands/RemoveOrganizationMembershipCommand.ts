// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { RemoveOrganizationMembershipInput } from "../models/models_0";
import {
  de_RemoveOrganizationMembershipCommand,
  se_RemoveOrganizationMembershipCommand,
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
 * The input for {@link RemoveOrganizationMembershipCommand}.
 */
export interface RemoveOrganizationMembershipCommandInput extends RemoveOrganizationMembershipInput {}
/**
 * @public
 *
 * The output of {@link RemoveOrganizationMembershipCommand}.
 */
export interface RemoveOrganizationMembershipCommandOutput extends __MetadataBearer {}

/**
 * Permanently removes a user's membership from an organization, immediately revoking all access to organization resources including workflows, jobs, and API tokens. **Key behaviors:** - Removal is **atomic** — the membership is checked and deleted in a single database transaction. - **Last-owner guard:** If the target user holds the `owner` role and is the sole remaining owner, the request fails with `ValidationError` (400) and the message `'You cannot remove the last owner of the organization.'` Promote another member to `owner` via `UpdateOrganizationMembership` first, or demote this user to `member` before removing them. - Returns `NotFoundError` (404) if the specified `userId` is not a current member of the organization. - Access revocation is immediate — any subsequent requests made by the removed user against this organization will receive `AuthorizationError` (403). **Related operations:** - `UpdateOrganizationMembership` — change a member's role (`owner` ↔ `member`) without removing them - `ListOrganizationUsersAndInvitations` — verify the user no longer appears after removal - `CreateOrganizationInvitation` — re-invite the user if they were removed by mistake - `CancelOrganizationInvitation` — cancel a pending invitation instead (for users who have not yet accepted)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, RemoveOrganizationMembershipCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, RemoveOrganizationMembershipCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // RemoveOrganizationMembershipInput
 *   organizationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 * };
 * const command = new RemoveOrganizationMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveOrganizationMembershipCommandInput - {@link RemoveOrganizationMembershipCommandInput}
 * @returns {@link RemoveOrganizationMembershipCommandOutput}
 * @see {@link RemoveOrganizationMembershipCommandInput} for command's `input` shape.
 * @see {@link RemoveOrganizationMembershipCommandOutput} for command's `response` shape.
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
export class RemoveOrganizationMembershipCommand extends $Command.classBuilder<RemoveOrganizationMembershipCommandInput, RemoveOrganizationMembershipCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "RemoveOrganizationMembership", {

  })
  .n("JustWorkflowItClient", "RemoveOrganizationMembershipCommand")
  .f(void 0, void 0)
  .ser(se_RemoveOrganizationMembershipCommand)
  .de(de_RemoveOrganizationMembershipCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: RemoveOrganizationMembershipInput;
      output: {};
  };
  sdk: {
      input: RemoveOrganizationMembershipCommandInput;
      output: RemoveOrganizationMembershipCommandOutput;
  };
};
}

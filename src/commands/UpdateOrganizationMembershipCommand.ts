// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  UpdateOrganizationMembershipInput,
  UpdateOrganizationMembershipOutput,
} from "../models/models_0";
import {
  de_UpdateOrganizationMembershipCommand,
  se_UpdateOrganizationMembershipCommand,
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
 * The input for {@link UpdateOrganizationMembershipCommand}.
 */
export interface UpdateOrganizationMembershipCommandInput extends UpdateOrganizationMembershipInput {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationMembershipCommand}.
 */
export interface UpdateOrganizationMembershipCommandOutput extends UpdateOrganizationMembershipOutput, __MetadataBearer {}

/**
 * Updates the role of an existing organization member, immediately changing their permissions within the organization. **Request body:** `role` — the new role to assign. Valid values are `owner` and `member`. **Last-owner guard:** If the target user currently holds the `owner` role and they are the **sole remaining owner**, demoting them to any other role will fail with `ValidationError` (400) and the message `'You cannot demote the last owner of the organization.'` Promote another member to `owner` first via a second call to this operation before demoting the current sole owner. **Response:** Returns the updated `\{ organizationId, userId, role \}` on success (200). The change takes effect immediately — any subsequent requests by the affected user will reflect the new role's permissions. **Error conditions:** Returns `NotFoundError` (404) if `userId` is not a current member of the organization. Returns `ValidationError` (400) for last-owner demotion attempts. **Related operations:** - `ListOrganizationUsersAndInvitations` — verify the updated role or inspect all current members before making changes - `RemoveOrganizationMembership` — remove the member entirely instead of changing their role (also subject to the last-owner guard) - `GetMyPermissions` — check what permissions a given role grants in this organization - `CreateOrganizationInvitation` — invite a new member with a specific initial role
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UpdateOrganizationMembershipCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UpdateOrganizationMembershipCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UpdateOrganizationMembershipInput
 *   organizationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   role: "owner" || "member", // required
 * };
 * const command = new UpdateOrganizationMembershipCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOrganizationMembershipOutput
 * //   organizationId: "STRING_VALUE", // required
 * //   userId: "STRING_VALUE", // required
 * //   role: "owner" || "member", // required
 * // };
 *
 * ```
 *
 * @param UpdateOrganizationMembershipCommandInput - {@link UpdateOrganizationMembershipCommandInput}
 * @returns {@link UpdateOrganizationMembershipCommandOutput}
 * @see {@link UpdateOrganizationMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationMembershipCommandOutput} for command's `response` shape.
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
export class UpdateOrganizationMembershipCommand extends $Command.classBuilder<UpdateOrganizationMembershipCommandInput, UpdateOrganizationMembershipCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UpdateOrganizationMembership", {

  })
  .n("JustWorkflowItClient", "UpdateOrganizationMembershipCommand")
  .f(void 0, void 0)
  .ser(se_UpdateOrganizationMembershipCommand)
  .de(de_UpdateOrganizationMembershipCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UpdateOrganizationMembershipInput;
      output: UpdateOrganizationMembershipOutput;
  };
  sdk: {
      input: UpdateOrganizationMembershipCommandInput;
      output: UpdateOrganizationMembershipCommandOutput;
  };
};
}

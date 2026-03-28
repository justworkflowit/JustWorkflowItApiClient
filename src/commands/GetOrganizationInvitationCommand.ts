// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetOrganizationInvitationInput,
  GetOrganizationInvitationOutput,
} from "../models/models_0";
import {
  de_GetOrganizationInvitationCommand,
  se_GetOrganizationInvitationCommand,
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
 * The input for {@link GetOrganizationInvitationCommand}.
 */
export interface GetOrganizationInvitationCommandInput extends GetOrganizationInvitationInput {}
/**
 * @public
 *
 * The output of {@link GetOrganizationInvitationCommand}.
 */
export interface GetOrganizationInvitationCommandOutput extends GetOrganizationInvitationOutput, __MetadataBearer {}

/**
 * Retrieves details about a specific organization invitation, including the invitee email, assigned role, creation timestamp, and — if already accepted — the `acceptedAt` timestamp. **Related operations:** - Use `CreateOrganizationInvitation` to generate an invitation and obtain the `invitationId`. - Use `AcceptOrganizationInvitation` or `RejectOrganizationInvitation` to act on a pending invitation; `acceptedAt` will be populated after acceptance. - Use `CancelOrganizationInvitation` to revoke a pending invitation (returns 404 on subsequent reads). - Use `ListOrganizationUsersAndInvitations` to retrieve all pending invitations for an organization at once. - For unauthenticated pre-login inspection (e.g., invitation landing pages), use `GetPublicInvitationDetails` instead. **Error conditions:** Returns `404 Not Found` if the invitation does not exist or has been cancelled. Returns `401` if unauthenticated, `403` if the caller lacks read access to the organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetOrganizationInvitationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetOrganizationInvitationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetOrganizationInvitationInput
 *   organizationId: "STRING_VALUE", // required
 *   invitationId: "STRING_VALUE", // required
 * };
 * const command = new GetOrganizationInvitationCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationInvitationOutput
 * //   invitationId: "STRING_VALUE", // required
 * //   email: "STRING_VALUE", // required
 * //   role: "owner" || "member", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   acceptedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetOrganizationInvitationCommandInput - {@link GetOrganizationInvitationCommandInput}
 * @returns {@link GetOrganizationInvitationCommandOutput}
 * @see {@link GetOrganizationInvitationCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationInvitationCommandOutput} for command's `response` shape.
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
export class GetOrganizationInvitationCommand extends $Command.classBuilder<GetOrganizationInvitationCommandInput, GetOrganizationInvitationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetOrganizationInvitation", {

  })
  .n("JustWorkflowItClient", "GetOrganizationInvitationCommand")
  .f(void 0, void 0)
  .ser(se_GetOrganizationInvitationCommand)
  .de(de_GetOrganizationInvitationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetOrganizationInvitationInput;
      output: GetOrganizationInvitationOutput;
  };
  sdk: {
      input: GetOrganizationInvitationCommandInput;
      output: GetOrganizationInvitationCommandOutput;
  };
};
}

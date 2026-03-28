// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminListOrganizationMembersInput,
  AdminListOrganizationMembersOutput,
} from "../models/models_0";
import {
  de_AdminListOrganizationMembersCommand,
  se_AdminListOrganizationMembersCommand,
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
 * The input for {@link AdminListOrganizationMembersCommand}.
 */
export interface AdminListOrganizationMembersCommandInput extends AdminListOrganizationMembersInput {}
/**
 * @public
 *
 * The output of {@link AdminListOrganizationMembersCommand}.
 */
export interface AdminListOrganizationMembersCommandOutput extends AdminListOrganizationMembersOutput, __MetadataBearer {}

/**
 * Lists all members of an organization. Requires staff:read permission.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminListOrganizationMembersCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminListOrganizationMembersCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminListOrganizationMembersInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new AdminListOrganizationMembersCommand(input);
 * const response = await client.send(command);
 * // { // AdminListOrganizationMembersOutput
 * //   members: [ // AdminOrganizationMemberList // required
 * //     { // AdminOrganizationMember
 * //       userId: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       joinedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminListOrganizationMembersCommandInput - {@link AdminListOrganizationMembersCommandInput}
 * @returns {@link AdminListOrganizationMembersCommandOutput}
 * @see {@link AdminListOrganizationMembersCommandInput} for command's `input` shape.
 * @see {@link AdminListOrganizationMembersCommandOutput} for command's `response` shape.
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
export class AdminListOrganizationMembersCommand extends $Command.classBuilder<AdminListOrganizationMembersCommandInput, AdminListOrganizationMembersCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminListOrganizationMembers", {

  })
  .n("JustWorkflowItClient", "AdminListOrganizationMembersCommand")
  .f(void 0, void 0)
  .ser(se_AdminListOrganizationMembersCommand)
  .de(de_AdminListOrganizationMembersCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminListOrganizationMembersInput;
      output: AdminListOrganizationMembersOutput;
  };
  sdk: {
      input: AdminListOrganizationMembersCommandInput;
      output: AdminListOrganizationMembersCommandOutput;
  };
};
}

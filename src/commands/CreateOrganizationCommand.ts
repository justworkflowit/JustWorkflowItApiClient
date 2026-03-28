// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateOrganizationInput,
  CreateOrganizationOutput,
} from "../models/models_0";
import {
  de_CreateOrganizationCommand,
  se_CreateOrganizationCommand,
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
 * The input for {@link CreateOrganizationCommand}.
 */
export interface CreateOrganizationCommandInput extends CreateOrganizationInput {}
/**
 * @public
 *
 * The output of {@link CreateOrganizationCommand}.
 */
export interface CreateOrganizationCommandOutput extends CreateOrganizationOutput, __MetadataBearer {}

/**
 * Creates a new organization and enrolls the authenticated caller as its first **owner** with full administrative access to all permissions. **What happens on creation:** - The `key` field (URL-safe slug) is auto-generated from `name` if omitted. It is **immutable after creation** and must be globally unique. - The organization is provisioned on the **free subscription plan** automatically. Use `GetOrganizationSubscriptionPlan` to inspect current limits and usage. - A default **resource pool** (worker limit: 10, targeting all workflows) is created. Manage pools via `ListResourcePools` and `CreateResourcePool`. - The caller is assigned the built-in `owner` role, which holds every permission in the system. **Uniqueness constraints:** Both `name` and `key` must be globally unique. A `ValidationError` (400) is returned if either is already taken. **After creation:** Use the returned `organizationId` to register workflows (`RegisterWorkflow`), submit jobs (`SubmitJob`), invite teammates (`CreateOrganizationInvitation`), and manage API tokens (`CreateApiAuthToken`). The new organization appears immediately in `ListOrganizations`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateOrganizationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateOrganizationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateOrganizationInput
 *   name: "STRING_VALUE", // required
 *   key: "STRING_VALUE",
 *   displayName: "STRING_VALUE", // required
 * };
 * const command = new CreateOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // CreateOrganizationOutput
 * //   organizationId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateOrganizationCommandInput - {@link CreateOrganizationCommandInput}
 * @returns {@link CreateOrganizationCommandOutput}
 * @see {@link CreateOrganizationCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationCommandOutput} for command's `response` shape.
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
export class CreateOrganizationCommand extends $Command.classBuilder<CreateOrganizationCommandInput, CreateOrganizationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateOrganization", {

  })
  .n("JustWorkflowItClient", "CreateOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_CreateOrganizationCommand)
  .de(de_CreateOrganizationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateOrganizationInput;
      output: CreateOrganizationOutput;
  };
  sdk: {
      input: CreateOrganizationCommandInput;
      output: CreateOrganizationCommandOutput;
  };
};
}

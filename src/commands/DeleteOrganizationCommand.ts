// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import { DeleteOrganizationInput } from "../models/models_0";
import {
  de_DeleteOrganizationCommand,
  se_DeleteOrganizationCommand,
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
 * The input for {@link DeleteOrganizationCommand}.
 */
export interface DeleteOrganizationCommandInput extends DeleteOrganizationInput {}
/**
 * @public
 *
 * The output of {@link DeleteOrganizationCommand}.
 */
export interface DeleteOrganizationCommandOutput extends __MetadataBearer {}

/**
 * **Permanently and irreversibly deletes an organization** along with all of its associated resources via cascading deletion, including workflows, workflow versions, jobs, memberships, invitations, roles, resource pools, API tokens, marketplace listings, and billing data. **Permission required:** `organization:delete` — typically held only by organization owners. **What gets deleted (cascade):** - All workflows and their versions (`ListWorkflows`, `ListWorkflowVersions`) - All jobs and execution history (`ListJobs`, `GetWorkflowState`) - All memberships, pending invitations, and custom roles - All API auth tokens — any in-flight requests using those tokens will immediately receive `AuthorizationError` (403) - All marketplace listings published by this organization (`ListMyMarketplaceListings`) - All resource pools (`ListResourcePools`) **Before deleting:** Consider canceling active jobs via `CancelJob` and revoking API tokens via `RevokeApiAuthToken` to gracefully wind down in-flight work. Running jobs are terminated by the cascade, not gracefully stopped. **After deletion:** The organization will no longer appear in `ListOrganizations`. Returns `NotFoundError` (404) if the organization does not exist (the operation is idempotent — repeating it after a successful delete is safe). Returns `AuthorizationError` (403) if the caller lacks the `organization:delete` permission.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, DeleteOrganizationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, DeleteOrganizationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // DeleteOrganizationInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOrganizationCommandInput - {@link DeleteOrganizationCommandInput}
 * @returns {@link DeleteOrganizationCommandOutput}
 * @see {@link DeleteOrganizationCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationCommandOutput} for command's `response` shape.
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
export class DeleteOrganizationCommand extends $Command.classBuilder<DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "DeleteOrganization", {

  })
  .n("JustWorkflowItClient", "DeleteOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOrganizationCommand)
  .de(de_DeleteOrganizationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: DeleteOrganizationInput;
      output: {};
  };
  sdk: {
      input: DeleteOrganizationCommandInput;
      output: DeleteOrganizationCommandOutput;
  };
};
}

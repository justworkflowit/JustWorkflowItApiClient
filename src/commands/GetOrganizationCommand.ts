// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetOrganizationInput,
  GetOrganizationOutput,
} from "../models/models_0";
import {
  de_GetOrganizationCommand,
  se_GetOrganizationCommand,
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
 * The input for {@link GetOrganizationCommand}.
 */
export interface GetOrganizationCommandInput extends GetOrganizationInput {}
/**
 * @public
 *
 * The output of {@link GetOrganizationCommand}.
 */
export interface GetOrganizationCommandOutput extends GetOrganizationOutput, __MetadataBearer {}

/**
 * Retrieves the full details for a single organization by its ID, returning `organizationId`, `name`, `key`, `displayName`, `createdAt`, and `updatedAt`. **Permission required:** `organization:read` — held by all organization members by default. **Response fields:** - `key` — the immutable, URL-safe slug assigned at creation (e.g. `my-org`); cannot be changed after creation - `displayName` — the human-readable label; update it via `UpdateOrganization` **Related operations:** - `ListOrganizations` — returns the same fields for all organizations the caller has access to - `AdminGetOrganization` — staff-only equivalent with additional internal details - `ListWorkflows`, `ListJobs`, `ListOrganizationUsersAndInvitations` — enumerate resources belonging to this organization - `GetOrganizationSubscriptionPlan` — check the organization's active plan, usage, and limits Returns `NotFoundError` (404) if the organization does not exist or the caller is not a member, and `AuthorizationError` (403) if the caller lacks `organization:read`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetOrganizationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetOrganizationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetOrganizationInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new GetOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationOutput
 * //   organizationId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   marketplaceAllowlistRequired: true || false, // required
 * // };
 *
 * ```
 *
 * @param GetOrganizationCommandInput - {@link GetOrganizationCommandInput}
 * @returns {@link GetOrganizationCommandOutput}
 * @see {@link GetOrganizationCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationCommandOutput} for command's `response` shape.
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
export class GetOrganizationCommand extends $Command.classBuilder<GetOrganizationCommandInput, GetOrganizationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetOrganization", {

  })
  .n("JustWorkflowItClient", "GetOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_GetOrganizationCommand)
  .de(de_GetOrganizationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetOrganizationInput;
      output: GetOrganizationOutput;
  };
  sdk: {
      input: GetOrganizationCommandInput;
      output: GetOrganizationCommandOutput;
  };
};
}

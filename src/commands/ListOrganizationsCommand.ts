// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListOrganizationsInput,
  ListOrganizationsOutput,
} from "../models/models_0";
import {
  de_ListOrganizationsCommand,
  se_ListOrganizationsCommand,
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
 * The input for {@link ListOrganizationsCommand}.
 */
export interface ListOrganizationsCommandInput extends ListOrganizationsInput {}
/**
 * @public
 *
 * The output of {@link ListOrganizationsCommand}.
 */
export interface ListOrganizationsCommandOutput extends ListOrganizationsOutput, __MetadataBearer {}

/**
 * Lists all organizations the authenticated user has access to, scoped strictly to those where the caller holds the `organization:read` permission. Each entry in the returned `organizations` array includes the `organizationId`, `name`, `key`, `displayName`, and `createdAt` timestamp. The `key` field is the immutable, URL-safe slug assigned at creation. **Key behaviors:** - Returns an empty array (not a 404) if the user has no accessible organizations. - Results are not paginated — all accessible organizations are returned in a single response. - Scoped to the caller only. To list all organizations system-wide, use `AdminListOrganizations` (requires `staff:read`). - Use the returned `organizationId` values as the path parameter for organization-scoped endpoints such as `GetOrganization`, `ListWorkflows`, `ListJobs`, and `ListOrganizationUsersAndInvitations`. **Permissions required:** `organization:read` on at least one organization (evaluated per-org from the caller's token).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListOrganizationsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListOrganizationsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = {};
 * const command = new ListOrganizationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationsOutput
 * //   organizations: [ // OrganizationList // required
 * //     { // OrganizationSummary
 * //       organizationId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       marketplaceAllowlistRequired: true || false, // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOrganizationsCommandInput - {@link ListOrganizationsCommandInput}
 * @returns {@link ListOrganizationsCommandOutput}
 * @see {@link ListOrganizationsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationsCommandOutput} for command's `response` shape.
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
export class ListOrganizationsCommand extends $Command.classBuilder<ListOrganizationsCommandInput, ListOrganizationsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListOrganizations", {

  })
  .n("JustWorkflowItClient", "ListOrganizationsCommand")
  .f(void 0, void 0)
  .ser(se_ListOrganizationsCommand)
  .de(de_ListOrganizationsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: {};
      output: ListOrganizationsOutput;
  };
  sdk: {
      input: ListOrganizationsCommandInput;
      output: ListOrganizationsCommandOutput;
  };
};
}

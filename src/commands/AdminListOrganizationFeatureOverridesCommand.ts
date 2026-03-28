// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminListOrganizationFeatureOverridesInput,
  AdminListOrganizationFeatureOverridesOutput,
} from "../models/models_0";
import {
  de_AdminListOrganizationFeatureOverridesCommand,
  se_AdminListOrganizationFeatureOverridesCommand,
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
 * The input for {@link AdminListOrganizationFeatureOverridesCommand}.
 */
export interface AdminListOrganizationFeatureOverridesCommandInput extends AdminListOrganizationFeatureOverridesInput {}
/**
 * @public
 *
 * The output of {@link AdminListOrganizationFeatureOverridesCommand}.
 */
export interface AdminListOrganizationFeatureOverridesCommandOutput extends AdminListOrganizationFeatureOverridesOutput, __MetadataBearer {}

/**
 * Lists all per-organization feature overrides that supersede the values defined in the organization's subscription plan. Each override in the response includes both the `overrideValue` (the active value for this org) and `planValue` (the base value from the assigned plan), making it easy to audit what has been customized. An optional `reason` field records why the override was applied. **Requires `staff:read` permission** — this is an internal admin endpoint. **Related operations:** - Use `AdminSetOrganizationFeatureOverride` to create or update an individual override - Use `AdminDeleteOrganizationFeatureOverride` to remove an override, reverting the feature back to its plan-level value - Use `AdminGetSubscriptionPlan` to see all features (including `ADMIN`-visibility ones) defined on the org's base plan - Use `GetOrganizationSubscriptionPlan` to see the effective resolved values the organization actually receives Returns `404` if the organization does not exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminListOrganizationFeatureOverridesCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminListOrganizationFeatureOverridesCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminListOrganizationFeatureOverridesInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new AdminListOrganizationFeatureOverridesCommand(input);
 * const response = await client.send(command);
 * // { // AdminListOrganizationFeatureOverridesOutput
 * //   overrides: [ // OrganizationFeatureOverrideList // required
 * //     { // OrganizationFeatureOverrideDetail
 * //       featureKey: "STRING_VALUE", // required
 * //       featureLabel: "STRING_VALUE", // required
 * //       overrideValue: "STRING_VALUE", // required
 * //       planValue: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminListOrganizationFeatureOverridesCommandInput - {@link AdminListOrganizationFeatureOverridesCommandInput}
 * @returns {@link AdminListOrganizationFeatureOverridesCommandOutput}
 * @see {@link AdminListOrganizationFeatureOverridesCommandInput} for command's `input` shape.
 * @see {@link AdminListOrganizationFeatureOverridesCommandOutput} for command's `response` shape.
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
export class AdminListOrganizationFeatureOverridesCommand extends $Command.classBuilder<AdminListOrganizationFeatureOverridesCommandInput, AdminListOrganizationFeatureOverridesCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminListOrganizationFeatureOverrides", {

  })
  .n("JustWorkflowItClient", "AdminListOrganizationFeatureOverridesCommand")
  .f(void 0, void 0)
  .ser(se_AdminListOrganizationFeatureOverridesCommand)
  .de(de_AdminListOrganizationFeatureOverridesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminListOrganizationFeatureOverridesInput;
      output: AdminListOrganizationFeatureOverridesOutput;
  };
  sdk: {
      input: AdminListOrganizationFeatureOverridesCommandInput;
      output: AdminListOrganizationFeatureOverridesCommandOutput;
  };
};
}

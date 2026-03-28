// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminDeleteOrganizationFeatureOverrideInput,
  AdminDeleteOrganizationFeatureOverrideOutput,
} from "../models/models_0";
import {
  de_AdminDeleteOrganizationFeatureOverrideCommand,
  se_AdminDeleteOrganizationFeatureOverrideCommand,
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
 * The input for {@link AdminDeleteOrganizationFeatureOverrideCommand}.
 */
export interface AdminDeleteOrganizationFeatureOverrideCommandInput extends AdminDeleteOrganizationFeatureOverrideInput {}
/**
 * @public
 *
 * The output of {@link AdminDeleteOrganizationFeatureOverrideCommand}.
 */
export interface AdminDeleteOrganizationFeatureOverrideCommandOutput extends AdminDeleteOrganizationFeatureOverrideOutput, __MetadataBearer {}

/**
 * Removes a per-organization feature override, immediately reverting that feature to its plan-level value for the organization. **Behavior:** - The override record is permanently deleted — the feature value falls back to whatever the organization's assigned subscription plan defines. - Returns `404` if the `featureKey` does not correspond to a known subscription feature, or if no override exists for it on this organization. - The operation is idempotent: if the override was already absent, the request will still fail with `404` rather than silently succeed. **Requires `staff:write` permission** — this is an internal admin-only endpoint. **Related operations:** - Use `AdminSetOrganizationFeatureOverride` (PUT) to create or update an override for a feature key. - Use `AdminListOrganizationFeatureOverrides` to audit all active overrides for the organization, including the `planValue` each overridden feature would fall back to. - Use `GetOrganizationSubscriptionPlan` to verify the resolved effective value after deletion. - Use `AdminUpdateOrganizationSubscriptionPlan` to change the base plan rather than patching individual features.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminDeleteOrganizationFeatureOverrideCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminDeleteOrganizationFeatureOverrideCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminDeleteOrganizationFeatureOverrideInput
 *   organizationId: "STRING_VALUE", // required
 *   featureKey: "STRING_VALUE", // required
 * };
 * const command = new AdminDeleteOrganizationFeatureOverrideCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminDeleteOrganizationFeatureOverrideCommandInput - {@link AdminDeleteOrganizationFeatureOverrideCommandInput}
 * @returns {@link AdminDeleteOrganizationFeatureOverrideCommandOutput}
 * @see {@link AdminDeleteOrganizationFeatureOverrideCommandInput} for command's `input` shape.
 * @see {@link AdminDeleteOrganizationFeatureOverrideCommandOutput} for command's `response` shape.
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
export class AdminDeleteOrganizationFeatureOverrideCommand extends $Command.classBuilder<AdminDeleteOrganizationFeatureOverrideCommandInput, AdminDeleteOrganizationFeatureOverrideCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminDeleteOrganizationFeatureOverride", {

  })
  .n("JustWorkflowItClient", "AdminDeleteOrganizationFeatureOverrideCommand")
  .f(void 0, void 0)
  .ser(se_AdminDeleteOrganizationFeatureOverrideCommand)
  .de(de_AdminDeleteOrganizationFeatureOverrideCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminDeleteOrganizationFeatureOverrideInput;
      output: {};
  };
  sdk: {
      input: AdminDeleteOrganizationFeatureOverrideCommandInput;
      output: AdminDeleteOrganizationFeatureOverrideCommandOutput;
  };
};
}

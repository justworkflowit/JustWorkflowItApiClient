// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminSetOrganizationFeatureOverrideInput,
  AdminSetOrganizationFeatureOverrideOutput,
} from "../models/models_0";
import {
  de_AdminSetOrganizationFeatureOverrideCommand,
  se_AdminSetOrganizationFeatureOverrideCommand,
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
 * The input for {@link AdminSetOrganizationFeatureOverrideCommand}.
 */
export interface AdminSetOrganizationFeatureOverrideCommandInput extends AdminSetOrganizationFeatureOverrideInput {}
/**
 * @public
 *
 * The output of {@link AdminSetOrganizationFeatureOverrideCommand}.
 */
export interface AdminSetOrganizationFeatureOverrideCommandOutput extends AdminSetOrganizationFeatureOverrideOutput, __MetadataBearer {}

/**
 * Creates or replaces a per-organization feature override, giving a specific organization a different value for a subscription feature than its assigned plan provides.
 *
 * **Behavior:**
 * - This is an **upsert** — if an override already exists for `featureKey` on this organization, its `value` and `reason` are replaced atomically; otherwise a new override record is created.
 * - The optional `reason` field records a human-readable explanation for the override (e.g., 'Enterprise trial', 'Support exception'). If omitted on an update, the previous reason is cleared.
 * - Returns `404` if the `featureKey` does not correspond to a known subscription feature, or if the organization does not exist.
 * - Feature overrides take precedence over the plan-level value immediately — the organization sees the overridden value as soon as the request succeeds.
 *
 * **Requires `staff:write` permission** — this is an internal admin-only endpoint.
 *
 * **Related operations:**
 * - Use `AdminListOrganizationFeatureOverrides` to audit all active overrides for the organization, including both the `overrideValue` and the `planValue` each feature would fall back to.
 * - Use `AdminDeleteOrganizationFeatureOverride` to remove an override, reverting the feature to its plan-level value.
 * - Use `AdminUpdateOrganizationSubscriptionPlan` to change the organization's base plan instead of patching individual features.
 * - Use `GetOrganizationSubscriptionPlan` (non-admin) to verify the effective resolved values the organization receives.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminSetOrganizationFeatureOverrideCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminSetOrganizationFeatureOverrideCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminSetOrganizationFeatureOverrideInput
 *   organizationId: "STRING_VALUE", // required
 *   featureKey: "STRING_VALUE", // required
 *   value: "STRING_VALUE", // required
 *   reason: "STRING_VALUE",
 * };
 * const command = new AdminSetOrganizationFeatureOverrideCommand(input);
 * const response = await client.send(command);
 * // { // AdminSetOrganizationFeatureOverrideOutput
 * //   featureKey: "STRING_VALUE", // required
 * //   value: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AdminSetOrganizationFeatureOverrideCommandInput - {@link AdminSetOrganizationFeatureOverrideCommandInput}
 * @returns {@link AdminSetOrganizationFeatureOverrideCommandOutput}
 * @see {@link AdminSetOrganizationFeatureOverrideCommandInput} for command's `input` shape.
 * @see {@link AdminSetOrganizationFeatureOverrideCommandOutput} for command's `response` shape.
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
export class AdminSetOrganizationFeatureOverrideCommand extends $Command.classBuilder<AdminSetOrganizationFeatureOverrideCommandInput, AdminSetOrganizationFeatureOverrideCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminSetOrganizationFeatureOverride", {

  })
  .n("JustWorkflowItClient", "AdminSetOrganizationFeatureOverrideCommand")
  .f(void 0, void 0)
  .ser(se_AdminSetOrganizationFeatureOverrideCommand)
  .de(de_AdminSetOrganizationFeatureOverrideCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminSetOrganizationFeatureOverrideInput;
      output: AdminSetOrganizationFeatureOverrideOutput;
  };
  sdk: {
      input: AdminSetOrganizationFeatureOverrideCommandInput;
      output: AdminSetOrganizationFeatureOverrideCommandOutput;
  };
};
}

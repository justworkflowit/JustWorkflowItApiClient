// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  AdminGetSubscriptionPlanInput,
  AdminGetSubscriptionPlanOutput,
} from "../models/models_0";
import {
  de_AdminGetSubscriptionPlanCommand,
  se_AdminGetSubscriptionPlanCommand,
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
 * The input for {@link AdminGetSubscriptionPlanCommand}.
 */
export interface AdminGetSubscriptionPlanCommandInput extends AdminGetSubscriptionPlanInput {}
/**
 * @public
 *
 * The output of {@link AdminGetSubscriptionPlanCommand}.
 */
export interface AdminGetSubscriptionPlanCommandOutput extends AdminGetSubscriptionPlanOutput, __MetadataBearer {}

/**
 * Retrieves the complete admin-level record for a single subscription plan, identified by `planId`.
 *
 * **Requires `staff:read` permission** — this is an internal admin-only endpoint not accessible to regular organization users.
 *
 * **Response includes fields not available via the public `GetSubscriptionPlan` endpoint:**
 * - `features` — all feature entries regardless of `visibility`, including `ADMIN`-only features hidden from the public API. Each feature entry includes a `visibility` field.
 * - `organizations` — the full list of organizations currently enrolled in this plan (`organizationId`, `name`, `key`, `displayName`). A non-empty list means the plan cannot be deleted.
 * - `stripeProductId` / `stripePriceId` — the linked Stripe identifiers for the plan.
 * - `monthlyPriceUsd`, `createdAt`, `updatedAt` — pricing and audit timestamps.
 *
 * **Error conditions:** Returns `404 Not Found` if `planId` does not match any existing plan.
 *
 * **Related operations:**
 * - `AdminListSubscriptionPlans` — lightweight summary listing with `featureCount` and `organizationCount`; use to browse plans before drilling into one.
 * - `AdminUpdateSubscriptionPlan` — update this plan's name, pricing, or features (features are fully replaced when provided).
 * - `AdminDeleteSubscriptionPlan` — fails with `409 Conflict` if this plan's `organizations` list is non-empty; check here first before attempting deletion.
 * - `AdminUpdateOrganizationSubscriptionPlan` — reassign an enrolled organization to a different plan.
 * - `AdminListOrganizationFeatureOverrides` — per-org feature overrides that take precedence over the values returned here.
 * - `GetOrganizationSubscriptionPlan` (non-admin) — resolves the effective feature values an organization actually receives, factoring in overrides.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, AdminGetSubscriptionPlanCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, AdminGetSubscriptionPlanCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // AdminGetSubscriptionPlanInput
 *   planId: "STRING_VALUE", // required
 * };
 * const command = new AdminGetSubscriptionPlanCommand(input);
 * const response = await client.send(command);
 * // { // AdminGetSubscriptionPlanOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   monthlyPriceUsd: Number("double"), // required
 * //   stripeProductId: "STRING_VALUE",
 * //   stripePriceId: "STRING_VALUE",
 * //   features: [ // AdminSubscriptionFeatureList // required
 * //     { // AdminSubscriptionFeature
 * //       key: "STRING_VALUE", // required
 * //       label: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       value: "STRING_VALUE", // required
 * //       visibility: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   organizations: [ // AdminPlanOrganizationList // required
 * //     { // AdminPlanOrganization
 * //       organizationId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param AdminGetSubscriptionPlanCommandInput - {@link AdminGetSubscriptionPlanCommandInput}
 * @returns {@link AdminGetSubscriptionPlanCommandOutput}
 * @see {@link AdminGetSubscriptionPlanCommandInput} for command's `input` shape.
 * @see {@link AdminGetSubscriptionPlanCommandOutput} for command's `response` shape.
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
export class AdminGetSubscriptionPlanCommand extends $Command.classBuilder<AdminGetSubscriptionPlanCommandInput, AdminGetSubscriptionPlanCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "AdminGetSubscriptionPlan", {

  })
  .n("JustWorkflowItClient", "AdminGetSubscriptionPlanCommand")
  .f(void 0, void 0)
  .ser(se_AdminGetSubscriptionPlanCommand)
  .de(de_AdminGetSubscriptionPlanCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: AdminGetSubscriptionPlanInput;
      output: AdminGetSubscriptionPlanOutput;
  };
  sdk: {
      input: AdminGetSubscriptionPlanCommandInput;
      output: AdminGetSubscriptionPlanCommandOutput;
  };
};
}

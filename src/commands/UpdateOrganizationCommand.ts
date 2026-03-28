// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  UpdateOrganizationInput,
  UpdateOrganizationOutput,
} from "../models/models_0";
import {
  de_UpdateOrganizationCommand,
  se_UpdateOrganizationCommand,
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
 * The input for {@link UpdateOrganizationCommand}.
 */
export interface UpdateOrganizationCommandInput extends UpdateOrganizationInput {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationCommand}.
 */
export interface UpdateOrganizationCommandOutput extends UpdateOrganizationOutput, __MetadataBearer {}

/**
 * Updates the `displayName` of an organization — the only mutable field after creation. `name` and `key` are immutable and cannot be changed via this endpoint. **Permission required:** `organization:update` — typically held by organization owners. **What can be changed:** - `displayName` — the human-readable label shown in the UI (required, 3–50 characters) **What cannot be changed here:** - `name` — set at creation, immutable - `key` — the URL-safe slug, set at creation, globally unique and immutable **Response:** Returns the full updated organization summary (same shape as `GetOrganization`), including the refreshed `updatedAt` timestamp. **Related operations:** - `GetOrganization` — read the current organization details before or after updating - `CreateOrganization` — where `name` and `key` are set for the first time - `AdminUpdateOrganizationSubscriptionPlan` — to change the subscription plan (admin-only) Returns `NotFoundError` (404) if the organization does not exist, and `AuthorizationError` (403) if the caller lacks `organization:update`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, UpdateOrganizationCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, UpdateOrganizationCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // UpdateOrganizationInput
 *   organizationId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE", // required
 * };
 * const command = new UpdateOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOrganizationOutput
 * //   organizationId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateOrganizationCommandInput - {@link UpdateOrganizationCommandInput}
 * @returns {@link UpdateOrganizationCommandOutput}
 * @see {@link UpdateOrganizationCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationCommandOutput} for command's `response` shape.
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
export class UpdateOrganizationCommand extends $Command.classBuilder<UpdateOrganizationCommandInput, UpdateOrganizationCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "UpdateOrganization", {

  })
  .n("JustWorkflowItClient", "UpdateOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateOrganizationCommand)
  .de(de_UpdateOrganizationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: UpdateOrganizationInput;
      output: UpdateOrganizationOutput;
  };
  sdk: {
      input: UpdateOrganizationCommandInput;
      output: UpdateOrganizationCommandOutput;
  };
};
}

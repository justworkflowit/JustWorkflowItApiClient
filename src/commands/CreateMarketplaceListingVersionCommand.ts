// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateMarketplaceListingVersionInput,
  CreateMarketplaceListingVersionOutput,
} from "../models/models_0";
import {
  de_CreateMarketplaceListingVersionCommand,
  se_CreateMarketplaceListingVersionCommand,
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
 * The input for {@link CreateMarketplaceListingVersionCommand}.
 */
export interface CreateMarketplaceListingVersionCommandInput extends CreateMarketplaceListingVersionInput {}
/**
 * @public
 *
 * The output of {@link CreateMarketplaceListingVersionCommand}.
 */
export interface CreateMarketplaceListingVersionCommandOutput extends CreateMarketplaceListingVersionOutput, __MetadataBearer {}

/**
 * Creates a new version of an existing marketplace listing by pointing it to a specified workflow version, auto-assigning the next monotonically-increasing `versionNumber` — the primary way publishers roll out updated workflows to consumers without changing the listing identity.
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Request body:**
 * - `workflowVersionId` *(required)* — must belong to the same organization as the listing; returns `404 Not Found` if not found or `422 Validation` if it belongs to a different organization
 *
 * **Response:** Returns `versionId` (UUID) and `versionNumber` (integer) for the newly created version.
 *
 * **Publisher version lifecycle:**
 * 1. Register a new workflow version: `RegisterWorkflowVersion`
 * 2. Call this endpoint to create a new listing version
 * 3. Inspect all versions: `ListMarketplaceListingVersions`
 * 4. Fetch details for a specific version: `GetMarketplaceListingVersion`
 *
 * **Note:** The first version (version 1) is created automatically by `PublishWorkflowToMarketplace`. Use this endpoint only for subsequent versions.
 *
 * **Errors:** `403 Forbidden` if missing `marketplace:publish` permission; `404 Not Found` if the listing or workflow version does not exist; `422 Validation` if the workflow version belongs to a different organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateMarketplaceListingVersionCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateMarketplaceListingVersionCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateMarketplaceListingVersionInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   workflowVersionId: "STRING_VALUE", // required
 * };
 * const command = new CreateMarketplaceListingVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateMarketplaceListingVersionOutput
 * //   versionId: "STRING_VALUE", // required
 * //   versionNumber: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param CreateMarketplaceListingVersionCommandInput - {@link CreateMarketplaceListingVersionCommandInput}
 * @returns {@link CreateMarketplaceListingVersionCommandOutput}
 * @see {@link CreateMarketplaceListingVersionCommandInput} for command's `input` shape.
 * @see {@link CreateMarketplaceListingVersionCommandOutput} for command's `response` shape.
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
export class CreateMarketplaceListingVersionCommand extends $Command.classBuilder<CreateMarketplaceListingVersionCommandInput, CreateMarketplaceListingVersionCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateMarketplaceListingVersion", {

  })
  .n("JustWorkflowItClient", "CreateMarketplaceListingVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateMarketplaceListingVersionCommand)
  .de(de_CreateMarketplaceListingVersionCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateMarketplaceListingVersionInput;
      output: CreateMarketplaceListingVersionOutput;
  };
  sdk: {
      input: CreateMarketplaceListingVersionCommandInput;
      output: CreateMarketplaceListingVersionCommandOutput;
  };
};
}

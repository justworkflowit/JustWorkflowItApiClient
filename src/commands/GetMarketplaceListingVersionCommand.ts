// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetMarketplaceListingVersionInput,
  GetMarketplaceListingVersionOutput,
} from "../models/models_0";
import {
  de_GetMarketplaceListingVersionCommand,
  se_GetMarketplaceListingVersionCommand,
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
 * The input for {@link GetMarketplaceListingVersionCommand}.
 */
export interface GetMarketplaceListingVersionCommandInput extends GetMarketplaceListingVersionInput {}
/**
 * @public
 *
 * The output of {@link GetMarketplaceListingVersionCommand}.
 */
export interface GetMarketplaceListingVersionCommandOutput extends GetMarketplaceListingVersionOutput, __MetadataBearer {}

/**
 * Retrieves the full details of a single version of a publisher's marketplace listing by `versionId` — the single-item counterpart to `ListMarketplaceListingVersions`.
 *
 * **Permission required:** `marketplace:publish`
 *
 * **Response highlights:**
 * - `versionNumber` — monotonically increasing integer identifying this version within the listing
 * - `workflowVersionId`, `workflowVersionNumber`, `workflowName`, `workflowId` — the underlying workflow version this listing version points to
 * - `inputSchema` — JSON Schema string for the workflow input, or `null` if none is defined; useful for inspecting what consumers must supply when calling `SubmitJob`
 *
 * **Related endpoints:**
 * - `ListMarketplaceListingVersions` — lists all versions; use it to discover `versionId` values, then call this endpoint for full details on a specific one
 * - `CreateMarketplaceListingVersion` — use the `versionId` from the creation response to confirm full details of the newly created version here
 *
 * **Errors:** `404 Not Found` if the listing or version does not exist or belongs to a different organization; `403 Forbidden` if missing `marketplace:publish` permission.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetMarketplaceListingVersionCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetMarketplaceListingVersionCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetMarketplaceListingVersionInput
 *   organizationId: "STRING_VALUE", // required
 *   listingId: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE", // required
 * };
 * const command = new GetMarketplaceListingVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetMarketplaceListingVersionOutput
 * //   versionId: "STRING_VALUE", // required
 * //   versionNumber: Number("int"), // required
 * //   workflowVersionId: "STRING_VALUE", // required
 * //   workflowVersionNumber: Number("int"), // required
 * //   workflowName: "STRING_VALUE", // required
 * //   workflowId: "STRING_VALUE", // required
 * //   inputSchema: "STRING_VALUE",
 * //   outputSchema: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetMarketplaceListingVersionCommandInput - {@link GetMarketplaceListingVersionCommandInput}
 * @returns {@link GetMarketplaceListingVersionCommandOutput}
 * @see {@link GetMarketplaceListingVersionCommandInput} for command's `input` shape.
 * @see {@link GetMarketplaceListingVersionCommandOutput} for command's `response` shape.
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
export class GetMarketplaceListingVersionCommand extends $Command.classBuilder<GetMarketplaceListingVersionCommandInput, GetMarketplaceListingVersionCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetMarketplaceListingVersion", {

  })
  .n("JustWorkflowItClient", "GetMarketplaceListingVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetMarketplaceListingVersionCommand)
  .de(de_GetMarketplaceListingVersionCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetMarketplaceListingVersionInput;
      output: GetMarketplaceListingVersionOutput;
  };
  sdk: {
      input: GetMarketplaceListingVersionCommandInput;
      output: GetMarketplaceListingVersionCommandOutput;
  };
};
}

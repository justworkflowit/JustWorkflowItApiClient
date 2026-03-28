// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  GetMarketplaceListingInput,
  GetMarketplaceListingOutput,
} from "../models/models_0";
import {
  de_GetMarketplaceListingCommand,
  se_GetMarketplaceListingCommand,
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
 * The input for {@link GetMarketplaceListingCommand}.
 */
export interface GetMarketplaceListingCommandInput extends GetMarketplaceListingInput {}
/**
 * @public
 *
 * The output of {@link GetMarketplaceListingCommand}.
 */
export interface GetMarketplaceListingCommandOutput extends GetMarketplaceListingOutput, __MetadataBearer {}

/**
 * Retrieves full details for a single marketplace listing by ID, including its latest version metadata and workflow input schema preview. No authentication required — this endpoint is fully public. **Visibility rules:** - `PUBLIC` listings are always accessible. - `PRIVATE` listings return `404 Not Found` for unauthenticated callers (no organization context is passed). To access private listings, use an authenticated endpoint or ensure your organization has been granted access via `GrantMarketplaceAccess`. - Only `PUBLISHED` listings are visible; `DRAFT` and `ARCHIVED` listings return `404 Not Found`. **Response highlights:** - `latestVersion` — the latest version details including `inputSchema` (JSON Schema string, nullable if the workflow has no defined input), `workflowName`, and `workflowVersionNumber`. - `billingModel`, `costPerUnit`, `costPerInvocation`, `costPerMonth` — pricing details consumers should review before allowlisting. - `rateLimitMaxRequests` / `rateLimitWindowValue` / `rateLimitWindowUnit` — per-consumer rate limit enforced when submitting jobs. **Typical consumer workflow:** 1. Discover listings via `ListMarketplaceListings` (supports search and pagination). 2. Call this endpoint to inspect the latest version's `inputSchema` and billing model. 3. Call `AllowlistMarketplaceListing` to approve the listing for your organization. 4. Use `SubmitJob` with the listing's workflow to execute it. **Errors:** `404 Not Found` if the listing does not exist, is not `PUBLISHED`, or is `PRIVATE` and no access has been granted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, GetMarketplaceListingCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, GetMarketplaceListingCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // GetMarketplaceListingInput
 *   listingId: "STRING_VALUE", // required
 * };
 * const command = new GetMarketplaceListingCommand(input);
 * const response = await client.send(command);
 * // { // GetMarketplaceListingOutput
 * //   listingId: "STRING_VALUE", // required
 * //   key: "STRING_VALUE", // required
 * //   title: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   visibility: "PUBLIC" || "PRIVATE", // required
 * //   status: "DRAFT" || "PUBLISHED" || "ARCHIVED", // required
 * //   organizationId: "STRING_VALUE", // required
 * //   organizationName: "STRING_VALUE", // required
 * //   organizationKey: "STRING_VALUE", // required
 * //   latestVersion: { // MarketplaceListingVersionSummary
 * //     versionId: "STRING_VALUE", // required
 * //     versionNumber: Number("int"), // required
 * //     workflowVersionId: "STRING_VALUE", // required
 * //     workflowVersionNumber: Number("int"), // required
 * //     workflowName: "STRING_VALUE", // required
 * //     workflowId: "STRING_VALUE", // required
 * //     inputSchema: "STRING_VALUE",
 * //     outputSchema: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   totalVersions: Number("int"), // required
 * //   billingModel: "FREE" || "PER_TRANSACTION_UNIT" || "PER_INVOCATION" || "PER_MONTH", // required
 * //   costPerUnit: Number("float"),
 * //   costPerInvocation: Number("float"),
 * //   costPerMonth: Number("float"),
 * //   rateLimitMaxRequests: Number("int"), // required
 * //   rateLimitWindowValue: Number("int"), // required
 * //   rateLimitWindowUnit: "MINUTES" || "HOURS", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetMarketplaceListingCommandInput - {@link GetMarketplaceListingCommandInput}
 * @returns {@link GetMarketplaceListingCommandOutput}
 * @see {@link GetMarketplaceListingCommandInput} for command's `input` shape.
 * @see {@link GetMarketplaceListingCommandOutput} for command's `response` shape.
 * @see {@link JustWorkflowItClientResolvedConfig | config} for JustWorkflowItClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Request validation failed due to invalid input parameters or malformed request body. Check the fields map for specific validation errors.
 *
 * @throws {@link NotFoundError} (client fault)
 *  The requested resource was not found. Verify the resource ID is correct and the resource exists in the specified organization.
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
export class GetMarketplaceListingCommand extends $Command.classBuilder<GetMarketplaceListingCommandInput, GetMarketplaceListingCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "GetMarketplaceListing", {

  })
  .n("JustWorkflowItClient", "GetMarketplaceListingCommand")
  .f(void 0, void 0)
  .ser(se_GetMarketplaceListingCommand)
  .de(de_GetMarketplaceListingCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetMarketplaceListingInput;
      output: GetMarketplaceListingOutput;
  };
  sdk: {
      input: GetMarketplaceListingCommandInput;
      output: GetMarketplaceListingCommandOutput;
  };
};
}

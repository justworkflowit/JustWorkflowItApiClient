// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  CreateInterestInput,
  CreateInterestOutput,
} from "../models/models_0";
import {
  de_CreateInterestCommand,
  se_CreateInterestCommand,
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
 * The input for {@link CreateInterestCommand}.
 */
export interface CreateInterestCommandInput extends CreateInterestInput {}
/**
 * @public
 *
 * The output of {@link CreateInterestCommand}.
 */
export interface CreateInterestCommandOutput extends CreateInterestOutput, __MetadataBearer {}

/**
 * Submits a lead capture form expressing interest in the JustWorkflowIt platform. **No authentication required.** - Accepts contact details (`emailAddress`, `personName`), optional company context (`company`, `cloud`, `currentSolution`, `goal`), and opt-in flags (`joinBeta`, `receiveUpdates`). - Each submission is persisted to a dedicated data store and assigned a unique `interestId`, returned in the response. - Multiple submissions from the same email address are allowed — each creates a distinct record. - This endpoint has no rate limiting enforced at the API contract level; callers should be aware of this when integrating from public-facing forms. - Returns `200` with the new `interestId` on success. Returns `400` for validation failures (e.g., missing required fields). - This is a write-only endpoint; there is no corresponding read or list operation for interest records via the public API.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, CreateInterestCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, CreateInterestCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // CreateInterestInput
 *   emailAddress: "STRING_VALUE", // required
 *   personName: "STRING_VALUE", // required
 *   company: "STRING_VALUE",
 *   cloud: "STRING_VALUE",
 *   goal: "STRING_VALUE",
 *   currentSolution: "STRING_VALUE",
 *   demoFeedback: "STRING_VALUE",
 *   joinBeta: true || false,
 *   receiveUpdates: true || false,
 * };
 * const command = new CreateInterestCommand(input);
 * const response = await client.send(command);
 * // { // CreateInterestOutput
 * //   interestId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInterestCommandInput - {@link CreateInterestCommandInput}
 * @returns {@link CreateInterestCommandOutput}
 * @see {@link CreateInterestCommandInput} for command's `input` shape.
 * @see {@link CreateInterestCommandOutput} for command's `response` shape.
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
export class CreateInterestCommand extends $Command.classBuilder<CreateInterestCommandInput, CreateInterestCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "CreateInterest", {

  })
  .n("JustWorkflowItClient", "CreateInterestCommand")
  .f(void 0, void 0)
  .ser(se_CreateInterestCommand)
  .de(de_CreateInterestCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: CreateInterestInput;
      output: CreateInterestOutput;
  };
  sdk: {
      input: CreateInterestCommandInput;
      output: CreateInterestCommandOutput;
  };
};
}

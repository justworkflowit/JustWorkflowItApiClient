// smithy-typescript generated code
import {
  JustWorkflowItClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../JustWorkflowItClient";
import {
  ListNotificationsInput,
  ListNotificationsOutput,
} from "../models/models_0";
import {
  de_ListNotificationsCommand,
  se_ListNotificationsCommand,
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
 * The input for {@link ListNotificationsCommand}.
 */
export interface ListNotificationsCommandInput extends ListNotificationsInput {}
/**
 * @public
 *
 * The output of {@link ListNotificationsCommand}.
 */
export interface ListNotificationsCommandOutput extends ListNotificationsOutput, __MetadataBearer {}

/**
 * Lists notifications for an organization, newest first. Each notification includes a `read` boolean indicating whether the current user has read it. Use `MarkNotificationRead` or `MarkAllNotificationsRead` to update read status. **Permissions required:** `notification:list`
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JustWorkflowItClient, ListNotificationsCommand } from "@justworkflowit/api-client"; // ES Modules import
 * // const { JustWorkflowItClient, ListNotificationsCommand } = require("@justworkflowit/api-client"); // CommonJS import
 * const client = new JustWorkflowItClient(config);
 * const input = { // ListNotificationsInput
 *   organizationId: "STRING_VALUE", // required
 * };
 * const command = new ListNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationsOutput
 * //   notifications: [ // NotificationSummaryList // required
 * //     { // NotificationSummary
 * //       notificationId: "STRING_VALUE", // required
 * //       severity: "INFO" || "WARNING" || "ERROR", // required
 * //       title: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //       read: true || false, // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   unreadCount: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListNotificationsCommandInput - {@link ListNotificationsCommandInput}
 * @returns {@link ListNotificationsCommandOutput}
 * @see {@link ListNotificationsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationsCommandOutput} for command's `response` shape.
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
export class ListNotificationsCommand extends $Command.classBuilder<ListNotificationsCommandInput, ListNotificationsCommandOutput, JustWorkflowItClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: JustWorkflowItClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("JustWorkflowItService", "ListNotifications", {

  })
  .n("JustWorkflowItClient", "ListNotificationsCommand")
  .f(void 0, void 0)
  .ser(se_ListNotificationsCommand)
  .de(de_ListNotificationsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: ListNotificationsInput;
      output: ListNotificationsOutput;
  };
  sdk: {
      input: ListNotificationsCommandInput;
      output: ListNotificationsCommandOutput;
  };
};
}

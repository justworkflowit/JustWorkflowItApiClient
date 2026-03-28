// smithy-typescript generated code
import { JustWorkflowItClient } from "../JustWorkflowItClient";
import {
  AdminListOrganizationsCommand,
  AdminListOrganizationsCommandInput,
  AdminListOrganizationsCommandOutput,
} from "../commands/AdminListOrganizationsCommand";
import { JustWorkflowItPaginationConfiguration } from "./Interfaces";
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

/**
 * @public
 */
export const paginateAdminListOrganizations: (
    config: JustWorkflowItPaginationConfiguration,
    input: AdminListOrganizationsCommandInput,
    ...rest: any[]
) => Paginator<AdminListOrganizationsCommandOutput> =
    createPaginator<JustWorkflowItPaginationConfiguration, AdminListOrganizationsCommandInput, AdminListOrganizationsCommandOutput>(
        JustWorkflowItClient,
        AdminListOrganizationsCommand,
        "nextToken",
        "nextToken",
        "limit"
    );

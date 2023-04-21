/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB SQL Role Assignment.
 *
 * @summary Creates or updates an Azure Cosmos DB SQL Role Assignment.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-01-preview/examples/CosmosDBSqlRoleAssignmentCreateUpdate.json
 */
async function cosmosDbSqlRoleAssignmentCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const roleAssignmentId = "myRoleAssignmentId";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "myResourceGroupName";
  const accountName = "myAccountName";
  const createUpdateSqlRoleAssignmentParameters = {
    principalId: "myPrincipalId",
    roleDefinitionId:
      "/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/sqlRoleDefinitions/myRoleDefinitionId",
    scope:
      "/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/purchases/colls/redmond-purchases",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlRoleAssignmentAndWait(
    roleAssignmentId,
    resourceGroupName,
    accountName,
    createUpdateSqlRoleAssignmentParameters
  );
  console.log(result);
}

async function main() {
  cosmosDbSqlRoleAssignmentCreateUpdate();
}

main().catch(console.error);

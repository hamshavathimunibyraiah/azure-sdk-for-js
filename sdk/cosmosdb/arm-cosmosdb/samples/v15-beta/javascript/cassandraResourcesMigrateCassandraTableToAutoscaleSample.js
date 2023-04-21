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
 * This sample demonstrates how to Migrate an Azure Cosmos DB Cassandra table from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB Cassandra table from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-01-preview/examples/CosmosDBCassandraTableMigrateToAutoscale.json
 */
async function cosmosDbCassandraTableMigrateToAutoscale() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspaceName";
  const tableName = "tableName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.beginMigrateCassandraTableToAutoscaleAndWait(
    resourceGroupName,
    accountName,
    keyspaceName,
    tableName
  );
  console.log(result);
}

async function main() {
  cosmosDbCassandraTableMigrateToAutoscale();
}

main().catch(console.error);

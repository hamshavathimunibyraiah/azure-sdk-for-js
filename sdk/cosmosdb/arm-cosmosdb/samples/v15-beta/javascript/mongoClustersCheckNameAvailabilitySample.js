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
 * This sample demonstrates how to Check the availability of name for resource
 *
 * @summary Check the availability of name for resource
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-01-preview/examples/mongo-cluster/CosmosDBMongoClusterNameAvailability.json
 */
async function checkNameAvailability() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] || "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const location = "westus2";
  const parameters = {
    name: "newmongocluster",
    type: "Microsoft.DocumentDB/mongoClusters",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoClusters.checkNameAvailability(location, parameters);
  console.log(result);
}

/**
 * This sample demonstrates how to Check the availability of name for resource
 *
 * @summary Check the availability of name for resource
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-01-preview/examples/mongo-cluster/CosmosDBMongoClusterNameAvailability_AlreadyExists.json
 */
async function checkNameAvailabilityAlreadyExistsResult() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] || "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const location = "westus2";
  const parameters = {
    name: "existingmongocluster",
    type: "Microsoft.DocumentDB/mongoClusters",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoClusters.checkNameAvailability(location, parameters);
  console.log(result);
}

async function main() {
  checkNameAvailability();
  checkNameAvailabilityAlreadyExistsResult();
}

main().catch(console.error);

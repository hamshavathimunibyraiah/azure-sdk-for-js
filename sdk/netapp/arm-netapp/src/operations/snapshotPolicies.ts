/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SnapshotPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetAppManagementClient } from "../netAppManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SnapshotPolicy,
  SnapshotPoliciesListOptionalParams,
  SnapshotPoliciesListResponse,
  SnapshotPoliciesGetOptionalParams,
  SnapshotPoliciesGetResponse,
  SnapshotPoliciesCreateOptionalParams,
  SnapshotPoliciesCreateResponse,
  SnapshotPolicyPatch,
  SnapshotPoliciesUpdateOptionalParams,
  SnapshotPoliciesUpdateResponse,
  SnapshotPoliciesDeleteOptionalParams,
  SnapshotPoliciesListVolumesOptionalParams,
  SnapshotPoliciesListVolumesResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SnapshotPolicies operations. */
export class SnapshotPoliciesImpl implements SnapshotPolicies {
  private readonly client: NetAppManagementClient;

  /**
   * Initialize a new instance of the class SnapshotPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: NetAppManagementClient) {
    this.client = client;
  }

  /**
   * List snapshot policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: SnapshotPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<SnapshotPolicy> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, accountName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: SnapshotPoliciesListOptionalParams
  ): AsyncIterableIterator<SnapshotPolicy[]> {
    let result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: SnapshotPoliciesListOptionalParams
  ): AsyncIterableIterator<SnapshotPolicy> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List snapshot policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: SnapshotPoliciesListOptionalParams
  ): Promise<SnapshotPoliciesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Get a snapshot Policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param snapshotPolicyName The name of the snapshot policy
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    snapshotPolicyName: string,
    options?: SnapshotPoliciesGetOptionalParams
  ): Promise<SnapshotPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, snapshotPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Create a snapshot policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param snapshotPolicyName The name of the snapshot policy
   * @param body Snapshot policy object supplied in the body of the operation.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    snapshotPolicyName: string,
    body: SnapshotPolicy,
    options?: SnapshotPoliciesCreateOptionalParams
  ): Promise<SnapshotPoliciesCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, snapshotPolicyName, body, options },
      createOperationSpec
    );
  }

  /**
   * Patch a snapshot policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param snapshotPolicyName The name of the snapshot policy
   * @param body Snapshot policy object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accountName: string,
    snapshotPolicyName: string,
    body: SnapshotPolicyPatch,
    options?: SnapshotPoliciesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SnapshotPoliciesUpdateResponse>,
      SnapshotPoliciesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SnapshotPoliciesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, snapshotPolicyName, body, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Patch a snapshot policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param snapshotPolicyName The name of the snapshot policy
   * @param body Snapshot policy object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    snapshotPolicyName: string,
    body: SnapshotPolicyPatch,
    options?: SnapshotPoliciesUpdateOptionalParams
  ): Promise<SnapshotPoliciesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accountName,
      snapshotPolicyName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete snapshot policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param snapshotPolicyName The name of the snapshot policy
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    snapshotPolicyName: string,
    options?: SnapshotPoliciesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, snapshotPolicyName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Delete snapshot policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param snapshotPolicyName The name of the snapshot policy
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    snapshotPolicyName: string,
    options?: SnapshotPoliciesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      snapshotPolicyName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get volumes associated with snapshot policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param snapshotPolicyName The name of the snapshot policy
   * @param options The options parameters.
   */
  listVolumes(
    resourceGroupName: string,
    accountName: string,
    snapshotPolicyName: string,
    options?: SnapshotPoliciesListVolumesOptionalParams
  ): Promise<SnapshotPoliciesListVolumesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, snapshotPolicyName, options },
      listVolumesOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotPoliciesList
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.snapshotPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotPolicy
    },
    201: {
      bodyMapper: Mappers.SnapshotPolicy
    },
    default: {}
  },
  requestBody: Parameters.body16,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.snapshotPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotPolicy
    },
    201: {
      bodyMapper: Mappers.SnapshotPolicy
    },
    202: {
      bodyMapper: Mappers.SnapshotPolicy
    },
    204: {
      bodyMapper: Mappers.SnapshotPolicy
    },
    default: {}
  },
  requestBody: Parameters.body17,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.snapshotPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.snapshotPolicyName
  ],
  serializer
};
const listVolumesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}/volumes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotPolicyVolumeList
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.snapshotPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};

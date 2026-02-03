import { APICaller, type APIResponse, type APIRequest } from "typesafe-api-call";
import type { StorefrontConfig, GraphQLRequestBody } from "./types";
import {
  decodeGraphQLResponse,
  decodeStorefrontError,
  type GraphQLResponse,
  type StorefrontError,
} from "../generated/types";
import { decodeArray } from "type-decoder";

export type Executor = {
  execute: <T>(
    query: string,
    variables: Record<string, unknown> | null,
    decoder: (raw: unknown) => T | null
  ) => Promise<APIResponse<T, StorefrontError[]>>;
};

export function createExecutor(config: StorefrontConfig): Executor {
  const apiVersion: string = config.apiVersion ?? "2024-01";
  const endpoint: string = `https://${config.shopDomain}/api/${apiVersion}/graphql.json`;

  function execute<T>(
    query: string,
    variables: Record<string, unknown> | null,
    decoder: (raw: unknown) => T | null
  ): Promise<APIResponse<T, StorefrontError[]>> {
    const body: GraphQLRequestBody = { query };
    if (variables) {
      body.variables = variables;
    }

    const request: APIRequest = {
      url: new URL(endpoint),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": config.accessToken,
      },
      body: JSON.stringify(body),
    };

    const successDecoder = (rawResponse: unknown): T | null => {
      const response: GraphQLResponse | null = decodeGraphQLResponse(rawResponse);

      if (!response) {
        return null;
      }

      if (response.errors && response.errors.length > 0) {
        return null;
      }

      if (!response.data) {
        return null;
      }

      return decoder(response.data);
    };

    const errorDecoder = (rawResponse: unknown): StorefrontError[] | null => {
      const response: GraphQLResponse | null = decodeGraphQLResponse(rawResponse);

      if (response?.errors && response.errors.length > 0) {
        return response.errors;
      }

      const errorsArray: StorefrontError[] | null = decodeArray(rawResponse, decodeStorefrontError);
      if (errorsArray && errorsArray.length > 0) {
        return errorsArray;
      }

      return null;
    };

    return APICaller.call(request, successDecoder, errorDecoder);
  }

  return { execute };
}

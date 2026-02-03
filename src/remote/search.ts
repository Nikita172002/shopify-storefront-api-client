import type { APIResponse } from "typesafe-api-call";
import type { Executor } from "./executor";
import {
  type SearchResultItemConnection,
  type PredictiveSearchResult,
  type StorefrontError,
  type SearchArgs,
  type PredictiveSearchArgs,
  decodeSearchResponse,
  decodePredictiveSearchResponse,
} from "../generated/types";
import { SEARCH, PREDICTIVE_SEARCH } from "../queries";

export function createSearchApi(executor: Executor): SearchApi {
  return {
    search(args: SearchArgs): Promise<APIResponse<SearchResultItemConnection, StorefrontError[]>> {
      const variables: Record<string, unknown> = {
        query: args.query,
        first: args.first ?? 20,
        after: args.after,
        last: args.last,
        before: args.before,
        reverse: args.reverse,
        sortKey: args.sortKey,
        types: args.types,
        productFilters: args.productFilters,
        prefix: args.prefix,
        unavailableProducts: args.unavailableProducts,
      };
      return executor.execute(
        SEARCH,
        variables,
        (data) => decodeSearchResponse(data)?.search ?? null
      );
    },

    predictive(
      args: PredictiveSearchArgs
    ): Promise<APIResponse<PredictiveSearchResult, StorefrontError[]>> {
      const variables: Record<string, unknown> = {
        query: args.query,
        limit: args.limit ?? 10,
        limitScope: args.limitScope,
        types: args.types,
        unavailableProducts: args.unavailableProducts,
      };
      return executor.execute(
        PREDICTIVE_SEARCH,
        variables,
        (data) => decodePredictiveSearchResponse(data)?.predictiveSearch ?? null
      );
    },
  };
}

export type SearchApi = {
  search: (args: SearchArgs) => Promise<APIResponse<SearchResultItemConnection, StorefrontError[]>>;
  predictive: (
    args: PredictiveSearchArgs
  ) => Promise<APIResponse<PredictiveSearchResult, StorefrontError[]>>;
};

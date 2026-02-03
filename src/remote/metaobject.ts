import type { APIResponse } from "typesafe-api-call";
import type { Executor } from "./executor";
import {
  type Metaobject,
  type MetaobjectConnection,
  type StorefrontError,
  type MetaobjectHandleInput,
  type GetMetaobjectsArgs,
  decodeMetaobjectResponse,
  decodeMetaobjectsResponse,
} from "../generated/types";
import { GET_METAOBJECT_BY_ID, GET_METAOBJECT_BY_HANDLE, GET_METAOBJECTS } from "../queries";

export function createMetaobjectApi(executor: Executor): MetaobjectApi {
  return {
    getById(id: string): Promise<APIResponse<Metaobject, StorefrontError[]>> {
      return executor.execute(
        GET_METAOBJECT_BY_ID,
        { id },
        (data) => decodeMetaobjectResponse(data)?.metaobject ?? null
      );
    },

    getByHandle(
      handle: MetaobjectHandleInput
    ): Promise<APIResponse<Metaobject, StorefrontError[]>> {
      return executor.execute(
        GET_METAOBJECT_BY_HANDLE,
        { handle },
        (data) => decodeMetaobjectResponse(data)?.metaobject ?? null
      );
    },

    getMany(
      args: GetMetaobjectsArgs
    ): Promise<APIResponse<MetaobjectConnection, StorefrontError[]>> {
      const variables: Record<string, unknown> = {
        type: args.type,
        first: args.first ?? 20,
        after: args.after,
        last: args.last,
        before: args.before,
        reverse: args.reverse,
        sortKey: args.sortKey,
      };
      return executor.execute(
        GET_METAOBJECTS,
        variables,
        (data) => decodeMetaobjectsResponse(data)?.metaobjects ?? null
      );
    },
  };
}

export type MetaobjectApi = {
  getById: (id: string) => Promise<APIResponse<Metaobject, StorefrontError[]>>;
  getByHandle: (
    handle: MetaobjectHandleInput
  ) => Promise<APIResponse<Metaobject, StorefrontError[]>>;
  getMany: (
    args: GetMetaobjectsArgs
  ) => Promise<APIResponse<MetaobjectConnection, StorefrontError[]>>;
};

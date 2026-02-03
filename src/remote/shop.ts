import type { APIResponse } from "typesafe-api-call";
import type { Executor } from "./executor";
import {
  type Shop,
  type Localization,
  type StorefrontError,
  decodeShopResponse,
  decodeLocalizationResponse,
} from "../generated/types";
import { GET_SHOP, GET_LOCALIZATION } from "../queries";

export function createShopApi(executor: Executor): ShopApi {
  return {
    get(): Promise<APIResponse<Shop, StorefrontError[]>> {
      return executor.execute(GET_SHOP, null, (data) => decodeShopResponse(data)?.shop ?? null);
    },

    getLocalization(): Promise<APIResponse<Localization, StorefrontError[]>> {
      return executor.execute(
        GET_LOCALIZATION,
        null,
        (data) => decodeLocalizationResponse(data)?.localization ?? null
      );
    },
  };
}

export type ShopApi = {
  get: () => Promise<APIResponse<Shop, StorefrontError[]>>;
  getLocalization: () => Promise<APIResponse<Localization, StorefrontError[]>>;
};

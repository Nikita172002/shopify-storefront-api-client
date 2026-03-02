export * from "./generated/types";

export { APISuccess, APIFailure } from "typesafe-api-call";
export type { APIResponse } from "typesafe-api-call";

export type { StorefrontConfig, Connection, StorefrontUserError } from "./remote/types";
export type { ProductApi } from "./remote/product";
export type { CartApi } from "./remote/cart";
export type { CollectionApi } from "./remote/collection";
export type { CustomerApi } from "./remote/customer";
export type { ShopApi } from "./remote/shop";
export type { SearchApi } from "./remote/search";
export type { ContentApi } from "./remote/content";
export type { MetaobjectApi } from "./remote/metaobject";

import type { StorefrontConfig } from "./remote/types";
import { createExecutor, type Executor } from "./remote/executor";
import { createProductApi, type ProductApi } from "./remote/product";
import { createCartApi, type CartApi } from "./remote/cart";
import { createCollectionApi, type CollectionApi } from "./remote/collection";
import { createCustomerApi, type CustomerApi } from "./remote/customer";
import { createShopApi, type ShopApi } from "./remote/shop";
import { createSearchApi, type SearchApi } from "./remote/search";
import { createContentApi, type ContentApi } from "./remote/content";
import { createMetaobjectApi, type MetaobjectApi } from "./remote/metaobject";

export class StorefrontClient {
  public readonly executor: Executor;
  public readonly product: ProductApi;
  public readonly cart: CartApi;
  public readonly collection: CollectionApi;
  public readonly customer: CustomerApi;
  public readonly shop: ShopApi;
  public readonly search: SearchApi;
  public readonly content: ContentApi;
  public readonly metaobject: MetaobjectApi;
  public readonly config: StorefrontConfig;

  constructor(config: StorefrontConfig) {
    this.config = config;
    const executor: Executor = createExecutor(config);
    this.executor = executor;

    this.product = createProductApi(executor);
    this.cart = createCartApi(executor);
    this.collection = createCollectionApi(executor);
    this.customer = createCustomerApi(executor);
    this.shop = createShopApi(executor);
    this.search = createSearchApi(executor);
    this.content = createContentApi(executor);
    this.metaobject = createMetaobjectApi(executor);
  }

  get endpoint(): string {
    const apiVersion: string = this.config.apiVersion ?? "2024-01";
    return `https://${this.config.shopDomain}/api/${apiVersion}/graphql.json`;
  }
}

export function createStorefrontClient(
  shopDomain: string,
  accessToken: string,
  apiVersion?: string
): StorefrontClient {
  return new StorefrontClient({ shopDomain, accessToken, apiVersion });
}

# Shopify Storefront API Client

A strongly typed TypeScript SDK for the Shopify Storefront GraphQL API. Built with type safety in mind, featuring auto-generated types and runtime decoders to ensure data integrity.

## Features

- **Fully Typed** - Complete TypeScript support with auto-generated types from YAML specifications
- **Runtime Type Safety** - Built-in decoders validate API responses at runtime
- **Complete API Coverage** - Products, Collections, Cart, Customer, Search, Content, Shop, and Metaobjects
- **Dual Module Support** - Works with both ESM and CommonJS
- **Zero Configuration** - Simple setup with just your store domain and access token

---

## Comparison with `@shopify/storefront-api-client`

This SDK takes a different approach than [Shopify's official client](https://www.npmjs.com/package/@shopify/storefront-api-client).

| Feature                   | This SDK                                        | `@shopify/storefront-api-client`                |
| ------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| **Approach**              | Pre-built operations with runtime validation    | Generic GraphQL client - write your own queries |
| **TypeScript Types**      | Included - generated from YAML specs            | Requires `@shopify/api-codegen-preset` setup    |
| **Runtime Validation**    | Yes - decoders validate every response          | No - `data` typed as `any` by default           |
| **API Methods**           | `client.product.getByHandle('...')`             | `client.request(QUERY, { variables })`          |
| **Error Handling**        | `APISuccess` / `APIFailure` discriminated union | `{ data, errors }` object                       |
| **GraphQL Knowledge**     | Not required                                    | Required                                        |
| **Flexibility**           | Opinionated - covers common use cases           | Maximum - any query you want                    |
| **Streaming (`@defer`)**  | Not supported                                   | Supported via `requestStream()`                 |
| **Retries**               | Not built-in                                    | Built-in with configurable count                |
| **Private Access Tokens** | Not supported                                   | Supported (server-side)                         |

### When to Use This SDK

**Choose this SDK if you:**

- Want type-safe API calls without writing GraphQL queries
- Need runtime validation to catch API changes or malformed data
- Prefer simple method calls over managing GraphQL operations
- Are building a custom storefront (Next.js, Remix, SvelteKit, etc.)

**Choose `@shopify/storefront-api-client` if you:**

- Need maximum flexibility with custom GraphQL queries
- Want streaming support with `@defer` directive
- Need private access token support for server-to-server calls
- Are comfortable setting up GraphQL codegen for types

### Code Comparison

**This SDK:**

```typescript
import { createStorefrontClient, APISuccess } from "shopify-storefront-api-client";

const client = createStorefrontClient("store.myshopify.com", "token");
const response = await client.product.getByHandle("example-product");

if (response instanceof APISuccess) {
  // Fully typed, runtime validated
  console.log(response.data.title);
  console.log(response.data.priceRange.minVariantPrice.amount);
}
```

**Official Shopify client:**

```typescript
import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const client = createStorefrontApiClient({
  storeDomain: "store.myshopify.com",
  apiVersion: "2024-01",
  publicAccessToken: "token",
});

const { data, errors } = await client.request(
  `
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      title
      priceRange {
        minVariantPrice { amount currencyCode }
      }
    }
  }
`,
  { variables: { handle: "example-product" } }
);

// data is typed as `any` unless you set up codegen
console.log(data?.product?.title);
```

### The Runtime Safety Advantage

The official client returns `data` typed as `any` by default. Even with codegen, types are compile-time only:

```typescript
// Official client - types don't guarantee runtime safety
const { data } = await client.request<ProductQuery>(QUERY, { variables });
// TypeScript thinks data.product exists, but if API changes or returns
// unexpected data, you get runtime crashes:
console.log(data.product.variants.edges[0].node.price); // Could crash!
```

This SDK validates every response with generated decoders:

```typescript
// This SDK - runtime validated
const response = await client.product.getByHandle("my-product");

if (response instanceof APISuccess) {
  // Decoder already validated the entire object graph
  // Every required field is guaranteed to exist with correct type
  console.log(response.data.title); // Safe - validated at runtime
} else {
  // Gracefully handle invalid/unexpected data
  console.error("Failed:", response.errors);
}
```

---

## Installation

```bash
npm install shopify-storefront-api-client
# or
pnpm add shopify-storefront-api-client
# or
yarn add shopify-storefront-api-client
```

### Dependencies

| Package                                                                | Purpose                                                        |
| ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`type-decoder`](https://www.npmjs.com/package/type-decoder)           | Runtime type validation primitives                             |
| [`typesafe-api-call`](https://www.npmjs.com/package/typesafe-api-call) | Type-safe HTTP client with `APISuccess`/`APIFailure` responses |

---

## Quick Start

```typescript
import { createStorefrontClient, APISuccess } from "shopify-storefront-api-client";

const client = createStorefrontClient("your-store.myshopify.com", "your-storefront-access-token");

// Fetch a product - fully typed with runtime validation
const response = await client.product.getByHandle("example-product");

if (response instanceof APISuccess) {
  console.log(response.data.title);
  console.log(response.data.priceRange.minVariantPrice.amount);
}
```

---

## Type Safety Architecture

This SDK provides **end-to-end type safety** - from compile-time TypeScript types to runtime validation.

### Schema-First Approach

```
YAML Specification → type-crafter → TypeScript Types + Decoder Functions
```

#### 1. Types Defined in YAML

```yaml
# types/products.yaml
Products:
  Product:
    type: object
    required: [id, title, handle, availableForSale, priceRange]
    properties:
      id:
        type: string
      title:
        type: string
      featuredImage:
        $ref: "./types/common.yaml#/Common/Image" # Optional field
```

#### 2. Generated TypeScript Types

```typescript
// Generated with proper nullability
export type Product = {
  id: string; // Required - never null
  title: string; // Required - never null
  featuredImage: Image | null; // Optional - can be null
};
```

#### 3. Generated Runtime Decoders

```typescript
export function decodeProduct(rawInput: unknown): Product | null {
  const decodedId = decodeString(rawInput["id"]);
  const decodedTitle = decodeString(rawInput["title"]);

  // STRICT: If required fields are missing, return null
  if (decodedId === null || decodedTitle === null) {
    return null;
  }

  return { id: decodedId, title: decodedTitle /* ... */ };
}
```

#### 4. Automatic Validation

Every API call runs through the decoder - invalid data returns `APIFailure` instead of crashing.

---

## API Reference

### Client Initialization

```typescript
import { StorefrontClient, createStorefrontClient } from "shopify-storefront-api-client";

// Factory function (recommended)
const client = createStorefrontClient(
  "your-store.myshopify.com",
  "your-storefront-access-token",
  "2024-01" // optional API version
);

// Or class constructor
const client = new StorefrontClient({
  shopDomain: "your-store.myshopify.com",
  accessToken: "your-storefront-access-token",
  apiVersion: "2024-01",
});
```

### Response Handling

All methods return `APIResponse<T, StorefrontError[]>`:

```typescript
import { APISuccess, APIFailure } from "shopify-storefront-api-client";

const response = await client.product.getByHandle("my-product");

if (response instanceof APISuccess) {
  const product = response.data; // Fully typed Product
} else {
  console.error(response.errors); // StorefrontError[]
}
```

---

### Products

```typescript
// By handle or ID
const product = await client.product.getByHandle("classic-leather-jacket");
const product = await client.product.getById("gid://shopify/Product/123");

// Multiple products with pagination
const products = await client.product.getMany({
  first: 10,
  sortKey: "BEST_SELLING",
  query: "tag:featured",
});

// Recommendations
const recommendations = await client.product.getRecommendations({
  productId: "gid://shopify/Product/123",
});
```

### Collections

```typescript
// By handle or ID
const collection = await client.collection.getByHandle("summer-sale");

// With products (paginated)
const collection = await client.collection.getWithProducts(
  { handle: "summer-sale" },
  { first: 20, sortKey: "PRICE", filters: [{ available: true }] }
);

// Multiple collections
const collections = await client.collection.getMany({ first: 10 });
```

### Cart

```typescript
// Create
const cart = await client.cart.create({
  lines: [{ merchandiseId: "gid://shopify/ProductVariant/123", quantity: 2 }],
});

// Get existing
const cart = await client.cart.get("gid://shopify/Cart/abc123");

// Modify
await client.cart.addLines(cartId, [{ merchandiseId: variantId, quantity: 1 }]);
await client.cart.updateLines(cartId, [{ id: lineId, quantity: 3 }]);
await client.cart.removeLines(cartId, [lineId]);

// Discounts & Gift Cards
await client.cart.updateDiscountCodes(cartId, ["SUMMER20"]);
await client.cart.addGiftCardCodes(cartId, ["GIFT-CODE"]);

// Buyer Identity
await client.cart.updateBuyerIdentity(cartId, { email: "customer@example.com" });
```

### Customer

```typescript
// Authentication
const result = await client.customer.login({ email, password });
await client.customer.logout(accessToken);
await client.customer.renewToken(accessToken);

// Account
await client.customer.create({ email, password, firstName, lastName });
await client.customer.get(accessToken);
await client.customer.update(accessToken, { firstName: "Jane" });

// Password
await client.customer.recover(email);
await client.customer.reset(customerId, { resetToken, password });

// Addresses
await client.customer.createAddress(accessToken, addressInput);
await client.customer.updateAddress(accessToken, addressId, addressInput);
await client.customer.deleteAddress(accessToken, addressId);
await client.customer.setDefaultAddress(accessToken, addressId);
```

### Search

```typescript
// Full-text search
const results = await client.search.search({
  query: "leather jacket",
  first: 20,
  types: ["PRODUCT", "ARTICLE"],
  productFilters: [{ available: true }],
});

// Predictive (autocomplete)
const suggestions = await client.search.predictive({
  query: "leath",
  limit: 10,
  types: ["PRODUCT", "COLLECTION", "QUERY"],
});
```

### Content

```typescript
// Pages
const page = await client.content.pages.getByHandle("about-us");
const pages = await client.content.pages.getMany({ first: 10 });

// Blogs & Articles
const blog = await client.content.blogs.getByHandle("news");
const blog = await client.content.blogs.getWithArticles(
  { handle: "news" },
  { first: 10, sortKey: "PUBLISHED_AT", reverse: true }
);
const articles = await client.content.articles.getMany({ first: 20 });

// Menus
const menu = await client.content.menus.getByHandle("main-menu");
```

### Shop

```typescript
// Shop info
const shop = await client.shop.get();

// Localization
const localization = await client.shop.getLocalization();
```

### Metaobjects

```typescript
const metaobject = await client.metaobject.getById("gid://shopify/Metaobject/123");
const metaobject = await client.metaobject.getByHandle({ type: "designer", handle: "john" });
const metaobjects = await client.metaobject.getMany({ type: "designer", first: 20 });
```

---

## Pagination

The SDK uses cursor-based pagination:

```typescript
const firstPage = await client.product.getMany({ first: 10 });

if (firstPage instanceof APISuccess && firstPage.data.pageInfo.hasNextPage) {
  const secondPage = await client.product.getMany({
    first: 10,
    after: firstPage.data.pageInfo.endCursor,
  });
}
```

---

## Types

All types are exported for use in your application:

```typescript
import type {
  Product,
  ProductVariant,
  Collection,
  Cart,
  Customer,
  Order,
  ProductConnection,
  CollectionConnection,
  CartInput,
  CustomerCreateInput,
  MailingAddressInput,
  StorefrontError,
  APIResponse,
} from "shopify-storefront-api-client";
```

---

## Documentation

- [Development Guide](./DEVELOPMENT.md) - Setup, scripts, and architecture
- [Contributing](./CONTRIBUTING.md) - How to contribute

---

## License

ISC

## Author

Sahil Sinha

# Development Guide

This guide covers setting up the development environment, understanding the architecture, and working with the codebase.

## Prerequisites

- Node.js 18+
- pnpm (v10.5.2 or later)

## Setup

```bash
# Clone the repository
git clone https://github.com/sinha-sahil/shopify-storefront-api.git
cd shopify-storefront-api

# Install dependencies
pnpm install

# Generate types from YAML specs
pnpm run gen:types

# Verify setup
pnpm run check
```

## Scripts

| Script               | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| `pnpm run gen:types` | Generate TypeScript types and decoders from YAML specifications |
| `pnpm run check`     | Run TypeScript type checking                                    |
| `pnpm build`         | Build the package with Rollup (ESM + CJS)                       |
| `pnpm test`          | Run the test suite                                              |
| `pnpm lint`          | Run ESLint                                                      |
| `pnpm lint:fix`      | Run ESLint with auto-fix                                        |
| `pnpm format`        | Format code with Prettier                                       |
| `pnpm format:check`  | Check code formatting                                           |

---

## Architecture

### Type Generation Pipeline

```
types/*.yaml  →  type-crafter  →  src/generated/types/*.ts
```

1. **YAML Specifications** (`types/`): Define all data types with explicit required/optional fields
2. **Type Crafter**: Generates TypeScript types AND decoder functions
3. **Generated Code** (`src/generated/types/`): Ready-to-use types with runtime validation

### Source Structure

```
src/
├── index.ts                 # Public exports
├── remote/
│   ├── executor.ts          # GraphQL execution with decoding
│   ├── product.ts           # Product API methods
│   ├── collection.ts        # Collection API methods
│   ├── cart.ts              # Cart API methods
│   ├── customer.ts          # Customer API methods
│   ├── search.ts            # Search API methods
│   ├── content.ts           # Content API methods
│   ├── shop.ts              # Shop API methods
│   ├── metaobject.ts        # Metaobject API methods
│   └── types.ts             # SDK-specific types
├── queries/
│   ├── fragments.ts         # Shared GraphQL fragments
│   ├── product.ts           # Product queries
│   ├── collection.ts        # Collection queries
│   ├── cart.ts              # Cart queries & mutations
│   ├── customer.ts          # Customer queries & mutations
│   ├── search.ts            # Search queries
│   ├── content.ts           # Content queries
│   ├── shop.ts              # Shop queries
│   └── metaobject.ts        # Metaobject queries
└── generated/
    └── types/               # Auto-generated (DO NOT EDIT)
        ├── index.ts
        ├── Products.ts
        ├── Collections.ts
        ├── Cart.ts
        └── ...

types/                       # YAML specifications
├── index.yaml               # Main entry point
├── products.yaml
├── collections.yaml
├── cart.yaml
├── customer.yaml
├── search.yaml
├── content.yaml
├── shop.yaml
├── metafields.yaml
├── localization.yaml
├── common.yaml
├── errors.yaml
└── responses.yaml
```

---

## Working with Types

### Adding a New Type

1. **Define in YAML** (`types/domain.yaml`):

```yaml
DomainName:
  NewType:
    type: object
    description: "Description of the type"
    required:
      - id
      - name
    properties:
      id:
        type: string
        description: "Unique identifier"
      name:
        type: string
        description: "Display name"
      optionalField:
        type: string
        description: "This field is optional"
```

2. **Regenerate types**:

```bash
pnpm run gen:types
```

3. **Use in code**:

```typescript
import { NewType, decodeNewType } from "../generated/types";
```

### Modifying Existing Types

1. Edit the YAML specification
2. Run `pnpm run gen:types`
3. Fix any TypeScript errors that arise
4. Update queries if new fields need to be fetched

### Required vs Optional Fields

- Fields in the `required` array generate non-nullable types (`string`)
- Fields not in `required` generate nullable types (`string | null`)
- Decoders return `null` if any required field is missing

---

## Working with Queries

### Query Structure

Queries live in `src/queries/` and use fragments from `fragments.ts`:

```typescript
// src/queries/product.ts
import { PRODUCT_FRAGMENT } from "./fragments";

export const GET_PRODUCT_BY_HANDLE = `
  ${PRODUCT_FRAGMENT}
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductFields
    }
  }
`;
```

### Adding a New Query

1. Add GraphQL query to the appropriate file in `src/queries/`
2. Export from `src/queries/index.ts`
3. Create API method in `src/remote/` that uses the query

### Decoder Debugging

If a decoder returns `null`, the query is likely missing required fields. Debug by:

1. Check the decoder function to see required fields:

```typescript
// Look for the null checks in the decoder
if (decodedFieldName === null) return null;
```

2. Ensure your query requests all required fields
3. Test the raw API response if needed

---

## Testing

### Setup

Create a `.env` file with test credentials:

```env
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-access-token
```

### Running Tests

```bash
# Run all tests
pnpm test

# Output shows a table summary:
# TOTAL: 140 tests | 121 passed | 0 failed | 19 skipped
```

### Test Structure

Tests are in `test/` and use a custom framework:

```typescript
import { test, run, skip, TestSuite } from "./framework";

const suite: TestSuite = {
  name: "Product",
  tests: [
    test("should fetch product by handle", async () => {
      const response = await client.product.getByHandle("test-product");
      return response instanceof APISuccess;
    }),

    // Skip if precondition not met
    skip(!productId, "should fetch by ID", async () => {
      /* ... */
    }),
  ],
};

run([suite]);
```

### Why Tests Skip

- **Customer tests**: Require valid access tokens (can't test auth flows in CI)
- **Metaobject tests**: Store may not have metaobjects configured
- **Content tests**: Store may not have articles/blogs

---

## Building

```bash
# Build for distribution
pnpm build
```

Outputs:

- `dist/index.mjs` - ESM module
- `dist/index.cjs` - CommonJS module
- `dist/index.d.ts` - TypeScript declarations

---

## Code Style

- **ESLint**: Enforces code quality rules
- **Prettier**: Enforces consistent formatting
- **TypeScript**: Strict mode enabled

```bash
# Check and fix
pnpm lint:fix
pnpm format
```

---

## Common Tasks

### Update API Version

1. Update default in `src/remote/executor.ts`
2. Update YAML specs if Shopify changed field requirements
3. Regenerate types
4. Run tests

### Add New API Domain

1. Create YAML spec in `types/`
2. Add to `types/index.yaml`
3. Create queries in `src/queries/`
4. Create API methods in `src/remote/`
5. Export from `src/remote/index.ts`
6. Add tests

### Debug Decoder Failures

```typescript
// Temporarily log raw response
const successDecoder = (rawResponse: unknown): T | null => {
  console.log("Raw response:", JSON.stringify(rawResponse, null, 2));
  // ... rest of decoder
};
```

---

## Dependencies

### Runtime

| Package             | Version | Purpose                            |
| ------------------- | ------- | ---------------------------------- |
| `type-decoder`      | ^2.2.0  | Runtime type validation primitives |
| `typesafe-api-call` | ^5.1.2  | Type-safe HTTP client              |

### Development

| Package        | Purpose                  |
| -------------- | ------------------------ |
| `type-crafter` | Generate types from YAML |
| `rollup`       | Bundle for distribution  |
| `typescript`   | Type checking            |
| `eslint`       | Code linting             |
| `prettier`     | Code formatting          |
| `tsx`          | Run TypeScript tests     |

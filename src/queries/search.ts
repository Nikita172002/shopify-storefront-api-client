import { MONEY_FRAGMENT, IMAGE_FRAGMENT } from "./fragments";

// Search-specific fragments
export const SEARCH_PRODUCT_FRAGMENT: string = `
  fragment SearchProductFields on Product {
    id
    handle
    title
    description
    vendor
    productType
    tags
    availableForSale
    priceRange {
      minVariantPrice {
        ...MoneyFields
      }
      maxVariantPrice {
        ...MoneyFields
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        ...MoneyFields
      }
      maxVariantPrice {
        ...MoneyFields
      }
    }
    seo {
      title
      description
    }
    featuredImage {
      ...ImageFields
    }
    variants(first: 5) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            ...MoneyFields
          }
        }
      }
    }
  }
`;

export const SEARCH_COLLECTION_FRAGMENT: string = `
  fragment SearchCollectionFields on Collection {
    id
    handle
    title
    description
    seo {
      title
      description
    }
    image {
      ...ImageFields
    }
  }
`;

export const SEARCH_PAGE_FRAGMENT: string = `
  fragment SearchPageFields on Page {
    id
    handle
    title
    body
    bodySummary
  }
`;

export const SEARCH_ARTICLE_FRAGMENT: string = `
  fragment SearchArticleFields on Article {
    id
    handle
    title
    excerpt
    blog {
      id
      title
      handle
    }
    image {
      ...ImageFields
    }
  }
`;

// Queries
// Note: SearchResultItem union only includes Article | Page | Product (NOT Collection)
export const SEARCH: string = `
  ${MONEY_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${SEARCH_PRODUCT_FRAGMENT}
  ${SEARCH_PAGE_FRAGMENT}
  ${SEARCH_ARTICLE_FRAGMENT}
  query Search(
    $query: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $reverse: Boolean
    $sortKey: SearchSortKeys
    $types: [SearchType!]
    $productFilters: [ProductFilter!]
    $prefix: SearchPrefixQueryType
    $unavailableProducts: SearchUnavailableProductsType
  ) {
    search(
      query: $query
      first: $first
      after: $after
      last: $last
      before: $before
      reverse: $reverse
      sortKey: $sortKey
      types: $types
      productFilters: $productFilters
      prefix: $prefix
      unavailableProducts: $unavailableProducts
    ) {
      edges {
        node {
          __typename
          ... on Product {
            ...SearchProductFields
          }
          ... on Page {
            ...SearchPageFields
          }
          ... on Article {
            ...SearchArticleFields
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      productFilters {
        id
        label
        type
        values {
          id
          label
          count
          input
        }
      }
    }
  }
`;

export const PREDICTIVE_SEARCH: string = `
  ${MONEY_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${SEARCH_PRODUCT_FRAGMENT}
  ${SEARCH_COLLECTION_FRAGMENT}
  ${SEARCH_PAGE_FRAGMENT}
  ${SEARCH_ARTICLE_FRAGMENT}
  query PredictiveSearch(
    $query: String!
    $limit: Int
    $limitScope: PredictiveSearchLimitScope
    $types: [PredictiveSearchType!]
    $unavailableProducts: SearchUnavailableProductsType
  ) {
    predictiveSearch(
      query: $query
      limit: $limit
      limitScope: $limitScope
      types: $types
      unavailableProducts: $unavailableProducts
    ) {
      products {
        ...SearchProductFields
      }
      collections {
        ...SearchCollectionFields
      }
      pages {
        ...SearchPageFields
      }
      articles {
        ...SearchArticleFields
      }
      queries {
        text
        styledText
      }
    }
  }
`;

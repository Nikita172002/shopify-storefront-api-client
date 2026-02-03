import { type Money, decodeMoney,  type ProductPriceRange, decodeProductPriceRange,  type Image, decodeImage,  type ArticleAuthor, decodeArticleAuthor,  type BlogSummary, decodeBlogSummary,  type PageInfo, decodePageInfo,  type FilterType, decodeFilterType,  type FilterValue, decodeFilterValue,  type Filter, decodeFilter,  type SEO, decodeSEO,  type ProductOptionValueSwatch, decodeProductOptionValueSwatch,  type WeightUnit, decodeWeightUnit,  type SelectedOption, decodeSelectedOption,  type ProductSummary, decodeProductSummary,  type UnitPriceMeasurementMeasuredType, decodeUnitPriceMeasurementMeasuredType,  type UnitPriceMeasurementMeasuredUnit, decodeUnitPriceMeasurementMeasuredUnit,  type UnitPriceMeasurement, decodeUnitPriceMeasurement,  type MetafieldParentResourceTypename, decodeMetafieldParentResourceTypename,  type MetafieldParentResource, decodeMetafieldParentResource,  type MetafieldReferenceTypename, decodeMetafieldReferenceTypename,  type VideoSource, decodeVideoSource,  type Model3dSource, decodeModel3dSource,  type MetafieldReference, decodeMetafieldReference,  type MetafieldReferenceEdge, decodeMetafieldReferenceEdge,  type MetafieldReferenceConnection, decodeMetafieldReferenceConnection,  type Metafield, decodeMetafield,  type SellingPlanCheckoutChargeType, decodeSellingPlanCheckoutChargeType,  type SellingPlanCheckoutChargeValue, decodeSellingPlanCheckoutChargeValue,  type SellingPlanCheckoutCharge, decodeSellingPlanCheckoutCharge,  type SellingPlanPriceAdjustment, decodeSellingPlanPriceAdjustment,  type SellingPlanOption, decodeSellingPlanOption,  type SellingPlanInterval, decodeSellingPlanInterval,  type SellingPlanRecurringBillingPolicy, decodeSellingPlanRecurringBillingPolicy,  type SellingPlanBillingPolicy, decodeSellingPlanBillingPolicy,  type SellingPlanRecurringDeliveryPolicy, decodeSellingPlanRecurringDeliveryPolicy,  type SellingPlanDeliveryPolicy, decodeSellingPlanDeliveryPolicy,  type SellingPlan, decodeSellingPlan,  type SellingPlanAllocationPriceAdjustment, decodeSellingPlanAllocationPriceAdjustment,  type SellingPlanAllocation, decodeSellingPlanAllocation,  type SellingPlanAllocationEdge, decodeSellingPlanAllocationEdge,  type SellingPlanAllocationConnection, decodeSellingPlanAllocationConnection,  type MailingAddress, decodeMailingAddress,  type Location, decodeLocation,  type StoreAvailability, decodeStoreAvailability,  type StoreAvailabilityEdge, decodeStoreAvailabilityEdge,  type StoreAvailabilityConnection, decodeStoreAvailabilityConnection,  type QuantityRule, decodeQuantityRule,  type QuantityPriceBreak, decodeQuantityPriceBreak,  type QuantityPriceBreakEdge, decodeQuantityPriceBreakEdge,  type QuantityPriceBreakConnection, decodeQuantityPriceBreakConnection,  type ProductVariant, decodeProductVariant,  type ProductVariantComponent, decodeProductVariantComponent,  type ProductVariantComponentEdge, decodeProductVariantComponentEdge,  type ProductVariantComponentConnection, decodeProductVariantComponentConnection,  type ProductVariantEdge, decodeProductVariantEdge,  type ProductVariantConnection, decodeProductVariantConnection,  type ShopPayInstallmentsProductVariantPricing, decodeShopPayInstallmentsProductVariantPricing,  type ProductOptionValue, decodeProductOptionValue,  type ProductOption, decodeProductOption,  type ImageEdge, decodeImageEdge,  type ImageConnection, decodeImageConnection,  type TaxonomyCategory, decodeTaxonomyCategory,  type MediaContentType, decodeMediaContentType,  type Media, decodeMedia,  type MediaEdge, decodeMediaEdge,  type MediaConnection, decodeMediaConnection,  type SellingPlanGroupOption, decodeSellingPlanGroupOption,  type SellingPlanEdge, decodeSellingPlanEdge,  type SellingPlanConnection, decodeSellingPlanConnection,  type SellingPlanGroup, decodeSellingPlanGroup,  type SellingPlanGroupEdge, decodeSellingPlanGroupEdge,  type SellingPlanGroupConnection, decodeSellingPlanGroupConnection,  type CountPrecision, decodeCountPrecision,  type Count, decodeCount,  type Product, decodeProduct,  type ProductEdge, decodeProductEdge,  type ProductConnection, decodeProductConnection,  type Collection, decodeCollection,  type Page, decodePage,  type Article, decodeArticle,  type VariantOptionFilter, decodeVariantOptionFilter,  type PriceFilter, decodePriceFilter,  type MetafieldFilter, decodeMetafieldFilter,  type ProductFilter, decodeProductFilter  } from './index';
import { isJSON, decodeNumber, _decodeNumber , decodeString, _decodeString , decodeBoolean, _decodeBoolean , decodeArray, _decodeArray  } from 'type-decoder';

/**
 * @type { SearchResultItemType }
 * @description Type of search result item (discriminator for union)
 */
export type SearchResultItemType =
  | 'PRODUCT'
  | 'PAGE'
  | 'ARTICLE'
  | 'COLLECTION'
;

export function decodeSearchResultItemType(rawInput: unknown): SearchResultItemType | null {
  switch (rawInput) {
    case 'PRODUCT':
    case 'PAGE':
    case 'ARTICLE':
    case 'COLLECTION':
     return rawInput;
  }
  return null;
}

export function _decodeSearchResultItemType(rawInput: unknown): SearchResultItemType | undefined {
  switch (rawInput) {
    case 'PRODUCT':
    case 'PAGE':
    case 'ARTICLE':
    case 'COLLECTION':
    return rawInput;
  }
  return;
}

/**
 * @type { SearchResultItemTypename }
 * @description GraphQL type name for search result items
 */
export type SearchResultItemTypename =
  | 'Product'
  | 'Page'
  | 'Article'
  | 'Collection'
;

export function decodeSearchResultItemTypename(rawInput: unknown): SearchResultItemTypename | null {
  switch (rawInput) {
    case 'Product':
    case 'Page':
    case 'Article':
    case 'Collection':
     return rawInput;
  }
  return null;
}

export function _decodeSearchResultItemTypename(rawInput: unknown): SearchResultItemTypename | undefined {
  switch (rawInput) {
    case 'Product':
    case 'Page':
    case 'Article':
    case 'Collection':
    return rawInput;
  }
  return;
}

/**
 * @type { SearchResultItemConnection }
 * @description Search results from a full-text search
 */
export type SearchResultItemConnection = {
  /**
   * @description Total number of matching results
   * @type { number }
   * @memberof SearchResultItemConnection
  */
  totalCount: number;
  /**
   * @type { SearchResultItemEdge[] }
   * @memberof SearchResultItemConnection
  */
  edges: SearchResultItemEdge[];
  /**
   * @type { SearchResultItem[] }
   * @memberof SearchResultItemConnection
  */
  nodes: SearchResultItem[] | null;
    /**
   * @type { PageInfo }
   * @memberof SearchResultItemConnection
  */
  pageInfo: PageInfo;
  /**
   * @description Available product filters for refining search
   * @type { Filter[] }
   * @memberof SearchResultItemConnection
  */
  productFilters: Filter[] | null;
  };

export function decodeSearchResultItemConnection(rawInput: unknown): SearchResultItemConnection | null {
  if (isJSON(rawInput)) {
    const decodedTotalCount = decodeNumber(rawInput['totalCount']);
    const decodedEdges = decodeArray(rawInput['edges'], decodeSearchResultItemEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeSearchResultItem);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);
    const decodedProductFilters = decodeArray(rawInput['productFilters'], decodeFilter);

    if (
      decodedTotalCount === null ||
      decodedEdges === null ||
      decodedPageInfo === null
    ) {
      return null;
    }

    return {
      totalCount: decodedTotalCount,
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo,
      productFilters: decodedProductFilters
    };
  }
  return null;
}


/**
 * @type { SearchResultItemEdge }
 * @description An edge in search results
 */
export type SearchResultItemEdge = {
  /**
   * @type { SearchResultItem }
   * @memberof SearchResultItemEdge
  */
  node: SearchResultItem;
  /**
   * @type { string }
   * @memberof SearchResultItemEdge
  */
  cursor: string;
};

export function decodeSearchResultItemEdge(rawInput: unknown): SearchResultItemEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeSearchResultItem(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null ||
      decodedCursor === null
    ) {
      return null;
    }

    return {
      node: decodedNode,
      cursor: decodedCursor
    };
  }
  return null;
}


/**
 * @type { SearchResultItem }
 * @description A search result item - union of Product, Page, Article, Collection. Check __typename field.
 */
export type SearchResultItem = {
  /**
   * @description The GraphQL type name (Product, Page, Article, Collection)
   * @type { SearchResultItemTypename }
   * @memberof SearchResultItem
  */
  __typename: SearchResultItemTypename | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  id: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  title: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  handle: string | null;
    /**
   * @description URL parameters for analytics tracking
   * @type { string }
   * @memberof SearchResultItem
  */
  trackingParameters: string | null;
    /**
   * @type { boolean }
   * @memberof SearchResultItem
  */
  availableForSale: boolean | null;
    /**
   * @type { ProductPriceRange }
   * @memberof SearchResultItem
  */
  priceRange: ProductPriceRange | null;
    /**
   * @type { ProductPriceRange }
   * @memberof SearchResultItem
  */
  compareAtPriceRange: ProductPriceRange | null;
    /**
   * @type { Image }
   * @memberof SearchResultItem
  */
  featuredImage: Image | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  vendor: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  productType: string | null;
    /**
   * @type { string[] }
   * @memberof SearchResultItem
  */
  tags: string[] | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  body: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  bodySummary: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  content: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  contentHtml: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  excerpt: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  excerptHtml: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  publishedAt: string | null;
    /**
   * @type { ArticleAuthor }
   * @memberof SearchResultItem
  */
  author: ArticleAuthor | null;
    /**
   * @type { BlogSummary }
   * @memberof SearchResultItem
  */
  blog: BlogSummary | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  description: string | null;
    /**
   * @type { string }
   * @memberof SearchResultItem
  */
  descriptionHtml: string | null;
    /**
   * @type { Image }
   * @memberof SearchResultItem
  */
  image: Image | null;
  };

export function decodeSearchResultItem(rawInput: unknown): SearchResultItem | null {
  if (isJSON(rawInput)) {
    const decodedTypename = decodeSearchResultItemTypename(rawInput['__typename']);
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedTrackingParameters = decodeString(rawInput['trackingParameters']);
    const decodedAvailableForSale = decodeBoolean(rawInput['availableForSale']);
    const decodedPriceRange = decodeProductPriceRange(rawInput['priceRange']);
    const decodedCompareAtPriceRange = decodeProductPriceRange(rawInput['compareAtPriceRange']);
    const decodedFeaturedImage = decodeImage(rawInput['featuredImage']);
    const decodedVendor = decodeString(rawInput['vendor']);
    const decodedProductType = decodeString(rawInput['productType']);
    const decodedTags = decodeArray(rawInput['tags'], decodeString);
    const decodedBody = decodeString(rawInput['body']);
    const decodedBodySummary = decodeString(rawInput['bodySummary']);
    const decodedContent = decodeString(rawInput['content']);
    const decodedContentHtml = decodeString(rawInput['contentHtml']);
    const decodedExcerpt = decodeString(rawInput['excerpt']);
    const decodedExcerptHtml = decodeString(rawInput['excerptHtml']);
    const decodedPublishedAt = decodeString(rawInput['publishedAt']);
    const decodedAuthor = decodeArticleAuthor(rawInput['author']);
    const decodedBlog = decodeBlogSummary(rawInput['blog']);
    const decodedDescription = decodeString(rawInput['description']);
    const decodedDescriptionHtml = decodeString(rawInput['descriptionHtml']);
    const decodedImage = decodeImage(rawInput['image']);


    return {
      __typename: decodedTypename,
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle,
      trackingParameters: decodedTrackingParameters,
      availableForSale: decodedAvailableForSale,
      priceRange: decodedPriceRange,
      compareAtPriceRange: decodedCompareAtPriceRange,
      featuredImage: decodedFeaturedImage,
      vendor: decodedVendor,
      productType: decodedProductType,
      tags: decodedTags,
      body: decodedBody,
      bodySummary: decodedBodySummary,
      content: decodedContent,
      contentHtml: decodedContentHtml,
      excerpt: decodedExcerpt,
      excerptHtml: decodedExcerptHtml,
      publishedAt: decodedPublishedAt,
      author: decodedAuthor,
      blog: decodedBlog,
      description: decodedDescription,
      descriptionHtml: decodedDescriptionHtml,
      image: decodedImage
    };
  }
  return null;
}


/**
 * @type { PredictiveSearchResult }
 * @description Results from predictive search query
 */
export type PredictiveSearchResult = {
  /**
   * @description Products matching the search
   * @type { Product[] }
   * @memberof PredictiveSearchResult
  */
  products: Product[];
  /**
   * @description Collections matching the search
   * @type { Collection[] }
   * @memberof PredictiveSearchResult
  */
  collections: Collection[];
  /**
   * @description Pages matching the search
   * @type { Page[] }
   * @memberof PredictiveSearchResult
  */
  pages: Page[];
  /**
   * @description Articles matching the search
   * @type { Article[] }
   * @memberof PredictiveSearchResult
  */
  articles: Article[];
  /**
   * @description Search query suggestions
   * @type { SearchQuerySuggestion[] }
   * @memberof PredictiveSearchResult
  */
  queries: SearchQuerySuggestion[];
};

export function decodePredictiveSearchResult(rawInput: unknown): PredictiveSearchResult | null {
  if (isJSON(rawInput)) {
    const decodedProducts = decodeArray(rawInput['products'], decodeProduct);
    const decodedCollections = decodeArray(rawInput['collections'], decodeCollection);
    const decodedPages = decodeArray(rawInput['pages'], decodePage);
    const decodedArticles = decodeArray(rawInput['articles'], decodeArticle);
    const decodedQueries = decodeArray(rawInput['queries'], decodeSearchQuerySuggestion);

    if (
      decodedProducts === null ||
      decodedCollections === null ||
      decodedPages === null ||
      decodedArticles === null ||
      decodedQueries === null
    ) {
      return null;
    }

    return {
      products: decodedProducts,
      collections: decodedCollections,
      pages: decodedPages,
      articles: decodedArticles,
      queries: decodedQueries
    };
  }
  return null;
}


/**
 * @type { SearchQuerySuggestion }
 * @description A search query suggestion
 */
export type SearchQuerySuggestion = {
  /**
   * @description The suggested query text
   * @type { string }
   * @memberof SearchQuerySuggestion
  */
  text: string;
  /**
   * @description Query text with HTML highlighting
   * @type { string }
   * @memberof SearchQuerySuggestion
  */
  styledText: string;
  /**
   * @description URL parameters for analytics tracking
   * @type { string }
   * @memberof SearchQuerySuggestion
  */
  trackingParameters: string | null;
  };

export function decodeSearchQuerySuggestion(rawInput: unknown): SearchQuerySuggestion | null {
  if (isJSON(rawInput)) {
    const decodedText = decodeString(rawInput['text']);
    const decodedStyledText = decodeString(rawInput['styledText']);
    const decodedTrackingParameters = decodeString(rawInput['trackingParameters']);

    if (
      decodedText === null ||
      decodedStyledText === null
    ) {
      return null;
    }

    return {
      text: decodedText,
      styledText: decodedStyledText,
      trackingParameters: decodedTrackingParameters
    };
  }
  return null;
}


/**
 * @type { SearchSortKeys }
 * @description Sort keys for search queries
 */
export type SearchSortKeys =
  | 'RELEVANCE'
  | 'PRICE'
;

export function decodeSearchSortKeys(rawInput: unknown): SearchSortKeys | null {
  switch (rawInput) {
    case 'RELEVANCE':
    case 'PRICE':
     return rawInput;
  }
  return null;
}

export function _decodeSearchSortKeys(rawInput: unknown): SearchSortKeys | undefined {
  switch (rawInput) {
    case 'RELEVANCE':
    case 'PRICE':
    return rawInput;
  }
  return;
}

/**
 * @type { SearchType }
 * @description Types of resources to search
 */
export type SearchType =
  | 'PRODUCT'
  | 'PAGE'
  | 'ARTICLE'
;

export function decodeSearchType(rawInput: unknown): SearchType | null {
  switch (rawInput) {
    case 'PRODUCT':
    case 'PAGE':
    case 'ARTICLE':
     return rawInput;
  }
  return null;
}

export function _decodeSearchType(rawInput: unknown): SearchType | undefined {
  switch (rawInput) {
    case 'PRODUCT':
    case 'PAGE':
    case 'ARTICLE':
    return rawInput;
  }
  return;
}

/**
 * @type { PredictiveSearchType }
 * @description Types of resources for predictive search
 */
export type PredictiveSearchType =
  | 'PRODUCT'
  | 'COLLECTION'
  | 'PAGE'
  | 'ARTICLE'
  | 'QUERY'
;

export function decodePredictiveSearchType(rawInput: unknown): PredictiveSearchType | null {
  switch (rawInput) {
    case 'PRODUCT':
    case 'COLLECTION':
    case 'PAGE':
    case 'ARTICLE':
    case 'QUERY':
     return rawInput;
  }
  return null;
}

export function _decodePredictiveSearchType(rawInput: unknown): PredictiveSearchType | undefined {
  switch (rawInput) {
    case 'PRODUCT':
    case 'COLLECTION':
    case 'PAGE':
    case 'ARTICLE':
    case 'QUERY':
    return rawInput;
  }
  return;
}

/**
 * @type { SearchPrefixQueryType }
 * @description How to treat the last word in the search query
 */
export type SearchPrefixQueryType =
  | 'LAST'
  | 'NONE'
;

export function decodeSearchPrefixQueryType(rawInput: unknown): SearchPrefixQueryType | null {
  switch (rawInput) {
    case 'LAST':
    case 'NONE':
     return rawInput;
  }
  return null;
}

export function _decodeSearchPrefixQueryType(rawInput: unknown): SearchPrefixQueryType | undefined {
  switch (rawInput) {
    case 'LAST':
    case 'NONE':
    return rawInput;
  }
  return;
}

/**
 * @type { SearchUnavailableProductsType }
 * @description How to handle unavailable products in search
 */
export type SearchUnavailableProductsType =
  | 'SHOW'
  | 'HIDE'
  | 'LAST'
;

export function decodeSearchUnavailableProductsType(rawInput: unknown): SearchUnavailableProductsType | null {
  switch (rawInput) {
    case 'SHOW':
    case 'HIDE':
    case 'LAST':
     return rawInput;
  }
  return null;
}

export function _decodeSearchUnavailableProductsType(rawInput: unknown): SearchUnavailableProductsType | undefined {
  switch (rawInput) {
    case 'SHOW':
    case 'HIDE':
    case 'LAST':
    return rawInput;
  }
  return;
}

/**
 * @type { PredictiveSearchLimitScope }
 * @description Scope for predictive search result limit
 */
export type PredictiveSearchLimitScope =
  | 'ALL'
  | 'EACH'
;

export function decodePredictiveSearchLimitScope(rawInput: unknown): PredictiveSearchLimitScope | null {
  switch (rawInput) {
    case 'ALL':
    case 'EACH':
     return rawInput;
  }
  return null;
}

export function _decodePredictiveSearchLimitScope(rawInput: unknown): PredictiveSearchLimitScope | undefined {
  switch (rawInput) {
    case 'ALL':
    case 'EACH':
    return rawInput;
  }
  return;
}

/**
 * @type { SearchableField }
 * @description Specifies fields to search within
 */
export type SearchableField =
  | 'AUTHOR'
  | 'BODY'
  | 'PRODUCT_TYPE'
  | 'TAG'
  | 'TITLE'
  | 'VARIANTS_BARCODE'
  | 'VARIANTS_SKU'
  | 'VARIANTS_TITLE'
  | 'VENDOR'
;

export function decodeSearchableField(rawInput: unknown): SearchableField | null {
  switch (rawInput) {
    case 'AUTHOR':
    case 'BODY':
    case 'PRODUCT_TYPE':
    case 'TAG':
    case 'TITLE':
    case 'VARIANTS_BARCODE':
    case 'VARIANTS_SKU':
    case 'VARIANTS_TITLE':
    case 'VENDOR':
     return rawInput;
  }
  return null;
}

export function _decodeSearchableField(rawInput: unknown): SearchableField | undefined {
  switch (rawInput) {
    case 'AUTHOR':
    case 'BODY':
    case 'PRODUCT_TYPE':
    case 'TAG':
    case 'TITLE':
    case 'VARIANTS_BARCODE':
    case 'VARIANTS_SKU':
    case 'VARIANTS_TITLE':
    case 'VENDOR':
    return rawInput;
  }
  return;
}

/**
 * @type { SearchArgs }
 * @description Arguments for search queries
 */
export type SearchArgs = {
  /**
   * @description Search query string
   * @type { string }
   * @memberof SearchArgs
  */
  query: string;
  /**
   * @type { number }
   * @memberof SearchArgs
  */
  first: number | null;
    /**
   * @type { string }
   * @memberof SearchArgs
  */
  after: string | null;
    /**
   * @type { number }
   * @memberof SearchArgs
  */
  last: number | null;
    /**
   * @type { string }
   * @memberof SearchArgs
  */
  before: string | null;
    /**
   * @type { boolean }
   * @memberof SearchArgs
  */
  reverse: boolean | null;
    /**
   * @type { SearchSortKeys }
   * @memberof SearchArgs
  */
  sortKey: SearchSortKeys | null;
    /**
   * @description Types of resources to search
   * @type { string[] }
   * @memberof SearchArgs
  */
  types: string[] | null;
    /**
   * @type { ProductFilter[] }
   * @memberof SearchArgs
  */
  productFilters: ProductFilter[] | null;
    /**
   * @type { SearchPrefixQueryType }
   * @memberof SearchArgs
  */
  prefix: SearchPrefixQueryType | null;
    /**
   * @type { SearchUnavailableProductsType }
   * @memberof SearchArgs
  */
  unavailableProducts: SearchUnavailableProductsType | null;
  };

export function decodeSearchArgs(rawInput: unknown): SearchArgs | null {
  if (isJSON(rawInput)) {
    const decodedQuery = decodeString(rawInput['query']);
    const decodedFirst = decodeNumber(rawInput['first']);
    const decodedAfter = decodeString(rawInput['after']);
    const decodedLast = decodeNumber(rawInput['last']);
    const decodedBefore = decodeString(rawInput['before']);
    const decodedReverse = decodeBoolean(rawInput['reverse']);
    const decodedSortKey = decodeSearchSortKeys(rawInput['sortKey']);
    const decodedTypes = decodeArray(rawInput['types'], decodeString);
    const decodedProductFilters = decodeArray(rawInput['productFilters'], decodeProductFilter);
    const decodedPrefix = decodeSearchPrefixQueryType(rawInput['prefix']);
    const decodedUnavailableProducts = decodeSearchUnavailableProductsType(rawInput['unavailableProducts']);

    if (
      decodedQuery === null
    ) {
      return null;
    }

    return {
      query: decodedQuery,
      first: decodedFirst,
      after: decodedAfter,
      last: decodedLast,
      before: decodedBefore,
      reverse: decodedReverse,
      sortKey: decodedSortKey,
      types: decodedTypes,
      productFilters: decodedProductFilters,
      prefix: decodedPrefix,
      unavailableProducts: decodedUnavailableProducts
    };
  }
  return null;
}


/**
 * @type { PredictiveSearchArgs }
 * @description Arguments for predictive search queries
 */
export type PredictiveSearchArgs = {
  /**
   * @description Search query string
   * @type { string }
   * @memberof PredictiveSearchArgs
  */
  query: string;
  /**
   * @description Maximum number of results
   * @type { number }
   * @memberof PredictiveSearchArgs
  */
  limit: number | null;
    /**
   * @type { PredictiveSearchLimitScope }
   * @memberof PredictiveSearchArgs
  */
  limitScope: PredictiveSearchLimitScope | null;
    /**
   * @type { string[] }
   * @memberof PredictiveSearchArgs
  */
  types: string[] | null;
    /**
   * @description Fields to search within
   * @type { string[] }
   * @memberof PredictiveSearchArgs
  */
  searchableFields: string[] | null;
    /**
   * @type { SearchUnavailableProductsType }
   * @memberof PredictiveSearchArgs
  */
  unavailableProducts: SearchUnavailableProductsType | null;
  };

export function decodePredictiveSearchArgs(rawInput: unknown): PredictiveSearchArgs | null {
  if (isJSON(rawInput)) {
    const decodedQuery = decodeString(rawInput['query']);
    const decodedLimit = decodeNumber(rawInput['limit']);
    const decodedLimitScope = decodePredictiveSearchLimitScope(rawInput['limitScope']);
    const decodedTypes = decodeArray(rawInput['types'], decodeString);
    const decodedSearchableFields = decodeArray(rawInput['searchableFields'], decodeString);
    const decodedUnavailableProducts = decodeSearchUnavailableProductsType(rawInput['unavailableProducts']);

    if (
      decodedQuery === null
    ) {
      return null;
    }

    return {
      query: decodedQuery,
      limit: decodedLimit,
      limitScope: decodedLimitScope,
      types: decodedTypes,
      searchableFields: decodedSearchableFields,
      unavailableProducts: decodedUnavailableProducts
    };
  }
  return null;
}





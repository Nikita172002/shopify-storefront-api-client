import { type Image, decodeImage,  type SEO, decodeSEO,  type Money, decodeMoney,  type ProductPriceRange, decodeProductPriceRange,  type ProductOptionValueSwatch, decodeProductOptionValueSwatch,  type WeightUnit, decodeWeightUnit,  type SelectedOption, decodeSelectedOption,  type ProductSummary, decodeProductSummary,  type UnitPriceMeasurementMeasuredType, decodeUnitPriceMeasurementMeasuredType,  type UnitPriceMeasurementMeasuredUnit, decodeUnitPriceMeasurementMeasuredUnit,  type UnitPriceMeasurement, decodeUnitPriceMeasurement,  type MetafieldParentResourceTypename, decodeMetafieldParentResourceTypename,  type MetafieldParentResource, decodeMetafieldParentResource,  type MetafieldReferenceTypename, decodeMetafieldReferenceTypename,  type VideoSource, decodeVideoSource,  type Model3dSource, decodeModel3dSource,  type MetafieldReference, decodeMetafieldReference,  type MetafieldReferenceEdge, decodeMetafieldReferenceEdge,  type PageInfo, decodePageInfo,  type MetafieldReferenceConnection, decodeMetafieldReferenceConnection,  type Metafield, decodeMetafield,  type SellingPlanCheckoutChargeType, decodeSellingPlanCheckoutChargeType,  type SellingPlanCheckoutChargeValue, decodeSellingPlanCheckoutChargeValue,  type SellingPlanCheckoutCharge, decodeSellingPlanCheckoutCharge,  type SellingPlanPriceAdjustment, decodeSellingPlanPriceAdjustment,  type SellingPlanOption, decodeSellingPlanOption,  type SellingPlanInterval, decodeSellingPlanInterval,  type SellingPlanRecurringBillingPolicy, decodeSellingPlanRecurringBillingPolicy,  type SellingPlanBillingPolicy, decodeSellingPlanBillingPolicy,  type SellingPlanRecurringDeliveryPolicy, decodeSellingPlanRecurringDeliveryPolicy,  type SellingPlanDeliveryPolicy, decodeSellingPlanDeliveryPolicy,  type SellingPlan, decodeSellingPlan,  type SellingPlanAllocationPriceAdjustment, decodeSellingPlanAllocationPriceAdjustment,  type SellingPlanAllocation, decodeSellingPlanAllocation,  type SellingPlanAllocationEdge, decodeSellingPlanAllocationEdge,  type SellingPlanAllocationConnection, decodeSellingPlanAllocationConnection,  type MailingAddress, decodeMailingAddress,  type Location, decodeLocation,  type StoreAvailability, decodeStoreAvailability,  type StoreAvailabilityEdge, decodeStoreAvailabilityEdge,  type StoreAvailabilityConnection, decodeStoreAvailabilityConnection,  type QuantityRule, decodeQuantityRule,  type QuantityPriceBreak, decodeQuantityPriceBreak,  type QuantityPriceBreakEdge, decodeQuantityPriceBreakEdge,  type QuantityPriceBreakConnection, decodeQuantityPriceBreakConnection,  type ProductVariant, decodeProductVariant,  type ProductVariantComponent, decodeProductVariantComponent,  type ProductVariantComponentEdge, decodeProductVariantComponentEdge,  type ProductVariantComponentConnection, decodeProductVariantComponentConnection,  type ProductVariantEdge, decodeProductVariantEdge,  type ProductVariantConnection, decodeProductVariantConnection,  type ShopPayInstallmentsProductVariantPricing, decodeShopPayInstallmentsProductVariantPricing,  type ProductOptionValue, decodeProductOptionValue,  type ProductOption, decodeProductOption,  type ImageEdge, decodeImageEdge,  type ImageConnection, decodeImageConnection,  type TaxonomyCategory, decodeTaxonomyCategory,  type MediaContentType, decodeMediaContentType,  type Media, decodeMedia,  type MediaEdge, decodeMediaEdge,  type MediaConnection, decodeMediaConnection,  type SellingPlanGroupOption, decodeSellingPlanGroupOption,  type SellingPlanEdge, decodeSellingPlanEdge,  type SellingPlanConnection, decodeSellingPlanConnection,  type SellingPlanGroup, decodeSellingPlanGroup,  type SellingPlanGroupEdge, decodeSellingPlanGroupEdge,  type SellingPlanGroupConnection, decodeSellingPlanGroupConnection,  type CountPrecision, decodeCountPrecision,  type Count, decodeCount,  type Product, decodeProduct,  type ProductEdge, decodeProductEdge,  type ProductConnection, decodeProductConnection,  type VariantOptionFilter, decodeVariantOptionFilter,  type PriceFilter, decodePriceFilter,  type MetafieldFilter, decodeMetafieldFilter,  type ProductFilter, decodeProductFilter  } from './index';
import { isJSON, decodeString, _decodeString , decodeNumber, _decodeNumber , decodeBoolean, _decodeBoolean , decodeArray, _decodeArray  } from 'type-decoder';

/**
 * @type { Collection }
 * @description A collection of products to organize and make shops easier to browse
 */
export type Collection = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Collection
  */
  id: string;
  /**
   * @description Collection title (limit 255 characters)
   * @type { string }
   * @memberof Collection
  */
  title: string;
  /**
   * @description URL-friendly identifier (limit 255 characters)
   * @type { string }
   * @memberof Collection
  */
  handle: string;
  /**
   * @description Collection description (plain text)
   * @type { string }
   * @memberof Collection
  */
  description: string | null;
    /**
   * @description Collection description (HTML)
   * @type { string }
   * @memberof Collection
  */
  descriptionHtml: string | null;
    /**
   * @description When the collection was last updated
   * @type { string }
   * @memberof Collection
  */
  updatedAt: string | null;
    /**
   * @description Image associated with the collection
   * @type { Image }
   * @memberof Collection
  */
  image: Image | null;
    /**
   * @description SEO information for the collection
   * @type { SEO }
   * @memberof Collection
  */
  seo: SEO;
  /**
   * @description Products in the collection
   * @type { ProductConnection }
   * @memberof Collection
  */
  products: ProductConnection | null;
    /**
   * @description A custom field associated with the collection
   * @type { Metafield }
   * @memberof Collection
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields
   * @type { Metafield[] }
   * @memberof Collection
  */
  metafields: Metafield[] | null;
    /**
   * @description URL on the online store (null if not published)
   * @type { string }
   * @memberof Collection
  */
  onlineStoreUrl: string | null;
    /**
   * @description URL parameters for analytics tracking
   * @type { string }
   * @memberof Collection
  */
  trackingParameters: string | null;
  };

export function decodeCollection(rawInput: unknown): Collection | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedDescription = decodeString(rawInput['description']);
    const decodedDescriptionHtml = decodeString(rawInput['descriptionHtml']);
    const decodedUpdatedAt = decodeString(rawInput['updatedAt']);
    const decodedImage = decodeImage(rawInput['image']);
    const decodedSeo = decodeSEO(rawInput['seo']);
    const decodedProducts = decodeProductConnection(rawInput['products']);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);
    const decodedOnlineStoreUrl = decodeString(rawInput['onlineStoreUrl']);
    const decodedTrackingParameters = decodeString(rawInput['trackingParameters']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedHandle === null ||
      decodedSeo === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle,
      description: decodedDescription,
      descriptionHtml: decodedDescriptionHtml,
      updatedAt: decodedUpdatedAt,
      image: decodedImage,
      seo: decodedSeo,
      products: decodedProducts,
      metafield: decodedMetafield,
      metafields: decodedMetafields,
      onlineStoreUrl: decodedOnlineStoreUrl,
      trackingParameters: decodedTrackingParameters
    };
  }
  return null;
}


/**
 * @type { CollectionConnection }
 * @description Paginated list of collections
 */
export type CollectionConnection = {
  /**
   * @type { CollectionEdge[] }
   * @memberof CollectionConnection
  */
  edges: CollectionEdge[] | null;
    /**
   * @type { Collection[] }
   * @memberof CollectionConnection
  */
  nodes: Collection[];
  /**
   * @type { PageInfo }
   * @memberof CollectionConnection
  */
  pageInfo: PageInfo;
  /**
   * @description The total count of collections
   * @type { number }
   * @memberof CollectionConnection
  */
  totalCount: number | null;
  };

export function decodeCollectionConnection(rawInput: unknown): CollectionConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeCollectionEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeCollection);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);
    const decodedTotalCount = decodeNumber(rawInput['totalCount']);

    if (
      decodedNodes === null ||
      decodedPageInfo === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo,
      totalCount: decodedTotalCount
    };
  }
  return null;
}


/**
 * @type { CollectionEdge }
 * @description An edge in a collection connection
 */
export type CollectionEdge = {
  /**
   * @type { Collection }
   * @memberof CollectionEdge
  */
  node: Collection;
  /**
   * @type { string }
   * @memberof CollectionEdge
  */
  cursor: string;
};

export function decodeCollectionEdge(rawInput: unknown): CollectionEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeCollection(rawInput['node']);
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
 * @type { FilterType }
 * @description Type of collection filter
 */
export type FilterType =
  | 'LIST'
  | 'PRICE_RANGE'
  | 'BOOLEAN'
;

export function decodeFilterType(rawInput: unknown): FilterType | null {
  switch (rawInput) {
    case 'LIST':
    case 'PRICE_RANGE':
    case 'BOOLEAN':
     return rawInput;
  }
  return null;
}

export function _decodeFilterType(rawInput: unknown): FilterType | undefined {
  switch (rawInput) {
    case 'LIST':
    case 'PRICE_RANGE':
    case 'BOOLEAN':
    return rawInput;
  }
  return;
}

/**
 * @type { Filter }
 * @description A filter for products in a collection
 */
export type Filter = {
  /**
   * @type { string }
   * @memberof Filter
  */
  id: string;
  /**
   * @type { string }
   * @memberof Filter
  */
  label: string;
  /**
   * @type { FilterType }
   * @memberof Filter
  */
  type: FilterType;
  /**
   * @type { FilterValue[] }
   * @memberof Filter
  */
  values: FilterValue[];
};

export function decodeFilter(rawInput: unknown): Filter | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedLabel = decodeString(rawInput['label']);
    const decodedType = decodeFilterType(rawInput['type']);
    const decodedValues = decodeArray(rawInput['values'], decodeFilterValue);

    if (
      decodedId === null ||
      decodedLabel === null ||
      decodedType === null ||
      decodedValues === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      label: decodedLabel,
      type: decodedType,
      values: decodedValues
    };
  }
  return null;
}


/**
 * @type { FilterValue }
 * @description A value for a collection filter
 */
export type FilterValue = {
  /**
   * @type { string }
   * @memberof FilterValue
  */
  id: string;
  /**
   * @type { string }
   * @memberof FilterValue
  */
  label: string;
  /**
   * @description Number of products matching this filter value
   * @type { number }
   * @memberof FilterValue
  */
  count: number;
  /**
   * @description JSON-encoded filter input
   * @type { string }
   * @memberof FilterValue
  */
  input: string | null;
  };

export function decodeFilterValue(rawInput: unknown): FilterValue | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedLabel = decodeString(rawInput['label']);
    const decodedCount = decodeNumber(rawInput['count']);
    const decodedInput = decodeString(rawInput['input']);

    if (
      decodedId === null ||
      decodedLabel === null ||
      decodedCount === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      label: decodedLabel,
      count: decodedCount,
      input: decodedInput
    };
  }
  return null;
}


/**
 * @type { CollectionSortKeys }
 * @description Sort keys for collection queries
 */
export type CollectionSortKeys =
  | 'TITLE'
  | 'UPDATED_AT'
  | 'ID'
  | 'RELEVANCE'
;

export function decodeCollectionSortKeys(rawInput: unknown): CollectionSortKeys | null {
  switch (rawInput) {
    case 'TITLE':
    case 'UPDATED_AT':
    case 'ID':
    case 'RELEVANCE':
     return rawInput;
  }
  return null;
}

export function _decodeCollectionSortKeys(rawInput: unknown): CollectionSortKeys | undefined {
  switch (rawInput) {
    case 'TITLE':
    case 'UPDATED_AT':
    case 'ID':
    case 'RELEVANCE':
    return rawInput;
  }
  return;
}

/**
 * @type { ProductCollectionSortKeys }
 * @description Sort keys for products within a collection
 */
export type ProductCollectionSortKeys =
  | 'TITLE'
  | 'PRICE'
  | 'BEST_SELLING'
  | 'CREATED'
  | 'ID'
  | 'MANUAL'
  | 'COLLECTION_DEFAULT'
  | 'RELEVANCE'
;

export function decodeProductCollectionSortKeys(rawInput: unknown): ProductCollectionSortKeys | null {
  switch (rawInput) {
    case 'TITLE':
    case 'PRICE':
    case 'BEST_SELLING':
    case 'CREATED':
    case 'ID':
    case 'MANUAL':
    case 'COLLECTION_DEFAULT':
    case 'RELEVANCE':
     return rawInput;
  }
  return null;
}

export function _decodeProductCollectionSortKeys(rawInput: unknown): ProductCollectionSortKeys | undefined {
  switch (rawInput) {
    case 'TITLE':
    case 'PRICE':
    case 'BEST_SELLING':
    case 'CREATED':
    case 'ID':
    case 'MANUAL':
    case 'COLLECTION_DEFAULT':
    case 'RELEVANCE':
    return rawInput;
  }
  return;
}

/**
 * @type { GetCollectionsArgs }
 * @description Arguments for fetching collections
 */
export type GetCollectionsArgs = {
  /**
   * @type { number }
   * @memberof GetCollectionsArgs
  */
  first: number | null;
    /**
   * @type { string }
   * @memberof GetCollectionsArgs
  */
  after: string | null;
    /**
   * @type { number }
   * @memberof GetCollectionsArgs
  */
  last: number | null;
    /**
   * @type { string }
   * @memberof GetCollectionsArgs
  */
  before: string | null;
    /**
   * @type { boolean }
   * @memberof GetCollectionsArgs
  */
  reverse: boolean | null;
    /**
   * @type { CollectionSortKeys }
   * @memberof GetCollectionsArgs
  */
  sortKey: CollectionSortKeys | null;
    /**
   * @type { string }
   * @memberof GetCollectionsArgs
  */
  query: string | null;
  };

export function decodeGetCollectionsArgs(rawInput: unknown): GetCollectionsArgs | null {
  if (isJSON(rawInput)) {
    const decodedFirst = decodeNumber(rawInput['first']);
    const decodedAfter = decodeString(rawInput['after']);
    const decodedLast = decodeNumber(rawInput['last']);
    const decodedBefore = decodeString(rawInput['before']);
    const decodedReverse = decodeBoolean(rawInput['reverse']);
    const decodedSortKey = decodeCollectionSortKeys(rawInput['sortKey']);
    const decodedQuery = decodeString(rawInput['query']);


    return {
      first: decodedFirst,
      after: decodedAfter,
      last: decodedLast,
      before: decodedBefore,
      reverse: decodedReverse,
      sortKey: decodedSortKey,
      query: decodedQuery
    };
  }
  return null;
}


/**
 * @type { GetCollectionProductsArgs }
 * @description Arguments for fetching products in a collection
 */
export type GetCollectionProductsArgs = {
  /**
   * @type { number }
   * @memberof GetCollectionProductsArgs
  */
  first: number | null;
    /**
   * @type { string }
   * @memberof GetCollectionProductsArgs
  */
  after: string | null;
    /**
   * @type { number }
   * @memberof GetCollectionProductsArgs
  */
  last: number | null;
    /**
   * @type { string }
   * @memberof GetCollectionProductsArgs
  */
  before: string | null;
    /**
   * @type { boolean }
   * @memberof GetCollectionProductsArgs
  */
  reverse: boolean | null;
    /**
   * @type { ProductCollectionSortKeys }
   * @memberof GetCollectionProductsArgs
  */
  sortKey: ProductCollectionSortKeys | null;
    /**
   * @type { ProductFilter[] }
   * @memberof GetCollectionProductsArgs
  */
  filters: ProductFilter[] | null;
  };

export function decodeGetCollectionProductsArgs(rawInput: unknown): GetCollectionProductsArgs | null {
  if (isJSON(rawInput)) {
    const decodedFirst = decodeNumber(rawInput['first']);
    const decodedAfter = decodeString(rawInput['after']);
    const decodedLast = decodeNumber(rawInput['last']);
    const decodedBefore = decodeString(rawInput['before']);
    const decodedReverse = decodeBoolean(rawInput['reverse']);
    const decodedSortKey = decodeProductCollectionSortKeys(rawInput['sortKey']);
    const decodedFilters = decodeArray(rawInput['filters'], decodeProductFilter);


    return {
      first: decodedFirst,
      after: decodedAfter,
      last: decodedLast,
      before: decodedBefore,
      reverse: decodedReverse,
      sortKey: decodedSortKey,
      filters: decodedFilters
    };
  }
  return null;
}





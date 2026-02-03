import { type Image, decodeImage,  type Money, decodeMoney,  type SEO, decodeSEO,  type SelectedOption, decodeSelectedOption,  type MetafieldParentResourceTypename, decodeMetafieldParentResourceTypename,  type MetafieldParentResource, decodeMetafieldParentResource,  type MetafieldReferenceTypename, decodeMetafieldReferenceTypename,  type MetafieldReference, decodeMetafieldReference,  type MetafieldReferenceEdge, decodeMetafieldReferenceEdge,  type PageInfo, decodePageInfo,  type MetafieldReferenceConnection, decodeMetafieldReferenceConnection,  type Metafield, decodeMetafield,  type SellingPlanCheckoutChargeType, decodeSellingPlanCheckoutChargeType,  type SellingPlanCheckoutChargeValue, decodeSellingPlanCheckoutChargeValue,  type SellingPlanCheckoutCharge, decodeSellingPlanCheckoutCharge,  type SellingPlanPriceAdjustment, decodeSellingPlanPriceAdjustment,  type SellingPlanOption, decodeSellingPlanOption,  type SellingPlanInterval, decodeSellingPlanInterval,  type SellingPlanRecurringBillingPolicy, decodeSellingPlanRecurringBillingPolicy,  type SellingPlanBillingPolicy, decodeSellingPlanBillingPolicy,  type SellingPlanRecurringDeliveryPolicy, decodeSellingPlanRecurringDeliveryPolicy,  type SellingPlanDeliveryPolicy, decodeSellingPlanDeliveryPolicy,  type SellingPlan, decodeSellingPlan,  type SellingPlanAllocationPriceAdjustment, decodeSellingPlanAllocationPriceAdjustment,  type SellingPlanAllocation, decodeSellingPlanAllocation,  type MailingAddress, decodeMailingAddress,  type CountPrecision, decodeCountPrecision,  type Count, decodeCount,  type FilterType, decodeFilterType,  type FilterValue, decodeFilterValue,  type Filter, decodeFilter  } from './index';
import { isJSON, decodeString, _decodeString , decodeBoolean, _decodeBoolean , decodeNumber, _decodeNumber , decodeArray, _decodeArray  } from 'type-decoder';

/**
 * @type { Product }
 * @description A product in the store with variants, options, and media
 */
export type Product = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Product
  */
  id: string;
  /**
   * @description Product title
   * @type { string }
   * @memberof Product
  */
  title: string;
  /**
   * @description URL-friendly identifier
   * @type { string }
   * @memberof Product
  */
  handle: string;
  /**
   * @description Product description (plain text)
   * @type { string }
   * @memberof Product
  */
  description: string | null;
    /**
   * @description Product description (HTML)
   * @type { string }
   * @memberof Product
  */
  descriptionHtml: string | null;
    /**
   * @description Product vendor
   * @type { string }
   * @memberof Product
  */
  vendor: string;
  /**
   * @description Product type
   * @type { string }
   * @memberof Product
  */
  productType: string;
  /**
   * @description When the product was created
   * @type { string }
   * @memberof Product
  */
  createdAt: string | null;
    /**
   * @description When the product was last updated
   * @type { string }
   * @memberof Product
  */
  updatedAt: string | null;
    /**
   * @description When the product was published
   * @type { string }
   * @memberof Product
  */
  publishedAt: string | null;
    /**
   * @description Whether at least one variant is available for sale
   * @type { boolean }
   * @memberof Product
  */
  availableForSale: boolean;
  /**
   * @description Total inventory across all variants
   * @type { number }
   * @memberof Product
  */
  totalInventory: number | null;
    /**
   * @description The featured image (equivalent to images first: 1)
   * @type { Image }
   * @memberof Product
  */
  featuredImage: Image | null;
    /**
   * @description Min and max prices across variants
   * @type { ProductPriceRange }
   * @memberof Product
  */
  priceRange: ProductPriceRange;
  /**
   * @description Compare at price range for sale pricing
   * @type { ProductPriceRange }
   * @memberof Product
  */
  compareAtPriceRange: ProductPriceRange;
  /**
   * @type { SEO }
   * @memberof Product
  */
  seo: SEO;
  /**
   * @description Searchable keywords associated with the product
   * @type { string[] }
   * @memberof Product
  */
  tags: string[];
  /**
   * @description Product options like Size, Color
   * @type { ProductOption[] }
   * @memberof Product
  */
  options: ProductOption[] | null;
    /**
   * @type { ImageConnection }
   * @memberof Product
  */
  images: ImageConnection | null;
    /**
   * @type { ProductVariantConnection }
   * @memberof Product
  */
  variants: ProductVariantConnection | null;
    /**
   * @description A custom field associated with the product
   * @type { Metafield }
   * @memberof Product
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields
   * @type { Metafield[] }
   * @memberof Product
  */
  metafields: Metafield[] | null;
    /**
   * @description Whether the product is a gift card
   * @type { boolean }
   * @memberof Product
  */
  isGiftCard: boolean | null;
    /**
   * @description URL on the online store (null if not published)
   * @type { string }
   * @memberof Product
  */
  onlineStoreUrl: string | null;
    /**
   * @description Whether the product can only be purchased with a selling plan
   * @type { boolean }
   * @memberof Product
  */
  requiresSellingPlan: boolean | null;
    /**
   * @description Product category from Shopify Standard Product Taxonomy
   * @type { TaxonomyCategory }
   * @memberof Product
  */
  category: TaxonomyCategory | null;
    /**
   * @description Media associated with the product (images, videos, 3D models)
   * @type { MediaConnection }
   * @memberof Product
  */
  media: MediaConnection | null;
    /**
   * @description Selling plan groups for subscriptions
   * @type { SellingPlanGroupConnection }
   * @memberof Product
  */
  sellingPlanGroups: SellingPlanGroupConnection | null;
    /**
   * @description Variants differing by one option from selected options
   * @type { ProductVariant[] }
   * @memberof Product
  */
  adjacentVariants: ProductVariant[] | null;
    /**
   * @description Find active variant based on selected options or first available
   * @type { ProductVariant }
   * @memberof Product
  */
  selectedOrFirstAvailableVariant: ProductVariant | null;
    /**
   * @description Find variant by selected options
   * @type { ProductVariant }
   * @memberof Product
  */
  variantBySelectedOptions: ProductVariant | null;
    /**
   * @description Number of variants
   * @type { Count }
   * @memberof Product
  */
  variantsCount: Count | null;
    /**
   * @description Encoded string of all option value combinations with variants
   * @type { string }
   * @memberof Product
  */
  encodedVariantExistence: string | null;
    /**
   * @description Encoded string of available variant combinations
   * @type { string }
   * @memberof Product
  */
  encodedVariantAvailability: string | null;
    /**
   * @description URL parameters for analytics tracking
   * @type { string }
   * @memberof Product
  */
  trackingParameters: string | null;
  };

export function decodeProduct(rawInput: unknown): Product | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedDescription = decodeString(rawInput['description']);
    const decodedDescriptionHtml = decodeString(rawInput['descriptionHtml']);
    const decodedVendor = decodeString(rawInput['vendor']);
    const decodedProductType = decodeString(rawInput['productType']);
    const decodedCreatedAt = decodeString(rawInput['createdAt']);
    const decodedUpdatedAt = decodeString(rawInput['updatedAt']);
    const decodedPublishedAt = decodeString(rawInput['publishedAt']);
    const decodedAvailableForSale = decodeBoolean(rawInput['availableForSale']);
    const decodedTotalInventory = decodeNumber(rawInput['totalInventory']);
    const decodedFeaturedImage = decodeImage(rawInput['featuredImage']);
    const decodedPriceRange = decodeProductPriceRange(rawInput['priceRange']);
    const decodedCompareAtPriceRange = decodeProductPriceRange(rawInput['compareAtPriceRange']);
    const decodedSeo = decodeSEO(rawInput['seo']);
    const decodedTags = decodeArray(rawInput['tags'], decodeString);
    const decodedOptions = decodeArray(rawInput['options'], decodeProductOption);
    const decodedImages = decodeImageConnection(rawInput['images']);
    const decodedVariants = decodeProductVariantConnection(rawInput['variants']);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);
    const decodedIsGiftCard = decodeBoolean(rawInput['isGiftCard']);
    const decodedOnlineStoreUrl = decodeString(rawInput['onlineStoreUrl']);
    const decodedRequiresSellingPlan = decodeBoolean(rawInput['requiresSellingPlan']);
    const decodedCategory = decodeTaxonomyCategory(rawInput['category']);
    const decodedMedia = decodeMediaConnection(rawInput['media']);
    const decodedSellingPlanGroups = decodeSellingPlanGroupConnection(rawInput['sellingPlanGroups']);
    const decodedAdjacentVariants = decodeArray(rawInput['adjacentVariants'], decodeProductVariant);
    const decodedSelectedOrFirstAvailableVariant = decodeProductVariant(rawInput['selectedOrFirstAvailableVariant']);
    const decodedVariantBySelectedOptions = decodeProductVariant(rawInput['variantBySelectedOptions']);
    const decodedVariantsCount = decodeCount(rawInput['variantsCount']);
    const decodedEncodedVariantExistence = decodeString(rawInput['encodedVariantExistence']);
    const decodedEncodedVariantAvailability = decodeString(rawInput['encodedVariantAvailability']);
    const decodedTrackingParameters = decodeString(rawInput['trackingParameters']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedHandle === null ||
      decodedVendor === null ||
      decodedProductType === null ||
      decodedAvailableForSale === null ||
      decodedPriceRange === null ||
      decodedCompareAtPriceRange === null ||
      decodedSeo === null ||
      decodedTags === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle,
      description: decodedDescription,
      descriptionHtml: decodedDescriptionHtml,
      vendor: decodedVendor,
      productType: decodedProductType,
      createdAt: decodedCreatedAt,
      updatedAt: decodedUpdatedAt,
      publishedAt: decodedPublishedAt,
      availableForSale: decodedAvailableForSale,
      totalInventory: decodedTotalInventory,
      featuredImage: decodedFeaturedImage,
      priceRange: decodedPriceRange,
      compareAtPriceRange: decodedCompareAtPriceRange,
      seo: decodedSeo,
      tags: decodedTags,
      options: decodedOptions,
      images: decodedImages,
      variants: decodedVariants,
      metafield: decodedMetafield,
      metafields: decodedMetafields,
      isGiftCard: decodedIsGiftCard,
      onlineStoreUrl: decodedOnlineStoreUrl,
      requiresSellingPlan: decodedRequiresSellingPlan,
      category: decodedCategory,
      media: decodedMedia,
      sellingPlanGroups: decodedSellingPlanGroups,
      adjacentVariants: decodedAdjacentVariants,
      selectedOrFirstAvailableVariant: decodedSelectedOrFirstAvailableVariant,
      variantBySelectedOptions: decodedVariantBySelectedOptions,
      variantsCount: decodedVariantsCount,
      encodedVariantExistence: decodedEncodedVariantExistence,
      encodedVariantAvailability: decodedEncodedVariantAvailability,
      trackingParameters: decodedTrackingParameters
    };
  }
  return null;
}


/**
 * @type { ProductPriceRange }
 * @description The price range of the product
 */
export type ProductPriceRange = {
  /**
   * @description The lowest variant price
   * @type { Money }
   * @memberof ProductPriceRange
  */
  minVariantPrice: Money;
  /**
   * @description The highest variant price
   * @type { Money }
   * @memberof ProductPriceRange
  */
  maxVariantPrice: Money;
};

export function decodeProductPriceRange(rawInput: unknown): ProductPriceRange | null {
  if (isJSON(rawInput)) {
    const decodedMinVariantPrice = decodeMoney(rawInput['minVariantPrice']);
    const decodedMaxVariantPrice = decodeMoney(rawInput['maxVariantPrice']);

    if (
      decodedMinVariantPrice === null ||
      decodedMaxVariantPrice === null
    ) {
      return null;
    }

    return {
      minVariantPrice: decodedMinVariantPrice,
      maxVariantPrice: decodedMaxVariantPrice
    };
  }
  return null;
}


/**
 * @type { TaxonomyCategory }
 * @description Product category from Shopify Standard Product Taxonomy
 */
export type TaxonomyCategory = {
  /**
   * @description Category ID
   * @type { string }
   * @memberof TaxonomyCategory
  */
  id: string;
  /**
   * @description Category name
   * @type { string }
   * @memberof TaxonomyCategory
  */
  name: string;
  /**
   * @description Full category path
   * @type { string }
   * @memberof TaxonomyCategory
  */
  fullName: string | null;
    /**
   * @description Parent categories
   * @type { TaxonomyCategory[] }
   * @memberof TaxonomyCategory
  */
  ancestors: TaxonomyCategory[] | null;
  };

export function decodeTaxonomyCategory(rawInput: unknown): TaxonomyCategory | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedName = decodeString(rawInput['name']);
    const decodedFullName = decodeString(rawInput['fullName']);
    const decodedAncestors = decodeArray(rawInput['ancestors'], decodeTaxonomyCategory);

    if (
      decodedId === null ||
      decodedName === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      name: decodedName,
      fullName: decodedFullName,
      ancestors: decodedAncestors
    };
  }
  return null;
}


/**
 * @type { ProductOption }
 * @description A product option (e.g., Size, Color)
 */
export type ProductOption = {
  /**
   * @type { string }
   * @memberof ProductOption
  */
  id: string;
  /**
   * @description Option name (limit 255 characters)
   * @type { string }
   * @memberof ProductOption
  */
  name: string;
  /**
   * @description Option values with swatch support
   * @type { ProductOptionValue[] }
   * @memberof ProductOption
  */
  optionValues: ProductOptionValue[];
};

export function decodeProductOption(rawInput: unknown): ProductOption | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedName = decodeString(rawInput['name']);
    const decodedOptionValues = decodeArray(rawInput['optionValues'], decodeProductOptionValue);

    if (
      decodedId === null ||
      decodedName === null ||
      decodedOptionValues === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      name: decodedName,
      optionValues: decodedOptionValues
    };
  }
  return null;
}


/**
 * @type { ProductOptionValue }
 * @description A product option value (e.g., "Red", "Blue")
 */
export type ProductOptionValue = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof ProductOptionValue
  */
  id: string;
  /**
   * @description The name of the option value
   * @type { string }
   * @memberof ProductOptionValue
  */
  name: string;
  /**
   * @description Visual swatch for the option value
   * @type { ProductOptionValueSwatch }
   * @memberof ProductOptionValue
  */
  swatch: ProductOptionValueSwatch | null;
    /**
   * @description The first selectable variant with this option value
   * @type { ProductVariant }
   * @memberof ProductOptionValue
  */
  firstSelectableVariant: ProductVariant | null;
  };

export function decodeProductOptionValue(rawInput: unknown): ProductOptionValue | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedName = decodeString(rawInput['name']);
    const decodedSwatch = decodeProductOptionValueSwatch(rawInput['swatch']);
    const decodedFirstSelectableVariant = decodeProductVariant(rawInput['firstSelectableVariant']);

    if (
      decodedId === null ||
      decodedName === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      name: decodedName,
      swatch: decodedSwatch,
      firstSelectableVariant: decodedFirstSelectableVariant
    };
  }
  return null;
}


/**
 * @type { ProductOptionValueSwatch }
 * @description Visual swatch for a product option value
 */
export type ProductOptionValueSwatch = {
  /**
   * @description Color hex code
   * @type { string }
   * @memberof ProductOptionValueSwatch
  */
  color: string | null;
    /**
   * @description Swatch image
   * @type { Image }
   * @memberof ProductOptionValueSwatch
  */
  image: Image | null;
  };

export function decodeProductOptionValueSwatch(rawInput: unknown): ProductOptionValueSwatch | null {
  if (isJSON(rawInput)) {
    const decodedColor = decodeString(rawInput['color']);
    const decodedImage = decodeImage(rawInput['image']);


    return {
      color: decodedColor,
      image: decodedImage
    };
  }
  return null;
}


/**
 * @type { ProductVariant }
 * @description A product variant representing a specific version of a product
 */
export type ProductVariant = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof ProductVariant
  */
  id: string;
  /**
   * @description Variant title
   * @type { string }
   * @memberof ProductVariant
  */
  title: string;
  /**
   * @description Stock keeping unit
   * @type { string }
   * @memberof ProductVariant
  */
  sku: string | null;
    /**
   * @description Barcode (ISBN, UPC, or GTIN)
   * @type { string }
   * @memberof ProductVariant
  */
  barcode: string | null;
    /**
   * @description Whether the variant is available for sale
   * @type { boolean }
   * @memberof ProductVariant
  */
  availableForSale: boolean;
  /**
   * @description Total sellable quantity for online sales channels
   * @type { number }
   * @memberof ProductVariant
  */
  quantityAvailable: number | null;
    /**
   * @description Whether out of stock but available for backorder
   * @type { boolean }
   * @memberof ProductVariant
  */
  currentlyNotInStock: boolean | null;
    /**
   * @description Whether shipping is required
   * @type { boolean }
   * @memberof ProductVariant
  */
  requiresShipping: boolean | null;
    /**
   * @description Whether variant requires components (bundle parent)
   * @type { boolean }
   * @memberof ProductVariant
  */
  requiresComponents: boolean | null;
    /**
   * @description Whether tax is charged when sold
   * @type { boolean }
   * @memberof ProductVariant
  */
  taxable: boolean | null;
    /**
   * @description Weight in the specified unit
   * @type { number }
   * @memberof ProductVariant
  */
  weight: number | null;
    /**
   * @type { WeightUnit }
   * @memberof ProductVariant
  */
  weightUnit: WeightUnit | null;
    /**
   * @description The variant price
   * @type { Money }
   * @memberof ProductVariant
  */
  price: Money;
  /**
   * @description Compare at price (for sale pricing)
   * @type { Money }
   * @memberof ProductVariant
  */
  compareAtPrice: Money | null;
    /**
   * @description Image associated with the variant
   * @type { Image }
   * @memberof ProductVariant
  */
  image: Image | null;
    /**
   * @description List of selected options for this variant
   * @type { SelectedOption[] }
   * @memberof ProductVariant
  */
  selectedOptions: SelectedOption[];
  /**
   * @description Summary of the product this variant belongs to
   * @type { ProductSummary }
   * @memberof ProductVariant
  */
  product: ProductSummary | null;
    /**
   * @description Unit price based on measurement
   * @type { Money }
   * @memberof ProductVariant
  */
  unitPrice: Money | null;
    /**
   * @type { UnitPriceMeasurement }
   * @memberof ProductVariant
  */
  unitPriceMeasurement: UnitPriceMeasurement | null;
    /**
   * @description A custom field associated with the variant
   * @type { Metafield }
   * @memberof ProductVariant
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields
   * @type { Metafield[] }
   * @memberof ProductVariant
  */
  metafields: Metafield[] | null;
    /**
   * @description Selling plan allocations for subscriptions
   * @type { SellingPlanAllocationConnection }
   * @memberof ProductVariant
  */
  sellingPlanAllocations: SellingPlanAllocationConnection | null;
    /**
   * @description In-store pickup availability by location
   * @type { StoreAvailabilityConnection }
   * @memberof ProductVariant
  */
  storeAvailability: StoreAvailabilityConnection | null;
    /**
   * @description Quantity rules for the variant
   * @type { QuantityRule }
   * @memberof ProductVariant
  */
  quantityRule: QuantityRule | null;
    /**
   * @description B2B quantity price breaks
   * @type { QuantityPriceBreakConnection }
   * @memberof ProductVariant
  */
  quantityPriceBreaks: QuantityPriceBreakConnection | null;
    /**
   * @description Bundle components (for fixed bundles)
   * @type { ProductVariantComponentConnection }
   * @memberof ProductVariant
  */
  components: ProductVariantComponentConnection | null;
    /**
   * @description Bundles that include this variant
   * @type { ProductVariantConnection }
   * @memberof ProductVariant
  */
  groupedBy: ProductVariantConnection | null;
    /**
   * @description Shop Pay Installments pricing
   * @type { ShopPayInstallmentsProductVariantPricing }
   * @memberof ProductVariant
  */
  shopPayInstallmentsPricing: ShopPayInstallmentsProductVariantPricing | null;
  };

export function decodeProductVariant(rawInput: unknown): ProductVariant | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedSku = decodeString(rawInput['sku']);
    const decodedBarcode = decodeString(rawInput['barcode']);
    const decodedAvailableForSale = decodeBoolean(rawInput['availableForSale']);
    const decodedQuantityAvailable = decodeNumber(rawInput['quantityAvailable']);
    const decodedCurrentlyNotInStock = decodeBoolean(rawInput['currentlyNotInStock']);
    const decodedRequiresShipping = decodeBoolean(rawInput['requiresShipping']);
    const decodedRequiresComponents = decodeBoolean(rawInput['requiresComponents']);
    const decodedTaxable = decodeBoolean(rawInput['taxable']);
    const decodedWeight = decodeNumber(rawInput['weight']);
    const decodedWeightUnit = decodeWeightUnit(rawInput['weightUnit']);
    const decodedPrice = decodeMoney(rawInput['price']);
    const decodedCompareAtPrice = decodeMoney(rawInput['compareAtPrice']);
    const decodedImage = decodeImage(rawInput['image']);
    const decodedSelectedOptions = decodeArray(rawInput['selectedOptions'], decodeSelectedOption);
    const decodedProduct = decodeProductSummary(rawInput['product']);
    const decodedUnitPrice = decodeMoney(rawInput['unitPrice']);
    const decodedUnitPriceMeasurement = decodeUnitPriceMeasurement(rawInput['unitPriceMeasurement']);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);
    const decodedSellingPlanAllocations = decodeSellingPlanAllocationConnection(rawInput['sellingPlanAllocations']);
    const decodedStoreAvailability = decodeStoreAvailabilityConnection(rawInput['storeAvailability']);
    const decodedQuantityRule = decodeQuantityRule(rawInput['quantityRule']);
    const decodedQuantityPriceBreaks = decodeQuantityPriceBreakConnection(rawInput['quantityPriceBreaks']);
    const decodedComponents = decodeProductVariantComponentConnection(rawInput['components']);
    const decodedGroupedBy = decodeProductVariantConnection(rawInput['groupedBy']);
    const decodedShopPayInstallmentsPricing = decodeShopPayInstallmentsProductVariantPricing(rawInput['shopPayInstallmentsPricing']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedAvailableForSale === null ||
      decodedPrice === null ||
      decodedSelectedOptions === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      sku: decodedSku,
      barcode: decodedBarcode,
      availableForSale: decodedAvailableForSale,
      quantityAvailable: decodedQuantityAvailable,
      currentlyNotInStock: decodedCurrentlyNotInStock,
      requiresShipping: decodedRequiresShipping,
      requiresComponents: decodedRequiresComponents,
      taxable: decodedTaxable,
      weight: decodedWeight,
      weightUnit: decodedWeightUnit,
      price: decodedPrice,
      compareAtPrice: decodedCompareAtPrice,
      image: decodedImage,
      selectedOptions: decodedSelectedOptions,
      product: decodedProduct,
      unitPrice: decodedUnitPrice,
      unitPriceMeasurement: decodedUnitPriceMeasurement,
      metafield: decodedMetafield,
      metafields: decodedMetafields,
      sellingPlanAllocations: decodedSellingPlanAllocations,
      storeAvailability: decodedStoreAvailability,
      quantityRule: decodedQuantityRule,
      quantityPriceBreaks: decodedQuantityPriceBreaks,
      components: decodedComponents,
      groupedBy: decodedGroupedBy,
      shopPayInstallmentsPricing: decodedShopPayInstallmentsPricing
    };
  }
  return null;
}


/**
 * @type { WeightUnit }
 * @description Unit of measurement for weight
 */
export type WeightUnit =
  | 'GRAMS'
  | 'KILOGRAMS'
  | 'OUNCES'
  | 'POUNDS'
;

export function decodeWeightUnit(rawInput: unknown): WeightUnit | null {
  switch (rawInput) {
    case 'GRAMS':
    case 'KILOGRAMS':
    case 'OUNCES':
    case 'POUNDS':
     return rawInput;
  }
  return null;
}

export function _decodeWeightUnit(rawInput: unknown): WeightUnit | undefined {
  switch (rawInput) {
    case 'GRAMS':
    case 'KILOGRAMS':
    case 'OUNCES':
    case 'POUNDS':
    return rawInput;
  }
  return;
}

/**
 * @type { ProductSummary }
 * @description Minimal product info for nested references
 */
export type ProductSummary = {
  /**
   * @type { string }
   * @memberof ProductSummary
  */
  id: string;
  /**
   * @type { string }
   * @memberof ProductSummary
  */
  title: string;
  /**
   * @type { string }
   * @memberof ProductSummary
  */
  handle: string;
};

export function decodeProductSummary(rawInput: unknown): ProductSummary | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedHandle === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle
    };
  }
  return null;
}


/**
 * @type { UnitPriceMeasurement }
 * @description Unit price measurement
 */
export type UnitPriceMeasurement = {
  /**
   * @type { UnitPriceMeasurementMeasuredType }
   * @memberof UnitPriceMeasurement
  */
  measuredType: UnitPriceMeasurementMeasuredType | null;
    /**
   * @type { UnitPriceMeasurementMeasuredUnit }
   * @memberof UnitPriceMeasurement
  */
  quantityUnit: UnitPriceMeasurementMeasuredUnit | null;
    /**
   * @type { number }
   * @memberof UnitPriceMeasurement
  */
  quantityValue: number | null;
    /**
   * @type { UnitPriceMeasurementMeasuredUnit }
   * @memberof UnitPriceMeasurement
  */
  referenceUnit: UnitPriceMeasurementMeasuredUnit | null;
    /**
   * @type { number }
   * @memberof UnitPriceMeasurement
  */
  referenceValue: number | null;
  };

export function decodeUnitPriceMeasurement(rawInput: unknown): UnitPriceMeasurement | null {
  if (isJSON(rawInput)) {
    const decodedMeasuredType = decodeUnitPriceMeasurementMeasuredType(rawInput['measuredType']);
    const decodedQuantityUnit = decodeUnitPriceMeasurementMeasuredUnit(rawInput['quantityUnit']);
    const decodedQuantityValue = decodeNumber(rawInput['quantityValue']);
    const decodedReferenceUnit = decodeUnitPriceMeasurementMeasuredUnit(rawInput['referenceUnit']);
    const decodedReferenceValue = decodeNumber(rawInput['referenceValue']);


    return {
      measuredType: decodedMeasuredType,
      quantityUnit: decodedQuantityUnit,
      quantityValue: decodedQuantityValue,
      referenceUnit: decodedReferenceUnit,
      referenceValue: decodedReferenceValue
    };
  }
  return null;
}


/**
 * @type { UnitPriceMeasurementMeasuredType }
 * @description Type of unit price measurement
 */
export type UnitPriceMeasurementMeasuredType =
  | 'VOLUME'
  | 'WEIGHT'
  | 'LENGTH'
  | 'AREA'
;

export function decodeUnitPriceMeasurementMeasuredType(rawInput: unknown): UnitPriceMeasurementMeasuredType | null {
  switch (rawInput) {
    case 'VOLUME':
    case 'WEIGHT':
    case 'LENGTH':
    case 'AREA':
     return rawInput;
  }
  return null;
}

export function _decodeUnitPriceMeasurementMeasuredType(rawInput: unknown): UnitPriceMeasurementMeasuredType | undefined {
  switch (rawInput) {
    case 'VOLUME':
    case 'WEIGHT':
    case 'LENGTH':
    case 'AREA':
    return rawInput;
  }
  return;
}

/**
 * @type { UnitPriceMeasurementMeasuredUnit }
 * @description Unit of measurement
 */
export type UnitPriceMeasurementMeasuredUnit =
  | 'ML'
  | 'CL'
  | 'L'
  | 'M3'
  | 'MG'
  | 'G'
  | 'KG'
  | 'MM'
  | 'CM'
  | 'M'
  | 'M2'
;

export function decodeUnitPriceMeasurementMeasuredUnit(rawInput: unknown): UnitPriceMeasurementMeasuredUnit | null {
  switch (rawInput) {
    case 'ML':
    case 'CL':
    case 'L':
    case 'M3':
    case 'MG':
    case 'G':
    case 'KG':
    case 'MM':
    case 'CM':
    case 'M':
    case 'M2':
     return rawInput;
  }
  return null;
}

export function _decodeUnitPriceMeasurementMeasuredUnit(rawInput: unknown): UnitPriceMeasurementMeasuredUnit | undefined {
  switch (rawInput) {
    case 'ML':
    case 'CL':
    case 'L':
    case 'M3':
    case 'MG':
    case 'G':
    case 'KG':
    case 'MM':
    case 'CM':
    case 'M':
    case 'M2':
    return rawInput;
  }
  return;
}

/**
 * @type { QuantityRule }
 * @description Quantity rules for a product variant
 */
export type QuantityRule = {
  /**
   * @description Minimum quantity that must be purchased
   * @type { number }
   * @memberof QuantityRule
  */
  minimum: number;
  /**
   * @description Maximum quantity that can be purchased (null for unlimited)
   * @type { number }
   * @memberof QuantityRule
  */
  maximum: number;
  /**
   * @description Quantity must be a multiple of this value
   * @type { number }
   * @memberof QuantityRule
  */
  increment: number;
};

export function decodeQuantityRule(rawInput: unknown): QuantityRule | null {
  if (isJSON(rawInput)) {
    const decodedMinimum = decodeNumber(rawInput['minimum']);
    const decodedMaximum = decodeNumber(rawInput['maximum']);
    const decodedIncrement = decodeNumber(rawInput['increment']);

    if (
      decodedMinimum === null ||
      decodedMaximum === null ||
      decodedIncrement === null
    ) {
      return null;
    }

    return {
      minimum: decodedMinimum,
      maximum: decodedMaximum,
      increment: decodedIncrement
    };
  }
  return null;
}


/**
 * @type { QuantityPriceBreak }
 * @description A quantity-based price break for B2B
 */
export type QuantityPriceBreak = {
  /**
   * @description Minimum quantity to qualify for this price
   * @type { number }
   * @memberof QuantityPriceBreak
  */
  minimumQuantity: number;
  /**
   * @description Price at this quantity level
   * @type { Money }
   * @memberof QuantityPriceBreak
  */
  price: Money;
};

export function decodeQuantityPriceBreak(rawInput: unknown): QuantityPriceBreak | null {
  if (isJSON(rawInput)) {
    const decodedMinimumQuantity = decodeNumber(rawInput['minimumQuantity']);
    const decodedPrice = decodeMoney(rawInput['price']);

    if (
      decodedMinimumQuantity === null ||
      decodedPrice === null
    ) {
      return null;
    }

    return {
      minimumQuantity: decodedMinimumQuantity,
      price: decodedPrice
    };
  }
  return null;
}


/**
 * @type { QuantityPriceBreakConnection }
 * @description Paginated list of quantity price breaks
 */
export type QuantityPriceBreakConnection = {
  /**
   * @type { QuantityPriceBreakEdge[] }
   * @memberof QuantityPriceBreakConnection
  */
  edges: QuantityPriceBreakEdge[];
  /**
   * @type { QuantityPriceBreak[] }
   * @memberof QuantityPriceBreakConnection
  */
  nodes: QuantityPriceBreak[] | null;
    /**
   * @type { PageInfo }
   * @memberof QuantityPriceBreakConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeQuantityPriceBreakConnection(rawInput: unknown): QuantityPriceBreakConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeQuantityPriceBreakEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeQuantityPriceBreak);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { QuantityPriceBreakEdge }
 * @description An edge in a quantity price break connection
 */
export type QuantityPriceBreakEdge = {
  /**
   * @type { QuantityPriceBreak }
   * @memberof QuantityPriceBreakEdge
  */
  node: QuantityPriceBreak;
  /**
   * @type { string }
   * @memberof QuantityPriceBreakEdge
  */
  cursor: string | null;
  };

export function decodeQuantityPriceBreakEdge(rawInput: unknown): QuantityPriceBreakEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeQuantityPriceBreak(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null
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
 * @type { StoreAvailability }
 * @description In-store pickup availability for a variant at a location
 */
export type StoreAvailability = {
  /**
   * @description Whether the variant is available for pickup
   * @type { boolean }
   * @memberof StoreAvailability
  */
  available: boolean;
  /**
   * @description Estimated pickup time (e.g., "Usually ready in 24 hours")
   * @type { string }
   * @memberof StoreAvailability
  */
  pickUpTime: string | null;
    /**
   * @description Quantity available at this location
   * @type { number }
   * @memberof StoreAvailability
  */
  quantityAvailable: number | null;
    /**
   * @type { Location }
   * @memberof StoreAvailability
  */
  location: Location;
};

export function decodeStoreAvailability(rawInput: unknown): StoreAvailability | null {
  if (isJSON(rawInput)) {
    const decodedAvailable = decodeBoolean(rawInput['available']);
    const decodedPickUpTime = decodeString(rawInput['pickUpTime']);
    const decodedQuantityAvailable = decodeNumber(rawInput['quantityAvailable']);
    const decodedLocation = decodeLocation(rawInput['location']);

    if (
      decodedAvailable === null ||
      decodedLocation === null
    ) {
      return null;
    }

    return {
      available: decodedAvailable,
      pickUpTime: decodedPickUpTime,
      quantityAvailable: decodedQuantityAvailable,
      location: decodedLocation
    };
  }
  return null;
}


/**
 * @type { StoreAvailabilityConnection }
 * @description Paginated list of store availability
 */
export type StoreAvailabilityConnection = {
  /**
   * @type { StoreAvailabilityEdge[] }
   * @memberof StoreAvailabilityConnection
  */
  edges: StoreAvailabilityEdge[];
  /**
   * @type { StoreAvailability[] }
   * @memberof StoreAvailabilityConnection
  */
  nodes: StoreAvailability[] | null;
    /**
   * @type { PageInfo }
   * @memberof StoreAvailabilityConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeStoreAvailabilityConnection(rawInput: unknown): StoreAvailabilityConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeStoreAvailabilityEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeStoreAvailability);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { StoreAvailabilityEdge }
 * @description An edge in a store availability connection
 */
export type StoreAvailabilityEdge = {
  /**
   * @type { StoreAvailability }
   * @memberof StoreAvailabilityEdge
  */
  node: StoreAvailability;
  /**
   * @type { string }
   * @memberof StoreAvailabilityEdge
  */
  cursor: string | null;
  };

export function decodeStoreAvailabilityEdge(rawInput: unknown): StoreAvailabilityEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeStoreAvailability(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null
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
 * @type { Location }
 * @description A store location for pickup
 */
export type Location = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Location
  */
  id: string;
  /**
   * @description Location name
   * @type { string }
   * @memberof Location
  */
  name: string;
  /**
   * @type { MailingAddress }
   * @memberof Location
  */
  address: MailingAddress | null;
  };

export function decodeLocation(rawInput: unknown): Location | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedName = decodeString(rawInput['name']);
    const decodedAddress = decodeMailingAddress(rawInput['address']);

    if (
      decodedId === null ||
      decodedName === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      name: decodedName,
      address: decodedAddress
    };
  }
  return null;
}


/**
 * @type { ProductVariantComponent }
 * @description A component of a bundle variant
 */
export type ProductVariantComponent = {
  /**
   * @type { ProductVariant }
   * @memberof ProductVariantComponent
  */
  productVariant: ProductVariant;
  /**
   * @type { number }
   * @memberof ProductVariantComponent
  */
  quantity: number;
};

export function decodeProductVariantComponent(rawInput: unknown): ProductVariantComponent | null {
  if (isJSON(rawInput)) {
    const decodedProductVariant = decodeProductVariant(rawInput['productVariant']);
    const decodedQuantity = decodeNumber(rawInput['quantity']);

    if (
      decodedProductVariant === null ||
      decodedQuantity === null
    ) {
      return null;
    }

    return {
      productVariant: decodedProductVariant,
      quantity: decodedQuantity
    };
  }
  return null;
}


/**
 * @type { ProductVariantComponentConnection }
 * @description Paginated list of bundle components
 */
export type ProductVariantComponentConnection = {
  /**
   * @type { ProductVariantComponentEdge[] }
   * @memberof ProductVariantComponentConnection
  */
  edges: ProductVariantComponentEdge[];
  /**
   * @type { ProductVariantComponent[] }
   * @memberof ProductVariantComponentConnection
  */
  nodes: ProductVariantComponent[] | null;
    /**
   * @type { PageInfo }
   * @memberof ProductVariantComponentConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeProductVariantComponentConnection(rawInput: unknown): ProductVariantComponentConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeProductVariantComponentEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeProductVariantComponent);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { ProductVariantComponentEdge }
 * @description An edge in a component connection
 */
export type ProductVariantComponentEdge = {
  /**
   * @type { ProductVariantComponent }
   * @memberof ProductVariantComponentEdge
  */
  node: ProductVariantComponent;
  /**
   * @type { string }
   * @memberof ProductVariantComponentEdge
  */
  cursor: string | null;
  };

export function decodeProductVariantComponentEdge(rawInput: unknown): ProductVariantComponentEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeProductVariantComponent(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null
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
 * @type { ShopPayInstallmentsProductVariantPricing }
 * @description Shop Pay Installments pricing for a variant
 */
export type ShopPayInstallmentsProductVariantPricing = {
  /**
   * @description Whether eligible for Shop Pay Installments
   * @type { boolean }
   * @memberof ShopPayInstallmentsProductVariantPricing
  */
  eligible: boolean | null;
    /**
   * @type { Money }
   * @memberof ShopPayInstallmentsProductVariantPricing
  */
  price: Money | null;
  };

export function decodeShopPayInstallmentsProductVariantPricing(rawInput: unknown): ShopPayInstallmentsProductVariantPricing | null {
  if (isJSON(rawInput)) {
    const decodedEligible = decodeBoolean(rawInput['eligible']);
    const decodedPrice = decodeMoney(rawInput['price']);


    return {
      eligible: decodedEligible,
      price: decodedPrice
    };
  }
  return null;
}


/**
 * @type { ProductVariantConnection }
 * @description Paginated list of product variants
 */
export type ProductVariantConnection = {
  /**
   * @type { ProductVariantEdge[] }
   * @memberof ProductVariantConnection
  */
  edges: ProductVariantEdge[];
  /**
   * @type { ProductVariant[] }
   * @memberof ProductVariantConnection
  */
  nodes: ProductVariant[] | null;
    /**
   * @type { PageInfo }
   * @memberof ProductVariantConnection
  */
  pageInfo: PageInfo;
};

export function decodeProductVariantConnection(rawInput: unknown): ProductVariantConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeProductVariantEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeProductVariant);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null ||
      decodedPageInfo === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { ProductVariantEdge }
 * @description An edge in a product variant connection
 */
export type ProductVariantEdge = {
  /**
   * @type { ProductVariant }
   * @memberof ProductVariantEdge
  */
  node: ProductVariant;
  /**
   * @type { string }
   * @memberof ProductVariantEdge
  */
  cursor: string;
};

export function decodeProductVariantEdge(rawInput: unknown): ProductVariantEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeProductVariant(rawInput['node']);
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
 * @type { ProductConnection }
 * @description Paginated list of products
 */
export type ProductConnection = {
  /**
   * @type { ProductEdge[] }
   * @memberof ProductConnection
  */
  edges: ProductEdge[];
  /**
   * @type { Product[] }
   * @memberof ProductConnection
  */
  nodes: Product[] | null;
    /**
   * @description Available filters for products
   * @type { Filter[] }
   * @memberof ProductConnection
  */
  filters: Filter[] | null;
    /**
   * @type { PageInfo }
   * @memberof ProductConnection
  */
  pageInfo: PageInfo;
};

export function decodeProductConnection(rawInput: unknown): ProductConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeProductEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeProduct);
    const decodedFilters = decodeArray(rawInput['filters'], decodeFilter);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null ||
      decodedPageInfo === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      filters: decodedFilters,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { ProductEdge }
 * @description An edge in a product connection
 */
export type ProductEdge = {
  /**
   * @type { Product }
   * @memberof ProductEdge
  */
  node: Product;
  /**
   * @type { string }
   * @memberof ProductEdge
  */
  cursor: string;
};

export function decodeProductEdge(rawInput: unknown): ProductEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeProduct(rawInput['node']);
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
 * @type { ImageConnection }
 * @description Paginated list of images
 */
export type ImageConnection = {
  /**
   * @type { ImageEdge[] }
   * @memberof ImageConnection
  */
  edges: ImageEdge[];
  /**
   * @type { Image[] }
   * @memberof ImageConnection
  */
  nodes: Image[] | null;
    /**
   * @type { PageInfo }
   * @memberof ImageConnection
  */
  pageInfo: PageInfo;
};

export function decodeImageConnection(rawInput: unknown): ImageConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeImageEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeImage);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null ||
      decodedPageInfo === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { ImageEdge }
 * @description An edge in an image connection
 */
export type ImageEdge = {
  /**
   * @type { Image }
   * @memberof ImageEdge
  */
  node: Image;
  /**
   * @type { string }
   * @memberof ImageEdge
  */
  cursor: string;
};

export function decodeImageEdge(rawInput: unknown): ImageEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeImage(rawInput['node']);
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
 * @type { Media }
 * @description Media associated with a product (base type)
 */
export type Media = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Media
  */
  id: string;
  /**
   * @type { MediaContentType }
   * @memberof Media
  */
  mediaContentType: MediaContentType;
  /**
   * @description Alt text for accessibility
   * @type { string }
   * @memberof Media
  */
  alt: string | null;
    /**
   * @description Preview image for the media
   * @type { Image }
   * @memberof Media
  */
  previewImage: Image | null;
  };

export function decodeMedia(rawInput: unknown): Media | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedMediaContentType = decodeMediaContentType(rawInput['mediaContentType']);
    const decodedAlt = decodeString(rawInput['alt']);
    const decodedPreviewImage = decodeImage(rawInput['previewImage']);

    if (
      decodedId === null ||
      decodedMediaContentType === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      mediaContentType: decodedMediaContentType,
      alt: decodedAlt,
      previewImage: decodedPreviewImage
    };
  }
  return null;
}


/**
 * @type { MediaContentType }
 * @description The type of media content
 */
export type MediaContentType =
  | 'IMAGE'
  | 'VIDEO'
  | 'EXTERNAL_VIDEO'
  | 'MODEL_3D'
;

export function decodeMediaContentType(rawInput: unknown): MediaContentType | null {
  switch (rawInput) {
    case 'IMAGE':
    case 'VIDEO':
    case 'EXTERNAL_VIDEO':
    case 'MODEL_3D':
     return rawInput;
  }
  return null;
}

export function _decodeMediaContentType(rawInput: unknown): MediaContentType | undefined {
  switch (rawInput) {
    case 'IMAGE':
    case 'VIDEO':
    case 'EXTERNAL_VIDEO':
    case 'MODEL_3D':
    return rawInput;
  }
  return;
}

/**
 * @type { MediaImage }
 * @description An image media type
 */
export type MediaImage = {
  /**
   * @type { string }
   * @memberof MediaImage
  */
  id: string;
  /**
   * @type { MediaContentType }
   * @memberof MediaImage
  */
  mediaContentType: MediaContentType;
  /**
   * @type { string }
   * @memberof MediaImage
  */
  alt: string | null;
    /**
   * @type { Image }
   * @memberof MediaImage
  */
  previewImage: Image | null;
    /**
   * @type { Image }
   * @memberof MediaImage
  */
  image: Image | null;
  };

export function decodeMediaImage(rawInput: unknown): MediaImage | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedMediaContentType = decodeMediaContentType(rawInput['mediaContentType']);
    const decodedAlt = decodeString(rawInput['alt']);
    const decodedPreviewImage = decodeImage(rawInput['previewImage']);
    const decodedImage = decodeImage(rawInput['image']);

    if (
      decodedId === null ||
      decodedMediaContentType === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      mediaContentType: decodedMediaContentType,
      alt: decodedAlt,
      previewImage: decodedPreviewImage,
      image: decodedImage
    };
  }
  return null;
}


/**
 * @type { Video }
 * @description A video media type
 */
export type Video = {
  /**
   * @type { string }
   * @memberof Video
  */
  id: string;
  /**
   * @type { MediaContentType }
   * @memberof Video
  */
  mediaContentType: MediaContentType;
  /**
   * @type { string }
   * @memberof Video
  */
  alt: string | null;
    /**
   * @type { Image }
   * @memberof Video
  */
  previewImage: Image | null;
    /**
   * @type { VideoSource[] }
   * @memberof Video
  */
  sources: VideoSource[];
};

export function decodeVideo(rawInput: unknown): Video | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedMediaContentType = decodeMediaContentType(rawInput['mediaContentType']);
    const decodedAlt = decodeString(rawInput['alt']);
    const decodedPreviewImage = decodeImage(rawInput['previewImage']);
    const decodedSources = decodeArray(rawInput['sources'], decodeVideoSource);

    if (
      decodedId === null ||
      decodedMediaContentType === null ||
      decodedSources === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      mediaContentType: decodedMediaContentType,
      alt: decodedAlt,
      previewImage: decodedPreviewImage,
      sources: decodedSources
    };
  }
  return null;
}


/**
 * @type { VideoSource }
 * @description A video source
 */
export type VideoSource = {
  /**
   * @type { string }
   * @memberof VideoSource
  */
  url: string;
  /**
   * @type { string }
   * @memberof VideoSource
  */
  mimeType: string;
  /**
   * @type { string }
   * @memberof VideoSource
  */
  format: string | null;
    /**
   * @type { number }
   * @memberof VideoSource
  */
  width: number | null;
    /**
   * @type { number }
   * @memberof VideoSource
  */
  height: number | null;
  };

export function decodeVideoSource(rawInput: unknown): VideoSource | null {
  if (isJSON(rawInput)) {
    const decodedUrl = decodeString(rawInput['url']);
    const decodedMimeType = decodeString(rawInput['mimeType']);
    const decodedFormat = decodeString(rawInput['format']);
    const decodedWidth = decodeNumber(rawInput['width']);
    const decodedHeight = decodeNumber(rawInput['height']);

    if (
      decodedUrl === null ||
      decodedMimeType === null
    ) {
      return null;
    }

    return {
      url: decodedUrl,
      mimeType: decodedMimeType,
      format: decodedFormat,
      width: decodedWidth,
      height: decodedHeight
    };
  }
  return null;
}


/**
 * @type { ExternalVideo }
 * @description An external video (e.g., YouTube, Vimeo)
 */
export type ExternalVideo = {
  /**
   * @type { string }
   * @memberof ExternalVideo
  */
  id: string;
  /**
   * @type { MediaContentType }
   * @memberof ExternalVideo
  */
  mediaContentType: MediaContentType;
  /**
   * @type { string }
   * @memberof ExternalVideo
  */
  alt: string | null;
    /**
   * @type { Image }
   * @memberof ExternalVideo
  */
  previewImage: Image | null;
    /**
   * @description URL to embed the video
   * @type { string }
   * @memberof ExternalVideo
  */
  embedUrl: string;
  /**
   * @type { MediaHost }
   * @memberof ExternalVideo
  */
  host: MediaHost | null;
    /**
   * @description Original URL of the video
   * @type { string }
   * @memberof ExternalVideo
  */
  originUrl: string | null;
  };

export function decodeExternalVideo(rawInput: unknown): ExternalVideo | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedMediaContentType = decodeMediaContentType(rawInput['mediaContentType']);
    const decodedAlt = decodeString(rawInput['alt']);
    const decodedPreviewImage = decodeImage(rawInput['previewImage']);
    const decodedEmbedUrl = decodeString(rawInput['embedUrl']);
    const decodedHost = decodeMediaHost(rawInput['host']);
    const decodedOriginUrl = decodeString(rawInput['originUrl']);

    if (
      decodedId === null ||
      decodedMediaContentType === null ||
      decodedEmbedUrl === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      mediaContentType: decodedMediaContentType,
      alt: decodedAlt,
      previewImage: decodedPreviewImage,
      embedUrl: decodedEmbedUrl,
      host: decodedHost,
      originUrl: decodedOriginUrl
    };
  }
  return null;
}


/**
 * @type { MediaHost }
 * @description Host of external video
 */
export type MediaHost =
  | 'YOUTUBE'
  | 'VIMEO'
;

export function decodeMediaHost(rawInput: unknown): MediaHost | null {
  switch (rawInput) {
    case 'YOUTUBE':
    case 'VIMEO':
     return rawInput;
  }
  return null;
}

export function _decodeMediaHost(rawInput: unknown): MediaHost | undefined {
  switch (rawInput) {
    case 'YOUTUBE':
    case 'VIMEO':
    return rawInput;
  }
  return;
}

/**
 * @type { Model3d }
 * @description A 3D model media type
 */
export type Model3d = {
  /**
   * @type { string }
   * @memberof Model3d
  */
  id: string;
  /**
   * @type { MediaContentType }
   * @memberof Model3d
  */
  mediaContentType: MediaContentType;
  /**
   * @type { string }
   * @memberof Model3d
  */
  alt: string | null;
    /**
   * @type { Image }
   * @memberof Model3d
  */
  previewImage: Image | null;
    /**
   * @type { Model3dSource[] }
   * @memberof Model3d
  */
  sources: Model3dSource[];
};

export function decodeModel3d(rawInput: unknown): Model3d | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedMediaContentType = decodeMediaContentType(rawInput['mediaContentType']);
    const decodedAlt = decodeString(rawInput['alt']);
    const decodedPreviewImage = decodeImage(rawInput['previewImage']);
    const decodedSources = decodeArray(rawInput['sources'], decodeModel3dSource);

    if (
      decodedId === null ||
      decodedMediaContentType === null ||
      decodedSources === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      mediaContentType: decodedMediaContentType,
      alt: decodedAlt,
      previewImage: decodedPreviewImage,
      sources: decodedSources
    };
  }
  return null;
}


/**
 * @type { Model3dSource }
 * @description A 3D model source
 */
export type Model3dSource = {
  /**
   * @type { string }
   * @memberof Model3dSource
  */
  url: string;
  /**
   * @type { string }
   * @memberof Model3dSource
  */
  mimeType: string;
  /**
   * @type { string }
   * @memberof Model3dSource
  */
  format: string | null;
    /**
   * @type { number }
   * @memberof Model3dSource
  */
  filesize: number | null;
  };

export function decodeModel3dSource(rawInput: unknown): Model3dSource | null {
  if (isJSON(rawInput)) {
    const decodedUrl = decodeString(rawInput['url']);
    const decodedMimeType = decodeString(rawInput['mimeType']);
    const decodedFormat = decodeString(rawInput['format']);
    const decodedFilesize = decodeNumber(rawInput['filesize']);

    if (
      decodedUrl === null ||
      decodedMimeType === null
    ) {
      return null;
    }

    return {
      url: decodedUrl,
      mimeType: decodedMimeType,
      format: decodedFormat,
      filesize: decodedFilesize
    };
  }
  return null;
}


/**
 * @type { MediaConnection }
 * @description Paginated list of media
 */
export type MediaConnection = {
  /**
   * @type { MediaEdge[] }
   * @memberof MediaConnection
  */
  edges: MediaEdge[];
  /**
   * @type { Media[] }
   * @memberof MediaConnection
  */
  nodes: Media[] | null;
    /**
   * @type { PageInfo }
   * @memberof MediaConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeMediaConnection(rawInput: unknown): MediaConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeMediaEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeMedia);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { MediaEdge }
 * @description An edge in a media connection
 */
export type MediaEdge = {
  /**
   * @type { Media }
   * @memberof MediaEdge
  */
  node: Media;
  /**
   * @type { string }
   * @memberof MediaEdge
  */
  cursor: string | null;
  };

export function decodeMediaEdge(rawInput: unknown): MediaEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeMedia(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null
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
 * @type { SellingPlanGroup }
 * @description A group of selling plans (e.g., Subscribe and save)
 */
export type SellingPlanGroup = {
  /**
   * @description The name of the selling plan group
   * @type { string }
   * @memberof SellingPlanGroup
  */
  name: string;
  /**
   * @description Name of the app that created the group
   * @type { string }
   * @memberof SellingPlanGroup
  */
  appName: string | null;
    /**
   * @description Options available in the storefront dropdown
   * @type { SellingPlanGroupOption[] }
   * @memberof SellingPlanGroup
  */
  options: SellingPlanGroupOption[];
  /**
   * @type { SellingPlanConnection }
   * @memberof SellingPlanGroup
  */
  sellingPlans: SellingPlanConnection;
};

export function decodeSellingPlanGroup(rawInput: unknown): SellingPlanGroup | null {
  if (isJSON(rawInput)) {
    const decodedName = decodeString(rawInput['name']);
    const decodedAppName = decodeString(rawInput['appName']);
    const decodedOptions = decodeArray(rawInput['options'], decodeSellingPlanGroupOption);
    const decodedSellingPlans = decodeSellingPlanConnection(rawInput['sellingPlans']);

    if (
      decodedName === null ||
      decodedOptions === null ||
      decodedSellingPlans === null
    ) {
      return null;
    }

    return {
      name: decodedName,
      appName: decodedAppName,
      options: decodedOptions,
      sellingPlans: decodedSellingPlans
    };
  }
  return null;
}


/**
 * @type { SellingPlanGroupOption }
 * @description An option in a selling plan group
 */
export type SellingPlanGroupOption = {
  /**
   * @description The name of the option (e.g., "Delivery every")
   * @type { string }
   * @memberof SellingPlanGroupOption
  */
  name: string;
  /**
   * @description Available values (e.g., "1 week", "2 weeks")
   * @type { string[] }
   * @memberof SellingPlanGroupOption
  */
  values: string[];
};

export function decodeSellingPlanGroupOption(rawInput: unknown): SellingPlanGroupOption | null {
  if (isJSON(rawInput)) {
    const decodedName = decodeString(rawInput['name']);
    const decodedValues = decodeArray(rawInput['values'], decodeString);

    if (
      decodedName === null ||
      decodedValues === null
    ) {
      return null;
    }

    return {
      name: decodedName,
      values: decodedValues
    };
  }
  return null;
}


/**
 * @type { SellingPlanGroupConnection }
 * @description Paginated list of selling plan groups
 */
export type SellingPlanGroupConnection = {
  /**
   * @type { SellingPlanGroupEdge[] }
   * @memberof SellingPlanGroupConnection
  */
  edges: SellingPlanGroupEdge[];
  /**
   * @type { SellingPlanGroup[] }
   * @memberof SellingPlanGroupConnection
  */
  nodes: SellingPlanGroup[] | null;
    /**
   * @type { PageInfo }
   * @memberof SellingPlanGroupConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeSellingPlanGroupConnection(rawInput: unknown): SellingPlanGroupConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeSellingPlanGroupEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeSellingPlanGroup);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { SellingPlanGroupEdge }
 * @description An edge in a selling plan group connection
 */
export type SellingPlanGroupEdge = {
  /**
   * @type { SellingPlanGroup }
   * @memberof SellingPlanGroupEdge
  */
  node: SellingPlanGroup;
  /**
   * @type { string }
   * @memberof SellingPlanGroupEdge
  */
  cursor: string | null;
  };

export function decodeSellingPlanGroupEdge(rawInput: unknown): SellingPlanGroupEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeSellingPlanGroup(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null
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
 * @type { SellingPlanConnection }
 * @description Paginated list of selling plans
 */
export type SellingPlanConnection = {
  /**
   * @type { SellingPlanEdge[] }
   * @memberof SellingPlanConnection
  */
  edges: SellingPlanEdge[];
  /**
   * @type { SellingPlan[] }
   * @memberof SellingPlanConnection
  */
  nodes: SellingPlan[] | null;
    /**
   * @type { PageInfo }
   * @memberof SellingPlanConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeSellingPlanConnection(rawInput: unknown): SellingPlanConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeSellingPlanEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeSellingPlan);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { SellingPlanEdge }
 * @description An edge in a selling plan connection
 */
export type SellingPlanEdge = {
  /**
   * @type { SellingPlan }
   * @memberof SellingPlanEdge
  */
  node: SellingPlan;
  /**
   * @type { string }
   * @memberof SellingPlanEdge
  */
  cursor: string | null;
  };

export function decodeSellingPlanEdge(rawInput: unknown): SellingPlanEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeSellingPlan(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null
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
 * @type { SellingPlanAllocationConnection }
 * @description Paginated list of selling plan allocations
 */
export type SellingPlanAllocationConnection = {
  /**
   * @type { SellingPlanAllocationEdge[] }
   * @memberof SellingPlanAllocationConnection
  */
  edges: SellingPlanAllocationEdge[];
  /**
   * @type { SellingPlanAllocation[] }
   * @memberof SellingPlanAllocationConnection
  */
  nodes: SellingPlanAllocation[] | null;
    /**
   * @type { PageInfo }
   * @memberof SellingPlanAllocationConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeSellingPlanAllocationConnection(rawInput: unknown): SellingPlanAllocationConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeSellingPlanAllocationEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeSellingPlanAllocation);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      nodes: decodedNodes,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { SellingPlanAllocationEdge }
 * @description An edge in a selling plan allocation connection
 */
export type SellingPlanAllocationEdge = {
  /**
   * @type { SellingPlanAllocation }
   * @memberof SellingPlanAllocationEdge
  */
  node: SellingPlanAllocation;
  /**
   * @type { string }
   * @memberof SellingPlanAllocationEdge
  */
  cursor: string | null;
  };

export function decodeSellingPlanAllocationEdge(rawInput: unknown): SellingPlanAllocationEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeSellingPlanAllocation(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null
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
 * @type { ProductSortKeys }
 * @description Sort keys for product queries
 */
export type ProductSortKeys =
  | 'TITLE'
  | 'PRODUCT_TYPE'
  | 'VENDOR'
  | 'UPDATED_AT'
  | 'CREATED_AT'
  | 'BEST_SELLING'
  | 'PRICE'
  | 'ID'
  | 'RELEVANCE'
;

export function decodeProductSortKeys(rawInput: unknown): ProductSortKeys | null {
  switch (rawInput) {
    case 'TITLE':
    case 'PRODUCT_TYPE':
    case 'VENDOR':
    case 'UPDATED_AT':
    case 'CREATED_AT':
    case 'BEST_SELLING':
    case 'PRICE':
    case 'ID':
    case 'RELEVANCE':
     return rawInput;
  }
  return null;
}

export function _decodeProductSortKeys(rawInput: unknown): ProductSortKeys | undefined {
  switch (rawInput) {
    case 'TITLE':
    case 'PRODUCT_TYPE':
    case 'VENDOR':
    case 'UPDATED_AT':
    case 'CREATED_AT':
    case 'BEST_SELLING':
    case 'PRICE':
    case 'ID':
    case 'RELEVANCE':
    return rawInput;
  }
  return;
}

/**
 * @type { ProductRecommendationIntent }
 * @description Intent for product recommendations
 */
export type ProductRecommendationIntent =
  | 'RELATED'
  | 'COMPLEMENTARY'
;

export function decodeProductRecommendationIntent(rawInput: unknown): ProductRecommendationIntent | null {
  switch (rawInput) {
    case 'RELATED':
    case 'COMPLEMENTARY':
     return rawInput;
  }
  return null;
}

export function _decodeProductRecommendationIntent(rawInput: unknown): ProductRecommendationIntent | undefined {
  switch (rawInput) {
    case 'RELATED':
    case 'COMPLEMENTARY':
    return rawInput;
  }
  return;
}

/**
 * @type { GetProductsArgs }
 * @description Arguments for fetching products
 */
export type GetProductsArgs = {
  /**
   * @type { number }
   * @memberof GetProductsArgs
  */
  first: number | null;
    /**
   * @type { string }
   * @memberof GetProductsArgs
  */
  after: string | null;
    /**
   * @type { number }
   * @memberof GetProductsArgs
  */
  last: number | null;
    /**
   * @type { string }
   * @memberof GetProductsArgs
  */
  before: string | null;
    /**
   * @type { boolean }
   * @memberof GetProductsArgs
  */
  reverse: boolean | null;
    /**
   * @type { ProductSortKeys }
   * @memberof GetProductsArgs
  */
  sortKey: ProductSortKeys | null;
    /**
   * @type { string }
   * @memberof GetProductsArgs
  */
  query: string | null;
  };

export function decodeGetProductsArgs(rawInput: unknown): GetProductsArgs | null {
  if (isJSON(rawInput)) {
    const decodedFirst = decodeNumber(rawInput['first']);
    const decodedAfter = decodeString(rawInput['after']);
    const decodedLast = decodeNumber(rawInput['last']);
    const decodedBefore = decodeString(rawInput['before']);
    const decodedReverse = decodeBoolean(rawInput['reverse']);
    const decodedSortKey = decodeProductSortKeys(rawInput['sortKey']);
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
 * @type { GetProductRecommendationsArgs }
 * @description Arguments for fetching product recommendations
 */
export type GetProductRecommendationsArgs = {
  /**
   * @type { string }
   * @memberof GetProductRecommendationsArgs
  */
  productId: string;
  /**
   * @type { ProductRecommendationIntent }
   * @memberof GetProductRecommendationsArgs
  */
  intent: ProductRecommendationIntent | null;
  };

export function decodeGetProductRecommendationsArgs(rawInput: unknown): GetProductRecommendationsArgs | null {
  if (isJSON(rawInput)) {
    const decodedProductId = decodeString(rawInput['productId']);
    const decodedIntent = decodeProductRecommendationIntent(rawInput['intent']);

    if (
      decodedProductId === null
    ) {
      return null;
    }

    return {
      productId: decodedProductId,
      intent: decodedIntent
    };
  }
  return null;
}





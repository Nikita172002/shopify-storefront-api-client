import { type Image, decodeImage,  type Money, decodeMoney,  type ProductPriceRange, decodeProductPriceRange,  type SEO, decodeSEO,  type ProductOptionValueSwatch, decodeProductOptionValueSwatch,  type WeightUnit, decodeWeightUnit,  type SelectedOption, decodeSelectedOption,  type ProductSummary, decodeProductSummary,  type UnitPriceMeasurementMeasuredType, decodeUnitPriceMeasurementMeasuredType,  type UnitPriceMeasurementMeasuredUnit, decodeUnitPriceMeasurementMeasuredUnit,  type UnitPriceMeasurement, decodeUnitPriceMeasurement,  type MetafieldParentResourceTypename, decodeMetafieldParentResourceTypename,  type MetafieldParentResource, decodeMetafieldParentResource,  type MetafieldReferenceTypename, decodeMetafieldReferenceTypename,  type VideoSource, decodeVideoSource,  type Model3dSource, decodeModel3dSource,  type MetafieldReference, decodeMetafieldReference,  type MetafieldReferenceEdge, decodeMetafieldReferenceEdge,  type PageInfo, decodePageInfo,  type MetafieldReferenceConnection, decodeMetafieldReferenceConnection,  type Metafield, decodeMetafield,  type SellingPlanCheckoutChargeType, decodeSellingPlanCheckoutChargeType,  type SellingPlanCheckoutChargeValue, decodeSellingPlanCheckoutChargeValue,  type SellingPlanCheckoutCharge, decodeSellingPlanCheckoutCharge,  type SellingPlanPriceAdjustment, decodeSellingPlanPriceAdjustment,  type SellingPlanOption, decodeSellingPlanOption,  type SellingPlanInterval, decodeSellingPlanInterval,  type SellingPlanRecurringBillingPolicy, decodeSellingPlanRecurringBillingPolicy,  type SellingPlanBillingPolicy, decodeSellingPlanBillingPolicy,  type SellingPlanRecurringDeliveryPolicy, decodeSellingPlanRecurringDeliveryPolicy,  type SellingPlanDeliveryPolicy, decodeSellingPlanDeliveryPolicy,  type SellingPlan, decodeSellingPlan,  type SellingPlanAllocationPriceAdjustment, decodeSellingPlanAllocationPriceAdjustment,  type SellingPlanAllocation, decodeSellingPlanAllocation,  type SellingPlanAllocationEdge, decodeSellingPlanAllocationEdge,  type SellingPlanAllocationConnection, decodeSellingPlanAllocationConnection,  type MailingAddress, decodeMailingAddress,  type Location, decodeLocation,  type StoreAvailability, decodeStoreAvailability,  type StoreAvailabilityEdge, decodeStoreAvailabilityEdge,  type StoreAvailabilityConnection, decodeStoreAvailabilityConnection,  type QuantityRule, decodeQuantityRule,  type QuantityPriceBreak, decodeQuantityPriceBreak,  type QuantityPriceBreakEdge, decodeQuantityPriceBreakEdge,  type QuantityPriceBreakConnection, decodeQuantityPriceBreakConnection,  type ProductVariant, decodeProductVariant,  type ProductVariantComponent, decodeProductVariantComponent,  type ProductVariantComponentEdge, decodeProductVariantComponentEdge,  type ProductVariantComponentConnection, decodeProductVariantComponentConnection,  type ProductVariantEdge, decodeProductVariantEdge,  type ProductVariantConnection, decodeProductVariantConnection,  type ShopPayInstallmentsProductVariantPricing, decodeShopPayInstallmentsProductVariantPricing,  type ProductOptionValue, decodeProductOptionValue,  type ProductOption, decodeProductOption,  type ImageEdge, decodeImageEdge,  type ImageConnection, decodeImageConnection,  type TaxonomyCategory, decodeTaxonomyCategory,  type MediaContentType, decodeMediaContentType,  type Media, decodeMedia,  type MediaEdge, decodeMediaEdge,  type MediaConnection, decodeMediaConnection,  type SellingPlanGroupOption, decodeSellingPlanGroupOption,  type SellingPlanEdge, decodeSellingPlanEdge,  type SellingPlanConnection, decodeSellingPlanConnection,  type SellingPlanGroup, decodeSellingPlanGroup,  type SellingPlanGroupEdge, decodeSellingPlanGroupEdge,  type SellingPlanGroupConnection, decodeSellingPlanGroupConnection,  type CountPrecision, decodeCountPrecision,  type Count, decodeCount,  type Product, decodeProduct,  type ProductEdge, decodeProductEdge,  type FilterType, decodeFilterType,  type FilterValue, decodeFilterValue,  type Filter, decodeFilter,  type ProductConnection, decodeProductConnection,  type Collection, decodeCollection,  type CollectionEdge, decodeCollectionEdge,  type CollectionConnection, decodeCollectionConnection,  type CustomerSummary, decodeCustomerSummary,  type DeliveryAddress, decodeDeliveryAddress,  type CartBuyerIdentity, decodeCartBuyerIdentity,  type Attribute, decodeAttribute,  type CartDiscountCode, decodeCartDiscountCode,  type CartDiscountAllocation, decodeCartDiscountAllocation,  type AppliedGiftCard, decodeAppliedGiftCard,  type CartCost, decodeCartCost,  type Merchandise, decodeMerchandise,  type CartLineCost, decodeCartLineCost,  type CartLineInstructionDiscounts, decodeCartLineInstructionDiscounts,  type CartLineInstructions, decodeCartLineInstructions,  type CartLineParentType, decodeCartLineParentType,  type CartLineParentRelationship, decodeCartLineParentRelationship,  type CartLine, decodeCartLine,  type BaseCartLineEdge, decodeBaseCartLineEdge,  type BaseCartLineConnection, decodeBaseCartLineConnection,  type CartSelectableAddress, decodeCartSelectableAddress,  type CartDelivery, decodeCartDelivery,  type DeliveryMethodType, decodeDeliveryMethodType,  type CartDeliveryOption, decodeCartDeliveryOption,  type CartDeliveryGroupType, decodeCartDeliveryGroupType,  type CartDeliveryGroup, decodeCartDeliveryGroup,  type CartDeliveryGroupEdge, decodeCartDeliveryGroupEdge,  type CartDeliveryGroupConnection, decodeCartDeliveryGroupConnection,  type CartWarningCode, decodeCartWarningCode,  type CartWarning, decodeCartWarning,  type Cart, decodeCart,  type CartUserErrorCode, decodeCartUserErrorCode,  type CartUserError, decodeCartUserError,  type CartMutationResult, decodeCartMutationResult,  type MailingAddressEdge, decodeMailingAddressEdge,  type MailingAddressConnection, decodeMailingAddressConnection,  type OrderCancelReason, decodeOrderCancelReason,  type OrderFulfillmentStatus, decodeOrderFulfillmentStatus,  type OrderFinancialStatus, decodeOrderFinancialStatus,  type OrderLineItem, decodeOrderLineItem,  type OrderLineItemEdge, decodeOrderLineItemEdge,  type OrderLineItemConnection, decodeOrderLineItemConnection,  type DiscountAllocationMethod, decodeDiscountAllocationMethod,  type DiscountTargetSelection, decodeDiscountTargetSelection,  type DiscountTargetType, decodeDiscountTargetType,  type DiscountValue, decodeDiscountValue,  type DiscountApplication, decodeDiscountApplication,  type DiscountAllocation, decodeDiscountAllocation,  type DiscountApplicationEdge, decodeDiscountApplicationEdge,  type DiscountApplicationConnection, decodeDiscountApplicationConnection,  type FulfillmentTrackingInfo, decodeFulfillmentTrackingInfo,  type Fulfillment, decodeFulfillment,  type Order, decodeOrder,  type OrderEdge, decodeOrderEdge,  type OrderConnection, decodeOrderConnection,  type Customer, decodeCustomer,  type CustomerAccessToken, decodeCustomerAccessToken,  type CustomerUserErrorCode, decodeCustomerUserErrorCode,  type CustomerUserError, decodeCustomerUserError,  type AccessTokenResult, decodeAccessTokenResult,  type CustomerMutationResult, decodeCustomerMutationResult,  type AddressMutationResult, decodeAddressMutationResult,  type SearchResultItemTypename, decodeSearchResultItemTypename,  type ArticleAuthor, decodeArticleAuthor,  type BlogSummary, decodeBlogSummary,  type SearchResultItem, decodeSearchResultItem,  type SearchResultItemEdge, decodeSearchResultItemEdge,  type SearchResultItemConnection, decodeSearchResultItemConnection,  type Page, decodePage,  type Article, decodeArticle,  type SearchQuerySuggestion, decodeSearchQuerySuggestion,  type PredictiveSearchResult, decodePredictiveSearchResult,  type PageEdge, decodePageEdge,  type PageConnection, decodePageConnection,  type ArticleEdge, decodeArticleEdge,  type ArticleConnection, decodeArticleConnection,  type Blog, decodeBlog,  type BlogEdge, decodeBlogEdge,  type BlogConnection, decodeBlogConnection,  type MenuItemType, decodeMenuItemType,  type MenuItem, decodeMenuItem,  type MenuItemResourceType, decodeMenuItemResourceType,  type MenuItemResource, decodeMenuItemResource,  type Menu, decodeMenu,  type MetaobjectField, decodeMetaobjectField,  type MetaobjectSEO, decodeMetaobjectSEO,  type Metaobject, decodeMetaobject,  type MetaobjectEdge, decodeMetaobjectEdge,  type MetaobjectConnection, decodeMetaobjectConnection,  type Domain, decodeDomain,  type BrandMediaImage, decodeBrandMediaImage,  type BrandColorGroup, decodeBrandColorGroup,  type BrandColors, decodeBrandColors,  type Brand, decodeBrand,  type PaymentSettings, decodePaymentSettings,  type ShopPolicy, decodeShopPolicy,  type ShopPolicyWithDefault, decodeShopPolicyWithDefault,  type ShopPayInstallmentsLoanType, decodeShopPayInstallmentsLoanType,  type ShopPayInstallmentsFinancingPlanTerm, decodeShopPayInstallmentsFinancingPlanTerm,  type ShopPayInstallmentsFinancingPlan, decodeShopPayInstallmentsFinancingPlan,  type ShopPayInstallmentsPricing, decodeShopPayInstallmentsPricing,  type SocialLoginProviderType, decodeSocialLoginProviderType,  type SocialLoginProvider, decodeSocialLoginProvider,  type Shop, decodeShop,  type Currency, decodeCurrency,  type Language, decodeLanguage,  type Market, decodeMarket,  type Country, decodeCountry,  type Localization, decodeLocalization  } from './index';
import { isJSON, decodeString, _decodeString , decodeBoolean, _decodeBoolean , decodeNumber, _decodeNumber , decodeArray, _decodeArray , decodeDate, _decodeDate  } from 'type-decoder';

/**
 * @type { ProductResponse }
 * @description GraphQL response containing a single product
 */
export type ProductResponse = {
  /**
   * @type { Product }
   * @memberof ProductResponse
  */
  product: Product | null;
  };

export function decodeProductResponse(rawInput: unknown): ProductResponse | null {
  if (isJSON(rawInput)) {
    const decodedProduct = decodeProduct(rawInput['product']);


    return {
      product: decodedProduct
    };
  }
  return null;
}


/**
 * @type { ProductsResponse }
 * @description GraphQL response containing product connection
 */
export type ProductsResponse = {
  /**
   * @type { ProductConnection }
   * @memberof ProductsResponse
  */
  products: ProductConnection | null;
  };

export function decodeProductsResponse(rawInput: unknown): ProductsResponse | null {
  if (isJSON(rawInput)) {
    const decodedProducts = decodeProductConnection(rawInput['products']);


    return {
      products: decodedProducts
    };
  }
  return null;
}


/**
 * @type { ProductRecommendationsResponse }
 * @description GraphQL response containing product recommendations
 */
export type ProductRecommendationsResponse = {
  /**
   * @type { Product[] }
   * @memberof ProductRecommendationsResponse
  */
  productRecommendations: Product[] | null;
  };

export function decodeProductRecommendationsResponse(rawInput: unknown): ProductRecommendationsResponse | null {
  if (isJSON(rawInput)) {
    const decodedProductRecommendations = decodeArray(rawInput['productRecommendations'], decodeProduct);


    return {
      productRecommendations: decodedProductRecommendations
    };
  }
  return null;
}


/**
 * @type { CollectionResponse }
 * @description GraphQL response containing a single collection
 */
export type CollectionResponse = {
  /**
   * @type { Collection }
   * @memberof CollectionResponse
  */
  collection: Collection | null;
  };

export function decodeCollectionResponse(rawInput: unknown): CollectionResponse | null {
  if (isJSON(rawInput)) {
    const decodedCollection = decodeCollection(rawInput['collection']);


    return {
      collection: decodedCollection
    };
  }
  return null;
}


/**
 * @type { CollectionsResponse }
 * @description GraphQL response containing collection connection
 */
export type CollectionsResponse = {
  /**
   * @type { CollectionConnection }
   * @memberof CollectionsResponse
  */
  collections: CollectionConnection | null;
  };

export function decodeCollectionsResponse(rawInput: unknown): CollectionsResponse | null {
  if (isJSON(rawInput)) {
    const decodedCollections = decodeCollectionConnection(rawInput['collections']);


    return {
      collections: decodedCollections
    };
  }
  return null;
}


/**
 * @type { CartResponse }
 * @description GraphQL response containing a cart
 */
export type CartResponse = {
  /**
   * @type { Cart }
   * @memberof CartResponse
  */
  cart: Cart | null;
  };

export function decodeCartResponse(rawInput: unknown): CartResponse | null {
  if (isJSON(rawInput)) {
    const decodedCart = decodeCart(rawInput['cart']);


    return {
      cart: decodedCart
    };
  }
  return null;
}


/**
 * @type { CartCreateResponse }
 * @description GraphQL response for cartCreate mutation
 */
export type CartCreateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartCreateResponse
  */
  cartCreate: CartMutationResult | null;
  };

export function decodeCartCreateResponse(rawInput: unknown): CartCreateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartCreate = decodeCartMutationResult(rawInput['cartCreate']);


    return {
      cartCreate: decodedCartCreate
    };
  }
  return null;
}


/**
 * @type { CartLinesAddResponse }
 * @description GraphQL response for cartLinesAdd mutation
 */
export type CartLinesAddResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartLinesAddResponse
  */
  cartLinesAdd: CartMutationResult | null;
  };

export function decodeCartLinesAddResponse(rawInput: unknown): CartLinesAddResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartLinesAdd = decodeCartMutationResult(rawInput['cartLinesAdd']);


    return {
      cartLinesAdd: decodedCartLinesAdd
    };
  }
  return null;
}


/**
 * @type { CartLinesUpdateResponse }
 * @description GraphQL response for cartLinesUpdate mutation
 */
export type CartLinesUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartLinesUpdateResponse
  */
  cartLinesUpdate: CartMutationResult | null;
  };

export function decodeCartLinesUpdateResponse(rawInput: unknown): CartLinesUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartLinesUpdate = decodeCartMutationResult(rawInput['cartLinesUpdate']);


    return {
      cartLinesUpdate: decodedCartLinesUpdate
    };
  }
  return null;
}


/**
 * @type { CartLinesRemoveResponse }
 * @description GraphQL response for cartLinesRemove mutation
 */
export type CartLinesRemoveResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartLinesRemoveResponse
  */
  cartLinesRemove: CartMutationResult | null;
  };

export function decodeCartLinesRemoveResponse(rawInput: unknown): CartLinesRemoveResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartLinesRemove = decodeCartMutationResult(rawInput['cartLinesRemove']);


    return {
      cartLinesRemove: decodedCartLinesRemove
    };
  }
  return null;
}


/**
 * @type { CartNoteUpdateResponse }
 * @description GraphQL response for cartNoteUpdate mutation
 */
export type CartNoteUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartNoteUpdateResponse
  */
  cartNoteUpdate: CartMutationResult | null;
  };

export function decodeCartNoteUpdateResponse(rawInput: unknown): CartNoteUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartNoteUpdate = decodeCartMutationResult(rawInput['cartNoteUpdate']);


    return {
      cartNoteUpdate: decodedCartNoteUpdate
    };
  }
  return null;
}


/**
 * @type { CartAttributesUpdateResponse }
 * @description GraphQL response for cartAttributesUpdate mutation
 */
export type CartAttributesUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartAttributesUpdateResponse
  */
  cartAttributesUpdate: CartMutationResult | null;
  };

export function decodeCartAttributesUpdateResponse(rawInput: unknown): CartAttributesUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartAttributesUpdate = decodeCartMutationResult(rawInput['cartAttributesUpdate']);


    return {
      cartAttributesUpdate: decodedCartAttributesUpdate
    };
  }
  return null;
}


/**
 * @type { CartBuyerIdentityUpdateResponse }
 * @description GraphQL response for cartBuyerIdentityUpdate mutation
 */
export type CartBuyerIdentityUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartBuyerIdentityUpdateResponse
  */
  cartBuyerIdentityUpdate: CartMutationResult | null;
  };

export function decodeCartBuyerIdentityUpdateResponse(rawInput: unknown): CartBuyerIdentityUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartBuyerIdentityUpdate = decodeCartMutationResult(rawInput['cartBuyerIdentityUpdate']);


    return {
      cartBuyerIdentityUpdate: decodedCartBuyerIdentityUpdate
    };
  }
  return null;
}


/**
 * @type { CartDiscountCodesUpdateResponse }
 * @description GraphQL response for cartDiscountCodesUpdate mutation
 */
export type CartDiscountCodesUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartDiscountCodesUpdateResponse
  */
  cartDiscountCodesUpdate: CartMutationResult | null;
  };

export function decodeCartDiscountCodesUpdateResponse(rawInput: unknown): CartDiscountCodesUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartDiscountCodesUpdate = decodeCartMutationResult(rawInput['cartDiscountCodesUpdate']);


    return {
      cartDiscountCodesUpdate: decodedCartDiscountCodesUpdate
    };
  }
  return null;
}


/**
 * @type { CartGiftCardCodesAddResponse }
 * @description GraphQL response for cartGiftCardCodesAdd mutation
 */
export type CartGiftCardCodesAddResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartGiftCardCodesAddResponse
  */
  cartGiftCardCodesAdd: CartMutationResult | null;
  };

export function decodeCartGiftCardCodesAddResponse(rawInput: unknown): CartGiftCardCodesAddResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartGiftCardCodesAdd = decodeCartMutationResult(rawInput['cartGiftCardCodesAdd']);


    return {
      cartGiftCardCodesAdd: decodedCartGiftCardCodesAdd
    };
  }
  return null;
}


/**
 * @type { CustomerResponse }
 * @description GraphQL response containing a customer
 */
export type CustomerResponse = {
  /**
   * @type { Customer }
   * @memberof CustomerResponse
  */
  customer: Customer | null;
  };

export function decodeCustomerResponse(rawInput: unknown): CustomerResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomer = decodeCustomer(rawInput['customer']);


    return {
      customer: decodedCustomer
    };
  }
  return null;
}


/**
 * @type { CustomerAccessTokenCreateResponse }
 * @description GraphQL response for customerAccessTokenCreate mutation
 */
export type CustomerAccessTokenCreateResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerAccessTokenCreateResponse
  */
  customerAccessTokenCreate: AccessTokenResult | null;
  };

export function decodeCustomerAccessTokenCreateResponse(rawInput: unknown): CustomerAccessTokenCreateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAccessTokenCreate = decodeAccessTokenResult(rawInput['customerAccessTokenCreate']);


    return {
      customerAccessTokenCreate: decodedCustomerAccessTokenCreate
    };
  }
  return null;
}


/**
 * @type { CustomerAccessTokenRenewResponse }
 * @description GraphQL response for customerAccessTokenRenew mutation
 */
export type CustomerAccessTokenRenewResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerAccessTokenRenewResponse
  */
  customerAccessTokenRenew: AccessTokenResult | null;
  };

export function decodeCustomerAccessTokenRenewResponse(rawInput: unknown): CustomerAccessTokenRenewResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAccessTokenRenew = decodeAccessTokenResult(rawInput['customerAccessTokenRenew']);


    return {
      customerAccessTokenRenew: decodedCustomerAccessTokenRenew
    };
  }
  return null;
}


/**
 * @type { CustomerAccessTokenDeleteResponse }
 * @description GraphQL response for customerAccessTokenDelete mutation
 */
export type CustomerAccessTokenDeleteResponse = {
  /**
   * @type { CustomerAccessTokenDeleteResult }
   * @memberof CustomerAccessTokenDeleteResponse
  */
  customerAccessTokenDelete: CustomerAccessTokenDeleteResult | null;
  };

export function decodeCustomerAccessTokenDeleteResponse(rawInput: unknown): CustomerAccessTokenDeleteResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAccessTokenDelete = decodeCustomerAccessTokenDeleteResult(rawInput['customerAccessTokenDelete']);


    return {
      customerAccessTokenDelete: decodedCustomerAccessTokenDelete
    };
  }
  return null;
}


/**
 * @type { CustomerAccessTokenDeleteResult }
 * @description Result of customerAccessTokenDelete mutation
 */
export type CustomerAccessTokenDeleteResult = {
  /**
   * @type { string }
   * @memberof CustomerAccessTokenDeleteResult
  */
  deletedAccessToken: string | null;
    /**
   * @type { string }
   * @memberof CustomerAccessTokenDeleteResult
  */
  deletedCustomerAccessTokenId: string | null;
    /**
   * @type { CustomerUserError[] }
   * @memberof CustomerAccessTokenDeleteResult
  */
  customerUserErrors: CustomerUserError[] | null;
  };

export function decodeCustomerAccessTokenDeleteResult(rawInput: unknown): CustomerAccessTokenDeleteResult | null {
  if (isJSON(rawInput)) {
    const decodedDeletedAccessToken = decodeString(rawInput['deletedAccessToken']);
    const decodedDeletedCustomerAccessTokenId = decodeString(rawInput['deletedCustomerAccessTokenId']);
    const decodedCustomerUserErrors = decodeArray(rawInput['customerUserErrors'], decodeCustomerUserError);


    return {
      deletedAccessToken: decodedDeletedAccessToken,
      deletedCustomerAccessTokenId: decodedDeletedCustomerAccessTokenId,
      customerUserErrors: decodedCustomerUserErrors
    };
  }
  return null;
}


/**
 * @type { CustomerCreateResponse }
 * @description GraphQL response for customerCreate mutation
 */
export type CustomerCreateResponse = {
  /**
   * @type { CustomerMutationResult }
   * @memberof CustomerCreateResponse
  */
  customerCreate: CustomerMutationResult | null;
  };

export function decodeCustomerCreateResponse(rawInput: unknown): CustomerCreateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerCreate = decodeCustomerMutationResult(rawInput['customerCreate']);


    return {
      customerCreate: decodedCustomerCreate
    };
  }
  return null;
}


/**
 * @type { CustomerUpdateResponse }
 * @description GraphQL response for customerUpdate mutation
 */
export type CustomerUpdateResponse = {
  /**
   * @type { CustomerMutationResult }
   * @memberof CustomerUpdateResponse
  */
  customerUpdate: CustomerMutationResult | null;
  };

export function decodeCustomerUpdateResponse(rawInput: unknown): CustomerUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerUpdate = decodeCustomerMutationResult(rawInput['customerUpdate']);


    return {
      customerUpdate: decodedCustomerUpdate
    };
  }
  return null;
}


/**
 * @type { CustomerRecoverResponse }
 * @description GraphQL response for customerRecover mutation
 */
export type CustomerRecoverResponse = {
  /**
   * @type { CustomerRecoverResult }
   * @memberof CustomerRecoverResponse
  */
  customerRecover: CustomerRecoverResult | null;
  };

export function decodeCustomerRecoverResponse(rawInput: unknown): CustomerRecoverResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerRecover = decodeCustomerRecoverResult(rawInput['customerRecover']);


    return {
      customerRecover: decodedCustomerRecover
    };
  }
  return null;
}


/**
 * @type { CustomerRecoverResult }
 * @description Result of customerRecover mutation
 */
export type CustomerRecoverResult = {
  /**
   * @type { CustomerUserError[] }
   * @memberof CustomerRecoverResult
  */
  customerUserErrors: CustomerUserError[] | null;
  };

export function decodeCustomerRecoverResult(rawInput: unknown): CustomerRecoverResult | null {
  if (isJSON(rawInput)) {
    const decodedCustomerUserErrors = decodeArray(rawInput['customerUserErrors'], decodeCustomerUserError);


    return {
      customerUserErrors: decodedCustomerUserErrors
    };
  }
  return null;
}


/**
 * @type { CustomerResetResponse }
 * @description GraphQL response for customerReset mutation
 */
export type CustomerResetResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerResetResponse
  */
  customerReset: AccessTokenResult | null;
  };

export function decodeCustomerResetResponse(rawInput: unknown): CustomerResetResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerReset = decodeAccessTokenResult(rawInput['customerReset']);


    return {
      customerReset: decodedCustomerReset
    };
  }
  return null;
}


/**
 * @type { CustomerResetByUrlResponse }
 * @description GraphQL response for customerResetByUrl mutation
 */
export type CustomerResetByUrlResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerResetByUrlResponse
  */
  customerResetByUrl: AccessTokenResult | null;
  };

export function decodeCustomerResetByUrlResponse(rawInput: unknown): CustomerResetByUrlResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerResetByUrl = decodeAccessTokenResult(rawInput['customerResetByUrl']);


    return {
      customerResetByUrl: decodedCustomerResetByUrl
    };
  }
  return null;
}


/**
 * @type { CustomerActivateResponse }
 * @description GraphQL response for customerActivate mutation
 */
export type CustomerActivateResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerActivateResponse
  */
  customerActivate: AccessTokenResult | null;
  };

export function decodeCustomerActivateResponse(rawInput: unknown): CustomerActivateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerActivate = decodeAccessTokenResult(rawInput['customerActivate']);


    return {
      customerActivate: decodedCustomerActivate
    };
  }
  return null;
}


/**
 * @type { CustomerActivateByUrlResponse }
 * @description GraphQL response for customerActivateByUrl mutation
 */
export type CustomerActivateByUrlResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerActivateByUrlResponse
  */
  customerActivateByUrl: AccessTokenResult | null;
  };

export function decodeCustomerActivateByUrlResponse(rawInput: unknown): CustomerActivateByUrlResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerActivateByUrl = decodeAccessTokenResult(rawInput['customerActivateByUrl']);


    return {
      customerActivateByUrl: decodedCustomerActivateByUrl
    };
  }
  return null;
}


/**
 * @type { CustomerAddressCreateResponse }
 * @description GraphQL response for customerAddressCreate mutation
 */
export type CustomerAddressCreateResponse = {
  /**
   * @type { AddressMutationResult }
   * @memberof CustomerAddressCreateResponse
  */
  customerAddressCreate: AddressMutationResult | null;
  };

export function decodeCustomerAddressCreateResponse(rawInput: unknown): CustomerAddressCreateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAddressCreate = decodeAddressMutationResult(rawInput['customerAddressCreate']);


    return {
      customerAddressCreate: decodedCustomerAddressCreate
    };
  }
  return null;
}


/**
 * @type { CustomerAddressUpdateResponse }
 * @description GraphQL response for customerAddressUpdate mutation
 */
export type CustomerAddressUpdateResponse = {
  /**
   * @type { AddressMutationResult }
   * @memberof CustomerAddressUpdateResponse
  */
  customerAddressUpdate: AddressMutationResult | null;
  };

export function decodeCustomerAddressUpdateResponse(rawInput: unknown): CustomerAddressUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAddressUpdate = decodeAddressMutationResult(rawInput['customerAddressUpdate']);


    return {
      customerAddressUpdate: decodedCustomerAddressUpdate
    };
  }
  return null;
}


/**
 * @type { CustomerAddressDeleteResponse }
 * @description GraphQL response for customerAddressDelete mutation
 */
export type CustomerAddressDeleteResponse = {
  /**
   * @type { CustomerAddressDeleteResult }
   * @memberof CustomerAddressDeleteResponse
  */
  customerAddressDelete: CustomerAddressDeleteResult | null;
  };

export function decodeCustomerAddressDeleteResponse(rawInput: unknown): CustomerAddressDeleteResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAddressDelete = decodeCustomerAddressDeleteResult(rawInput['customerAddressDelete']);


    return {
      customerAddressDelete: decodedCustomerAddressDelete
    };
  }
  return null;
}


/**
 * @type { CustomerAddressDeleteResult }
 * @description Result of customerAddressDelete mutation
 */
export type CustomerAddressDeleteResult = {
  /**
   * @type { string }
   * @memberof CustomerAddressDeleteResult
  */
  deletedCustomerAddressId: string | null;
    /**
   * @type { CustomerUserError[] }
   * @memberof CustomerAddressDeleteResult
  */
  customerUserErrors: CustomerUserError[] | null;
  };

export function decodeCustomerAddressDeleteResult(rawInput: unknown): CustomerAddressDeleteResult | null {
  if (isJSON(rawInput)) {
    const decodedDeletedCustomerAddressId = decodeString(rawInput['deletedCustomerAddressId']);
    const decodedCustomerUserErrors = decodeArray(rawInput['customerUserErrors'], decodeCustomerUserError);


    return {
      deletedCustomerAddressId: decodedDeletedCustomerAddressId,
      customerUserErrors: decodedCustomerUserErrors
    };
  }
  return null;
}


/**
 * @type { CustomerDefaultAddressUpdateResponse }
 * @description GraphQL response for customerDefaultAddressUpdate mutation
 */
export type CustomerDefaultAddressUpdateResponse = {
  /**
   * @type { CustomerMutationResult }
   * @memberof CustomerDefaultAddressUpdateResponse
  */
  customerDefaultAddressUpdate: CustomerMutationResult | null;
  };

export function decodeCustomerDefaultAddressUpdateResponse(rawInput: unknown): CustomerDefaultAddressUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerDefaultAddressUpdate = decodeCustomerMutationResult(rawInput['customerDefaultAddressUpdate']);


    return {
      customerDefaultAddressUpdate: decodedCustomerDefaultAddressUpdate
    };
  }
  return null;
}


/**
 * @type { SearchResponse }
 * @description GraphQL response for search query
 */
export type SearchResponse = {
  /**
   * @type { SearchResultItemConnection }
   * @memberof SearchResponse
  */
  search: SearchResultItemConnection | null;
  };

export function decodeSearchResponse(rawInput: unknown): SearchResponse | null {
  if (isJSON(rawInput)) {
    const decodedSearch = decodeSearchResultItemConnection(rawInput['search']);


    return {
      search: decodedSearch
    };
  }
  return null;
}


/**
 * @type { PredictiveSearchResponse }
 * @description GraphQL response for predictiveSearch query
 */
export type PredictiveSearchResponse = {
  /**
   * @type { PredictiveSearchResult }
   * @memberof PredictiveSearchResponse
  */
  predictiveSearch: PredictiveSearchResult | null;
  };

export function decodePredictiveSearchResponse(rawInput: unknown): PredictiveSearchResponse | null {
  if (isJSON(rawInput)) {
    const decodedPredictiveSearch = decodePredictiveSearchResult(rawInput['predictiveSearch']);


    return {
      predictiveSearch: decodedPredictiveSearch
    };
  }
  return null;
}


/**
 * @type { PageResponse }
 * @description GraphQL response containing a page
 */
export type PageResponse = {
  /**
   * @type { Page }
   * @memberof PageResponse
  */
  page: Page | null;
  };

export function decodePageResponse(rawInput: unknown): PageResponse | null {
  if (isJSON(rawInput)) {
    const decodedPage = decodePage(rawInput['page']);


    return {
      page: decodedPage
    };
  }
  return null;
}


/**
 * @type { PagesResponse }
 * @description GraphQL response containing page connection
 */
export type PagesResponse = {
  /**
   * @type { PageConnection }
   * @memberof PagesResponse
  */
  pages: PageConnection | null;
  };

export function decodePagesResponse(rawInput: unknown): PagesResponse | null {
  if (isJSON(rawInput)) {
    const decodedPages = decodePageConnection(rawInput['pages']);


    return {
      pages: decodedPages
    };
  }
  return null;
}


/**
 * @type { BlogResponse }
 * @description GraphQL response containing a blog
 */
export type BlogResponse = {
  /**
   * @type { Blog }
   * @memberof BlogResponse
  */
  blog: Blog | null;
  };

export function decodeBlogResponse(rawInput: unknown): BlogResponse | null {
  if (isJSON(rawInput)) {
    const decodedBlog = decodeBlog(rawInput['blog']);


    return {
      blog: decodedBlog
    };
  }
  return null;
}


/**
 * @type { BlogsResponse }
 * @description GraphQL response containing blog connection
 */
export type BlogsResponse = {
  /**
   * @type { BlogConnection }
   * @memberof BlogsResponse
  */
  blogs: BlogConnection | null;
  };

export function decodeBlogsResponse(rawInput: unknown): BlogsResponse | null {
  if (isJSON(rawInput)) {
    const decodedBlogs = decodeBlogConnection(rawInput['blogs']);


    return {
      blogs: decodedBlogs
    };
  }
  return null;
}


/**
 * @type { ArticleResponse }
 * @description GraphQL response containing an article
 */
export type ArticleResponse = {
  /**
   * @type { Article }
   * @memberof ArticleResponse
  */
  article: Article | null;
  };

export function decodeArticleResponse(rawInput: unknown): ArticleResponse | null {
  if (isJSON(rawInput)) {
    const decodedArticle = decodeArticle(rawInput['article']);


    return {
      article: decodedArticle
    };
  }
  return null;
}


/**
 * @type { ArticlesResponse }
 * @description GraphQL response containing article connection
 */
export type ArticlesResponse = {
  /**
   * @type { ArticleConnection }
   * @memberof ArticlesResponse
  */
  articles: ArticleConnection | null;
  };

export function decodeArticlesResponse(rawInput: unknown): ArticlesResponse | null {
  if (isJSON(rawInput)) {
    const decodedArticles = decodeArticleConnection(rawInput['articles']);


    return {
      articles: decodedArticles
    };
  }
  return null;
}


/**
 * @type { MenuResponse }
 * @description GraphQL response containing a menu
 */
export type MenuResponse = {
  /**
   * @type { Menu }
   * @memberof MenuResponse
  */
  menu: Menu | null;
  };

export function decodeMenuResponse(rawInput: unknown): MenuResponse | null {
  if (isJSON(rawInput)) {
    const decodedMenu = decodeMenu(rawInput['menu']);


    return {
      menu: decodedMenu
    };
  }
  return null;
}


/**
 * @type { MetaobjectResponse }
 * @description GraphQL response containing a metaobject
 */
export type MetaobjectResponse = {
  /**
   * @type { Metaobject }
   * @memberof MetaobjectResponse
  */
  metaobject: Metaobject | null;
  };

export function decodeMetaobjectResponse(rawInput: unknown): MetaobjectResponse | null {
  if (isJSON(rawInput)) {
    const decodedMetaobject = decodeMetaobject(rawInput['metaobject']);


    return {
      metaobject: decodedMetaobject
    };
  }
  return null;
}


/**
 * @type { MetaobjectsResponse }
 * @description GraphQL response containing metaobject connection
 */
export type MetaobjectsResponse = {
  /**
   * @type { MetaobjectConnection }
   * @memberof MetaobjectsResponse
  */
  metaobjects: MetaobjectConnection | null;
  };

export function decodeMetaobjectsResponse(rawInput: unknown): MetaobjectsResponse | null {
  if (isJSON(rawInput)) {
    const decodedMetaobjects = decodeMetaobjectConnection(rawInput['metaobjects']);


    return {
      metaobjects: decodedMetaobjects
    };
  }
  return null;
}


/**
 * @type { ShopResponse }
 * @description GraphQL response containing shop info
 */
export type ShopResponse = {
  /**
   * @type { Shop }
   * @memberof ShopResponse
  */
  shop: Shop | null;
  };

export function decodeShopResponse(rawInput: unknown): ShopResponse | null {
  if (isJSON(rawInput)) {
    const decodedShop = decodeShop(rawInput['shop']);


    return {
      shop: decodedShop
    };
  }
  return null;
}


/**
 * @type { LocalizationResponse }
 * @description GraphQL response containing localization info
 */
export type LocalizationResponse = {
  /**
   * @type { Localization }
   * @memberof LocalizationResponse
  */
  localization: Localization | null;
  };

export function decodeLocalizationResponse(rawInput: unknown): LocalizationResponse | null {
  if (isJSON(rawInput)) {
    const decodedLocalization = decodeLocalization(rawInput['localization']);


    return {
      localization: decodedLocalization
    };
  }
  return null;
}





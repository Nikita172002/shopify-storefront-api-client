import { type PageInfo, decodePageInfo,  type Money, decodeMoney,  type Attribute, decodeAttribute,  type WeightUnit, decodeWeightUnit,  type Image, decodeImage,  type SelectedOption, decodeSelectedOption,  type ProductSummary, decodeProductSummary,  type UnitPriceMeasurementMeasuredType, decodeUnitPriceMeasurementMeasuredType,  type UnitPriceMeasurementMeasuredUnit, decodeUnitPriceMeasurementMeasuredUnit,  type UnitPriceMeasurement, decodeUnitPriceMeasurement,  type MetafieldParentResourceTypename, decodeMetafieldParentResourceTypename,  type MetafieldParentResource, decodeMetafieldParentResource,  type MetafieldReferenceTypename, decodeMetafieldReferenceTypename,  type VideoSource, decodeVideoSource,  type Model3dSource, decodeModel3dSource,  type MetafieldReference, decodeMetafieldReference,  type MetafieldReferenceEdge, decodeMetafieldReferenceEdge,  type MetafieldReferenceConnection, decodeMetafieldReferenceConnection,  type Metafield, decodeMetafield,  type SellingPlanCheckoutChargeType, decodeSellingPlanCheckoutChargeType,  type SellingPlanCheckoutChargeValue, decodeSellingPlanCheckoutChargeValue,  type SellingPlanCheckoutCharge, decodeSellingPlanCheckoutCharge,  type SellingPlanPriceAdjustment, decodeSellingPlanPriceAdjustment,  type SellingPlanOption, decodeSellingPlanOption,  type SellingPlanInterval, decodeSellingPlanInterval,  type SellingPlanRecurringBillingPolicy, decodeSellingPlanRecurringBillingPolicy,  type SellingPlanBillingPolicy, decodeSellingPlanBillingPolicy,  type SellingPlanRecurringDeliveryPolicy, decodeSellingPlanRecurringDeliveryPolicy,  type SellingPlanDeliveryPolicy, decodeSellingPlanDeliveryPolicy,  type SellingPlan, decodeSellingPlan,  type SellingPlanAllocationPriceAdjustment, decodeSellingPlanAllocationPriceAdjustment,  type SellingPlanAllocation, decodeSellingPlanAllocation,  type SellingPlanAllocationEdge, decodeSellingPlanAllocationEdge,  type SellingPlanAllocationConnection, decodeSellingPlanAllocationConnection,  type Location, decodeLocation,  type StoreAvailability, decodeStoreAvailability,  type StoreAvailabilityEdge, decodeStoreAvailabilityEdge,  type StoreAvailabilityConnection, decodeStoreAvailabilityConnection,  type QuantityRule, decodeQuantityRule,  type QuantityPriceBreak, decodeQuantityPriceBreak,  type QuantityPriceBreakEdge, decodeQuantityPriceBreakEdge,  type QuantityPriceBreakConnection, decodeQuantityPriceBreakConnection,  type ProductVariant, decodeProductVariant,  type ProductVariantComponent, decodeProductVariantComponent,  type ProductVariantComponentEdge, decodeProductVariantComponentEdge,  type ProductVariantComponentConnection, decodeProductVariantComponentConnection,  type ProductVariantEdge, decodeProductVariantEdge,  type ProductVariantConnection, decodeProductVariantConnection,  type ShopPayInstallmentsProductVariantPricing, decodeShopPayInstallmentsProductVariantPricing,  type CartDiscountAllocation, decodeCartDiscountAllocation  } from './index';
import { isJSON, decodeString, _decodeString , decodeBoolean, _decodeBoolean , decodeNumber, _decodeNumber , decodeArray, _decodeArray , decodeDate, _decodeDate  } from 'type-decoder';

/**
 * @type { OrderCancelReason }
 * @description Reason for order cancellation
 */
export type OrderCancelReason =
  | 'CUSTOMER'
  | 'FRAUD'
  | 'INVENTORY'
  | 'DECLINED'
  | 'OTHER'
;

export function decodeOrderCancelReason(rawInput: unknown): OrderCancelReason | null {
  switch (rawInput) {
    case 'CUSTOMER':
    case 'FRAUD':
    case 'INVENTORY':
    case 'DECLINED':
    case 'OTHER':
     return rawInput;
  }
  return null;
}

export function _decodeOrderCancelReason(rawInput: unknown): OrderCancelReason | undefined {
  switch (rawInput) {
    case 'CUSTOMER':
    case 'FRAUD':
    case 'INVENTORY':
    case 'DECLINED':
    case 'OTHER':
    return rawInput;
  }
  return;
}

/**
 * @type { OrderFulfillmentStatus }
 * @description Fulfillment status of an order
 */
export type OrderFulfillmentStatus =
  | 'UNFULFILLED'
  | 'PARTIALLY_FULFILLED'
  | 'FULFILLED'
  | 'RESTOCKED'
  | 'PENDING_FULFILLMENT'
  | 'OPEN'
  | 'IN_PROGRESS'
  | 'ON_HOLD'
  | 'SCHEDULED'
;

export function decodeOrderFulfillmentStatus(rawInput: unknown): OrderFulfillmentStatus | null {
  switch (rawInput) {
    case 'UNFULFILLED':
    case 'PARTIALLY_FULFILLED':
    case 'FULFILLED':
    case 'RESTOCKED':
    case 'PENDING_FULFILLMENT':
    case 'OPEN':
    case 'IN_PROGRESS':
    case 'ON_HOLD':
    case 'SCHEDULED':
     return rawInput;
  }
  return null;
}

export function _decodeOrderFulfillmentStatus(rawInput: unknown): OrderFulfillmentStatus | undefined {
  switch (rawInput) {
    case 'UNFULFILLED':
    case 'PARTIALLY_FULFILLED':
    case 'FULFILLED':
    case 'RESTOCKED':
    case 'PENDING_FULFILLMENT':
    case 'OPEN':
    case 'IN_PROGRESS':
    case 'ON_HOLD':
    case 'SCHEDULED':
    return rawInput;
  }
  return;
}

/**
 * @type { OrderFinancialStatus }
 * @description Financial status of an order
 */
export type OrderFinancialStatus =
  | 'PENDING'
  | 'AUTHORIZED'
  | 'PARTIALLY_PAID'
  | 'PARTIALLY_REFUNDED'
  | 'VOIDED'
  | 'PAID'
  | 'REFUNDED'
;

export function decodeOrderFinancialStatus(rawInput: unknown): OrderFinancialStatus | null {
  switch (rawInput) {
    case 'PENDING':
    case 'AUTHORIZED':
    case 'PARTIALLY_PAID':
    case 'PARTIALLY_REFUNDED':
    case 'VOIDED':
    case 'PAID':
    case 'REFUNDED':
     return rawInput;
  }
  return null;
}

export function _decodeOrderFinancialStatus(rawInput: unknown): OrderFinancialStatus | undefined {
  switch (rawInput) {
    case 'PENDING':
    case 'AUTHORIZED':
    case 'PARTIALLY_PAID':
    case 'PARTIALLY_REFUNDED':
    case 'VOIDED':
    case 'PAID':
    case 'REFUNDED':
    return rawInput;
  }
  return;
}

/**
 * @type { DiscountAllocationMethod }
 * @description How a discount is allocated
 */
export type DiscountAllocationMethod =
  | 'ACROSS'
  | 'EACH'
  | 'ONE'
;

export function decodeDiscountAllocationMethod(rawInput: unknown): DiscountAllocationMethod | null {
  switch (rawInput) {
    case 'ACROSS':
    case 'EACH':
    case 'ONE':
     return rawInput;
  }
  return null;
}

export function _decodeDiscountAllocationMethod(rawInput: unknown): DiscountAllocationMethod | undefined {
  switch (rawInput) {
    case 'ACROSS':
    case 'EACH':
    case 'ONE':
    return rawInput;
  }
  return;
}

/**
 * @type { DiscountTargetSelection }
 * @description What a discount targets
 */
export type DiscountTargetSelection =
  | 'ALL'
  | 'ENTITLED'
  | 'EXPLICIT'
;

export function decodeDiscountTargetSelection(rawInput: unknown): DiscountTargetSelection | null {
  switch (rawInput) {
    case 'ALL':
    case 'ENTITLED':
    case 'EXPLICIT':
     return rawInput;
  }
  return null;
}

export function _decodeDiscountTargetSelection(rawInput: unknown): DiscountTargetSelection | undefined {
  switch (rawInput) {
    case 'ALL':
    case 'ENTITLED':
    case 'EXPLICIT':
    return rawInput;
  }
  return;
}

/**
 * @type { DiscountTargetType }
 * @description Type of discount target
 */
export type DiscountTargetType =
  | 'LINE_ITEM'
  | 'SHIPPING_LINE'
;

export function decodeDiscountTargetType(rawInput: unknown): DiscountTargetType | null {
  switch (rawInput) {
    case 'LINE_ITEM':
    case 'SHIPPING_LINE':
     return rawInput;
  }
  return null;
}

export function _decodeDiscountTargetType(rawInput: unknown): DiscountTargetType | undefined {
  switch (rawInput) {
    case 'LINE_ITEM':
    case 'SHIPPING_LINE':
    return rawInput;
  }
  return;
}

/**
 * @type { CustomerUserErrorCode }
 * @description Error codes for customer operations
 */
export type CustomerUserErrorCode =
  | 'BLANK'
  | 'INVALID'
  | 'TAKEN'
  | 'TOO_LONG'
  | 'TOO_SHORT'
  | 'UNIDENTIFIED_CUSTOMER'
  | 'CUSTOMER_DISABLED'
  | 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE'
  | 'CONTAINS_HTML_TAGS'
  | 'CONTAINS_URL'
  | 'TOKEN_INVALID'
  | 'ALREADY_ENABLED'
  | 'NOT_FOUND'
  | 'BAD_DOMAIN'
  | 'INVALID_MULTIPASS_REQUEST'
;

export function decodeCustomerUserErrorCode(rawInput: unknown): CustomerUserErrorCode | null {
  switch (rawInput) {
    case 'BLANK':
    case 'INVALID':
    case 'TAKEN':
    case 'TOO_LONG':
    case 'TOO_SHORT':
    case 'UNIDENTIFIED_CUSTOMER':
    case 'CUSTOMER_DISABLED':
    case 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE':
    case 'CONTAINS_HTML_TAGS':
    case 'CONTAINS_URL':
    case 'TOKEN_INVALID':
    case 'ALREADY_ENABLED':
    case 'NOT_FOUND':
    case 'BAD_DOMAIN':
    case 'INVALID_MULTIPASS_REQUEST':
     return rawInput;
  }
  return null;
}

export function _decodeCustomerUserErrorCode(rawInput: unknown): CustomerUserErrorCode | undefined {
  switch (rawInput) {
    case 'BLANK':
    case 'INVALID':
    case 'TAKEN':
    case 'TOO_LONG':
    case 'TOO_SHORT':
    case 'UNIDENTIFIED_CUSTOMER':
    case 'CUSTOMER_DISABLED':
    case 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE':
    case 'CONTAINS_HTML_TAGS':
    case 'CONTAINS_URL':
    case 'TOKEN_INVALID':
    case 'ALREADY_ENABLED':
    case 'NOT_FOUND':
    case 'BAD_DOMAIN':
    case 'INVALID_MULTIPASS_REQUEST':
    return rawInput;
  }
  return;
}

/**
 * @type { Customer }
 * @description A customer account with contact information and order history
 */
export type Customer = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Customer
  */
  id: string;
  /**
   * @description Customer email address
   * @type { string }
   * @memberof Customer
  */
  email: string | null;
    /**
   * @description Customer first name
   * @type { string }
   * @memberof Customer
  */
  firstName: string | null;
    /**
   * @description Customer last name
   * @type { string }
   * @memberof Customer
  */
  lastName: string | null;
    /**
   * @description Customer name, email or phone number
   * @type { string }
   * @memberof Customer
  */
  displayName: string;
  /**
   * @description Customer phone number
   * @type { string }
   * @memberof Customer
  */
  phone: string | null;
    /**
   * @description Whether customer consents to marketing emails
   * @type { boolean }
   * @memberof Customer
  */
  acceptsMarketing: boolean;
  /**
   * @description When the customer was created
   * @type { string }
   * @memberof Customer
  */
  createdAt: string | null;
    /**
   * @description When the customer was last updated
   * @type { string }
   * @memberof Customer
  */
  updatedAt: string | null;
    /**
   * @description Total number of orders in lifetime
   * @type { number }
   * @memberof Customer
  */
  numberOfOrders: number;
  /**
   * @description Default address
   * @type { MailingAddress }
   * @memberof Customer
  */
  defaultAddress: MailingAddress | null;
    /**
   * @description Customer addresses
   * @type { MailingAddressConnection }
   * @memberof Customer
  */
  addresses: MailingAddressConnection | null;
    /**
   * @description Customer orders
   * @type { OrderConnection }
   * @memberof Customer
  */
  orders: OrderConnection | null;
    /**
   * @description Tags added to the customer
   * @type { string[] }
   * @memberof Customer
  */
  tags: string[];
  /**
   * @description URL of the customer avatar image
   * @type { string }
   * @memberof Customer
  */
  avatarUrl: string | null;
    /**
   * @description A custom field associated with the customer
   * @type { Metafield }
   * @memberof Customer
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields
   * @type { Metafield[] }
   * @memberof Customer
  */
  metafields: Metafield[] | null;
  };

export function decodeCustomer(rawInput: unknown): Customer | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedEmail = decodeString(rawInput['email']);
    const decodedFirstName = decodeString(rawInput['firstName']);
    const decodedLastName = decodeString(rawInput['lastName']);
    const decodedDisplayName = decodeString(rawInput['displayName']);
    const decodedPhone = decodeString(rawInput['phone']);
    const decodedAcceptsMarketing = decodeBoolean(rawInput['acceptsMarketing']);
    const decodedCreatedAt = decodeString(rawInput['createdAt']);
    const decodedUpdatedAt = decodeString(rawInput['updatedAt']);
    const decodedNumberOfOrders = decodeNumber(rawInput['numberOfOrders']);
    const decodedDefaultAddress = decodeMailingAddress(rawInput['defaultAddress']);
    const decodedAddresses = decodeMailingAddressConnection(rawInput['addresses']);
    const decodedOrders = decodeOrderConnection(rawInput['orders']);
    const decodedTags = decodeArray(rawInput['tags'], decodeString);
    const decodedAvatarUrl = decodeString(rawInput['avatarUrl']);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);

    if (
      decodedId === null ||
      decodedDisplayName === null ||
      decodedAcceptsMarketing === null ||
      decodedNumberOfOrders === null ||
      decodedTags === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      email: decodedEmail,
      firstName: decodedFirstName,
      lastName: decodedLastName,
      displayName: decodedDisplayName,
      phone: decodedPhone,
      acceptsMarketing: decodedAcceptsMarketing,
      createdAt: decodedCreatedAt,
      updatedAt: decodedUpdatedAt,
      numberOfOrders: decodedNumberOfOrders,
      defaultAddress: decodedDefaultAddress,
      addresses: decodedAddresses,
      orders: decodedOrders,
      tags: decodedTags,
      avatarUrl: decodedAvatarUrl,
      metafield: decodedMetafield,
      metafields: decodedMetafields
    };
  }
  return null;
}


/**
 * @type { CustomerSummary }
 * @description Minimal customer info for nested references
 */
export type CustomerSummary = {
  /**
   * @type { string }
   * @memberof CustomerSummary
  */
  id: string;
  /**
   * @type { string }
   * @memberof CustomerSummary
  */
  email: string | null;
    /**
   * @type { string }
   * @memberof CustomerSummary
  */
  firstName: string | null;
    /**
   * @type { string }
   * @memberof CustomerSummary
  */
  lastName: string | null;
  };

export function decodeCustomerSummary(rawInput: unknown): CustomerSummary | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedEmail = decodeString(rawInput['email']);
    const decodedFirstName = decodeString(rawInput['firstName']);
    const decodedLastName = decodeString(rawInput['lastName']);

    if (
      decodedId === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      email: decodedEmail,
      firstName: decodedFirstName,
      lastName: decodedLastName
    };
  }
  return null;
}


/**
 * @type { CustomerAccessToken }
 * @description Access token for customer authentication
 */
export type CustomerAccessToken = {
  /**
   * @type { string }
   * @memberof CustomerAccessToken
  */
  accessToken: string;
  /**
   * @type { Date }
   * @memberof CustomerAccessToken
  */
  expiresAt: Date;
};

export function decodeCustomerAccessToken(rawInput: unknown): CustomerAccessToken | null {
  if (isJSON(rawInput)) {
    const decodedAccessToken = decodeString(rawInput['accessToken']);
    const decodedExpiresAt = decodeDate(rawInput['expiresAt']);

    if (
      decodedAccessToken === null ||
      decodedExpiresAt === null
    ) {
      return null;
    }

    return {
      accessToken: decodedAccessToken,
      expiresAt: decodedExpiresAt
    };
  }
  return null;
}


/**
 * @type { MailingAddress }
 * @description A mailing address
 */
export type MailingAddress = {
  /**
   * @type { string }
   * @memberof MailingAddress
  */
  id: string;
  /**
   * @type { string }
   * @memberof MailingAddress
  */
  firstName: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  lastName: string | null;
    /**
   * @description Full name
   * @type { string }
   * @memberof MailingAddress
  */
  name: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  company: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  address1: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  address2: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  city: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  province: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  provinceCode: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  country: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  countryCodeV2: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  zip: string | null;
    /**
   * @type { string }
   * @memberof MailingAddress
  */
  phone: string | null;
    /**
   * @description Formatted address lines
   * @type { string[] }
   * @memberof MailingAddress
  */
  formatted: string[] | null;
    /**
   * @description City, province, country formatted
   * @type { string }
   * @memberof MailingAddress
  */
  formattedArea: string | null;
    /**
   * @type { number }
   * @memberof MailingAddress
  */
  latitude: number | null;
    /**
   * @type { number }
   * @memberof MailingAddress
  */
  longitude: number | null;
  };

export function decodeMailingAddress(rawInput: unknown): MailingAddress | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedFirstName = decodeString(rawInput['firstName']);
    const decodedLastName = decodeString(rawInput['lastName']);
    const decodedName = decodeString(rawInput['name']);
    const decodedCompany = decodeString(rawInput['company']);
    const decodedAddress1 = decodeString(rawInput['address1']);
    const decodedAddress2 = decodeString(rawInput['address2']);
    const decodedCity = decodeString(rawInput['city']);
    const decodedProvince = decodeString(rawInput['province']);
    const decodedProvinceCode = decodeString(rawInput['provinceCode']);
    const decodedCountry = decodeString(rawInput['country']);
    const decodedCountryCodeV2 = decodeString(rawInput['countryCodeV2']);
    const decodedZip = decodeString(rawInput['zip']);
    const decodedPhone = decodeString(rawInput['phone']);
    const decodedFormatted = decodeArray(rawInput['formatted'], decodeString);
    const decodedFormattedArea = decodeString(rawInput['formattedArea']);
    const decodedLatitude = decodeNumber(rawInput['latitude']);
    const decodedLongitude = decodeNumber(rawInput['longitude']);

    if (
      decodedId === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      firstName: decodedFirstName,
      lastName: decodedLastName,
      name: decodedName,
      company: decodedCompany,
      address1: decodedAddress1,
      address2: decodedAddress2,
      city: decodedCity,
      province: decodedProvince,
      provinceCode: decodedProvinceCode,
      country: decodedCountry,
      countryCodeV2: decodedCountryCodeV2,
      zip: decodedZip,
      phone: decodedPhone,
      formatted: decodedFormatted,
      formattedArea: decodedFormattedArea,
      latitude: decodedLatitude,
      longitude: decodedLongitude
    };
  }
  return null;
}


/**
 * @type { MailingAddressConnection }
 * @description Paginated list of addresses
 */
export type MailingAddressConnection = {
  /**
   * @type { MailingAddressEdge[] }
   * @memberof MailingAddressConnection
  */
  edges: MailingAddressEdge[];
  /**
   * @type { PageInfo }
   * @memberof MailingAddressConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeMailingAddressConnection(rawInput: unknown): MailingAddressConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeMailingAddressEdge);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { MailingAddressEdge }
 * @description An edge in an address connection
 */
export type MailingAddressEdge = {
  /**
   * @type { MailingAddress }
   * @memberof MailingAddressEdge
  */
  node: MailingAddress;
  /**
   * @type { string }
   * @memberof MailingAddressEdge
  */
  cursor: string | null;
  };

export function decodeMailingAddressEdge(rawInput: unknown): MailingAddressEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeMailingAddress(rawInput['node']);
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
 * @type { Order }
 * @description A customer order completed through checkout
 */
export type Order = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Order
  */
  id: string;
  /**
   * @description Order name (e.g., #1001)
   * @type { string }
   * @memberof Order
  */
  name: string;
  /**
   * @description Unique numeric identifier
   * @type { number }
   * @memberof Order
  */
  orderNumber: number;
  /**
   * @description When the order was processed
   * @type { string }
   * @memberof Order
  */
  processedAt: string;
  /**
   * @description When the order was canceled
   * @type { string }
   * @memberof Order
  */
  canceledAt: string | null;
    /**
   * @type { OrderCancelReason }
   * @memberof Order
  */
  cancelReason: OrderCancelReason | null;
    /**
   * @type { OrderFulfillmentStatus }
   * @memberof Order
  */
  fulfillmentStatus: OrderFulfillmentStatus;
  /**
   * @type { OrderFinancialStatus }
   * @memberof Order
  */
  financialStatus: OrderFinancialStatus | null;
    /**
   * @description Unique URL for the order status page
   * @type { string }
   * @memberof Order
  */
  statusUrl: string;
  /**
   * @description URL the customer can use to access the order
   * @type { string }
   * @memberof Order
  */
  customerUrl: string | null;
    /**
   * @description Customer email address
   * @type { string }
   * @memberof Order
  */
  email: string | null;
    /**
   * @description Customer phone for SMS notifications
   * @type { string }
   * @memberof Order
  */
  phone: string | null;
    /**
   * @description Locale code of the order
   * @type { string }
   * @memberof Order
  */
  customerLocale: string | null;
    /**
   * @description Currency code for payment
   * @type { string }
   * @memberof Order
  */
  currencyCode: string | null;
    /**
   * @description Whether the order has had edits applied
   * @type { boolean }
   * @memberof Order
  */
  edited: boolean | null;
    /**
   * @description Current total minus removed items
   * @type { Money }
   * @memberof Order
  */
  currentTotalPrice: Money | null;
    /**
   * @description Current subtotal minus removed items
   * @type { Money }
   * @memberof Order
  */
  currentSubtotalPrice: Money | null;
    /**
   * @description Current total tax minus returned items
   * @type { Money }
   * @memberof Order
  */
  currentTotalTax: Money | null;
    /**
   * @description Current shipping total minus refunds
   * @type { Money }
   * @memberof Order
  */
  currentTotalShippingPrice: Money | null;
    /**
   * @description Current duties total including refunds
   * @type { Money }
   * @memberof Order
  */
  currentTotalDuties: Money | null;
    /**
   * @description Total price before any edits
   * @type { Money }
   * @memberof Order
  */
  originalTotalPrice: Money | null;
    /**
   * @description Duties charged at checkout
   * @type { Money }
   * @memberof Order
  */
  originalTotalDuties: Money | null;
    /**
   * @description Sum of all prices including discounts and taxes
   * @type { Money }
   * @memberof Order
  */
  totalPrice: Money | null;
    /**
   * @description Price before shipping and taxes
   * @type { Money }
   * @memberof Order
  */
  subtotalPrice: Money | null;
    /**
   * @description Total cost of shipping
   * @type { Money }
   * @memberof Order
  */
  totalShippingPrice: Money | null;
    /**
   * @description Total cost of taxes
   * @type { Money }
   * @memberof Order
  */
  totalTax: Money | null;
    /**
   * @description Total amount refunded
   * @type { Money }
   * @memberof Order
  */
  totalRefunded: Money | null;
    /**
   * @description Custom attributes on the order
   * @type { Attribute[] }
   * @memberof Order
  */
  customAttributes: Attribute[] | null;
    /**
   * @type { MailingAddress }
   * @memberof Order
  */
  shippingAddress: MailingAddress | null;
    /**
   * @type { MailingAddress }
   * @memberof Order
  */
  billingAddress: MailingAddress | null;
    /**
   * @type { OrderLineItemConnection }
   * @memberof Order
  */
  lineItems: OrderLineItemConnection | null;
    /**
   * @description Discounts applied to shipping
   * @type { DiscountAllocation[] }
   * @memberof Order
  */
  shippingDiscountAllocations: DiscountAllocation[] | null;
    /**
   * @type { DiscountApplicationConnection }
   * @memberof Order
  */
  discountApplications: DiscountApplicationConnection | null;
    /**
   * @type { Fulfillment[] }
   * @memberof Order
  */
  successfulFulfillments: Fulfillment[] | null;
    /**
   * @description A custom field associated with the order
   * @type { Metafield }
   * @memberof Order
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields
   * @type { Metafield[] }
   * @memberof Order
  */
  metafields: Metafield[] | null;
  };

export function decodeOrder(rawInput: unknown): Order | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedName = decodeString(rawInput['name']);
    const decodedOrderNumber = decodeNumber(rawInput['orderNumber']);
    const decodedProcessedAt = decodeString(rawInput['processedAt']);
    const decodedCanceledAt = decodeString(rawInput['canceledAt']);
    const decodedCancelReason = decodeOrderCancelReason(rawInput['cancelReason']);
    const decodedFulfillmentStatus = decodeOrderFulfillmentStatus(rawInput['fulfillmentStatus']);
    const decodedFinancialStatus = decodeOrderFinancialStatus(rawInput['financialStatus']);
    const decodedStatusUrl = decodeString(rawInput['statusUrl']);
    const decodedCustomerUrl = decodeString(rawInput['customerUrl']);
    const decodedEmail = decodeString(rawInput['email']);
    const decodedPhone = decodeString(rawInput['phone']);
    const decodedCustomerLocale = decodeString(rawInput['customerLocale']);
    const decodedCurrencyCode = decodeString(rawInput['currencyCode']);
    const decodedEdited = decodeBoolean(rawInput['edited']);
    const decodedCurrentTotalPrice = decodeMoney(rawInput['currentTotalPrice']);
    const decodedCurrentSubtotalPrice = decodeMoney(rawInput['currentSubtotalPrice']);
    const decodedCurrentTotalTax = decodeMoney(rawInput['currentTotalTax']);
    const decodedCurrentTotalShippingPrice = decodeMoney(rawInput['currentTotalShippingPrice']);
    const decodedCurrentTotalDuties = decodeMoney(rawInput['currentTotalDuties']);
    const decodedOriginalTotalPrice = decodeMoney(rawInput['originalTotalPrice']);
    const decodedOriginalTotalDuties = decodeMoney(rawInput['originalTotalDuties']);
    const decodedTotalPrice = decodeMoney(rawInput['totalPrice']);
    const decodedSubtotalPrice = decodeMoney(rawInput['subtotalPrice']);
    const decodedTotalShippingPrice = decodeMoney(rawInput['totalShippingPrice']);
    const decodedTotalTax = decodeMoney(rawInput['totalTax']);
    const decodedTotalRefunded = decodeMoney(rawInput['totalRefunded']);
    const decodedCustomAttributes = decodeArray(rawInput['customAttributes'], decodeAttribute);
    const decodedShippingAddress = decodeMailingAddress(rawInput['shippingAddress']);
    const decodedBillingAddress = decodeMailingAddress(rawInput['billingAddress']);
    const decodedLineItems = decodeOrderLineItemConnection(rawInput['lineItems']);
    const decodedShippingDiscountAllocations = decodeArray(rawInput['shippingDiscountAllocations'], decodeDiscountAllocation);
    const decodedDiscountApplications = decodeDiscountApplicationConnection(rawInput['discountApplications']);
    const decodedSuccessfulFulfillments = decodeArray(rawInput['successfulFulfillments'], decodeFulfillment);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);

    if (
      decodedId === null ||
      decodedName === null ||
      decodedOrderNumber === null ||
      decodedProcessedAt === null ||
      decodedFulfillmentStatus === null ||
      decodedStatusUrl === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      name: decodedName,
      orderNumber: decodedOrderNumber,
      processedAt: decodedProcessedAt,
      canceledAt: decodedCanceledAt,
      cancelReason: decodedCancelReason,
      fulfillmentStatus: decodedFulfillmentStatus,
      financialStatus: decodedFinancialStatus,
      statusUrl: decodedStatusUrl,
      customerUrl: decodedCustomerUrl,
      email: decodedEmail,
      phone: decodedPhone,
      customerLocale: decodedCustomerLocale,
      currencyCode: decodedCurrencyCode,
      edited: decodedEdited,
      currentTotalPrice: decodedCurrentTotalPrice,
      currentSubtotalPrice: decodedCurrentSubtotalPrice,
      currentTotalTax: decodedCurrentTotalTax,
      currentTotalShippingPrice: decodedCurrentTotalShippingPrice,
      currentTotalDuties: decodedCurrentTotalDuties,
      originalTotalPrice: decodedOriginalTotalPrice,
      originalTotalDuties: decodedOriginalTotalDuties,
      totalPrice: decodedTotalPrice,
      subtotalPrice: decodedSubtotalPrice,
      totalShippingPrice: decodedTotalShippingPrice,
      totalTax: decodedTotalTax,
      totalRefunded: decodedTotalRefunded,
      customAttributes: decodedCustomAttributes,
      shippingAddress: decodedShippingAddress,
      billingAddress: decodedBillingAddress,
      lineItems: decodedLineItems,
      shippingDiscountAllocations: decodedShippingDiscountAllocations,
      discountApplications: decodedDiscountApplications,
      successfulFulfillments: decodedSuccessfulFulfillments,
      metafield: decodedMetafield,
      metafields: decodedMetafields
    };
  }
  return null;
}


/**
 * @type { DiscountAllocation }
 * @description A discount allocation on a line item or shipping
 */
export type DiscountAllocation = {
  /**
   * @description Amount of the discount
   * @type { Money }
   * @memberof DiscountAllocation
  */
  allocatedAmount: Money;
  /**
   * @type { DiscountApplication }
   * @memberof DiscountAllocation
  */
  discountApplication: DiscountApplication;
};

export function decodeDiscountAllocation(rawInput: unknown): DiscountAllocation | null {
  if (isJSON(rawInput)) {
    const decodedAllocatedAmount = decodeMoney(rawInput['allocatedAmount']);
    const decodedDiscountApplication = decodeDiscountApplication(rawInput['discountApplication']);

    if (
      decodedAllocatedAmount === null ||
      decodedDiscountApplication === null
    ) {
      return null;
    }

    return {
      allocatedAmount: decodedAllocatedAmount,
      discountApplication: decodedDiscountApplication
    };
  }
  return null;
}


/**
 * @type { OrderLineItem }
 * @description A line item in an order
 */
export type OrderLineItem = {
  /**
   * @type { string }
   * @memberof OrderLineItem
  */
  title: string;
  /**
   * @type { number }
   * @memberof OrderLineItem
  */
  quantity: number;
  /**
   * @type { Money }
   * @memberof OrderLineItem
  */
  originalTotalPrice: Money | null;
    /**
   * @type { Money }
   * @memberof OrderLineItem
  */
  discountedTotalPrice: Money | null;
    /**
   * @type { number }
   * @memberof OrderLineItem
  */
  currentQuantity: number | null;
    /**
   * @type { Attribute[] }
   * @memberof OrderLineItem
  */
  customAttributes: Attribute[] | null;
    /**
   * @type { ProductVariant }
   * @memberof OrderLineItem
  */
  variant: ProductVariant | null;
    /**
   * @type { CartDiscountAllocation[] }
   * @memberof OrderLineItem
  */
  discountAllocations: CartDiscountAllocation[] | null;
  };

export function decodeOrderLineItem(rawInput: unknown): OrderLineItem | null {
  if (isJSON(rawInput)) {
    const decodedTitle = decodeString(rawInput['title']);
    const decodedQuantity = decodeNumber(rawInput['quantity']);
    const decodedOriginalTotalPrice = decodeMoney(rawInput['originalTotalPrice']);
    const decodedDiscountedTotalPrice = decodeMoney(rawInput['discountedTotalPrice']);
    const decodedCurrentQuantity = decodeNumber(rawInput['currentQuantity']);
    const decodedCustomAttributes = decodeArray(rawInput['customAttributes'], decodeAttribute);
    const decodedVariant = decodeProductVariant(rawInput['variant']);
    const decodedDiscountAllocations = decodeArray(rawInput['discountAllocations'], decodeCartDiscountAllocation);

    if (
      decodedTitle === null ||
      decodedQuantity === null
    ) {
      return null;
    }

    return {
      title: decodedTitle,
      quantity: decodedQuantity,
      originalTotalPrice: decodedOriginalTotalPrice,
      discountedTotalPrice: decodedDiscountedTotalPrice,
      currentQuantity: decodedCurrentQuantity,
      customAttributes: decodedCustomAttributes,
      variant: decodedVariant,
      discountAllocations: decodedDiscountAllocations
    };
  }
  return null;
}


/**
 * @type { OrderLineItemEdge }
 * @description An edge in an order line item connection
 */
export type OrderLineItemEdge = {
  /**
   * @type { OrderLineItem }
   * @memberof OrderLineItemEdge
  */
  node: OrderLineItem;
  /**
   * @type { string }
   * @memberof OrderLineItemEdge
  */
  cursor: string | null;
  };

export function decodeOrderLineItemEdge(rawInput: unknown): OrderLineItemEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeOrderLineItem(rawInput['node']);
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
 * @type { OrderLineItemConnection }
 * @description Paginated list of order line items
 */
export type OrderLineItemConnection = {
  /**
   * @type { OrderLineItemEdge[] }
   * @memberof OrderLineItemConnection
  */
  edges: OrderLineItemEdge[];
  /**
   * @type { PageInfo }
   * @memberof OrderLineItemConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeOrderLineItemConnection(rawInput: unknown): OrderLineItemConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeOrderLineItemEdge);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { OrderConnection }
 * @description Paginated list of orders
 */
export type OrderConnection = {
  /**
   * @type { OrderEdge[] }
   * @memberof OrderConnection
  */
  edges: OrderEdge[];
  /**
   * @type { PageInfo }
   * @memberof OrderConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeOrderConnection(rawInput: unknown): OrderConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeOrderEdge);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { OrderEdge }
 * @description An edge in an order connection
 */
export type OrderEdge = {
  /**
   * @type { Order }
   * @memberof OrderEdge
  */
  node: Order;
  /**
   * @type { string }
   * @memberof OrderEdge
  */
  cursor: string | null;
  };

export function decodeOrderEdge(rawInput: unknown): OrderEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeOrder(rawInput['node']);
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
 * @type { Fulfillment }
 * @description Order fulfillment details
 */
export type Fulfillment = {
  /**
   * @type { string }
   * @memberof Fulfillment
  */
  trackingCompany: string;
  /**
   * @type { FulfillmentTrackingInfo[] }
   * @memberof Fulfillment
  */
  trackingInfo: FulfillmentTrackingInfo[] | null;
  };

export function decodeFulfillment(rawInput: unknown): Fulfillment | null {
  if (isJSON(rawInput)) {
    const decodedTrackingCompany = decodeString(rawInput['trackingCompany']);
    const decodedTrackingInfo = decodeArray(rawInput['trackingInfo'], decodeFulfillmentTrackingInfo);

    if (
      decodedTrackingCompany === null
    ) {
      return null;
    }

    return {
      trackingCompany: decodedTrackingCompany,
      trackingInfo: decodedTrackingInfo
    };
  }
  return null;
}


/**
 * @type { FulfillmentTrackingInfo }
 * @description Tracking information for a fulfillment
 */
export type FulfillmentTrackingInfo = {
  /**
   * @type { string }
   * @memberof FulfillmentTrackingInfo
  */
  number: string | null;
    /**
   * @type { string }
   * @memberof FulfillmentTrackingInfo
  */
  url: string | null;
  };

export function decodeFulfillmentTrackingInfo(rawInput: unknown): FulfillmentTrackingInfo | null {
  if (isJSON(rawInput)) {
    const decodedNumber = decodeString(rawInput['number']);
    const decodedUrl = decodeString(rawInput['url']);


    return {
      number: decodedNumber,
      url: decodedUrl
    };
  }
  return null;
}


/**
 * @type { DiscountApplication }
 * @description A discount application
 */
export type DiscountApplication = {
  /**
   * @type { DiscountAllocationMethod }
   * @memberof DiscountApplication
  */
  allocationMethod: DiscountAllocationMethod;
  /**
   * @type { DiscountTargetSelection }
   * @memberof DiscountApplication
  */
  targetSelection: DiscountTargetSelection;
  /**
   * @type { DiscountTargetType }
   * @memberof DiscountApplication
  */
  targetType: DiscountTargetType;
  /**
   * @type { DiscountValue }
   * @memberof DiscountApplication
  */
  value: DiscountValue;
};

export function decodeDiscountApplication(rawInput: unknown): DiscountApplication | null {
  if (isJSON(rawInput)) {
    const decodedAllocationMethod = decodeDiscountAllocationMethod(rawInput['allocationMethod']);
    const decodedTargetSelection = decodeDiscountTargetSelection(rawInput['targetSelection']);
    const decodedTargetType = decodeDiscountTargetType(rawInput['targetType']);
    const decodedValue = decodeDiscountValue(rawInput['value']);

    if (
      decodedAllocationMethod === null ||
      decodedTargetSelection === null ||
      decodedTargetType === null ||
      decodedValue === null
    ) {
      return null;
    }

    return {
      allocationMethod: decodedAllocationMethod,
      targetSelection: decodedTargetSelection,
      targetType: decodedTargetType,
      value: decodedValue
    };
  }
  return null;
}


/**
 * @type { DiscountApplicationEdge }
 * @description An edge in a discount application connection
 */
export type DiscountApplicationEdge = {
  /**
   * @type { DiscountApplication }
   * @memberof DiscountApplicationEdge
  */
  node: DiscountApplication;
  /**
   * @type { string }
   * @memberof DiscountApplicationEdge
  */
  cursor: string | null;
  };

export function decodeDiscountApplicationEdge(rawInput: unknown): DiscountApplicationEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeDiscountApplication(rawInput['node']);
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
 * @type { DiscountValue }
 * @description The value of a discount
 */
export type DiscountValue = {
  /**
   * @type { number }
   * @memberof DiscountValue
  */
  percentage: number | null;
    /**
   * @type { Money }
   * @memberof DiscountValue
  */
  amount: Money | null;
  };

export function decodeDiscountValue(rawInput: unknown): DiscountValue | null {
  if (isJSON(rawInput)) {
    const decodedPercentage = decodeNumber(rawInput['percentage']);
    const decodedAmount = decodeMoney(rawInput['amount']);


    return {
      percentage: decodedPercentage,
      amount: decodedAmount
    };
  }
  return null;
}


/**
 * @type { DiscountApplicationConnection }
 * @description Paginated list of discount applications
 */
export type DiscountApplicationConnection = {
  /**
   * @type { DiscountApplicationEdge[] }
   * @memberof DiscountApplicationConnection
  */
  edges: DiscountApplicationEdge[];
  /**
   * @type { PageInfo }
   * @memberof DiscountApplicationConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeDiscountApplicationConnection(rawInput: unknown): DiscountApplicationConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeDiscountApplicationEdge);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { CustomerUserError }
 * @description An error that occurred during a customer operation
 */
export type CustomerUserError = {
  /**
   * @type { string[] }
   * @memberof CustomerUserError
  */
  field: string[] | null;
    /**
   * @type { string }
   * @memberof CustomerUserError
  */
  message: string;
  /**
   * @type { CustomerUserErrorCode }
   * @memberof CustomerUserError
  */
  code: CustomerUserErrorCode;
};

export function decodeCustomerUserError(rawInput: unknown): CustomerUserError | null {
  if (isJSON(rawInput)) {
    const decodedField = decodeArray(rawInput['field'], decodeString);
    const decodedMessage = decodeString(rawInput['message']);
    const decodedCode = decodeCustomerUserErrorCode(rawInput['code']);

    if (
      decodedMessage === null ||
      decodedCode === null
    ) {
      return null;
    }

    return {
      field: decodedField,
      message: decodedMessage,
      code: decodedCode
    };
  }
  return null;
}


/**
 * @type { CustomerAccessTokenCreateInput }
 * @description Input for creating a customer access token (login)
 */
export type CustomerAccessTokenCreateInput = {
  /**
   * @type { string }
   * @memberof CustomerAccessTokenCreateInput
  */
  email: string;
  /**
   * @type { string }
   * @memberof CustomerAccessTokenCreateInput
  */
  password: string;
};

export function decodeCustomerAccessTokenCreateInput(rawInput: unknown): CustomerAccessTokenCreateInput | null {
  if (isJSON(rawInput)) {
    const decodedEmail = decodeString(rawInput['email']);
    const decodedPassword = decodeString(rawInput['password']);

    if (
      decodedEmail === null ||
      decodedPassword === null
    ) {
      return null;
    }

    return {
      email: decodedEmail,
      password: decodedPassword
    };
  }
  return null;
}


/**
 * @type { CustomerCreateInput }
 * @description Input for creating a new customer
 */
export type CustomerCreateInput = {
  /**
   * @type { string }
   * @memberof CustomerCreateInput
  */
  email: string;
  /**
   * @type { string }
   * @memberof CustomerCreateInput
  */
  password: string;
  /**
   * @type { string }
   * @memberof CustomerCreateInput
  */
  firstName: string | null;
    /**
   * @type { string }
   * @memberof CustomerCreateInput
  */
  lastName: string | null;
    /**
   * @type { string }
   * @memberof CustomerCreateInput
  */
  phone: string | null;
    /**
   * @type { boolean }
   * @memberof CustomerCreateInput
  */
  acceptsMarketing: boolean | null;
  };

export function decodeCustomerCreateInput(rawInput: unknown): CustomerCreateInput | null {
  if (isJSON(rawInput)) {
    const decodedEmail = decodeString(rawInput['email']);
    const decodedPassword = decodeString(rawInput['password']);
    const decodedFirstName = decodeString(rawInput['firstName']);
    const decodedLastName = decodeString(rawInput['lastName']);
    const decodedPhone = decodeString(rawInput['phone']);
    const decodedAcceptsMarketing = decodeBoolean(rawInput['acceptsMarketing']);

    if (
      decodedEmail === null ||
      decodedPassword === null
    ) {
      return null;
    }

    return {
      email: decodedEmail,
      password: decodedPassword,
      firstName: decodedFirstName,
      lastName: decodedLastName,
      phone: decodedPhone,
      acceptsMarketing: decodedAcceptsMarketing
    };
  }
  return null;
}


/**
 * @type { CustomerUpdateInput }
 * @description Input for updating a customer
 */
export type CustomerUpdateInput = {
  /**
   * @type { string }
   * @memberof CustomerUpdateInput
  */
  email: string | null;
    /**
   * @type { string }
   * @memberof CustomerUpdateInput
  */
  password: string | null;
    /**
   * @type { string }
   * @memberof CustomerUpdateInput
  */
  firstName: string | null;
    /**
   * @type { string }
   * @memberof CustomerUpdateInput
  */
  lastName: string | null;
    /**
   * @type { string }
   * @memberof CustomerUpdateInput
  */
  phone: string | null;
    /**
   * @type { boolean }
   * @memberof CustomerUpdateInput
  */
  acceptsMarketing: boolean | null;
  };

export function decodeCustomerUpdateInput(rawInput: unknown): CustomerUpdateInput | null {
  if (isJSON(rawInput)) {
    const decodedEmail = decodeString(rawInput['email']);
    const decodedPassword = decodeString(rawInput['password']);
    const decodedFirstName = decodeString(rawInput['firstName']);
    const decodedLastName = decodeString(rawInput['lastName']);
    const decodedPhone = decodeString(rawInput['phone']);
    const decodedAcceptsMarketing = decodeBoolean(rawInput['acceptsMarketing']);


    return {
      email: decodedEmail,
      password: decodedPassword,
      firstName: decodedFirstName,
      lastName: decodedLastName,
      phone: decodedPhone,
      acceptsMarketing: decodedAcceptsMarketing
    };
  }
  return null;
}


/**
 * @type { CustomerResetInput }
 * @description Input for resetting a customer password
 */
export type CustomerResetInput = {
  /**
   * @type { string }
   * @memberof CustomerResetInput
  */
  resetToken: string;
  /**
   * @type { string }
   * @memberof CustomerResetInput
  */
  password: string;
};

export function decodeCustomerResetInput(rawInput: unknown): CustomerResetInput | null {
  if (isJSON(rawInput)) {
    const decodedResetToken = decodeString(rawInput['resetToken']);
    const decodedPassword = decodeString(rawInput['password']);

    if (
      decodedResetToken === null ||
      decodedPassword === null
    ) {
      return null;
    }

    return {
      resetToken: decodedResetToken,
      password: decodedPassword
    };
  }
  return null;
}


/**
 * @type { CustomerActivateInput }
 * @description Input for activating a customer account
 */
export type CustomerActivateInput = {
  /**
   * @type { string }
   * @memberof CustomerActivateInput
  */
  activationToken: string;
  /**
   * @type { string }
   * @memberof CustomerActivateInput
  */
  password: string;
};

export function decodeCustomerActivateInput(rawInput: unknown): CustomerActivateInput | null {
  if (isJSON(rawInput)) {
    const decodedActivationToken = decodeString(rawInput['activationToken']);
    const decodedPassword = decodeString(rawInput['password']);

    if (
      decodedActivationToken === null ||
      decodedPassword === null
    ) {
      return null;
    }

    return {
      activationToken: decodedActivationToken,
      password: decodedPassword
    };
  }
  return null;
}


/**
 * @type { MailingAddressInput }
 * @description Input for creating or updating a mailing address
 */
export type MailingAddressInput = {
  /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  firstName: string | null;
    /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  lastName: string | null;
    /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  company: string | null;
    /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  address1: string | null;
    /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  address2: string | null;
    /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  city: string | null;
    /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  province: string | null;
    /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  country: string | null;
    /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  zip: string | null;
    /**
   * @type { string }
   * @memberof MailingAddressInput
  */
  phone: string | null;
  };

export function decodeMailingAddressInput(rawInput: unknown): MailingAddressInput | null {
  if (isJSON(rawInput)) {
    const decodedFirstName = decodeString(rawInput['firstName']);
    const decodedLastName = decodeString(rawInput['lastName']);
    const decodedCompany = decodeString(rawInput['company']);
    const decodedAddress1 = decodeString(rawInput['address1']);
    const decodedAddress2 = decodeString(rawInput['address2']);
    const decodedCity = decodeString(rawInput['city']);
    const decodedProvince = decodeString(rawInput['province']);
    const decodedCountry = decodeString(rawInput['country']);
    const decodedZip = decodeString(rawInput['zip']);
    const decodedPhone = decodeString(rawInput['phone']);


    return {
      firstName: decodedFirstName,
      lastName: decodedLastName,
      company: decodedCompany,
      address1: decodedAddress1,
      address2: decodedAddress2,
      city: decodedCity,
      province: decodedProvince,
      country: decodedCountry,
      zip: decodedZip,
      phone: decodedPhone
    };
  }
  return null;
}


/**
 * @type { CustomerMutationResult }
 * @description Result of a customer mutation
 */
export type CustomerMutationResult = {
  /**
   * @type { Customer }
   * @memberof CustomerMutationResult
  */
  customer: Customer | null;
    /**
   * @type { CustomerUserError[] }
   * @memberof CustomerMutationResult
  */
  customerUserErrors: CustomerUserError[];
};

export function decodeCustomerMutationResult(rawInput: unknown): CustomerMutationResult | null {
  if (isJSON(rawInput)) {
    const decodedCustomer = decodeCustomer(rawInput['customer']);
    const decodedCustomerUserErrors = decodeArray(rawInput['customerUserErrors'], decodeCustomerUserError);

    if (
      decodedCustomerUserErrors === null
    ) {
      return null;
    }

    return {
      customer: decodedCustomer,
      customerUserErrors: decodedCustomerUserErrors
    };
  }
  return null;
}


/**
 * @type { AccessTokenResult }
 * @description Result of an access token mutation
 */
export type AccessTokenResult = {
  /**
   * @type { CustomerAccessToken }
   * @memberof AccessTokenResult
  */
  customerAccessToken: CustomerAccessToken | null;
    /**
   * @type { CustomerUserError[] }
   * @memberof AccessTokenResult
  */
  customerUserErrors: CustomerUserError[];
};

export function decodeAccessTokenResult(rawInput: unknown): AccessTokenResult | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAccessToken = decodeCustomerAccessToken(rawInput['customerAccessToken']);
    const decodedCustomerUserErrors = decodeArray(rawInput['customerUserErrors'], decodeCustomerUserError);

    if (
      decodedCustomerUserErrors === null
    ) {
      return null;
    }

    return {
      customerAccessToken: decodedCustomerAccessToken,
      customerUserErrors: decodedCustomerUserErrors
    };
  }
  return null;
}


/**
 * @type { AddressMutationResult }
 * @description Result of an address mutation
 */
export type AddressMutationResult = {
  /**
   * @type { MailingAddress }
   * @memberof AddressMutationResult
  */
  customerAddress: MailingAddress | null;
    /**
   * @type { CustomerUserError[] }
   * @memberof AddressMutationResult
  */
  customerUserErrors: CustomerUserError[];
};

export function decodeAddressMutationResult(rawInput: unknown): AddressMutationResult | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAddress = decodeMailingAddress(rawInput['customerAddress']);
    const decodedCustomerUserErrors = decodeArray(rawInput['customerUserErrors'], decodeCustomerUserError);

    if (
      decodedCustomerUserErrors === null
    ) {
      return null;
    }

    return {
      customerAddress: decodedCustomerAddress,
      customerUserErrors: decodedCustomerUserErrors
    };
  }
  return null;
}





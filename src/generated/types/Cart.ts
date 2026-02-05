import { type CustomerSummary, decodeCustomerSummary,  type MailingAddress, decodeMailingAddress,  type Attribute, decodeAttribute,  type Money, decodeMoney,  type ProductSummary, decodeProductSummary,  type Image, decodeImage,  type SelectedOption, decodeSelectedOption,  type MetafieldParentResourceTypename, decodeMetafieldParentResourceTypename,  type MetafieldParentResource, decodeMetafieldParentResource,  type MetafieldReferenceTypename, decodeMetafieldReferenceTypename,  type VideoSource, decodeVideoSource,  type Model3dSource, decodeModel3dSource,  type MetafieldReference, decodeMetafieldReference,  type MetafieldReferenceEdge, decodeMetafieldReferenceEdge,  type PageInfo, decodePageInfo,  type MetafieldReferenceConnection, decodeMetafieldReferenceConnection,  type Metafield, decodeMetafield,  type AttributeInput, decodeAttributeInput  } from './index';
import { isJSON, decodeString, _decodeString , decodeNumber, _decodeNumber , decodeArray, _decodeArray , decodeBoolean, _decodeBoolean  } from 'type-decoder';

/**
 * @type { Cart }
 * @description A shopping cart representing merchandise a buyer intends to purchase
 */
export type Cart = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Cart
  */
  id: string;
  /**
   * @description URL to the checkout page
   * @type { string }
   * @memberof Cart
  */
  checkoutUrl: string;
  /**
   * @description The date and time when the cart was created
   * @type { string }
   * @memberof Cart
  */
  createdAt: string;
  /**
   * @description The date and time when the cart was updated
   * @type { string }
   * @memberof Cart
  */
  updatedAt: string;
  /**
   * @description Note attached to the cart
   * @type { string }
   * @memberof Cart
  */
  note: string | null;
    /**
   * @description Total quantity of items in the cart
   * @type { number }
   * @memberof Cart
  */
  totalQuantity: number;
  /**
   * @type { CartBuyerIdentity }
   * @memberof Cart
  */
  buyerIdentity: CartBuyerIdentity;
  /**
   * @type { Attribute[] }
   * @memberof Cart
  */
  attributes: Attribute[] | null;
    /**
   * @type { CartDiscountCode[] }
   * @memberof Cart
  */
  discountCodes: CartDiscountCode[] | null;
    /**
   * @type { CartDiscountAllocation[] }
   * @memberof Cart
  */
  discountAllocations: CartDiscountAllocation[] | null;
    /**
   * @description Gift cards that have been applied to the cart
   * @type { AppliedGiftCard[] }
   * @memberof Cart
  */
  appliedGiftCards: AppliedGiftCard[] | null;
    /**
   * @type { CartCost }
   * @memberof Cart
  */
  cost: CartCost;
  /**
   * @type { BaseCartLineConnection }
   * @memberof Cart
  */
  lines: BaseCartLineConnection;
  /**
   * @description The delivery properties of the cart
   * @type { CartDelivery }
   * @memberof Cart
  */
  delivery: CartDelivery | null;
    /**
   * @description Delivery groups available for the cart
   * @type { CartDeliveryGroupConnection }
   * @memberof Cart
  */
  deliveryGroups: CartDeliveryGroupConnection | null;
    /**
   * @description A custom field associated with the cart
   * @type { Metafield }
   * @memberof Cart
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields associated with the cart
   * @type { Metafield[] }
   * @memberof Cart
  */
  metafields: Metafield[] | null;
    /**
   * @description Warnings that occurred during cart operations
   * @type { CartWarning[] }
   * @memberof Cart
  */
  warnings: CartWarning[] | null;
  };

export function decodeCart(rawInput: unknown): Cart | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedCheckoutUrl = decodeString(rawInput['checkoutUrl']);
    const decodedCreatedAt = decodeString(rawInput['createdAt']);
    const decodedUpdatedAt = decodeString(rawInput['updatedAt']);
    const decodedNote = decodeString(rawInput['note']);
    const decodedTotalQuantity = decodeNumber(rawInput['totalQuantity']);
    const decodedBuyerIdentity = decodeCartBuyerIdentity(rawInput['buyerIdentity']);
    const decodedAttributes = decodeArray(rawInput['attributes'], decodeAttribute);
    const decodedDiscountCodes = decodeArray(rawInput['discountCodes'], decodeCartDiscountCode);
    const decodedDiscountAllocations = decodeArray(rawInput['discountAllocations'], decodeCartDiscountAllocation);
    const decodedAppliedGiftCards = decodeArray(rawInput['appliedGiftCards'], decodeAppliedGiftCard);
    const decodedCost = decodeCartCost(rawInput['cost']);
    const decodedLines = decodeBaseCartLineConnection(rawInput['lines']);
    const decodedDelivery = decodeCartDelivery(rawInput['delivery']);
    const decodedDeliveryGroups = decodeCartDeliveryGroupConnection(rawInput['deliveryGroups']);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);
    const decodedWarnings = decodeArray(rawInput['warnings'], decodeCartWarning);

    if (
      decodedId === null ||
      decodedCheckoutUrl === null ||
      decodedCreatedAt === null ||
      decodedUpdatedAt === null ||
      decodedTotalQuantity === null ||
      decodedBuyerIdentity === null ||
      decodedCost === null ||
      decodedLines === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      checkoutUrl: decodedCheckoutUrl,
      createdAt: decodedCreatedAt,
      updatedAt: decodedUpdatedAt,
      note: decodedNote,
      totalQuantity: decodedTotalQuantity,
      buyerIdentity: decodedBuyerIdentity,
      attributes: decodedAttributes,
      discountCodes: decodedDiscountCodes,
      discountAllocations: decodedDiscountAllocations,
      appliedGiftCards: decodedAppliedGiftCards,
      cost: decodedCost,
      lines: decodedLines,
      delivery: decodedDelivery,
      deliveryGroups: decodedDeliveryGroups,
      metafield: decodedMetafield,
      metafields: decodedMetafields,
      warnings: decodedWarnings
    };
  }
  return null;
}


/**
 * @type { CartBuyerIdentity }
 * @description Buyer identity information
 */
export type CartBuyerIdentity = {
  /**
   * @type { string }
   * @memberof CartBuyerIdentity
  */
  email: string | null;
    /**
   * @type { string }
   * @memberof CartBuyerIdentity
  */
  phone: string | null;
    /**
   * @description Two-letter country code (ISO 3166-1 alpha-2)
   * @type { string }
   * @memberof CartBuyerIdentity
  */
  countryCode: string | null;
    /**
   * @type { CustomerSummary }
   * @memberof CartBuyerIdentity
  */
  customer: CustomerSummary | null;
    /**
   * @description Delivery address preferences
   * @type { DeliveryAddress[] }
   * @memberof CartBuyerIdentity
  */
  deliveryAddressPreferences: DeliveryAddress[] | null;
    /**
   * @description Wallet preferences for the buyer
   * @type { string[] }
   * @memberof CartBuyerIdentity
  */
  walletPreferences: string[] | null;
  };

export function decodeCartBuyerIdentity(rawInput: unknown): CartBuyerIdentity | null {
  if (isJSON(rawInput)) {
    const decodedEmail = decodeString(rawInput['email']);
    const decodedPhone = decodeString(rawInput['phone']);
    const decodedCountryCode = decodeString(rawInput['countryCode']);
    const decodedCustomer = decodeCustomerSummary(rawInput['customer']);
    const decodedDeliveryAddressPreferences = decodeArray(rawInput['deliveryAddressPreferences'], decodeDeliveryAddress);
    const decodedWalletPreferences = decodeArray(rawInput['walletPreferences'], decodeString);


    return {
      email: decodedEmail,
      phone: decodedPhone,
      countryCode: decodedCountryCode,
      customer: decodedCustomer,
      deliveryAddressPreferences: decodedDeliveryAddressPreferences,
      walletPreferences: decodedWalletPreferences
    };
  }
  return null;
}


/**
 * @type { AppliedGiftCard }
 * @description A gift card that has been applied to the cart
 */
export type AppliedGiftCard = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof AppliedGiftCard
  */
  id: string;
  /**
   * @description Last four characters of the gift card code
   * @type { string }
   * @memberof AppliedGiftCard
  */
  lastCharacters: string;
  /**
   * @description Amount used from this gift card
   * @type { Money }
   * @memberof AppliedGiftCard
  */
  amountUsed: Money;
  /**
   * @description Remaining balance on the gift card
   * @type { Money }
   * @memberof AppliedGiftCard
  */
  balance: Money;
  /**
   * @description Amount used in presentment currency
   * @type { Money }
   * @memberof AppliedGiftCard
  */
  presentmentAmountUsed: Money | null;
  };

export function decodeAppliedGiftCard(rawInput: unknown): AppliedGiftCard | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedLastCharacters = decodeString(rawInput['lastCharacters']);
    const decodedAmountUsed = decodeMoney(rawInput['amountUsed']);
    const decodedBalance = decodeMoney(rawInput['balance']);
    const decodedPresentmentAmountUsed = decodeMoney(rawInput['presentmentAmountUsed']);

    if (
      decodedId === null ||
      decodedLastCharacters === null ||
      decodedAmountUsed === null ||
      decodedBalance === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      lastCharacters: decodedLastCharacters,
      amountUsed: decodedAmountUsed,
      balance: decodedBalance,
      presentmentAmountUsed: decodedPresentmentAmountUsed
    };
  }
  return null;
}


/**
 * @type { CartDelivery }
 * @description The delivery properties of the cart
 */
export type CartDelivery = {
  /**
   * @description Selectable addresses for the buyer
   * @type { CartSelectableAddress[] }
   * @memberof CartDelivery
  */
  addresses: CartSelectableAddress[] | null;
  };

export function decodeCartDelivery(rawInput: unknown): CartDelivery | null {
  if (isJSON(rawInput)) {
    const decodedAddresses = decodeArray(rawInput['addresses'], decodeCartSelectableAddress);


    return {
      addresses: decodedAddresses
    };
  }
  return null;
}


/**
 * @type { CartSelectableAddress }
 * @description A selectable delivery address for the cart
 */
export type CartSelectableAddress = {
  /**
   * @type { MailingAddress }
   * @memberof CartSelectableAddress
  */
  address: MailingAddress | null;
    /**
   * @description Whether this address is selected
   * @type { boolean }
   * @memberof CartSelectableAddress
  */
  selected: boolean | null;
  };

export function decodeCartSelectableAddress(rawInput: unknown): CartSelectableAddress | null {
  if (isJSON(rawInput)) {
    const decodedAddress = decodeMailingAddress(rawInput['address']);
    const decodedSelected = decodeBoolean(rawInput['selected']);


    return {
      address: decodedAddress,
      selected: decodedSelected
    };
  }
  return null;
}


/**
 * @type { CartDeliveryGroup }
 * @description Information about the options available for one or more line items to be delivered to a specific address
 */
export type CartDeliveryGroup = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof CartDeliveryGroup
  */
  id: string;
  /**
   * @type { MailingAddress }
   * @memberof CartDeliveryGroup
  */
  deliveryAddress: MailingAddress | null;
    /**
   * @type { CartDeliveryOption[] }
   * @memberof CartDeliveryGroup
  */
  deliveryOptions: CartDeliveryOption[];
  /**
   * @type { CartDeliveryOption }
   * @memberof CartDeliveryGroup
  */
  selectedDeliveryOption: CartDeliveryOption | null;
    /**
   * @type { BaseCartLineConnection }
   * @memberof CartDeliveryGroup
  */
  cartLines: BaseCartLineConnection;
  /**
   * @type { CartDeliveryGroupType }
   * @memberof CartDeliveryGroup
  */
  groupType: CartDeliveryGroupType | null;
  };

export function decodeCartDeliveryGroup(rawInput: unknown): CartDeliveryGroup | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedDeliveryAddress = decodeMailingAddress(rawInput['deliveryAddress']);
    const decodedDeliveryOptions = decodeArray(rawInput['deliveryOptions'], decodeCartDeliveryOption);
    const decodedSelectedDeliveryOption = decodeCartDeliveryOption(rawInput['selectedDeliveryOption']);
    const decodedCartLines = decodeBaseCartLineConnection(rawInput['cartLines']);
    const decodedGroupType = decodeCartDeliveryGroupType(rawInput['groupType']);

    if (
      decodedId === null ||
      decodedDeliveryOptions === null ||
      decodedCartLines === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      deliveryAddress: decodedDeliveryAddress,
      deliveryOptions: decodedDeliveryOptions,
      selectedDeliveryOption: decodedSelectedDeliveryOption,
      cartLines: decodedCartLines,
      groupType: decodedGroupType
    };
  }
  return null;
}


/**
 * @type { CartDeliveryGroupConnection }
 * @description Paginated list of cart delivery groups
 */
export type CartDeliveryGroupConnection = {
  /**
   * @type { CartDeliveryGroupEdge[] }
   * @memberof CartDeliveryGroupConnection
  */
  edges: CartDeliveryGroupEdge[];
  /**
   * @type { PageInfo }
   * @memberof CartDeliveryGroupConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeCartDeliveryGroupConnection(rawInput: unknown): CartDeliveryGroupConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeCartDeliveryGroupEdge);
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
 * @type { CartDeliveryGroupEdge }
 * @description An edge in a cart delivery group connection
 */
export type CartDeliveryGroupEdge = {
  /**
   * @type { CartDeliveryGroup }
   * @memberof CartDeliveryGroupEdge
  */
  node: CartDeliveryGroup;
  /**
   * @type { string }
   * @memberof CartDeliveryGroupEdge
  */
  cursor: string | null;
  };

export function decodeCartDeliveryGroupEdge(rawInput: unknown): CartDeliveryGroupEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeCartDeliveryGroup(rawInput['node']);
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
 * @type { CartDeliveryGroupType }
 * @description The type of cart delivery group
 */
export type CartDeliveryGroupType =
  | 'ONE_TIME_PURCHASE'
  | 'SUBSCRIPTION'
;

export function decodeCartDeliveryGroupType(rawInput: unknown): CartDeliveryGroupType | null {
  switch (rawInput) {
    case 'ONE_TIME_PURCHASE':
    case 'SUBSCRIPTION':
     return rawInput;
  }
  return null;
}

export function _decodeCartDeliveryGroupType(rawInput: unknown): CartDeliveryGroupType | undefined {
  switch (rawInput) {
    case 'ONE_TIME_PURCHASE':
    case 'SUBSCRIPTION':
    return rawInput;
  }
  return;
}

/**
 * @type { CartDeliveryOption }
 * @description A delivery option for a cart delivery group
 */
export type CartDeliveryOption = {
  /**
   * @description Unique identifier for the delivery option
   * @type { string }
   * @memberof CartDeliveryOption
  */
  handle: string;
  /**
   * @description Title of the delivery option
   * @type { string }
   * @memberof CartDeliveryOption
  */
  title: string;
  /**
   * @type { string }
   * @memberof CartDeliveryOption
  */
  description: string | null;
    /**
   * @type { Money }
   * @memberof CartDeliveryOption
  */
  estimatedCost: Money | null;
    /**
   * @description The code of the delivery option
   * @type { string }
   * @memberof CartDeliveryOption
  */
  code: string | null;
    /**
   * @type { DeliveryMethodType }
   * @memberof CartDeliveryOption
  */
  deliveryMethodType: DeliveryMethodType | null;
  };

export function decodeCartDeliveryOption(rawInput: unknown): CartDeliveryOption | null {
  if (isJSON(rawInput)) {
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedDescription = decodeString(rawInput['description']);
    const decodedEstimatedCost = decodeMoney(rawInput['estimatedCost']);
    const decodedCode = decodeString(rawInput['code']);
    const decodedDeliveryMethodType = decodeDeliveryMethodType(rawInput['deliveryMethodType']);

    if (
      decodedHandle === null ||
      decodedTitle === null
    ) {
      return null;
    }

    return {
      handle: decodedHandle,
      title: decodedTitle,
      description: decodedDescription,
      estimatedCost: decodedEstimatedCost,
      code: decodedCode,
      deliveryMethodType: decodedDeliveryMethodType
    };
  }
  return null;
}


/**
 * @type { DeliveryMethodType }
 * @description The method of delivery
 */
export type DeliveryMethodType =
  | 'SHIPPING'
  | 'PICK_UP'
  | 'RETAIL'
  | 'LOCAL'
  | 'PICKUP_POINT'
  | 'NONE'
;

export function decodeDeliveryMethodType(rawInput: unknown): DeliveryMethodType | null {
  switch (rawInput) {
    case 'SHIPPING':
    case 'PICK_UP':
    case 'RETAIL':
    case 'LOCAL':
    case 'PICKUP_POINT':
    case 'NONE':
     return rawInput;
  }
  return null;
}

export function _decodeDeliveryMethodType(rawInput: unknown): DeliveryMethodType | undefined {
  switch (rawInput) {
    case 'SHIPPING':
    case 'PICK_UP':
    case 'RETAIL':
    case 'LOCAL':
    case 'PICKUP_POINT':
    case 'NONE':
    return rawInput;
  }
  return;
}

/**
 * @type { DeliveryAddress }
 * @description A delivery address preference
 */
export type DeliveryAddress = {
  /**
   * @type { MailingAddress }
   * @memberof DeliveryAddress
  */
  address: MailingAddress | null;
    /**
   * @description Whether this is a one-time use address
   * @type { boolean }
   * @memberof DeliveryAddress
  */
  oneTimeUse: boolean | null;
  };

export function decodeDeliveryAddress(rawInput: unknown): DeliveryAddress | null {
  if (isJSON(rawInput)) {
    const decodedAddress = decodeMailingAddress(rawInput['address']);
    const decodedOneTimeUse = decodeBoolean(rawInput['oneTimeUse']);


    return {
      address: decodedAddress,
      oneTimeUse: decodedOneTimeUse
    };
  }
  return null;
}


/**
 * @type { CartWarning }
 * @description A warning that occurred during a cart mutation
 */
export type CartWarning = {
  /**
   * @type { CartWarningCode }
   * @memberof CartWarning
  */
  code: CartWarningCode;
  /**
   * @description The message text of the warning
   * @type { string }
   * @memberof CartWarning
  */
  message: string;
  /**
   * @description The target of the warning
   * @type { string }
   * @memberof CartWarning
  */
  target: string;
};

export function decodeCartWarning(rawInput: unknown): CartWarning | null {
  if (isJSON(rawInput)) {
    const decodedCode = decodeCartWarningCode(rawInput['code']);
    const decodedMessage = decodeString(rawInput['message']);
    const decodedTarget = decodeString(rawInput['target']);

    if (
      decodedCode === null ||
      decodedMessage === null ||
      decodedTarget === null
    ) {
      return null;
    }

    return {
      code: decodedCode,
      message: decodedMessage,
      target: decodedTarget
    };
  }
  return null;
}


/**
 * @type { CartWarningCode }
 * @description Warning codes for cart operations
 */
export type CartWarningCode =
  | 'MERCHANDISE_NOT_ENOUGH_STOCK'
  | 'MERCHANDISE_OUT_OF_STOCK'
  | 'PAYMENTS_GIFT_CARD_UNUSABLE'
  | 'CHECKOUT_THROTTLED'
  | 'DELIVERY_GROUP_PARTIALLY_AVAILABLE'
  | 'DELIVERY_GROUP_UNAVAILABLE'
;

export function decodeCartWarningCode(rawInput: unknown): CartWarningCode | null {
  switch (rawInput) {
    case 'MERCHANDISE_NOT_ENOUGH_STOCK':
    case 'MERCHANDISE_OUT_OF_STOCK':
    case 'PAYMENTS_GIFT_CARD_UNUSABLE':
    case 'CHECKOUT_THROTTLED':
    case 'DELIVERY_GROUP_PARTIALLY_AVAILABLE':
    case 'DELIVERY_GROUP_UNAVAILABLE':
     return rawInput;
  }
  return null;
}

export function _decodeCartWarningCode(rawInput: unknown): CartWarningCode | undefined {
  switch (rawInput) {
    case 'MERCHANDISE_NOT_ENOUGH_STOCK':
    case 'MERCHANDISE_OUT_OF_STOCK':
    case 'PAYMENTS_GIFT_CARD_UNUSABLE':
    case 'CHECKOUT_THROTTLED':
    case 'DELIVERY_GROUP_PARTIALLY_AVAILABLE':
    case 'DELIVERY_GROUP_UNAVAILABLE':
    return rawInput;
  }
  return;
}

/**
 * @type { CartDiscountCode }
 * @description A discount code applied to the cart
 */
export type CartDiscountCode = {
  /**
   * @type { string }
   * @memberof CartDiscountCode
  */
  code: string;
  /**
   * @description Whether the discount code is applicable
   * @type { boolean }
   * @memberof CartDiscountCode
  */
  applicable: boolean;
};

export function decodeCartDiscountCode(rawInput: unknown): CartDiscountCode | null {
  if (isJSON(rawInput)) {
    const decodedCode = decodeString(rawInput['code']);
    const decodedApplicable = decodeBoolean(rawInput['applicable']);

    if (
      decodedCode === null ||
      decodedApplicable === null
    ) {
      return null;
    }

    return {
      code: decodedCode,
      applicable: decodedApplicable
    };
  }
  return null;
}


/**
 * @type { CartDiscountAllocation }
 * @description A discount allocation
 */
export type CartDiscountAllocation = {
  /**
   * @type { Money }
   * @memberof CartDiscountAllocation
  */
  discountedAmount: Money;
};

export function decodeCartDiscountAllocation(rawInput: unknown): CartDiscountAllocation | null {
  if (isJSON(rawInput)) {
    const decodedDiscountedAmount = decodeMoney(rawInput['discountedAmount']);

    if (
      decodedDiscountedAmount === null
    ) {
      return null;
    }

    return {
      discountedAmount: decodedDiscountedAmount
    };
  }
  return null;
}


/**
 * @type { CartCost }
 * @description Cost breakdown for the cart
 */
export type CartCost = {
  /**
   * @description Total amount after discounts and taxes
   * @type { Money }
   * @memberof CartCost
  */
  totalAmount: Money;
  /**
   * @description Subtotal before taxes and cart-level discounts
   * @type { Money }
   * @memberof CartCost
  */
  subtotalAmount: Money;
  /**
   * @description Whether the subtotal amount is estimated
   * @type { boolean }
   * @memberof CartCost
  */
  subtotalAmountEstimated: boolean | null;
    /**
   * @description Whether the total amount is estimated
   * @type { boolean }
   * @memberof CartCost
  */
  totalAmountEstimated: boolean | null;
    /**
   * @type { Money }
   * @memberof CartCost
  */
  totalTaxAmount: Money | null;
    /**
   * @description Whether the total tax amount is estimated
   * @type { boolean }
   * @memberof CartCost
  */
  totalTaxAmountEstimated: boolean | null;
    /**
   * @type { Money }
   * @memberof CartCost
  */
  totalDutyAmount: Money | null;
    /**
   * @description Whether the total duty amount is estimated
   * @type { boolean }
   * @memberof CartCost
  */
  totalDutyAmountEstimated: boolean | null;
    /**
   * @description Amount customer pays at checkout (excludes deferred payments)
   * @type { Money }
   * @memberof CartCost
  */
  checkoutChargeAmount: Money;
};

export function decodeCartCost(rawInput: unknown): CartCost | null {
  if (isJSON(rawInput)) {
    const decodedTotalAmount = decodeMoney(rawInput['totalAmount']);
    const decodedSubtotalAmount = decodeMoney(rawInput['subtotalAmount']);
    const decodedSubtotalAmountEstimated = decodeBoolean(rawInput['subtotalAmountEstimated']);
    const decodedTotalAmountEstimated = decodeBoolean(rawInput['totalAmountEstimated']);
    const decodedTotalTaxAmount = decodeMoney(rawInput['totalTaxAmount']);
    const decodedTotalTaxAmountEstimated = decodeBoolean(rawInput['totalTaxAmountEstimated']);
    const decodedTotalDutyAmount = decodeMoney(rawInput['totalDutyAmount']);
    const decodedTotalDutyAmountEstimated = decodeBoolean(rawInput['totalDutyAmountEstimated']);
    const decodedCheckoutChargeAmount = decodeMoney(rawInput['checkoutChargeAmount']);

    if (
      decodedTotalAmount === null ||
      decodedSubtotalAmount === null ||
      decodedCheckoutChargeAmount === null
    ) {
      return null;
    }

    return {
      totalAmount: decodedTotalAmount,
      subtotalAmount: decodedSubtotalAmount,
      subtotalAmountEstimated: decodedSubtotalAmountEstimated,
      totalAmountEstimated: decodedTotalAmountEstimated,
      totalTaxAmount: decodedTotalTaxAmount,
      totalTaxAmountEstimated: decodedTotalTaxAmountEstimated,
      totalDutyAmount: decodedTotalDutyAmount,
      totalDutyAmountEstimated: decodedTotalDutyAmountEstimated,
      checkoutChargeAmount: decodedCheckoutChargeAmount
    };
  }
  return null;
}


/**
 * @type { BaseCartLine }
 * @description Base cart line interface with common fields
 */
export type BaseCartLine = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof BaseCartLine
  */
  id: string;
  /**
   * @description The quantity of the merchandise
   * @type { number }
   * @memberof BaseCartLine
  */
  quantity: number;
  /**
   * @type { Merchandise }
   * @memberof BaseCartLine
  */
  merchandise: Merchandise;
  /**
   * @type { Attribute[] }
   * @memberof BaseCartLine
  */
  attributes: Attribute[] | null;
    /**
   * @type { CartLineCost }
   * @memberof BaseCartLine
  */
  cost: CartLineCost;
  /**
   * @type { CartDiscountAllocation[] }
   * @memberof BaseCartLine
  */
  discountAllocations: CartDiscountAllocation[] | null;
    /**
   * @type { SellingPlanAllocation }
   * @memberof BaseCartLine
  */
  sellingPlanAllocation: SellingPlanAllocation | null;
  };

export function decodeBaseCartLine(rawInput: unknown): BaseCartLine | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedQuantity = decodeNumber(rawInput['quantity']);
    const decodedMerchandise = decodeMerchandise(rawInput['merchandise']);
    const decodedAttributes = decodeArray(rawInput['attributes'], decodeAttribute);
    const decodedCost = decodeCartLineCost(rawInput['cost']);
    const decodedDiscountAllocations = decodeArray(rawInput['discountAllocations'], decodeCartDiscountAllocation);
    const decodedSellingPlanAllocation = decodeSellingPlanAllocation(rawInput['sellingPlanAllocation']);

    if (
      decodedId === null ||
      decodedQuantity === null ||
      decodedMerchandise === null ||
      decodedCost === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      quantity: decodedQuantity,
      merchandise: decodedMerchandise,
      attributes: decodedAttributes,
      cost: decodedCost,
      discountAllocations: decodedDiscountAllocations,
      sellingPlanAllocation: decodedSellingPlanAllocation
    };
  }
  return null;
}


/**
 * @type { CartLine }
 * @description A line item in the cart (implements BaseCartLine)
 */
export type CartLine = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof CartLine
  */
  id: string;
  /**
   * @description The quantity of the merchandise
   * @type { number }
   * @memberof CartLine
  */
  quantity: number;
  /**
   * @type { Merchandise }
   * @memberof CartLine
  */
  merchandise: Merchandise;
  /**
   * @type { Attribute[] }
   * @memberof CartLine
  */
  attributes: Attribute[] | null;
    /**
   * @type { CartLineCost }
   * @memberof CartLine
  */
  cost: CartLineCost;
  /**
   * @type { CartDiscountAllocation[] }
   * @memberof CartLine
  */
  discountAllocations: CartDiscountAllocation[] | null;
    /**
   * @type { SellingPlanAllocation }
   * @memberof CartLine
  */
  sellingPlanAllocation: SellingPlanAllocation | null;
    /**
   * @description Instructions for the line item
   * @type { CartLineInstructions }
   * @memberof CartLine
  */
  instructions: CartLineInstructions | null;
    /**
   * @description The parent of the line item
   * @type { CartLineParentRelationship }
   * @memberof CartLine
  */
  parentRelationship: CartLineParentRelationship | null;
  };

export function decodeCartLine(rawInput: unknown): CartLine | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedQuantity = decodeNumber(rawInput['quantity']);
    const decodedMerchandise = decodeMerchandise(rawInput['merchandise']);
    const decodedAttributes = decodeArray(rawInput['attributes'], decodeAttribute);
    const decodedCost = decodeCartLineCost(rawInput['cost']);
    const decodedDiscountAllocations = decodeArray(rawInput['discountAllocations'], decodeCartDiscountAllocation);
    const decodedSellingPlanAllocation = decodeSellingPlanAllocation(rawInput['sellingPlanAllocation']);
    const decodedInstructions = decodeCartLineInstructions(rawInput['instructions']);
    const decodedParentRelationship = decodeCartLineParentRelationship(rawInput['parentRelationship']);

    if (
      decodedId === null ||
      decodedQuantity === null ||
      decodedMerchandise === null ||
      decodedCost === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      quantity: decodedQuantity,
      merchandise: decodedMerchandise,
      attributes: decodedAttributes,
      cost: decodedCost,
      discountAllocations: decodedDiscountAllocations,
      sellingPlanAllocation: decodedSellingPlanAllocation,
      instructions: decodedInstructions,
      parentRelationship: decodedParentRelationship
    };
  }
  return null;
}


/**
 * @type { CartLineInstructions }
 * @description Instructions for a cart line
 */
export type CartLineInstructions = {
  /**
   * @type { CartLineInstructionDiscounts }
   * @memberof CartLineInstructions
  */
  discounts: CartLineInstructionDiscounts | null;
    /**
   * @type { string }
   * @memberof CartLineInstructions
  */
  message: string | null;
  };

export function decodeCartLineInstructions(rawInput: unknown): CartLineInstructions | null {
  if (isJSON(rawInput)) {
    const decodedDiscounts = decodeCartLineInstructionDiscounts(rawInput['discounts']);
    const decodedMessage = decodeString(rawInput['message']);


    return {
      discounts: decodedDiscounts,
      message: decodedMessage
    };
  }
  return null;
}


/**
 * @type { CartLineInstructionDiscounts }
 * @description Discount instruction for cart line
 */
export type CartLineInstructionDiscounts =
  | 'APPLY'
  | 'IGNORE'
;

export function decodeCartLineInstructionDiscounts(rawInput: unknown): CartLineInstructionDiscounts | null {
  switch (rawInput) {
    case 'APPLY':
    case 'IGNORE':
     return rawInput;
  }
  return null;
}

export function _decodeCartLineInstructionDiscounts(rawInput: unknown): CartLineInstructionDiscounts | undefined {
  switch (rawInput) {
    case 'APPLY':
    case 'IGNORE':
    return rawInput;
  }
  return;
}

/**
 * @type { CartLineParentRelationship }
 * @description Parent relationship for a cart line
 */
export type CartLineParentRelationship = {
  /**
   * @description ID of the parent line
   * @type { string }
   * @memberof CartLineParentRelationship
  */
  id: string | null;
    /**
   * @type { CartLineParentType }
   * @memberof CartLineParentRelationship
  */
  type: CartLineParentType | null;
  };

export function decodeCartLineParentRelationship(rawInput: unknown): CartLineParentRelationship | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedType = decodeCartLineParentType(rawInput['type']);


    return {
      id: decodedId,
      type: decodedType
    };
  }
  return null;
}


/**
 * @type { CartLineParentType }
 * @description Type of parent line relationship
 */
export type CartLineParentType =
  | 'BUNDLE'
;

export function decodeCartLineParentType(rawInput: unknown): CartLineParentType | null {
  switch (rawInput) {
    case 'BUNDLE':
     return rawInput;
  }
  return null;
}

export function _decodeCartLineParentType(rawInput: unknown): CartLineParentType | undefined {
  switch (rawInput) {
    case 'BUNDLE':
    return rawInput;
  }
  return;
}

/**
 * @type { Merchandise }
 * @description The merchandise in a cart line (ProductVariant)
 */
export type Merchandise = {
  /**
   * @type { string }
   * @memberof Merchandise
  */
  id: string;
  /**
   * @type { string }
   * @memberof Merchandise
  */
  title: string;
  /**
   * @type { Money }
   * @memberof Merchandise
  */
  price: Money;
  /**
   * @type { ProductSummary }
   * @memberof Merchandise
  */
  product: ProductSummary | null;
    /**
   * @type { Image }
   * @memberof Merchandise
  */
  image: Image | null;
    /**
   * @type { SelectedOption[] }
   * @memberof Merchandise
  */
  selectedOptions: SelectedOption[] | null;
    /**
   * @type { string }
   * @memberof Merchandise
  */
  sku: string | null;
    /**
   * @type { boolean }
   * @memberof Merchandise
  */
  availableForSale: boolean | null;
    /**
   * @type { boolean }
   * @memberof Merchandise
  */
  requiresShipping: boolean | null;
    /**
   * @type { number }
   * @memberof Merchandise
  */
  quantityAvailable: number | null;
  };

export function decodeMerchandise(rawInput: unknown): Merchandise | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedPrice = decodeMoney(rawInput['price']);
    const decodedProduct = decodeProductSummary(rawInput['product']);
    const decodedImage = decodeImage(rawInput['image']);
    const decodedSelectedOptions = decodeArray(rawInput['selectedOptions'], decodeSelectedOption);
    const decodedSku = decodeString(rawInput['sku']);
    const decodedAvailableForSale = decodeBoolean(rawInput['availableForSale']);
    const decodedRequiresShipping = decodeBoolean(rawInput['requiresShipping']);
    const decodedQuantityAvailable = decodeNumber(rawInput['quantityAvailable']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedPrice === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      price: decodedPrice,
      product: decodedProduct,
      image: decodedImage,
      selectedOptions: decodedSelectedOptions,
      sku: decodedSku,
      availableForSale: decodedAvailableForSale,
      requiresShipping: decodedRequiresShipping,
      quantityAvailable: decodedQuantityAvailable
    };
  }
  return null;
}


/**
 * @type { CartLineCost }
 * @description Cost breakdown for a cart line
 */
export type CartLineCost = {
  /**
   * @type { Money }
   * @memberof CartLineCost
  */
  totalAmount: Money;
  /**
   * @type { Money }
   * @memberof CartLineCost
  */
  amountPerQuantity: Money;
  /**
   * @type { Money }
   * @memberof CartLineCost
  */
  compareAtAmountPerQuantity: Money | null;
    /**
   * @type { Money }
   * @memberof CartLineCost
  */
  subtotalAmount: Money | null;
  };

export function decodeCartLineCost(rawInput: unknown): CartLineCost | null {
  if (isJSON(rawInput)) {
    const decodedTotalAmount = decodeMoney(rawInput['totalAmount']);
    const decodedAmountPerQuantity = decodeMoney(rawInput['amountPerQuantity']);
    const decodedCompareAtAmountPerQuantity = decodeMoney(rawInput['compareAtAmountPerQuantity']);
    const decodedSubtotalAmount = decodeMoney(rawInput['subtotalAmount']);

    if (
      decodedTotalAmount === null ||
      decodedAmountPerQuantity === null
    ) {
      return null;
    }

    return {
      totalAmount: decodedTotalAmount,
      amountPerQuantity: decodedAmountPerQuantity,
      compareAtAmountPerQuantity: decodedCompareAtAmountPerQuantity,
      subtotalAmount: decodedSubtotalAmount
    };
  }
  return null;
}


/**
 * @type { BaseCartLineConnection }
 * @description Paginated list of cart lines (BaseCartLine)
 */
export type BaseCartLineConnection = {
  /**
   * @type { BaseCartLineEdge[] }
   * @memberof BaseCartLineConnection
  */
  edges: BaseCartLineEdge[] | null;
    /**
   * @type { CartLine[] }
   * @memberof BaseCartLineConnection
  */
  nodes: CartLine[];
  /**
   * @type { PageInfo }
   * @memberof BaseCartLineConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeBaseCartLineConnection(rawInput: unknown): BaseCartLineConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeBaseCartLineEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeCartLine);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedNodes === null
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
 * @type { BaseCartLineEdge }
 * @description An edge in a base cart line connection
 */
export type BaseCartLineEdge = {
  /**
   * @type { CartLine }
   * @memberof BaseCartLineEdge
  */
  node: CartLine;
  /**
   * @type { string }
   * @memberof BaseCartLineEdge
  */
  cursor: string | null;
  };

export function decodeBaseCartLineEdge(rawInput: unknown): BaseCartLineEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeCartLine(rawInput['node']);
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
 * @type { CartLineConnection }
 * @description Paginated list of cart lines
 */
export type CartLineConnection = {
  /**
   * @type { CartLineEdge[] }
   * @memberof CartLineConnection
  */
  edges: CartLineEdge[] | null;
    /**
   * @type { CartLine[] }
   * @memberof CartLineConnection
  */
  nodes: CartLine[];
  /**
   * @type { PageInfo }
   * @memberof CartLineConnection
  */
  pageInfo: PageInfo | null;
  };

export function decodeCartLineConnection(rawInput: unknown): CartLineConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeCartLineEdge);
    const decodedNodes = decodeArray(rawInput['nodes'], decodeCartLine);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedNodes === null
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
 * @type { CartLineEdge }
 * @description An edge in a cart line connection
 */
export type CartLineEdge = {
  /**
   * @type { CartLine }
   * @memberof CartLineEdge
  */
  node: CartLine;
  /**
   * @type { string }
   * @memberof CartLineEdge
  */
  cursor: string | null;
  };

export function decodeCartLineEdge(rawInput: unknown): CartLineEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeCartLine(rawInput['node']);
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
 * @type { SellingPlanAllocation }
 * @description Association between a variant and a selling plan with pricing details
 */
export type SellingPlanAllocation = {
  /**
   * @type { SellingPlan }
   * @memberof SellingPlanAllocation
  */
  sellingPlan: SellingPlan;
  /**
   * @description Price adjustments for this allocation
   * @type { SellingPlanAllocationPriceAdjustment[] }
   * @memberof SellingPlanAllocation
  */
  priceAdjustments: SellingPlanAllocationPriceAdjustment[];
  /**
   * @description The checkout charge amount due for the purchase
   * @type { Money }
   * @memberof SellingPlanAllocation
  */
  checkoutChargeAmount: Money;
  /**
   * @description The remaining balance charge amount
   * @type { Money }
   * @memberof SellingPlanAllocation
  */
  remainingBalanceChargeAmount: Money;
};

export function decodeSellingPlanAllocation(rawInput: unknown): SellingPlanAllocation | null {
  if (isJSON(rawInput)) {
    const decodedSellingPlan = decodeSellingPlan(rawInput['sellingPlan']);
    const decodedPriceAdjustments = decodeArray(rawInput['priceAdjustments'], decodeSellingPlanAllocationPriceAdjustment);
    const decodedCheckoutChargeAmount = decodeMoney(rawInput['checkoutChargeAmount']);
    const decodedRemainingBalanceChargeAmount = decodeMoney(rawInput['remainingBalanceChargeAmount']);

    if (
      decodedSellingPlan === null ||
      decodedPriceAdjustments === null ||
      decodedCheckoutChargeAmount === null ||
      decodedRemainingBalanceChargeAmount === null
    ) {
      return null;
    }

    return {
      sellingPlan: decodedSellingPlan,
      priceAdjustments: decodedPriceAdjustments,
      checkoutChargeAmount: decodedCheckoutChargeAmount,
      remainingBalanceChargeAmount: decodedRemainingBalanceChargeAmount
    };
  }
  return null;
}


/**
 * @type { SellingPlanAllocationPriceAdjustment }
 * @description Price adjustment for a selling plan allocation
 */
export type SellingPlanAllocationPriceAdjustment = {
  /**
   * @description The effective price
   * @type { Money }
   * @memberof SellingPlanAllocationPriceAdjustment
  */
  price: Money;
  /**
   * @description The compare at price
   * @type { Money }
   * @memberof SellingPlanAllocationPriceAdjustment
  */
  compareAtPrice: Money;
  /**
   * @description The price per delivery
   * @type { Money }
   * @memberof SellingPlanAllocationPriceAdjustment
  */
  perDeliveryPrice: Money;
  /**
   * @description The unit price
   * @type { Money }
   * @memberof SellingPlanAllocationPriceAdjustment
  */
  unitPrice: Money | null;
  };

export function decodeSellingPlanAllocationPriceAdjustment(rawInput: unknown): SellingPlanAllocationPriceAdjustment | null {
  if (isJSON(rawInput)) {
    const decodedPrice = decodeMoney(rawInput['price']);
    const decodedCompareAtPrice = decodeMoney(rawInput['compareAtPrice']);
    const decodedPerDeliveryPrice = decodeMoney(rawInput['perDeliveryPrice']);
    const decodedUnitPrice = decodeMoney(rawInput['unitPrice']);

    if (
      decodedPrice === null ||
      decodedCompareAtPrice === null ||
      decodedPerDeliveryPrice === null
    ) {
      return null;
    }

    return {
      price: decodedPrice,
      compareAtPrice: decodedCompareAtPrice,
      perDeliveryPrice: decodedPerDeliveryPrice,
      unitPrice: decodedUnitPrice
    };
  }
  return null;
}


/**
 * @type { SellingPlan }
 * @description A selling plan representing how products can be sold and purchased
 */
export type SellingPlan = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof SellingPlan
  */
  id: string;
  /**
   * @description Name of the selling plan
   * @type { string }
   * @memberof SellingPlan
  */
  name: string;
  /**
   * @description Description of the selling plan
   * @type { string }
   * @memberof SellingPlan
  */
  description: string | null;
    /**
   * @description Whether purchasing this plan results in multiple deliveries
   * @type { boolean }
   * @memberof SellingPlan
  */
  recurringDeliveries: boolean;
  /**
   * @description The initial payment due for the purchase
   * @type { SellingPlanCheckoutCharge }
   * @memberof SellingPlan
  */
  checkoutCharge: SellingPlanCheckoutCharge;
  /**
   * @description Price adjustments when a variant is purchased with this plan
   * @type { SellingPlanPriceAdjustment[] }
   * @memberof SellingPlan
  */
  priceAdjustments: SellingPlanPriceAdjustment[];
  /**
   * @description Options available for this selling plan
   * @type { SellingPlanOption[] }
   * @memberof SellingPlan
  */
  options: SellingPlanOption[];
  /**
   * @type { SellingPlanBillingPolicy }
   * @memberof SellingPlan
  */
  billingPolicy: SellingPlanBillingPolicy | null;
    /**
   * @type { SellingPlanDeliveryPolicy }
   * @memberof SellingPlan
  */
  deliveryPolicy: SellingPlanDeliveryPolicy | null;
    /**
   * @type { Metafield }
   * @memberof SellingPlan
  */
  metafield: Metafield | null;
    /**
   * @type { Metafield[] }
   * @memberof SellingPlan
  */
  metafields: Metafield[] | null;
  };

export function decodeSellingPlan(rawInput: unknown): SellingPlan | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedName = decodeString(rawInput['name']);
    const decodedDescription = decodeString(rawInput['description']);
    const decodedRecurringDeliveries = decodeBoolean(rawInput['recurringDeliveries']);
    const decodedCheckoutCharge = decodeSellingPlanCheckoutCharge(rawInput['checkoutCharge']);
    const decodedPriceAdjustments = decodeArray(rawInput['priceAdjustments'], decodeSellingPlanPriceAdjustment);
    const decodedOptions = decodeArray(rawInput['options'], decodeSellingPlanOption);
    const decodedBillingPolicy = decodeSellingPlanBillingPolicy(rawInput['billingPolicy']);
    const decodedDeliveryPolicy = decodeSellingPlanDeliveryPolicy(rawInput['deliveryPolicy']);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);

    if (
      decodedId === null ||
      decodedName === null ||
      decodedRecurringDeliveries === null ||
      decodedCheckoutCharge === null ||
      decodedPriceAdjustments === null ||
      decodedOptions === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      name: decodedName,
      description: decodedDescription,
      recurringDeliveries: decodedRecurringDeliveries,
      checkoutCharge: decodedCheckoutCharge,
      priceAdjustments: decodedPriceAdjustments,
      options: decodedOptions,
      billingPolicy: decodedBillingPolicy,
      deliveryPolicy: decodedDeliveryPolicy,
      metafield: decodedMetafield,
      metafields: decodedMetafields
    };
  }
  return null;
}


/**
 * @type { SellingPlanOption }
 * @description An option provided by a selling plan
 */
export type SellingPlanOption = {
  /**
   * @description The name of the option (e.g., "Delivery every")
   * @type { string }
   * @memberof SellingPlanOption
  */
  name: string | null;
    /**
   * @description The value of the option (e.g., "Month")
   * @type { string }
   * @memberof SellingPlanOption
  */
  value: string | null;
  };

export function decodeSellingPlanOption(rawInput: unknown): SellingPlanOption | null {
  if (isJSON(rawInput)) {
    const decodedName = decodeString(rawInput['name']);
    const decodedValue = decodeString(rawInput['value']);


    return {
      name: decodedName,
      value: decodedValue
    };
  }
  return null;
}


/**
 * @type { SellingPlanCheckoutCharge }
 * @description The initial payment due for a selling plan
 */
export type SellingPlanCheckoutCharge = {
  /**
   * @type { SellingPlanCheckoutChargeType }
   * @memberof SellingPlanCheckoutCharge
  */
  type: SellingPlanCheckoutChargeType;
  /**
   * @type { SellingPlanCheckoutChargeValue }
   * @memberof SellingPlanCheckoutCharge
  */
  value: SellingPlanCheckoutChargeValue;
};

export function decodeSellingPlanCheckoutCharge(rawInput: unknown): SellingPlanCheckoutCharge | null {
  if (isJSON(rawInput)) {
    const decodedType = decodeSellingPlanCheckoutChargeType(rawInput['type']);
    const decodedValue = decodeSellingPlanCheckoutChargeValue(rawInput['value']);

    if (
      decodedType === null ||
      decodedValue === null
    ) {
      return null;
    }

    return {
      type: decodedType,
      value: decodedValue
    };
  }
  return null;
}


/**
 * @type { SellingPlanCheckoutChargeType }
 * @description The type of checkout charge
 */
export type SellingPlanCheckoutChargeType =
  | 'PERCENTAGE'
  | 'PRICE'
;

export function decodeSellingPlanCheckoutChargeType(rawInput: unknown): SellingPlanCheckoutChargeType | null {
  switch (rawInput) {
    case 'PERCENTAGE':
    case 'PRICE':
     return rawInput;
  }
  return null;
}

export function _decodeSellingPlanCheckoutChargeType(rawInput: unknown): SellingPlanCheckoutChargeType | undefined {
  switch (rawInput) {
    case 'PERCENTAGE':
    case 'PRICE':
    return rawInput;
  }
  return;
}

/**
 * @type { SellingPlanCheckoutChargeValue }
 * @description The value of the checkout charge (percentage or money)
 */
export type SellingPlanCheckoutChargeValue = {
  /**
   * @type { number }
   * @memberof SellingPlanCheckoutChargeValue
  */
  percentage: number | null;
    /**
   * @type { Money }
   * @memberof SellingPlanCheckoutChargeValue
  */
  amount: Money | null;
  };

export function decodeSellingPlanCheckoutChargeValue(rawInput: unknown): SellingPlanCheckoutChargeValue | null {
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
 * @type { SellingPlanBillingPolicy }
 * @description The billing policy for a selling plan
 */
export type SellingPlanBillingPolicy = {
  /**
   * @type { SellingPlanRecurringBillingPolicy }
   * @memberof SellingPlanBillingPolicy
  */
  recurringPolicy: SellingPlanRecurringBillingPolicy | null;
  };

export function decodeSellingPlanBillingPolicy(rawInput: unknown): SellingPlanBillingPolicy | null {
  if (isJSON(rawInput)) {
    const decodedRecurringPolicy = decodeSellingPlanRecurringBillingPolicy(rawInput['recurringPolicy']);


    return {
      recurringPolicy: decodedRecurringPolicy
    };
  }
  return null;
}


/**
 * @type { SellingPlanRecurringBillingPolicy }
 * @description Recurring billing policy details
 */
export type SellingPlanRecurringBillingPolicy = {
  /**
   * @type { SellingPlanInterval }
   * @memberof SellingPlanRecurringBillingPolicy
  */
  interval: SellingPlanInterval | null;
    /**
   * @type { number }
   * @memberof SellingPlanRecurringBillingPolicy
  */
  intervalCount: number | null;
  };

export function decodeSellingPlanRecurringBillingPolicy(rawInput: unknown): SellingPlanRecurringBillingPolicy | null {
  if (isJSON(rawInput)) {
    const decodedInterval = decodeSellingPlanInterval(rawInput['interval']);
    const decodedIntervalCount = decodeNumber(rawInput['intervalCount']);


    return {
      interval: decodedInterval,
      intervalCount: decodedIntervalCount
    };
  }
  return null;
}


/**
 * @type { SellingPlanDeliveryPolicy }
 * @description The delivery policy for a selling plan
 */
export type SellingPlanDeliveryPolicy = {
  /**
   * @type { SellingPlanRecurringDeliveryPolicy }
   * @memberof SellingPlanDeliveryPolicy
  */
  recurringPolicy: SellingPlanRecurringDeliveryPolicy | null;
  };

export function decodeSellingPlanDeliveryPolicy(rawInput: unknown): SellingPlanDeliveryPolicy | null {
  if (isJSON(rawInput)) {
    const decodedRecurringPolicy = decodeSellingPlanRecurringDeliveryPolicy(rawInput['recurringPolicy']);


    return {
      recurringPolicy: decodedRecurringPolicy
    };
  }
  return null;
}


/**
 * @type { SellingPlanRecurringDeliveryPolicy }
 * @description Recurring delivery policy details
 */
export type SellingPlanRecurringDeliveryPolicy = {
  /**
   * @type { SellingPlanInterval }
   * @memberof SellingPlanRecurringDeliveryPolicy
  */
  interval: SellingPlanInterval | null;
    /**
   * @type { number }
   * @memberof SellingPlanRecurringDeliveryPolicy
  */
  intervalCount: number | null;
  };

export function decodeSellingPlanRecurringDeliveryPolicy(rawInput: unknown): SellingPlanRecurringDeliveryPolicy | null {
  if (isJSON(rawInput)) {
    const decodedInterval = decodeSellingPlanInterval(rawInput['interval']);
    const decodedIntervalCount = decodeNumber(rawInput['intervalCount']);


    return {
      interval: decodedInterval,
      intervalCount: decodedIntervalCount
    };
  }
  return null;
}


/**
 * @type { SellingPlanInterval }
 * @description Time interval for selling plan
 */
export type SellingPlanInterval =
  | 'DAY'
  | 'WEEK'
  | 'MONTH'
  | 'YEAR'
;

export function decodeSellingPlanInterval(rawInput: unknown): SellingPlanInterval | null {
  switch (rawInput) {
    case 'DAY':
    case 'WEEK':
    case 'MONTH':
    case 'YEAR':
     return rawInput;
  }
  return null;
}

export function _decodeSellingPlanInterval(rawInput: unknown): SellingPlanInterval | undefined {
  switch (rawInput) {
    case 'DAY':
    case 'WEEK':
    case 'MONTH':
    case 'YEAR':
    return rawInput;
  }
  return;
}

/**
 * @type { SellingPlanPriceAdjustment }
 * @description Price adjustment for a selling plan
 */
export type SellingPlanPriceAdjustment = {
  /**
   * @type { Money }
   * @memberof SellingPlanPriceAdjustment
  */
  price: Money;
  /**
   * @type { Money }
   * @memberof SellingPlanPriceAdjustment
  */
  compareAtPrice: Money;
  /**
   * @type { Money }
   * @memberof SellingPlanPriceAdjustment
  */
  perDeliveryPrice: Money | null;
  };

export function decodeSellingPlanPriceAdjustment(rawInput: unknown): SellingPlanPriceAdjustment | null {
  if (isJSON(rawInput)) {
    const decodedPrice = decodeMoney(rawInput['price']);
    const decodedCompareAtPrice = decodeMoney(rawInput['compareAtPrice']);
    const decodedPerDeliveryPrice = decodeMoney(rawInput['perDeliveryPrice']);

    if (
      decodedPrice === null ||
      decodedCompareAtPrice === null
    ) {
      return null;
    }

    return {
      price: decodedPrice,
      compareAtPrice: decodedCompareAtPrice,
      perDeliveryPrice: decodedPerDeliveryPrice
    };
  }
  return null;
}


/**
 * @type { CartUserErrorCode }
 * @description Error codes for cart operations
 */
export type CartUserErrorCode =
  | 'INVALID'
  | 'LESS_THAN'
  | 'GREATER_THAN'
  | 'INVALID_MERCHANDISE_LINE'
  | 'MISSING_DISCOUNT_CODE'
  | 'MISSING_NOTE'
  | 'INVALID_DELIVERY_GROUP'
  | 'INVALID_DELIVERY_OPTION'
  | 'INVALID_METAFIELDS'
  | 'GIFT_CARD_UNUSABLE'
  | 'PRODUCT_NOT_AVAILABLE'
  | 'INVALID_INPUT'
  | 'VALIDATION_ERROR'
;

export function decodeCartUserErrorCode(rawInput: unknown): CartUserErrorCode | null {
  switch (rawInput) {
    case 'INVALID':
    case 'LESS_THAN':
    case 'GREATER_THAN':
    case 'INVALID_MERCHANDISE_LINE':
    case 'MISSING_DISCOUNT_CODE':
    case 'MISSING_NOTE':
    case 'INVALID_DELIVERY_GROUP':
    case 'INVALID_DELIVERY_OPTION':
    case 'INVALID_METAFIELDS':
    case 'GIFT_CARD_UNUSABLE':
    case 'PRODUCT_NOT_AVAILABLE':
    case 'INVALID_INPUT':
    case 'VALIDATION_ERROR':
     return rawInput;
  }
  return null;
}

export function _decodeCartUserErrorCode(rawInput: unknown): CartUserErrorCode | undefined {
  switch (rawInput) {
    case 'INVALID':
    case 'LESS_THAN':
    case 'GREATER_THAN':
    case 'INVALID_MERCHANDISE_LINE':
    case 'MISSING_DISCOUNT_CODE':
    case 'MISSING_NOTE':
    case 'INVALID_DELIVERY_GROUP':
    case 'INVALID_DELIVERY_OPTION':
    case 'INVALID_METAFIELDS':
    case 'GIFT_CARD_UNUSABLE':
    case 'PRODUCT_NOT_AVAILABLE':
    case 'INVALID_INPUT':
    case 'VALIDATION_ERROR':
    return rawInput;
  }
  return;
}

/**
 * @type { CartUserError }
 * @description An error that occurred during a cart operation
 */
export type CartUserError = {
  /**
   * @type { string[] }
   * @memberof CartUserError
  */
  field: string[] | null;
    /**
   * @type { string }
   * @memberof CartUserError
  */
  message: string;
  /**
   * @type { CartUserErrorCode }
   * @memberof CartUserError
  */
  code: CartUserErrorCode;
};

export function decodeCartUserError(rawInput: unknown): CartUserError | null {
  if (isJSON(rawInput)) {
    const decodedField = decodeArray(rawInput['field'], decodeString);
    const decodedMessage = decodeString(rawInput['message']);
    const decodedCode = decodeCartUserErrorCode(rawInput['code']);

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
 * @type { CartLineInput }
 * @description Input for adding a line to the cart
 */
export type CartLineInput = {
  /**
   * @description The ID of the merchandise (product variant)
   * @type { string }
   * @memberof CartLineInput
  */
  merchandiseId: string;
  /**
   * @description The quantity to add
   * @type { number }
   * @memberof CartLineInput
  */
  quantity: number;
  /**
   * @type { Attribute[] }
   * @memberof CartLineInput
  */
  attributes: Attribute[] | null;
    /**
   * @description The ID of the selling plan
   * @type { string }
   * @memberof CartLineInput
  */
  sellingPlanId: string | null;
  };

export function decodeCartLineInput(rawInput: unknown): CartLineInput | null {
  if (isJSON(rawInput)) {
    const decodedMerchandiseId = decodeString(rawInput['merchandiseId']);
    const decodedQuantity = decodeNumber(rawInput['quantity']);
    const decodedAttributes = decodeArray(rawInput['attributes'], decodeAttribute);
    const decodedSellingPlanId = decodeString(rawInput['sellingPlanId']);

    if (
      decodedMerchandiseId === null ||
      decodedQuantity === null
    ) {
      return null;
    }

    return {
      merchandiseId: decodedMerchandiseId,
      quantity: decodedQuantity,
      attributes: decodedAttributes,
      sellingPlanId: decodedSellingPlanId
    };
  }
  return null;
}


/**
 * @type { CartLineUpdateInput }
 * @description Input for updating a cart line
 */
export type CartLineUpdateInput = {
  /**
   * @description The ID of the cart line
   * @type { string }
   * @memberof CartLineUpdateInput
  */
  id: string;
  /**
   * @description The new quantity
   * @type { number }
   * @memberof CartLineUpdateInput
  */
  quantity: number | null;
    /**
   * @description The new merchandise ID
   * @type { string }
   * @memberof CartLineUpdateInput
  */
  merchandiseId: string | null;
    /**
   * @type { Attribute[] }
   * @memberof CartLineUpdateInput
  */
  attributes: Attribute[] | null;
    /**
   * @description The ID of the selling plan
   * @type { string }
   * @memberof CartLineUpdateInput
  */
  sellingPlanId: string | null;
  };

export function decodeCartLineUpdateInput(rawInput: unknown): CartLineUpdateInput | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedQuantity = decodeNumber(rawInput['quantity']);
    const decodedMerchandiseId = decodeString(rawInput['merchandiseId']);
    const decodedAttributes = decodeArray(rawInput['attributes'], decodeAttribute);
    const decodedSellingPlanId = decodeString(rawInput['sellingPlanId']);

    if (
      decodedId === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      quantity: decodedQuantity,
      merchandiseId: decodedMerchandiseId,
      attributes: decodedAttributes,
      sellingPlanId: decodedSellingPlanId
    };
  }
  return null;
}


/**
 * @type { CartBuyerIdentityInput }
 * @description Input for updating buyer identity
 */
export type CartBuyerIdentityInput = {
  /**
   * @type { string }
   * @memberof CartBuyerIdentityInput
  */
  email: string | null;
    /**
   * @type { string }
   * @memberof CartBuyerIdentityInput
  */
  phone: string | null;
    /**
   * @description Two-letter country code
   * @type { string }
   * @memberof CartBuyerIdentityInput
  */
  countryCode: string | null;
    /**
   * @description Customer access token for authenticated customers
   * @type { string }
   * @memberof CartBuyerIdentityInput
  */
  customerAccessToken: string | null;
  };

export function decodeCartBuyerIdentityInput(rawInput: unknown): CartBuyerIdentityInput | null {
  if (isJSON(rawInput)) {
    const decodedEmail = decodeString(rawInput['email']);
    const decodedPhone = decodeString(rawInput['phone']);
    const decodedCountryCode = decodeString(rawInput['countryCode']);
    const decodedCustomerAccessToken = decodeString(rawInput['customerAccessToken']);


    return {
      email: decodedEmail,
      phone: decodedPhone,
      countryCode: decodedCountryCode,
      customerAccessToken: decodedCustomerAccessToken
    };
  }
  return null;
}


/**
 * @type { CartInput }
 * @description Input for creating a cart
 */
export type CartInput = {
  /**
   * @description Merchandise lines to add to the cart
   * @type { CartLineInput[] }
   * @memberof CartInput
  */
  lines: CartLineInput[] | null;
    /**
   * @description Additional information about the cart
   * @type { AttributeInput[] }
   * @memberof CartInput
  */
  attributes: AttributeInput[] | null;
    /**
   * @description Note associated with the cart
   * @type { string }
   * @memberof CartInput
  */
  note: string | null;
    /**
   * @description Customer associated with the cart
   * @type { CartBuyerIdentityInput }
   * @memberof CartInput
  */
  buyerIdentity: CartBuyerIdentityInput | null;
    /**
   * @description Discount codes to apply to the cart
   * @type { string[] }
   * @memberof CartInput
  */
  discountCodes: string[] | null;
    /**
   * @description Gift card codes to apply to the cart
   * @type { string[] }
   * @memberof CartInput
  */
  giftCardCodes: string[] | null;
    /**
   * @description Delivery-related fields for the cart
   * @type { CartDeliveryInput }
   * @memberof CartInput
  */
  delivery: CartDeliveryInput | null;
    /**
   * @description Metafields to associate with the cart
   * @type { CartInputMetafieldInput[] }
   * @memberof CartInput
  */
  metafields: CartInputMetafieldInput[] | null;
  };

export function decodeCartInput(rawInput: unknown): CartInput | null {
  if (isJSON(rawInput)) {
    const decodedLines = decodeArray(rawInput['lines'], decodeCartLineInput);
    const decodedAttributes = decodeArray(rawInput['attributes'], decodeAttributeInput);
    const decodedNote = decodeString(rawInput['note']);
    const decodedBuyerIdentity = decodeCartBuyerIdentityInput(rawInput['buyerIdentity']);
    const decodedDiscountCodes = decodeArray(rawInput['discountCodes'], decodeString);
    const decodedGiftCardCodes = decodeArray(rawInput['giftCardCodes'], decodeString);
    const decodedDelivery = decodeCartDeliveryInput(rawInput['delivery']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeCartInputMetafieldInput);


    return {
      lines: decodedLines,
      attributes: decodedAttributes,
      note: decodedNote,
      buyerIdentity: decodedBuyerIdentity,
      discountCodes: decodedDiscountCodes,
      giftCardCodes: decodedGiftCardCodes,
      delivery: decodedDelivery,
      metafields: decodedMetafields
    };
  }
  return null;
}


/**
 * @type { CartDeliveryInput }
 * @description Input for cart delivery options
 */
export type CartDeliveryInput = {
  /**
   * @type { CartDeliveryGroupInput[] }
   * @memberof CartDeliveryInput
  */
  deliveryGroups: CartDeliveryGroupInput[] | null;
  };

export function decodeCartDeliveryInput(rawInput: unknown): CartDeliveryInput | null {
  if (isJSON(rawInput)) {
    const decodedDeliveryGroups = decodeArray(rawInput['deliveryGroups'], decodeCartDeliveryGroupInput);


    return {
      deliveryGroups: decodedDeliveryGroups
    };
  }
  return null;
}


/**
 * @type { CartDeliveryGroupInput }
 * @description Input for a cart delivery group
 */
export type CartDeliveryGroupInput = {
  /**
   * @description Delivery group ID
   * @type { string }
   * @memberof CartDeliveryGroupInput
  */
  id: string | null;
    /**
   * @type { CartSelectedDeliveryOptionInput }
   * @memberof CartDeliveryGroupInput
  */
  selectedDeliveryOption: CartSelectedDeliveryOptionInput;
};

export function decodeCartDeliveryGroupInput(rawInput: unknown): CartDeliveryGroupInput | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedSelectedDeliveryOption = decodeCartSelectedDeliveryOptionInput(rawInput['selectedDeliveryOption']);

    if (
      decodedSelectedDeliveryOption === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      selectedDeliveryOption: decodedSelectedDeliveryOption
    };
  }
  return null;
}


/**
 * @type { CartSelectedDeliveryOptionInput }
 * @description Input for selected delivery option
 */
export type CartSelectedDeliveryOptionInput = {
  /**
   * @description Handle of the delivery option
   * @type { string }
   * @memberof CartSelectedDeliveryOptionInput
  */
  handle: string;
};

export function decodeCartSelectedDeliveryOptionInput(rawInput: unknown): CartSelectedDeliveryOptionInput | null {
  if (isJSON(rawInput)) {
    const decodedHandle = decodeString(rawInput['handle']);

    if (
      decodedHandle === null
    ) {
      return null;
    }

    return {
      handle: decodedHandle
    };
  }
  return null;
}


/**
 * @type { CartInputMetafieldInput }
 * @description Input for a cart metafield
 */
export type CartInputMetafieldInput = {
  /**
   * @description The key name of the metafield
   * @type { string }
   * @memberof CartInputMetafieldInput
  */
  key: string;
  /**
   * @description The value of the metafield
   * @type { string }
   * @memberof CartInputMetafieldInput
  */
  value: string;
  /**
   * @description The type of the metafield value
   * @type { string }
   * @memberof CartInputMetafieldInput
  */
  type: string;
};

export function decodeCartInputMetafieldInput(rawInput: unknown): CartInputMetafieldInput | null {
  if (isJSON(rawInput)) {
    const decodedKey = decodeString(rawInput['key']);
    const decodedValue = decodeString(rawInput['value']);
    const decodedType = decodeString(rawInput['type']);

    if (
      decodedKey === null ||
      decodedValue === null ||
      decodedType === null
    ) {
      return null;
    }

    return {
      key: decodedKey,
      value: decodedValue,
      type: decodedType
    };
  }
  return null;
}


/**
 * @type { CartMutationResult }
 * @description Result of a cart mutation
 */
export type CartMutationResult = {
  /**
   * @type { Cart }
   * @memberof CartMutationResult
  */
  cart: Cart | null;
    /**
   * @type { CartUserError[] }
   * @memberof CartMutationResult
  */
  userErrors: CartUserError[];
};

export function decodeCartMutationResult(rawInput: unknown): CartMutationResult | null {
  if (isJSON(rawInput)) {
    const decodedCart = decodeCart(rawInput['cart']);
    const decodedUserErrors = decodeArray(rawInput['userErrors'], decodeCartUserError);

    if (
      decodedUserErrors === null
    ) {
      return null;
    }

    return {
      cart: decodedCart,
      userErrors: decodedUserErrors
    };
  }
  return null;
}





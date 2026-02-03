import { isJSON, decodeString, _decodeString , decodeNumber, _decodeNumber , decodeBoolean, _decodeBoolean  } from 'type-decoder';

/**
 * @type { Money }
 * @description Represents a monetary value with currency (MoneyV2)
 */
export type Money = {
  /**
   * @description Decimal money amount (stored as string for precision)
   * @type { string }
   * @memberof Money
  */
  amount: string;
  /**
   * @description Currency code (ISO 4217, e.g., USD, EUR)
   * @type { string }
   * @memberof Money
  */
  currencyCode: string;
};

export function decodeMoney(rawInput: unknown): Money | null {
  if (isJSON(rawInput)) {
    const decodedAmount = decodeString(rawInput['amount']);
    const decodedCurrencyCode = decodeString(rawInput['currencyCode']);

    if (
      decodedAmount === null ||
      decodedCurrencyCode === null
    ) {
      return null;
    }

    return {
      amount: decodedAmount,
      currencyCode: decodedCurrencyCode
    };
  }
  return null;
}


/**
 * @type { MoneyInput }
 * @description Input for monetary values
 */
export type MoneyInput = {
  /**
   * @description Decimal money amount
   * @type { string }
   * @memberof MoneyInput
  */
  amount: string;
  /**
   * @description Currency code (ISO 4217)
   * @type { string }
   * @memberof MoneyInput
  */
  currencyCode: string;
};

export function decodeMoneyInput(rawInput: unknown): MoneyInput | null {
  if (isJSON(rawInput)) {
    const decodedAmount = decodeString(rawInput['amount']);
    const decodedCurrencyCode = decodeString(rawInput['currencyCode']);

    if (
      decodedAmount === null ||
      decodedCurrencyCode === null
    ) {
      return null;
    }

    return {
      amount: decodedAmount,
      currencyCode: decodedCurrencyCode
    };
  }
  return null;
}


/**
 * @type { Image }
 * @description Represents an image resource
 */
export type Image = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Image
  */
  id: string | null;
    /**
   * @description The image URL
   * @type { string }
   * @memberof Image
  */
  url: string;
  /**
   * @description Alt text for accessibility
   * @type { string }
   * @memberof Image
  */
  altText: string | null;
    /**
   * @description Image width in pixels
   * @type { number }
   * @memberof Image
  */
  width: number | null;
    /**
   * @description Image height in pixels
   * @type { number }
   * @memberof Image
  */
  height: number | null;
  };

export function decodeImage(rawInput: unknown): Image | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedUrl = decodeString(rawInput['url']);
    const decodedAltText = decodeString(rawInput['altText']);
    const decodedWidth = decodeNumber(rawInput['width']);
    const decodedHeight = decodeNumber(rawInput['height']);

    if (
      decodedUrl === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      url: decodedUrl,
      altText: decodedAltText,
      width: decodedWidth,
      height: decodedHeight
    };
  }
  return null;
}


/**
 * @type { PageInfo }
 * @description Pagination information for connections
 */
export type PageInfo = {
  /**
   * @description Whether there are more items after
   * @type { boolean }
   * @memberof PageInfo
  */
  hasNextPage: boolean;
  /**
   * @description Whether there are more items before
   * @type { boolean }
   * @memberof PageInfo
  */
  hasPreviousPage: boolean;
  /**
   * @description Cursor for the first item
   * @type { string }
   * @memberof PageInfo
  */
  startCursor: string | null;
    /**
   * @description Cursor for the last item
   * @type { string }
   * @memberof PageInfo
  */
  endCursor: string | null;
  };

export function decodePageInfo(rawInput: unknown): PageInfo | null {
  if (isJSON(rawInput)) {
    const decodedHasNextPage = decodeBoolean(rawInput['hasNextPage']);
    const decodedHasPreviousPage = decodeBoolean(rawInput['hasPreviousPage']);
    const decodedStartCursor = decodeString(rawInput['startCursor']);
    const decodedEndCursor = decodeString(rawInput['endCursor']);

    if (
      decodedHasNextPage === null ||
      decodedHasPreviousPage === null
    ) {
      return null;
    }

    return {
      hasNextPage: decodedHasNextPage,
      hasPreviousPage: decodedHasPreviousPage,
      startCursor: decodedStartCursor,
      endCursor: decodedEndCursor
    };
  }
  return null;
}


/**
 * @type { SEO }
 * @description SEO metadata
 */
export type SEO = {
  /**
   * @description SEO title
   * @type { string }
   * @memberof SEO
  */
  title: string | null;
    /**
   * @description SEO description
   * @type { string }
   * @memberof SEO
  */
  description: string | null;
  };

export function decodeSEO(rawInput: unknown): SEO | null {
  if (isJSON(rawInput)) {
    const decodedTitle = decodeString(rawInput['title']);
    const decodedDescription = decodeString(rawInput['description']);


    return {
      title: decodedTitle,
      description: decodedDescription
    };
  }
  return null;
}


/**
 * @type { Attribute }
 * @description Key-value attribute
 */
export type Attribute = {
  /**
   * @description Attribute key
   * @type { string }
   * @memberof Attribute
  */
  key: string;
  /**
   * @description Attribute value
   * @type { string }
   * @memberof Attribute
  */
  value: string;
};

export function decodeAttribute(rawInput: unknown): Attribute | null {
  if (isJSON(rawInput)) {
    const decodedKey = decodeString(rawInput['key']);
    const decodedValue = decodeString(rawInput['value']);

    if (
      decodedKey === null ||
      decodedValue === null
    ) {
      return null;
    }

    return {
      key: decodedKey,
      value: decodedValue
    };
  }
  return null;
}


/**
 * @type { AttributeInput }
 * @description Input for key-value attributes
 */
export type AttributeInput = {
  /**
   * @description Attribute key
   * @type { string }
   * @memberof AttributeInput
  */
  key: string;
  /**
   * @description Attribute value
   * @type { string }
   * @memberof AttributeInput
  */
  value: string;
};

export function decodeAttributeInput(rawInput: unknown): AttributeInput | null {
  if (isJSON(rawInput)) {
    const decodedKey = decodeString(rawInput['key']);
    const decodedValue = decodeString(rawInput['value']);

    if (
      decodedKey === null ||
      decodedValue === null
    ) {
      return null;
    }

    return {
      key: decodedKey,
      value: decodedValue
    };
  }
  return null;
}


/**
 * @type { Count }
 * @description A count of items with precision
 */
export type Count = {
  /**
   * @description The count value
   * @type { number }
   * @memberof Count
  */
  count: number | null;
    /**
   * @description Precision of the count
   * @type { CountPrecision }
   * @memberof Count
  */
  precision: CountPrecision | null;
  };

export function decodeCount(rawInput: unknown): Count | null {
  if (isJSON(rawInput)) {
    const decodedCount = decodeNumber(rawInput['count']);
    const decodedPrecision = decodeCountPrecision(rawInput['precision']);


    return {
      count: decodedCount,
      precision: decodedPrecision
    };
  }
  return null;
}


/**
 * @type { CountPrecision }
 * @description Precision of a count value
 */
export type CountPrecision =
  | 'EXACT'
  | 'AT_LEAST'
;

export function decodeCountPrecision(rawInput: unknown): CountPrecision | null {
  switch (rawInput) {
    case 'EXACT':
    case 'AT_LEAST':
     return rawInput;
  }
  return null;
}

export function _decodeCountPrecision(rawInput: unknown): CountPrecision | undefined {
  switch (rawInput) {
    case 'EXACT':
    case 'AT_LEAST':
    return rawInput;
  }
  return;
}

/**
 * @type { PriceRange }
 * @description Price range for a product (deprecated - use ProductPriceRange)
 */
export type PriceRange = {
  /**
   * @description The lowest variant price
   * @type { Money }
   * @memberof PriceRange
  */
  minVariantPrice: Money;
  /**
   * @description The highest variant price
   * @type { Money }
   * @memberof PriceRange
  */
  maxVariantPrice: Money;
};

export function decodePriceRange(rawInput: unknown): PriceRange | null {
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
 * @type { SelectedOption }
 * @description A selected product option
 */
export type SelectedOption = {
  /**
   * @description Option name (e.g., Size, Color)
   * @type { string }
   * @memberof SelectedOption
  */
  name: string;
  /**
   * @description Option value (e.g., Medium, Red)
   * @type { string }
   * @memberof SelectedOption
  */
  value: string;
};

export function decodeSelectedOption(rawInput: unknown): SelectedOption | null {
  if (isJSON(rawInput)) {
    const decodedName = decodeString(rawInput['name']);
    const decodedValue = decodeString(rawInput['value']);

    if (
      decodedName === null ||
      decodedValue === null
    ) {
      return null;
    }

    return {
      name: decodedName,
      value: decodedValue
    };
  }
  return null;
}


/**
 * @type { PaginationArgs }
 * @description Pagination arguments for list queries
 */
export type PaginationArgs = {
  /**
   * @description Number of items to fetch from the start
   * @type { number }
   * @memberof PaginationArgs
  */
  first: number | null;
    /**
   * @description Cursor to fetch items after
   * @type { string }
   * @memberof PaginationArgs
  */
  after: string | null;
    /**
   * @description Number of items to fetch from the end
   * @type { number }
   * @memberof PaginationArgs
  */
  last: number | null;
    /**
   * @description Cursor to fetch items before
   * @type { string }
   * @memberof PaginationArgs
  */
  before: string | null;
  };

export function decodePaginationArgs(rawInput: unknown): PaginationArgs | null {
  if (isJSON(rawInput)) {
    const decodedFirst = decodeNumber(rawInput['first']);
    const decodedAfter = decodeString(rawInput['after']);
    const decodedLast = decodeNumber(rawInput['last']);
    const decodedBefore = decodeString(rawInput['before']);


    return {
      first: decodedFirst,
      after: decodedAfter,
      last: decodedLast,
      before: decodedBefore
    };
  }
  return null;
}


/**
 * @type { ProductFilter }
 * @description Filter for products in collections or search
 */
export type ProductFilter = {
  /**
   * @type { string }
   * @memberof ProductFilter
  */
  productVendor: string | null;
    /**
   * @type { string }
   * @memberof ProductFilter
  */
  productType: string | null;
    /**
   * @type { VariantOptionFilter }
   * @memberof ProductFilter
  */
  variantOption: VariantOptionFilter | null;
    /**
   * @type { boolean }
   * @memberof ProductFilter
  */
  available: boolean | null;
    /**
   * @type { PriceFilter }
   * @memberof ProductFilter
  */
  price: PriceFilter | null;
    /**
   * @type { MetafieldFilter }
   * @memberof ProductFilter
  */
  productMetafield: MetafieldFilter | null;
    /**
   * @type { MetafieldFilter }
   * @memberof ProductFilter
  */
  variantMetafield: MetafieldFilter | null;
    /**
   * @type { string }
   * @memberof ProductFilter
  */
  tag: string | null;
  };

export function decodeProductFilter(rawInput: unknown): ProductFilter | null {
  if (isJSON(rawInput)) {
    const decodedProductVendor = decodeString(rawInput['productVendor']);
    const decodedProductType = decodeString(rawInput['productType']);
    const decodedVariantOption = decodeVariantOptionFilter(rawInput['variantOption']);
    const decodedAvailable = decodeBoolean(rawInput['available']);
    const decodedPrice = decodePriceFilter(rawInput['price']);
    const decodedProductMetafield = decodeMetafieldFilter(rawInput['productMetafield']);
    const decodedVariantMetafield = decodeMetafieldFilter(rawInput['variantMetafield']);
    const decodedTag = decodeString(rawInput['tag']);


    return {
      productVendor: decodedProductVendor,
      productType: decodedProductType,
      variantOption: decodedVariantOption,
      available: decodedAvailable,
      price: decodedPrice,
      productMetafield: decodedProductMetafield,
      variantMetafield: decodedVariantMetafield,
      tag: decodedTag
    };
  }
  return null;
}


/**
 * @type { VariantOptionFilter }
 * @description Filter by variant option
 */
export type VariantOptionFilter = {
  /**
   * @type { string }
   * @memberof VariantOptionFilter
  */
  name: string;
  /**
   * @type { string }
   * @memberof VariantOptionFilter
  */
  value: string;
};

export function decodeVariantOptionFilter(rawInput: unknown): VariantOptionFilter | null {
  if (isJSON(rawInput)) {
    const decodedName = decodeString(rawInput['name']);
    const decodedValue = decodeString(rawInput['value']);

    if (
      decodedName === null ||
      decodedValue === null
    ) {
      return null;
    }

    return {
      name: decodedName,
      value: decodedValue
    };
  }
  return null;
}


/**
 * @type { PriceFilter }
 * @description Filter by price range
 */
export type PriceFilter = {
  /**
   * @type { number }
   * @memberof PriceFilter
  */
  min: number | null;
    /**
   * @type { number }
   * @memberof PriceFilter
  */
  max: number | null;
  };

export function decodePriceFilter(rawInput: unknown): PriceFilter | null {
  if (isJSON(rawInput)) {
    const decodedMin = decodeNumber(rawInput['min']);
    const decodedMax = decodeNumber(rawInput['max']);


    return {
      min: decodedMin,
      max: decodedMax
    };
  }
  return null;
}


/**
 * @type { MetafieldFilter }
 * @description Filter by metafield value
 */
export type MetafieldFilter = {
  /**
   * @type { string }
   * @memberof MetafieldFilter
  */
  namespace: string;
  /**
   * @type { string }
   * @memberof MetafieldFilter
  */
  key: string;
  /**
   * @type { string }
   * @memberof MetafieldFilter
  */
  value: string;
};

export function decodeMetafieldFilter(rawInput: unknown): MetafieldFilter | null {
  if (isJSON(rawInput)) {
    const decodedNamespace = decodeString(rawInput['namespace']);
    const decodedKey = decodeString(rawInput['key']);
    const decodedValue = decodeString(rawInput['value']);

    if (
      decodedNamespace === null ||
      decodedKey === null ||
      decodedValue === null
    ) {
      return null;
    }

    return {
      namespace: decodedNamespace,
      key: decodedKey,
      value: decodedValue
    };
  }
  return null;
}





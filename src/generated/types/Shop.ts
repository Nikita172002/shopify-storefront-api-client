import { type Image, decodeImage,  type MetafieldParentResourceTypename, decodeMetafieldParentResourceTypename,  type MetafieldParentResource, decodeMetafieldParentResource,  type MetafieldReferenceTypename, decodeMetafieldReferenceTypename,  type VideoSource, decodeVideoSource,  type Model3dSource, decodeModel3dSource,  type MetafieldReference, decodeMetafieldReference,  type MetafieldReferenceEdge, decodeMetafieldReferenceEdge,  type PageInfo, decodePageInfo,  type MetafieldReferenceConnection, decodeMetafieldReferenceConnection,  type Metafield, decodeMetafield,  type Money, decodeMoney  } from './index';
import { isJSON, decodeString, _decodeString , decodeNumber, _decodeNumber , decodeArray, _decodeArray , decodeBoolean, _decodeBoolean  } from 'type-decoder';

/**
 * @type { Shop }
 * @description Shop configuration and information
 */
export type Shop = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Shop
  */
  id: string;
  /**
   * @description Shop name
   * @type { string }
   * @memberof Shop
  */
  name: string;
  /**
   * @description Shop description
   * @type { string }
   * @memberof Shop
  */
  description: string | null;
    /**
   * @description Primary domain of the Online Store
   * @type { Domain }
   * @memberof Shop
  */
  primaryDomain: Domain;
  /**
   * @description Shop branding configuration
   * @type { Brand }
   * @memberof Shop
  */
  brand: Brand | null;
    /**
   * @description Payment settings for the shop
   * @type { PaymentSettings }
   * @memberof Shop
  */
  paymentSettings: PaymentSettings;
  /**
   * @description Country codes the shop ships to
   * @type { string[] }
   * @memberof Shop
  */
  shipsToCountries: string[];
  /**
   * @description Money format string (when currency not specified)
   * @type { string }
   * @memberof Shop
  */
  moneyFormat: string;
  /**
   * @description Shop refund policy
   * @type { ShopPolicy }
   * @memberof Shop
  */
  refundPolicy: ShopPolicy | null;
    /**
   * @description Shop privacy policy
   * @type { ShopPolicy }
   * @memberof Shop
  */
  privacyPolicy: ShopPolicy | null;
    /**
   * @description Shop shipping policy
   * @type { ShopPolicy }
   * @memberof Shop
  */
  shippingPolicy: ShopPolicy | null;
    /**
   * @description Shop terms of service
   * @type { ShopPolicy }
   * @memberof Shop
  */
  termsOfService: ShopPolicy | null;
    /**
   * @description Shop subscription policy (has default value)
   * @type { ShopPolicyWithDefault }
   * @memberof Shop
  */
  subscriptionPolicy: ShopPolicyWithDefault | null;
    /**
   * @description URL for customer account (if vanity domain exists)
   * @type { string }
   * @memberof Shop
  */
  customerAccountUrl: string | null;
    /**
   * @description A custom field associated with the shop
   * @type { Metafield }
   * @memberof Shop
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields
   * @type { Metafield[] }
   * @memberof Shop
  */
  metafields: Metafield[] | null;
    /**
   * @description Shop Pay Installments pricing information
   * @type { ShopPayInstallmentsPricing }
   * @memberof Shop
  */
  shopPayInstallmentsPricing: ShopPayInstallmentsPricing | null;
    /**
   * @description Social login providers for customer accounts
   * @type { SocialLoginProvider[] }
   * @memberof Shop
  */
  socialLoginProviders: SocialLoginProvider[] | null;
  };

export function decodeShop(rawInput: unknown): Shop | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedName = decodeString(rawInput['name']);
    const decodedDescription = decodeString(rawInput['description']);
    const decodedPrimaryDomain = decodeDomain(rawInput['primaryDomain']);
    const decodedBrand = decodeBrand(rawInput['brand']);
    const decodedPaymentSettings = decodePaymentSettings(rawInput['paymentSettings']);
    const decodedShipsToCountries = decodeArray(rawInput['shipsToCountries'], decodeString);
    const decodedMoneyFormat = decodeString(rawInput['moneyFormat']);
    const decodedRefundPolicy = decodeShopPolicy(rawInput['refundPolicy']);
    const decodedPrivacyPolicy = decodeShopPolicy(rawInput['privacyPolicy']);
    const decodedShippingPolicy = decodeShopPolicy(rawInput['shippingPolicy']);
    const decodedTermsOfService = decodeShopPolicy(rawInput['termsOfService']);
    const decodedSubscriptionPolicy = decodeShopPolicyWithDefault(rawInput['subscriptionPolicy']);
    const decodedCustomerAccountUrl = decodeString(rawInput['customerAccountUrl']);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);
    const decodedShopPayInstallmentsPricing = decodeShopPayInstallmentsPricing(rawInput['shopPayInstallmentsPricing']);
    const decodedSocialLoginProviders = decodeArray(rawInput['socialLoginProviders'], decodeSocialLoginProvider);

    if (
      decodedId === null ||
      decodedName === null ||
      decodedPrimaryDomain === null ||
      decodedPaymentSettings === null ||
      decodedShipsToCountries === null ||
      decodedMoneyFormat === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      name: decodedName,
      description: decodedDescription,
      primaryDomain: decodedPrimaryDomain,
      brand: decodedBrand,
      paymentSettings: decodedPaymentSettings,
      shipsToCountries: decodedShipsToCountries,
      moneyFormat: decodedMoneyFormat,
      refundPolicy: decodedRefundPolicy,
      privacyPolicy: decodedPrivacyPolicy,
      shippingPolicy: decodedShippingPolicy,
      termsOfService: decodedTermsOfService,
      subscriptionPolicy: decodedSubscriptionPolicy,
      customerAccountUrl: decodedCustomerAccountUrl,
      metafield: decodedMetafield,
      metafields: decodedMetafields,
      shopPayInstallmentsPricing: decodedShopPayInstallmentsPricing,
      socialLoginProviders: decodedSocialLoginProviders
    };
  }
  return null;
}


/**
 * @type { Domain }
 * @description A shop domain
 */
export type Domain = {
  /**
   * @description Domain host (e.g., example.myshopify.com)
   * @type { string }
   * @memberof Domain
  */
  host: string;
  /**
   * @description Full URL (e.g., https://example.myshopify.com)
   * @type { string }
   * @memberof Domain
  */
  url: string;
};

export function decodeDomain(rawInput: unknown): Domain | null {
  if (isJSON(rawInput)) {
    const decodedHost = decodeString(rawInput['host']);
    const decodedUrl = decodeString(rawInput['url']);

    if (
      decodedHost === null ||
      decodedUrl === null
    ) {
      return null;
    }

    return {
      host: decodedHost,
      url: decodedUrl
    };
  }
  return null;
}


/**
 * @type { Brand }
 * @description Shop brand information
 */
export type Brand = {
  /**
   * @type { BrandMediaImage }
   * @memberof Brand
  */
  logo: BrandMediaImage | null;
    /**
   * @type { BrandMediaImage }
   * @memberof Brand
  */
  coverImage: BrandMediaImage | null;
    /**
   * @type { BrandColors }
   * @memberof Brand
  */
  colors: BrandColors | null;
    /**
   * @type { string }
   * @memberof Brand
  */
  shortDescription: string | null;
    /**
   * @type { string }
   * @memberof Brand
  */
  slogan: string | null;
  };

export function decodeBrand(rawInput: unknown): Brand | null {
  if (isJSON(rawInput)) {
    const decodedLogo = decodeBrandMediaImage(rawInput['logo']);
    const decodedCoverImage = decodeBrandMediaImage(rawInput['coverImage']);
    const decodedColors = decodeBrandColors(rawInput['colors']);
    const decodedShortDescription = decodeString(rawInput['shortDescription']);
    const decodedSlogan = decodeString(rawInput['slogan']);


    return {
      logo: decodedLogo,
      coverImage: decodedCoverImage,
      colors: decodedColors,
      shortDescription: decodedShortDescription,
      slogan: decodedSlogan
    };
  }
  return null;
}


/**
 * @type { BrandMediaImage }
 * @description A media image for brand assets (logo, cover)
 */
export type BrandMediaImage = {
  /**
   * @type { Image }
   * @memberof BrandMediaImage
  */
  image: Image | null;
    /**
   * @type { string }
   * @memberof BrandMediaImage
  */
  alt: string | null;
  };

export function decodeBrandMediaImage(rawInput: unknown): BrandMediaImage | null {
  if (isJSON(rawInput)) {
    const decodedImage = decodeImage(rawInput['image']);
    const decodedAlt = decodeString(rawInput['alt']);


    return {
      image: decodedImage,
      alt: decodedAlt
    };
  }
  return null;
}


/**
 * @type { BrandColors }
 * @description Brand color settings
 */
export type BrandColors = {
  /**
   * @type { BrandColorGroup[] }
   * @memberof BrandColors
  */
  primary: BrandColorGroup[] | null;
    /**
   * @type { BrandColorGroup[] }
   * @memberof BrandColors
  */
  secondary: BrandColorGroup[] | null;
  };

export function decodeBrandColors(rawInput: unknown): BrandColors | null {
  if (isJSON(rawInput)) {
    const decodedPrimary = decodeArray(rawInput['primary'], decodeBrandColorGroup);
    const decodedSecondary = decodeArray(rawInput['secondary'], decodeBrandColorGroup);


    return {
      primary: decodedPrimary,
      secondary: decodedSecondary
    };
  }
  return null;
}


/**
 * @type { BrandColorGroup }
 * @description A group of brand colors
 */
export type BrandColorGroup = {
  /**
   * @description Background color (hex)
   * @type { string }
   * @memberof BrandColorGroup
  */
  background: string | null;
    /**
   * @description Foreground color (hex)
   * @type { string }
   * @memberof BrandColorGroup
  */
  foreground: string | null;
  };

export function decodeBrandColorGroup(rawInput: unknown): BrandColorGroup | null {
  if (isJSON(rawInput)) {
    const decodedBackground = decodeString(rawInput['background']);
    const decodedForeground = decodeString(rawInput['foreground']);


    return {
      background: decodedBackground,
      foreground: decodedForeground
    };
  }
  return null;
}


/**
 * @type { ShopPolicy }
 * @description A shop policy configured by the merchant
 */
export type ShopPolicy = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof ShopPolicy
  */
  id: string;
  /**
   * @description Policy title
   * @type { string }
   * @memberof ShopPolicy
  */
  title: string;
  /**
   * @description Policy handle
   * @type { string }
   * @memberof ShopPolicy
  */
  handle: string;
  /**
   * @description Policy text (max 64kb)
   * @type { string }
   * @memberof ShopPolicy
  */
  body: string;
  /**
   * @description Public URL to the policy
   * @type { string }
   * @memberof ShopPolicy
  */
  url: string;
};

export function decodeShopPolicy(rawInput: unknown): ShopPolicy | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedBody = decodeString(rawInput['body']);
    const decodedUrl = decodeString(rawInput['url']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedHandle === null ||
      decodedBody === null ||
      decodedUrl === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle,
      body: decodedBody,
      url: decodedUrl
    };
  }
  return null;
}


/**
 * @type { ShopPolicyWithDefault }
 * @description A shop policy with a default value (e.g., subscription policy)
 */
export type ShopPolicyWithDefault = {
  /**
   * @description Unique ID (null for default policy)
   * @type { string }
   * @memberof ShopPolicyWithDefault
  */
  id: string | null;
    /**
   * @description Policy title
   * @type { string }
   * @memberof ShopPolicyWithDefault
  */
  title: string;
  /**
   * @description Policy handle
   * @type { string }
   * @memberof ShopPolicyWithDefault
  */
  handle: string;
  /**
   * @description Policy text (max 64kb)
   * @type { string }
   * @memberof ShopPolicyWithDefault
  */
  body: string;
  /**
   * @description Public URL to the policy
   * @type { string }
   * @memberof ShopPolicyWithDefault
  */
  url: string;
};

export function decodeShopPolicyWithDefault(rawInput: unknown): ShopPolicyWithDefault | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedBody = decodeString(rawInput['body']);
    const decodedUrl = decodeString(rawInput['url']);

    if (
      decodedTitle === null ||
      decodedHandle === null ||
      decodedBody === null ||
      decodedUrl === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle,
      body: decodedBody,
      url: decodedUrl
    };
  }
  return null;
}


/**
 * @type { ShopPayInstallmentsPricing }
 * @description Shop Pay Installments pricing configuration
 */
export type ShopPayInstallmentsPricing = {
  /**
   * @description Available financing plans
   * @type { ShopPayInstallmentsFinancingPlan[] }
   * @memberof ShopPayInstallmentsPricing
  */
  financingPlans: ShopPayInstallmentsFinancingPlan[];
  /**
   * @description Maximum price to qualify for financing
   * @type { Money }
   * @memberof ShopPayInstallmentsPricing
  */
  maxPrice: Money;
  /**
   * @description Minimum price to qualify for financing
   * @type { Money }
   * @memberof ShopPayInstallmentsPricing
  */
  minPrice: Money;
};

export function decodeShopPayInstallmentsPricing(rawInput: unknown): ShopPayInstallmentsPricing | null {
  if (isJSON(rawInput)) {
    const decodedFinancingPlans = decodeArray(rawInput['financingPlans'], decodeShopPayInstallmentsFinancingPlan);
    const decodedMaxPrice = decodeMoney(rawInput['maxPrice']);
    const decodedMinPrice = decodeMoney(rawInput['minPrice']);

    if (
      decodedFinancingPlans === null ||
      decodedMaxPrice === null ||
      decodedMinPrice === null
    ) {
      return null;
    }

    return {
      financingPlans: decodedFinancingPlans,
      maxPrice: decodedMaxPrice,
      minPrice: decodedMinPrice
    };
  }
  return null;
}


/**
 * @type { ShopPayInstallmentsFinancingPlan }
 * @description A Shop Pay Installments financing plan
 */
export type ShopPayInstallmentsFinancingPlan = {
  /**
   * @type { string }
   * @memberof ShopPayInstallmentsFinancingPlan
  */
  id: string | null;
    /**
   * @type { ShopPayInstallmentsFinancingPlanTerm[] }
   * @memberof ShopPayInstallmentsFinancingPlan
  */
  terms: ShopPayInstallmentsFinancingPlanTerm[];
};

export function decodeShopPayInstallmentsFinancingPlan(rawInput: unknown): ShopPayInstallmentsFinancingPlan | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTerms = decodeArray(rawInput['terms'], decodeShopPayInstallmentsFinancingPlanTerm);

    if (
      decodedTerms === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      terms: decodedTerms
    };
  }
  return null;
}


/**
 * @type { ShopPayInstallmentsFinancingPlanTerm }
 * @description A term for a financing plan
 */
export type ShopPayInstallmentsFinancingPlanTerm = {
  /**
   * @type { ShopPayInstallmentsLoanType }
   * @memberof ShopPayInstallmentsFinancingPlanTerm
  */
  loanType: ShopPayInstallmentsLoanType;
  /**
   * @description Payment amount per installment
   * @type { Money }
   * @memberof ShopPayInstallmentsFinancingPlanTerm
  */
  paymentAmount: Money;
  /**
   * @description Annual percentage rate
   * @type { number }
   * @memberof ShopPayInstallmentsFinancingPlanTerm
  */
  apr: number | null;
    /**
   * @description Number of installments
   * @type { number }
   * @memberof ShopPayInstallmentsFinancingPlanTerm
  */
  installmentsCount: number | null;
  };

export function decodeShopPayInstallmentsFinancingPlanTerm(rawInput: unknown): ShopPayInstallmentsFinancingPlanTerm | null {
  if (isJSON(rawInput)) {
    const decodedLoanType = decodeShopPayInstallmentsLoanType(rawInput['loanType']);
    const decodedPaymentAmount = decodeMoney(rawInput['paymentAmount']);
    const decodedApr = decodeNumber(rawInput['apr']);
    const decodedInstallmentsCount = decodeNumber(rawInput['installmentsCount']);

    if (
      decodedLoanType === null ||
      decodedPaymentAmount === null
    ) {
      return null;
    }

    return {
      loanType: decodedLoanType,
      paymentAmount: decodedPaymentAmount,
      apr: decodedApr,
      installmentsCount: decodedInstallmentsCount
    };
  }
  return null;
}


/**
 * @type { ShopPayInstallmentsLoanType }
 * @description The loan type for Shop Pay Installments
 */
export type ShopPayInstallmentsLoanType =
  | 'SPLIT_PAY'
  | 'INTEREST_FREE'
  | 'INTEREST_BEARING'
;

export function decodeShopPayInstallmentsLoanType(rawInput: unknown): ShopPayInstallmentsLoanType | null {
  switch (rawInput) {
    case 'SPLIT_PAY':
    case 'INTEREST_FREE':
    case 'INTEREST_BEARING':
     return rawInput;
  }
  return null;
}

export function _decodeShopPayInstallmentsLoanType(rawInput: unknown): ShopPayInstallmentsLoanType | undefined {
  switch (rawInput) {
    case 'SPLIT_PAY':
    case 'INTEREST_FREE':
    case 'INTEREST_BEARING':
    return rawInput;
  }
  return;
}

/**
 * @type { SocialLoginProvider }
 * @description A social login provider for customer accounts
 */
export type SocialLoginProvider = {
  /**
   * @type { SocialLoginProviderType }
   * @memberof SocialLoginProvider
  */
  type: SocialLoginProviderType;
  /**
   * @description Client ID for the provider
   * @type { string }
   * @memberof SocialLoginProvider
  */
  clientId: string | null;
  };

export function decodeSocialLoginProvider(rawInput: unknown): SocialLoginProvider | null {
  if (isJSON(rawInput)) {
    const decodedType = decodeSocialLoginProviderType(rawInput['type']);
    const decodedClientId = decodeString(rawInput['clientId']);

    if (
      decodedType === null
    ) {
      return null;
    }

    return {
      type: decodedType,
      clientId: decodedClientId
    };
  }
  return null;
}


/**
 * @type { SocialLoginProviderType }
 * @description Type of social login provider
 */
export type SocialLoginProviderType =
  | 'GOOGLE'
  | 'FACEBOOK'
  | 'APPLE'
;

export function decodeSocialLoginProviderType(rawInput: unknown): SocialLoginProviderType | null {
  switch (rawInput) {
    case 'GOOGLE':
    case 'FACEBOOK':
    case 'APPLE':
     return rawInput;
  }
  return null;
}

export function _decodeSocialLoginProviderType(rawInput: unknown): SocialLoginProviderType | undefined {
  switch (rawInput) {
    case 'GOOGLE':
    case 'FACEBOOK':
    case 'APPLE':
    return rawInput;
  }
  return;
}

/**
 * @type { PaymentSettings }
 * @description Shop payment settings
 */
export type PaymentSettings = {
  /**
   * @description Shop country code
   * @type { string }
   * @memberof PaymentSettings
  */
  countryCode: string;
  /**
   * @description Shop currency code
   * @type { string }
   * @memberof PaymentSettings
  */
  currencyCode: string;
  /**
   * @type { AcceptedCardBrandsItem[] }
   * @memberof PaymentSettings
  */
  acceptedCardBrands: AcceptedCardBrandsItem[] | null;
    /**
   * @description URL for card vaulting
   * @type { string }
   * @memberof PaymentSettings
  */
  cardVaultUrl: string | null;
    /**
   * @description Enabled presentment currencies
   * @type { string[] }
   * @memberof PaymentSettings
  */
  enabledPresentmentCurrencies: string[] | null;
    /**
   * @type { string }
   * @memberof PaymentSettings
  */
  shopifyPaymentsAccountId: string | null;
    /**
   * @type { SupportedDigitalWalletsItem[] }
   * @memberof PaymentSettings
  */
  supportedDigitalWallets: SupportedDigitalWalletsItem[] | null;
  };

export function decodePaymentSettings(rawInput: unknown): PaymentSettings | null {
  if (isJSON(rawInput)) {
    const decodedCountryCode = decodeString(rawInput['countryCode']);
    const decodedCurrencyCode = decodeString(rawInput['currencyCode']);
    const decodedAcceptedCardBrands = decodeArray(rawInput['acceptedCardBrands'], decodeAcceptedCardBrandsItem);
    const decodedCardVaultUrl = decodeString(rawInput['cardVaultUrl']);
    const decodedEnabledPresentmentCurrencies = decodeArray(rawInput['enabledPresentmentCurrencies'], decodeString);
    const decodedShopifyPaymentsAccountId = decodeString(rawInput['shopifyPaymentsAccountId']);
    const decodedSupportedDigitalWallets = decodeArray(rawInput['supportedDigitalWallets'], decodeSupportedDigitalWalletsItem);

    if (
      decodedCountryCode === null ||
      decodedCurrencyCode === null
    ) {
      return null;
    }

    return {
      countryCode: decodedCountryCode,
      currencyCode: decodedCurrencyCode,
      acceptedCardBrands: decodedAcceptedCardBrands,
      cardVaultUrl: decodedCardVaultUrl,
      enabledPresentmentCurrencies: decodedEnabledPresentmentCurrencies,
      shopifyPaymentsAccountId: decodedShopifyPaymentsAccountId,
      supportedDigitalWallets: decodedSupportedDigitalWallets
    };
  }
  return null;
}

/**
 * @type { AcceptedCardBrandsItem }
 */
export type AcceptedCardBrandsItem =
  | 'VISA'
  | 'MASTERCARD'
  | 'DISCOVER'
  | 'AMERICAN_EXPRESS'
  | 'DINERS_CLUB'
  | 'JCB'
  | 'EFTPOS_AU'
;

export function decodeAcceptedCardBrandsItem(rawInput: unknown): AcceptedCardBrandsItem | null {
  switch (rawInput) {
    case 'VISA':
    case 'MASTERCARD':
    case 'DISCOVER':
    case 'AMERICAN_EXPRESS':
    case 'DINERS_CLUB':
    case 'JCB':
    case 'EFTPOS_AU':
     return rawInput;
  }
  return null;
}

export function _decodeAcceptedCardBrandsItem(rawInput: unknown): AcceptedCardBrandsItem | undefined {
  switch (rawInput) {
    case 'VISA':
    case 'MASTERCARD':
    case 'DISCOVER':
    case 'AMERICAN_EXPRESS':
    case 'DINERS_CLUB':
    case 'JCB':
    case 'EFTPOS_AU':
    return rawInput;
  }
  return;
}
/**
 * @type { SupportedDigitalWalletsItem }
 */
export type SupportedDigitalWalletsItem =
  | 'APPLE_PAY'
  | 'GOOGLE_PAY'
  | 'SHOPIFY_PAY'
;

export function decodeSupportedDigitalWalletsItem(rawInput: unknown): SupportedDigitalWalletsItem | null {
  switch (rawInput) {
    case 'APPLE_PAY':
    case 'GOOGLE_PAY':
    case 'SHOPIFY_PAY':
     return rawInput;
  }
  return null;
}

export function _decodeSupportedDigitalWalletsItem(rawInput: unknown): SupportedDigitalWalletsItem | undefined {
  switch (rawInput) {
    case 'APPLE_PAY':
    case 'GOOGLE_PAY':
    case 'SHOPIFY_PAY':
    return rawInput;
  }
  return;
}




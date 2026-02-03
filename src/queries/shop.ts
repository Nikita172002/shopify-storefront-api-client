// Shop-specific fragments
export const SHOP_FRAGMENT: string = `
  fragment ShopFields on Shop {
    id
    name
    description
    moneyFormat
    brand {
      shortDescription
      slogan
      logo {
        image {
          url
          altText
        }
      }
      squareLogo {
        image {
          url
          altText
        }
      }
      coverImage {
        image {
          url
          altText
        }
      }
      colors {
        primary {
          background
          foreground
        }
        secondary {
          background
          foreground
        }
      }
    }
    primaryDomain {
      url
      host
    }
    paymentSettings {
      countryCode
      currencyCode
      acceptedCardBrands
      enabledPresentmentCurrencies
      supportedDigitalWallets
    }
    shipsToCountries
    refundPolicy {
      id
      body
      handle
      title
      url
    }
    privacyPolicy {
      id
      body
      handle
      title
      url
    }
    termsOfService {
      id
      body
      handle
      title
      url
    }
    shippingPolicy {
      id
      body
      handle
      title
      url
    }
    subscriptionPolicy {
      id
      body
      handle
      title
      url
    }
  }
`;

export const LOCALIZATION_FRAGMENT: string = `
  fragment LocalizationFields on Localization {
    availableCountries {
      isoCode
      name
      currency {
        isoCode
        name
        symbol
      }
      availableLanguages {
        isoCode
        name
        endonymName
      }
    }
    availableLanguages {
      isoCode
      name
      endonymName
    }
    country {
      isoCode
      name
      currency {
        isoCode
        name
        symbol
      }
    }
    language {
      isoCode
      name
      endonymName
    }
    market {
      id
      handle
    }
  }
`;

// Queries
export const GET_SHOP: string = `
  ${SHOP_FRAGMENT}
  query GetShop {
    shop {
      ...ShopFields
    }
  }
`;

export const GET_LOCALIZATION: string = `
  ${LOCALIZATION_FRAGMENT}
  query GetLocalization {
    localization {
      ...LocalizationFields
    }
  }
`;

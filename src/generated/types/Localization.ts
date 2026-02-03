import { isJSON, decodeString, _decodeString , decodeArray, _decodeArray  } from 'type-decoder';

/**
 * @type { Localization }
 * @description Localization information for the current context
 */
export type Localization = {
  /**
   * @type { Country[] }
   * @memberof Localization
  */
  availableCountries: Country[];
  /**
   * @type { Language[] }
   * @memberof Localization
  */
  availableLanguages: Language[];
  /**
   * @type { Country }
   * @memberof Localization
  */
  country: Country;
  /**
   * @type { Language }
   * @memberof Localization
  */
  language: Language;
  /**
   * @type { Market }
   * @memberof Localization
  */
  market: Market | null;
  };

export function decodeLocalization(rawInput: unknown): Localization | null {
  if (isJSON(rawInput)) {
    const decodedAvailableCountries = decodeArray(rawInput['availableCountries'], decodeCountry);
    const decodedAvailableLanguages = decodeArray(rawInput['availableLanguages'], decodeLanguage);
    const decodedCountry = decodeCountry(rawInput['country']);
    const decodedLanguage = decodeLanguage(rawInput['language']);
    const decodedMarket = decodeMarket(rawInput['market']);

    if (
      decodedAvailableCountries === null ||
      decodedAvailableLanguages === null ||
      decodedCountry === null ||
      decodedLanguage === null
    ) {
      return null;
    }

    return {
      availableCountries: decodedAvailableCountries,
      availableLanguages: decodedAvailableLanguages,
      country: decodedCountry,
      language: decodedLanguage,
      market: decodedMarket
    };
  }
  return null;
}


/**
 * @type { Country }
 * @description A country for localization
 */
export type Country = {
  /**
   * @description Two-letter country code (ISO 3166-1 alpha-2)
   * @type { string }
   * @memberof Country
  */
  isoCode: string;
  /**
   * @description Country name
   * @type { string }
   * @memberof Country
  */
  name: string;
  /**
   * @type { Currency }
   * @memberof Country
  */
  currency: Currency;
  /**
   * @type { Language[] }
   * @memberof Country
  */
  availableLanguages: Language[] | null;
    /**
   * @type { Market }
   * @memberof Country
  */
  market: Market | null;
  };

export function decodeCountry(rawInput: unknown): Country | null {
  if (isJSON(rawInput)) {
    const decodedIsoCode = decodeString(rawInput['isoCode']);
    const decodedName = decodeString(rawInput['name']);
    const decodedCurrency = decodeCurrency(rawInput['currency']);
    const decodedAvailableLanguages = decodeArray(rawInput['availableLanguages'], decodeLanguage);
    const decodedMarket = decodeMarket(rawInput['market']);

    if (
      decodedIsoCode === null ||
      decodedName === null ||
      decodedCurrency === null
    ) {
      return null;
    }

    return {
      isoCode: decodedIsoCode,
      name: decodedName,
      currency: decodedCurrency,
      availableLanguages: decodedAvailableLanguages,
      market: decodedMarket
    };
  }
  return null;
}


/**
 * @type { Language }
 * @description A language for localization
 */
export type Language = {
  /**
   * @description Language code (e.g., EN, FR)
   * @type { string }
   * @memberof Language
  */
  isoCode: string;
  /**
   * @description Language name in English
   * @type { string }
   * @memberof Language
  */
  name: string;
  /**
   * @description Language name in its own language
   * @type { string }
   * @memberof Language
  */
  endonymName: string | null;
  };

export function decodeLanguage(rawInput: unknown): Language | null {
  if (isJSON(rawInput)) {
    const decodedIsoCode = decodeString(rawInput['isoCode']);
    const decodedName = decodeString(rawInput['name']);
    const decodedEndonymName = decodeString(rawInput['endonymName']);

    if (
      decodedIsoCode === null ||
      decodedName === null
    ) {
      return null;
    }

    return {
      isoCode: decodedIsoCode,
      name: decodedName,
      endonymName: decodedEndonymName
    };
  }
  return null;
}


/**
 * @type { Currency }
 * @description A currency
 */
export type Currency = {
  /**
   * @description Three-letter currency code (ISO 4217)
   * @type { string }
   * @memberof Currency
  */
  isoCode: string;
  /**
   * @description Currency name
   * @type { string }
   * @memberof Currency
  */
  name: string;
  /**
   * @description Currency symbol
   * @type { string }
   * @memberof Currency
  */
  symbol: string;
};

export function decodeCurrency(rawInput: unknown): Currency | null {
  if (isJSON(rawInput)) {
    const decodedIsoCode = decodeString(rawInput['isoCode']);
    const decodedName = decodeString(rawInput['name']);
    const decodedSymbol = decodeString(rawInput['symbol']);

    if (
      decodedIsoCode === null ||
      decodedName === null ||
      decodedSymbol === null
    ) {
      return null;
    }

    return {
      isoCode: decodedIsoCode,
      name: decodedName,
      symbol: decodedSymbol
    };
  }
  return null;
}


/**
 * @type { Market }
 * @description A Shopify market
 */
export type Market = {
  /**
   * @type { string }
   * @memberof Market
  */
  id: string;
  /**
   * @type { string }
   * @memberof Market
  */
  handle: string;
};

export function decodeMarket(rawInput: unknown): Market | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedHandle = decodeString(rawInput['handle']);

    if (
      decodedId === null ||
      decodedHandle === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      handle: decodedHandle
    };
  }
  return null;
}





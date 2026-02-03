import { isJSON, decodeString, _decodeString , decodeNumber, _decodeNumber , decodeArray, _decodeArray  } from 'type-decoder';

/**
 * @type { StorefrontErrorCode }
 * @description Error codes from Storefront API
 */
export type StorefrontErrorCode =
  | 'THROTTLED'
  | 'ACCESS_DENIED'
  | 'SHOP_INACTIVE'
  | 'INTERNAL_SERVER_ERROR'
  | 'UNPROCESSABLE'
  | 'INVALID_ARGUMENT'
  | 'NOT_FOUND'
  | 'TOO_COMPLEX'
  | 'TIMEOUT'
;

export function decodeStorefrontErrorCode(rawInput: unknown): StorefrontErrorCode | null {
  switch (rawInput) {
    case 'THROTTLED':
    case 'ACCESS_DENIED':
    case 'SHOP_INACTIVE':
    case 'INTERNAL_SERVER_ERROR':
    case 'UNPROCESSABLE':
    case 'INVALID_ARGUMENT':
    case 'NOT_FOUND':
    case 'TOO_COMPLEX':
    case 'TIMEOUT':
     return rawInput;
  }
  return null;
}

export function _decodeStorefrontErrorCode(rawInput: unknown): StorefrontErrorCode | undefined {
  switch (rawInput) {
    case 'THROTTLED':
    case 'ACCESS_DENIED':
    case 'SHOP_INACTIVE':
    case 'INTERNAL_SERVER_ERROR':
    case 'UNPROCESSABLE':
    case 'INVALID_ARGUMENT':
    case 'NOT_FOUND':
    case 'TOO_COMPLEX':
    case 'TIMEOUT':
    return rawInput;
  }
  return;
}

/**
 * @type { StorefrontError }
 * @description An error from the Storefront API
 */
export type StorefrontError = {
  /**
   * @description Error message
   * @type { string }
   * @memberof StorefrontError
  */
  message: string;
  /**
   * @type { ErrorLocation[] }
   * @memberof StorefrontError
  */
  locations: ErrorLocation[] | null;
    /**
   * @description Path to the field that caused the error
   * @type { string[] }
   * @memberof StorefrontError
  */
  path: string[] | null;
    /**
   * @type { ErrorExtensions }
   * @memberof StorefrontError
  */
  extensions: ErrorExtensions | null;
  };

export function decodeStorefrontError(rawInput: unknown): StorefrontError | null {
  if (isJSON(rawInput)) {
    const decodedMessage = decodeString(rawInput['message']);
    const decodedLocations = decodeArray(rawInput['locations'], decodeErrorLocation);
    const decodedPath = decodeArray(rawInput['path'], decodeString);
    const decodedExtensions = decodeErrorExtensions(rawInput['extensions']);

    if (
      decodedMessage === null
    ) {
      return null;
    }

    return {
      message: decodedMessage,
      locations: decodedLocations,
      path: decodedPath,
      extensions: decodedExtensions
    };
  }
  return null;
}


/**
 * @type { ErrorLocation }
 * @description Location of an error in the query
 */
export type ErrorLocation = {
  /**
   * @type { number }
   * @memberof ErrorLocation
  */
  line: number;
  /**
   * @type { number }
   * @memberof ErrorLocation
  */
  column: number;
};

export function decodeErrorLocation(rawInput: unknown): ErrorLocation | null {
  if (isJSON(rawInput)) {
    const decodedLine = decodeNumber(rawInput['line']);
    const decodedColumn = decodeNumber(rawInput['column']);

    if (
      decodedLine === null ||
      decodedColumn === null
    ) {
      return null;
    }

    return {
      line: decodedLine,
      column: decodedColumn
    };
  }
  return null;
}


/**
 * @type { ErrorExtensions }
 * @description Additional error information
 */
export type ErrorExtensions = {
  /**
   * @type { StorefrontErrorCode }
   * @memberof ErrorExtensions
  */
  code: StorefrontErrorCode | null;
    /**
   * @description Request ID for debugging
   * @type { string }
   * @memberof ErrorExtensions
  */
  requestId: string | null;
  };

export function decodeErrorExtensions(rawInput: unknown): ErrorExtensions | null {
  if (isJSON(rawInput)) {
    const decodedCode = decodeStorefrontErrorCode(rawInput['code']);
    const decodedRequestId = decodeString(rawInput['requestId']);


    return {
      code: decodedCode,
      requestId: decodedRequestId
    };
  }
  return null;
}


/**
 * @type { UserError }
 * @description A user-facing error from a mutation
 */
export type UserError = {
  /**
   * @description Path to the field that caused the error
   * @type { string[] }
   * @memberof UserError
  */
  field: string[] | null;
    /**
   * @description Error message
   * @type { string }
   * @memberof UserError
  */
  message: string;
  /**
   * @description Error code
   * @type { string }
   * @memberof UserError
  */
  code: string | null;
  };

export function decodeUserError(rawInput: unknown): UserError | null {
  if (isJSON(rawInput)) {
    const decodedField = decodeArray(rawInput['field'], decodeString);
    const decodedMessage = decodeString(rawInput['message']);
    const decodedCode = decodeString(rawInput['code']);

    if (
      decodedMessage === null
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
 * @type { GraphQLResponseData }
 * @description Response data container
 */
export type GraphQLResponseData = Record<string, unknown>;

export function decodeGraphQLResponseData(rawInput: unknown): GraphQLResponseData | null {
  if (isJSON(rawInput)) {


    return {
      ...rawInput,
    };
  }
  return null;
}


/**
 * @type { GraphQLResponse }
 * @description Raw GraphQL response structure
 */
export type GraphQLResponse = {
  /**
   * @type { GraphQLResponseData }
   * @memberof GraphQLResponse
  */
  data: GraphQLResponseData | null;
    /**
   * @type { StorefrontError[] }
   * @memberof GraphQLResponse
  */
  errors: StorefrontError[] | null;
    /**
   * @type { ResponseExtensions }
   * @memberof GraphQLResponse
  */
  extensions: ResponseExtensions | null;
  };

export function decodeGraphQLResponse(rawInput: unknown): GraphQLResponse | null {
  if (isJSON(rawInput)) {
    const decodedData = decodeGraphQLResponseData(rawInput['data']);
    const decodedErrors = decodeArray(rawInput['errors'], decodeStorefrontError);
    const decodedExtensions = decodeResponseExtensions(rawInput['extensions']);


    return {
      data: decodedData,
      errors: decodedErrors,
      extensions: decodedExtensions
    };
  }
  return null;
}


/**
 * @type { ResponseExtensions }
 * @description Extensions in a GraphQL response
 */
export type ResponseExtensions = {
  /**
   * @type { QueryCost }
   * @memberof ResponseExtensions
  */
  cost: QueryCost | null;
  };

export function decodeResponseExtensions(rawInput: unknown): ResponseExtensions | null {
  if (isJSON(rawInput)) {
    const decodedCost = decodeQueryCost(rawInput['cost']);


    return {
      cost: decodedCost
    };
  }
  return null;
}


/**
 * @type { QueryCost }
 * @description Query cost information
 */
export type QueryCost = {
  /**
   * @type { number }
   * @memberof QueryCost
  */
  requestedQueryCost: number | null;
    /**
   * @type { number }
   * @memberof QueryCost
  */
  actualQueryCost: number | null;
    /**
   * @type { ThrottleStatus }
   * @memberof QueryCost
  */
  throttleStatus: ThrottleStatus | null;
  };

export function decodeQueryCost(rawInput: unknown): QueryCost | null {
  if (isJSON(rawInput)) {
    const decodedRequestedQueryCost = decodeNumber(rawInput['requestedQueryCost']);
    const decodedActualQueryCost = decodeNumber(rawInput['actualQueryCost']);
    const decodedThrottleStatus = decodeThrottleStatus(rawInput['throttleStatus']);


    return {
      requestedQueryCost: decodedRequestedQueryCost,
      actualQueryCost: decodedActualQueryCost,
      throttleStatus: decodedThrottleStatus
    };
  }
  return null;
}


/**
 * @type { ThrottleStatus }
 * @description Throttle status for rate limiting
 */
export type ThrottleStatus = {
  /**
   * @type { number }
   * @memberof ThrottleStatus
  */
  maximumAvailable: number | null;
    /**
   * @type { number }
   * @memberof ThrottleStatus
  */
  currentlyAvailable: number | null;
    /**
   * @type { number }
   * @memberof ThrottleStatus
  */
  restoreRate: number | null;
  };

export function decodeThrottleStatus(rawInput: unknown): ThrottleStatus | null {
  if (isJSON(rawInput)) {
    const decodedMaximumAvailable = decodeNumber(rawInput['maximumAvailable']);
    const decodedCurrentlyAvailable = decodeNumber(rawInput['currentlyAvailable']);
    const decodedRestoreRate = decodeNumber(rawInput['restoreRate']);


    return {
      maximumAvailable: decodedMaximumAvailable,
      currentlyAvailable: decodedCurrentlyAvailable,
      restoreRate: decodedRestoreRate
    };
  }
  return null;
}





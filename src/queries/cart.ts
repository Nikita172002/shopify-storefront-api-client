import { MONEY_FRAGMENT } from "./fragments";

// Cart-specific fragments
export const CART_LINE_FRAGMENT: string = `
  fragment CartLineFields on CartLine {
    id
    quantity
    merchandise {
      ... on ProductVariant {
        id
        title
        sku
        image {
          url
          altText
        }
        price {
          ...MoneyFields
        }
        compareAtPrice {
          ...MoneyFields
        }
        product {
          id
          handle
          title
          vendor
        }
        selectedOptions {
          name
          value
        }
      }
    }
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...MoneyFields
      }
      subtotalAmount {
        ...MoneyFields
      }
      amountPerQuantity {
        ...MoneyFields
      }
      compareAtAmountPerQuantity {
        ...MoneyFields
      }
    }
    discountAllocations {
      discountedAmount {
        ...MoneyFields
      }
    }
  }
`;

export const CART_FRAGMENT: string = `
  fragment CartFields on Cart {
    id
    checkoutUrl
    createdAt
    updatedAt
    note
    totalQuantity
    attributes {
      key
      value
    }
    buyerIdentity {
      email
      phone
      countryCode
      customer {
        id
        email
        firstName
        lastName
      }
    }
    discountCodes {
      code
      applicable
    }
    discountAllocations {
      discountedAmount {
        ...MoneyFields
      }
    }
    cost {
      totalAmount {
        ...MoneyFields
      }
      subtotalAmount {
        ...MoneyFields
      }
      totalTaxAmount {
        ...MoneyFields
      }
      totalDutyAmount {
        ...MoneyFields
      }
      checkoutChargeAmount {
        ...MoneyFields
      }
    }
    lines(first: 100) {
      nodes {
        ...CartLineFields
      }
    }
  }
`;

export const CART_USER_ERROR_FRAGMENT: string = `
  fragment UserErrorFields on CartUserError {
    field
    message
    code
  }
`;

// Mutations
export const CART_CREATE: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  ${CART_USER_ERROR_FRAGMENT}
  mutation CartCreate($input: CartInput) {
    cartCreate(input: $input) {
      cart {
        ...CartFields
      }
      userErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CART_LINES_ADD: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  ${CART_USER_ERROR_FRAGMENT}
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFields
      }
      userErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CART_LINES_UPDATE: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  ${CART_USER_ERROR_FRAGMENT}
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFields
      }
      userErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CART_LINES_REMOVE: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  ${CART_USER_ERROR_FRAGMENT}
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartFields
      }
      userErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CART_NOTE_UPDATE: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  ${CART_USER_ERROR_FRAGMENT}
  mutation CartNoteUpdate($cartId: ID!, $note: String!) {
    cartNoteUpdate(cartId: $cartId, note: $note) {
      cart {
        ...CartFields
      }
      userErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CART_ATTRIBUTES_UPDATE: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  ${CART_USER_ERROR_FRAGMENT}
  mutation CartAttributesUpdate($cartId: ID!, $attributes: [AttributeInput!]!) {
    cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
      cart {
        ...CartFields
      }
      userErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CART_BUYER_IDENTITY_UPDATE: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  ${CART_USER_ERROR_FRAGMENT}
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartFields
      }
      userErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CART_DISCOUNT_CODES_UPDATE: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  ${CART_USER_ERROR_FRAGMENT}
  mutation CartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!]!) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...CartFields
      }
      userErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CART_GIFT_CARD_CODES_ADD: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  ${CART_USER_ERROR_FRAGMENT}
  mutation CartGiftCardCodesAdd($cartId: ID!, $giftCardCodes: [String!]!) {
    cartGiftCardCodesAdd(cartId: $cartId, giftCardCodes: $giftCardCodes) {
      cart {
        ...CartFields
      }
      userErrors {
        ...UserErrorFields
      }
    }
  }
`;

// Queries
export const GET_CART: string = `
  ${MONEY_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}
  query GetCart($id: ID!) {
    cart(id: $id) {
      ...CartFields
    }
  }
`;

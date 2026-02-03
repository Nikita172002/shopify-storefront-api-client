import { MONEY_FRAGMENT } from "./fragments";

// Customer-specific fragments
export const ADDRESS_FRAGMENT: string = `
  fragment AddressFields on MailingAddress {
    id
    firstName
    lastName
    name
    company
    address1
    address2
    city
    province
    provinceCode
    country
    countryCodeV2
    zip
    phone
    formatted
    formattedArea
    latitude
    longitude
  }
`;

export const ORDER_FRAGMENT: string = `
  fragment OrderFields on Order {
    id
    name
    orderNumber
    processedAt
    canceledAt
    cancelReason
    fulfillmentStatus
    financialStatus
    statusUrl
    email
    phone
    currencyCode
    currentTotalPrice {
      ...MoneyFields
    }
    currentSubtotalPrice {
      ...MoneyFields
    }
    currentTotalTax {
      ...MoneyFields
    }
    totalPrice {
      ...MoneyFields
    }
    subtotalPrice {
      ...MoneyFields
    }
    totalShippingPrice {
      ...MoneyFields
    }
    totalTax {
      ...MoneyFields
    }
    totalRefunded {
      ...MoneyFields
    }
    shippingAddress {
      ...AddressFields
    }
    lineItems(first: 50) {
      edges {
        node {
          title
          quantity
          currentQuantity
          originalTotalPrice {
            ...MoneyFields
          }
          discountedTotalPrice {
            ...MoneyFields
          }
          variant {
            id
            title
            sku
            image {
              url
              altText
            }
            product {
              id
              handle
              title
            }
          }
        }
      }
    }
  }
`;

export const CUSTOMER_FRAGMENT: string = `
  fragment CustomerFields on Customer {
    id
    email
    firstName
    lastName
    displayName
    phone
    acceptsMarketing
    createdAt
    updatedAt
    numberOfOrders
    tags
    defaultAddress {
      ...AddressFields
    }
  }
`;

export const CUSTOMER_USER_ERROR_FRAGMENT: string = `
  fragment UserErrorFields on CustomerUserError {
    field
    message
    code
  }
`;

// Mutations
export const CUSTOMER_ACCESS_TOKEN_CREATE: string = `
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_ACCESS_TOKEN_RENEW: string = `
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerAccessTokenRenew($customerAccessToken: String!) {
    customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const CUSTOMER_ACCESS_TOKEN_DELETE: string = `
  mutation CustomerAccessTokenDelete($customerAccessToken: String!) {
    customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
      deletedAccessToken
      deletedCustomerAccessTokenId
      userErrors {
        field
        message
      }
    }
  }
`;

export const CUSTOMER_CREATE: string = `
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        firstName
        lastName
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_UPDATE: string = `
  ${MONEY_FRAGMENT}
  ${ADDRESS_FRAGMENT}
  ${CUSTOMER_FRAGMENT}
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        ...CustomerFields
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_RECOVER: string = `
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_RESET: string = `
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerReset($id: ID!, $input: CustomerResetInput!) {
    customerReset(id: $id, input: $input) {
      customer {
        id
        email
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_RESET_BY_URL: string = `
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerResetByUrl($resetUrl: URL!, $password: String!) {
    customerResetByUrl(resetUrl: $resetUrl, password: $password) {
      customer {
        id
        email
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_ACTIVATE: string = `
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerActivate($id: ID!, $input: CustomerActivateInput!) {
    customerActivate(id: $id, input: $input) {
      customer {
        id
        email
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_ACTIVATE_BY_URL: string = `
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerActivateByUrl($activationUrl: URL!, $password: String!) {
    customerActivateByUrl(activationUrl: $activationUrl, password: $password) {
      customer {
        id
        email
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_ADDRESS_CREATE: string = `
  ${ADDRESS_FRAGMENT}
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerAddressCreate($customerAccessToken: String!, $address: MailingAddressInput!) {
    customerAddressCreate(customerAccessToken: $customerAccessToken, address: $address) {
      customerAddress {
        ...AddressFields
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_ADDRESS_UPDATE: string = `
  ${ADDRESS_FRAGMENT}
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerAddressUpdate($customerAccessToken: String!, $id: ID!, $address: MailingAddressInput!) {
    customerAddressUpdate(customerAccessToken: $customerAccessToken, id: $id, address: $address) {
      customerAddress {
        ...AddressFields
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_ADDRESS_DELETE: string = `
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerAddressDelete($customerAccessToken: String!, $id: ID!) {
    customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
      deletedCustomerAddressId
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

export const CUSTOMER_DEFAULT_ADDRESS_UPDATE: string = `
  ${MONEY_FRAGMENT}
  ${ADDRESS_FRAGMENT}
  ${CUSTOMER_FRAGMENT}
  ${CUSTOMER_USER_ERROR_FRAGMENT}
  mutation CustomerDefaultAddressUpdate($customerAccessToken: String!, $addressId: ID!) {
    customerDefaultAddressUpdate(customerAccessToken: $customerAccessToken, addressId: $addressId) {
      customer {
        ...CustomerFields
      }
      customerUserErrors {
        ...UserErrorFields
      }
    }
  }
`;

// Queries
export const GET_CUSTOMER: string = `
  ${MONEY_FRAGMENT}
  ${ADDRESS_FRAGMENT}
  ${ORDER_FRAGMENT}
  ${CUSTOMER_FRAGMENT}
  query GetCustomer(
    $customerAccessToken: String!
    $addressesFirst: Int
    $ordersFirst: Int
  ) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerFields
      addresses(first: $addressesFirst) {
        edges {
          node {
            ...AddressFields
          }
        }
      }
      orders(first: $ordersFirst) {
        edges {
          node {
            ...OrderFields
          }
        }
      }
    }
  }
`;

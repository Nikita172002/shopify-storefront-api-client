// Common GraphQL Fragments shared across multiple queries

export const MONEY_FRAGMENT: string = `
  fragment MoneyFields on MoneyV2 {
    amount
    currencyCode
  }
`;

export const IMAGE_FRAGMENT: string = `
  fragment ImageFields on Image {
    id
    url
    altText
    width
    height
  }
`;

export const SEO_FRAGMENT: string = `
  fragment SEOFields on SEO {
    title
    description
  }
`;

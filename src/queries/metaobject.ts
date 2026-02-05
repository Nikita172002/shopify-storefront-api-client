// Metaobject-specific fragments
export const METAOBJECT_FIELD_FRAGMENT: string = `
  fragment MetaobjectFieldFields on MetaobjectField {
    key
    value
    type
    reference {
      __typename
      ... on Product {
        id
        handle
        title
      }
      ... on Collection {
        id
        handle
        title
      }
      ... on Page {
        id
        handle
        title
      }
      ... on MediaImage {
        id
        image {
          url
          altText
          width
          height
        }
      }
      ... on Metaobject {
        id
        handle
        type
      }
    }
    references(first: 10) {
      nodes {
        __typename
        ... on Product {
          id
          handle
          title
        }
        ... on Collection {
          id
          handle
          title
        }
        ... on Page {
          id
          handle
          title
        }
        ... on MediaImage {
          id
          image {
            url
            altText
            width
            height
          }
        }
        ... on Metaobject {
          id
          handle
          type
        }
      }
    }
  }
`;

export const METAOBJECT_FRAGMENT: string = `
  fragment MetaobjectFields on Metaobject {
    id
    handle
    type
    updatedAt
    fields {
      ...MetaobjectFieldFields
    }
  }
`;

// Queries
export const GET_METAOBJECT_BY_ID: string = `
  ${METAOBJECT_FIELD_FRAGMENT}
  ${METAOBJECT_FRAGMENT}
  query GetMetaobjectById($id: ID!) {
    metaobject(id: $id) {
      ...MetaobjectFields
    }
  }
`;

export const GET_METAOBJECT_BY_HANDLE: string = `
  ${METAOBJECT_FIELD_FRAGMENT}
  ${METAOBJECT_FRAGMENT}
  query GetMetaobjectByHandle($handle: MetaobjectHandleInput!) {
    metaobject(handle: $handle) {
      ...MetaobjectFields
    }
  }
`;

export const GET_METAOBJECTS: string = `
  ${METAOBJECT_FIELD_FRAGMENT}
  ${METAOBJECT_FRAGMENT}
  query GetMetaobjects(
    $type: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $reverse: Boolean
    $sortKey: String
  ) {
    metaobjects(
      type: $type
      first: $first
      after: $after
      last: $last
      before: $before
      reverse: $reverse
      sortKey: $sortKey
    ) {
      nodes {
        ...MetaobjectFields
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

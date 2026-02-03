import { IMAGE_FRAGMENT, SEO_FRAGMENT } from "./fragments";

// Content-specific fragments
export const PAGE_FRAGMENT: string = `
  fragment PageFields on Page {
    id
    handle
    title
    body
    bodySummary
    createdAt
    updatedAt
    onlineStoreUrl
    seo {
      ...SEOFields
    }
  }
`;

export const BLOG_FRAGMENT: string = `
  fragment BlogFields on Blog {
    id
    handle
    title
    onlineStoreUrl
    seo {
      ...SEOFields
    }
  }
`;

export const ARTICLE_FRAGMENT: string = `
  fragment ArticleFields on Article {
    id
    handle
    title
    content
    contentHtml
    excerpt
    excerptHtml
    publishedAt
    tags
    onlineStoreUrl
    image {
      ...ImageFields
    }
    seo {
      ...SEOFields
    }
    author {
      name
      email
      bio
    }
    blog {
      id
      handle
      title
    }
  }
`;

export const MENU_ITEM_FRAGMENT: string = `
  fragment MenuItemFields on MenuItem {
    id
    title
    type
    url
    items {
      id
      title
      type
      url
      items {
        id
        title
        type
        url
      }
    }
  }
`;

export const MENU_FRAGMENT: string = `
  fragment MenuFields on Menu {
    id
    handle
    title
    items {
      ...MenuItemFields
    }
  }
`;

// Queries
export const GET_PAGE_BY_ID: string = `
  ${SEO_FRAGMENT}
  ${PAGE_FRAGMENT}
  query GetPageById($id: ID!) {
    page(id: $id) {
      ...PageFields
    }
  }
`;

export const GET_PAGE_BY_HANDLE: string = `
  ${SEO_FRAGMENT}
  ${PAGE_FRAGMENT}
  query GetPageByHandle($handle: String!) {
    page(handle: $handle) {
      ...PageFields
    }
  }
`;

export const GET_PAGES: string = `
  ${SEO_FRAGMENT}
  ${PAGE_FRAGMENT}
  query GetPages(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $reverse: Boolean
    $sortKey: PageSortKeys
    $query: String
  ) {
    pages(
      first: $first
      after: $after
      last: $last
      before: $before
      reverse: $reverse
      sortKey: $sortKey
      query: $query
    ) {
      edges {
        node {
          ...PageFields
        }
        cursor
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

export const GET_BLOG_BY_ID: string = `
  ${SEO_FRAGMENT}
  ${BLOG_FRAGMENT}
  query GetBlogById($id: ID!) {
    blog(id: $id) {
      ...BlogFields
    }
  }
`;

export const GET_BLOG_BY_HANDLE: string = `
  ${SEO_FRAGMENT}
  ${BLOG_FRAGMENT}
  query GetBlogByHandle($handle: String!) {
    blog(handle: $handle) {
      ...BlogFields
    }
  }
`;

export const GET_BLOGS: string = `
  ${SEO_FRAGMENT}
  ${BLOG_FRAGMENT}
  query GetBlogs(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $reverse: Boolean
    $sortKey: BlogSortKeys
    $query: String
  ) {
    blogs(
      first: $first
      after: $after
      last: $last
      before: $before
      reverse: $reverse
      sortKey: $sortKey
      query: $query
    ) {
      edges {
        node {
          ...BlogFields
        }
        cursor
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

export const GET_BLOG_WITH_ARTICLES: string = `
  ${IMAGE_FRAGMENT}
  ${SEO_FRAGMENT}
  ${BLOG_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  query GetBlogWithArticles(
    $id: ID
    $handle: String
    $articlesFirst: Int
    $articlesAfter: String
    $articlesReverse: Boolean
    $articlesSortKey: ArticleSortKeys
  ) {
    blog(id: $id, handle: $handle) {
      ...BlogFields
      articles(
        first: $articlesFirst
        after: $articlesAfter
        reverse: $articlesReverse
        sortKey: $articlesSortKey
      ) {
        edges {
          node {
            ...ArticleFields
          }
          cursor
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

export const GET_ARTICLE_BY_ID: string = `
  ${IMAGE_FRAGMENT}
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  query GetArticleById($id: ID!) {
    article(id: $id) {
      ...ArticleFields
    }
  }
`;

export const GET_ARTICLES: string = `
  ${IMAGE_FRAGMENT}
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  query GetArticles(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $reverse: Boolean
    $sortKey: ArticleSortKeys
    $query: String
  ) {
    articles(
      first: $first
      after: $after
      last: $last
      before: $before
      reverse: $reverse
      sortKey: $sortKey
      query: $query
    ) {
      edges {
        node {
          ...ArticleFields
        }
        cursor
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

export const GET_MENU: string = `
  ${MENU_ITEM_FRAGMENT}
  ${MENU_FRAGMENT}
  query GetMenu($handle: String!) {
    menu(handle: $handle) {
      ...MenuFields
    }
  }
`;

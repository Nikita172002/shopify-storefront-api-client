import { type SEO, decodeSEO,  type MetafieldParentResourceTypename, decodeMetafieldParentResourceTypename,  type MetafieldParentResource, decodeMetafieldParentResource,  type MetafieldReferenceTypename, decodeMetafieldReferenceTypename,  type Image, decodeImage,  type VideoSource, decodeVideoSource,  type Model3dSource, decodeModel3dSource,  type MetafieldReference, decodeMetafieldReference,  type MetafieldReferenceEdge, decodeMetafieldReferenceEdge,  type PageInfo, decodePageInfo,  type MetafieldReferenceConnection, decodeMetafieldReferenceConnection,  type Metafield, decodeMetafield  } from './index';
import { isJSON, decodeString, _decodeString , decodeNumber, _decodeNumber , decodeArray, _decodeArray , decodeBoolean, _decodeBoolean  } from 'type-decoder';

/**
 * @type { Page }
 * @description A page holding static HTML content
 */
export type Page = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Page
  */
  id: string;
  /**
   * @description Page title
   * @type { string }
   * @memberof Page
  */
  title: string;
  /**
   * @description URL-friendly identifier
   * @type { string }
   * @memberof Page
  */
  handle: string;
  /**
   * @description Page content (HTML)
   * @type { string }
   * @memberof Page
  */
  body: string;
  /**
   * @description Summary of the page content
   * @type { string }
   * @memberof Page
  */
  bodySummary: string;
  /**
   * @description When the page was created
   * @type { string }
   * @memberof Page
  */
  createdAt: string | null;
    /**
   * @description When the page was last updated
   * @type { string }
   * @memberof Page
  */
  updatedAt: string | null;
    /**
   * @description SEO information for the page
   * @type { SEO }
   * @memberof Page
  */
  seo: SEO | null;
    /**
   * @description A custom field associated with the page
   * @type { Metafield }
   * @memberof Page
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields
   * @type { Metafield[] }
   * @memberof Page
  */
  metafields: Metafield[] | null;
    /**
   * @description URL on the online store (null if not published)
   * @type { string }
   * @memberof Page
  */
  onlineStoreUrl: string | null;
    /**
   * @description URL parameters for analytics tracking
   * @type { string }
   * @memberof Page
  */
  trackingParameters: string | null;
  };

export function decodePage(rawInput: unknown): Page | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedBody = decodeString(rawInput['body']);
    const decodedBodySummary = decodeString(rawInput['bodySummary']);
    const decodedCreatedAt = decodeString(rawInput['createdAt']);
    const decodedUpdatedAt = decodeString(rawInput['updatedAt']);
    const decodedSeo = decodeSEO(rawInput['seo']);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);
    const decodedOnlineStoreUrl = decodeString(rawInput['onlineStoreUrl']);
    const decodedTrackingParameters = decodeString(rawInput['trackingParameters']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedHandle === null ||
      decodedBody === null ||
      decodedBodySummary === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle,
      body: decodedBody,
      bodySummary: decodedBodySummary,
      createdAt: decodedCreatedAt,
      updatedAt: decodedUpdatedAt,
      seo: decodedSeo,
      metafield: decodedMetafield,
      metafields: decodedMetafields,
      onlineStoreUrl: decodedOnlineStoreUrl,
      trackingParameters: decodedTrackingParameters
    };
  }
  return null;
}


/**
 * @type { PageConnection }
 * @description Paginated list of pages
 */
export type PageConnection = {
  /**
   * @type { PageEdge[] }
   * @memberof PageConnection
  */
  edges: PageEdge[];
  /**
   * @type { PageInfo }
   * @memberof PageConnection
  */
  pageInfo: PageInfo;
};

export function decodePageConnection(rawInput: unknown): PageConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodePageEdge);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null ||
      decodedPageInfo === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { PageEdge }
 * @description An edge in a page connection
 */
export type PageEdge = {
  /**
   * @type { Page }
   * @memberof PageEdge
  */
  node: Page;
  /**
   * @type { string }
   * @memberof PageEdge
  */
  cursor: string;
};

export function decodePageEdge(rawInput: unknown): PageEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodePage(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null ||
      decodedCursor === null
    ) {
      return null;
    }

    return {
      node: decodedNode,
      cursor: decodedCursor
    };
  }
  return null;
}


/**
 * @type { Blog }
 * @description A blog containing articles
 */
export type Blog = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Blog
  */
  id: string;
  /**
   * @description Blog title
   * @type { string }
   * @memberof Blog
  */
  title: string;
  /**
   * @description URL-friendly identifier
   * @type { string }
   * @memberof Blog
  */
  handle: string;
  /**
   * @description SEO information for the blog
   * @type { SEO }
   * @memberof Blog
  */
  seo: SEO | null;
    /**
   * @description Articles in the blog
   * @type { ArticleConnection }
   * @memberof Blog
  */
  articles: ArticleConnection | null;
    /**
   * @description Authors who have written articles in this blog
   * @type { ArticleAuthor[] }
   * @memberof Blog
  */
  authors: ArticleAuthor[] | null;
    /**
   * @description A custom field associated with the blog
   * @type { Metafield }
   * @memberof Blog
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields
   * @type { Metafield[] }
   * @memberof Blog
  */
  metafields: Metafield[] | null;
    /**
   * @description URL on the online store
   * @type { string }
   * @memberof Blog
  */
  onlineStoreUrl: string | null;
  };

export function decodeBlog(rawInput: unknown): Blog | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedSeo = decodeSEO(rawInput['seo']);
    const decodedArticles = decodeArticleConnection(rawInput['articles']);
    const decodedAuthors = decodeArray(rawInput['authors'], decodeArticleAuthor);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);
    const decodedOnlineStoreUrl = decodeString(rawInput['onlineStoreUrl']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedHandle === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle,
      seo: decodedSeo,
      articles: decodedArticles,
      authors: decodedAuthors,
      metafield: decodedMetafield,
      metafields: decodedMetafields,
      onlineStoreUrl: decodedOnlineStoreUrl
    };
  }
  return null;
}


/**
 * @type { BlogConnection }
 * @description Paginated list of blogs
 */
export type BlogConnection = {
  /**
   * @type { BlogEdge[] }
   * @memberof BlogConnection
  */
  edges: BlogEdge[];
  /**
   * @type { PageInfo }
   * @memberof BlogConnection
  */
  pageInfo: PageInfo;
};

export function decodeBlogConnection(rawInput: unknown): BlogConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeBlogEdge);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null ||
      decodedPageInfo === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { BlogEdge }
 * @description An edge in a blog connection
 */
export type BlogEdge = {
  /**
   * @type { Blog }
   * @memberof BlogEdge
  */
  node: Blog;
  /**
   * @type { string }
   * @memberof BlogEdge
  */
  cursor: string;
};

export function decodeBlogEdge(rawInput: unknown): BlogEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeBlog(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null ||
      decodedCursor === null
    ) {
      return null;
    }

    return {
      node: decodedNode,
      cursor: decodedCursor
    };
  }
  return null;
}


/**
 * @type { Article }
 * @description A blog article
 */
export type Article = {
  /**
   * @description Globally unique identifier
   * @type { string }
   * @memberof Article
  */
  id: string;
  /**
   * @description Article title
   * @type { string }
   * @memberof Article
  */
  title: string;
  /**
   * @description URL-friendly identifier
   * @type { string }
   * @memberof Article
  */
  handle: string;
  /**
   * @description Article content (plain text)
   * @type { string }
   * @memberof Article
  */
  content: string | null;
    /**
   * @description Article content (HTML)
   * @type { string }
   * @memberof Article
  */
  contentHtml: string | null;
    /**
   * @description Article excerpt (plain text)
   * @type { string }
   * @memberof Article
  */
  excerpt: string | null;
    /**
   * @description Article excerpt (HTML)
   * @type { string }
   * @memberof Article
  */
  excerptHtml: string | null;
    /**
   * @description When the article was published
   * @type { string }
   * @memberof Article
  */
  publishedAt: string | null;
    /**
   * @description The author of the article
   * @type { ArticleAuthor }
   * @memberof Article
  */
  authorV2: ArticleAuthor | null;
    /**
   * @description Featured image for the article
   * @type { Image }
   * @memberof Article
  */
  image: Image | null;
    /**
   * @description SEO information for the article
   * @type { SEO }
   * @memberof Article
  */
  seo: SEO | null;
    /**
   * @description Tags associated with the article
   * @type { string[] }
   * @memberof Article
  */
  tags: string[] | null;
    /**
   * @description The blog this article belongs to
   * @type { BlogSummary }
   * @memberof Article
  */
  blog: BlogSummary | null;
    /**
   * @description A custom field associated with the article
   * @type { Metafield }
   * @memberof Article
  */
  metafield: Metafield | null;
    /**
   * @description List of custom fields
   * @type { Metafield[] }
   * @memberof Article
  */
  metafields: Metafield[] | null;
    /**
   * @description URL on the online store
   * @type { string }
   * @memberof Article
  */
  onlineStoreUrl: string | null;
    /**
   * @description URL parameters for analytics tracking
   * @type { string }
   * @memberof Article
  */
  trackingParameters: string | null;
  };

export function decodeArticle(rawInput: unknown): Article | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedContent = decodeString(rawInput['content']);
    const decodedContentHtml = decodeString(rawInput['contentHtml']);
    const decodedExcerpt = decodeString(rawInput['excerpt']);
    const decodedExcerptHtml = decodeString(rawInput['excerptHtml']);
    const decodedPublishedAt = decodeString(rawInput['publishedAt']);
    const decodedAuthorV2 = decodeArticleAuthor(rawInput['authorV2']);
    const decodedImage = decodeImage(rawInput['image']);
    const decodedSeo = decodeSEO(rawInput['seo']);
    const decodedTags = decodeArray(rawInput['tags'], decodeString);
    const decodedBlog = decodeBlogSummary(rawInput['blog']);
    const decodedMetafield = decodeMetafield(rawInput['metafield']);
    const decodedMetafields = decodeArray(rawInput['metafields'], decodeMetafield);
    const decodedOnlineStoreUrl = decodeString(rawInput['onlineStoreUrl']);
    const decodedTrackingParameters = decodeString(rawInput['trackingParameters']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedHandle === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle,
      content: decodedContent,
      contentHtml: decodedContentHtml,
      excerpt: decodedExcerpt,
      excerptHtml: decodedExcerptHtml,
      publishedAt: decodedPublishedAt,
      authorV2: decodedAuthorV2,
      image: decodedImage,
      seo: decodedSeo,
      tags: decodedTags,
      blog: decodedBlog,
      metafield: decodedMetafield,
      metafields: decodedMetafields,
      onlineStoreUrl: decodedOnlineStoreUrl,
      trackingParameters: decodedTrackingParameters
    };
  }
  return null;
}


/**
 * @type { ArticleAuthor }
 * @description An article author
 */
export type ArticleAuthor = {
  /**
   * @type { string }
   * @memberof ArticleAuthor
  */
  name: string | null;
    /**
   * @type { string }
   * @memberof ArticleAuthor
  */
  bio: string | null;
    /**
   * @type { string }
   * @memberof ArticleAuthor
  */
  email: string | null;
    /**
   * @type { string }
   * @memberof ArticleAuthor
  */
  firstName: string | null;
    /**
   * @type { string }
   * @memberof ArticleAuthor
  */
  lastName: string | null;
  };

export function decodeArticleAuthor(rawInput: unknown): ArticleAuthor | null {
  if (isJSON(rawInput)) {
    const decodedName = decodeString(rawInput['name']);
    const decodedBio = decodeString(rawInput['bio']);
    const decodedEmail = decodeString(rawInput['email']);
    const decodedFirstName = decodeString(rawInput['firstName']);
    const decodedLastName = decodeString(rawInput['lastName']);


    return {
      name: decodedName,
      bio: decodedBio,
      email: decodedEmail,
      firstName: decodedFirstName,
      lastName: decodedLastName
    };
  }
  return null;
}


/**
 * @type { BlogSummary }
 * @description Minimal blog info for nested references
 */
export type BlogSummary = {
  /**
   * @type { string }
   * @memberof BlogSummary
  */
  id: string;
  /**
   * @type { string }
   * @memberof BlogSummary
  */
  title: string;
  /**
   * @type { string }
   * @memberof BlogSummary
  */
  handle: string;
};

export function decodeBlogSummary(rawInput: unknown): BlogSummary | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedHandle === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle
    };
  }
  return null;
}


/**
 * @type { ArticleConnection }
 * @description Paginated list of articles
 */
export type ArticleConnection = {
  /**
   * @type { ArticleEdge[] }
   * @memberof ArticleConnection
  */
  edges: ArticleEdge[];
  /**
   * @type { PageInfo }
   * @memberof ArticleConnection
  */
  pageInfo: PageInfo;
};

export function decodeArticleConnection(rawInput: unknown): ArticleConnection | null {
  if (isJSON(rawInput)) {
    const decodedEdges = decodeArray(rawInput['edges'], decodeArticleEdge);
    const decodedPageInfo = decodePageInfo(rawInput['pageInfo']);

    if (
      decodedEdges === null ||
      decodedPageInfo === null
    ) {
      return null;
    }

    return {
      edges: decodedEdges,
      pageInfo: decodedPageInfo
    };
  }
  return null;
}


/**
 * @type { ArticleEdge }
 * @description An edge in an article connection
 */
export type ArticleEdge = {
  /**
   * @type { Article }
   * @memberof ArticleEdge
  */
  node: Article;
  /**
   * @type { string }
   * @memberof ArticleEdge
  */
  cursor: string;
};

export function decodeArticleEdge(rawInput: unknown): ArticleEdge | null {
  if (isJSON(rawInput)) {
    const decodedNode = decodeArticle(rawInput['node']);
    const decodedCursor = decodeString(rawInput['cursor']);

    if (
      decodedNode === null ||
      decodedCursor === null
    ) {
      return null;
    }

    return {
      node: decodedNode,
      cursor: decodedCursor
    };
  }
  return null;
}


/**
 * @type { Menu }
 * @description A navigation menu
 */
export type Menu = {
  /**
   * @type { string }
   * @memberof Menu
  */
  id: string;
  /**
   * @type { string }
   * @memberof Menu
  */
  handle: string;
  /**
   * @type { string }
   * @memberof Menu
  */
  title: string;
  /**
   * @type { MenuItem[] }
   * @memberof Menu
  */
  items: MenuItem[];
};

export function decodeMenu(rawInput: unknown): Menu | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedHandle = decodeString(rawInput['handle']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedItems = decodeArray(rawInput['items'], decodeMenuItem);

    if (
      decodedId === null ||
      decodedHandle === null ||
      decodedTitle === null ||
      decodedItems === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      handle: decodedHandle,
      title: decodedTitle,
      items: decodedItems
    };
  }
  return null;
}


/**
 * @type { MenuItemType }
 * @description Type of menu item
 */
export type MenuItemType =
  | 'HTTP'
  | 'COLLECTION'
  | 'PRODUCT'
  | 'PAGE'
  | 'BLOG'
  | 'ARTICLE'
  | 'SHOP_POLICY'
  | 'SEARCH'
  | 'CATALOG'
  | 'FRONTPAGE'
;

export function decodeMenuItemType(rawInput: unknown): MenuItemType | null {
  switch (rawInput) {
    case 'HTTP':
    case 'COLLECTION':
    case 'PRODUCT':
    case 'PAGE':
    case 'BLOG':
    case 'ARTICLE':
    case 'SHOP_POLICY':
    case 'SEARCH':
    case 'CATALOG':
    case 'FRONTPAGE':
     return rawInput;
  }
  return null;
}

export function _decodeMenuItemType(rawInput: unknown): MenuItemType | undefined {
  switch (rawInput) {
    case 'HTTP':
    case 'COLLECTION':
    case 'PRODUCT':
    case 'PAGE':
    case 'BLOG':
    case 'ARTICLE':
    case 'SHOP_POLICY':
    case 'SEARCH':
    case 'CATALOG':
    case 'FRONTPAGE':
    return rawInput;
  }
  return;
}

/**
 * @type { MenuItemResourceType }
 * @description Type of resource a menu item links to
 */
export type MenuItemResourceType =
  | 'Collection'
  | 'Product'
  | 'Page'
  | 'Blog'
  | 'Article'
  | 'ShopPolicy'
;

export function decodeMenuItemResourceType(rawInput: unknown): MenuItemResourceType | null {
  switch (rawInput) {
    case 'Collection':
    case 'Product':
    case 'Page':
    case 'Blog':
    case 'Article':
    case 'ShopPolicy':
     return rawInput;
  }
  return null;
}

export function _decodeMenuItemResourceType(rawInput: unknown): MenuItemResourceType | undefined {
  switch (rawInput) {
    case 'Collection':
    case 'Product':
    case 'Page':
    case 'Blog':
    case 'Article':
    case 'ShopPolicy':
    return rawInput;
  }
  return;
}

/**
 * @type { MenuItem }
 * @description A menu item
 */
export type MenuItem = {
  /**
   * @type { string }
   * @memberof MenuItem
  */
  id: string;
  /**
   * @type { string }
   * @memberof MenuItem
  */
  title: string;
  /**
   * @type { MenuItemType }
   * @memberof MenuItem
  */
  type: MenuItemType;
  /**
   * @type { string }
   * @memberof MenuItem
  */
  url: string;
  /**
   * @description Nested menu items
   * @type { MenuItem[] }
   * @memberof MenuItem
  */
  children: MenuItem[] | null;
    /**
   * @type { MenuItemResource }
   * @memberof MenuItem
  */
  resource: MenuItemResource | null;
  };

export function decodeMenuItem(rawInput: unknown): MenuItem | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedType = decodeMenuItemType(rawInput['type']);
    const decodedUrl = decodeString(rawInput['url']);
    const decodedChildren = decodeArray(rawInput['children'], decodeMenuItem);
    const decodedResource = decodeMenuItemResource(rawInput['resource']);

    if (
      decodedId === null ||
      decodedTitle === null ||
      decodedType === null ||
      decodedUrl === null
    ) {
      return null;
    }

    return {
      id: decodedId,
      title: decodedTitle,
      type: decodedType,
      url: decodedUrl,
      children: decodedChildren,
      resource: decodedResource
    };
  }
  return null;
}


/**
 * @type { MenuItemResource }
 * @description The resource a menu item links to
 */
export type MenuItemResource = {
  /**
   * @type { MenuItemResourceType }
   * @memberof MenuItemResource
  */
  resourceType: MenuItemResourceType | null;
    /**
   * @type { string }
   * @memberof MenuItemResource
  */
  id: string | null;
    /**
   * @type { string }
   * @memberof MenuItemResource
  */
  title: string | null;
    /**
   * @type { string }
   * @memberof MenuItemResource
  */
  handle: string | null;
  };

export function decodeMenuItemResource(rawInput: unknown): MenuItemResource | null {
  if (isJSON(rawInput)) {
    const decodedResourceType = decodeMenuItemResourceType(rawInput['resourceType']);
    const decodedId = decodeString(rawInput['id']);
    const decodedTitle = decodeString(rawInput['title']);
    const decodedHandle = decodeString(rawInput['handle']);


    return {
      resourceType: decodedResourceType,
      id: decodedId,
      title: decodedTitle,
      handle: decodedHandle
    };
  }
  return null;
}


/**
 * @type { PageSortKeys }
 * @description Sort keys for page queries
 */
export type PageSortKeys =
  | 'TITLE'
  | 'UPDATED_AT'
  | 'ID'
  | 'RELEVANCE'
;

export function decodePageSortKeys(rawInput: unknown): PageSortKeys | null {
  switch (rawInput) {
    case 'TITLE':
    case 'UPDATED_AT':
    case 'ID':
    case 'RELEVANCE':
     return rawInput;
  }
  return null;
}

export function _decodePageSortKeys(rawInput: unknown): PageSortKeys | undefined {
  switch (rawInput) {
    case 'TITLE':
    case 'UPDATED_AT':
    case 'ID':
    case 'RELEVANCE':
    return rawInput;
  }
  return;
}

/**
 * @type { BlogSortKeys }
 * @description Sort keys for blog queries
 */
export type BlogSortKeys =
  | 'TITLE'
  | 'HANDLE'
  | 'ID'
  | 'RELEVANCE'
;

export function decodeBlogSortKeys(rawInput: unknown): BlogSortKeys | null {
  switch (rawInput) {
    case 'TITLE':
    case 'HANDLE':
    case 'ID':
    case 'RELEVANCE':
     return rawInput;
  }
  return null;
}

export function _decodeBlogSortKeys(rawInput: unknown): BlogSortKeys | undefined {
  switch (rawInput) {
    case 'TITLE':
    case 'HANDLE':
    case 'ID':
    case 'RELEVANCE':
    return rawInput;
  }
  return;
}

/**
 * @type { ArticleSortKeys }
 * @description Sort keys for article queries
 */
export type ArticleSortKeys =
  | 'TITLE'
  | 'BLOG_TITLE'
  | 'AUTHOR'
  | 'UPDATED_AT'
  | 'PUBLISHED_AT'
  | 'ID'
  | 'RELEVANCE'
;

export function decodeArticleSortKeys(rawInput: unknown): ArticleSortKeys | null {
  switch (rawInput) {
    case 'TITLE':
    case 'BLOG_TITLE':
    case 'AUTHOR':
    case 'UPDATED_AT':
    case 'PUBLISHED_AT':
    case 'ID':
    case 'RELEVANCE':
     return rawInput;
  }
  return null;
}

export function _decodeArticleSortKeys(rawInput: unknown): ArticleSortKeys | undefined {
  switch (rawInput) {
    case 'TITLE':
    case 'BLOG_TITLE':
    case 'AUTHOR':
    case 'UPDATED_AT':
    case 'PUBLISHED_AT':
    case 'ID':
    case 'RELEVANCE':
    return rawInput;
  }
  return;
}

/**
 * @type { GetPagesArgs }
 * @description Arguments for fetching pages
 */
export type GetPagesArgs = {
  /**
   * @type { number }
   * @memberof GetPagesArgs
  */
  first: number | null;
    /**
   * @type { string }
   * @memberof GetPagesArgs
  */
  after: string | null;
    /**
   * @type { number }
   * @memberof GetPagesArgs
  */
  last: number | null;
    /**
   * @type { string }
   * @memberof GetPagesArgs
  */
  before: string | null;
    /**
   * @type { boolean }
   * @memberof GetPagesArgs
  */
  reverse: boolean | null;
    /**
   * @type { PageSortKeys }
   * @memberof GetPagesArgs
  */
  sortKey: PageSortKeys | null;
    /**
   * @type { string }
   * @memberof GetPagesArgs
  */
  query: string | null;
  };

export function decodeGetPagesArgs(rawInput: unknown): GetPagesArgs | null {
  if (isJSON(rawInput)) {
    const decodedFirst = decodeNumber(rawInput['first']);
    const decodedAfter = decodeString(rawInput['after']);
    const decodedLast = decodeNumber(rawInput['last']);
    const decodedBefore = decodeString(rawInput['before']);
    const decodedReverse = decodeBoolean(rawInput['reverse']);
    const decodedSortKey = decodePageSortKeys(rawInput['sortKey']);
    const decodedQuery = decodeString(rawInput['query']);


    return {
      first: decodedFirst,
      after: decodedAfter,
      last: decodedLast,
      before: decodedBefore,
      reverse: decodedReverse,
      sortKey: decodedSortKey,
      query: decodedQuery
    };
  }
  return null;
}


/**
 * @type { GetBlogsArgs }
 * @description Arguments for fetching blogs
 */
export type GetBlogsArgs = {
  /**
   * @type { number }
   * @memberof GetBlogsArgs
  */
  first: number | null;
    /**
   * @type { string }
   * @memberof GetBlogsArgs
  */
  after: string | null;
    /**
   * @type { number }
   * @memberof GetBlogsArgs
  */
  last: number | null;
    /**
   * @type { string }
   * @memberof GetBlogsArgs
  */
  before: string | null;
    /**
   * @type { boolean }
   * @memberof GetBlogsArgs
  */
  reverse: boolean | null;
    /**
   * @type { BlogSortKeys }
   * @memberof GetBlogsArgs
  */
  sortKey: BlogSortKeys | null;
    /**
   * @type { string }
   * @memberof GetBlogsArgs
  */
  query: string | null;
  };

export function decodeGetBlogsArgs(rawInput: unknown): GetBlogsArgs | null {
  if (isJSON(rawInput)) {
    const decodedFirst = decodeNumber(rawInput['first']);
    const decodedAfter = decodeString(rawInput['after']);
    const decodedLast = decodeNumber(rawInput['last']);
    const decodedBefore = decodeString(rawInput['before']);
    const decodedReverse = decodeBoolean(rawInput['reverse']);
    const decodedSortKey = decodeBlogSortKeys(rawInput['sortKey']);
    const decodedQuery = decodeString(rawInput['query']);


    return {
      first: decodedFirst,
      after: decodedAfter,
      last: decodedLast,
      before: decodedBefore,
      reverse: decodedReverse,
      sortKey: decodedSortKey,
      query: decodedQuery
    };
  }
  return null;
}


/**
 * @type { GetArticlesArgs }
 * @description Arguments for fetching articles
 */
export type GetArticlesArgs = {
  /**
   * @type { number }
   * @memberof GetArticlesArgs
  */
  first: number | null;
    /**
   * @type { string }
   * @memberof GetArticlesArgs
  */
  after: string | null;
    /**
   * @type { number }
   * @memberof GetArticlesArgs
  */
  last: number | null;
    /**
   * @type { string }
   * @memberof GetArticlesArgs
  */
  before: string | null;
    /**
   * @type { boolean }
   * @memberof GetArticlesArgs
  */
  reverse: boolean | null;
    /**
   * @type { ArticleSortKeys }
   * @memberof GetArticlesArgs
  */
  sortKey: ArticleSortKeys | null;
    /**
   * @type { string }
   * @memberof GetArticlesArgs
  */
  query: string | null;
  };

export function decodeGetArticlesArgs(rawInput: unknown): GetArticlesArgs | null {
  if (isJSON(rawInput)) {
    const decodedFirst = decodeNumber(rawInput['first']);
    const decodedAfter = decodeString(rawInput['after']);
    const decodedLast = decodeNumber(rawInput['last']);
    const decodedBefore = decodeString(rawInput['before']);
    const decodedReverse = decodeBoolean(rawInput['reverse']);
    const decodedSortKey = decodeArticleSortKeys(rawInput['sortKey']);
    const decodedQuery = decodeString(rawInput['query']);


    return {
      first: decodedFirst,
      after: decodedAfter,
      last: decodedLast,
      before: decodedBefore,
      reverse: decodedReverse,
      sortKey: decodedSortKey,
      query: decodedQuery
    };
  }
  return null;
}


/**
 * @type { GetBlogArticlesArgs }
 * @description Arguments for fetching articles within a blog
 */
export type GetBlogArticlesArgs = {
  /**
   * @type { number }
   * @memberof GetBlogArticlesArgs
  */
  articlesFirst: number | null;
    /**
   * @type { string }
   * @memberof GetBlogArticlesArgs
  */
  articlesAfter: string | null;
    /**
   * @type { boolean }
   * @memberof GetBlogArticlesArgs
  */
  articlesReverse: boolean | null;
    /**
   * @type { ArticleSortKeys }
   * @memberof GetBlogArticlesArgs
  */
  articlesSortKey: ArticleSortKeys | null;
  };

export function decodeGetBlogArticlesArgs(rawInput: unknown): GetBlogArticlesArgs | null {
  if (isJSON(rawInput)) {
    const decodedArticlesFirst = decodeNumber(rawInput['articlesFirst']);
    const decodedArticlesAfter = decodeString(rawInput['articlesAfter']);
    const decodedArticlesReverse = decodeBoolean(rawInput['articlesReverse']);
    const decodedArticlesSortKey = decodeArticleSortKeys(rawInput['articlesSortKey']);


    return {
      articlesFirst: decodedArticlesFirst,
      articlesAfter: decodedArticlesAfter,
      articlesReverse: decodedArticlesReverse,
      articlesSortKey: decodedArticlesSortKey
    };
  }
  return null;
}





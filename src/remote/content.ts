import type { APIResponse } from "typesafe-api-call";
import type { Executor } from "./executor";
import {
  type Page,
  type PageConnection,
  type Blog,
  type BlogConnection,
  type Article,
  type ArticleConnection,
  type Menu,
  type StorefrontError,
  type GetPagesArgs,
  type GetBlogsArgs,
  type GetArticlesArgs,
  type GetBlogArticlesArgs,
  decodePageResponse,
  decodePagesResponse,
  decodeBlogResponse,
  decodeBlogsResponse,
  decodeArticleResponse,
  decodeArticlesResponse,
  decodeMenuResponse,
} from "../generated/types";
import {
  GET_PAGE_BY_ID,
  GET_PAGE_BY_HANDLE,
  GET_PAGES,
  GET_BLOG_BY_ID,
  GET_BLOG_BY_HANDLE,
  GET_BLOGS,
  GET_BLOG_WITH_ARTICLES,
  GET_ARTICLE_BY_ID,
  GET_ARTICLES,
  GET_MENU,
} from "../queries";

export function createContentApi(executor: Executor): ContentApi {
  return {
    pages: {
      getById(id: string): Promise<APIResponse<Page, StorefrontError[]>> {
        return executor.execute(
          GET_PAGE_BY_ID,
          { id },
          (data) => decodePageResponse(data)?.page ?? null
        );
      },

      getByHandle(handle: string): Promise<APIResponse<Page, StorefrontError[]>> {
        return executor.execute(
          GET_PAGE_BY_HANDLE,
          { handle },
          (data) => decodePageResponse(data)?.page ?? null
        );
      },

      getMany(
        args: Partial<GetPagesArgs> = {}
      ): Promise<APIResponse<PageConnection, StorefrontError[]>> {
        const variables: Record<string, unknown> = {
          first: args.first ?? 20,
          after: args.after,
          last: args.last,
          before: args.before,
          reverse: args.reverse,
          sortKey: args.sortKey,
          query: args.query,
        };
        return executor.execute(
          GET_PAGES,
          variables,
          (data) => decodePagesResponse(data)?.pages ?? null
        );
      },
    },

    blogs: {
      getById(id: string): Promise<APIResponse<Blog, StorefrontError[]>> {
        return executor.execute(
          GET_BLOG_BY_ID,
          { id },
          (data) => decodeBlogResponse(data)?.blog ?? null
        );
      },

      getByHandle(handle: string): Promise<APIResponse<Blog, StorefrontError[]>> {
        return executor.execute(
          GET_BLOG_BY_HANDLE,
          { handle },
          (data) => decodeBlogResponse(data)?.blog ?? null
        );
      },

      getWithArticles(
        idOrHandle: { id: string } | { handle: string },
        args: Partial<GetBlogArticlesArgs> = {}
      ): Promise<APIResponse<Blog, StorefrontError[]>> {
        const variables: Record<string, unknown> = {
          ...idOrHandle,
          articlesFirst: args.articlesFirst ?? 10,
          articlesAfter: args.articlesAfter,
          articlesReverse: args.articlesReverse,
          articlesSortKey: args.articlesSortKey,
        };
        return executor.execute(
          GET_BLOG_WITH_ARTICLES,
          variables,
          (data) => decodeBlogResponse(data)?.blog ?? null
        );
      },

      getMany(
        args: Partial<GetBlogsArgs> = {}
      ): Promise<APIResponse<BlogConnection, StorefrontError[]>> {
        const variables: Record<string, unknown> = {
          first: args.first ?? 20,
          after: args.after,
          last: args.last,
          before: args.before,
          reverse: args.reverse,
          sortKey: args.sortKey,
          query: args.query,
        };
        return executor.execute(
          GET_BLOGS,
          variables,
          (data) => decodeBlogsResponse(data)?.blogs ?? null
        );
      },
    },

    articles: {
      getById(id: string): Promise<APIResponse<Article, StorefrontError[]>> {
        return executor.execute(
          GET_ARTICLE_BY_ID,
          { id },
          (data) => decodeArticleResponse(data)?.article ?? null
        );
      },

      getMany(
        args: Partial<GetArticlesArgs> = {}
      ): Promise<APIResponse<ArticleConnection, StorefrontError[]>> {
        const variables: Record<string, unknown> = {
          first: args.first ?? 20,
          after: args.after,
          last: args.last,
          before: args.before,
          reverse: args.reverse,
          sortKey: args.sortKey,
          query: args.query,
        };
        return executor.execute(
          GET_ARTICLES,
          variables,
          (data) => decodeArticlesResponse(data)?.articles ?? null
        );
      },
    },

    menus: {
      getByHandle(handle: string): Promise<APIResponse<Menu, StorefrontError[]>> {
        return executor.execute(
          GET_MENU,
          { handle },
          (data) => decodeMenuResponse(data)?.menu ?? null
        );
      },
    },
  };
}

export type ContentApi = {
  pages: {
    getById: (id: string) => Promise<APIResponse<Page, StorefrontError[]>>;
    getByHandle: (handle: string) => Promise<APIResponse<Page, StorefrontError[]>>;
    getMany: (
      args?: Partial<GetPagesArgs>
    ) => Promise<APIResponse<PageConnection, StorefrontError[]>>;
  };
  blogs: {
    getById: (id: string) => Promise<APIResponse<Blog, StorefrontError[]>>;
    getByHandle: (handle: string) => Promise<APIResponse<Blog, StorefrontError[]>>;
    getWithArticles: (
      idOrHandle: { id: string } | { handle: string },
      args?: Partial<GetBlogArticlesArgs>
    ) => Promise<APIResponse<Blog, StorefrontError[]>>;
    getMany: (
      args?: Partial<GetBlogsArgs>
    ) => Promise<APIResponse<BlogConnection, StorefrontError[]>>;
  };
  articles: {
    getById: (id: string) => Promise<APIResponse<Article, StorefrontError[]>>;
    getMany: (
      args?: Partial<GetArticlesArgs>
    ) => Promise<APIResponse<ArticleConnection, StorefrontError[]>>;
  };
  menus: {
    getByHandle: (handle: string) => Promise<APIResponse<Menu, StorefrontError[]>>;
  };
};

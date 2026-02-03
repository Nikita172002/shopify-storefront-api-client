export type StorefrontConfig = {
  shopDomain: string;
  accessToken: string;
  apiVersion?: string;
};

export type GraphQLRequestBody = {
  query: string;
  variables?: Record<string, unknown>;
};

export type PaginationArgs = {
  first?: number;
  after?: string;
  last?: number;
  before?: string;
};

export type Connection<T> = {
  edges: Array<{ node: T; cursor: string }>;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
  };
};

export type StorefrontUserError = {
  field?: string[];
  message: string;
  code?: string;
};

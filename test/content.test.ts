import { APISuccess } from 'typesafe-api-call';
import { client, testRunner, test, skip, assertNotNull, assert } from './setup';
import type { PageSortKeys, BlogSortKeys, ArticleSortKeys } from '../src/generated/types';

export async function testContentApi() {
  testRunner.startSuite('Content');

  let testPageHandle: string | null = null;
  let testBlogHandle: string | null = null;
  let testArticleId: string | null = null;

  // Test: Get pages list
  await test('Get Pages List', 'Fetch list of pages', async () => {
    const result = await client.content.pages.getMany({ first: 5 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return pages');
    const pages = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(pages.edges, 'Should have edges array');
    
    if (pages.edges.length > 0) {
      testPageHandle = pages.edges[0].node.handle;
    }
  });

  // Test: Page required fields
  await test('Page Required Fields', 'Pages have required fields', async () => {
    const result = await client.content.pages.getMany({ first: 3 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return pages');
    const pages = (result as APISuccess<typeof result.response>).response!;
    
    for (const edge of pages.edges) {
      const p = edge.node;
      assertNotNull(p.id, 'Page should have id');
      assertNotNull(p.title, 'Page should have title');
      assertNotNull(p.handle, 'Page should have handle');
    }
  });

  // Test: Get page by handle
  await test('Get Page By Handle', 'Fetch page by handle', async () => {
    if (!testPageHandle) {
      throw new Error('No test page handle available');
    }
    const result = await client.content.pages.getByHandle(testPageHandle);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return page');
    const page = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(page.handle, 'Page should have handle');
  }, ['method=getByHandle']);

  // Test combinations: Page sort keys
  const pageSortKeys: PageSortKeys[] = ['TITLE', 'UPDATED_AT', 'ID'];
  
  for (const sortKey of pageSortKeys) {
    await test(
      `Sort Pages by ${sortKey}`,
      `Pages sorted by ${sortKey}`,
      async () => {
        const result = await client.content.pages.getMany({
          first: 3,
          sortKey,
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return pages');
      },
      [`sortKey=${sortKey}`]
    );
  }

  // Test: Get blogs list
  await test('Get Blogs List', 'Fetch list of blogs', async () => {
    const result = await client.content.blogs.getMany({ first: 5 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return blogs');
    const blogs = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(blogs.edges, 'Should have edges array');
    
    if (blogs.edges.length > 0) {
      testBlogHandle = blogs.edges[0].node.handle;
    }
  });

  // Test: Blog required fields
  await test('Blog Required Fields', 'Blogs have required fields', async () => {
    const result = await client.content.blogs.getMany({ first: 3 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return blogs');
    const blogs = (result as APISuccess<typeof result.response>).response!;
    
    for (const edge of blogs.edges) {
      const b = edge.node;
      assertNotNull(b.id, 'Blog should have id');
      assertNotNull(b.title, 'Blog should have title');
      assertNotNull(b.handle, 'Blog should have handle');
    }
  });

  // Test: Get blog with articles
  await test('Get Blog With Articles', 'Fetch blog with article list', async () => {
    if (!testBlogHandle) {
      throw new Error('No test blog handle available');
    }
    const result = await client.content.blogs.getWithArticles(
      { handle: testBlogHandle },
      { articlesFirst: 5 }
    );
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return blog');
    const blog = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(blog.title, 'Blog should have title');
    assertNotNull(blog.articles, 'Blog should have articles connection');
  }, ['include=articles']);

  // Test combinations: Blog sort keys
  const blogSortKeys: BlogSortKeys[] = ['TITLE', 'HANDLE', 'ID'];
  
  for (const sortKey of blogSortKeys) {
    await test(
      `Sort Blogs by ${sortKey}`,
      `Blogs sorted by ${sortKey}`,
      async () => {
        const result = await client.content.blogs.getMany({
          first: 3,
          sortKey,
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return blogs');
      },
      [`sortKey=${sortKey}`]
    );
  }

  // Test: Get articles list
  await test('Get Articles List', 'Fetch list of articles', async () => {
    const result = await client.content.articles.getMany({ first: 5 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return articles');
    const articles = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(articles.edges, 'Should have edges array');
    
    if (articles.edges.length > 0) {
      testArticleId = articles.edges[0].node.id;
    }
  });

  // Test: Get article by ID (if articles exist)
  if (testArticleId) {
    await test('Get Article By ID', 'Fetch article by ID', async () => {
      const result = await client.content.articles.getById(testArticleId!);
      assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return article');
      const article = (result as APISuccess<typeof result.response>).response!;
      assertNotNull(article.id, 'Article should have id');
    }, ['method=getById']);
  } else {
    skip('Get Article By ID', 'Fetch article by ID', 'No articles in store', ['method=getById']);
  }

  // Test combinations: Article sort keys
  const articleSortKeys: ArticleSortKeys[] = ['TITLE', 'PUBLISHED_AT', 'UPDATED_AT', 'AUTHOR'];
  
  for (const sortKey of articleSortKeys) {
    await test(
      `Sort Articles by ${sortKey}`,
      `Articles sorted by ${sortKey}`,
      async () => {
        const result = await client.content.articles.getMany({
          first: 3,
          sortKey,
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return articles');
      },
      [`sortKey=${sortKey}`]
    );
  }

  // Test: Get menu by handle
  await test('Get Main Menu', 'Fetch main menu by handle', async () => {
    const result = await client.content.menus.getByHandle('main-menu');
    // Menu may not exist, but call should succeed
    if (result instanceof APISuccess && result.response) {
      assertNotNull(result.response.id, 'Menu should have id');
      assertNotNull(result.response.title, 'Menu should have title');
    }
  }, ['menu=main-menu']);

  // Test: Get footer menu
  await test('Get Footer Menu', 'Fetch footer menu by handle', async () => {
    const result = await client.content.menus.getByHandle('footer');
    // Menu may not exist, but call should succeed
    if (result instanceof APISuccess && result.response) {
      assertNotNull(result.response.id, 'Menu should have id');
    }
  }, ['menu=footer']);

  // Test: Menu with nested items
  await test('Menu Nested Items', 'Menu items have children accessible', async () => {
    const result = await client.content.menus.getByHandle('main-menu');
    if (result instanceof APISuccess && result.response) {
      const menu = result.response;
      assertNotNull(menu.items, 'Menu should have items array');
      // Children may be empty but should be accessible
      for (const item of menu.items) {
        const _children = item.children;
      }
    }
  }, ['include=children']);

  // Test: Page pagination
  await test('Page Pagination', 'Pages with pagination cursor', async () => {
    const firstPage = await client.content.pages.getMany({ first: 1 });
    assertNotNull(firstPage instanceof APISuccess ? firstPage.response : null, 'Should return first page');
    const pages = (firstPage as APISuccess<typeof firstPage.response>).response!;
    
    if (pages.pageInfo.hasNextPage && pages.pageInfo.endCursor) {
      const secondPage = await client.content.pages.getMany({
        first: 1,
        after: pages.pageInfo.endCursor,
      });
      assertNotNull(secondPage instanceof APISuccess ? secondPage.response : null, 'Should return second page');
    }
  }, ['pagination=cursor']);

  // Test: Blog pagination
  await test('Blog Pagination', 'Blogs with pagination cursor', async () => {
    const firstPage = await client.content.blogs.getMany({ first: 1 });
    assertNotNull(firstPage instanceof APISuccess ? firstPage.response : null, 'Should return first page');
    const blogs = (firstPage as APISuccess<typeof firstPage.response>).response!;
    
    if (blogs.pageInfo.hasNextPage && blogs.pageInfo.endCursor) {
      const secondPage = await client.content.blogs.getMany({
        first: 1,
        after: blogs.pageInfo.endCursor,
      });
      assertNotNull(secondPage instanceof APISuccess ? secondPage.response : null, 'Should return second page');
    }
  }, ['pagination=cursor']);
}

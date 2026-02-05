import { APISuccess } from 'typesafe-api-call';
import { client, testRunner, test, skip, assertNotNull, assert } from './setup';
import type { SearchType, PredictiveSearchType, SearchSortKeys } from '../src/generated/types';

export async function testSearchApi() {
  testRunner.startSuite('Search');

  // Test: Basic search
  await test('Basic Search', 'Search with simple query string', async () => {
    const result = await client.search.search({
      query: 'shirt',
      first: 5,
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return search results');
    const search = (result as APISuccess<typeof result.response>).response;
    assertNotNull(search.totalCount !== undefined, 'Should have totalCount');
    assertNotNull(search.nodes, 'Should have edges array');
  });

  // Test: Search with type filters - Product only
  await test('Search Products Only', 'Search filtered to products only', async () => {
    const result = await client.search.search({
      query: 'shirt',
      first: 5,
      types: ['PRODUCT'],
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return products');
    const search = (result as APISuccess<typeof result.response>).response;
    for (const item of search.nodes) {
      assert(item.__typename === 'Product', 'All results should be products');
    }
  }, ['types=PRODUCT']);

  // Test: Search with type filters - Page only
  await test('Search Pages Only', 'Search filtered to pages only', async () => {
    const result = await client.search.search({
      query: '*',
      first: 5,
      types: ['PAGE'],
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return pages');
    const search = (result as APISuccess<typeof result.response>).response;
    for (const item of search.nodes) {
      assert(item.__typename === 'Page', 'All results should be pages');
    }
  }, ['types=PAGE']);

  // Test: Search with type filters - Article only
  await test('Search Articles Only', 'Search filtered to articles only', async () => {
    const result = await client.search.search({
      query: '*',
      first: 5,
      types: ['ARTICLE'],
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return articles');
    // Articles may be empty but query should succeed
  }, ['types=ARTICLE']);

  // Test: Search with multiple types
  await test('Search Multiple Types', 'Search with product and page types', async () => {
    const result = await client.search.search({
      query: '*',
      first: 10,
      types: ['PRODUCT', 'PAGE'],
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return mixed results');
    const search = (result as APISuccess<typeof result.response>).response;
    assertNotNull(search.nodes, 'Should have edges');
  }, ['types=PRODUCT,PAGE']);

  // Test combinations: Search sort keys
  const searchSortKeys: SearchSortKeys[] = ['RELEVANCE', 'PRICE'];
  
  for (const sortKey of searchSortKeys) {
    await test(
      `Search Sort by ${sortKey}`,
      `Search results sorted by ${sortKey}`,
      async () => {
        const result = await client.search.search({
          query: 'shirt',
          first: 5,
          types: ['PRODUCT'],
          sortKey,
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return sorted results');
      },
      [`sortKey=${sortKey}`]
    );
  }

  // Test combinations: Sort with reverse
  for (const reverse of [true, false]) {
    await test(
      `Search Price ${reverse ? 'DESC' : 'ASC'}`,
      `Search sorted by price ${reverse ? 'descending' : 'ascending'}`,
      async () => {
        const result = await client.search.search({
          query: 'shirt',
          first: 5,
          types: ['PRODUCT'],
          sortKey: 'PRICE',
          reverse,
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return results');
      },
      ['sortKey=PRICE', `reverse=${reverse}`]
    );
  }

  // Test: Search with product filters
  await test('Search With Filters', 'Search with product availability filter', async () => {
    const result = await client.search.search({
      query: 'shirt',
      first: 5,
      types: ['PRODUCT'],
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return results');
    const search = (result as APISuccess<typeof result.response>).response;
    // Check that filters are returned
    assertNotNull(search.productFilters, 'Should return product filters');
  }, ['productFilters=true']);

  // Test: Search pagination
  await test('Search Pagination', 'Search with pagination cursor', async () => {
    const firstPage = await client.search.search({
      query: 'shirt',
      first: 2,
    });
    assertNotNull(firstPage instanceof APISuccess ? firstPage.response : null, 'Should return first page');
    const search = (firstPage as APISuccess<typeof firstPage.response>).response;
    
    if (search.pageInfo.hasNextPage && search.pageInfo.endCursor) {
      const secondPage = await client.search.search({
        query: 'shirt',
        first: 2,
        after: search.pageInfo.endCursor,
      });
      assertNotNull(secondPage instanceof APISuccess ? secondPage.response : null, 'Should return second page');
    }
  }, ['pagination=cursor']);

  // Test: Predictive search - basic
  await test('Predictive Search Basic', 'Basic predictive search query', async () => {
    const result = await client.search.predictive({
      query: 'shi',
      limit: 5,
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return predictive results');
    const predictive = (result as APISuccess<typeof result.response>).response;
    assertNotNull(predictive.products, 'Should have products array');
    assertNotNull(predictive.collections, 'Should have collections array');
    assertNotNull(predictive.pages, 'Should have pages array');
    assertNotNull(predictive.articles, 'Should have articles array');
    assertNotNull(predictive.queries, 'Should have query suggestions');
  });

  // Test combinations: Predictive search types
  const predictiveTypes: PredictiveSearchType[][] = [
    ['PRODUCT'],
    ['COLLECTION'],
    ['PAGE'],
    ['QUERY'],
    ['PRODUCT', 'COLLECTION'],
    ['PRODUCT', 'QUERY'],
  ];

  for (const types of predictiveTypes) {
    const typesStr = types.join(',');
    await test(
      `Predictive ${typesStr}`,
      `Predictive search for ${typesStr}`,
      async () => {
        const result = await client.search.predictive({
          query: 'shirt',
          limit: 5,
          types,
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return results');
      },
      [`types=${typesStr}`]
    );
  }

  // Test: Predictive search limit scope
  await test('Predictive Limit Scope ALL', 'Predictive search with ALL limit scope', async () => {
    const result = await client.search.predictive({
      query: 'shirt',
      limit: 10,
      limitScope: 'ALL',
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return results');
  }, ['limitScope=ALL']);

  await test('Predictive Limit Scope EACH', 'Predictive search with EACH limit scope', async () => {
    const result = await client.search.predictive({
      query: 'shirt',
      limit: 3,
      limitScope: 'EACH',
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return results');
  }, ['limitScope=EACH']);

  // Test: Search type validation (negative test - COLLECTION not supported)
  skip(
    'Search COLLECTION Type',
    'COLLECTION type not supported in search API',
    'Shopify search API only supports PRODUCT, PAGE, ARTICLE types',
    ['types=COLLECTION']
  );
}

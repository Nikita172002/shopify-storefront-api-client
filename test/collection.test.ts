import { APISuccess } from 'typesafe-api-call';
import { client, testRunner, test, assertNotNull, assert } from './setup';
import type { CollectionSortKeys, ProductCollectionSortKeys } from '../src/generated/types';

export async function testCollectionApi() {
  testRunner.startSuite('Collection');

  let testCollectionId: string | null = null;
  let testCollectionHandle: string | null = null;

  // Test: Get collections list
  await test('Get Collections List', 'Fetch list of collections', async () => {
    const result = await client.collection.getMany({ first: 5 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collections');
    const collections = (result as APISuccess<typeof result.response>).response;
    assertNotNull(collections.nodes, 'Should have edges array');
    assertNotNull(collections.pageInfo, 'Should have pageInfo');
    
    if (collections.nodes.length > 0) {
      testCollectionId = collections.nodes[0].id;
      testCollectionHandle = collections.nodes[0].handle;
    }
  });

  // Test: Collection required fields
  await test('Collection Required Fields', 'Collections have required fields', async () => {
    const result = await client.collection.getMany({ first: 3 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collections');
    const collections = (result as APISuccess<typeof result.response>).response;
    
    for (const c of collections.nodes) {
      assertNotNull(c.id, 'Collection should have id');
      assertNotNull(c.title, 'Collection should have title');
      assertNotNull(c.handle, 'Collection should have handle');
    }
  });

  // Test: Get collection by ID
  await test('Get Collection By ID', 'Fetch collection by ID', async () => {
    if (!testCollectionId) {
      throw new Error('No test collection ID available');
    }
    const result = await client.collection.getById(testCollectionId);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collection');
    const collection = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(collection.id, 'Collection should have id');
  }, ['method=getById']);

  // Test: Get collection by handle
  await test('Get Collection By Handle', 'Fetch collection by handle', async () => {
    if (!testCollectionHandle) {
      throw new Error('No test collection handle available');
    }
    const result = await client.collection.getByHandle(testCollectionHandle);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collection');
    const collection = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(collection.handle, 'Collection should have handle');
  }, ['method=getByHandle']);

  // Test: Get collection with products
  await test('Get Collection With Products', 'Fetch collection with product list', async () => {
    if (!testCollectionHandle) {
      throw new Error('No test collection handle available');
    }
    const result = await client.collection.getWithProducts(
      { handle: testCollectionHandle },
      { first: 5 }
    );
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collection');
    const collection = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(collection.title, 'Collection should have title');
    // Products field may be null if no products, but call should succeed
  }, ['include=products']);

  // Test combinations: Collection sort keys
  const collectionSortKeys: CollectionSortKeys[] = ['TITLE', 'UPDATED_AT', 'ID'];
  
  for (const sortKey of collectionSortKeys) {
    await test(
      `Sort Collections by ${sortKey}`,
      `Collections sorted by ${sortKey}`,
      async () => {
        const result = await client.collection.getMany({
          first: 3,
          sortKey,
          reverse: false,
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collections');
      },
      [`sortKey=${sortKey}`]
    );
  }

  // Test combinations: Sort with reverse
  for (const reverse of [true, false]) {
    await test(
      `Sort Collections TITLE ${reverse ? 'DESC' : 'ASC'}`,
      `Collections sorted by title ${reverse ? 'descending' : 'ascending'}`,
      async () => {
        const result = await client.collection.getMany({
          first: 3,
          sortKey: 'TITLE',
          reverse,
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collections');
      },
      ['sortKey=TITLE', `reverse=${reverse}`]
    );
  }

  // Test combinations: Product sort keys within collection
  const productSortKeys: ProductCollectionSortKeys[] = ['BEST_SELLING', 'PRICE', 'TITLE', 'CREATED'];
  
  for (const sortKey of productSortKeys) {
    await test(
      `Collection Products by ${sortKey}`,
      `Products in collection sorted by ${sortKey}`,
      async () => {
        if (!testCollectionHandle) {
          throw new Error('No test collection handle available');
        }
        const result = await client.collection.getWithProducts(
          { handle: testCollectionHandle },
          { first: 3, sortKey }
        );
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collection');
      },
      [`productSortKey=${sortKey}`]
    );
  }

  // Test: Collection with product filters
  await test('Collection With Availability Filter', 'Products filtered by availability', async () => {
    if (!testCollectionHandle) {
      throw new Error('No test collection handle available');
    }
    const result = await client.collection.getWithProducts(
      { handle: testCollectionHandle },
      { first: 5, filters: [{ available: true }] }
    );
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collection');
  }, ['filter=available']);

  // Test: Collection pagination
  await test('Collection Pagination', 'Collections with pagination cursor', async () => {
    const firstPage = await client.collection.getMany({ first: 2 });
    assertNotNull(firstPage instanceof APISuccess ? firstPage.response : null, 'Should return first page');
    const collections = (firstPage as APISuccess<typeof firstPage.response>).response;
    
    if (collections.pageInfo.hasNextPage && collections.pageInfo.endCursor) {
      const secondPage = await client.collection.getMany({
        first: 2,
        after: collections.pageInfo.endCursor,
      });
      assertNotNull(secondPage instanceof APISuccess ? secondPage.response : null, 'Should return second page');
    }
  }, ['pagination=cursor']);

  // Test: Collection products pagination
  await test('Collection Products Pagination', 'Products pagination within collection', async () => {
    if (!testCollectionHandle) {
      throw new Error('No test collection handle available');
    }
    const firstPage = await client.collection.getWithProducts(
      { handle: testCollectionHandle },
      { first: 2 }
    );
    assertNotNull(firstPage instanceof APISuccess ? firstPage.response : null, 'Should return collection');
    const collection = (firstPage as APISuccess<typeof firstPage.response>).response!;
    
    if (collection.products?.pageInfo.hasNextPage && collection.products?.pageInfo.endCursor) {
      const secondPage = await client.collection.getWithProducts(
        { handle: testCollectionHandle },
        { first: 2, after: collection.products.pageInfo.endCursor }
      );
      assertNotNull(secondPage instanceof APISuccess ? secondPage.response : null, 'Should return next page');
    }
  }, ['productPagination=cursor']);

  // Test: Collection product filters response
  await test('Collection Product Filters', 'Collection returns available filters', async () => {
    if (!testCollectionHandle) {
      throw new Error('No test collection handle available');
    }
    const result = await client.collection.getWithProducts(
      { handle: testCollectionHandle },
      { first: 5 }
    );
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return collection');
    const collection = (result as APISuccess<typeof result.response>).response!;
    // Filters may be empty but should be accessible
    if (collection.products) {
      assertNotNull(collection.products.filters, 'Should have filters array');
    }
  }, ['include=filters']);
}

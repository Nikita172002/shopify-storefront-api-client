import { APISuccess } from 'typesafe-api-call';
import { client, testRunner, test, skip, assertNotNull, assertLength, assert } from './setup';
import type { ProductSortKeys } from '../src/generated/types';

export async function testProductApi() {
  testRunner.startSuite('Product');

  let testProductId: string | null = null;
  let testProductHandle: string | null = null;

  // Test: Get products list
  await test('Get Products List', 'Fetch list of products with pagination', async () => {
    const result = await client.product.getMany({ first: 5 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return products');
    const products = (result as APISuccess<typeof result.response>).response;
    assertNotNull(products.edges, 'Should have edges array');
    assertNotNull(products.pageInfo, 'Should have page info');
    
    if (products.edges.length > 0) {
      testProductId = products.edges[0].node.id;
      testProductHandle = products.edges[0].node.handle;
    }
  });

  // Test: Products have required fields
  await test('Product Required Fields', 'Products should have all required fields', async () => {
    const result = await client.product.getMany({ first: 3 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return products');
    const products = (result as APISuccess<typeof result.response>).response;
    
    for (const edge of products.edges) {
      const p = edge.node;
      assertNotNull(p.id, 'Product should have id');
      assertNotNull(p.title, 'Product should have title');
      assertNotNull(p.handle, 'Product should have handle');
      assertNotNull(p.priceRange, 'Product should have priceRange');
    }
  });

  // Test: Get product by ID
  await test('Get Product By ID', 'Fetch single product by ID', async () => {
    if (!testProductId) {
      throw new Error('No test product ID available');
    }
    const result = await client.product.getById(testProductId);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return product');
    const product = (result as APISuccess<typeof result.response>).response;
    assertNotNull(product.id, 'Product should have id');
    assertNotNull(product.title, 'Product should have title');
  }, ['method=getById']);

  // Test: Get product by handle
  await test('Get Product By Handle', 'Fetch single product by handle', async () => {
    if (!testProductHandle) {
      throw new Error('No test product handle available');
    }
    const result = await client.product.getByHandle(testProductHandle);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return product');
    const product = (result as APISuccess<typeof result.response>).response;
    assertNotNull(product.id, 'Product should have id');
    assertNotNull(product.handle, 'Product should have handle');
  }, ['method=getByHandle']);

  // Test: Get product recommendations
  await test('Get Recommendations', 'Fetch product recommendations', async () => {
    if (!testProductId) {
      throw new Error('No test product ID available');
    }
    const result = await client.product.getRecommendations({ productId: testProductId });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return recommendations');
    const recs = (result as APISuccess<typeof result.response>).response;
    assert(Array.isArray(recs), 'Recommendations should be an array');
  }, ['method=getRecommendations']);

  // Test combinations: Sorting
  const sortKeys: ProductSortKeys[] = ['PRICE', 'TITLE', 'CREATED_AT', 'BEST_SELLING'];
  
  for (const sortKey of sortKeys) {
    await test(`Sort by ${sortKey}`, `Products sorted by ${sortKey}`, async () => {
      const result = await client.product.getMany({
        first: 3,
        sortKey,
        reverse: false,
      });
      assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return sorted products');
      const products = (result as APISuccess<typeof result.response>).response;
      assertNotNull(products.edges, 'Should have edges');
    }, [`sortKey=${sortKey}`, 'reverse=false']);
  }

  // Test combinations: Sort with reverse
  for (const sortKey of ['PRICE', 'TITLE'] as ProductSortKeys[]) {
    for (const reverse of [true, false]) {
      await test(
        `Sort ${sortKey} ${reverse ? 'DESC' : 'ASC'}`,
        `Products sorted by ${sortKey} ${reverse ? 'descending' : 'ascending'}`,
        async () => {
          const result = await client.product.getMany({
            first: 3,
            sortKey,
            reverse,
          });
          assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return products');
        },
        [`sortKey=${sortKey}`, `reverse=${reverse}`]
      );
    }
  }

  // Test: Pagination - first/after
  await test('Pagination First', 'Fetch first page of products', async () => {
    const result = await client.product.getMany({ first: 2 });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return products');
    const products = (result as APISuccess<typeof result.response>).response;
    assertNotNull(products.pageInfo, 'Should have pageInfo');
  }, ['pagination=first']);

  // Test: Pagination with cursor
  await test('Pagination With Cursor', 'Fetch next page using cursor', async () => {
    const firstPage = await client.product.getMany({ first: 2 });
    assertNotNull(firstPage instanceof APISuccess ? firstPage.response : null, 'Should return first page');
    const products = (firstPage as APISuccess<typeof firstPage.response>).response;
    
    if (products.pageInfo.hasNextPage && products.pageInfo.endCursor) {
      const secondPage = await client.product.getMany({
        first: 2,
        after: products.pageInfo.endCursor,
      });
      assertNotNull(secondPage instanceof APISuccess ? secondPage.response : null, 'Should return second page');
    }
  }, ['pagination=cursor']);

  // Test: Product variants
  await test('Product With Variants', 'Fetch product with variant details', async () => {
    if (!testProductId) {
      throw new Error('No test product ID available');
    }
    const result = await client.product.getById(testProductId);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return product');
    const product = (result as APISuccess<typeof result.response>).response;
    // Variants may be empty but should be accessible
    const _variants = product.variants;
  }, ['include=variants']);

  // Test: Product images
  await test('Product With Images', 'Fetch product with image details', async () => {
    if (!testProductId) {
      throw new Error('No test product ID available');
    }
    const result = await client.product.getById(testProductId);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return product');
    const product = (result as APISuccess<typeof result.response>).response;
    // Images may be empty but should be accessible
    const _images = product.images;
  }, ['include=images']);
}

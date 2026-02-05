import { APISuccess } from 'typesafe-api-call';
import { client, testRunner, test, skip, assertNotNull } from './setup';

export async function testMetaobjectApi() {
  testRunner.startSuite('Metaobject');

  // Common metaobject types to test
  const testTypes = ['material', 'brand', 'size_chart', 'faq', 'testimonial', 'team_member'];
  let foundType: string | null = null;
  let foundHandle: string | null = null;
  let foundId: string | null = null;

  // Test: Get metaobjects by various types
  for (const type of testTypes) {
    await test(
      `Get Metaobjects type=${type}`,
      `Fetch metaobjects of type ${type}`,
      async () => {
        const result = await client.metaobject.getMany({
          type,
          first: 5,
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return response');
        const response = (result as APISuccess<typeof result.response>).response;
        
        // Store first found type for subsequent tests
        if (response.nodes.length > 0 && !foundType) {
          foundType = type;
          foundHandle = response.nodes[0].handle;
          foundId = response.nodes[0].id;
        }
      },
      [`type=${type}`]
    );
  }

  // Test: Get metaobject by handle (if any found)
  if (foundType && foundHandle) {
    await test('Get Metaobject By Handle', 'Fetch metaobject by handle', async () => {
      const result = await client.metaobject.getByHandle({
        type: foundType!,
        handle: foundHandle!,
      });
      assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return metaobject');
      const metaobject = (result as APISuccess<typeof result.response>).response!;
      assertNotNull(metaobject.id, 'Metaobject should have id');
      assertNotNull(metaobject.handle, 'Metaobject should have handle');
    }, ['method=getByHandle']);
  } else {
    skip('Get Metaobject By Handle', 'Fetch metaobject by handle', 'No metaobjects found in store', ['method=getByHandle']);
  }

  // Test: Get metaobject by ID (if any found)
  if (foundId) {
    await test('Get Metaobject By ID', 'Fetch metaobject by ID', async () => {
      const result = await client.metaobject.getById(foundId!);
      assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return metaobject');
      const metaobject = (result as APISuccess<typeof result.response>).response!;
      assertNotNull(metaobject.id, 'Metaobject should have id');
    }, ['method=getById']);
  } else {
    skip('Get Metaobject By ID', 'Fetch metaobject by ID', 'No metaobjects found in store', ['method=getById']);
  }

  // Test: Metaobject has fields
  if (foundId) {
    await test('Metaobject Fields', 'Metaobject has fields array', async () => {
      const result = await client.metaobject.getById(foundId!);
      assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return metaobject');
      const metaobject = (result as APISuccess<typeof result.response>).response!;
      assertNotNull(metaobject.fields, 'Metaobject should have fields array');
    }, ['include=fields']);
  } else {
    skip('Metaobject Fields', 'Metaobject has fields array', 'No metaobjects found in store', ['include=fields']);
  }

  // Test: Metaobjects pagination
  if (foundType) {
    await test('Metaobjects Pagination', 'Metaobjects with pagination', async () => {
      const firstPage = await client.metaobject.getMany({
        type: foundType!,
        first: 2,
      });
      assertNotNull(firstPage instanceof APISuccess ? firstPage.response : null, 'Should return first page');
      const response = (firstPage as APISuccess<typeof firstPage.response>).response;
      
      if (response.pageInfo.hasNextPage && response.pageInfo.endCursor) {
        const secondPage = await client.metaobject.getMany({
          type: foundType!,
          first: 2,
          after: response.pageInfo.endCursor,
        });
        assertNotNull(secondPage instanceof APISuccess ? secondPage.response : null, 'Should return second page');
      }
    }, ['pagination=cursor']);
  } else {
    skip('Metaobjects Pagination', 'Metaobjects with pagination', 'No metaobjects found in store', ['pagination=cursor']);
  }

  // Test combinations: Different first values
  if (foundType) {
    for (const first of [1, 5, 10]) {
      await test(
        `Metaobjects first=${first}`,
        `Fetch up to ${first} metaobjects`,
        async () => {
          const result = await client.metaobject.getMany({
            type: foundType!,
            first,
          });
          assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return response');
        },
        [`first=${first}`]
      );
    }
  } else {
    for (const first of [1, 5, 10]) {
      skip(`Metaobjects first=${first}`, `Fetch up to ${first} metaobjects`, 'No metaobjects found in store', [`first=${first}`]);
    }
  }

  // Test: Metaobject field values
  if (foundId) {
    await test('Metaobject Field Values', 'Metaobject fields have key/value', async () => {
      const result = await client.metaobject.getById(foundId!);
      assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return metaobject');
      const metaobject = (result as APISuccess<typeof result.response>).response!;
      
      if (metaobject.fields && metaobject.fields.length > 0) {
        for (const field of metaobject.fields) {
          assertNotNull(field.key, 'Field should have key');
          // Value may be null but key should exist
        }
      }
    }, ['include=fieldValues']);
  } else {
    skip('Metaobject Field Values', 'Metaobject fields have key/value', 'No metaobjects found in store', ['include=fieldValues']);
  }

  // Test: Invalid metaobject type
  await test('Invalid Metaobject Type', 'Handle non-existent type gracefully', async () => {
    const result = await client.metaobject.getMany({
      type: 'nonexistent_type_xyz',
      first: 5,
    });
    // Should either return empty or handle error gracefully
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should handle gracefully');
  }, ['type=invalid']);

  // Test: Invalid handle lookup
  await test('Invalid Handle Lookup', 'Handle non-existent handle gracefully', async () => {
    const result = await client.metaobject.getByHandle({
      type: foundType || 'material',
      handle: 'nonexistent-handle-xyz',
    });
    // Should return null or handle error gracefully
    if (result instanceof APISuccess) {
      // Response may be null for non-existent handle
    }
  }, ['handle=invalid']);

  // Note about metaobjects
  skip(
    'Custom Metaobject Type',
    'Test with custom metaobject type (requires store configuration)',
    'Metaobjects must be configured in Shopify Admin',
    ['type=custom']
  );
}

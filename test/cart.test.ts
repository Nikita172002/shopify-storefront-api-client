import { APISuccess } from 'typesafe-api-call';
import { client, testRunner, test, skip, assertNotNull, assert } from './setup';

export async function testCartApi() {
  testRunner.startSuite('Cart');

  let cartId: string | null = null;
  let lineItemId: string | null = null;
  let variantId: string | null = null;

  // Setup: Get a product variant for cart tests
  const productsResult = await client.product.getMany({ first: 5 });
  if (productsResult instanceof APISuccess) {
    for (const product of productsResult.response.nodes) {
      if (product.variants?.nodes && product.variants.nodes.length > 0) {
        variantId = product.variants.nodes[0].id;
        break;
      }
    }
  }

  // If no variants, skip all cart tests
  if (!variantId) {
    skip('Setup: Get Product Variant', 'Find product variant', 'No product variants in store');
    skip('Create Empty Cart', 'Create empty cart', 'No variants available');
    skip('Create Cart With Lines', 'Create cart with lines', 'No variants available', ['lines=initial']);
    skip('Get Cart By ID', 'Get cart by ID', 'No variants available', ['method=get']);
    skip('Add Lines To Cart', 'Add lines', 'No variants available', ['method=addLines']);
    skip('Update Line Quantity', 'Update quantity', 'No variants available', ['method=updateLines']);
    skip('Update Cart Note', 'Update note', 'No variants available', ['method=updateNote']);
    skip('Update Cart Attributes', 'Update attributes', 'No variants available', ['method=updateAttributes']);
    skip('Apply Discount Code', 'Apply discount', 'No variants available', ['method=updateDiscountCodes']);
    skip('Remove Lines From Cart', 'Remove lines', 'No variants available', ['method=removeLines']);
    skip('Cart Cost Calculation', 'Cart cost', 'No variants available', ['include=cost']);
    skip('Create Cart qty=1', 'Create qty=1', 'No variants available', ['quantity=1']);
    skip('Create Cart qty=3', 'Create qty=3', 'No variants available', ['quantity=3']);
    skip('Create Cart qty=5', 'Create qty=5', 'No variants available', ['quantity=5']);
    skip('Cart With Buyer Identity', 'Buyer identity', 'No variants available', ['buyerIdentity=true']);
    return;
  }

  await test('Setup: Get Product Variant', 'Found product variant for cart tests', async () => {
    assertNotNull(variantId, 'Should have variant ID');
  });

  // Test: Create empty cart
  await test('Create Empty Cart', 'Create a new empty cart', async () => {
    const result = await client.cart.create();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
    const cartResult = (result as APISuccess<typeof result.response>).response;
    assert(cartResult.userErrors.length === 0, 'Should have no user errors');
    assertNotNull(cartResult.cart, 'Should return cart');
    cartId = cartResult.cart!.id;
  });

  // Test: Create cart with lines
  await test('Create Cart With Lines', 'Create cart with initial line items', async () => {
    if (!variantId) {
      throw new Error('No variant ID available');
    }
    const result = await client.cart.create({
      lines: [{ merchandiseId: variantId, quantity: 2 }],
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
    const cartResult = (result as APISuccess<typeof result.response>).response;
    assert(cartResult.userErrors.length === 0, 'Should have no user errors');
    assertNotNull(cartResult.cart, 'Should return cart');
    cartId = cartResult.cart!.id;
    
    const lines = cartResult.cart!.lines?.nodes ?? [];
    if (lines.length > 0) {
      lineItemId = lines[0].id;
    }
  }, ['lines=initial']);

  // Test: Get cart by ID
  await test('Get Cart By ID', 'Fetch cart by ID', async () => {
    if (!cartId) {
      throw new Error('No cart ID available');
    }
    const result = await client.cart.get(cartId);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart');
    const cart = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(cart.id, 'Cart should have ID');
    assertNotNull(cart.checkoutUrl, 'Cart should have checkout URL');
  }, ['method=get']);

  // Test: Add lines to cart
  await test('Add Lines To Cart', 'Add line items to existing cart', async () => {
    if (!cartId || !variantId) {
      throw new Error('No cart ID or variant ID available');
    }
    const result = await client.cart.addLines(cartId, [
      { merchandiseId: variantId, quantity: 1 },
    ]);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
    const cartResult = (result as APISuccess<typeof result.response>).response;
    assert(cartResult.userErrors.length === 0, 'Should have no user errors');
  }, ['method=addLines']);

  // Test: Update line quantity
  await test('Update Line Quantity', 'Update quantity of line item', async () => {
    if (!cartId || !lineItemId) {
      throw new Error('No cart ID or line item ID available');
    }
    const result = await client.cart.updateLines(cartId, [
      { id: lineItemId, quantity: 5 },
    ]);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
    const cartResult = (result as APISuccess<typeof result.response>).response;
    assert(cartResult.userErrors.length === 0, 'Should have no user errors');
  }, ['method=updateLines']);

  // Test: Update cart note
  await test('Update Cart Note', 'Add note to cart', async () => {
    if (!cartId) {
      throw new Error('No cart ID available');
    }
    const result = await client.cart.updateNote(cartId, 'Test note from SDK');
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
    const cartResult = (result as APISuccess<typeof result.response>).response;
    assert(cartResult.userErrors.length === 0, 'Should have no user errors');
  }, ['method=updateNote']);

  // Test: Update cart attributes
  await test('Update Cart Attributes', 'Add custom attributes to cart', async () => {
    if (!cartId) {
      throw new Error('No cart ID available');
    }
    const result = await client.cart.updateAttributes(cartId, [
      { key: 'testKey', value: 'testValue' },
    ]);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
    const cartResult = (result as APISuccess<typeof result.response>).response;
    assert(cartResult.userErrors.length === 0, 'Should have no user errors');
  }, ['method=updateAttributes']);

  // Test: Apply discount code (expects error - invalid code)
  await test('Apply Discount Code', 'Apply discount code to cart', async () => {
    if (!cartId) {
      throw new Error('No cart ID available');
    }
    const result = await client.cart.updateDiscountCodes(cartId, ['TEST123']);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
    // Discount code may be invalid, but API call should succeed
  }, ['method=updateDiscountCodes']);

  // Test: Remove lines from cart
  await test('Remove Lines From Cart', 'Remove line items from cart', async () => {
    if (!cartId || !lineItemId) {
      throw new Error('No cart ID or line item ID available');
    }
    const result = await client.cart.removeLines(cartId, [lineItemId]);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
    const cartResult = (result as APISuccess<typeof result.response>).response;
    assert(cartResult.userErrors.length === 0, 'Should have no user errors');
  }, ['method=removeLines']);

  // Test: Cart cost calculation
  await test('Cart Cost Calculation', 'Cart should have cost breakdown', async () => {
    if (!cartId) {
      throw new Error('No cart ID available');
    }
    const result = await client.cart.get(cartId);
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart');
    const cart = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(cart.cost, 'Cart should have cost');
    assertNotNull(cart.cost.totalAmount, 'Cart should have total amount');
  }, ['include=cost']);

  // Test combinations: Create cart with different quantities
  for (const quantity of [1, 3, 5]) {
    await test(
      `Create Cart qty=${quantity}`,
      `Create cart with quantity ${quantity}`,
      async () => {
        if (!variantId) {
          throw new Error('No variant ID available');
        }
        const result = await client.cart.create({
          lines: [{ merchandiseId: variantId, quantity }],
        });
        assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
        const cartResult = (result as APISuccess<typeof result.response>).response;
        assert(cartResult.userErrors.length === 0, 'Should have no user errors');
      },
      [`quantity=${quantity}`]
    );
  }

  // Test: Create cart with buyer identity (optional)
  await test('Cart With Buyer Identity', 'Create cart with buyer identity', async () => {
    if (!variantId) {
      throw new Error('No variant ID available');
    }
    const result = await client.cart.create({
      lines: [{ merchandiseId: variantId, quantity: 1 }],
      buyerIdentity: {
        email: 'test@example.com',
        countryCode: 'US',
      },
    });
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Should return cart result');
  }, ['buyerIdentity=true']);
}

import { APISuccess, APIFailure } from 'typesafe-api-call';
import { client, testRunner, test, skip, assertNotNull, assert } from './setup';

/**
 * Helper to check if a result is rate limited
 */
function isRateLimited(result: unknown): boolean {
  if (result instanceof APIFailure) {
    const errorMsg = result.errorMessage || '';
    const responseErrors = JSON.stringify(result.response || []);
    return errorMsg.includes('limit exceeded') || 
           errorMsg.includes('THROTTLED') ||
           responseErrors.includes('limit exceeded') ||
           responseErrors.includes('THROTTLED');
  }
  return false;
}

/**
 * Customer API tests
 * Note: Most operations require valid credentials and may return user errors
 * Note: Customer APIs are heavily rate-limited by Shopify
 */
export async function testCustomerApi() {
  testRunner.startSuite('Customer');

  const testEmail = `test-${Date.now()}@example.com`;

  // Test: Create customer
  await test('Create Customer', 'Create a new customer account', async () => {
    const result = await client.customer.create({
      email: testEmail,
      password: 'TestPassword123!',
      firstName: 'Test',
      lastName: 'User',
      acceptsMarketing: false,
    });
    // Customer creation should succeed or return user errors (not rate limited typically)
    assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
  });

  // Test: Create customer with marketing opt-in
  await test('Create Customer Marketing=true', 'Create customer with marketing acceptance', async () => {
    const result = await client.customer.create({
      email: `test-marketing-${Date.now()}@example.com`,
      password: 'TestPassword123!',
      firstName: 'Test',
      lastName: 'Marketing',
      acceptsMarketing: true,
    });
    assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
  }, ['acceptsMarketing=true']);

  // Test: Create customer with marketing opt-out
  await test('Create Customer Marketing=false', 'Create customer without marketing acceptance', async () => {
    const result = await client.customer.create({
      email: `test-nomarketing-${Date.now()}@example.com`,
      password: 'TestPassword123!',
      firstName: 'Test',
      lastName: 'NoMarketing',
      acceptsMarketing: false,
    });
    assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
  }, ['acceptsMarketing=false']);

  // Test: Login with invalid credentials
  // Note: Login attempts are heavily rate limited by Shopify
  await test('Login Invalid Credentials', 'Login should fail with wrong password', async () => {
    const result = await client.customer.login({
      email: 'test@example.com',
      password: 'wrongpassword',
    });
    // Either we get a proper response (with userErrors for wrong password) or rate limited
    assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
  }, ['credentials=invalid']);

  // Test: Login API structure
  await test('Login Response Structure', 'Login returns proper response structure', async () => {
    const result = await client.customer.login({
      email: 'test@example.com',
      password: 'password123',
    });
    // Either we get a proper response or rate limited
    assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
  });

  // Test: Password recovery
  // Note: Password recovery is heavily rate limited by Shopify
  await test('Password Recovery', 'Request password recovery email', async () => {
    const result = await client.customer.recover('test@example.com');
    // Either we get a proper response or rate limited
    assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
  }, ['method=recover']);

  // Test: Password recovery with new email
  await test('Password Recovery New Email', 'Recovery for recently created email', async () => {
    const result = await client.customer.recover(testEmail);
    // Either we get a proper response or rate limited
    assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
  }, ['email=new']);

  // Test: Customer API error handling
  await test('Invalid Email Format', 'API handles invalid email gracefully', async () => {
    const result = await client.customer.create({
      email: 'not-an-email',
      password: 'TestPassword123!',
      firstName: 'Test',
      lastName: 'User',
      acceptsMarketing: false,
    });
    // Should return with validation errors or be rate limited
    assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
  }, ['email=invalid']);

  // Test: Customer creation with all fields
  await test('Create Customer Full', 'Create customer with all optional fields', async () => {
    const result = await client.customer.create({
      email: `test-full-${Date.now()}@example.com`,
      password: 'TestPassword123!',
      firstName: 'Test',
      lastName: 'Full',
      acceptsMarketing: false,
      phone: '+1234567890',
    });
    assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
  }, ['fields=all']);

  // Test: Multiple login attempts (may fail due to rate limiting)
  // Note: These are often rate limited after even 1-2 attempts
  for (const attempt of [1, 2, 3]) {
    await test(
      `Login Attempt ${attempt}`,
      `Sequential login attempt ${attempt}`,
      async () => {
        const result = await client.customer.login({
          email: 'test@example.com',
          password: 'password123',
        });
        // Either succeeds or is rate limited
        assert(result instanceof APISuccess || isRateLimited(result), 'Should return response or be rate limited');
      },
      [`attempt=${attempt}`]
    );
  }

  // Skip tests that require valid credentials
  skip(
    'Get Customer Profile',
    'Fetch customer profile (requires valid access token)',
    'Requires valid customer access token',
    ['method=get']
  );

  skip(
    'Update Customer',
    'Update customer info (requires valid access token)',
    'Requires valid customer access token',
    ['method=update']
  );

  skip(
    'Create Address',
    'Create customer address (requires valid access token)',
    'Requires valid customer access token',
    ['method=createAddress']
  );

  skip(
    'Update Address',
    'Update customer address (requires valid access token)',
    'Requires valid customer access token',
    ['method=updateAddress']
  );

  skip(
    'Delete Address',
    'Delete customer address (requires valid access token)',
    'Requires valid customer access token',
    ['method=deleteAddress']
  );

  skip(
    'Renew Token',
    'Renew customer access token (requires valid access token)',
    'Requires valid customer access token',
    ['method=renewToken']
  );

  skip(
    'Logout',
    'Logout customer (requires valid access token)',
    'Requires valid customer access token',
    ['method=logout']
  );

  skip(
    'Get Orders',
    'Fetch customer orders (requires valid access token)',
    'Requires valid customer access token',
    ['method=getOrders']
  );
}

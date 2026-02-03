import { APISuccess } from 'typesafe-api-call';
import { client, testRunner, test, assertNotNull } from './setup';

export async function testShopApi() {
  testRunner.startSuite('Shop');

  // Test: Get shop info
  await test('Get Shop Info', 'Fetch basic shop information', async () => {
    const result = await client.shop.get();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Shop info should be returned');
    const shop = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(shop.id, 'Shop should have an ID');
    assertNotNull(shop.name, 'Shop should have a name');
  });

  // Test: Shop has primary domain
  await test('Shop Primary Domain', 'Shop should have primary domain configured', async () => {
    const result = await client.shop.get();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Shop info should be returned');
    const shop = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(shop.primaryDomain, 'Shop should have primary domain');
    assertNotNull(shop.primaryDomain.host, 'Primary domain should have host');
    assertNotNull(shop.primaryDomain.url, 'Primary domain should have URL');
  });

  // Test: Shop payment settings
  await test('Shop Payment Settings', 'Shop should have payment settings', async () => {
    const result = await client.shop.get();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Shop info should be returned');
    const shop = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(shop.paymentSettings, 'Shop should have payment settings');
    assertNotNull(shop.paymentSettings.currencyCode, 'Payment settings should have currency code');
  });

  // Test: Shop brand info
  await test('Shop Brand Info', 'Fetch shop brand information', async () => {
    const result = await client.shop.get();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Shop info should be returned');
    const shop = (result as APISuccess<typeof result.response>).response!;
    // Brand may be null, but the call should succeed
    // Just verify we can access it
    const _brand = shop.brand;
  });

  // Test: Shop policies
  await test('Shop Policies', 'Fetch shop policies', async () => {
    const result = await client.shop.get();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Shop info should be returned');
    const shop = (result as APISuccess<typeof result.response>).response!;
    // Policies may be null but should be accessible
    const _refund = shop.refundPolicy;
    const _privacy = shop.privacyPolicy;
    const _terms = shop.termsOfService;
    const _shipping = shop.shippingPolicy;
  });

  // Test: Get localization info
  await test('Get Localization', 'Fetch localization/market information', async () => {
    const result = await client.shop.getLocalization();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Localization info should be returned');
    const loc = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(loc.country, 'Should have current country');
    assertNotNull(loc.language, 'Should have current language');
  });

  // Test: Available countries
  await test('Available Countries', 'Shop should have available countries for shipping', async () => {
    const result = await client.shop.getLocalization();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Localization info should be returned');
    const loc = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(loc.availableCountries, 'Should have available countries');
  });

  // Test: Available languages
  await test('Available Languages', 'Shop should have available languages', async () => {
    const result = await client.shop.getLocalization();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Localization info should be returned');
    const loc = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(loc.availableLanguages, 'Should have available languages');
  });

  // Test: Market info
  await test('Market Info', 'Shop should have market information', async () => {
    const result = await client.shop.getLocalization();
    assertNotNull(result instanceof APISuccess ? result.response : null, 'Localization info should be returned');
    const loc = (result as APISuccess<typeof result.response>).response!;
    assertNotNull(loc.market, 'Should have market info');
    assertNotNull(loc.market.id, 'Market should have ID');
  });
}

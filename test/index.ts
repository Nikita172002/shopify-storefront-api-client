import { testProductApi } from './product.test';
import { testCartApi } from './cart.test';
import { testCollectionApi } from './collection.test';
import { testShopApi } from './shop.test';
import { testSearchApi } from './search.test';
import { testContentApi } from './content.test';
import { testCustomerApi } from './customer.test';
import { testMetaobjectApi } from './metaobject.test';
import { testRunner } from './setup';

async function runAllTests() {
  console.log('\n');
  console.log('╔' + '═'.repeat(68) + '╗');
  console.log('║' + ' '.repeat(10) + 'SHOPIFY STOREFRONT API SDK - INTEGRATION TESTS' + ' '.repeat(11) + '║');
  console.log('╚' + '═'.repeat(68) + '╝');
  console.log('\n');

  const suites = [
    { name: 'Shop', fn: testShopApi },
    { name: 'Product', fn: testProductApi },
    { name: 'Collection', fn: testCollectionApi },
    { name: 'Cart', fn: testCartApi },
    { name: 'Search', fn: testSearchApi },
    { name: 'Content', fn: testContentApi },
    { name: 'Customer', fn: testCustomerApi },
    { name: 'Metaobject', fn: testMetaobjectApi },
  ];

  for (const suite of suites) {
    console.log(`\n${'─'.repeat(50)}`);
    console.log(`  Running: ${suite.name} API Tests`);
    console.log('─'.repeat(50));

    try {
      await suite.fn();
    } catch (error) {
      console.error(`\n  Suite ${suite.name} threw unexpected error:`, error);
    }
  }

  // Print final results table
  console.log('\n');
  testRunner.printTable();

  // Exit with error code if any tests failed
  const stats = testRunner.getStats();
  if (stats.failed > 0) {
    process.exit(1);
  }
}

// Run tests
runAllTests().catch((error) => {
  console.error('Test runner failed:', error);
  process.exit(1);
});

/**
 * Test Framework for Shopify Storefront API SDK
 * Provides structured test case tracking, combination testing, and table output
 */

export type TestStatus = 'PASS' | 'FAIL' | 'SKIP';

export interface TestCase {
  id: string;
  suite: string;
  name: string;
  description: string;
  status: TestStatus;
  duration: number;
  error?: string;
  combinations?: string[];
}

export interface TestSuite {
  name: string;
  cases: TestCase[];
}

class TestRunner {
  private suites: Map<string, TestSuite> = new Map();
  private currentSuite: string = '';
  private testCounter: number = 0;

  startSuite(name: string): void {
    this.currentSuite = name;
    if (!this.suites.has(name)) {
      this.suites.set(name, { name, cases: [] });
    }
  }

  async runTest(
    name: string,
    description: string,
    fn: () => Promise<void>,
    combinations?: string[]
  ): Promise<TestCase> {
    this.testCounter++;
    const id = `TC-${String(this.testCounter).padStart(3, '0')}`;
    const start = Date.now();
    
    let status: TestStatus = 'PASS';
    let error: string | undefined;

    try {
      await fn();
    } catch (e) {
      status = 'FAIL';
      error = e instanceof Error ? e.message : String(e);
    }

    const duration = Date.now() - start;
    const testCase: TestCase = {
      id,
      suite: this.currentSuite,
      name,
      description,
      status,
      duration,
      error,
      combinations,
    };

    const suite = this.suites.get(this.currentSuite);
    if (suite) {
      suite.cases.push(testCase);
    }

    return testCase;
  }

  skipTest(name: string, description: string, reason: string, combinations?: string[]): TestCase {
    this.testCounter++;
    const id = `TC-${String(this.testCounter).padStart(3, '0')}`;
    
    const testCase: TestCase = {
      id,
      suite: this.currentSuite,
      name,
      description,
      status: 'SKIP',
      duration: 0,
      error: reason,
      combinations,
    };

    const suite = this.suites.get(this.currentSuite);
    if (suite) {
      suite.cases.push(testCase);
    }

    return testCase;
  }

  getAllCases(): TestCase[] {
    const allCases: TestCase[] = [];
    for (const suite of this.suites.values()) {
      allCases.push(...suite.cases);
    }
    return allCases;
  }

  getSuites(): TestSuite[] {
    return Array.from(this.suites.values());
  }

  getStats(): { total: number; passed: number; failed: number; skipped: number } {
    const cases = this.getAllCases();
    return {
      total: cases.length,
      passed: cases.filter(c => c.status === 'PASS').length,
      failed: cases.filter(c => c.status === 'FAIL').length,
      skipped: cases.filter(c => c.status === 'SKIP').length,
    };
  }

  printTable(): void {
    const cases = this.getAllCases();
    
    // Calculate column widths
    const cols = {
      id: 8,
      suite: 12,
      name: 35,
      combinations: 30,
      status: 8,
      duration: 10,
    };

    const totalWidth = cols.id + cols.suite + cols.name + cols.combinations + cols.status + cols.duration + 7; // 7 for separators

    // Header
    console.log('\n' + '═'.repeat(totalWidth));
    console.log('  TEST RESULTS');
    console.log('═'.repeat(totalWidth));
    
    // Column headers
    const header = [
      'ID'.padEnd(cols.id),
      'Suite'.padEnd(cols.suite),
      'Test Name'.padEnd(cols.name),
      'Combinations'.padEnd(cols.combinations),
      'Status'.padEnd(cols.status),
      'Time'.padStart(cols.duration),
    ].join(' │ ');
    
    console.log(header);
    console.log('─'.repeat(totalWidth));

    // Rows
    for (const tc of cases) {
      const statusIcon = tc.status === 'PASS' ? '✓' : tc.status === 'FAIL' ? '✗' : '○';
      const statusColor = tc.status === 'PASS' ? '\x1b[32m' : tc.status === 'FAIL' ? '\x1b[31m' : '\x1b[33m';
      const reset = '\x1b[0m';
      
      const combinationsStr = tc.combinations?.join(', ') || '-';
      const durationStr = tc.duration > 0 ? `${tc.duration}ms` : '-';

      const row = [
        tc.id.padEnd(cols.id),
        this.truncate(tc.suite, cols.suite).padEnd(cols.suite),
        this.truncate(tc.name, cols.name).padEnd(cols.name),
        this.truncate(combinationsStr, cols.combinations).padEnd(cols.combinations),
        `${statusColor}${statusIcon} ${tc.status}${reset}`.padEnd(cols.status + 9), // +9 for color codes
        durationStr.padStart(cols.duration),
      ].join(' │ ');

      console.log(row);
    }

    console.log('═'.repeat(totalWidth));

    // Summary by suite
    console.log('\n  SUITE SUMMARY');
    console.log('─'.repeat(50));
    
    for (const suite of this.suites.values()) {
      const passed = suite.cases.filter(c => c.status === 'PASS').length;
      const failed = suite.cases.filter(c => c.status === 'FAIL').length;
      const skipped = suite.cases.filter(c => c.status === 'SKIP').length;
      const total = suite.cases.length;
      
      const suiteStatus = failed > 0 ? '\x1b[31m✗ FAIL\x1b[0m' : '\x1b[32m✓ PASS\x1b[0m';
      console.log(`  ${suiteStatus}  ${suite.name.padEnd(15)} ${passed}/${total} passed${skipped > 0 ? `, ${skipped} skipped` : ''}`);
    }

    // Overall summary
    const stats = this.getStats();
    console.log('\n' + '═'.repeat(50));
    console.log(`  TOTAL: ${stats.total} tests | \x1b[32m${stats.passed} passed\x1b[0m | \x1b[31m${stats.failed} failed\x1b[0m | \x1b[33m${stats.skipped} skipped\x1b[0m`);
    console.log('═'.repeat(50) + '\n');

    // Print failed tests details
    const failedCases = cases.filter(c => c.status === 'FAIL');
    if (failedCases.length > 0) {
      console.log('\n  FAILED TESTS DETAILS');
      console.log('─'.repeat(50));
      for (const tc of failedCases) {
        console.log(`\n  ${tc.id}: ${tc.suite} > ${tc.name}`);
        console.log(`  Error: ${tc.error}`);
      }
      console.log('\n');
    }
  }

  private truncate(str: string, maxLen: number): string {
    if (str.length <= maxLen) return str;
    return str.substring(0, maxLen - 2) + '..';
  }

  reset(): void {
    this.suites.clear();
    this.testCounter = 0;
  }
}

// Singleton instance
export const testRunner = new TestRunner();

// Helper to run tests with combinations
export async function runWithCombinations<T extends Record<string, unknown[]>>(
  runner: TestRunner,
  baseName: string,
  baseDescription: string,
  combinations: T,
  testFn: (combo: { [K in keyof T]: T[K][number] }) => Promise<void>
): Promise<void> {
  const keys = Object.keys(combinations) as (keyof T)[];
  const valueSets = keys.map(k => combinations[k]);
  
  // Generate all combinations
  function* generateCombos(index: number, current: Partial<{ [K in keyof T]: T[K][number] }>): Generator<{ [K in keyof T]: T[K][number] }> {
    if (index === keys.length) {
      yield current as { [K in keyof T]: T[K][number] };
      return;
    }
    
    const key = keys[index];
    for (const value of valueSets[index]) {
      yield* generateCombos(index + 1, { ...current, [key]: value });
    }
  }

  for (const combo of generateCombos(0, {})) {
    const comboStr = keys.map(k => `${String(k)}=${combo[k]}`);
    const name = `${baseName} [${comboStr.join(', ')}]`;
    
    await runner.runTest(name, baseDescription, () => testFn(combo), comboStr as string[]);
  }
}

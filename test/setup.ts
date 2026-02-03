import { config } from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { StorefrontClient } from "../src";
import { testRunner, TestCase } from "./framework";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from test/.env
config({ path: resolve(__dirname, ".env") });

const rawShopDomain = process.env.SHOPIFY_SHOP_DOMAIN;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!rawShopDomain || !accessToken) {
  console.error("Missing required environment variables:");
  console.error("  SHOPIFY_SHOP_DOMAIN");
  console.error("  SHOPIFY_STOREFRONT_ACCESS_TOKEN");
  console.error("\nPlease configure test/.env with your Shopify credentials.");
  process.exit(1);
}

// Normalize shop domain - strip protocol and trailing slashes
const shopDomain = rawShopDomain
  .replace(/^https?:\/\//, "")
  .replace(/\/+$/, "");

export const client = new StorefrontClient({
  shopDomain,
  accessToken,
});

export { testRunner };

// Helper to run a test case
export async function test(
  name: string,
  description: string,
  fn: () => Promise<void>,
  combinations?: string[]
): Promise<TestCase> {
  return testRunner.runTest(name, description, fn, combinations);
}

// Helper to skip a test
export function skip(
  name: string,
  description: string,
  reason: string,
  combinations?: string[]
): TestCase {
  return testRunner.skipTest(name, description, reason, combinations);
}

// Helper to assert conditions
export function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

// Helper to assert not null
export function assertNotNull<T>(value: T | null | undefined, message: string): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error(`Assertion failed: ${message} - value is ${value}`);
  }
}

// Helper to assert equals
export function assertEquals<T>(actual: T, expected: T, message: string): void {
  if (actual !== expected) {
    throw new Error(`Assertion failed: ${message} - expected ${expected}, got ${actual}`);
  }
}

// Helper to assert array length
export function assertLength(arr: unknown[], minLength: number, message: string): void {
  if (arr.length < minLength) {
    throw new Error(`Assertion failed: ${message} - expected at least ${minLength} items, got ${arr.length}`);
  }
}

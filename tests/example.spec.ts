import { test, expect } from '@playwright/test';







test('API link is present in navigation', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const apiLink = page.getByRole('link', { name: 'A' });
  await expect(apiLink).toBeVisible();
});

// Content tests
test('main heading is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const heading = page.locator('h1').first();
  await expect(heading).toBeVisible();
});


test('API liaank is present in navigation', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const apiLink = page.getByRole('link', { name: 'A' });
  await expect(apiLink).toBeVisible();
});

// Content tests
test('main haeading is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const heading = page.locator('h1').first();
  await expect(heading).toBeVisible();
});



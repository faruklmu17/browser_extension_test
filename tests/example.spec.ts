import { test, expect } from '@playwright/test';



// Navigation tests
test('get started link navigates to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);
});

test('docs navigation is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const docsLink = page.getByRole('link', { name: 'Docs' });
  await expect(docsLink).toBeVisible();
});

test('API link is present in navigation', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const apiLink = page.getByRole('link', { name: 'API' });
  await expect(apiLink).toBeVisible();
});

// Content tests
test('main heading is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const heading = page.locator('h1').first();
  await expect(heading).toBeVisible();
});

test('search functionality is present', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const searchButton = page.getByRole('button', { name: /search/i });
  await expect(searchButton).toBeVisible();
});

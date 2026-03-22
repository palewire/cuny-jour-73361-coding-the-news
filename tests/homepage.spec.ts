import { test, expect } from '@playwright/test';

const BASE = '/docs/coding-the-news';

test.describe('Homepage', () => {
  test('loads with hero and modules', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await expect(page.locator('section').first()).toBeVisible();
    await expect(page.locator('h1')).toContainText('Coding the News');
    await expect(page.locator('footer')).toBeVisible();
  });

  test('has correct title', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await expect(page).toHaveTitle(/Coding the News/);
  });

  test('skip-to-content link exists', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toHaveCount(1);
  });

  test('script cards are visible', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await expect(page.locator('a[href*="/scripts/"]').first()).toBeVisible();
  });
});

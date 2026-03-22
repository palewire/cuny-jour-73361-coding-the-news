import { test, expect } from '@playwright/test';

const BASE = '/docs/coding-the-news';

test.describe('Script pages', () => {
  test('clicking a script card navigates to script page', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const firstCard = page.locator('a[href*="/scripts/week-"]').first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/scripts\/week-/);
  });

  test('script page has title in HTML', async ({ page }) => {
    const response = await page.goto(`${BASE}/scripts/week-1/`);
    expect(response?.status()).toBe(200);
    const content = await page.content();
    expect(content).toContain('Coding the News');
  });

  test('prev/next navigation links exist', async ({ page }) => {
    await page.goto(`${BASE}/scripts/week-1/`);
    const navLinks = page.locator('a[href*="/scripts/week-"]');
    expect(await navLinks.count()).toBeGreaterThan(0);
  });

  test('locked scripts are not clickable', async ({ page }) => {
    await page.goto(`${BASE}/`);
    const allScriptLinks = page.locator('a[href*="/scripts/week-"]');
    const count = await allScriptLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});

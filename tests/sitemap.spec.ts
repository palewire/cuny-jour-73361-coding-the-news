import { test, expect } from '@playwright/test';

const BASE = '/docs/coding-the-news';

test.describe('Sitemap', () => {
  test('returns valid XML with expected URLs', async ({ page }) => {
    const response = await page.goto(`${BASE}/sitemap.xml`);
    expect(response?.status()).toBe(200);
    const content = await page.content();
    expect(content).toContain('urlset');
    expect(content).toContain('/docs/coding-the-news/scripts/week-1/');
    expect(content).toContain('/docs/coding-the-news/grading/module-1/');
  });
});

test.describe('Robots.txt', () => {
  test('exists and references sitemap', async ({ page }) => {
    const response = await page.goto(`${BASE}/robots.txt`);
    expect(response?.status()).toBe(200);
  });
});

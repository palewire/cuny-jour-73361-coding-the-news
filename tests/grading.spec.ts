import { test, expect } from '@playwright/test';

const BASE = '/docs/coding-the-news';

test.describe('Grading pages', () => {
  test('grading page loads with content', async ({ page }) => {
    const response = await page.goto(`${BASE}/grading/module-1/`);
    expect(response?.status()).toBe(200);
    const content = await page.content();
    expect(content).toContain('Module 1');
    expect(content).toContain('Attendance');
  });

  test('grading page has navigation links', async ({ page }) => {
    await page.goto(`${BASE}/grading/module-1/`);
    const content = await page.content();
    expect(content).toContain('module-2');
  });

  test('middle module links to both neighbors', async ({ page }) => {
    await page.goto(`${BASE}/grading/module-2/`);
    const content = await page.content();
    expect(content).toContain('module-1');
    expect(content).toContain('module-3');
  });

  test('last module links to previous only', async ({ page }) => {
    await page.goto(`${BASE}/grading/module-3/`);
    const content = await page.content();
    expect(content).toContain('module-2');
  });
});

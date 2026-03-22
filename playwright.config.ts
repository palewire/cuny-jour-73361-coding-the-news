import { defineConfig } from '@playwright/test';

const SERVER_URL = 'http://localhost:4173';

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: SERVER_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
  webServer: {
    command: process.env.CI ? 'npm run preview' : 'npm run build && npm run preview',
    url: `${SERVER_URL}/docs/coding-the-news/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});

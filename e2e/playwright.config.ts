import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: [['list']],
  use: {
    browserName: "webkit",
    trace: 'on-first-retry',
    headless: true,
    ignoreHTTPSErrors: true,
  },
});

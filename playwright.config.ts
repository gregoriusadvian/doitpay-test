import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['line'], ['allure-playwright']],
  use: {
    baseURL: 'https://www.demoblaze.com/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { browserName: 'chromium' }
    },
    {
      name: 'Mobile iPhone X',
      use: { ...devices['iPhone X'] }
    }
  ]
});

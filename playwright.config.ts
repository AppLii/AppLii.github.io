import { defineConfig, devices } from '@playwright/test'

// nuxt.config.ts の sitemap.exclude と合わせて非公開ページを除外した公開ページ一覧
export const PUBLIC_PAGES = [
  '/',
  '/about-cafe-app',
  '/about-dev',
  '/about-meeting-room',
  '/about-us',
  '/contact',
  '/pages',
  '/newcomers',
  '/newcomers/2024',
  '/newcomers/2025',
  '/newcomers/2026',
]

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npx serve .output/public --listen 3000 --no-clipboard',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 30 * 1000,
  },
})

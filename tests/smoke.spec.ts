import { test, expect } from '@playwright/test'
import { PUBLIC_PAGES } from '../playwright.config'

for (const path of PUBLIC_PAGES) {
  test(`${path} - 200 表示・実行時エラー 0 件`, async ({ page }) => {
    const consoleErrors: string[] = []
    const pageErrors: string[] = []

    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })
    page.on('pageerror', (err) => {
      pageErrors.push(err.message)
    })

    const response = await page.goto(path)

    expect(response?.status(), `${path} が HTTP 200 を返すこと`).toBe(200)
    expect(consoleErrors, `${path} で console.error が 0 件であること`).toHaveLength(0)
    expect(pageErrors, `${path} で uncaught エラーが 0 件であること`).toHaveLength(0)
  })
}

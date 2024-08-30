import { test, expect } from "@playwright/test";
import urlsWithTitles from "./urls.json";
// - In the file itself
// - Outside the file

for (const item of urlsWithTitles) {
  test(`${item.title} title test`, async ({ page }) => {
    await page.goto(item.url);
    const actualTitle = await page.title();
    expect(actualTitle).toBe(item.title);
  });
}

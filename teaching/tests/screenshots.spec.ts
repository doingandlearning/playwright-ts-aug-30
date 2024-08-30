import { test, expect } from "@playwright/test";

// test.setTimeout()

test.skip("Take a screenshot", async ({ page, browserName }) => {
  // page.setDefaultTimeout()
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  await page.screenshot({
    path: `screenshots/${new Date().getTime()}-${browserName}-desktop-screenshot.jpg`,
    fullPage: true,
  });

  // await page.update()
  // Ctrl+K I

  await page.setViewportSize({ width: 640, height: 480 });

  await page.screenshot({
    path: `screenshots/${new Date().getTime()}-${browserName}-mobile-screenshot.jpg`,
    fullPage: true,
  });
});

test("Visual regression", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  await expect(page).toHaveScreenshot({
    maxDiffPixels: 120000,
    fullPage: true,
  });
});

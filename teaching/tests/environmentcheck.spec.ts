import { test, expect } from "@playwright/test";

test.only("environment", async ({ page }) => {
  await page.goto("/");
  await page.screenshot({ path: "test.png" });
});

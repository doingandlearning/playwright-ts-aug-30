import { test, expect } from "@playwright/test";
import { HomePage } from "./HomePage";

test("Check cookie banner goes and stays gone", async ({ page }) => {
  const homepage = new HomePage(page);

  await expect(homepage.cookieBanner()).toBeVisible();
  await homepage.clickTheCookieButtons();
  await expect(homepage.cookieBanner()).not.toBeVisible();
});

// class!

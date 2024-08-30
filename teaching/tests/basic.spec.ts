import { test, expect } from "@playwright/test";

// DRY
// Don't Repeat Yourself

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
});

// test.beforeAll()
// test.afterEach()
test("Check companies house title is correct", async ({ page }) => {
  // Given
  // When

  // Then
  await expect(page).toHaveTitle("Companies House - GOV.UK");
  await expect(page).toHaveTitle(/Companies/); // RegExp
});

test("Cookie banner goes and stays gone.", async ({ page, browser }) => {
  // Check that the cookie banner is visible

  const cookieBanner = page.getByLabel("Cookies on GOV.UK");
  await expect(cookieBanner).toBeVisible();

  // Click the buttons
  await page.getByRole("button", { name: "Accept additional cookies" }).click();
  await page.getByRole("button", { name: "Hide this message" }).click();

  // The cookies should not be visible.
  await expect(cookieBanner).not.toBeVisible();

  await page.reload();

  // The cookies should not be visible.
  await expect(cookieBanner).not.toBeVisible();
});

test("test kevin is still a director of his company", async ({ page }) => {
  // Click the buttons
  await page.getByRole("link", { name: "Find company information" }).click();
  await page.getByRole("button", { name: "Start now" }).click();

  await page.getByLabel("Enter company name, number or").click();
  await page
    .getByLabel("Enter company name, number or")
    .fill("doing and learning");

  await page.getByRole("button", { name: "Search" }).click();
  await page.getByRole("link", { name: "DOING AND LEARNING LTD" }).click();

  await page
    .getByRole("link", { name: "People for DOING AND LEARNING" })
    .click();

  await expect(
    page.getByRole("link", { name: "CUNNINGHAM, Kevin Peter" })
  ).toBeVisible();

  await expect(page.locator("#officer-status-tag-2")).toHaveText("Active");
});

test("test", async ({ page }) => {
  await page.goto(
    "https://find-and-update.company-information.service.gov.uk/"
  );

  const page1Promise = page.waitForEvent("popup");

  // Promise => resolved/rejected

  await page.getByRole("link", { name: "Alphabetical company search" }).click();

  const alphaSearchPage = await page1Promise;
});

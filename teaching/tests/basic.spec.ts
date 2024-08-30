import { test, expect } from "@playwright/test";

test("Check companies house title is correct", async ({ page }) => {
  // Given
  // When
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  // Then
  await expect(page).toHaveTitle("Companies House - GOV.UK");
  await expect(page).toHaveTitle(/Companies/); // RegExp
});

test("Cookie banner goes and stays gone.", async ({ page, browser }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
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
  // Go to the website
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
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

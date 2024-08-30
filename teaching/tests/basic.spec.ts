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

test("Cookie banner goes and stays gone.", async ({ page }) => {
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

  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  // The cookies should not be visible.
  await expect(cookieBanner).not.toBeVisible();
});

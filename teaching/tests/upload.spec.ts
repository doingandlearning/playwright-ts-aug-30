import { test, expect } from "@playwright/test";
import path from "path";

test("file upload example with success message", async ({ page }) => {
  // Navigate to the file upload page
  await page.goto(
    "https://66d1d64e9b5aa995e216e11a--peppy-rolypoly-2ac869.netlify.app/"
  );

  // Define the file path to upload
  const filePath = path.resolve("assets", "sample-file.txt");

  // Upload the file
  await page.setInputFiles('input[type="file"]', filePath);

  // Assert the success message is visible
  await expect(page.locator("#upload-message")).toBeVisible();
  await expect(page.locator("#upload-message")).toHaveText(
    "File uploaded successfully!"
  );
});

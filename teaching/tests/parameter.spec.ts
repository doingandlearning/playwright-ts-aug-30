import { test, expect } from "@playwright/test";

// - In the file itself
// - Outside the file

const urlsWithTitles = [
  {
    url: "https://www.gov.uk/government/organisations/companies-house",
    title: "Companies House - GOV.UK",
  },
  {
    url: "https://www.google.com",
    title: "Google",
  },
  {
    url: "https://www.bbc.co.uk/news",
    title: "Home - BBC News",
  },
  {
    url: "https://kevincunningham.co.uk",
    title: "Kevin Cunningham (@dolearning)",
  },
];

for (const item of urlsWithTitles) {
  test(`${item.title} title test`, async ({ page }) => {
    await page.goto(item.url);
    const actualTitle = await page.title();
    expect(actualTitle).toBe(item.title);
  });
}

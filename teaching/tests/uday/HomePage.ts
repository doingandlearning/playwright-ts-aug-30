import { Page } from "@playwright/test";
import { LOCATORS } from "./locators"; // Import the locators

export class HomePage {
  constructor(public page: Page) {
    this.page.goto(
      "https://www.gov.uk/government/organisations/companies-house"
    );
  }

  cookieBanner() {
    return this.page.locator(LOCATORS.cookieBannerLabel);
  }

  async clickTheCookieButtons() {
    await this.page.locator(LOCATORS.acceptCookiesButton).click();
    await this.page.locator(LOCATORS.hideMessageButton).click();
  }
}

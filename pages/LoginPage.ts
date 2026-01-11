import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.locator('#login2').click();
    await this.page.locator('#loginusername').waitFor();
    await this.page.locator('#loginusername').fill(username);
    await this.page.locator('#loginpassword').fill(password);
    await this.page.locator("button[onclick='logIn()']").click();
  }
}

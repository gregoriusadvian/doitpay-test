import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyItem(name: string) {
  await expect(
    this.page.locator('td', { hasText: name }).first()
  ).toBeVisible();
}

  async placeOrder() {
    await this.page.locator('button', { hasText: 'Place Order' }).click();
  }
}

import { Page } from '@playwright/test';

export class OrderPage {
  constructor(private page: Page) {}

  async fillOrder(data: any) {
    await this.page.fill('#name', data.name);
    await this.page.fill('#country', data.country);
    await this.page.fill('#city', data.city);
    await this.page.fill('#card', data.card);
    await this.page.fill('#month', data.month);
    await this.page.fill('#year', data.year);
    await this.page.locator('button', { hasText: 'Purchase' }).click();
  }

  async getSuccessMessage() {
    return this.page.locator('.sweet-alert h2');
  }
}

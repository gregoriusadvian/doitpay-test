import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async selectLaptop(name: string) {
    await this.page.locator('a', { hasText: 'Laptops' }).click();
    await this.page.locator('a', { hasText: name }).waitFor();
    await this.page.locator('a', { hasText: name }).click();
  }

  async addToCart() {
    await this.page.locator('a', { hasText: 'Add to cart' }).click();
  }

  async goToCart() {
    await this.page.locator('#cartur').click();
  }
}

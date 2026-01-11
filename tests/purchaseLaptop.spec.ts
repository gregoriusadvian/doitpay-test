import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { OrderPage } from '../pages/OrderPage';
import data from '../data/testData.json';
import user from '../data/testUser.json';

test('Purchase Sony Vaio i5', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const cart = new CartPage(page);
  const order = new OrderPage(page);

  await page.goto('/');
  await login.login(user.user1.username, user.user1.password);

  await home.selectLaptop(data.product.name);

  page.once('dialog', dialog => dialog.accept());
  await home.addToCart();

  await home.goToCart();
  await cart.verifyItem(data.product.name);

  await cart.placeOrder();
  await order.fillOrder(data.order);

  await expect(await order.getSuccessMessage()).toHaveText('Thank you for your purchase!');
});

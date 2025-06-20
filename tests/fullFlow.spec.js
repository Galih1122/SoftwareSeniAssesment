const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { InventoryPage } = require('../pageObjects/InventoryPage');
const { CartPage } = require('../pageObjects/CartPage');
const { CheckoutPage } = require('../pageObjects/CheckoutPage');

test('Full flow test', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  const itemCount = Math.floor(Math.random() * 4) + 2;
  await inventory.addItems(itemCount);
  await inventory.goToCart();
  await cart.removeFirstItem();
  await cart.checkout();
  await checkout.fillForm('John', 'Doe', '12345');
  await checkout.continue();
  await checkout.finish();
});

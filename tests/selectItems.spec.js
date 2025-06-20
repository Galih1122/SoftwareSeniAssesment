const { test, expect } = require('@playwright/test');
const { InventoryPage } = require('../pageObjects/InventoryPage');
const { LoginPage } = require('../pageObjects/LoginPage');

test.describe('Select Items Tests', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
  });

  test('Add 2 items', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addItems(2);
  });

  test('Add 3 items', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addItems(3);
  });

  test('Add 4 items', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addItems(4);
  });
});
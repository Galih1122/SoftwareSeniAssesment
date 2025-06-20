class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator('.shopping_cart_link');
    this.addButtons = page.locator('.inventory_item button');
  }

  async addItems(count) {
    for (let i = 0; i < count; i++) {
      await this.addButtons.nth(i).click();
    }
  }

  async goToCart() {
    await this.cartButton.click();
  }
}

module.exports.InventoryPage = InventoryPage;
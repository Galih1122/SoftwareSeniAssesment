class CartPage {
  constructor(page) {
    this.page = page;
    this.removeButtons = page.locator('.cart_button');
    this.checkoutButton = page.locator('#checkout');
  }

  async removeFirstItem() {
    await this.removeButtons.nth(0).click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports.CartPage = CartPage;
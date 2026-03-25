class HomePage {
  inventoryList() {
    return cy.get(".inventory_list");
  }
  cartBadge() {
    return cy.get(".shopping_cart_badge");
  }
  openCart() {
    cy.get(".shopping_cart_link").click();
  }
  addToCart(product: string) {
    cy.get(`[data-test="add-to-cart-${product}"]`).click();
  }
  removeFromCart(product: string) {
    cy.get(`[data-test="remove-${product}"]`).click();
  }
  openMenu() {
    cy.get("#react-burger-menu-btn").click();
  }
  logout() {
    cy.get("#logout_sidebar_link").click();
  }
  openProduct(product: string) {
    cy.get(`[data-test="inventory-item-${product}-img"]`).click();
  }

  sortProductsBy(value: string) {
    cy.get('[data-test="product-sort-container"]').select(value);
  }

  productPrices() {
    return cy.get(".inventory_item_price");
  }

  getProductPrices() {
    const prices: number[] = [];

    return this.productPrices()
      .each(($el) => {
        prices.push(parseFloat($el.text().replace("$", "")));
      })
      .then(() => prices);
  }
}
export default new HomePage();

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
}
export default new HomePage();

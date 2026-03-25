class CartPage {
  cartItems() {
    return cy.get(".cart_item");
  }
  removeItem(product: string) {
    cy.get(`[data-test="remove-${product}"]`).click();
  }
  continueShopping() {
    cy.get('[data-test="continue-shopping"]').click();
  }
  checkout() {
    cy.get('[data-test="checkout"]').click();
  }
}
export default new CartPage();

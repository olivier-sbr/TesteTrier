class ProductPage {
  productTitle() {
    return cy.get('[data-test="inventory-item-name"]');
  }
}
export default new ProductPage();

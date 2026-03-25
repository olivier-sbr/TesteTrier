import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import { PRODUCTS } from "../../support/products";

describe("Inventory tests", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory");
    HomePage.inventoryList().should("be.visible");
  });

  it("Should navigate to product details page when clicking on a product", () => {
    HomePage.openProduct(PRODUCTS.BOLT_TSHIRT);

    cy.url().should("include", "/inventory-item");
    ProductPage.productTitle().should("be.visible");
  });

  it("Should sort products by price from low to high", () => {
    HomePage.sortProductsBy("lohi");

    HomePage.getProductPrices().then((prices) => {
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });
});

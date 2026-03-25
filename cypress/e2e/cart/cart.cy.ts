import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";
import { PRODUCTS } from "../../support/products";

describe("Cart tests", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory");
  });

  it("Should add a product to the cart and display it in cart page", () => {
    HomePage.addToCart(PRODUCTS.BACKPACK);
    HomePage.cartBadge().should("be.visible").and("have.text", "1");
    HomePage.openCart();

    cy.url().should("include", "/cart");
    CartPage.cartItems().should("have.length", 1);
  });

  it("Should remove a product from the cart page", () => {
    HomePage.addToCart(PRODUCTS.BACKPACK);
    HomePage.openCart();
    CartPage.cartItems().should("have.length", 1);

    CartPage.removeItem(PRODUCTS.BACKPACK);

    CartPage.cartItems().should("have.length", 0);
  });
});

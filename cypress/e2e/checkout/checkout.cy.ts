import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import { PRODUCTS } from "../../support/products";

describe("Checkout tests", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
    HomePage.addToCart(PRODUCTS.BACKPACK);
    HomePage.openCart();
    CartPage.checkout();
    cy.url().should("include", "/checkout-step-one");
  });

  it("Should proceed to checkout overview after filling required information", () => {
    CheckoutPage.fillInformation("Marco", "Olivier", "88700-000");
    CheckoutPage.continue();

    cy.url().should("include", "/checkout-step-two");
    CheckoutPage.checkoutOverview().should("be.visible");
    CartPage.cartItems().should("have.length", 1);
  });

  it("Should finish purchase successfully", () => {
    CheckoutPage.fillInformation("Marco", "Olivier", "88700-000");
    CheckoutPage.continue();
    cy.url().should("include", "/checkout-step-two");

    CheckoutPage.finish();

    cy.url().should("include", "/checkout-complete");
    CheckoutPage.checkoutComplete().should("be.visible");
  });

  it("Should not continue checkout without required information", () => {
    CheckoutPage.continue();

    cy.url().should("include", "/checkout-step-one");
    CheckoutPage.errorMessage().should("be.visible");
  });
});

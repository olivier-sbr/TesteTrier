import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";

describe("Login tests", () => {
  it("Should authenticate successfully with valid credentials", () => {
    LoginPage.visit();

    LoginPage.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory");
    HomePage.inventoryList().should("be.visible");
  });

  it("Should not authenticate with invalid credentials", () => {
    LoginPage.visit();

    LoginPage.login("wrong_user", "secret_sauce");

    cy.url().should("not.include", "/inventory");
    LoginPage.loginButton().should("be.visible");
    LoginPage.errorMessage().should("be.visible");
  });
});

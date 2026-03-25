import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";

describe("Authentication tests", () => {
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
    LoginPage.errorMessage().should("be.visible");
  });
  it("Should logout successfully after login", () => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");

    HomePage.openMenu();
    HomePage.logout();

    cy.url().should("include", "/");
    LoginPage.loginButton().should("be.visible");
  });
});

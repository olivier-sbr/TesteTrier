describe("Login in tests", () => {
  it("Should login successfully", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get(".inventory_list").should("be.visible");
    cy.url().should("include", "/inventory");
  });

  it("Should show an error and remain on login page when credentials are invalid", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("wrong_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("not.include", "/inventory");
    cy.get('[data-test="login-button"]').should("be.visible");
    cy.get('[data-test="error"]').should("be.visible");
  });
});

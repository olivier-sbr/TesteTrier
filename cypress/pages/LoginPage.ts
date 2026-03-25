class LoginPage {
  visit() {
    cy.visit("/");
  }

  loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  login(username: string, password: string) {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    this.loginButton().click();
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }
}

export default new LoginPage();

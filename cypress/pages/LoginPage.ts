class LoginPage {
  visit() {
    cy.visit("/");
  }

  usernameInput() {
    return cy.get('[data-test="username"]');
  }

  passwordInput() {
    return cy.get('[data-test="password"]');
  }

  loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  fillUsername(username: string) {
    this.usernameInput().type(username);
  }

  fillPassword(password: string) {
    this.passwordInput().type(password);
  }

  submit() {
    this.loginButton().click();
  }

  login(username: string, password: string) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default new LoginPage();

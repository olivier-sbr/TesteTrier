class CheckoutPage {
  checkoutInformationForm() {
    return cy.get('[data-test="checkout-info-container"]');
  }

  checkoutOverview() {
    return cy.get('[data-test="checkout-summary-container"]');
  }

  checkoutComplete() {
    return cy.get('[data-test="checkout-complete-container"]');
  }

  fillInformation(firstName: string, lastName: string, postalCode: string) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  continue() {
    cy.get('[data-test="continue"]').click();
  }

  finish() {
    cy.get('[data-test="finish"]').click();
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }
}

export default new CheckoutPage();

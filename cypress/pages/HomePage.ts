class HomePage {
  inventoryList() {
    return cy.get(".inventory_list");
  }
}

export default new HomePage();

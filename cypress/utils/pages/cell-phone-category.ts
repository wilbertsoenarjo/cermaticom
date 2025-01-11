class CellPhonesCategory {
  get cellPhoneTitle() {
    return cy.get("[class='textual-display page-title']");
  }
}

export default new CellPhonesCategory();

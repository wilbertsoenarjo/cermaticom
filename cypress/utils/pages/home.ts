class HomePage {
  get shopByCategory() {
    return cy.get("[id='gh-shop-a']");
  }

  get shopByCategoryMenu() {
    return cy.get("[id='gh-sbc']");
  }

  get cellPhonesCategory() {
    return cy.get("[class='scnd']").contains("Cell phones & accessories");
  }

  get searchBar() {
    return cy.get("[placeholder='Search for anything']");
  }

  get searchBarMenu() {
    return cy.get("[id='ui-id-1']");
  }

  get allCategories() {
    return cy.get("[id='gh-cat-td']");
  }

  get allCategoriesDropdown() {
    return cy.get("[id='gh-cat-box']");
  }

  get allCategoriesOption() {
    return cy.get("[id='gh-cat']");
  }

  get searchButton() {
    return cy.get("[value='Search']");
  }
}

export default new HomePage();

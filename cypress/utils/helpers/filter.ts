class Filter {
  get filterMenu() {
    return cy.get("div.filter-menu-button__content");
  }

  filterBox(filterName: string) {
    return cy.get("[class='filter-label']").contains(filterName);
  }

  filterCheckbox(option: string) {
    return cy.get("[class='brwr__inputs--label']").contains(option);
  }

  applyFilter(filterName: string, option: string) {
    this.filterBox(filterName).click({ force: true });
    this.filterMenu.should("be.visible");
    this.filterCheckbox(option).click({ force: true });
  }
}

export default new Filter();

class ComputerTabletCategory {
  get resultList() {
    return cy.get("[id='srp-river-results']");
  }

  get resultRow() {
    return cy.get("[class='s-item s-item__pl-on-bottom']");
  }

  verifyFirstSearchResult(searchInput: string) {
    this.resultRow
      .first()
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase()).to.include(searchInput);
      });
  }
}

export default new ComputerTabletCategory();

const envUrl = Cypress.config().baseUrl;

Cypress.Commands.add("accessEbay", () => {
  cy.visit(envUrl);
  cy.url().should("include", envUrl);
  cy.get('[id="gh-la"]').should("be.visible").and("have.text", "eBay Home");
});

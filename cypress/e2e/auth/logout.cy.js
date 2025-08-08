Cypress.Commands.add('logout', () => {
  cy.contains('Logout').click();
});

describe('User Login', () => {
  it('should log in with a registered user', () => {
    cy.register().then((email) => {
      cy.logout(); // Ensure user is logged out
      cy.login(email); // Reuse custom login command
      cy.contains('Logged in as').should('be.visible');
    });
  });
});

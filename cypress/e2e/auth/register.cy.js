describe('User Registration', () => {
  it('should register a new user successfully', () => {
    cy.register().then((email) => {
      expect(email).to.contain('@mail.com');
    });
  });
});

class HomePage {
  logout() {
    cy.get('button[aria-label="logout"]').click();
  }

  checkLoggedIn(username) {
    cy.contains(username).should('exist');
  }
}

export default new HomePage();

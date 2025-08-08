describe('Login de usuário', () => {
  it('Deve logar com sucesso após registro', () => {
    const user = {
      name: 'Usuário Login',
      email: `login_${Date.now()}@email.com`,
      password: 'SenhaForte123'
    };

    cy.register(user);
    cy.logout();

    cy.login(user);
    cy.contains(user.name).should('be.visible');
  });
});

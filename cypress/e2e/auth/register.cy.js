describe('Registro de novo usuário', () => {
  it('Deve registrar um novo usuário com sucesso', () => {
    const user = {
      name: 'Usuário Teste',
      email: `teste_${Date.now()}@email.com`,
      password: 'SenhaForte123'
    };

    cy.register(user);
    cy.contains(`Logged in as ${user.name}`).should('be.visible');
  });
});

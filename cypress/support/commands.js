
Cypress.Commands.add('register', ({ name, email }) => {
  cy.visit('https://automationexercise.com/login');

  cy.get('input[data-qa="signup-name"]').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();

  cy.get('#id_gender1').check();
  cy.get('#password').type('SenhaForte123');
  cy.get('#days').select('10');
  cy.get('#months').select('April');
  cy.get('#years').select('1990');
  cy.get('#first_name').type('Maria');
  cy.get('#last_name').type('Silva');
  cy.get('#address1').type('Rua Exemplo, 123');
  cy.get('#state').type('SP');
  cy.get('#city').type('São Paulo');
  cy.get('#zipcode').type('12345');
  cy.get('#mobile_number').type('11999999999');
  cy.get('button[data-qa="create-account"]').click();

  cy.contains('Account Created!').should('be.visible');
  cy.get('a[data-qa="continue-button"]').click();
});

Cypress.Commands.add('login', ({ email, password }) => {
  cy.visit('https://automationexercise.com/login');

  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.contains('a', 'Logout').click();

});

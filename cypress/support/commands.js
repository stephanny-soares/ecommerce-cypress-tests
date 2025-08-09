import { generateUniqueEmail } from './utils';


Cypress.Commands.add('register', () => {
  const email = generateUniqueEmail();
  
  cy.visit('https://automationexercise.com/login');

  cy.get('input[data-qa="signup-name"]').type('Test User');
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();

  cy.get('#id_gender1').check();
  cy.get('#password').type('StrongPass123!');
  cy.get('#days').select('10');
  cy.get('#months').select('April');
  cy.get('#years').select('1990');
  cy.get('#first_name').type('Maria');
  cy.get('#last_name').type('Silva');
  cy.get('#address1').type('Calle Ejemplo, 123');
  cy.get('#state').type('Madrid');
  cy.get('#city').type('Madrid');
  cy.get('#zipcode').type('28001');
  cy.get('#mobile_number').type('612345678');
  cy.get('button[data-qa="create-account"]').click();

  cy.contains('Account Created!').should('be.visible');
  cy.get('a[data-qa="continue-button"]').click();

  return cy.wrap(email); // Return email for login test

});

Cypress.Commands.add('login', (email, password= 'StrongPass123!') => {
  cy.visit('https://automationexercise.com/login');

  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.contains('a', 'Logout').click();

});

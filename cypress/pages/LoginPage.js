class LoginPage {
  visit() {
    cy.visit('https://automationexercise.com/login');
  }

  fillForm({ email, password }) {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default new LoginPage();

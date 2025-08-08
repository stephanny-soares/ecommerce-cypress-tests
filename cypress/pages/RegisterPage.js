class RegisterPage {
  visit() {
    cy.visit('https://automationexercise.com/login');
  }

  fillForm({ name, email, password }) {
    cy.get('input[name="name"]').type(name);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirmPassword"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default new RegisterPage();

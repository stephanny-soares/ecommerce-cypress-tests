
# E-commerce Cypress Tests — AutomationExercise.com

End-to-end UI test automation using Cypress on [AutomationExercise](https://automationexercise.com), focusing on code quality, scalable structure, and reusable components. This project follows standards used by professional QA teams.

---

## Project Purpose

This repository aims to realistically and clearly simulate UI test automation by applying:

- Page Object Model (POM)
- Cypress custom commands
- Code reuse
- Clear separation of responsibilities
- Complete technical documentation

---

## Tested Features

- Login with valid and invalid credentials  
- New user registration  
- Contact form submission  
- Adding items to the cart  
- Logout from an authenticated session  

More tests will be added as the project evolves.

---

## Technologies and Tools

- Cypress  
- JavaScript ES6+  
- Node.js  
- Faker.js (for dynamic data)  
- Visual Studio Code  
- Git and GitHub  

---

## Project Structure

```
ecommerce-cypress-tests/
├── cypress/
│   ├── e2e/                      # Tests organized by feature
│   │   ├── auth/                 # login, register
│   │   ├── contact/              # contact form
│   │   └── cart/                 # cart
│   ├── fixtures/                # Test data
│   ├── pages/                   # Page Object Model
│   ├── support/
│   │   ├── commands/            # Custom Cypress commands
│   │   ├── utils/               # Helper functions
│   │   └── e2e.js               # Global test setup
├── docs/                        # Test evidence (screenshots, videos)
├── cypress.config.js            # Cypress configuration
├── package.json                 # Dependencies and scripts
├── .gitignore                   # Ignored files and folders
└── README.md                    # Project documentation
```

---

## Getting Started

To run this project locally:

```bash
git clone https://git@github.com:stephanny-soares/ecommerce-cypress-tests.git
cd ecommerce-cypress-tests
npm install
npx cypress open
```
---

## Available Commands

| Command         | Description                               |
|-----------------|-------------------------------------------|
| `cy.login()`    | Logs in with provided credentials         |
| `cy.logout()`   | Logs out the current user                 |
| `cy.register()` | Registers a new user                      |

---

## Best Practices Applied

* Page Object Model (POM)  
* Reusable Cypress Commands  
* Feature-based folder structure  
* Use of fixtures and utility functions  
* Automated setup using `beforeEach`  
* Clean, readable, and non-redundant code  
* Project structure aligned with real-world company standards  
* Clear and complete documentation  

---

## Author

**Stephanny Soares**  
LinkedIn: [https://www.linkedin.com/in/stephanny-soares](https://www.linkedin.com/in/stephanny-soares)  
GitHub: [https://github.com/stephanny-soares](https://github.com/stephanny-soares)
---

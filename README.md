# Cypress TypeScript TDD Framework with Page Object Model

## Introduction 

This project is a test automation framework built using Cypress, TypeScript, and the Page Object Model (POM) design pattern. It supports Test-Driven Development (TDD) workflows and provides a robust structure for scalable and maintainable test automation.

### Installation and Local Run

1. Clone this repository
```
git clone (https://github.com/wilbertsoenarjo/cermaticom.git)
 ```
2. Navigate to the project directory
```
cd <project_directory>
 ```
3. Install dependencies
```
npm install
 ```
4. Start the Cypress Test Runner
```
npx cypress open
 ```

### Project Structure
├── cypress
│   ├── e2e               # Test folder (cy.ts format)
│   ├── utils             # Utility folder
        ├── helpers.ts    # Contains global helpers
│       ├── pages.ts      # Contains POM classes
│   ├── support           # Cypress support folder
│       ├── commands.ts   # Contains custom Cypress commands
│       ├── index.ts      # Contains global configurations for custom commands
        ├── e2e.ts        # Contains global overrides
    ├── tsconfig.json     # TypeScript configuration
├── cypress.config.ts     # Cypress configuration
├── README.md             # README
├── node_modules          # Contains node_modules
├── package-lock.json     # Dependencies and scripts
├── package.json          # Dependencies and scripts
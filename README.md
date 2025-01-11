# Cypress TypeScript TDD Framework with Page Object Model

## Introduction 

This project is a test automation framework built using Cypress, TypeScript, and the Page Object Model (POM) design pattern. It supports Test-Driven Development (TDD) workflows and provides a robust structure for scalable and maintainable test automation.

### Installation and Local Run

1. Clone this repository
```
git clone https://github.com/wilbertsoenarjo/cermaticom.git
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
```
├── cypress
│   ├── e2e               # Test folder (cy.ts format)
│   ├── utils             # Utility folder
│      ├── helpers.ts     # Contains global helpers
│       ├── pages.ts      # Contains POM classes
│   ├── support           # Cypress support folder
│       ├── commands.ts   # Contains custom Cypress commands
│       ├── index.ts      # Contains global configurations for custom commands
│       ├── e2e.ts        # Contains global overrides
│   ├── tsconfig.json     # TypeScript configuration
├── cypress.config.ts     # Cypress configuration
├── README.md             # README
├── node_modules          # Contains node_modules
├── package-lock.json     # Dependencies and scripts
├── package.json          # Dependencies and scripts
```

### Notes

1. There is a bug on first scenario, which will fail the test. I kept the test case there so it will makes the test fail, and with that it shows that the test works by catching relevant bug.
2. On first scenario, *All Filters* button is nonexistent. I then change the test case to filter using filter box on the middle. By doing that, *Item Location* filter also doesn't exist, so I change it with *Storage Capacity* filter. Below is the test case : 

    *Now, click – All Filters (appears at the end of the filter drop downs)* 

### eBay Bug

Here is the step to reproduce the bug I mentioned on first scenario : 

1. Go to www.ebay.com
2. Navigate to Search by category > Electronics > Cell Phones & accessories. After the page loads, click Cell Phones & Smartphones in the left hand side navigation section.
3. Apply *Condition* and *Storage Capacity* filter.
4. Click *Price* filter.
5. Observe that filter option is on IDR currency.
6. Apply *Price* filter.
7. *3 filters applied* filter box should show up on the left part of filter.
8. Click *3 filters applied*.
9. Observe that price filter option is now on USD currency.
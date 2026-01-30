# IT3040 - IT Project Management

This repository contains automated tests for the IT Project Management course using Playwright.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 18 or higher)
  - Download from: https://nodejs.org/
- **npm** (comes with Node.js)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pasindu8/IT3040---IT-Project-Management.git
   cd IT3040---IT-Project-Management

Install dependencies

bash
npm install
Install Playwright browsers

bash
npx playwright install
Running the Tests
Run all tests
bash
npx playwright test
Run tests in headed mode (with browser UI visible)
bash
npx playwright test --headed
Run tests in a specific browser
bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
Run a specific test file
bash
npx playwright test test2/filename.spec.js
Run tests in debug mode
bash
npx playwright test --debug
Viewing Test Reports
After running tests, you can view the HTML report:

bash
npx playwright show-report
Project Structure
Code
IT3040---IT-Project-Management/
├── .github/              # GitHub workflows and configurations
├── test2/                # Test files directory
├── package.json          # Project dependencies and scripts
├── playwright.config.js  # Playwright configuration
├── .gitignore           # Git ignore file
└── Assignment 1.pdf     # Assignment documentation
Configuration
The project uses Playwright for end-to-end testing. Configuration can be modified in playwright.config.js.

Dependencies
@playwright/test: ^1.58.0 - Testing framework
@types/node: ^25.0.10 - TypeScript definitions for Node.js
Additional Commands
Update Playwright
bash
npm install @playwright/test@latest
npx playwright install
Clear test artifacts
bash
npx playwright clean
Troubleshooting
If you encounter issues:

Make sure Node.js is installed correctly:

bash
node --version
npm --version
Clear node_modules and reinstall:

bash
rm -rf node_modules package-lock.json
npm install
Reinstall Playwright browsers:

bash
npx playwright install --force
License
ISC

Author
IT3040 Course Project

Code

Now you can add this README.md file to your repository using:

```bash
git add README.md
git commit -m "Add comprehensive README with setup and run instructions"
git push

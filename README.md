# 📝 Singlish to Sinhala Translator Automation Project
### ITPM - Assignment 01 | Quality Assurance (QA)

This repository contains the automated testing suite for the **SwiftTranslator** web application. The goal is to evaluate translation accuracy and verify essential UI functionalities using **Playwright**.

---

## 👤 Student Information
| Field | Details |
| :--- | :--- |
| **Name** | Vithana O.V.D.P.D |
| **Student ID** | IT23630116 |
| **Specialization** | Information Technology |
| **Option Selected** | Option 1 (Singlish to Sinhala) |

---

## 🛠 Tech Stack
- **Framework:** [Playwright](https://playwright.dev/)
- **Language:** JavaScript (Node.js)
- **Reporting:** Playwright HTML Reporter
- **Source Control:** GitHub

---

## 📁 Project Structure
```
IT3040---IT-Project-Management/
├── test2/                          # Test files directory
│   ├── assignment.spec.js          # Main translation test scenarios
│   └── UI_test.spec.js             # UI functionality tests
├── playwright.config.js            # Playwright configuration file
├── package.json                    # Node.js dependencies and scripts
├── package-lock.json               # Dependency lock file
├── .gitignore                      # Git ignore rules
├── REPOSITORY_LINK.txt             # Git repository URL
├── Assignment 1.pdf                # Assignment documentation
└── README.md                       # Project documentation (this file)
```

---

## 🚀 Getting Started

### 1. Prerequisites
Before running the tests, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

You can verify your Node.js installation by running:
```bash
node -v
```

You can verify npm is installed by running:
```bash
npm -v
```

### 2. Clone the Repository
Clone this repository to your local machine using Git:
```bash
git clone https://github.com/pasindu8/IT3040---IT-Project-Management.git
```

Navigate to the project directory:
```bash
cd IT3040---IT-Project-Management
```

### 3. Install Dependencies
Install all required Node.js dependencies using npm:
```bash
npm install
```

### 4. Install Playwright Browsers
Install the required browsers for Playwright testing:
```bash
npx playwright install
```

This command will download Chromium, Firefox, and WebKit browsers needed for cross-browser testing.

---

## 🧪 Running Tests

### Run All Tests
Execute all test scenarios across all configured browsers:
```bash
npm test
```
Or using Playwright directly:
```bash
npx playwright test
```

### Run Tests in Headed Mode (with Browser UI)
To see the browser while tests are running:
```bash
npm run test:headed
```
Or:
```bash
npx playwright test --headed
```

### Run Tests in a Specific Browser
Run tests only in Chromium:
```bash
npm run test:chromium
```

Run tests only in Firefox:
```bash
npm run test:firefox
```

Run tests only in WebKit (Safari):
```bash
npm run test:webkit
```

### Run a Specific Test File
To run only the translation tests:
```bash
npx playwright test assignment.spec.js
```

To run only the UI tests:
```bash
npx playwright test UI_test.spec.js
```

### Run Tests in Debug Mode
Debug tests step by step:
```bash
npx playwright test --debug
```

### Run Tests with UI Mode
Launch Playwright's interactive UI for running and debugging tests:
```bash
npm run test:ui
```
Or:
```bash
npx playwright test --ui
```

---

## 📊 Test Reports

### View HTML Report
After running tests, an HTML report is automatically generated. View it by running:
```bash
npm run report
```
Or:
```bash
npx playwright show-report
```

The report will open in your default web browser and show detailed results of all test executions, including:
- Test pass/fail status
- Execution time
- Screenshots and traces (if enabled)
- Error details for failed tests

---

## 📋 Test Scenarios

### Translation Tests (`assignment.spec.js`)
This file contains 34 comprehensive test scenarios for Singlish to Sinhala translation:

| Category | Count | Description |
| :--- | :---: | :--- |
| **Positive Functional Tests** | 24 | Verify correct translation of various Singlish inputs |
| **Negative Functional Tests** | 10 | Test edge cases and error handling |

#### Test Coverage Includes:
- ✅ Simple sentences with common words
- ✅ Complex sentences with mixed English and Singlish
- ✅ Technical terms (API, CPU, RAM, WiFi, etc.)
- ✅ Proper nouns and brand names (Zoom, WhatsApp, LinkedIn)
- ✅ Numbers and currency (Rs. 5343)
- ✅ Time formats (7.30 AM)
- ✅ Punctuation and special characters
- ✅ Polite expressions and slang

### UI Tests (`UI_test.spec.js`)
This file contains UI functionality tests:

| Test ID | Description |
| :--- | :--- |
| UI_Scenario_01 | Clear button should reset the input field |

---

## ⚙️ Configuration

### Playwright Configuration (`playwright.config.js`)
The test configuration includes:

| Setting | Value | Description |
| :--- | :--- | :--- |
| `testDir` | `./test2` | Directory containing test files |
| `fullyParallel` | `true` | Run tests in parallel |
| `retries` | `2` (CI only) | Retry failed tests in CI environment |
| `workers` | `1` (CI), `auto` (local) | Number of parallel workers |
| `reporter` | `html` | Generate HTML test reports |
| `trace` | `on-first-retry` | Collect traces on failed retries |

### Browser Configuration
Tests are configured to run on:
- 🌐 **Chromium** (Google Chrome)
- 🦊 **Firefox** (Mozilla Firefox)
- 🧭 **WebKit** (Safari)

---

## 🔗 Repository Access

This repository is publicly accessible at:
- **GitHub URL:** https://github.com/pasindu8/IT3040---IT-Project-Management

The repository link is also available in the `REPOSITORY_LINK.txt` file.

---

## 🛡️ Troubleshooting

### Common Issues and Solutions

**Issue:** Playwright browsers not installed
```bash
# Solution: Install Playwright browsers
npx playwright install
```

**Issue:** Tests timing out
```bash
# Solution: Increase timeout in tests or run with --timeout flag
npx playwright test --timeout=60000
```

**Issue:** Network connectivity issues
- Ensure you have a stable internet connection
- The tests require access to https://www.swifttranslator.com/

**Issue:** Permission errors on Linux/macOS
```bash
# Solution: Install browser dependencies
npx playwright install-deps
```

---

## 📝 Additional Notes

- All tests target the SwiftTranslator website: https://www.swifttranslator.com/
- Tests include built-in wait times to handle dynamic content loading
- The HTML reporter provides detailed test execution results
- Tests are designed to run in both headless and headed modes

---

## 📞 Contact

For any questions or issues regarding this project, please contact:
- **Student:** Vithana O.V.D.P.D
- **Student ID:** IT23630116

---

## 📄 License

This project is created for educational purposes as part of the SLIIT IT Project Management (ITPM) course.




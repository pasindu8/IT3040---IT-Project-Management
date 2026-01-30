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

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** installed on your system. You can check it by running:
```bash
node -v
```

### 2. Installation
Clone this repository to your local machine and install the dependencies:

###### Clone the repository
```bash
git clone https://github.com/pasindu8/IT3040---IT-Project-Management.git
```

###### Navigate into the folder
```bash
cd SLIIT ITPM
```

###### Install Node modules
```bash
npm install
```

###### Install Playwright browsers
```bash
npx playwright install
```
---

## 🧪 Test Execution Commands
You can run the tests using the following terminal commands:

| Task | Command |
| :--- | :--- |
| Run All Tests (Headed) | npx playwright test --headed |
| Run Accuracy Tests | npx playwright test tests/assignment.spec.js --headed |
| Run UI-Related Tests | npx playwright test tests/test.spec.js --headed |
| View Test Report | npx playwright show-report |

---

## 📁 Project Structure
```text
├── tests/
│   ├── assignment.spec.js   # Accuracy validation scenarios (24+ cases)
│   └── test.spec.js         # UI-related scenarios (Reset/Clear functionality)
├── playwright.config.js     # Playwright configuration
├── package.json             # Project dependencies
├── README.md                # Project documentation
└── IT23630116.xlsx          # Test Case document (Appendix 2)
```

---

## 📊 Test Scenarios Covered
Accuracy Validation: Testing complex sentences, mixed languages, punctuation, and numerical data.

UI Functionality: Verification of the "Clear" button to ensure it properly resets the input and output fields.

---

## 📊 Test Execution Report
Here is the summary of the test execution results:

![Playwright Test Report](./screenshots_report.png)

---

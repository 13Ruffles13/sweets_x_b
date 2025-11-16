# Sweets X B

🍰 Sweet treats made from scratch. This app showcases a small, home-based bakery, delivering happiness one dessert at a time.

---
This repository is public to host the web application, but all development, testing, and building is done by me.

> **Security Note:** Do **not** commit API keys, passwords, or other sensitive data. Use a `.env` file and add it to `.gitignore`.

Use the scripts below to manage local development, run tests, or build the project.

---

## Table of Contents

- [Scripts](#scripts)
  - [Development](#development)
  - [Code Quality & Build](#code-quality--build)
  - [Testing](#testing)
  - [Formatting](#formatting)
  - [Dependency Management](#dependency-management)
- [Software Requirements](#software-requirements)
---

# Scripts

This project includes several npm scripts to help with development, testing, formatting, and building the app.

Below is a detailed explanation of what each script does.

---

## Development

- **`dev`** – Starts the development server for local development.  
- **`preview`** – Shows a preview of the production build.

## Code Quality & Build

- **`build`** – Performs the following steps in order:  
  1. Formats the code using Prettier.  
  2. Checks the code for errors and style issues using ESLint.  
  3. Runs all tests with Vitest.  
  4. Compiles TypeScript.  
  5. Creates a production build.

- **`lint`** – Checks code for errors or style issues.  
- **`check`** – Runs both linting and tests together.

## Testing

- **`test`** – Runs all tests using **Vitest**.  
- **`test:watch`** – Watches files and re-runs tests whenever they change.

> ⚠ **Note:** Jest is not supported due to incompatibilities with Vite.  
> See [Vite + Jest docs](https://jestjs.io/docs/getting-started#using-vite).

## Formatting

- **`format`** – Automatically formats all source files using Prettier.  
  Supported file types: TypeScript, JavaScript, JSON, CSS, SCSS, Markdown, etc.

## Dependency Management

- **`fresh-install`** – Completely resets the project:  
  1. Deletes `node_modules`  
  2. Deletes `package-lock.json`  
  3. Clears npm cache  
  4. Updates all dependencies  
  5. Reinstalls everything
  6. Reports vulnerabilities using `npm audit`
  *(Windows PowerShell only)*

- **`prepush`** – Runs `fresh-install` and then `build` before pushing code to ensure everything is working and dependencies are up-to-date.


Ensures the project is clean, dependencies are up-to-date, and the build passes successfully.


[Back to Top](#sweets-x-b)

---

# Software Requirements

To run and develop this project locally, the following software is required:

- Node.js >= 18
- npm >= 9
- Windows PowerShell (for `fresh-install` script)
- Git (for version control)

[Back to Top](#sweets-x-b)

---

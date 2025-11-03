# Sweets X B

---

## Scripts

### Use of These Scripts

This project comes with a set of npm scripts to simplify development, testing, and production builds. Below is a quick overview of their purpose:

- **Development:** `dev`, `preview`  
  Start the development server or preview the production build.

- **Build & Quality Checks:** `build`, `lint`, `check`  
  Format code, lint for issues, run tests, compile TypeScript, and create a production build.

- **Testing:** `test`, `test:watch`  
  Run tests using Vitest. Note that Jest is not supported due to Vite plugin incompatibilities.

- **Code Formatting:** `format`  
  Format all source files using Prettier.

- **Fresh Install & Dependency Management:** `fresh-install`, `prepush`  
  Reset and update dependencies, then run a full build to ensure everything is in a good state before pushing changes.

## Testing

**Framework:** Vitest  
*Used for testing the Vite application.*

> ⚠ Note: Jest is not supported by Vite due to incompatibilities with the Vite plugin system.  
> See [Vite + Jest docs](https://jestjs.io/docs/getting-started#using-vite) for more details.

import "cypress-axe";

const websiteBaseUrl = 'https://sweetsxb.netlify.app/';

describe("Comprehensive Accessibility Tests", () => {
  beforeEach(() => {
    cy.visit(websiteBaseUrl);
    cy.injectAxe();
  });

  it("should pass all automated accessibility checks", () => {
    // Run comprehensive accessibility check
    cy.checkA11y(undefined, undefined, (violations) => {
      if (violations.length) {
        cy.log('Accessibility violations found:');
        violations.forEach(violation => {
          cy.log(`${violation.id}: ${violation.description}`);
          cy.log(`Impact: ${violation.impact}`);
          cy.log(`Help: ${violation.helpUrl}`);
        });
      }
    });
  });

  it("should have proper color contrast", () => {
    cy.checkA11y(undefined, {
      rules: {
        "color-contrast": { enabled: true },
      },
    });
  });

  it("should have proper images with alt attributes", () => {
    cy.checkA11y(undefined, {
      rules: {
        "image-alt": { enabled: true },
        "image-redundant-alt": { enabled: true },
      },
    });
  });

  it("should have proper document structure", () => {
    cy.checkA11y(undefined, {
      rules: {
        "heading-order": { enabled: true },
        "landmark-one-main": { enabled: true },
        "page-has-heading-one": { enabled: true },
        "region": { enabled: true },
      },
    });
  });

  it("should have proper links and navigation", () => {
    cy.checkA11y(undefined, {
      rules: {
        "link-name": { enabled: true },
        "link-in-text-block": { enabled: true },
      },
    });
  });

  it("should have proper interactive elements", () => {
    cy.checkA11y(undefined, {
      rules: {
        "button-name": { enabled: true },
        "focus-order-semantics": { enabled: true },
        "aria-hidden-focus": { enabled: true },
      },
    });
  });

  it("should allow user scaling in viewport", () => {
    cy.get('meta[name="viewport"]').should('exist');
    cy.get('meta[name="viewport"]')
      .should('have.attr', 'content')
      .and('not.contain', 'user-scalable=no')
      .and('not.contain', 'maximum-scale=1.0');
  });
});

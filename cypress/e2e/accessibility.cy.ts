import "cypress-axe";

describe("Accessibility checks for main page", () => {
  it("should have proper heading order and no accessibility violations", () => {
    cy.visit("https://sweetsxb.netlify.app/");
    cy.injectAxe();

    cy.checkA11y(undefined, {
      rules: {
        "heading-order": { enabled: true },
      },
    });
  });
});

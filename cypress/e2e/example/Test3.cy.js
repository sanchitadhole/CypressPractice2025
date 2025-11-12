/// <reference types="cypress" />

describe("Validate alerts", () => {
  it("validate checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.on("window:alert", (str) => {
      expect(str).equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.get("#confirmbtn").click();
    cy.on("window:confirm", (str) => {
      expect(str).equal(
        "Hello , Are you sure you want to confirm?"
      );
    });
  });
});

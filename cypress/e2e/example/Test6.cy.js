/// <reference types="cypress" />

describe("Validate mouse events", () => {
  it("Validate mouse events", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click({force:true});
    cy.url().should('include',"https://rahulshettyacademy.com/");

  });
});

/// <reference types="cypress" />

describe("Validate child window", () => {
  it("Validate mouse events", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").then((el) => {
      let url = el.prop("href");
      console.log(url);
    });
  });
});

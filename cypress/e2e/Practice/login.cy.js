/// <reference types="cypress" />

describe("validate login credential ", () => {
  it("validate login", () => {
    cy.visit("https://practice.expandtesting.com/login");
    cy.wait(3000)
    // cy.fixture("example.json").then((user) => {
    cy.login("practice", "SuperSecretPassword!");
    cy.get(".text-center.ad-bar-text.me-1 > a").should(
      "have.text",
      "PMP Practice"
    );
    // });
  });
});

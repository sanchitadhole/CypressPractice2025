/// <reference types="cypress" />

describe("validate login credential ", () => {
  it("validate login", () => {
    cy.visit("https://practice.expandtesting.com/login");
    cy.fixture("example.json").then((user) => {
      cy.get("#username").type(user.userId);
      cy.get("#password").type(user.passWord);
      cy.get("#submit-login").click();
      cy.get(".text-center.ad-bar-text.me-1 > a").should(
        "have.text",
        "PMP Practice"
      );
    });
  });
});

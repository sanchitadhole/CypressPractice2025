/// <reference types="cypress" />
import login from "../../support/login";

describe("validate login credential ", () => {
  const log = new login();
  it("validate login", () => {
    cy.visit("https://practice.expandtesting.com/login");
    cy.wait(3000);
    log.userId().type("practice");
    log.passWord().type("SuperSecretPassword!");
    log.submit().click();
  });
});

/// <reference types="cypress" />

describe("validate checkbox is checked", () => {
  it("validate checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.wait(500);
    // cy.get("#checkBoxOption1")
    //   .check()
    //   .should("be.checked")
    //   .and("have.value", "option1");

    // cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    //dropdown
    cy.get("select").select("option2").should("have.value", "option2");

    //dynamic dropdown
    cy.get("#autocomplete").type("Ind");
    cy.get(".ui-menu-item").each((el) => {
      if (el.text() == "India") {
        cy.wrap(el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");

    // visible or invisible
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    //RadioButton

    cy.get('value="radio1"').check().should('be.checked');
    cy.get('value="radio2"').should('not.be.checked ');
    

  });
});

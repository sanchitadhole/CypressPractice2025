//Iframe

/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>

import "cypress-iframe";
describe("validate iframe functionality", () => {
  it("verify iframe", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find('a[href="#/mentorship"]').click();
    cy.iframe()
      .find(".font-semibold.text-sm.mb-1")
      .should("have.text", "🎁 Platinum Mentorship Bonus");
  });

  it.only("verify iframe herokuaApp", () => {
    cy.visit("https://letcode.in/frame/");
    // const frame = cy
    //   .get("#firstFr")
    //   .its("0.contentDocument.body")
    //   .should("be.visible")
    //   .then(cy.wrap);

    // cy.get('input[name="fname"]').type("Sanchita");
    // cy.iframe().find('0.contentDocument.body')

    cy.get('#firstFr').then((iframe)=>{
        let body = iframe.contents().find('body')
        cy.wrap(body).find('input[name="fname"]').type('sanchita');
        cy.wrap(body).find('input[name="lname"]').type('dhole');

        

    })
  });
});

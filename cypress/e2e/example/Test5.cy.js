/// <reference types="cypress" />

describe("Handle tables", () => {
  it("handle tables", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("tr td:nth-child(2)").each((el, index, list) => {
      let text = el.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)").eq(index).next().then((price)=>{
            let priceCost = price.text()
            expect(priceCost).to.eq('25')
        })
      }
    });
  });
});

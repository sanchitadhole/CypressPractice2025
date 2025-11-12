/// <reference types="cypress" />

describe("my first testcase", () => {
  it("my first test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(1000);
    cy.get(".products").as("productElement");
    cy.get(".product:visible").should("have.length", 4);
    cy.get("@productElement").find(".product").should("have.length", 4);
    cy.wait(500);
    cy.get("@productElement")
      .find(".product")
      .eq(0)
      .contains("ADD TO CART")
      .click();

    cy.get("@productElement")
      .find(".product")
      .each((el) => {
        const textName = el.find("h4.product-name").text();
        if (textName.includes("Carrot")) {
          cy.wrap(el).find("button").click();
        }
      });

    // assert the text
    cy.get(".brand").should("have.text", "GREENKART");
    //print the text
    cy.get(".brand").then((el) => {
      let logoEl = el.text();
      cy.log(logoEl);
    });
    cy.get("img[alt='Cart']").click();
    cy.wait(500);
    cy.get("div[class='cart-preview active'] button[type='button']").click();
    cy.get(
      "div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > button:nth-child(14)"
    ).click();
    cy.get("div[class='wrapperTwo'] div select").select("India");
    cy.get("input[type='checkbox']").check();
    cy.get("div[class='wrapperTwo'] button").click();
    cy.get("#root").should(
      "have.text",
      "GREENKARTLimited offer - FREE Core Java & QA Resume courseThank you, your order has been placed successfully  You'll be redirected to Home page shortly!!"
    );


    
  });
});

class confirmationPage {
  submitFormDetails() {
  // cy.get("button[class='btn btn-success']").click();
    cy.get("#country").type("India");
    // cy.wait(1000);
    Cypress.config("defaultCommandTimeout", 10000);
    cy.get("div[class='suggestions'] ul li a").click();
    cy.get("input[value='Purchase']").click();
    cy.get(".alert-success").should("contain", "Success");
  }


  getAleartMessage(){
    return cy.get(".alert-success")
  }
}

export default confirmationPage;

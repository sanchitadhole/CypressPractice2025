describe("validate end to ent test", () => {





  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });





  
  it("excite end ti end test", function() {
    
    let productName1 = this.data.productName;
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/#");
    cy.get("#username").type(this.data.username);
    cy.get("#password").type(this.data.password);
    cy.get(".customradio input").eq(0).check();
    cy.get("select").select("Teacher");
    cy.get("#terms").check();
    cy.get("#signInBtn").click();
    cy.contains("Shop Name").should("be.visible");
    cy.get(".card-title").should("have.length", 4);
    cy.get("app-card")
      .filter(`:contains("${productName1}")`)
      .then((element) => {
        cy.wrap(element).should("have.length", 1);
        cy.wrap(element).contains("button", "Add").click();
      });

    let sum = 0;
    cy.get("app-card").eq(0).contains("button", "Add").click();

    cy.get(".nav-link.btn.btn-primary").click();

    cy.get("tr td:nth-child(4) strong")
      .each((el) => {
        let amount = Number(el.text().split(" ")[1].trim());
        sum = sum + amount;
      })
      .then(() => {
        expect(sum).to.be.lessThan(200000);
      });

    cy.get("button[class='btn btn-success']").click();
    cy.get("#country").type("India");
    // cy.wait(1000);
    Cypress.config('defaultCommandTimeout',10000)
    cy.get("div[class='suggestions'] ul li a").click();
    cy.get("input[value='Purchase']").click();
    cy.contains("Success!").should("be.visible");
    cy.get(".alert-success").should("contain", "Success");

   
  });
});

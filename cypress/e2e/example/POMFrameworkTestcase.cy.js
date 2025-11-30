import HomePage from "../../support/PageObjects/HomePage";


describe("validate end to ent test", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("excite end ti end test", function () {
    const homePage = new HomePage();

    let productName1 = this.data.productName;

    homePage.goTo(Cypress.env("url") + "/loginpagePractise/#");
    const productPage = homePage.login(this.data.username, this.data.password);

    productPage.pageValidation();
    productPage.getCartCount().should('have.length',4)
    productPage.selectProduct(productName1);
    productPage.selectFirstProduct();
    const cartPage = productPage.goToCard();
    cartPage.sumOfCartPage().then(function (sum) {
      expect(sum).to.be.lessThan(200000);
    });


    const confirmationPage = cartPage.checkOutItems();
    confirmationPage.submitFormDetails();
    confirmationPage.getAleartMessage().should('contain','Success')



  
  });
});

import cartPage from "./CartPage";

class ProductPage{

    pageValidation(){
      cy.contains("Shop Name").should("be.visible");
    }

    getCartCount(){
         return cy.get(".card-title")
    }

    selectFirstProduct(){
           cy.get("app-card").eq(0).contains("button", "Add").click();
    }

    goToCard(){
        cy.get(".nav-link.btn.btn-primary").click();
        return new cartPage()
    }

    selectProduct(productName1){
        cy.get("app-card")
      .filter(`:contains("${productName1}")`)
      .then((element) => {
        cy.wrap(element).should("have.length", 1);
        cy.wrap(element).contains("button", "Add").click();
      });
    }
}

export default ProductPage;

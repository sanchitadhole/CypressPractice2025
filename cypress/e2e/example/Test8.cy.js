//Iframe

/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>

describe("validate iframe functionality", () => {
    it('verify iframe',()=>{
        cy.frameLoaded('#courses-iframe')
    })
});

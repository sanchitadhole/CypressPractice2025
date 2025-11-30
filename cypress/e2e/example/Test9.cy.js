describe('validate calander',()=>{
    it('validate calander',()=>{
        const monthNumber = '6'
        const date ='15'
        const year = '2027'
        const expectedList = [monthNumber,date,year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get(".react-date-picker__inputGroup__input.react-date-picker__inputGroup__month").click();
        cy.get("button[class='react-calendar__navigation__label']").click();
         cy.get("button[class='react-calendar__navigation__label']").click();
         cy.contains('button',year).click();
         cy.get('.react-calendar__tile.react-calendar__year-view__months__month').eq(Number(monthNumber-1)).click();

        cy.contains('abbr',date).click();
        cy.get('.react-date-picker__inputGroup__input').each((el,index)=>{
            // cy.wrap(el).invoke('val').then((text)=>{
            //     cy.log(text)
            // })

             cy.wrap(el).invoke('val').should('eq',expectedList[index])
        })



    })
})
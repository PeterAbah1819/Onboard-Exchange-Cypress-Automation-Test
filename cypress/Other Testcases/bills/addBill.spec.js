describe('Add Bill',()=>{
    it('Adding Bills & Clearing Bills',()=>{
        cy.login()
        cy.get('[class="Patients__content-body fade-in-out ng-scope"]')
        .first()
        .parent()
        .click()
        cy.contains('Submit New Entry').click()
        cy.contains('Bill').click({force:true})
        cy.get('.BillingItemsSelectWithCategories__button').click().wait(1500)
        cy.get('.BillingItemsSelectWithCategories__option-row').first().click()
       
        cy.contains('Pay Now').should('have.attr','type','submit')
        cy.contains('Pay Later').should('have.attr','type','submit')
        cy.contains('Discard').should('have.attr','class','cancel-btn--red ng-binding')
        cy.contains('Pay Later').click()
       
    })
})
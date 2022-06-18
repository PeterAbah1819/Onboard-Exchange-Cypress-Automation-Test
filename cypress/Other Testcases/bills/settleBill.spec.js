describe('Bills',()=>{
    it(' Clearing Bills',()=>{
        cy.login()
        cy.get('[class="Patients__content-body fade-in-out ng-scope"]')
        .first()
        .parent()
        .click()
        cy.contains('Settle Balance').should('be.visible').click()

        cy.contains('Date').should('be.visible')
        cy.contains('Total Price').should('be.visible')
        cy.contains('Bill to Patient').click()
        cy.contains('Pay Full Balance').should('be.visible')
        cy.contains('Pay Full Balance').click()
        cy.contains('Bank Transfer').scrollIntoView()
        // cy.contains('Instant Loan').should('be.visible')
        
        cy.contains('Select Type Of Payoff').should('be.visible')
        cy.contains('POS').should('be.visible')
        // cy.contains('Cash').should('be.visible')
        cy.contains('Credit Balance').should('be.visible')
        cy.contains('Other').should('be.visible')
        cy.get('.pay-ico-cash-payment-inactive').click()
        cy.contains('Confirm cash payment').should('be.visible')
        cy.contains('Confirm Cash Collected').click()
        

    })
})
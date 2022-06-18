Cypress.Commands.add('Add_Clear_Bill',()=>{
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
    // cy.contains('Discard').should('have.attr','class','cancel-btn--red ng-binding')
    cy.contains('Pay Later').click()
    cy.reload()
})

Cypress.Commands.add('Deposit', ()=>{
    cy.selectPatient()
    
    cy.get('.ico-currency').click({delay:5000})
    cy.get('[placeholder="Enter Amount"]').click().type('5000')
    cy.contains('Send').click()
    cy.reload()
    cy.get('.ico-currency').click()
    cy.contains('Issue Refund').click()
    cy.get('[placeholder="Enter Amount"]').click().type('5000')
    cy.contains('Send').click()
    cy.reload()
})

Cypress.Commands.add('Discount', ()=>{
    cy.selectPatient()

    cy.contains('Submit New Entry').click()
    cy.contains('Bill').click({force:true})
    
    cy.get('.BillingItemsSelectWithCategories__button').click().wait(1500)
    // cy.contains('Switch to Standard').click()
    // cy.contains('Switch to Standard').click()
    cy.get('.BillingItemsSelectWithCategories__option-row').first().click()
    
    cy.contains('Pay Now').should('have.attr','type','submit')
    cy.contains('Pay Later').should('have.attr','type','submit')
    // cy.contains('Discard').should('have.attr','class','cancel-btn--red ng-binding')
    cy.contains('Pay Later').click()
 
    cy.contains('Settle Balance').click()
    cy.get('.PagePaymentItems__table-column-1 > .icon-pencil').first().click()
    cy.get('.ico-tick').click()
    cy.get('[ng-class="vm.displayError(vm.form.discount_percentage)"] > .field').type('10')
    cy.get('.UpdateBalanceItemModal__modal-actions > .submit-btn').click({force:true})
    cy.get('.PagePaymentItems__totals-row__discount__button').click()
    cy.get('#discount').type(10)
    cy.get('.submit-btn').click()
    cy.reload()
})


Cypress.Commands.add('SettleBill',()=>{
    cy.get('[class="Patients__content-body fade-in-out ng-scope"]')
    .first()
    .parent()
    .click()
    cy.contains('Settle Balance').click()

    // cy.contains('Date')
    cy.contains('Total Price')
    cy.contains('Bill to Patient').click()
    cy.contains('Pay Full Balance')
    cy.contains('Pay Full Balance').click()
    cy.contains('Bank Transfer').scrollIntoView()
    // cy.contains('Instant Loan')
    
    cy.contains('Select Type Of Payoff')
    cy.contains('POS')
    // cy.contains('Cash')
    cy.contains('Credit Balance')
    cy.contains('Other')
    cy.get('.pay-ico-cash-payment-inactive').click()
    cy.contains('Confirm cash payment')
    cy.contains('Confirm Cash Collected').click()
    cy.reload()
})

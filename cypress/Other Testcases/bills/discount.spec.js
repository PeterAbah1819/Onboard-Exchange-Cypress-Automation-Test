

describe('Bills',()=>{
    it('Discount',() =>{
  
    cy.login()
    cy.selectPatient()

    cy.contains('Submit New Entry').click()
    cy.contains('Bill').click({force:true})
    
    cy.get('.BillingItemsSelectWithCategories__button').click().wait(1500)
    // cy.contains('Switch to Standard').click()
    cy.get('.BillingItemsSelectWithCategories__option-row').first().click()
    
    cy.contains('Pay Now').should('have.attr','type','submit')
    cy.contains('Pay Later').should('have.attr','type','submit')
    cy.contains('Discard').should('have.attr','class','cancel-btn--red ng-binding')
    cy.contains('Pay Later').click()
 
    cy.contains('Settle Balance').click()
    cy.get('.PagePaymentItems__table-column-1 > .icon-pencil').first().click()
    cy.get('.ico-tick').click()
    cy.get('[ng-class="vm.displayError(vm.form.discount_percentage)"] > .field').type('10')
    cy.get('.UpdateBalanceItemModal__modal-actions > .submit-btn').click()
    cy.get('.PagePaymentItems__totals-row__discount__button').click()
    cy.get('#discount').type(10)
    cy.get('.DiscountModal__actions > .submit-btn').click()
    
  })
})
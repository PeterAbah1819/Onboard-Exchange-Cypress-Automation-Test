Cypress.Commands.add('TakeSpecimen',() =>{
  
    
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.LabOrder__header').first().click()
    // cy.contains('Take Specimen').should('be','visible')
    cy.contains('Take Specimen').click()
    cy.reload()
    
})


Cypress.Commands.add('RecieveSpecimen',() =>{
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.LabOrder__header').first().click()
    // cy.contains('Receive Specimen').should('be','visible')
    cy.contains('Receive Specimen').click()
    cy.reload()

})

Cypress.Commands.add('SubmitResults',() =>{
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.LabOrder__header').first().click()
    cy.get('[placeholder="Enter Results"]').type('4').click()
    cy.contains('Submit Result').click()
    cy.reload()

})

Cypress.Commands.add('ApproveResults',() =>{
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.LabOrder__header').first().click()
    cy.contains('Approve Results').click()
    cy.reload()

})
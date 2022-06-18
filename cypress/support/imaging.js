Cypress.Commands.add('ConfirmImageCapture',() =>{
  
    cy.visit('/imaging-orders?mode=by-orders')
    cy.wait(500)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    // cy.contains('Breast MRI')
    cy.contains('Awaiting Capture')
    cy.contains('Prof Helium Admin')
    cy.contains('Confirm Capturing')
    cy.contains('Confirm Capturing').click()
    cy.reload()
  
  })

Cypress.Commands.add('SubmitImageResults',() =>{
  
    
    cy.visit('/imaging-orders?mode=by-orders')
    cy.wait(500)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    // cy.contains('Breast MRI')
    cy.contains('Awaiting Capture')
    cy.get('[data-placeholder="Enter results for this test here"]').type('all clear')
    const filepath = 'registration-image.png'

    cy.get('[data-cy=FileUploader__input]').attachFile(filepath)

    cy.contains('Submit Result')
    cy.contains('Submit Result').click()
    cy.reload()
  
  })

Cypress.Commands.add('ApproveImageResults',() =>{
  

    cy.visit('/imaging-orders?mode=by-orders')
    cy.wait(500)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    // cy.contains('Breast MRI')
    cy.contains('Awaiting Approval')
    // cy.get('[data-placeholder="Enter results for this test here"]').type('all clear')
    cy.contains('Approve Results')
    cy.contains('Approve Results').click()
    cy.reload()
  
  })

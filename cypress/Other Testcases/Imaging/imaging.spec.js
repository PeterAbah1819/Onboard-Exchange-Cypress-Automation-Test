describe('Imaging Orders',()=>{

    beforeEach(() => {
        cy.login()
      })
    it('Confirm Capture',() =>{
  
    cy.visit('/imaging-orders?mode=by-orders')
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI').should('be','visible')
    cy.contains('Awaiting Capturing').should('be','visible')
    cy.contains('Prof Helium Admin').should('be','visible')
    cy.contains('Confirm Capturing').should('be','visible')
    cy.contains('Confirm Capturing').click()
    
  
  })

    it('Submit Results',() =>{
  
    
    cy.visit('/imaging-orders?mode=by-orders')
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI').should('be','visible')
    cy.contains('Awaiting Capturing').should('be','visible')
    cy.get('[data-placeholder="Enter results for this test here"]').type('all clear')
    const filepath = 'registration-image.png'

    cy.get('[data-cy=FileUploader__input]').attachFile(filepath)

    cy.contains('Submit Result').should('be','visible')
    cy.contains('Submit Result').click()
    
  
  })

    it('Approve Results',() =>{
  

    cy.visit('/imaging-orders?mode=by-orders')
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI').should('be','visible')
    cy.contains('Awaiting Approval').should('be','visible')
    // cy.get('[data-placeholder="Enter results for this test here"]').type('all clear')
    cy.contains('Approve Results').should('be','visible')
    cy.contains('Approve Results').click()
    
  
  })
})


describe('Imaging Orders',()=>{

  beforeEach(() => {
      cy.login()
    })
  it('Reject Capturing',() =>{

  cy.visit('/imaging-orders?mode=by-orders')
  cy.get('[data-cy="imaging-order-header"]').first().click()
  cy.contains('Breast MRI').should('be','visible')
  cy.contains('Awaiting Capturing').should('be','visible')
  cy.contains('Prof Helium Admin').should('be','visible')
  cy.contains('Confirm Capturing').should('be','visible')
  cy.contains('Report Error').should('be','visible')
  cy.contains('Report Error').click()
  cy.get('[placeholder="Describe Issue"]').type('error')
  cy.contains('Confirm').click()

  })

})

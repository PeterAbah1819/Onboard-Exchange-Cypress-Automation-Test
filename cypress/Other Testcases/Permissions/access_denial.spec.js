describe('Permissions',()=>{
    it('User Details',() =>{
  
    cy.login()
  })

  it('Remove Permission',() =>{
    cy.contains('Staff').click()
    cy.url().should('include', 'staff');
    cy.get('.hidden-xs-max > :nth-child(1)').trigger('mouseover')
    cy.contains('Edit Staff Member').click({force: true})
    cy.get('#lab_orders_read').click()
    cy.get('#imaging_orders_read').click()
  
  })

  it('Take Specimen',() =>{
  
    
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.LabOrder__header').first().click()
    cy.contains('Take Specimen').should('be','visible')
    cy.contains('Take Specimen').click()
    
  
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

})
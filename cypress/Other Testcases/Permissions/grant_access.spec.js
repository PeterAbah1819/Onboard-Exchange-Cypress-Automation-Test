describe('Permissions',()=>{
    it('User Login',() =>{
  
    cy.login()
  })

  it('User Created',() =>{
    cy.contains('Staff').click()
    cy.url().should('include', 'staff');
    cy.get('.hidden-xs-max > :nth-child(1)').trigger('mouseover')
    cy.contains('Edit Staff Member').click({force: true})
    cy.get('#lab_orders_none').click()
    cy.get('#imaging_orders_none').click()
  
  })

  
  it('Take Specimen',() =>{
  
    
    cy.visit('/lab-orders?mode=by-orders')
    
  
  })

  it('Confirm Capture',() =>{
  
    cy.visit('/imaging-orders?mode=by-orders')

    
  
  })

})
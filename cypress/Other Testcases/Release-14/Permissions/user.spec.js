describe('Permissions',()=>{

  it('User Login',() =>{
  
    cy.login()
  })
    it('User exist',() =>{
  
      
    cy.clock().tick(2000)
    cy.contains('Staff').click()
    cy.url().should('include', 'staff');
    cy.contains('Helium Admin')
    
  
  })
})
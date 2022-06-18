describe('Permissions',()=>{
  beforeEach(() => {
    cy.login()
  })

  it('User Created',() =>{
    cy.contains('Staff').click()
    cy.url().should('include', 'staff');
    cy.wait(500).contains('Add New Staff')
    cy.contains('Helium Admin').first().trigger('mouseover')
    cy.wait(500)
    cy.contains('Edit Staff Member').click({force: true})
    cy.get('#lab_orders_none').should('have.attr','value','true')
    cy.get('#lab_orders_read').should('have.attr','value','false')
    cy.get('#imaging_orders_none').should('have.attr','value','true')
    cy.get('#imaging_orders_read').should('have.attr','value','false')
  
  })
})

// describe('Permissions',()=>{

  // it('User Login',() =>{
  
  //   cy.login()
  // })
//   it('User Created',() =>{

//   cy.login()
//   cy.contains('Staff').click()
//   cy.url().should('include', 'staff');
//   cy.get('.Staff__table-body > :nth-child(1) > :nth-child(1)').trigger('mouseover')
//   cy.contains('Edit Staff Member').click({force: true})
//   cy.get('#lab_orders_read').should('have.attr','value','false')
  

// })
// })
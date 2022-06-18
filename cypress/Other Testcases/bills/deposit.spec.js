describe('Add Deposit',()=>{
    it('Deposit',() =>{
  
    cy.login()
    cy.selectPatient()
  // cy.findByText('+ Setup New Appointment')
    cy.get('.ico-currency').click()
    cy.get('[placeholder="Enter Amount"]').click().type('5000')
    cy.contains('Send').click()
    cy.reload()
    cy.get('.ico-currency').click()
    cy.contains('Issue Refund').click()
    cy.get('[placeholder="Enter Amount"]').click().type('5000')
    cy.contains('Send').click()
    
  })
})

// describe('Appointments',()=>{
//     it('Search',() =>{
  
//     cy.login()
//     cy.selectPatient()
//   // cy.findByText('+ Setup New Appointment')
    
    
  
//   })
// })
describe('Lab Orders',()=>{

  beforeEach(() => {
    cy.login()
  })

    it('Take Specimen',() =>{
  
    
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.LabOrder__header').first().click()
    cy.contains('Take Specimen').should('be','visible')
    cy.contains('Take Specimen').click()
    
  
  })


    it('Recieve Specimen',() =>{
  
    
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.LabOrder__header').first().click()

    cy.contains('Receive Specimen').should('be','visible')
    cy.contains('Receive Specimen').click()
  
  })

    it('Submit Results',() =>{
  
    // cy.login()
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.LabOrder__header').first().click()

    cy.get('[placeholder="Enter Results"]').type('4').click()
    cy.contains('Submit Result').click()
  
  })

    it('Approve Results',() =>{
  
    // cy.login()
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.LabOrder__header').first().click()
    cy.contains('Approve Results').click()
  
  })
})

// describe('Lab Orders',()=>{
  // beforeEach(() => {
  //   cy.login()
  // })

  // it('Take Specimen',() =>{
  
    
  //   cy.visit('/lab-orders?mode=by-orders')
  //   cy.get('.LabOrder__header').first().click()
  //   cy.contains('Take Specimen').should('be','visible')
  //   cy.contains('Take Specimen').click()
    
  
  // })
//     it('Recieve Specimen',() =>{
//     cy.visit('/lab-orders?mode=by-orders')
//     cy.get('.LabOrder__header').first().click()

//     cy.contains('Receive Specimen').should('be','visible')
//     cy.contains('Reject').should('be','visible')
//     cy.contains('Reject').click()
      // cy.get('[placeholder="Describe Report"]').type('error')
      // cy.contains('Confirm').click()
  
//   })
// })





// describe('Lab Orders',()=>{

// beforeEach(() => {
  //   cy.login()
  // })
//     it('Reject Test Results',() =>{
  
//     cy.visit('/lab-orders?mode=by-orders')
//     cy.get('.LabOrder__header').first().click()
//     cy.contains('Reject').click()
//     cy.contains('Confirm').click()
  
//   })
// it('Take Specimen',() =>{
  
    
//   cy.visit('/lab-orders?mode=by-orders')
//   cy.get('.LabOrder__header').first().click()
//   cy.contains('Take Specimen').should('be','visible')
//   cy.contains('Take Specimen').click()
  

// })


//   it('Recieve Specimen',() =>{

  
//   cy.visit('/lab-orders?mode=by-orders')
//   cy.get('.LabOrder__header').first().click()

//   cy.contains('Receive Specimen').should('be','visible')
//   cy.contains('Receive Specimen').click()

// })

//   it('Submit Results',() =>{
//   cy.visit('/lab-orders?mode=by-orders')
//   cy.get('.LabOrder__header').first().click()

//   cy.get('[placeholder="Enter Results"]').type('4').click()
//   cy.contains('Submit Result').click()

// })

//   it('Approve Results',() =>{
//   cy.visit('/lab-orders?mode=by-orders')
//   cy.get('.LabOrder__header').first().click()
//   cy.contains('Approve Results').click()

// })
// })
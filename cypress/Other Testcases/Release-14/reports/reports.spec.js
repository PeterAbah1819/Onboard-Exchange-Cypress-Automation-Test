describe('Reports',()=>{
  beforeEach(() => {
    cy.login()
  })
    it('Lab Report',() =>{
  
    
    cy.visit('/reports/lab-orders')
    cy.wait(500)
    cy.url().should('include', 'lab-orders');
    
  
  })
})

describe('Reports',()=>{    
  beforeEach(() => {
  cy.login()
})
    it('Imaging',() =>{
  
    
    cy.visit('/reports/imagings')
    cy.wait(500)
    cy.url().should('include', 'imagings');
    
  
  })
})
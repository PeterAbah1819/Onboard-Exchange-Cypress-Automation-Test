describe('Reports',()=>{

  it('User Login',() =>{
  
    cy.login()
  })
    it('Lab Report',() =>{
  
    
    cy.visit('/report/lab-orders')
    cy.url().should('include', 'lab-orders');
    
  
  })
})

describe('Reports',()=>{
  it('User Login',() =>{
  
    cy.login()
  })
    it('Imaging',() =>{
  
    
    cy.visit('/report/imagings')
    cy.url().should('include', 'imagings');
    
  
  })
})
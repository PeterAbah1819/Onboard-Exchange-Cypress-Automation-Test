describe('login',()=>{
    it('login',() =>{
      cy.login()
      cy.registerPatient()
      
    })
  })
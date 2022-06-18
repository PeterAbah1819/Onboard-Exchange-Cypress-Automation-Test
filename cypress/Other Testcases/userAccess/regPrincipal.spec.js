describe('Register Principla',()=>{
    it('Principal Registration scenerio',() =>{
      cy.login()
      cy.registerPrincipal()
    })
  })
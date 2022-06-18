describe('Register Guest',()=>{
    it('Guest scenerio',() =>{
      cy.login()
      cy.registerGuest()
    })
  })
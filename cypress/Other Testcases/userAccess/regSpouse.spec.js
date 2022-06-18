describe('Register Spouse',()=>{
    it('Spouse Registration scenerio',() =>{
      cy.login()
      cy.registerSpouse()
    })
  })
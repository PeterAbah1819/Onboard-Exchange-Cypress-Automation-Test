describe('login',()=>{
    it('logout scenerio',() =>{
      cy.login()
      cy.get('.icon-ic-top-more').click()
      cy.contains('Logout').click()
      // cy.get('[class="Patients__content-body fade-in-out ng-scope"]')
      // .first()
      // .parent()
      // .click()
    })
  })


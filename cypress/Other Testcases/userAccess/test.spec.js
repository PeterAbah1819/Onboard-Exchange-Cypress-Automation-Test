

describe('Login test', () => {
   
    it('',()=>{
         cy.login()
         cy.get('.NavSidebar__dropdown.ng-scope > .NavSidebar__dropdown__button > .NavSidebar__menu-option-label').click()
         cy.contains('Staff').click()
    })
})

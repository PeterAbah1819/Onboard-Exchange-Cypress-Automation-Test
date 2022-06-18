describe('Store', function()
{
    beforeEach('login', function()
    {
        cy.login()
    })

    it('Store Module', function()
    {
     //View Store
      cy.get('[ng-href="/procurements"] > .NavSidebar__menu-option-label').click()
    //select store
    cy.get('.ui-select-search').click()   
    cy.get('#ui-select-choices-row-0-0 > .ui-select-choices-row-inner').click()   
    })

})
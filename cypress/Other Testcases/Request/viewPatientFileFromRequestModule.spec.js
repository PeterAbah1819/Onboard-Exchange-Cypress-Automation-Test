describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('View patient file', function()
    {
        cy.get('[ng-href="/requests"] > .NavSidebar__menu-option-label').click()
        cy.contains('Add New Request').click()
        cy.get('.multiselect__tags').click()
        cy.get('.multiselect__element > .multiselect__option').first().click()
        cy.get('.CreateRequestForm__link-to-profile').click()
        
    
    })


})
describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Aprrove Sick Leave', function()
    {
        cy.get('[ng-href="/requests"] > .NavSidebar__menu-option-label').first().click()
        cy.get('.RequestEntityHeader__expander').first().click()
        cy.get('.AlmightyTextarea__field').click().clear().type('This request will be approved soon')
        cy.get('.submit-btn').click()
    
    })


})
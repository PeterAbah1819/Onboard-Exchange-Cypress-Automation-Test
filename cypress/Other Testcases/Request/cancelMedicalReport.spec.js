describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Aprrove Sick Leave', function()
    {
        cy.get('[ng-href="/requests"] > .NavSidebar__menu-option-label').click()
        cy.get('.RequestEntityHeader__expander').click()
        cy.get('.AlmightyTextarea__field').click().clear().type('This request will be rejected NOW!!!')
        cy.get('.remove-btn').click()
    
    })


})
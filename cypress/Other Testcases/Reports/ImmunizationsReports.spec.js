describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Immunizations Reports', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.contains('Immunizations').click()
    
    })


})
describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Registrations Reports', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.contains('Registrations').click()
    
    })


})
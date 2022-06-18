describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Mortality Reports', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.contains('Mortality').click()
    
    })


})
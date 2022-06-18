describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Appointment ReportsExport', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.get('.icon-download-alt').click()
       
    })


})
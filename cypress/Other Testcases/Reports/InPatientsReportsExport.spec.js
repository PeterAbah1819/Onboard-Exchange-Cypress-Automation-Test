describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Inpatients ReportsExport', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.contains('In Patients').click()
        cy.get('.icon-download-alt').click()
    
    })


})
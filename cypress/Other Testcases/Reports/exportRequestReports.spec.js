describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Request Reports', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.get('.ScrollableTabs__links > :nth-child(12)').click()
    
    })

    it('Export Reports', function()
    {
        cy.get('.CsvExport__link').click()
    })
})
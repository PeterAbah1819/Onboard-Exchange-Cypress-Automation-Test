describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('LabOrders Reports', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.get('.ScrollableTabs__links > :nth-child(9)').click()
    
    })


})
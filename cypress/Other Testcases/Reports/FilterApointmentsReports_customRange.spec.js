describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Appointment Reports FilterCustomRange', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.get('.FilterDaterange').click()
        cy.get('[data-range-key="Custom Range"]').click()
        cy.get('.left > .calendar-table > .table-condensed > thead > :nth-child(1) > .month > .monthselect').select('0')
        cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c3"]').click()
        cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c6"]').click()
        cy.get('.applyBtn').click()
    
    })


})
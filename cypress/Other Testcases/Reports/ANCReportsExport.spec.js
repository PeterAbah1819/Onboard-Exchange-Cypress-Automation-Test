describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('ANC Reports Export', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.get('.ScrollableTabs__arrow').scrollIntoView().should('be.visible')
        cy.get('.ScrollableTabs__links > :nth-child(13)').scrollIntoView().should('be.visible').click()
        //cy.focused('.ScrollableTabs__links > :nth-child(12)').focused().click()
        //cy.get('.NavbarHeader').scrollIntoView
       // cy.get('#scroll-vertical button')
      //.should('not.be.visible')
        //
        //cy.get('.CsvExport__link').click()
    
    })


})
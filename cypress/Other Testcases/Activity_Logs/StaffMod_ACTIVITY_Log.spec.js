describe('Staff Module Activity Log', () => {

    it('Staff Module Activity Log', () => {

        cy.login(),

    //it clicks on Staff module Activity Log
        cy.get('[ng-href="/staff"]').click(),

    //it clicks on User Activity Logs
        cy.get('.header-splitted > div.header-splitted-col > .header-nav-tabs > [ui-sref="staff-activity-log"]')
        .click()

    })
})
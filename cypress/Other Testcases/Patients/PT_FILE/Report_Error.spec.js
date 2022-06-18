describe('Add Report Error', () => {

    it('Add Report Error', () => {
        
        cy.login()

        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        cy.get('.Feed__entry--first > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__container > feed-entry-header.ng-scope > .FeedEntryHeader__container > .FeedEntryHeader__date-and-link > .FeedEntryHeader__entry-date > .ico-dropdown')
        .click()

        cy.get('[ng-click="vm.reportError()"]').click()

        cy.get('#reason').click().type('This is how to report error')

        cy.get('.submit-btn').click()

    })
})
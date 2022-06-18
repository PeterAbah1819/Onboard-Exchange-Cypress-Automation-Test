describe('Add Endorse Entry', () => {

    it('Add Endorse Entry', () => {
        
        cy.login()

        cy.selectPatient()
        cy.get('.Feed__entry--first > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__container > feed-entry-header.ng-scope > .FeedEntryHeader__container > .FeedEntryHeader__date-and-link > .FeedEntryHeader__entry-date > div.ng-binding > .ico-dropdown')
        .click()

        cy.get('[ng-click="vm.endorse()"]').click()

        cy.get('.EndorseModal__submit').click()

    })
})
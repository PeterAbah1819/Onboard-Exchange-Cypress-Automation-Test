describe('Add Save as PDF', () => {

    it('Add Save as PDF', () => {
        
        cy.login()

        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        cy.get('.Feed__entry--first > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__container > feed-entry-header.ng-scope > .FeedEntryHeader__container > .FeedEntryHeader__date-and-link > .FeedEntryHeader__entry-date > .ico-dropdown')
        .click()

        cy.get('.FeedEntryHeader__dropdown-actions > :nth-child(2)')
        .click()

    })
})
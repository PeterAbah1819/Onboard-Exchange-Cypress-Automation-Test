describe('Add Vitals', () => {

    it('Add Vitals', () => {
        
        cy.login()

        cy.selectPatient()

        cy.get('.Feed__entry--first > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__container > feed-entry-header.ng-scope > .FeedEntryHeader__container > .FeedEntryHeader__date-and-link > .FeedEntryHeader__entry-date > div.ng-binding > .ico-dropdown')        .click()

        cy.get('.FeedEntryHeader__dropdown-actions > :nth-child(1)').click()

    })
})
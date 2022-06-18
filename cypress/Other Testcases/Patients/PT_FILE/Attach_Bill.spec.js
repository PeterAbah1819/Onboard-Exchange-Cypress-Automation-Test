describe('Add Vitals', () => {

    it('Add Vitals', () => {
        
        cy.login()

        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        cy.get('.Feed__entry--first > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__container > feed-entry-header.ng-scope > .FeedEntryHeader__container > .FeedEntryHeader__date-and-link > .FeedEntryHeader__entry-date > .ico-dropdown')
        .click()

        cy.get('[class="FeedEntryHeader__dropdown-action ng-binding ng-scope"]')
        .contains('Attach a Bill').click()

        cy.get('.BillingItemsSelectWithCategories__button').dblclick()
        .type('Registration fees')

        cy.get('[class="BillingItemsSelectWithCategories__option-row"]')
        .contains('Registration Fees, 200').click()

    })
})
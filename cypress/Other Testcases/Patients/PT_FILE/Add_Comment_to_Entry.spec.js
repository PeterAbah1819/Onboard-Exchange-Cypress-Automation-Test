describe('Add Comment', () => {

    it('Add Comment', () => {
        
        cy.login()

        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        cy.get('.Feed__entry--first > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__additional-container > .FeedEntry__comment-actions > .FeedEntry__link')
        .click()

        cy.get('.FeedEntryCommentBox__textarea-input').dblclick()
        .type('This is how to add comment to entry')

        cy.get('.submit-btn').click()

    })
})
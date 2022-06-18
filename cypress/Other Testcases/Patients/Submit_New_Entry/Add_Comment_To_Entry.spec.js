describe('Add Comment to Records PT Records', () => {

    it('Comment', () => {
        cy.login()
    
    it('click on PT Folder')
        //it('Single Registered Patient')
        //cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').click()

    //it('Multiple registered Patient')
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').contains('Idoma').click()
       
    it('Click on Submit New Entry')
        cy.get('.FeedEntry__link').click()
        
       cy.get('.FeedEntryCommentBox__textarea-input').click()
       .type('This is to show the ADD COMMENT TO A PATIENTS FOLDER WORKS')

        cy.get('.submit-btn').click()
    })
})
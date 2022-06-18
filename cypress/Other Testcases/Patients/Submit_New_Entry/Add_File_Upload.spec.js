describe('Add File Upload', () => {

    it('Add File Upload', () => {
        
        cy.login()

        //it clicks on the Patient
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        //it clicks on submit new entry
        cy.get('.NavHeader__submit-link').click()

        //it clicks on File Upload button 
        cy.get('.NewEntryModal__item__upload').click()

    })
})
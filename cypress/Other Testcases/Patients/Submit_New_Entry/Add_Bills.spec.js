describe('Add Bills', () => {

    it('Add Bills', () => {
        
        cy.login()

        //it clicks on the Patient
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        //it clicks on submit new entry
        cy.get('.NavHeader__submit-link').click()

        //it clicks on add bills module
        cy.get('.NewEntryModal__item__billing').click()

    })
})
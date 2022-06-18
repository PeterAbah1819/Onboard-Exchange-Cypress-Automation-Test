describe('Request Clinical Investigation', () => {

    it('Add Clinical Investigation', () => {
        
        cy.login()

        //it clicks on the Patient
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        //it clicks on submit new entry
        cy.get('.NavHeader__submit-link').click()

        //it clicks on Clinical Investigation module
        cy.get('.NewEntryModal__item__investigation').click()

        //it cli
        cy.get('.LabTestsSelectInfinite__select').dblclick()
        .type('widal')
        .get('.LabTestsSelectInfinite__item').click()

        .get('.ta-scroll-window')
        .dblclick().type('This is how to add additional information')

        .get('.submit-btn').click()

    })
})
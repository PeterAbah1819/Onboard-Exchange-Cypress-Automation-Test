describe('Add Test Result', () => {

    it('Add Test Result', () => {
        
        cy.login()

        //it clicks on the Patient
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        //it clicks on submit new entry
        cy.get('.NavHeader__submit-link').click()

        //it clicks on Test Result Button
        cy.get('.NewEntryModal__item__results').click()

        cy.get('.LabTestsSelectInfinite__select')
        .click().type('Widal')

        cy.get('[class="ui-select-highlight"]').click().end()

        cy.get('.Grid-column-12 > .ng-isolate-scope > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick')
        .click()

        cy.get('.submit-btn').click()

    })
})
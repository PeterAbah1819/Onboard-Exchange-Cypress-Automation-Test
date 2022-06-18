describe('Add Referral', () => {

    it('Add Referral', () => {
        
        cy.login()

        //it clicks on the Patient
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        //it clicks on submit new entry
        cy.get('.NavHeader__submit-link').click()

        //it clicks on Referral Button
        cy.get('.NewEntryModal__item__referral').click()

    })
})
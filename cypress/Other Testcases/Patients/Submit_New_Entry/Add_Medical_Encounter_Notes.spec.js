describe('Add Medical Encouter Notes', () => {

    it('Add Medical Encouter Notes', () => {
        
        cy.login()

        //it clicks on the Patient
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        //it clicks on submit new entry
        cy.get('.NavHeader__submit-link').click()

         //it clicks on Medical Encouter Notes Button
         cy.get('.Grid-column-6').click()

        })
    })
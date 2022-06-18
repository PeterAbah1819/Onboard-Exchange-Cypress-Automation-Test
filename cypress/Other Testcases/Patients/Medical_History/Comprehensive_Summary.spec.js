describe('Comprehensive Summary', () => {

    it('Comprehensive Summary', () => {

        cy.login()

        it('click on PT Folder')
    cy.selectPatient()

    //it('multiple registered PT')
    // cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').contains('Caleb').click()

    it('click on Comprehensive Summarry Button')
        cy.get('.PatientDetailsBox__comprehensive-link').click()

    })
})
describe('Access Log', () => {

    it('Access Log', () => {

        cy.login()

        it('click on PT Folder')
    //it('For Single registered Patient')
        //cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').click()

    //it('multiple registered PT')
    cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').contains('Caleb').click()

    //it clicks on Open Comprehensive History
        cy.get('.PatientDetailsBox__comprehensive-link').click()

    //it click on Access Log
    cy.get('.ComprehensiveFormsModal__access-log-btn').click()
    })
})
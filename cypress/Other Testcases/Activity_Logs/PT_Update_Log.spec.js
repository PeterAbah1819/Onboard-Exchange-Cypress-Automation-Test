describe('Update Log', () => {

    it('Update Log', () => {

        cy.login()

    it('click on PT Folder')
    //it('For Single registered Patient')
        //cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').click()

    //it('multiple registered PT')
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').contains('Caleb').click()

    //it clicks on Open Comprehensive History
        cy.get('.PatientDetailsBox__comprehensive-link').click()

    //it click on PT Update Log
        cy.get('.ComprehensiveFormsModal__tabs')
        .contains('Update Log').click(),
    })
})
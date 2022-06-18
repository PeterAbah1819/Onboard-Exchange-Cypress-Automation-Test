describe('Add Contact info', () => {

    it('Add Contact Info', () => {
        cy.login();

    it('click on PT Folder')
    //it('For Single registered Patient')
        //cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').click()

    //it('multiple registered PT')
        cy.selectPatient()
        it('click on Comprehensive Summarry Button')
        cy.get('.PatientDetailsBox__comprehensive-link').click({force: true})
        cy.contains('Contact Info').click({force: true})

    })
})
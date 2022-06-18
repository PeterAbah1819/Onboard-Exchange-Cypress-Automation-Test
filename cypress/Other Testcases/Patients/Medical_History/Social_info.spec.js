describe('Add Social info', () => {

    it('Add Social Info', () => {

        cy.login();

        cy.selectPatient()
        it('click on Comprehensive Summarry Button')
        cy.get('.PatientDetailsBox__comprehensive-link').click()

        cy.contains('Social Info').click({force: true})

    })
})
describe('Filter By Drugs in PT File', () => {

    it('Filter by Drugs', () => {

        cy.login()

        cy.selectPatient()
        cy.get('[data-cy="PatientFeedFilters__filter prescription"]').click()

    })
})
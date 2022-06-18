describe('Filter By RECEIPTS in PT File', () => {

    it('Filter by RECEIPTS', () => {

        cy.login()

        cy.selectPatient()

        cy.get('[data-cy="PatientFeedFilters__filter receipt"]').click()

    })
})
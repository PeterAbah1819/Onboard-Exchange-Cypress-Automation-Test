describe('Filter By LAB in PT File', () => {

    it('Filter by Lab', () => {

        cy.login()

        cy.selectPatient()

        cy.get('[data-cy="PatientFeedFilters__filter results"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()

    })
})
describe('Inpatiens Tab', () => {
    it('inpatients Tab', () => {
        cy.login(),
        cy.get('[href="/patients/wards"]').contains('Inpatients').click()
    })
})
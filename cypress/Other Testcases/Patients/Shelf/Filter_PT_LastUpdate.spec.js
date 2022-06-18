describe('filter by LastUpdate', () => {
    
    it('Filter by LastUpdate', () => {
        cy.login()
        cy.get('[filter-type="lastUpdate"]').click()

        cy.get('.HeaderDateRangePicker__dropdown-container').click()

        cy.get('[data-range-key="This Year"]').click()

        cy.get('.submit-btn').click()
    })
})
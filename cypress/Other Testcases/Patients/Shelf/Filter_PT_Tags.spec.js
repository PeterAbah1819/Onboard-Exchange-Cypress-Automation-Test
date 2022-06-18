describe('filter by Tag', () => {
    
    it('Filter by Tag', () => {
        cy.login()



        cy.get('[filter-type="tag"]').click()

        cy.get('.ui-select-search').click().type('ANC')
        
        cy.get('.ui-select-choices-row-inner').click()
        cy.get('.submit-btn').click()
    })
})
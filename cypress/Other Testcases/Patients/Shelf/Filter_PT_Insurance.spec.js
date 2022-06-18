describe('filter by Insurance', () => {
    
    it('Filter by Insurance', () => {
        cy.login()
        cy.get('[filter-type="insurance"]').click()

        cy.get('[value="cbea30a4-fca0-4569-8c71-e10a815976b7"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick')
        .click()

        cy.get('.submit-btn').click()

    })
})
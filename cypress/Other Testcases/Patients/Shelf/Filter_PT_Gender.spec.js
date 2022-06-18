describe('Filter by Gender', () => {
    
    it('Filter by Gender', () => {
        cy.login()
        cy.get('[filter-type="sex"]').click()
        cy.get('[value="male"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click()
        cy.get('.submit-btn').click()
    })
})
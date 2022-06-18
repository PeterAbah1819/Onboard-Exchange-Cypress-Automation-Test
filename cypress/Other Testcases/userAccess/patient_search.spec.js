describe('Patient Search', () => {
    it('Search Name', ()=> {
        cy.login()
        cy.contains('Search').click()
        cy.get('[placeholder="Type patient\'s name"]').type('Edmund')
        cy.get('div>.SearchModal__patient-row').click()
    })
})

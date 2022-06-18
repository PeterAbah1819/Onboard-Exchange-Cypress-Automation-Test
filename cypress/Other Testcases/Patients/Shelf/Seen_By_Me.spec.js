describe('Seen by Me', () => {

    it('seen by Me Tab', () => {
        cy.login(),
        
        cy.get('[href="/patients/me"]').contains('Seen by me').click()
    })
})
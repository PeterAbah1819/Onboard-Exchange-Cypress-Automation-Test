describe('Comment',()=>{
    it('Comment',()=>{
        cy.login()
        cy.patientTriage()
        cy.contains('Comment').click()
        cy.get('[name="comment"]').type('This patient suffers from amnesia')
        cy.get('.form-buttons').contains('Submit').click()
    })
})
describe('Medical Notes',()=>{
    it('Doctor Resume Note',()=>{
        cy.login()
        cy.selectPatient()        
        cy.contains('RESUME').click()

    })
})
describe('Search', ()=> {

    it('Search', () => {
        cy.login()
    
        cy.contains('Search').click()
        
        cy.get('.SearchModal__field').click()
        .type('Caleb')

    })


})
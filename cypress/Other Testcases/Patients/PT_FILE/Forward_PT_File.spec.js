describe('Forward Patient File', () => {
    
    it('Forward Patient File', () => {
        
        cy.login()


        cy.selectPatient()
        cy.get('.icon-ico-top-forward').click()

        cy.get(':nth-child(1) > .ForwardFileModal__name-and-avatar > .ForwardFileModal__checkbox').click()

        cy.get('.ForwardFileModal__forward-button').click()
    })
})
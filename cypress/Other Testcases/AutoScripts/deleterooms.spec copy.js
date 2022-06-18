describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('Create room', function()
    {
        cy.contains('Settings').click()
        cy.contains('Features').click()
        cy.get('.Features__FeaturesItem__link > .ng-binding').click()
        cy.get(':nth-child(2) > .header-link'). click()
        cy.get('#room_name').click()
         
        
    })

})
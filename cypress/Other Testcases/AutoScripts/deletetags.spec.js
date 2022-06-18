describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('delete tag', function()
    {
        cy.contains('Settings').click()
        cy.contains('Features').click()
        cy.get('[name="Patient tags"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click()
        cy.get('.icon-trash').click()
        cy.get('.ConfirmRemovalModal__title > .common-tag').click()
         cy.get('.remove-btn'). click ()
         
        
    })

})
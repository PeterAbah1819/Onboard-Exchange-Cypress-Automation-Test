describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('Editmrn', function()
    {
        cy.contains('Settings').click()
        cy.contains('Features').click()
        cy.get('[name="Your medical record numbers prefix"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__button'). click()
        cy.get('.field'). type('seb')
        cy.get('[name="Your medical record numbers prefix"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__button'). click()
         
        
    })

})
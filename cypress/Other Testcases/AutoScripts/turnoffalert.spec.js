describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('turn off alert', function()
    {
        cy.contains('Settings').click()
        cy.contains('Features').click()
        cy.get('[name="Alert users when offline"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off'). click()
        

         
        
    })

})
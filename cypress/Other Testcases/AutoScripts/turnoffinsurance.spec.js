describe('Log In', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Create tag', function()
    {
        cy.contains('Settings').click()
        cy.contains('Features').click()
        cy.get('[name="Insurance providers"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off'). click()
        cy.get('.submit-btn'). click()

         
        
    })

})
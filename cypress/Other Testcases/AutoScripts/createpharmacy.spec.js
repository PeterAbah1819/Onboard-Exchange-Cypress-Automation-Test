describe('Log In', function()
{
    beforeEach(()=>{
        cy.login()
    })

    it('Create pharmacy', function()
    {
        cy.contains('Settings').click()
        cy.contains('Features').click()
         cy.get('[ng-if="vm.isStoreAvailable()"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link'). click()
 
        
    })

})
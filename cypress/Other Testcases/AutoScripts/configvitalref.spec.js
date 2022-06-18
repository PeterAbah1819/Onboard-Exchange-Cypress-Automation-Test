describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('Configvitalref', function()
    {
        cy.contains('Settings').click()
        cy.contains('Features').click()
        cy.get('[name="Vitals reference values"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__button'). click()
        cy.get('[ng-model="vm.values.oxygenSaturation.min"]'). type('12')
        cy.get(':nth-child(3) > .FeatureReferencesModal__row__inputs > .ng-pristine'). type('20')
        cy.get('.FeatureReferencesModal__sugar-unit__input > .OnOff > .OnOff__button--on'). click()        
        cy.get('.submit-btn'). click()

         
        
    })

})
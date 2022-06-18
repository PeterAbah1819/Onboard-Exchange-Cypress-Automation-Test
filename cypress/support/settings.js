Cypress.Commands.add('CreateRoom', function()
{
    cy.contains('Settings').click()
    cy.contains('Features').scrollIntoView()
    cy.contains('Features').click()
    cy.get('.Features__FeaturesItem__link > .ng-binding').click()
    cy.get(':nth-child(3) > .header-link'). click()
    cy.get('[placeholder="Enter Name"]').click().type('Male Ward')
    cy.get('[placeholder="Enter Number of Beds"]').click().type('10')
   
    
})

Cypress.Commands.add('Createtag', function()
{
    cy.contains('Settings').click({force: true})
    cy.contains('Features').scrollIntoView()
    cy.contains('Features').click()
    cy.get('[name="Patient tags"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click()
    cy.contains('Add New Patient').click()
    cy.get('.field').click().type('Immunization')
    cy.get('.submit-btn').click()
    
})

Cypress.Commands.add('DeleteTag', function()
{
    cy.contains('Settings').click()
    cy.contains('Features').scrollIntoView()
    cy.contains('Features').click()
    cy.get('[name="Patient tags"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .Features__FeaturesItem__link').click()
    cy.get('.icon-trash').first().click()
    cy.get('.ConfirmRemovalModal__title > .common-tag').click()
     cy.get('.remove-btn'). click ()
     
    
})

Cypress.Commands.add('InsuranceToggle', function()
{
    cy.contains('Settings').click()
    cy.contains('Features').scrollIntoView()
    cy.contains('Features').click()
    cy.get('[name="Insurance providers"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off'). click()
    // cy.get('.submit-btn'). click()

     
    
})

Cypress.Commands.add('PharmacyToggle', function()
    {
        cy.contains('Settings').click()
        cy.contains('Features').scrollIntoView()
        cy.contains('Features').click()
        cy.get('[name="Pharmacy & inventory"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off'). click()
        // cy.get('.submit-btn'). click()        

})

Cypress.Commands.add('AlertToggle', function()
{
    cy.contains('Settings').click()
    cy.contains('Features').scrollIntoView()
    cy.contains('Features').click()
    cy.get('[name="Alert users when offline"] > .FeaturesItem > .FeaturesItem__content > .FeaturesItem__controls > ng-transclude > .ng-scope > .OnOff > .OnOff__button--off'). click()
        
})




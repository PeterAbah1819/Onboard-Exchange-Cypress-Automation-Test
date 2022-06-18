describe('Log In', function()
{
    beforeEach(()=>{
        cy.login()
    })

    it('Create room', function()
    {
        cy.contains('Settings').click()
        cy.contains('Features').click()
        cy.get('.Features__FeaturesItem__link > .ng-binding').click()
        cy.get(':nth-child(3) > .header-link'). click()
        cy.get('[placeholder="Enter Name"]').click().type('Male Ward')
        cy.get('[placeholder="Enter Number of Beds"]').click().type('10')
       
        
    })

})
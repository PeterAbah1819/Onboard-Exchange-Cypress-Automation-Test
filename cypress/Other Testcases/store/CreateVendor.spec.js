describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Create Vendor', function()
    {
        cy.get('[ng-href="/procurements"]').click()
        cy.get('[ui-sref="vendors"]').click()
        cy.get('.subheader-splitted > :nth-child(1) > .header-link').click()
        cy.get('[name="name"]').click().type('George Femi')
        cy.get('[name="businessUnit"]').click().type('Pharmaceutical Company')
        cy.get('[name="city"]').click().type('Lagos')
        cy.get('[name="countryState"]').click().type('Nigeria')
        cy.get('[name="phoneNumber"]').click().type('08169664373')
        //cy.get('[data-cy=FullPageModalActions__submit]').click()
    
    })


})
describe('Disburse Prescription', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Search prescriptions', function()
    {
        cy.contains('Pharmacy').click()
        cy.get('#HeaderSearch').click().type('Amanam')
    })

})
describe('Disburse Prescription', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Unbilled prescription', function()
    {
        cy.contains('Pharmacy').click()
        cy.contains('Unbilled').click()
    })

})
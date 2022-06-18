describe('Disburse Prescription', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Undisbursed prescription', function()
    {
        cy.contains('Pharmacy').click()
        cy.contains('Undisbursed').click()
    })

})
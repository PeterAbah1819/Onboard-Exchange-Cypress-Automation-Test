describe('Disburse Prescription', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Discarded prescriptions', function()
    {
        cy.contains('Pharmacy').click()
        cy.contains('Discarded').click()
    })

})
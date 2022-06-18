describe('Manage Inventory Page', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Manage Inventory Page', function()
    {
        cy.contains('Pharmacy').click()
        cy.contains('Manage Inventory').click()
    })

})
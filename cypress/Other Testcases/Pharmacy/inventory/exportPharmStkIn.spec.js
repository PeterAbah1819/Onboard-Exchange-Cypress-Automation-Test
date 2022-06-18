describe('Import Inventory', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Export StockIn', function()
    {
        cy.get('[ng-href="/prescription-orders"] > .NavSidebar__menu-option-label').click()
        cy.get('[ui-sref="inventory"]').click()
        cy.contains('Stock In').click()
        cy.get('.submit-btn').click()
    })

})
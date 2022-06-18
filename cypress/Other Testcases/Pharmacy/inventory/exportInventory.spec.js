describe('Import Inventory', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Export inventory', function()
    {
        cy.get('[ng-href="/prescription-orders"] > .NavSidebar__menu-option-label').click()
        cy.get('[ui-sref="inventory"]').click()
        cy.get('.Inventory__header-link--right > [ng-click="vm.getLog()"]').click()
        cy.get('.submit-btn').click()
    })

})
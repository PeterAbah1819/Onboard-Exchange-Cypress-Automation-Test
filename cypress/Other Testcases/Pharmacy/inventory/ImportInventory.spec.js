describe('Import Inventory', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Import inventory', function()
    {
        cy.get('[ng-href="/prescription-orders"] > .NavSidebar__menu-option-label').click()
        cy.get('[ui-sref="inventory"]').click()
        cy.get('.header-splitted-col.hidden-xmd-max > [ng-click="vm.importItems()"]').click()
        cy.get('[id="choose-file"]').click()
    })

})
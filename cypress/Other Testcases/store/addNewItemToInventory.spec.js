describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Add New Item to Inventory', function()
    {
        cy.get('[ng-href="/procurements"]').click()
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click()
        cy.get('[ng-click="vm.onAddItemClick()"]').click()
        cy.get('#storeId > .super-select-input > input').click()
        cy.get('[role="group"] > .super-select-item').click()
        cy.get('.TextInput__input').click().type('Paracetamol')
        cy.get('.NumericInput__input').click().type('30')
        cy.get('#medication > .super-select-input > input').click()
    })


})
describe('Add new item', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Add New item', function()
    {
        cy.contains('Pharmacy').click()
        cy.contains('Manage Inventory').click()
        cy.contains('Add New Item').click()
        cy.get('.btn-default').click()
        cy.get('.ui-select-search').type('Astymin Syrup')
        cy.get('.ui-select-choices-row > .ng-scope').click()
        cy.get('#item_quantity').click().type('300')
        cy.get('.PriceField > .field').click().type('800')
        cy.get('#item_no_of_beds').click().type('1013')
        cy.get('#reorder_level').click().clear().type('80')
        cy.get('.submit-btn').click()
    })

})
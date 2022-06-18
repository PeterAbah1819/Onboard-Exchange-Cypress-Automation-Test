describe('Update Item Info', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Update item', function()
    {
        cy.contains('Pharmacy').click()
        cy.contains('Manage Inventory').click()
        cy.contains('Add New Item').click()
        cy.get('.btn-default').click()
        cy.get('.ui-select-search').type('Paracetamol')
        cy.get('.ui-select-choices-row-inner').click()
        cy.get('#item_quantity').click().type('10')
        cy.get('.PriceField > .field').click().type('10')
        cy.get('#item_no_of_beds').click().type('1010')
        cy.get('#reorder_level').click().clear().type('500')
        cy.get('.submit-btn').click()
    })

})
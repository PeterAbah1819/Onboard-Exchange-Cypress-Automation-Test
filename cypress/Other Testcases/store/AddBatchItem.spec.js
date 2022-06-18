describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Add Batch of Item', function()
    {
        cy.get('[ng-href="/procurements"]').click()
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click()
        cy.get('[ng-click="vm.onAddBatchClick()"]').click()
        cy.get('.super-select-input > input').click()
        cy.get('.super-select-text > span').click()
        cy.get('.TextInput__input').click().type('2020')
        cy.get('.NumericInput__input').click().type('20')
        cy.get(':nth-child(4) > .AddBatchItems__label > :nth-child(1)').click()
        cy.get('[style=""] > div > :nth-child(12)').click()
        cy.get(':nth-child(5) > .AddBatchItems__label > :nth-child(1)').click()
        cy.get('[style=""] > div > :nth-child(41)').click()
        cy.get('[data-cy=FullPageModalActions__submit]').click()

    })


})
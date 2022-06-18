describe('Reports', function()
{
    
it('Add Batch of Item', function()

    {
        cy.login()
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




it('Add New Item to Inventory', function()
    {
        cy.login()
        cy.get('[ng-href="/procurements"]').click()
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click()
        cy.get('[ng-click="vm.onAddItemClick()"]').click()
        cy.get('#storeId > .super-select-input > input').click()
        cy.get('[role="group"] > .super-select-item').click()
        cy.get('.TextInput__input').click().type('Paracetamol')
        cy.get('.NumericInput__input').click().type('30')
        cy.get('#medication > .super-select-input > input').click()
    })



it('Add New Item to Inventory', function()
    {
        cy.login()
        cy.get('[ng-href="/procurements"]').click()
        cy.get('.subheader-splitted--row-2 > .hidden-xmd-max > :nth-child(1)').click()
        cy.get('[for="vendor"] > .multiselect > .multiselect__select').click()
        cy.get('[for="vendor"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > div').click()
        cy.get('[for="storeId"] > .multiselect > .multiselect__select').click()
        cy.get('[for="storeId"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > div').click()
        //cy.get('[for="product_name_78216593-b114-453d-9de6-7cb63240254d"] > .multiselect > .multiselect__select').click()
        //
        cy.get('.AlmightyInput__field').click().type('500')
        cy.get('.product_name_ee34e893-a026-4e9f-8578-a6b23ce45369').click()
        //cy.get('[for="unitOfMeasure_78216593-b114-453d-9de6-7cb63240254d"] > .multiselect > .multiselect__select').click()
        //
        cy.get('.v-money').click().type('500')

    })




it('Create Vendor', function()
    {
        cy.login()
        cy.get('[ng-href="/procurements"]').click()
        cy.get('[ui-sref="vendors"]').click()
        cy.get('.subheader-splitted > :nth-child(1) > .header-link').click()
        cy.get('[name="name"]').click().type('George Femi')
        cy.get('[name="businessUnit"]').click().type('Pharmaceutical Company')
        cy.get('[name="city"]').click().type('Lagos')
        cy.get('[name="countryState"]').click().type('Nigeria')
        cy.get('[name="phoneNumber"]').click().type('08169664373')
        cy.get('[data-cy=FullPageModalActions__submit]').click()

    })



it('Fulfill Requisitions', function()
{
    cy.login()
    cy.get('[ng-href="/procurements"]').click()
    cy.get('[ui-sref="storeRequisitions"]').click()
    cy.get('.StoreRequisitionsTable__action-button').click()
    cy.get('.AlmightyCheckbox__selector').click()
    cy.get('.multiselect__select').click()
    cy.get(':nth-child(1) > .multiselect__option > div').click()
    cy.get('.AlmightyInput__field').click().type('300')
    cy.get('.RequisitionModalFooter__approve').click()
})




})
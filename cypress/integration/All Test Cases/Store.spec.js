describe('Reports', function()
{
    

it('Add New Item to Inventory', function()
    {
        //Login
        cy.logins()

        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //Click on the inventory
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click()
        //Click on add item
        cy.get('[ng-click="vm.onAddItemClick()"]').click()
        //Click on store
        cy.get(':nth-child(1) > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
        //Select the store
        cy.get(':nth-child(1) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option > .AlmightyDropdown__option--main').first().click()
        //Select product name
        cy.get('[data-cy="StoreItemCreateForm__medication-selection"] > .multiselect > .multiselect__tags').first().click().type('Test').wait(1000)
        cy.get('[data-cy="StoreItemCreateForm__medication-selection"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option > .AlmightyDropdown__option--main').click()

        //Enter name of item
        cy.get('[data-cy="StoreItemCreateForm__item-name"] > .AlmightyInput__field').click().type('CypressTestItem')

        //Unit of measure
        cy.get('[data-cy="StoreItemCreateForm__units-of-measure"] > .multiselect > .multiselect__tags').click()
        cy.get('[data-cy="StoreItemCreateForm__units-of-measure"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option > .AlmightyDropdown__option--main').click()

        //Click and enter record level
        cy.get('[data-cy="StoreItemCreateForm__reorder-level"] > .AlmightyInput__field').click().type('20')

        //Enter standard price
        cy.get('.AlmightyPrice__field').click().type('100').wait(1000)

        //Clic submit
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(4000)

        //Search for the item added
        cy.get('#HeaderSearch').click({force: true}).type('Cypress')
        //Confirm search returns items
        cy.get('.StoreInventoryList').should('be.visible')
        cy.get(':nth-child(3) > [data-cy="StoreInventoryTable__name-cell"]').should('contain.text', '\n            CypressTestItem\n')

    })


it('Add Batch of Item', function()

    {
        //Login
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //Click on the inventory
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click()
        //click on add batch
        cy.get('[ng-click="vm.onAddBatchClick()"]').click()
        //click on item name and type Test as name
        cy.get('.multiselect__tags').click().type('Cypress')
        cy.get(':nth-child(4) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option > .AlmightyDropdown__option--main').click()

        //Click to add batch number and type cypress2020
        cy.get('.TextInput__input').click().type('cypress2020')

        //Click on the batch date
        cy.get(':nth-child(2) > .DatePicker > .AddBatchItems__label').click()
        //Select the batch date
        cy.get('[style=""] > div > :nth-child(38)').click()

        //Enter quantity
        cy.get('.NumericInput__input').click().type('100')

        //Click on expiry date
        cy.get(':nth-child(3) > .Grid-column-6 > .DatePicker > .AddBatchItems__label').click()
        //Select the date
        cy.get('[style=""] > header > .next').click()
        cy.get('[style=""] > header > .next').click()
        cy.get('[style=""] > header > .next').click()
        cy.get('[style=""] > header > .next').click()
        cy.get('[style=""] > header > .next').click()
        cy.get('[style=""] > header > .next').click()
        cy.get('[style=""] > header > .next').click()
        cy.get('[style=""] > header > .next').click()
        cy.get('[style=""] > header > .next').click()
        cy.get(':nth-child(41)').click()

        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(2000)

        //Search for the item added
        cy.get('#HeaderSearch').click({force: true}).type('Cypress')
        //Confirm search returns items
        cy.get('.StoreInventoryList').should('be.visible')
        cy.get(':nth-child(3) > [data-cy="StoreInventoryTable__name-cell"]').should('contain.text', '\n            CypressTestItem\n')



    })






it('Adjust Item on Inventory', function()
    {
        //Login
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //Click on the inventory
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click().wait(2000)
        //Search for the item added
        cy.get('#HeaderSearch').click({force: true}).type('CypressTestItem').wait(2000)

        //Click on expand for the item with a batch
        cy.get(':nth-child(3) > :nth-child(8) > .StoreInventoryTable__content-actions > .StoreInventoryTable__action-button--gray').click().wait(1000)

        //Click on the adjust button
        cy.get(':nth-child(5) > .StoreInventoryBatchesTable__content-actions > .StoreInventoryBatchesTable__action-button').click()
        
        //Enter new amount
        cy.get('#newQuantity > .NumericInput__input').click().type('130')
        //Select reason
        cy.get('.el-input__inner').click()
        cy.get('.el-scrollbar__view > :nth-child(1)').click()
        //Submit to create
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(2000)
        //Search to confirm the new number
        cy.get('#HeaderSearch').click({force: true}).clear().type('CypressTestItem').wait(1000)
        cy.get('.StoreInventoryBatchesTable__header-content-row > :nth-child(6)').should('contain.text','130')

    })


it('Filter & Export Inventory', function()
    {
        //Login
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //Click on the inventory
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click().wait(2000)

        //Remove filter
        cy.get('.InventoryFilters__button--active').click().wait(1000)
        cy.get('.header-splitted-col.hidden-xmd-max > .hidden-xmd-max').click()

        //Filter by expiring soon only
        cy.get('.InventoryFilters > :nth-child(2)').click({force: true}).wait(1000)
        cy.get('.header-splitted-col.hidden-xmd-max > .hidden-xmd-max').click()

        //filter by lowstock only
        cy.get('.InventoryFilters > :nth-child(3)').click().wait(1000)
        cy.get('.InventoryFilters > :nth-child(2)').click({force: true}).wait(1000)
        cy.get('.header-splitted-col.hidden-xmd-max > .hidden-xmd-max').click()

        //Filter by out of stock only
        cy.get('.InventoryFilters > :nth-child(4)').click({force: true}).wait(1000)
        cy.get('.header-splitted-col.hidden-xmd-max > .hidden-xmd-max').click()

        //Select all filters
        cy.get('.InventoryFilters > :nth-child(1)').click({force: true}).wait(1000)
        cy.get('.InventoryFilters > :nth-child(2)').click({force: true}).wait(1000)
        cy.get('.InventoryFilters > :nth-child(3)').click({force: true}).wait(1000)

    })




it('Link Billing Item', function()
    {
        //Login
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //Click on the inventory
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click().wait(2000)
        //Search for the item added
        cy.get('#HeaderSearch').click({force: true}).type('CypressTestItem').wait(2000)

        //Click on the link button
        cy.get(':nth-child(2) > :nth-child(5) > .StoreInventoryTable__action-button').click()

        //click to select the item to link
        cy.get('.multiselect__tags').click().type('Cypress')
        cy.get(':nth-child(2) > .multiselect__option > .BillingItemsDropdown__option').click().wait(500)

        
        //Submit the linked item
        cy.get('[data-cy="FullPageModalActions__submit"]').click()

    })



it('Create Procurement Order', function()
    {
        //Login
        cy.login()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //Click on the procurement
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="procurements"]').click().wait(2000)

        //Click on create procurement order
        cy.get('.subheader-splitted--row-2 > .hidden-xmd-max > :nth-child(1)').click()


        //click to select vendor
        cy.get('[for="vendor"] > .multiselect > .multiselect__tags').click()
        cy.get('[for="vendor"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option > .AlmightyDropdown__option--main').click()

        //Select Type
        cy.get('[for="procurementType"] > .multiselect > .multiselect__tags').click()
        cy.get('[for="procurementType"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()

        //Select product name
        cy.get('.multiselect > .multiselect__tags > .multiselect__single').last().click().wait(2000)
        cy.get('.multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option > .AlmightyDropdown__option--main > span').last().click({force: true})

        //Enter Quantity
        cy.get('.AlmightyInput__field').click().type('10')

        //Select unit of measurement
        cy.get('[for="unitOfMeasure_02208173-625a-4607-977c-8be4e72b9b0a"] > .multiselect > .multiselect__tags').click()
        cy.get('[for="unitOfMeasure_02208173-625a-4607-977c-8be4e72b9b0a"] > .multiselect > .multiselect__tags').click()

        //Enter Unit price
        cy.get('.AlmightyPrice__field').click().type(100)


        //Click on create
        cy.get('[data-cy="FullPageModalActions__submit"]').click()


    })


it('Approve Procurement Order', function()
    {
        cy.logins()
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


it('Finalise Procurement Order', function()
    {
        cy.logins()
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


it('Filter Procurement order by Vendor Name, Status & Time', function()
    {
        cy.logins()
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


it('View Requisitions', function()
    {
        cy.logins()
        cy.get('[ng-href="/procurements"]').click()
        cy.get('[ui-sref="storeRequisitions"]').click()
        cy.get('.StoreRequisitionsTable__action-button').click()
        cy.get('.AlmightyCheckbox__selector').click()
        cy.get('.multiselect__select').click()
        cy.get(':nth-child(1) > .multiselect__option > div').click()
        cy.get('.AlmightyInput__field').click().type('300')
        cy.get('.RequisitionModalFooter__approve').click()
    })


    it('View Adjustment History', function()
    {
        cy.logins()
        cy.get('[ng-href="/procurements"]').click()
        cy.get('[ui-sref="storeRequisitions"]').click()
        cy.get('.StoreRequisitionsTable__action-button').click()
        cy.get('.AlmightyCheckbox__selector').click()
        cy.get('.multiselect__select').click()
        cy.get(':nth-child(1) > .multiselect__option > div').click()
        cy.get('.AlmightyInput__field').click().type('300')
        cy.get('.RequisitionModalFooter__approve').click()
    })


it('Manage/Add Vendors', function()
    {
        //Login
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //Click on the procurement
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="procurements"]').click().wait(2000)

        //Click on manage vendors
        cy.get('[ui-sref="vendors"]').click()

        //click on add new vendor
        cy.get('.subheader-splitted > :nth-child(1) > .header-link').click()

        //Enter the name
        cy.get(':nth-child(1) > .AlmightyInput > .AlmightyInput__field').click().type('Cypress Tester')
        //Enter the business unit
        cy.get('[for="businessUnit"] > .AlmightyInput__field').click().type('Cypress Test Business')
        //Enter the city address
        cy.get('[for="city"] > .AlmightyInput__field').click().type('Cypress Test Address')
        //Enter the country state
        cy.get('.AddVendorForm__row--last > .AlmightyInput > .AlmightyInput__field').click().type('Cypress')
        //Enter the phone number
        cy.get('#phoneNumber > input').click().type('08169664373')

        //Click on create
        cy.get('[data-cy="FullPageModalActions__submit"]').click()

    })







})
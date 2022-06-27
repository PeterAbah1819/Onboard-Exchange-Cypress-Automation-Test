describe('Reports', function()
{
    

it('Add New Item to Inventory', function()
    {
        //logins
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
        //logins
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
        //logins
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
        //logins
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
        //logins
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
        //logins
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
        cy.get('.multiselect > .multiselect__tags > .multiselect__single').last().click()
        cy.get('.multiselect__input').type('Cypress').wait(2000).type('{enter}')
        
        //Enter Quantity
        cy.get('.AlmightyInput__field').click().type('10')

        //Select unit of measurement
        cy.get('.multiselect__placeholder').click().type('{enter}')
        

        //Enter Unit price
        cy.get('.AlmightyPrice__field').click().type('10')


        //Click on create
        cy.get('[data-cy="FullPageModalActions__submit"]').click()


    })


    


it('Approve Procurement Order', function()
    {
        //logins
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //Click on the procurement
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="procurements"]').click().wait(2000)

        cy.get('.ProcurementList').should('be.visible')
        cy.get('.ProcurementList').should('contain.text', 'Approve')

        //Click Approve
        cy.get(':nth-child(1) > :nth-child(7) > .ProcurementListTable__content-actions > :nth-child(1)').click().wait(1000)

        //Select item from the modal
        cy.get('.AlmightyCheckbox__selector').click()
        //Click Approve
        cy.get('.ApprovalModalContent__approve').click()
        

    })


it('Filter Procurement order by Vendor Name, Status & Time', function()
    {
        //logins
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //click on the procurement
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="procurements"]').click().wait(2000)

        //Filter by vendor
        cy.get(':nth-child(1) > .ListFilter__wrapper > .ListFilter__opener > .ListFilter__opener-label').click()
        cy.get(':nth-child(1) > [data-cy="AlmightyCheckbox"] > .AlmightyCheckbox__selector').click()
        cy.get('.submit-btn').click()

        //Filter by status
        cy.get(':nth-child(2) > .ListFilter__wrapper > .ListFilter__opener > .ListFilter__opener-label').click()
        cy.get(':nth-child(3) > .AlmightyRadio__option-label').click()
        cy.get('.submit-btn').click()


    })


it('Finalise Procurement Order', function()
    {
        //logins
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //Click on the procurement
        cy.get('.StoreHeader > div.header-splitted-col > .header-nav-tabs > [ui-sref="procurements"]').click().wait(2000)

        //Filter by vendor
        cy.get(':nth-child(1) > .ListFilter__wrapper > .ListFilter__opener > .ListFilter__opener-label').click()
        cy.get(':nth-child(1) > [data-cy="AlmightyCheckbox"] > .AlmightyCheckbox__selector').click()
        cy.get('.submit-btn').click()

        //Filter by status
        cy.get(':nth-child(2) > .ListFilter__wrapper > .ListFilter__opener > .ListFilter__opener-label').click()
        cy.get(':nth-child(3) > .AlmightyRadio__option-label').click()
        cy.get('.submit-btn').click()
 
         cy.get('.ProcurementList').should('be.visible')
         cy.get('.ProcurementList').should('contain.text', 'Receive')
 
         //Click Receive
         cy.get(':nth-child(1) > :nth-child(7) > .ProcurementListTable__content-actions > :nth-child(1)').click().wait(1000)
 
         //Select item from the modal
         cy.get(':nth-child(2) > :nth-child(7) > .ProcurementListTable__content-actions > :nth-child(1)').click().wait(1000)
         //Enter Details
         cy.get('.multiselect__tags').click()
         cy.get('.AlmightyDropdown__option--main').click()

         //Enter quantity
         cy.get('#quantity_91ffc3ac-d6ea-43df-adc9-2928a554b0ca > .AlmightyInput__field').should('be.visible')
         cy.get('#quantity_91ffc3ac-d6ea-43df-adc9-2928a554b0ca > .AlmightyInput__field').should('contain.text', 'Enter quantity').click().type('100')

         //Batch no.
         cy.get('#batchNo_91ffc3ac-d6ea-43df-adc9-2928a554b0ca > .AlmightyInput__field').click().type('12345')

         //Batch date
         cy.get('[for="batchDate"] > .AlmightyDatetimePicker__field').click()


         //Exprity date
         cy.get('[for="expiryDate"] > .AlmightyDatetimePicker__field').click()


         //Click on finalise
         cy.get('.ProcurementReceiveForm__finalize-button').click().wait(1000)

    })



it('View Requisitions', function()
    {
        //logins
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //click on the requisitions
        cy.get('[ui-sref="storeRequisitions"]').click()
        //click to view details
        cy.get(':nth-child(1) > :nth-child(6) > .RequisitionsTable__content-actions > .RequisitionsTable__action-button').click().wait(2000)
        //Close modal
        cy.get('.icon-close').click()
       
    })


    it('View Adjustment History', function()
    {
        //logins
        cy.logins()
        //click on store module
        cy.get('[ng-href="/store-requisitions"]').click()
        //click on the inventory
        cy.get('.StoreHeader > .header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click()
        //Click on adjustment history
        cy.get(':nth-child(3) > .header-link').click().wait(2000)
        //Close page
        cy.get('[data-cy="FullPageModalActions__submit"]').click()
        
    })


it('Manage/Add Vendors', function()
    {
        //logins
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
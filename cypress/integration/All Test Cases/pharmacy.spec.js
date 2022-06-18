describe('Pharmacy Suite', function()
{
    

    it('Search Prescription Order', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //Search Prescription order
        cy.get('#HeaderSearch').type('Test')
        //cy.get('.PrescriptionOrder__expand-trigger-icon').first().should('be.visible').click()
        cy.get('[class="PrescriptionOrder__expand-trigger"]')
        cy.get('[class="PrescriptionOrder__expand-trigger"]').first().should('be.visible').click({force: true})
        //cy.contains('Expand').first().click()
    })

    it('Bill Prescription order', function()
    {
        cy.login()

        //Open a patient's folder
        //Get Test patient
         cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
         cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)


        //Submit an entry-Prescription
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__prescription').click()
        //Click medication dropdown
        //select medication
        cy.get('.LibraryDataSelectInfinite__button').click({force: true})
        cy.get('.LibraryDataSelectInfinite__search').click({force: true}).type('Paracetamol').wait(1000)
        cy.get(':nth-child(3) > .LibraryDataSelectInfinite__item > .ng-binding').wait(200).click()
        //add strengh
        cy.get('.ng-scope > .field').click().type('10 mg')
        //input dose
        cy.get('.Grid-column-2 > .field').click().type('1 vail')
        //select route dropdown
        cy.get('.Grid-column-5.Grid-xs-max-column-last > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from route dropdown
        cy.get('#ui-select-choices-row-2-0 > .ui-select-choices-row-inner').click({force: true})
        //select frequency dropdown
        cy.get(':nth-child(3) > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from frequency dropdown
        cy.get('#ui-select-choices-row-3-1 > .ui-select-choices-row-inner').last().click()
        //input duration
        cy.get('.Grid-column-3.Grid-xs-max-column-last > .field').click().type('3')
        //select no of refills dropdown
        cy.get('.Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from no of refils dropdown
        cy.get('#ui-select-choices-row-4-1 > .ui-select-choices-row-inner').click()
        //input additional notes
        cy.get('.Grid-column-4 > .field').click().type('Cypress notes')
        //Enter Pharmacy
        cy.get('.Grid-column-8 > .field-ui-singleselect > .ui-select-match > .btn-default').click().wait(500)
        cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').click().wait(1000)
        //submit
        cy.get('.form-buttons > .submit-btn').click()


        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //filter by unbilled prescription order
        cy.get('.filter-unbilled > label > .RadioContentFilter__item__label').click()
        //Expand desired patient
        cy.get('[class="PrescriptionOrder__expand-trigger"]')
        cy.get('[class="PrescriptionOrder__expand-trigger"]').first().should('be.visible').click()
        //cy.get('[data-layer="Content"]').first().should('be.visible').click()
        //select medication
        cy.get('.multiselect__tags').first().click()
        cy.get(':nth-child(2) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').first().click()
        //Input price
        cy.get('.PriceField').first().click().clear().type('9')
        //submit bill
        cy.get('.PrescriptionOrder__submit-btn').click()
             
    })

    it('Update price of prescription at billing', function()
    {
        cy.login()

        //Open a patient's folder
        //Get Test patient
         cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
         cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)


        //Submit an entry-Prescription
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__prescription').click()
        //Click medication dropdown
        //select medication
        cy.get('.LibraryDataSelectInfinite__button').click({force: true})
        cy.get('.LibraryDataSelectInfinite__search').click({force: true}).type('Paracetamol').wait(1000)
        cy.get(':nth-child(3) > .LibraryDataSelectInfinite__item > .ng-binding').wait(200).click()
        //add strengh
        cy.get('.ng-scope > .field').click().type('10 mg')
        //input dose
        cy.get('.Grid-column-2 > .field').click().type('1 vail')
        //select route dropdown
        //select route dropdown
        cy.get('.Grid-column-5.Grid-xs-max-column-last > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from route dropdown
        cy.get('#ui-select-choices-row-2-0 > .ui-select-choices-row-inner').click({force: true})
        //select frequency dropdown
        cy.get(':nth-child(3) > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from frequency dropdown
        cy.get('#ui-select-choices-row-3-1 > .ui-select-choices-row-inner').last().click()
        //input duration
        cy.get('.Grid-column-3.Grid-xs-max-column-last > .field').click().type('3')
        //select no of refills dropdown
        cy.get('.Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from no of refils dropdown
        cy.get('#ui-select-choices-row-4-1 > .ui-select-choices-row-inner').click()
        //input additional notes
        cy.get('.Grid-column-4 > .field').click().type('Cypress notes')
        //Enter Pharmacy
        cy.get('.Grid-column-8 > .field-ui-singleselect > .ui-select-match > .btn-default').click().wait(500)
        cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').click().wait(1000)
        //submit
        cy.get('.form-buttons > .submit-btn').click()
        cy.get('[ng-href="/patients/recent"]').click()

        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //filter by unbilled prescription order
        cy.get('.filter-unbilled > label > .RadioContentFilter__item__label').click()
        //Expand desired patient
        cy.get('[class="PrescriptionOrder__expand-trigger"]')
        cy.get('[class="PrescriptionOrder__expand-trigger"]').first().click()
        //select medication
        cy.get('.multiselect__tags').first().click()
        cy.get(':nth-child(2) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').first().click()
        //Input quantity
        cy.get('.PrescriptionOrder__prescribed-item-field').first().click().clear().type('9')
        //update price of item
        cy.get('.PriceField').first().click().clear().type('18012')
        //submit bill
        cy.get('.PrescriptionOrder__submit-btn').click()
             
    })


    it('Dispense prescription', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //filter by undisbursed order
        cy.get('.filter-undisbursed > label > .RadioContentFilter__item__label').click()
        //expand desired patient
        cy.get('[class="PrescriptionOrder__expand-trigger"]')
        cy.get('[class="PrescriptionOrder__expand-trigger-icon icon-dropdown2"]').first().click().wait(500)
        //dispense prescription order
        cy.get('.PrescriptionOrder__submit-btn').first().click({force: true})  

    })

    it('Discard a prescription order', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //filter by unbilled prescription order
        cy.get('.filter-unbilled > label > .RadioContentFilter__item__label').click().wait(1000)
        //Expand desired patient
        cy.get('[class="PrescriptionOrder__expand-trigger"]')
        cy.get('[class="PrescriptionOrder__expand-trigger"]').first().click()
        //click discard prescrption
        cy.get('.PrescriptionOrder__cancel-btn')
    })


    it('Filter Prescription Order by Status', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //filter by unbilled prescription order
        cy.get('.filter-unbilled > label > .RadioContentFilter__item__label').click()
        //Filter by Refil
        cy.get('.filter-refill > label > .RadioContentFilter__item__label').click()
        //filter by undisbursed
        cy.get('.filter-undisbursed > label > .RadioContentFilter__item__label').click()
        //filter by completed
        cy.get('.filter-completed > label > .RadioContentFilter__item__label').click()
        //filter by discarded
        cy.get('.filter-discarded > label > .RadioContentFilter__item__label').click()
        //filter all
        cy.get('.filter-all > label > .RadioContentFilter__item__label').click()
    })


    it('Clear Pending Prescription Orders', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        cy.get('.PrescriptionOrders__content-counter__clear-all').click()
        cy.get('.ConfirmModal__modal-actions > .submit-btn').click()
    })

    it('Add New Item to Inventory', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //Go to Pharmacy inventory
        cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click()
        cy.get('[ng-click="vm.onAddBatchClick()"]').click().wait(2000)
        //select Name
        cy.get('.multiselect__tags').click().type('Cypress')
        //select drop down item
        cy.get('.multiselect__option > :nth-child(1) > .AlmightyDropdown__option').should('be.visible').click()
      
        //input item quantity
        cy.get('.NumericInput__input').click().type('508')
        //batch No.
        cy.get('.TextInput__input').click().clear().type('cy104')
        //Batch date
        cy.get(':nth-child(2) > .DatePicker > .PharmacyInventoryAddBatchItems__label').click()
        cy.get('[style=""] > div > :nth-child(18)').click().wait(500)
        //Expiry date
        cy.get(':nth-child(3) > .Grid-column-6 > .DatePicker > .PharmacyInventoryAddBatchItems__label').click()
        cy.get('[style=""] > div > :nth-child(39)').click().wait(500)
        //Submit
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(1000)
    })


    it('Delete/Adjust an Item from Inventory', function()
    {
        cy.login()
        // //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        // //Go to Pharmacy inventory
        cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click().wait(2000)
        //search item
        cy.get('#HeaderSearch').click().type('Cypress').wait(2000)
        //select item to delete and expand
        cy.get('.PharmacyInventoryTable__action-button--gray').click().wait(1000)
        //click adjust
        cy.get(':nth-child(2) > :nth-child(5) > .PharmacyInventoryBatchesTable__content-actions > .PharmacyInventoryBatchesTable__action-button').click().wait(1000)
        //Adjust to 0
        cy.get(':nth-child(3) > .AlmightyInput > .AlmightyInput__field').click({force: true}).clear({force: true}).type('0')

        //Add reason
        cy.get('.multiselect__tags').click().wait(500)
        cy.get(':nth-child(2) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
        //confirm delete action
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(1000)
   
    })


    it('Link Inventory Item', function()
    {
        //To link, first make sure the item is newly created and not linked
        //Create the billing item in manage billing module
        //Link billing item to inventory item
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //Go to Pharmacy inventory
        cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click()
        cy.get('[ng-click="vm.onAddBatchClick()"]').click().wait(2000)
        //select Name
        cy.get('.multiselect__tags').click().type('Cypress')
        //select drop down item
        cy.get('.multiselect__option > :nth-child(1) > .AlmightyDropdown__option').should('be.visible').click()
      
        //input item quantity
        cy.get('.NumericInput__input').click().type('508')
        //batch No.
        cy.get('.TextInput__input').click().clear().type('cy104')
        //Batch date
        cy.get(':nth-child(2) > .DatePicker > .PharmacyInventoryAddBatchItems__label').click()
        cy.get('[style=""] > div > :nth-child(18)').click().wait(500)
        //Expiry date
        cy.get(':nth-child(3) > .Grid-column-6 > .DatePicker > .PharmacyInventoryAddBatchItems__label').click()
        cy.get('[style=""] > div > :nth-child(39)').click().wait(500)
        //Submit
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(1000)

        
        //Create the billing item in manage billing module
        //go to manage billing
        cy.get('[data-cy=NavSidebar__billing]').click({force: true}).wait(300)
        //click add new item
        cy.get('[ng-click="vm.addNewItem()"]').click({force: true})
        //select item category
        cy.get('.btn-default').click({force: true})
        cy.get('.field-ui-singleselect > .ui-select-search').click({force: true}).type('drugs')
        cy.get('.ui-select-choices-row-inner').first().click()
        //input item name
        cy.get('#item_name').click().type('Cypress Drug Bill')
        //input price
        cy.get('#item_price').click().type('512')
        //click submit
        cy.get('.submit-btn').click().wait(1000)

        //Link billing item to inventory item
        //go to store
        cy.get('[ng-href="/store-requisitions"]').click({force: true})
        //Go to store inventory
        cy.get('.StoreHeader > .header-splitted-col > .header-nav-tabs > [ui-sref="storeInventory"]').click().wait(500)
        //search item
        cy.get('#HeaderSearch').click().type('Cypress').wait(2000)
        //click link
        cy.get(':nth-child(5) > .StoreInventoryTable__action-button').first().click({force: true})
        //select inventory item
        cy.get('.multiselect__tags').click({force: true}).type('Cypress Drug')
        //select custom item
        cy.get(':nth-child(4) > .multiselect__option > .BillingItemsDropdown__option').first().click()
        //submit
        cy.get('[data-cy="FullPageModalActions__submit"]').click()

  
   
    })


    it('Edit Inventory Item', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //Go to Pharmacy inventory
        cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click().wait(2000)
        //search item
        cy.get('#HeaderSearch').click().type('Cypress Drug')
        //Click edit
        cy.get('.PharmacyInventoryTable__action-button--edit').first().click()
        //Edit name
        //cy.get(':nth-child(1) > .field').click().clear().type('Cypress Edited Drug')
        //Edit reorder level
        cy.get('.AlmightyInput__field').click().clear().type('50')
        //click update
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(200)   
   
    })


    it('Add More of an Item', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //Go to Pharmacy inventory
        cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click().wait(2000)
        //search item
        cy.get('#HeaderSearch').click().type('Cypress Drug')
        //Click Add 
        cy.get('[ng-click="vm.onAddBatchClick()"]').first().click()
        //select Name
        cy.get('.multiselect__tags').click().type('Cypress')
        //select drop down item
        cy.get('.multiselect__option > :nth-child(1) > .AlmightyDropdown__option').should('be.visible').click()
      
        //input item quantity
        cy.get('.NumericInput__input').click().type('508')
        //batch No.
        cy.get('.TextInput__input').click().clear().type('cy104')
        //Batch date
        cy.get(':nth-child(2) > .DatePicker > .PharmacyInventoryAddBatchItems__label').click()
        cy.get('[style=""] > div > :nth-child(18)').click().wait(500)
        //Expiry date
        cy.get(':nth-child(3) > .Grid-column-6 > .DatePicker > .PharmacyInventoryAddBatchItems__label').click()
        cy.get('[style=""] > div > :nth-child(39)').click().wait(500)
        //Submit
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(1000)
    })




    it('Export Inventory to CSV', function()
    {
        // cy.login()
        // //View pharmacy
        // cy.get('[ng-href="/prescription-orders"]').click()
        // //Go to Pharmacy inventory
        // cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click().wait(2000)
        // //Clcik the export link
        // cy.contains('Export to CSV').click()
   
    })
    

    it('Periodical Stock in Export ', function()
    {
        // cy.login()
        // //View pharmacy
        // cy.get('[ng-href="/prescription-orders"]').click()
        // //Go to Pharmacy inventory
        // cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click().wait(2000)
        // //Clcik Stock in export link
        // cy.contains('Stock In').click()
        // //Click download
        // cy.get('.submit-btn').click()
    })


    it('Periodical Stock Out Export', function()
    {
        // cy.login()
        // //View pharmacy
        // cy.get('[ng-href="/prescription-orders"]').click()
        // //Go to Pharmacy inventory
        // cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click().wait(2000)
        // //Clcik Stock in export link
        // cy.contains('Stock Out').click()
        // //Click download
        // cy.get('.submit-btn').click()
    })


    it('Periodical Inventory log Export', function()
    {
        // cy.login()
        // //View pharmacy
        // cy.get('[ng-href="/prescription-orders"]').click()
        // //Go to Pharmacy inventory
        // cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click().wait(2000)
        // //Clcik Stock in export link
        // cy.contains('View Inventory Log').click()
        // //Click download
        // cy.get('.submit-btn').click()
    })


    it('View Low Stock Itemst', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //Go to Pharmacy inventory
        cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click().wait(2000)
        //Click low stock filter
        cy.get('.InventoryFilters > :nth-child(3)').click({force: true}).wait(1000)
        //Export low stock items
        //cy.contains('Export to CSV').click()
    })


    it('View Out of Stock Items', function()
    {
        cy.login()
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"]').click()
        //Go to Pharmacy inventory
        cy.get('[ng-if="vm.showNewInventory && vm.hasAccessToInventory()"]').click().wait(2000)
        //Click out of stock filter
        cy.get('.InventoryFilters > :nth-child(4)').click({force: true}).wait(1000)
        //Export low stock items
        //cy.contains('Export to CSV').click()
    })   
    

})
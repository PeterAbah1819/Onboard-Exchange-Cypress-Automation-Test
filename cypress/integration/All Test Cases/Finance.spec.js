describe('Finance Suite', function()
{

    it('Add New Insurance Provider', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //view manage insurance providers
        cy.get('.header-splitted-col.hidden-xmd-max > .ng-scope').click()
        //add new insurance provider
        cy.get('.subheader-splitted > :nth-child(1) > .header-link').click()
        cy.get('.ui-select-match-text').click()
        cy.get('#ui-select-choices-row-1-1 > .ui-select-choices-row-inner').click()
        cy.get('#item_name').should('be.visible')
        cy.get('#item_name').click({force: true}).type('Cypress Insurer')
        cy.get('.AddNewProviderModal__buttons > .submit-btn').click()
    })


    it('Add New Billable Item', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //add new billable item
        cy.get('[ng-click="vm.addNewItem()"]').click()
        cy.get('.ui-select-match-text').click()
        cy.get('#ui-select-choices-row-1-4 > .ui-select-choices-row-inner').click()
        cy.get('#item_name').click().type('Cypress Billing Item')
        cy.get('#item_price').click().type('2005')
        cy.get('.field > :nth-child(1) > .ui-select-search').click()
        cy.get('#ui-select-choices-row-2-1 > .ui-select-choices-row-inner').click()
        cy.get('.submit-btn').click()
    })
    
    
    it('Search/Edit Billable Item', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //search/edit billable item
        cy.get('#HeaderSearch').click().type('Cypress Billing Item')
        cy.get('.Billing__edit-link > .icon-pencil').first().click()
        cy.get('#item_name').first().clear().type('Cypress Edited Billing Item')
        cy.get('#item_price').clear().type('2245').click().wait(1000)
        //click submit
        cy.get('.submit-btn').click()
    })
       

    it('Add Bills', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click()
        //Submit a new entry - bill
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()
        cy.get('.BillingItemsSelectWithCategories__button').click()
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').click().type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Increase quantity
        //cy.get('.field').click().clear().type('14')
        //click submit
        cy.get('.cancel-btn').click()

    })


    it('Edit Price + Quantity of Item While Adding a Bill', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click()
        //Submit a new entry - bill
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()
        cy.get('.BillingItemsSelectWithCategories__button').click()
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').click().type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Increase quantity
        cy.get('.field').click().clear().type('14')
        //Edit default price
        cy.get('.PriceField__field').first().click().clear().type('3580')
        //click submit
        cy.get('.cancel-btn').click()
    })


    it('settle full balance', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)
        //click settle ballance
        cy.get('.Feed__settle-balance-link').click({force: true})
        //click pay now
        cy.get('.PagePaymentItems__back').click().wait(500)
        cy.get('[ng-click="vm.openInvoicePaymentForm(invoice)"]').first().click()
        //bill to patient
        cy.get('.pay-ico-bill-to-patient-inactive').click()
        //Settle full balance
        cy.get('.pay-ico-pay-full-balance-inactive').click()
        cy.get('.pay-ico-cash-payment-inactive').click()
        cy.get('.CashTransaction__actions--continue').click()
    })


    it('Edit Price + Quantity of Item While Settling Balance', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)
        //click settle ballance
        cy.get('.Feed__settle-balance-link').click({force: true})
        //click pay now
        cy.get('.PagePaymentItems__back').click().wait(500)
        cy.get('[ng-click="vm.openInvoicePaymentForm(invoice)"]').first().click()
        //click bill to patient
        cy.get('.pay-ico-bill-to-patient-inactive').click()
        //click pencil icon to edit item
        cy.get('[class="icon-pencil PagePaymentItems__edit-item"]').first().click()
        //Edit item name
        cy.get('[name="item_name"]').first().click().clear().type('Cypres Edited Name')
        //edit item quantity
        cy.get('[name="item_quantity"]').first().clear().type('11')
        //Edit item price
        cy.get('[name="item_price"]').first().click().clear().type('5248')
        cy.get('.UpdateBalanceItemModal__modal-actions > .submit-btn').click().wait(500)
        
        //Select partial balance
        cy.get('.pay-ico-pay-partial-balance-inactive').click({force: true})
        cy.get('.pay-ico-cash-payment-inactive').click()
        cy.get('.PriceField').click().type('500')
        cy.get('.CashTransaction__actions--continue').click()
    })


    it('Add Discount to a bill', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click()
        //Submit a new entry - bill
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()
        cy.get('.BillingItemsSelectWithCategories__button').click()
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        cy.get('.submit-btn').last().click()
        //add discount
        cy.get('.PagePaymentItems__totals-row__discount__button').click()
        //Input percent discount
        cy.get('#discount').click().type('25')
        cy.get('.submit-btn').first().click()
    })


    it('Edit Added Discount', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click()
        //Submit a new entry - bill
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()
        cy.get('.BillingItemsSelectWithCategories__button').click()
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        cy.get('.submit-btn').last().click()
        //Edit discount
        cy.get('[title="Edit Discount"]').click()
        //Input percent discount
        cy.get('#discount').click().clear().type('20')
        cy.get('.submit-btn').first().click()
    })


    it('Remove Added Discount', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click()
        //Submit a new entry - bill
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()
        cy.get('.BillingItemsSelectWithCategories__button').click()
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        cy.get('.submit-btn').last().click()
        //REmove discount
        cy.get('[title="Delete Discount"]').click()
        
    })


    it('Add an Item While Settling Balance', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)
        //click settle ballance
        cy.get('.Feed__settle-balance-link').click({force: true})
        //click pay now
        cy.get('.PagePaymentItems__back').click().wait(500)
        cy.get('[ng-click="vm.openInvoicePaymentForm(invoice)"]').first().click()
        //Add an item
        cy.get('.PagePaymentItems__add-item-link').click()
        //select item
        cy.get('.BillingItemsSelectWithCategories__button').click()
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').click().type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Click add
        cy.get('.AddBalanceItemModal__modal-actions > .submit-btn').click().wait(200)
        //bill to patient
        cy.get('.pay-ico-bill-to-patient-inactive').click({force: true})
        //Select partial balance
        cy.get('.pay-ico-pay-partial-balance-inactive').click({force: true})
        cy.get('.pay-ico-cash-payment-inactive').click({force: true})
        cy.get('.PriceField').last().click().type('500')
        cy.get('.CashTransaction__actions--continue').click({force: true})

    })


    it('Remove an Item While Settling Balance', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()
        
        //click select item
        cy.get('.BillingItemsSelectWithCategories__button').click({force: true})
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').click().type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Increase quantity
        cy.get('.field').click().clear().type('9')

        //add second item
        cy.get('.EntryFormBilling__add-item').click()
        //click select item
        cy.get('.BillingItemsSelectWithCategories__button').last().click()
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').last().click()
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Increase quantity
        cy.get('.field').last().click().clear().type('4')
        //click pay now
        cy.get('.form-buttons > .submit-btn').click()
        //Remove an item
        cy.get('[class="icon-close PagePaymentItems__remove-item"]').last().click()
        //confirm
        cy.get('[class="remove-btn ng-binding"]').click()

        //Settle full balance
        cy.get('.PagePaymentItems__payment-method-label').first().click()
        //Select full payment
        //cy.get('[class="PagePaymentItems__payment-method-label ng-binding"]').click()
        cy.contains('Pay Full Balance').click()
        //select cash
        cy.get('[class="pay-ico-cash-payment-inactive"]').click()
        cy.get('.CashTransaction__actions--continue').click()
    })


    it('settle partial balance', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)
        //click settle ballance
        cy.get('.Feed__settle-balance-link').click({force: true})
        //click pay now
        cy.get('.PagePaymentItems__back').click().wait(500)
        cy.get('[ng-click="vm.openInvoicePaymentForm(invoice)"]').first().click()
        //click bill to patient
        cy.get('.pay-ico-bill-to-patient-inactive').click()
        //Select partial balance
        cy.get('.pay-ico-pay-partial-balance-inactive').click()
        cy.get('.pay-ico-cash-payment-inactive').click()
        cy.get('.PriceField').click().type('500')
        cy.get('.CashTransaction__actions--continue').click()
    })


    it('Generate Claims Form For Partial Services', function()
    {
        cy.login()

        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)

        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click({force: true})
        //edit pt insurance provider
        cy.get(':nth-child(2) > .icon-pencil').click({force: true})
   
        //select yes radio
        cy.get(':nth-child(1) > label > .entry-value').click()
        //click to search
        cy.get('.ui-select-match > .btn-default').click()
        //Search HMO
        cy.get('.ui-select-search').click().type('Cypress')
        cy.get('[class="ui-select-choices-row-inner"]').first().click()
        //input number
        cy.get('#insurance_enrollee_number').click().clear().type('HY1025')
        //click save
        cy.get('.ChangeInsuranceModal__actions > .submit-btn').click().wait(200)

        //click select item
        cy.get('.BillingItemsSelectWithCategories__button').click({force: true})
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').click({force: true}).type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click({force: true})
        //Increase quantity
        cy.get('.field').click().clear().type('9')

        //add second item
        cy.get('.EntryFormBilling__add-item').click({force: true})
        //click select item
        cy.get('.BillingItemsSelectWithCategories__button').last().click()
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').last().click().type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').last().click()
        //Increase quantity
        cy.get('.field').last().click().clear().type('4')
        //click pay now
        cy.get('.form-buttons > .submit-btn').click()

        //click on bill insurance
        cy.get('.ng-scope > .PagePaymentItems__payment-method-label').click()
        //click on partial services to insurance
        cy.get('.pay-ico-partial-services-inactive').click()
        //Uncheck an item
        cy.get('[class="PagePaymentItems__insurance-list-checkbox PagePaymentItems__insurance-list-checkbox-checked"]').first().click()
        //generate claim form for all services
        cy.get('.LibraryDataMultiselectInfinite__search').click()
        cy.get(':nth-child(1) > .LibraryDataMultiselectInfinite__item > .ng-binding').click()
        cy.get('.ui-select-match > .btn-default').click()
        cy.get('[class="ui-select-choices-row-inner"]').first().click()
        cy.get('.field').type('1287',).click()
        cy.get('.submit-btn').last().click()
            
    })


    it('Generate Claims Form For Full Services', function()
    {
        cy.login()

        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)

        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()
        //edit pt insurance provider
        cy.get(':nth-child(2) > .icon-pencil').click({force: true})
   
        //select yes radio
        cy.get(':nth-child(1) > label > .entry-value').click()
        //click to search
        cy.get('.ui-select-match > .btn-default').click()
        //Search HMO
        cy.get('.ui-select-search').click().type('Cypress')
        cy.get('[class="ui-select-choices-row-inner"]').first().click()
        //input number
        cy.get('#insurance_enrollee_number').click().clear().type('HY1025')
        //clickm save
        cy.get('.ChangeInsuranceModal__actions > .submit-btn').click().wait(200)

        //click select item
        cy.get('.BillingItemsSelectWithCategories__button').click({force: true})
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').click({force: true}).type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Increase quantity
        cy.get('.field').click().clear().type('12')

        //click pay now
        cy.get('.form-buttons > .submit-btn').click({force: true})
        //click on bill insurance
        cy.get('.ng-scope > .PagePaymentItems__payment-method-label').click()
        //select all services to insurance
        cy.get('[class="pay-ico-all-services-inactive"]').click()
       
        //generate claim form for all services
        cy.get('.LibraryDataMultiselectInfinite__search').click()
        cy.get(':nth-child(1) > .LibraryDataMultiselectInfinite__item > .ng-binding').click()
        cy.get('.ui-select-match > .btn-default').click()
        cy.get('[class="ui-select-choices-row-inner"]').first().click()
        cy.get('.field').type('12987',).click()
        cy.get('.submit-btn').last().click()
    })


    it('Lock an Invoice', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()
        
        //click select item
        cy.get('.BillingItemsSelectWithCategories__button').click({force: true})
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').click().type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Increase quantity
        cy.get('.field').click().clear().type('9')

        //add second item
        cy.get('.EntryFormBilling__add-item').click()
        //click select item
        cy.get('.BillingItemsSelectWithCategories__button').last().click()
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').last().click()
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Increase quantity
        cy.get('.field').last().click().clear().type('4')
        //click pay now
        cy.get('.form-buttons > .submit-btn').click().wait(1000)
        
        //lock invoice
        cy.get('.PagePaymentItems__lock-btn').click({force:true})
    })


    it('Unlock an Invoice', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click()
        //settle balance
        cy.get('.Feed__settle-balance-link').click()
        cy.get('.UnpaidInvoicesBox__list-row-item--action').first().click({force: true}).wait(500)
        //unlock invoice
        cy.get('.PagePaymentItems__unlock-btn').click()                           
    })


    it('Add Additional Note to an Invoice', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)
        //click settle ballance
        cy.get('.Feed__settle-balance-link').click({force: true})
        //click pay now
        cy.get('.PagePaymentItems__back').click().wait(500)
        cy.get('[ng-click="vm.openInvoicePaymentForm(invoice)"]').first().click()
        //bill to patient
        cy.get('.pay-ico-bill-to-patient-inactive').click()
        //Settle full balance
        cy.get('.pay-ico-pay-full-balance-inactive').click()
        cy.get('.pay-ico-cash-payment-inactive').click()
        //Add Additional note
        cy.get('[class="cancel-btn PagePaymentItems__note-button ng-binding"]').click()
        //Input note
        cy.get('.PagePaymentItems__note-button').click({force: true})
        cy.scrollTo('bottom', {ensureScrollable: false}) 
        cy.get('.ta-scroll-window').click().type('Cypress Tester can add notes while performing several actions on bills')
        //submit
        cy.get('.CashTransaction__actions--continue').click()
           
    })


    it('Print Quote', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()
        
        //click select item
        //cy.get('.BillingItemsSelectWithCategories__button').click({force: true})
        //Search for item
        cy.get('.EntryFormBilling__add-item').click().wait(500)
        cy.get('.BillingItemsSelectWithCategories__button').click()
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Increase quantity
        cy.get('.field').click().clear().type('9')
        //click pay now
        cy.get('.form-buttons > .submit-btn').click().wait(1000)
        //click print quote
        cy.get('[class="ico-print PagePaymentItems__print-button-icon"]').click()
                                
    })


    it('Print Receipt', function()
    {
    cy.login()
    //Open a patient's folder
    cy.get('.TagsList__tags').first().click().wait(500)
    //click submit new entry button
    cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
    cy.get('.NewEntryModal__item__billing').click()
   
    //click select item
    //cy.get('.BillingItemsSelectWithCategories__button').click({force: true})
    //Search for item
    cy.get('.EntryFormBilling__add-item').click().wait(500)
    cy.get('.BillingItemsSelectWithCategories__button').click()
    cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        
   //Increase quantity
    cy.get('.field').click().clear().type('9')
    //edit price
    cy.get('.PriceField').click().clear().type('900')
    //click pay now
    cy.get('.form-buttons > .submit-btn').click().wait(500)
    //bill to patient
    cy.get('.pay-ico-bill-to-patient-inactive').click()
    //Settle full balance
    cy.get('.pay-ico-pay-full-balance-inactive').click()
    cy.get('.pay-ico-cash-payment-inactive').click()
    cy.get('.CashTransaction__actions--continue').click().wait(1000)

    //print receipt
    //Filter for reciept
    cy.get('[data-cy="PatientFeedFilters__filter receipt"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click({force: true}).wait(1000)
    //Click the down facing arrow
    cy.get('.ico-dropdown').first().click()
    //Select print reciept
    cy.get('[class="FeedEntryHeader__dropdown-action ng-binding"]').first().click()

    })


    it('Close an Opened Invoice from Finance Module', function()
    {
        cy.login()
        //view finance module
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click()
        //filter by open invoice
        cy.get('.status--open > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        cy.get('[ng-click="vm.payNow(item)"').first().click({force: true}).wait(200)
        //select payment method
        cy.get('[class="PagePaymentItems__payment-method-label ng-binding"]').first().click().wait(200)
        //Settle full balance
        cy.get('.pay-ico-pay-full-balance-inactive').click()
        cy.get('.pay-ico-cash-payment-inactive').click()
        //Add Additional note
        cy.get('[class="cancel-btn PagePaymentItems__note-button ng-binding"]').click()
        //Input note
        cy.get('p').last().click({force: true}).type('Cypress Tester processed this bill from opened invoices')
        //submit
        cy.get('.CashTransaction__actions--continue').click()

    })


    it('Void a Closed Invoice', function()
    {
        cy.login()
        //view finance module/invoice tb
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click()
        //filter by paid invoices
        cy.get('.status--paid > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click()
        cy.get('[class="Invoices__content-table-link void ng-binding ng-scope"]').first().click()
        cy.get('#reason').click().type('Cypress Tester voided')
        cy.get('.submit-btn').click()

    })


    it('Split a Partially Settled Invoice', function()
    {
        cy.login()
        //Open a patient's folder
        cy.get('.TagsList__tags').first().click().wait(500)

        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.get('.NewEntryModal__item__billing').click()

        //click select item
        cy.get('.BillingItemsSelectWithCategories__button').click({force: true})
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').click().type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').first().click()
        //Increase quantity
        //cy.get('.field').click().clear().type('9')

        //add second item
        cy.get('.EntryFormBilling__add-item').click()
        //click select item
        cy.get('.BillingItemsSelectWithCategories__button').last().click()
        //Search for item
        cy.get('.BillingItemsSelectWithCategories__search').last().click().type('Cypress')
        cy.get('[class="BillingItemsSelectWithCategories__item ng-scope"]').last().click()
        //Increase quantity
        cy.get('.field').last().click().clear().type('4')
        //click pay now
        cy.get('.form-buttons > .submit-btn').click()

        //select payment method
        cy.get('[class="PagePaymentItems__payment-method-label ng-binding"]').first().click().wait(200)
        
        //Select partial balance
        cy.get('.pay-ico-pay-partial-balance-inactive').click()
        cy.get('.pay-ico-cash-payment-inactive').click()
        cy.get('.PriceField').click().type('2005')
        cy.get('.CashTransaction__actions--continue').click()
        //split bill
        //Go to finance module
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click({force:true})
        //filter by unpaid invoices
        cy.get('.status--unpaid > .Checkbox > .ng-scope > .Checkbox__label-container').click().wait(200)
        cy.get('[ng-click="vm.splitInvoice(item)"]').first().click()
        //Select item to be splited
        cy.get('[class="AlmightyCheckbox__selector"]').first().click()
        //Input reason
        cy.get('.AlmightyTextarea__field').click().type('Cypress Tester wants to split bill')
        //click split
        cy.get('[data-cy=SplitInvoiceForm__submit]').click()
        
    })


    it('Apply Filters on Invoices Tab and Export', function()
    {
        cy.login()
        //view finance module/invoices tab
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click()
        //opened invoices
        cy.get('.status--open > .Checkbox > .ng-scope > .Checkbox__label-container').click().wait(200)
        //export filtered invoices option
        cy.get('.Invoices__content-toolbar__download-spreadsheet').click()
        //Unaid invoices
        cy.get('.status--unpaid > .Checkbox > .ng-scope > .Checkbox__label-container').click().wait(200)
        //export filtered invoices option
        cy.get('.Invoices__content-toolbar__download-spreadsheet').click()
        //Paid invoices
        cy.get('.status--paid > .Checkbox > .ng-scope > .Checkbox__label-container').click().wait(200)
        //export filtered invoices option
        cy.get('.Invoices__content-toolbar__download-spreadsheet').click()
        //voided invoices
        cy.get('.status--voided > .Checkbox > .ng-scope > .Checkbox__label-container').click().wait(200)
        //export filtered invoices option
        cy.get('.Invoices__content-toolbar__download-spreadsheet').click()
    })


    it('Search Payments Tab', function()
    {
        cy.login()
        //view finance module
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click()
        //view payment tab
        cy.get('.ScrollableTabs__links > :nth-child(2)').click()
        cy.get('#q').first().click().type('Cypress')
            
    })


    it('Apply Filters on Payments Tab and Export', function()
    {
        cy.login()
        //view finance module
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click()
        //view payment tab
        cy.get('.ScrollableTabs__links > :nth-child(2)').click()
        //all payment filter
        cy.get('[value="all"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered payment option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //Deposits payment filter
        cy.get('[value="deposits"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered payment option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //refunds payment filter
        cy.get('[value="refunds"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered payment option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //Cash payment filter
        cy.get('[value="cash"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered payment option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //bank Transfer payment filter
        cy.get('[value="bank_transfer"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered payment option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //POS payment filter
        cy.get('[value="pos"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered payment option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //CLaim form payment filter
        cy.get('[value="claim_form"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered payment option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //Covered under capitation payment filter
        cy.get('[value="covered"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered payment option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //Others payment filter
        cy.get('[value="other"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered payment option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
    
    })


    it('Mark Claims as Submitted to Payer', function()
    {
        cy.login()
        //view finance module
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click()
        //view claim management tab
        cy.get('.ScrollableTabs__links > :nth-child(3)').click()
        //Filter by unsubmitted  claim form
        cy.get('.status--not_sent > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click({force: true})
        //Filter by Insurer
        cy.get('.ui-select-match > .btn-default').click()
        cy.get('.ui-select-search').click().type('cypress')
        //select a provier
        cy.get('.ui-select-choices-row-inner').first().click()

        cy.get('.Payments__content-table-body > :nth-child(1) > :nth-child(1) > .ng-isolate-scope > .Checkbox > .ng-scope > .Checkbox__label-container').first().click()
        //mark as submitted to payer
        cy.get('[ng-click="vm.openSubmitModal()"]').first().click({force: true})
        cy.get('.ConfirmModal__modal-actions > .submit-btn').click()          
    })


    it('Apply Claims Payments', function()
    {
        cy.login()
        //view finance module
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click()
        //view claim management tab
        cy.get('.ScrollableTabs__links > :nth-child(3)').click()
        //filter by submitted claims
        cy.get('.status--sent > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click()

        //Filter by Insurer
        cy.get('.ui-select-match > .btn-default').click()
        cy.get('.ui-select-search').click().type('cypress')
        //select a provier
        cy.get('.ui-select-choices-row-inner').first().click()

        cy.get('[style=""] > :nth-child(1) > .ng-isolate-scope > .Checkbox > .ng-scope > .Checkbox__label-container').click()
        //apply claim payment
        cy.get('[ng-click="vm.openPayModal()"]').click()
        cy.get('.Grid-row > .ng-isolate-scope > .field-ui-singleselect > .ui-select-match > .btn-default').click()
        cy.get('.Grid-row > .ng-isolate-scope > .field-ui-singleselect > .ui-select-search').click().type('cypress')
        cy.get('.ui-select-choices-row-inner').first().click()

        cy.get('#paymentReference').click().type('113w',)
        cy.get('#price').click().type('5000',)
        cy.get('.PayModal__actions > .btn').click()
   })


   it('Apply Filters on Claims Management Tab and Export', function()
    {
        cy.login()
        //view finance module
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click()
        //view claim management tab
        cy.get('.ScrollableTabs__links > :nth-child(3)').click()
        //Download All
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //Not submitted Claims filter
        cy.get('.status--not_sent > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //Submitted Claims filter
        cy.get('.status--sent > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()
        //Paid Claims filter
        cy.get('.status--paid > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        //export filtered option
        cy.get('.Payments__content-toolbar-download-spreadsheet').click()  
    })


    it('Apply Filters on Reports Tab and Export', function()
    {
        cy.login()
        //view finance module
        cy.get('[ng-href="/financial/invoices"] > .NavSidebar__menu-option-label').click()
        //view report tab
        cy.get('.ScrollableTabs__links > :nth-child(4)').click()
        //export filtered report option
        cy.get('.Reports__body-toolbar-download-spreadsheet').last().click()
        //Search for a category
        cy.get('#q').click().type('cypress').wait(200)
        cy.get('.Reports__body-toolbar-download-spreadsheet').last().click()
    })


    it('Update Insurance Provider Details', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //view manage insurance providers
        cy.get('.header-splitted-col.hidden-xmd-max > .ng-scope').click()
        //update insurance provider details
        cy.get('[class="ManageProviders__edit-link inline-span-fix"]').first().click({force: true})
        cy.get('#item_name').type(' Cypress Updated').click()
        cy.get('.form-actions > .submit-btn').click()
    })


    it('Deactivate Insurance Provider', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //view manage insurance providers
        cy.get('.header-splitted-col.hidden-xmd-max > .ng-scope').click()
        //deactivate insurance provider
        cy.get('[class="ManageProviders__remove-link"]').first().click({force: true})
        cy.get('.remove-btn').click()           
    })


    it('Re-activate Insurance Provider', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //view manage insurance providers
        cy.get('.header-splitted-col.hidden-xmd-max > .ng-scope').click()
        cy.get('[ng-click="vm.toggleActive(item)"]').first().click({force: true})
                
    })


    it('Edit Category for Availability In Registration Page', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //view manage categories in billing management
        cy.get('.header-splitted-col.hidden-xmd-max > [ui-sref="manageBillingCategories"]').click().wait(300)
        cy.get('[class="ManageBillingCategories__edit-link inline-span-fix"]').first().click({force: true}).wait(300)
        cy.get(':nth-child(1) > .ng-isolate-scope > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click()
        cy.get('.EditBillingCategoryModal__form-actions > .submit-btn').click()   
    })


    it('Edit Category for Availability in Check In', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //view manage categories in billing management
        cy.get('.header-splitted-col.hidden-xmd-max > [ui-sref="manageBillingCategories"]').click()
        cy.get('[class="ManageBillingCategories__edit-link inline-span-fix"]').first().click({force: true}).wait(300)
        cy.get(':nth-child(2) > .ng-isolate-scope > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(300)
        cy.get('.EditBillingCategoryModal__form-actions > .submit-btn').click()   
    })


    it('Delete Billable Item', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //delete billable item
        cy.get('#HeaderSearch').type('Cypress')
        cy.get('.glyphicon').first().click()
        cy.get('.remove-btn').click()
    })


    it('Export Billable Items to CSV', function()
    {
        cy.login()
        //view manage billing
        cy.get('[data-cy=NavSidebar__billing] > .NavSidebar__menu-option-label').click()
        //Export Billable Items to CSV
        cy.get('[ng-if="!vm.noItemsFound"]').click()
    })
           
})   
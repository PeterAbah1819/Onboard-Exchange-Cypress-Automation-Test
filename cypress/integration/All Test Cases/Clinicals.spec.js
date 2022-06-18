describe('CLINICAL SUITE', function()
{

    it('Submit Medical Encounter Note', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(3000)

            
       //Submit an entry-Medical Encounter Note
       cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
       cy.contains('Medical Encounter Note').click({force: true})
       //select general practice category
       cy.get('.EntryFormEncounter__form-selector-category').first().click().wait(500)
       //select initial visit note
       cy.get('.EntryFormEncounter__form-selector-form')
       cy.get('.EntryFormEncounter__form-selector-form').first().click().wait(500)
       //confirm selection
       cy.get('.submit-btn').last().click().wait(500)

       //Select any library
       //cy.get('.multiselect__tags').first().click().wait(4000)
       //cy.get('[class="LibraryDataSelectInfinite__item"]').first().click()
      //Fill in and input data
      cy.get('#text_input_6k2g1n5x3ycm3ttdg').click().clear().type('Test')
      cy.get('.AlmightyInput__field').click().clear().type('Test')
      //cy.get('[for="diagnosis:3swoh3b41cb8mn74r_classify_8HQouDgkYbEPUzPoTLei"] > .AlmightyRadio__group > :nth-child(1) > .AlmightyRadio__option-label > span').should('be.visible').should('contain.text','Query').click().wait(500)
      //cy.get('[for="diagnosis:3swoh3b41cb8mn74r_condition_aco5sII3aTtBCEGEDUV0"] > .AlmightyRadio__group > :nth-child(1) > .AlmightyRadio__option-label > span').should('be.visible').should('contain.text','Acute').click().wait(500)

       //submits note
       cy.get('.form-buttons > .submit-btn').last().click()


    })


    it('Mark an ENC Note as Error', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click()
       //Filter for enc notes
       cy.get('[data-cy="PatientFeedFilters__filter encounter_notes"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()
       cy.get('.PatientFeedFilters__filter-see-all-selector').click().wait(500)
       cy.get('.PatientFeedFilters__filter-see-all-selector').click().wait(2000)
       //Click the down facing arrow
       cy.get('.ico-dropdown').last().click()
       //select report error option
       cy.get('[ng-if="::vm.canReportError"]').click()
       //input reason
       cy.get('#reason').click().type('Cypress wants to Marks as error')
       //submit
       cy.get('.ReportErrorModal__modal-actions > .submit-btn').click()



    })


    it('Request Clinical Investigation', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click()

       //Submit a new entry - clinical investigation
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry]').click()
        //click the clinical investigation entry
        cy.get('.NewEntryModal__item__investigation').click().wait(1000)
        //click clinical investigation dropdown
        cy.get('.LabTestsSelectInfinite__search').click({force: true})//.type('malaria')
        //select an item from drop down
        cy.get('.LabTestsSelectInfinite__item')
        cy.get('.LabTestsSelectInfinite__item').first().click()
        //input additional information
        cy.get('.RichTextInput').click().type('Cypress needs this investigation carried out')
        //click submit
        cy.get('.submit-btn').last().click().wait(500)


    })


    it('Request External Clinical Investigation', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click()

       //Submit a new entry - clinical investigation
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry]').click()
        //click the clinical investigation entry
        cy.get('.NewEntryModal__item__investigation').click().wait(1000)
        //click clinical investigation dropdown
        cy.get('.LabTestsSelectInfinite__search').click({force: true}).wait(500).type('full').wait(500)
        //select an item from drop down
        cy.get('.LabTestsSelectInfinite__item').first().click()
        //input additional information
        cy.get('.RichTextInput').click().type('Cypress needs this investigation carried out Externally')
        //check the external checkbox
        cy.get('.ico-tick').last().click()
        //click submit
        cy.get('.submit-btn').last().click()


    })


    it('Discard a Clinical Investigation', function()
    {
        cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(200)

       //Filter for investigations
       cy.get('[data-cy="PatientFeedFilters__filter clinical_investigation"]').click()
       cy.get('.PatientFeedFilters__filter-see-all-selector').click().wait(1000)
 
       //Click the down facing arrow
        cy.get('.ico-dropdown').first().click()
        //select report error option
        cy.get('[ng-if="::vm.canReportError"]').click()
        //input reason
        cy.get('#reason').click().type('Cypress wants to discard this request')
        //submit
        cy.get('.ReportErrorModal__modal-actions > .submit-btn').click()

    })


    it('Submit Prescription', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(500)

       //Submit an entry-Prescription
       cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
       cy.get('.NewEntryModal__item__prescription').click()
       //Click medication dropdown
        //select medication
        cy.get('.LibraryDataSelectInfinite__button').click({force: true})
        cy.get('.LibraryDataSelectInfinite__search').click({force: true}).type('Paracetamol').wait(1000)
        cy.get(':nth-child(3) > .LibraryDataSelectInfinite__item > .ng-binding').wait(200).click()
        //add strengh
        //cy.get('.ng-scope > .field').click().type('10 mg')
        //input dose
        cy.get('.Grid-column-2 > .field').click().type('1 vail')
        //select route dropdown
        cy.get('.Grid-column-5.Grid-xs-max-column-last > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from route dropdown
        cy.get('.ui-select-choices-row-inner').first().click({force: true})
        //select frequency dropdown
        cy.get(':nth-child(3) > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from frequency dropdown
        cy.get('.ui-select-choices-row-inner').last().click()
        //input duration
        cy.get('.Grid-column-3.Grid-xs-max-column-last > .field').click().type('3')
        //select no of refills dropdown
        cy.get('.Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from no of refils dropdown
        cy.get('#ui-select-choices-row-4-2 > .ui-select-choices-row-inner').click()
        //input additional notes
        cy.get('.Grid-column-4 > .field').click().type('Cypress notes')
        //submit
        cy.get('.submit-btn').click()

    })


    it('Cancel a Prescription', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(500)

       //Filter Prescriptions
       cy.get('[data-cy="PatientFeedFilters__filter prescription"]').click()
       cy.get('.PatientFeedFilters__filter-see-all-selector').click().wait(2000)
       //Click the down facing arrow
       cy.get(':nth-child(2) > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__container > feed-entry-header.ng-scope > .FeedEntryHeader__container > .FeedEntryHeader__date-and-link > .FeedEntryHeader__entry-date > div.ng-binding > .ico-dropdown').click().wait(200)
       //select report error option
       cy.get('[ng-if="::vm.canReportError"]').click()
       //input reason
       cy.get('#reason').click().type('Cypress wants to discard this Prescription')
       //submit
       cy.get('.ReportErrorModal__modal-actions > .submit-btn').click()

    })


    it('Create a Medication Group', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(500)

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
        cy.get('.ui-select-choices-row-inner').first().click({force: true})
        //select frequency dropdown
        cy.get(':nth-child(3) > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from frequency dropdown
        cy.get('.ui-select-choices-row-inner').first().click()
        //input duration
        cy.get('.Grid-column-3.Grid-xs-max-column-last > .field').click().type('3')
        //select no of refills dropdown
        cy.get('.Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from no of refils dropdown
        cy.get('#ui-select-choices-row-4-2 > .ui-select-choices-row-inner').click()
        //input additional notes
        cy.get('.Grid-column-4 > .field').click().type('Cypress notes')
        //submit
        //cy.get('.submit-btn').click()


        //Add another medication
        cy.get('[ng-click="vm.addMedication()"]').click().wait(500)
        //select medication dropdown
        cy.get('[ng-repeat="medication in vm.model.medications track by $index"][style=""] > :nth-child(2) > .Grid-column-8 > .ng-isolate-scope > .LibraryDataSelectInfinite__container > .LibraryDataSelectInfinite__select > .LibraryDataSelectInfinite__button').click({force: true})
        //select an item from medicatio dropdown
        cy.get(':nth-child(2) > .LibraryDataSelectInfinite__item > .ng-binding').click()
        //input drug strenght
        //cy.get('[ng-repeat="medication in vm.model.medications track by $index"][style=""] > :nth-child(2) > .Grid-column-4 > .field').click().type('80 mg')
        //input dose
        cy.get('[ng-repeat="medication in vm.model.medications track by $index"][style=""] > :nth-child(3) > .Grid-column-2 > .field').click().type('2 vails', { delay: 200 })
        //select route dropdown
        //cy.get('[ng-repeat="medication in vm.model.medications track by $index"][style=""] > :nth-child(3) > .Grid-column-5.Grid-xs-max-column-last > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from route dropdown
        //cy.get('#ui-select-choices-row-4-4 > .ui-select-choices-row-inner').click()
        //select frequency dropdown
        //cy.get('[ng-repeat="medication in vm.model.medications track by $index"][style=""] > :nth-child(3) > :nth-child(3) > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from frequency dropdown
        //cy.get('#ui-select-choices-row-5-5 > .ui-select-choices-row-inner').click()
        //input duration
       // cy.get('[ng-repeat="medication in vm.model.medications track by $index"][style=""] > :nth-child(4) > .Grid-column-3 > .field').click().type('5')      
        //select no of refills dropdown
        //cy.get('[ng-repeat="medication in vm.model.medications track by $index"][style=""] > :nth-child(4) > .Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        //select an item from no of refils dropdown
        //cy.get('#ui-select-choices-row-6-2 > .ui-select-choices-row-inner').click()
        //input additional notes
        cy.get('[ng-repeat="medication in vm.model.medications track by $index"][style=""] > :nth-child(4) > .Grid-column-4 > .field').click().type('Cypress Second Note')
        //Select Add Medication Group
        cy.get('.section-add-btn.ng-scope').click()
        //Input group name
        cy.get("#group-name").click().type('Cypress Medication Group')
        cy.get('.submit-btn').first().click().wait(500)

    })


    it('Prescribe using Medication Group', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(500)

       //Submit an entry-Prescription
       cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
       cy.get('.NewEntryModal__item__prescription').click()
       //Select Medication Group Radio button
       cy.get(':nth-child(2) > label > .entry-value').click()
       //select medication group
	    cy.get(':nth-child(2) > .Grid-column-8 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
       //Select group
       cy.get('#ui-select-choices-row-5-5 > .ui-select-choices-row-inner > .ng-scope').first().click()
       //click submit
       cy.get('.submit-btn').click()
       

    })
      

    it('Edit a Medication Group', function()
    { 
      cy.login()

      //Open a patient's folder
      cy.get('.TagsList__tags').first().click().wait(500)

      //Submit an entry-Prescription
      cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
      cy.get('.NewEntryModal__item__prescription').click()
      //Select Medication Group Radio button
      cy.get(':nth-child(2) > label > .entry-value').click()
      //select medication group	    
      cy.get(':nth-child(2) > .Grid-column-8 > .field-ui-singleselect > .ui-select-match > .btn-default').click()
      //Click view icon
      cy.get('#ui-select-choices-row-5-5 > .ui-select-choices-row-inner > .ng-scope > .PrescriptionFormFields__group-select__option__eye > .icon-eye').click()
      cy.get('.AddMedicationGroupModal__add-more > .form-label').click()
      cy.get('.LibraryDataSelectInfinite__button').click()
      cy.get(':nth-child(6) > .LibraryDataSelectInfinite__item').click()
      cy.get('.submit-btn').first().click().wait(2000)

      //prescribe updated group
       //select medication group
       cy.get(':nth-child(2) > .Grid-column-8 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
       cy.get('#ui-select-choices-row-5-5 > .ui-select-choices-row-inner > .ng-scope').click()
       //Select group
       //cy.get('.ui-select-choices-row-inner > .ng-scope').first().click()
       //add third drug information
       //cy.get(':nth-child(3) > :nth-child(4) > .Grid-column-7 > .field').click().type('Cypress Added this too')
       //click submit
       cy.get('.submit-btn').click()


      

    })


    it('Delete a Medication Group', function()
    {
       cy.login()

      //Open a patient's folder
      cy.get('.TagsList__tags').first().click().wait(500)

      //Submit an entry-Prescription
      cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
      cy.get('.NewEntryModal__item__prescription').click()
      //Select Medication Group Radio button
      cy.get(':nth-child(2) > label > .entry-value').click()
     //select medication group	    
     cy.get(':nth-child(2) > .Grid-column-8 > .field-ui-singleselect > .ui-select-match > .btn-default').click()
     //Click view icon
     cy.get('#ui-select-choices-row-5-5 > .ui-select-choices-row-inner > .ng-scope > .PrescriptionFormFields__group-select__option__eye > .icon-eye').click()
     //delete
      cy.get('.AddMedicationGroupModal__delete').click()

    })


    it('Submit a Referral Within the Facility', function()
    {
      cy.login()

      //Open a patient's folder
      cy.get('.TagsList__tags').first().click().wait(500)

      //Submit an entry-Referral
      cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
      cy.get('.NewEntryModal__item__referral').click().wait(1000)

      //Select referral facility
      cy.get('.ui-select-search').click().wait(500)
	   cy.get('.ui-select-choices-row-inner').first().click()
      //cy.get('.AlmightyInput__field').click().type('Cypress Clinic')
      //Select Referral Department
      cy.get(':nth-child(2) > .Grid-column-12 > .field').click().wait(500).type('Cypress Test Facility')

      //select referral person
      cy.get(':nth-child(3) > .Grid-column-12 > .field').click().wait(500).type('Cypress Tester')

      //Input supporting information
      cy.get(':nth-child(4) > .Grid-column-12 > .field').click({force: true}).type('Cypress is Testing')

      //Select referral entries
      //cy.get('.PatientEntriesSelect__label > .multiselect > .multiselect__tags').click({force: true})
      //cy.get(':nth-child(1) > .multiselect__option > .PatientEntriesSelect__option').click()

      //Submit entry
      cy.get('.submit-btn').click()

    })



    //it('Submit a Referral Outside the Facility', function()
    //{
   //     cy.login()
 
   //    //Open a patient's folder
   //    cy.get('.TagsList__tags').first().click().wait(500)

   //    //Submit an entry-Referral
   //    cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
   //    cy.get('.NewEntryModal__item__referral').click().wait(500)

   //    //Select Outside
   //    cy.get(':nth-child(2) > .AlmightyRadio__option-label > span').click({force: true})
   //    //Input facility name
   //    cy.get('.AlmightyInput__field').first().click({force: true}).type('Cypress Oversea Clinic', {force: true})
   //    //input referral person
   //    cy.get('.AlmightyInput__field').last().click({force: true}).type('Cypress Tester', {force: true})

   //    //Input supporting information
   //    cy.get('.AlmightyTextarea__field').click({force: true}).type('Cypress is Testing')

   //    //Select referral entries
   //    cy.get('.PatientEntriesSelect__label > .multiselect > .multiselect__tags').click({force: true})
   //    cy.get(':nth-child(1) > .multiselect__option > .PatientEntriesSelect__option').click()

   //    //Submit entry
   //    cy.get('[data-cy=EntryFormFooter__submit]').click()

     //})


    it('Cancel a Referral Request', function()
    {
      cy.login()
 
      //Open a patient's folder
      cy.get('.TagsList__tags').first().click().wait(500)

      //Filter referral
      cy.get('[data-cy="PatientFeedFilters__filter referral"]').click().wait(500)
      //Click the down facing arrow
      cy.get('.ico-dropdown').first().click()
      //select report error option
      cy.get('[ng-if="::vm.canReportError"]').click()
      //input reason
      cy.get('#reason').click().type('Cypress wants to discard this request')
      //submit
      cy.get('.ReportErrorModal__modal-actions > .submit-btn').click()

    })


    it('Print Encounter Notes', function()
    {
       cy.login()

     
       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(3000)

            
       //Select Encounter in the filter
       cy.get('[data-cy="PatientFeedFilters__filter encounter_notes"] > .PatientFeedFilters__filter-icon-container').click()
       cy.get('.PatientFeedFilters__filter-see-all-selector').click()

       //Select the encounter dropdown to see print
       cy.get('.Feed__entry--first > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__container > feed-entry-header.ng-scope > .FeedEntryHeader__container > .FeedEntryHeader__date-and-link > .FeedEntryHeader__entry-date > div.ng-binding > .ico-dropdown').click().wait(500)

       //Print the encounter
       cy.get('[ng-if="!vm.showPdfOptions"] > :nth-child(1)').click()



   })

    it('Submit Medical Encounter Notes + Prescription', function()
    {
      cy.login()

      //Open a patient's folder
      cy.get('.TagsList__tags').first().click().wait(3000)

         
      //Submit an entry-Medical Encounter Note
      cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
      cy.contains('Medical Encounter Note').click({force: true})
      //select general practice category
      cy.get('.EntryFormEncounter__form-selector-category').last().click().wait(1000)

      //select initial visit note
      cy.get('.EntryFormEncounter__form-selector-form').first().click().wait(500)
      //confirm selection
      cy.get('.submit-btn').last().click().wait(500)

      //Add details
      cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click().clear().wait(500)
      cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(5) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
      //Enter frequency
      cy.get(':nth-child(3) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()




      //Add prescription
      cy.get('[class="ico-feed ico-feed__prescription ico-included-forms"]').last().click().wait(500)
      //select medication
      cy.get('.LibraryDataSelectInfinite__button').last().click({force: true})
      cy.get('.LibraryDataSelectInfinite__item > .ng-binding').first().click()
      //add strengh
      cy.get('.ng-scope > .field').click().type('10 mg')
      //input dose
      cy.get('.Grid-column-2 > .field').click().type('1 vail').wait(500)
      //select route dropdown
      cy.get('.Grid-column-5.Grid-xs-max-column-last > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      cy.get('#ui-select-choices-row-2-4 > .ui-select-choices-row-inner').click()
      //select frequency dropdown
      cy.get(':nth-child(3) > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      //select an item from frequency dropdown
      cy.get('#ui-select-choices-row-3-1 > .ui-select-choices-row-inner').click()
      //input duration
      cy.get('.Grid-column-3 > .field').first().click().type('3 days', { delay: 200 })
      //select no of refills dropdown
      cy.get('.Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      //select an item from no of refils dropdown
      cy.get('.ui-select-choices-row-inner').first().click()

      //Additional note
      cy.get('.Grid-column-4 > .field').click().type('Cypress prescribed with Encounter note')
   
      //submits note
      cy.get('.submit-btn').last().click().wait(500)

    })


    it('Submit Medical Encounter Notes + Investigation', function()
    {
       cy.login()

     
       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(3000)

            
       //Submit an entry-Medical Encounter Note
       cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
       cy.contains('Medical Encounter Note').click({force: true})
        //select general practice category
       cy.get('.EntryFormEncounter__form-selector-category').last().click().wait(1000)

      //select initial visit note
      cy.get('.EntryFormEncounter__form-selector-form').first().click().wait(500)
      //confirm selection
      cy.get('.submit-btn').last().click().wait(500)

      //Add details
      cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click().clear().wait(500)
      cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(5) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
      //Enter frequency
      cy.get(':nth-child(3) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()


       //Select any library
       //cy.get('.LibraryDataSelectInfinite__button').first().click()
       //cy.get('[class="LibraryDataSelectInfinite__item"]').first().click()

       //Add investigation
       cy.get('[class="ico-feed ico-feed__investigation ico-included-forms"]').last().click()

        //click clinical investigation dropdown
        cy.get('.LabTestsSelectInfinite__search').click({force: true}).type('malaria').wait(500)
        //select an item from drop down
        cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click({force: true})
        //input additional information
        cy.get(':nth-child(4) > .Grid-column-12 > rich-text-input.ng-isolate-scope > .RichTextInput > .RichTextInput__input-container > .RichTextInput__text-area > .ng-isolate-scope > .ta-scroll-window').click().type('Cypress request investigation')
        

       
      
       //submits note
       cy.get('.submit-btn').click()

    })


    it('Submit Medical Encounter Notes + Referral (Within)', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(3000)

            
       //Submit an entry-Medical Encounter Note
       cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
       cy.contains('Medical Encounter Note').click({force: true})
        //select general practice category
       cy.get('.EntryFormEncounter__form-selector-category').last().click().wait(1000)

      //select initial visit note
      cy.get('.EntryFormEncounter__form-selector-form').first().click().wait(500)
      //confirm selection
      cy.get('.submit-btn').last().click().wait(500)

      //Add details
      cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click().clear().wait(500)
      cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(5) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
      //Enter frequency
      cy.get(':nth-child(3) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()



       //Select any library
       //cy.get('.LibraryDataSelectInfinite__button').first().click()
       //cy.get('[class="LibraryDataSelectInfinite__item"]').first().click()

       //Add Referral
      cy.get('[class="ico-feed ico-feed__referral ico-included-forms"]').last().click().wait(500)

      //Select referral clinic
      cy.get(':nth-child(2) > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
      cy.get(':nth-child(2) > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
      //select referral person
      cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').click()
      cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option').click()

      //Input supporting information
      cy.get('.AlmightyTextarea__field').click({force: true}).type('Cypress is Testing')

      //Select referral entries
      cy.get('.PatientEntriesSelect__label > .multiselect > .multiselect__tags').click({force: true})
      cy.get(':nth-child(1) > .multiselect__option > .PatientEntriesSelect__option').click()
      
       //submits note
       cy.get('.submit-btn').click()

    })


    it('Submit Medical Encounter Notes + Referral (Outside)', function()
    {
       cy.login()

      
       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(3000)

            
        //Submit an entry-Medical Encounter Note
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.contains('Medical Encounter Note').click({force: true})
         //select general practice category
        cy.get('.EntryFormEncounter__form-selector-category').last().click().wait(1000)
 
       //select initial visit note
       cy.get('.EntryFormEncounter__form-selector-form').first().click().wait(500)
       //confirm selection
       cy.get('.submit-btn').last().click().wait(500)
 
       //Add details
       cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click().clear().wait(500)
       cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(5) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
       //Enter frequency
       cy.get(':nth-child(3) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
 
 
       //Select any library
       //cy.get('.LibraryDataSelectInfinite__button').first().click()
       //cy.get('[class="LibraryDataSelectInfinite__item"]').first().click()

       //Add Referral
      cy.get('[class="ico-feed ico-feed__referral ico-included-forms"]').last().click().wait(500)

       //Select Outside
       cy.get(':nth-child(2) > .AlmightyRadio__option-label > span').click({force: true})
       //Input facility name
       cy.get('.AlmightyInput__field').first().click().type('Cypress Oversea Clinic')
       //input referral person
       cy.get('.AlmightyInput__field').last().click().type('Cypress Tester')
 
       //Input supporting information
       cy.get('.AlmightyTextarea__field').click({force: true}).type('Cypress is Testing')
 
       //Select referral entries
       cy.get('.PatientEntriesSelect__label > .multiselect > .multiselect__tags').click({force: true})
       cy.get(':nth-child(1) > .multiselect__option > .PatientEntriesSelect__option').click()
      
       //submits note
       cy.get('.submit-btn').click()
    })


    it('Submit Medical Encounter Notes + Admit', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(3000)

            
        //Submit an entry-Medical Encounter Note
        cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
        cy.contains('Medical Encounter Note').click({force: true})
         //select general practice category
        cy.get('.EntryFormEncounter__form-selector-category').last().click().wait(1000)
 
       //select initial visit note
       cy.get('.EntryFormEncounter__form-selector-form').first().click().wait(500)
       //confirm selection
       cy.get('.submit-btn').last().click().wait(500)
 
       //Add details
       cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click().clear().wait(500)
       cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(5) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
       //Enter frequency
       cy.get(':nth-child(3) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
 
 
       //Select any library
       //cy.get('.LibraryDataSelectInfinite__button').first().click()
       //cy.get('[class="LibraryDataSelectInfinite__item"]').first().click()

       //Add reception details
       cy.get('[class="ico-feed ico-feed__reception ico-included-forms"]').last().click().wait(500)

        //Select the 'room' dropdown
        cy.get('.ui-select-match > .btn-default').click({force: true})
        //select an item from the dropdown
        cy.get('.ui-select-choices-row-inner').first().click()
        //select the 'add working diagnosis' dropdown
        cy.get('.LibraryDataMultiselectInfinite__select').click()
        //select an item from the dropdown
        cy.get(':nth-child(1) > .LibraryDataMultiselectInfinite__item').click()
        //input 'summary of reason for admission'
        cy.get('.field').last().click().type('Cypress tester wants to admit and prescribe')
       
      
       //submits note
       cy.get('.submit-btn').click()

    })


    it('Submit Medical Encounter Notes +  Discharge', function()
    {
       cy.login()

      
       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(3000)

            
       //Submit an entry-Medical Encounter Note
       cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
       cy.contains('Medical Encounter Note').click({force: true})
        //select general practice category
       cy.get('.EntryFormEncounter__form-selector-category').last().click().wait(1000)

      //select initial visit note
      cy.get('.EntryFormEncounter__form-selector-form').first().click().wait(500)
      //confirm selection
      cy.get('.submit-btn').last().click().wait(500)

      //Add details
      cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click().clear().wait(500)
      cy.get(':nth-child(2) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(5) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
      //Enter frequency
      cy.get(':nth-child(3) > :nth-child(1) > .BuilderFieldInput > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()


       //Select any library
       //cy.get('.LibraryDataSelectInfinite__button').first().click()
       //cy.get('[class="LibraryDataSelectInfinite__item"]').first().click()

       //Add reception details
       cy.get('[class="ico-feed ico-feed__reception ico-included-forms"]').last().click().wait(500)

       //input Reason for discharge
       cy.get('.field').last().click().wait(500).type('Cypress deems patient is fit for discharge')
       //Add action plan
       //cy.get('.TextareaWithIncludes__textarea').last().click().type('Cypress tester says: Discharge and continue treatment')

      
       //submits note
       cy.get('.submit-btn').click()

    })


    it('Admit Patient + Prescription', function()
    {
         cy.login()
         //Get Test patient
         cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
         cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)
         //click submit new entry button
         cy.get('[data-cy=NavHeader__submit-new-entry]').click()
         //click the Admit entry
         cy.get('.NewEntryModal__item__reception').click()
         //Select the 'room' dropdown
         cy.get('.ui-select-match > .btn-default').click({force: true})
         //select an item from the dropdown
         cy.get('.ui-select-choices-row-inner').first().click()
         //select the 'add working diagnosis' dropdown
         cy.get('.LibraryDataMultiselectInfinite__select').click({force: true}).wait(500).type('Test')
         //select an item from the dropdown
         cy.get(':nth-child(1) > .LibraryDataMultiselectInfinite__item').click()
         //input 'summary of reason for admission'
         cy.get('.field').click().type('Cypress tester wants to admit and prescribe')
         //input action plan
         cy.get('.TextareaWithIncludes__textarea').click().type('Cypress admits and prescribes')
         

         //Add prescription
         cy.get('[class="ico-feed ico-feed__prescription ico-included-forms"]').last().click()

        //select medication
        cy.get('.LibraryDataSelectInfinite__button').click({force: true})
        cy.get('.LibraryDataSelectInfinite__search').click({force: true}).type('Paracetamol').wait(1000)
        cy.get(':nth-child(6) > .LibraryDataSelectInfinite__item > .ng-binding').wait(1000).click({force: true})
        //add strengh
      cy.get('.ng-scope > .field').click().type('10 mg')
      //input dose
      cy.get('.Grid-column-2 > .field').click().type('1 vail').wait(500)
      //select route dropdown
      cy.get('.Grid-column-5.Grid-xs-max-column-last > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      cy.get('#ui-select-choices-row-3-3 > .ui-select-choices-row-inner').first().click()
      //select frequency dropdown
      cy.get(':nth-child(3) > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      //select an item from frequency dropdown
      cy.get('#ui-select-choices-row-4-1 > .ui-select-choices-row-inner').click()
      //input duration
      cy.get('.Grid-column-3 > .field').first().click().type('3 days', { delay: 200 })
      //select no of refills dropdown
      cy.get('.Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      //select an item from no of refils dropdown
      cy.get('.ui-select-choices-row-inner').first().click()

      //Additional note
      cy.get('.Grid-column-4 > .field').click().type('Cypress prescribed with Encounter note')
   
        //click the submit button
        cy.get('.submit-btn').last().click().wait(2000)


    })


    it('DIscharge Patient + Prescription', function()
    {
       cy.login()

      //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').last().click().wait(4000)
       //click discharge
       cy.get('.PatientInAdmission__link--red').click().wait(2000)
       //input Reason for discharge
       cy.get('.Grid-row.ng-isolate-scope > .Grid-row > .Grid-column-12 > .field').click().wait(1000).type('Cypress deems patient is fit for discharge')
       //Add action plan
       cy.get('.TextareaWithIncludes__textarea').click().type('Discharge and continue treatment')

         //Add prescription
         cy.get('[class="ico-feed ico-feed__prescription ico-included-forms"]').last().click()

        //select medication
        cy.get('.LibraryDataSelectInfinite__button').click({force: true})
        cy.get('.LibraryDataSelectInfinite__search').click({force: true}).type('Paracetamol').wait(1000)
        cy.get(':nth-child(6) > .LibraryDataSelectInfinite__item > .ng-binding').wait(1000).click({force: true})
        //add strengh
      cy.get('.ng-scope > .field').click().type('10 mg')
      //input dose
      cy.get('.Grid-column-2 > .field').click().type('1 vail').wait(500)
      //select route dropdown
      cy.get('.Grid-column-5.Grid-xs-max-column-last > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      cy.get('#ui-select-choices-row-3-3 > .ui-select-choices-row-inner').first().click()
      //select frequency dropdown
      cy.get(':nth-child(3) > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      //select an item from frequency dropdown
      cy.get('#ui-select-choices-row-4-1 > .ui-select-choices-row-inner').click()
      //input duration
      cy.get('.Grid-column-3 > .field').first().click().type('3 days', { delay: 200 })
      //select no of refills dropdown
      cy.get('.Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      //select an item from no of refils dropdown
      cy.get('.ui-select-choices-row-inner').first().click()

      //Additional note
      cy.get('.Grid-column-4 > .field').click().type('Cypress prescribed with Encounter note')
      //click the submit button
      cy.get('.submit-btn').last().click().wait(2000)
  

    })




    it('Admit Patient + Referral (Within)', function()
    {
       cy.login()

       //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').last().click().wait(4000)

       //click submit new entry button
       cy.get('[data-cy=NavHeader__submit-new-entry]').click()
       //click the Admit entry
       cy.get('.NewEntryModal__item__reception').click()
       //Select the 'room' dropdown
       cy.get('.ui-select-match > .btn-default').click({force: true})
       //select an item from the dropdown
       cy.get('.ui-select-choices-row-inner').first().click()
       //select the 'add working diagnosis' dropdown
       cy.get('.LibraryDataMultiselectInfinite__select').click()
       //select an item from the dropdown
       cy.get(':nth-child(1) > .LibraryDataMultiselectInfinite__item').click()
       //input 'summary of reason for admission'
       cy.get('.field').click().type('Cypress tester wants to admit and prescribe')
       //input action plan
       cy.get('.TextareaWithIncludes__textarea').click().type('Cypress admits and Refers to OBS clinic')

       //Add Referral
       cy.get('[class="ico-feed ico-feed__referral ico-included-forms"]').last().click()
       //Select referral clinic
       cy.get('.AlmightyDropdown__label > .multiselect > .multiselect__tags').click().type('CY. OBS Clinic')
       cy.get('.AlmightyDropdown__option').click()
      //select referral person
      cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').click()
      cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option').click()

      //Input supporting information
      cy.get('.AlmightyTextarea__field').click({force: true}).type('Cypress is Testing')

      //Select referral entries
      cy.get('.PatientEntriesSelect__label > .multiselect > .multiselect__tags').click({force: true})
      cy.get(':nth-child(1) > .multiselect__option > .PatientEntriesSelect__option').click()

      //Submit entry
      cy.get('.submit-btn').last().click().wait(2000)
    })




    it('DIscharge Patient + Referral (Within)', function()
    {
       cy.login()

       //Open a patient's folder
       //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').last().click().wait(4000)

       //click discharge
       cy.get('.PatientInAdmission__link--red').click().wait(2000)
       //input Reason for discharge
       cy.get('.Grid-row.ng-isolate-scope > .Grid-row > .Grid-column-12 > .field').click().wait(1000).type('Cypress deems patient is fit for discharge')
       //Add action plan
       cy.get('.TextareaWithIncludes__textarea').click().type('Discharge and Refer to Clinic')

       //Add Referral
       cy.get('[class="ico-feed ico-feed__referral ico-included-forms"]').last().click()
       //Select referral clinic
       cy.get('.AlmightyDropdown__label > .multiselect > .multiselect__tags').click().type('CY. OBS Clinic')
       cy.get('.AlmightyDropdown__option').click()
      //select referral person
      cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').click()
      cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option').click()

      //Input supporting information
      cy.get('.AlmightyTextarea__field').click({force: true}).type('Cypress is Testing')

      //Select referral entries
      cy.get('.PatientEntriesSelect__label > .multiselect > .multiselect__tags').click({force: true})
      cy.get(':nth-child(1) > .multiselect__option > .PatientEntriesSelect__option').click()

      //Submit entry
      cy.get('.submit-btn').last().click().wait(2000)
    })




    it('Admit Patient + Referral (Outside)', function()
    {
       cy.login()

      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').last().click().wait(4000)

       //click submit new entry button
       cy.get('[data-cy=NavHeader__submit-new-entry]').click()
       //click the Admit entry
       cy.get('.NewEntryModal__item__reception').click()
       //Select the 'room' dropdown
       cy.get('.ui-select-match > .btn-default').click({force: true})
       //select an item from the dropdown
       cy.get('.ui-select-choices-row-inner').first().click()
       //select the 'add working diagnosis' dropdown
       cy.get('.LibraryDataMultiselectInfinite__select').click()
       //select an item from the dropdown
       cy.get(':nth-child(1) > .LibraryDataMultiselectInfinite__item').click()
       //input 'summary of reason for admission'
       cy.get('.field').click().type('Cypress tester wants to admit and prescribe')
       //input action plan
       cy.get('.TextareaWithIncludes__textarea').click().type('Cypress admits and Refers')

       //Add Referral
       cy.get('[class="ico-feed ico-feed__referral ico-included-forms"]').last().click()
        //Select Outside
      cy.get(':nth-child(2) > .AlmightyRadio__option-label > span').click({force: true})
      //Input facility name
      cy.get('.AlmightyInput__field').first().click().type('Cypress Oversea Clinic')
      //input referral person
      cy.get('.AlmightyInput__field').last().click().type('Cypress Tester')

      //Input supporting information
      cy.get('.AlmightyTextarea__field').click({force: true}).type('Cypress is Testing')

      //Select referral entries
      cy.get('.PatientEntriesSelect__label > .multiselect > .multiselect__tags').click({force: true})
      cy.get(':nth-child(1) > .multiselect__option > .PatientEntriesSelect__option').click()

      //Submit entry
      cy.get('.submit-btn').last().click().wait(2000)
    })




    it('DIscharge Patient + Referral (Outside)', function()
    {
       cy.login()

       //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').last().click().wait(4000)

       //click discharge
       cy.get('.PatientInAdmission__link--red').click().wait(2000)
       //input Reason for discharge
       cy.get('.Grid-row.ng-isolate-scope > .Grid-row > .Grid-column-12 > .field').click().wait(1000).type('Cypress discharge and refers pt')
       //Add action plan
       cy.get('.TextareaWithIncludes__textarea').click().type('Discharge and continue treatment')

       //Add Referral
       cy.get('[class="ico-feed ico-feed__referral ico-included-forms"]').last().click()
        //Select Outside
      cy.get(':nth-child(2) > .AlmightyRadio__option-label > span').click({force: true})
      //Input facility name
      cy.get('.AlmightyInput__field').first().click().type('Cypress Oversea Clinic')
      //input referral person
      cy.get('.AlmightyInput__field').last().click().type('Cypress Tester')

      //Input supporting information
      cy.get('.AlmightyTextarea__field').click({force: true}).type('Cypress is Testing')

      //Select referral entries
      cy.get('.PatientEntriesSelect__label > .multiselect > .multiselect__tags').click({force: true})
      cy.get(':nth-child(1) > .multiselect__option > .PatientEntriesSelect__option').click()

      //Submit entry
      cy.get('.submit-btn').last().click().wait(2000)

    })




    it('Admit Patient + Investigation', function()
    {
       cy.login()

      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').last().click().wait(7000)

       //click submit new entry button
       cy.get('[data-cy=NavHeader__submit-new-entry]').click()
       //click the Admit entry
       cy.get('.NewEntryModal__item__reception').click()
       //Select the 'room' dropdown
       cy.get('.ui-select-match > .btn-default').click({force: true})
       //select an item from the dropdown
       cy.get('.ui-select-choices-row-inner').first().click()
       //select the 'add working diagnosis' dropdown
       cy.get('.LibraryDataMultiselectInfinite__select').click()
       //select an item from the dropdown
       cy.get(':nth-child(1) > .LibraryDataMultiselectInfinite__item').click()
       //input 'summary of reason for admission'
       cy.get('.field').click().type('Cypress tester wants to admit and prescribe')
       //input action plan
       cy.get('.TextareaWithIncludes__textarea').click().type('Cypress admits and prescribes')
 
       //Add Investigation
       cy.get('[class="ico-feed ico-feed__investigation ico-included-forms"]').last().click()
       //click clinical investigation dropdown
        cy.get('.LabTestsSelectInfinite__search').click({force: true}).type('malaria').wait(500)
        //select an item from drop down
        cy.get('.LabTestsSelectInfinite__item').first().click()
        //input additional information
        cy.get('.RichTextInput').click().type('Cypress Request for investigation while pt is admitted')
        //click submit
        cy.get('.submit-btn').last().click()
    })




    it('DIscharge Patient + Investigation', function()
    {
      cy.login()

       //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').last().click().wait(7000)

       //click discharge
       cy.get('.PatientInAdmission__link--red').click().wait(2000)
       //input Reason for discharge
       cy.get('.Grid-row.ng-isolate-scope > .Grid-row > .Grid-column-12 > .field').click().wait(1000).type('Cypress deems patient is fit for discharge')
       //Add action plan
       cy.get('.TextareaWithIncludes__textarea').click().type('Discharge and continue treatment')

       //Add Investigation
       cy.get('[class="ico-feed ico-feed__investigation ico-included-forms"]').last().click()
       //click clinical investigation dropdown
        cy.get('.LabTestsSelectInfinite__search').click({force: true}).type('full').wait(1000)
        //select an item from drop down
        cy.get(':nth-child(2) > .LabTestsSelectInfinite__item').wait(500).click()
        //input additional information
        cy.get('.RichTextInput').click().type('Cypress needs this investigation carried out Externally after discharge')
        //check the external checkbox
        cy.get('.ico-tick').click()
        //click submit
        cy.get('.submit-btn').last().click()

    })




    it('View Test Results', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.Patients__list > :nth-child(1)').click().wait(3000)
       //Filter test results
       cy.get('[data-cy="PatientFeedFilters__filter results"]').click().wait(200)
       //cy.get('.FeedEntry__link').last().click()
       //cy.get('.FeedEntryCommentBox__textarea-input').click().type('Cypress passed the "View Test Result" case if this comments under a test result')
       //cy.get('.submit-btn').click()
      

    })
    



    it('View Previous Encounter Note', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.Patients__list > :nth-child(1)').click().wait(3000)
       //Filter ENC Notes
       cy.get('[data-cy="PatientFeedFilters__filter encounter_notes"]').click()
       cy.get('[data-cy="PatientFeedFilters__filter-subtype see-all"]').click().wait(200)
       //cy.get('.FeedEntry__link').last().click()
       //cy.get('.FeedEntryCommentBox__textarea-input').click().type('Cypress passed the "View Previous Encounter Note" case if this comments under a previously submitted Enc. note').wait(500)
       //cy.get('.submit-btn').click()

    })




    it('View Previous Investigations', function()
    {
       cy.login()

       //Open a patient's folder
       cy.get('.Patients__list > :nth-child(1)').click().wait(3000)
       //Filter Investigations
       cy.get('[data-cy="PatientFeedFilters__filter clinical_investigation"]').click()
       cy.get('[data-cy="PatientFeedFilters__filter-subtype see-all"]').click().wait(200)
       //cy.get('.FeedEntry__link').last().click()
       //cy.get('.FeedEntryCommentBox__textarea-input').click().type('Cypress passed the "View Previous Investigations" case if this comments under a previously requested invstigation').wait(500)
       //cy.get('.submit-btn').click()

    })



})
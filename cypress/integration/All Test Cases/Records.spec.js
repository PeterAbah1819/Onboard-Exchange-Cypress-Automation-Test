describe('Record', function()
{

    it('Register New Born', function()
    {
        cy.login()
        //Registration module
        cy.get('[ng-href="/patient_registration/sign_up"] > .NavSidebar__menu-option-label').click()
        //Clcik new born
        cy.get('[data-cy=PatientRegistration__newborn-checkbox] > .Checkbox > .ng-scope > .Checkbox__label-container').click()
        //Select place of occurence
        cy.get('[ng-if="vm.patient.createdAsNewborn"][style=""] > .Grid-column-6 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('[class="ui-select-choices-row-inner"]').first().click()
        //Input Mr or Mrs or Miss
        cy.get('[data-cy=registration-title-dropdown] > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-1-2 > .ui-select-choices-row-inner').click()
       //Input names
        cy.get('[data-cy=registration-surname-input]').click({force: true}).type('Tester')
        cy.get('[data-cy=registration-first-name-input]').click({force: true}).type('NewBorn')
        cy.get('[data-cy=registration-middle-name-input]').click({force: true}).type('Cypress')
        
        //Enter date of birth
        cy.get('[data-cy=registration-birthday-select] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-11-0 > .ui-select-choices-row-inner').click({force: true})
        cy.get('[data-cy=registration-birthmonth-select] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-12-0 > .ui-select-choices-row-inner').click({force: true})
        cy.get('[data-cy=registration-birthyear-select] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-13-0 > .ui-select-choices-row-inner').click({force: true})
        //Tell country
        cy.get('[class="selected-flag"]').first().click({force: true}).wait(200)
        cy.get('[data-cy=registration-phonenumber-input] > .TelInput > .intl-tel-input > .flag-container > #country-listbox > #iti-item-ng').click({force: true})
        //Tell number
        cy.get('[data-cy=registration-phonenumber-input] > .TelInput > .intl-tel-input > .TelInput__field').type('08169664373')
        //Email
        //cy.get(':nth-child(1) > :nth-child(5) > :nth-child(2) > .field').type('cypress@tester.ng')
        //Add tag
        //cy.get('.field > :nth-child(1) > .ui-select-search').click()
        //cy.get('#ui-select-choices-row-1-1 > .ui-select-choices-row-inner').click()
        //input folio number
        cy.get('.field > :nth-child(1) > .ui-select-search').click({force: true}).type('Cyp103')
        //cy.get('.Checkbox > .Checkbox__label-container > .ico-tick').click()
        cy.get('.PatientRegistration__submit-button').click().wait(500) 
    })
    

    it('Register Private Patient', function()
    {
        cy.login()
        //Register patient
        cy.get('[ng-href="/patient_registration/sign_up"] > .NavSidebar__menu-option-label').click()
        cy.get('[data-cy=registration-title-dropdown] > .ui-select-match > .btn-default').click()
        cy.get('#ui-select-choices-row-1-3 > .ui-select-choices-row-inner').click()
        //Full name
        cy.get('[data-cy=registration-surname-input]').click({force: true}).type('Tester')
        cy.get('[data-cy=registration-first-name-input]').click({force: true}).type('Cypress')
        cy.get('[data-cy=registration-middle-name-input]').click({force: true}).type('Private')
        cy.get(':nth-child(1) > label > .entry-value').click({force: true})
        //Date of birth
        cy.get('[data-cy=registration-birthday-select] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-11-0 > .ui-select-choices-row-inner').click({force: true})
        cy.get('[data-cy=registration-birthmonth-select] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-12-0 > .ui-select-choices-row-inner').click({force: true})
        cy.get('[data-cy=registration-birthyear-select] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-13-22 > .ui-select-choices-row-inner').click({force: true})
        //Tell country
        cy.get('[class="selected-flag"]').first().click({force: true}).wait(200)
        cy.get('[data-cy=registration-phonenumber-input] > .TelInput > .intl-tel-input > .flag-container > #country-listbox > #iti-item-ng').click({force: true})
        //Tell number
        cy.get('[data-cy=registration-phonenumber-input] > .TelInput > .intl-tel-input > .TelInput__field').type('08169664373')
        //Email
        cy.get(':nth-child(1) > :nth-child(5) > :nth-child(2) > .field').type('cypress@tester.ng')
        //Add tag
        //cy.get('.field > :nth-child(1) > .ui-select-search').click()
        //cy.get('#ui-select-choices-row-1-1 > .ui-select-choices-row-inner').click()
        //input folio number
        cy.get(':nth-child(8) > .Grid-column-12 > .field').type('Cyp101')
        //cy.get('.Checkbox > .Checkbox__label-container > .ico-tick').click()
        cy.get('[data-cy=registration-submit-button]').click().wait(500)
        
    })


    it('Register Insured Patient', function()
    {
        cy.login()
        //Register patient
        cy.get('[ng-href="/patient_registration/sign_up"] > .NavSidebar__menu-option-label').click()
        cy.get('[data-cy=registration-title-dropdown] > .ui-select-match > .btn-default').click()
        cy.get('#ui-select-choices-row-1-3 > .ui-select-choices-row-inner').click()
        //Full name
        cy.get('[data-cy=registration-surname-input]').click({force: true}).type('Tester')
        cy.get('[data-cy=registration-first-name-input]').click({force: true}).type('Cypress')
        cy.get('[data-cy=registration-middle-name-input]').click({force: true}).type('Private')
        cy.get(':nth-child(1) > label > .entry-value').click({force: true})
        //Date of birth
        cy.get('[data-cy=registration-birthday-select] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-11-0 > .ui-select-choices-row-inner').click({force: true})
        cy.get('[data-cy=registration-birthmonth-select] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-12-0 > .ui-select-choices-row-inner').click({force: true})
        cy.get('[data-cy=registration-birthyear-select] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
        cy.get('#ui-select-choices-row-13-22 > .ui-select-choices-row-inner').click({force: true})
        //Tell country
        cy.get('[class="selected-flag"]').first().click({force: true}).wait(200)
        cy.get('[data-cy=registration-phonenumber-input] > .TelInput > .intl-tel-input > .flag-container > #country-listbox > #iti-item-ng').click({force: true})
        //Tell number
        cy.get('[data-cy=registration-phonenumber-input] > .TelInput > .intl-tel-input > .TelInput__field').type('08169664373')
        //Email
        cy.get(':nth-child(1) > :nth-child(5) > :nth-child(2) > .field').type('cypressHMO@tester.ng')
        //Add tag
        //cy.get('.field > :nth-child(1) > .ui-select-search').click()
        //cy.get('#ui-select-choices-row-1-1 > .ui-select-choices-row-inner').click()
        //input folio number
        cy.get(':nth-child(8) > .Grid-column-12 > .field').type('Cyp102')
        //insurance provider
        cy.get('.Grid-column-12 > .ng-isolate-scope > .field-ui-singleselect > .ui-select-match > .btn-default > .ui-select-match-text').click()
        cy.get('[class="ui-select-choices-row-inner"]').last().click({force: true})
        //input employer name
        cy.get(':nth-child(5) > .Grid-column-12 > .field').click().click().type('HeliumHealth QA Team')
        //Input enrolee number
        cy.get(':nth-child(4) > .Grid-column-12 > .field').click().type('cypt1030')

        
        //cy.get('.Checkbox > .Checkbox__label-container > .ico-tick').click()
        cy.get('[data-cy=registration-submit-button]').click().wait(500)
        
    })
           

    it('Search for Patient File', function()
    {
        cy.login()
        //Search for patient file 
        cy.get('div.NavSidebar__menu-option > .NavSidebar__menu-option-label').click()
        cy.get('.SearchModal__field').type('Testing')
        //Open a patient's folder
        cy.get('.SearchModal__patient-info').first().click().wait(3000)
       //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry]').click()
        //click the comment entry
        cy.get(':nth-child(2) > .Grid-sm-max-column-last-no-padding').click()
        //Type into the comment text area
        cy.get('.field').type('Cypress verifies the search module worked')
        //click submit button
        cy.get('.submit-btn').click()
 
    })


    it('Check-In A Patient', function()
    {
        cy.login()
        
        //Get Test patient
         cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
         //cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //Check in A patient - click check in
        cy.get('[class="Patients__checkin ng-binding"]').first().click()
        //select visit type
        cy.get('.BillingItemsDropdown__label > .multiselect > .multiselect__tags').click({force: true})
        //select item from list
        cy.get(':nth-child(2) > .multiselect__option > .BillingItemsDropdown__option').first().click()
        //select who to see
        cy.get('.AlmightyRadio__group > :nth-child(1)').click()
        //select an individual
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').first().click()
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(5) > .multiselect__option').click()
        //select clicnic
        cy.get('[for="clinic"] > .multiselect > .multiselect__tags').click()
        cy.get('[for="clinic"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').first().click()

        //select location
        //cy.get('[class="ui-select-choices-row-inner"]').first().click()
        //Visit reason
        cy.get('[for="appointmentReasons"] > .multiselect > .multiselect__tags').last().click()
        cy.get('[for="appointmentReasons"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
        //Click checkbox
        cy.get('.AlmightyCheckbox__selector').click()
        //click submit
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(1000)
        //forward file
        //cy.get('.ForwardFileModal__forward-button').click()
    })
              

    it('Schedule Appointment', function()
    {

        cy.login()

        
        //click on the appointments module
        cy.get('[ng-href="/appointments"] > .NavSidebar__menu-option-label').click().wait(500)
        //click on the setup new appointment link
        cy.get('.Appointments__subheader > :nth-child(1) > :nth-child(1)').click()
        //Click the select patient dropdown
        cy.get('.AlmightyPatient__label > .multiselect > .multiselect__tags').first().click()
        //select a patient from the dropdown
        cy.get(':nth-child(2) > .multiselect__option > .AlmightyPatient__option').click()
        //click staff/team dropdown
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__tags').last().click()
        //select an entry from dropdown
        cy.get('.AlmightyDoctor__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(5) > .multiselect__option').click()
        //click the date picker
        cy.get('.AlmightyDatetimePicker__field').first().click()
        //select date - today
        cy.get('div > :nth-child(39)').click()
        cy.get('.AlmightyDatetimeModal__confirm').click()
        //click the time picker
        cy.get('.AlmightyTimeDropdown__label > .multiselect > .multiselect__tags').click()
        cy.get(':nth-child(5) > .multiselect__option > .AlmightyTimeDropdown__option').first().click()
        //select duration - 30 min
        cy.get('[for="duration"] > .AlmightyRadio__group > :nth-child(2)').click()
        //click the visit reason dropdown
        cy.get('[for="appointmentReasons"] > .multiselect > .multiselect__tags').click()
        //select an item from the dropdown
        cy.get('[for="appointmentReasons"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
        //click the appointment clinic dropdown
        cy.get('[for="clinic"] > .multiselect > .multiselect__tags').click()
        //select an item from the dropdown
        cy.get('[for="clinic"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()
        //click the confirm button
        cy.get('[data-cy="FullPageModalActions__submit"]').click().wait(1000)

    })
    

    it('Reschedule an Appointment (Manual)', function()
    {
        // cy.login()

        // //click on the appointments module
        // cy.get('[ng-href="/appointments"] > .NavSidebar__menu-option-label').click().wait(500)
        // //Scroll down
        // cy.scrollTo('bottom')
        // //click on an appointment
        // cy.get('[style="z-index: 1; inset: 1488px 0% -1511.97px;"] > .fc-timegrid-event > .timeGridWeek__row--small').first().click()
        // //click the appointment room dropdown
        // cy.get('[placeholder="Select Clinic"]').click()
        // //select an item from the dropdown
        // cy.get('.ui-select-choices-row-inner').last().click()
        // //click the add button
        // cy.get('.submit-btn').click().wait(200)
    })
    

    it('Cancel an Appointment (Manual)', function()
    {
        // cy.login()


        // //click on the appointments module
        // cy.get('[ng-href="/appointments"] > .NavSidebar__menu-option-label').click().wait(300)
        // //click the pencil icon to edit
        // cy.get('[for="clinic"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').first().click()
        // cy.get('[class="UpdateAppointmentModal__cancel-appointment ng-binding"]').click().wait(200)
        
    })
                

    it('Add Patient Tag', function()
    {
        cy.login()
        //Open a patient's folder
        //Get Test patient
        cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
        cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //add patient tag
        cy.get('.wrapper-btn > .icon-pencil').click()
        cy.get('.ui-select-search').click()
        cy.get('.ui-select-choices-row-inner').first().click()
        cy.get('.EditTagsModal__actions > .submit-btn').click()   
    })


    it('Update Patient Tag', function()
    {
        cy.login()
        //Open a patient's folder
        //Get Test patient
        cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
        cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //add patient tag
        cy.get('.wrapper-btn > .icon-pencil').click()
        cy.get('.ui-select-search').click()
        cy.get('.ui-select-choices-row-inner').first().click()
        cy.get('.submit-btn').first().click()
    })


    it('Update Patient Personal Info', function()
    {
        cy.login()
        ///Open a patient's folder
        //Get Test patient
        cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
        cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //click the comprehensive medical report
        cy.get('.PatientDetailsBox__comprehensive-link').click()
        //Click the Personal info edit icon
        cy.get('.ComprehensiveFormsModal__patient-name > .icon-pencil').click({force: true})
        //change folio number
        cy.get('.Grid-column-12 > .field').click({force: true}).clear({force: true}).type('CypUp103', {force: true})
        //click submit
        cy.get('.ComprehensiveFormsModal__name-form-actions > .submit-btn').click({force: true})
        //close the modal
        cy.get('.ComprehensiveFormsModal__close-btn').click()
    })


    it('Update Patient Social Info', function()
    {
        cy.login()
        //Open a patient's folder
        //Get Test patient
        cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
        cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //click the comprehensive medical report
        cy.get('.PatientDetailsBox__comprehensive-link').click()
        //social info tab
        cy.get(':nth-child(2) > .ComprehensiveFormsModal__tab-link').click({force: true})
        //update a detail
        cy.get('[class="ComprehensiveFormRow__add-btn ng-binding ng-scope"]').first().click({force: true})
        cy.get('.ui-select-match > .btn-default').click({force: true})
        cy.get('.ui-select-choices-row-inner').first().click({force: true})
        //submit
        cy.get('.submit-btn').first().click({force: true})
        //close the modal
        cy.get('.ComprehensiveFormsModal__close-btn').click()
    
    })
        
    
    it('Update Patient Contact Info', function()
    {
        cy.login()
        //open patient folder
        //Get Test patient
        cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
        cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //click the comprehensive medical report
        cy.get('.PatientDetailsBox__comprehensive-link').click().wait(1000)
        //contact info tab
        cy.get(':nth-child(3) > .ComprehensiveFormsModal__tab-link').click({force: true}).wait(1000)
        //update a detail
        cy.get('[class="icon-pencil"]').first().click({force: true})
        //update info
        cy.get('[class="ComprehensiveFormRow__input-container"]').click({force: true}).type('cy').clear().type('cypress@tester.ng')
        //submit
        cy.get('.submit-btn').first().click({force: true})
        //close the modal
        cy.get('.ComprehensiveFormsModal__close-btn').click()

    })


    it('Add GenoType to Patient Comprehensive Profile', function()
    {
        cy.login()
        //open patient folder
        //Get Test patient
        cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
        cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //click the comprehensive medical report
        cy.get('.PatientDetailsBox__comprehensive-link').click().wait(1000)

        //Click on genotype to Edit Genotype
        cy.get(':nth-child(4) > .ng-isolate-scope > .Grid-row > .Grid-column-6 > [ng-if="!vm.formActive()"] > .entry-value').click().wait(500)
        cy.get('.ui-select-match-text').click()
        cy.get('#ui-select-choices-row-1-1 > .ui-select-choices-row-inner').click({force: true})
        cy.get('.ComprehensiveFormRow__actions > .submit-btn').click().wait(300)


        //close the modal
        cy.get('.ComprehensiveFormsModal__close-btn').click()

    })


    it('Deactivate Patient File', function()
    {
        cy.login()

        //open patient folder
        //Get Test patient
        cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
        cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //click the comprehensive medical report
        cy.get('.PatientDetailsBox__comprehensive-link').click().wait(1000)
        //Scroll down
        cy.get('[ng-if="!vm.patient.archivedAt && vm.doctor.patientDeactivation"] > .ClinicalForm__row > .Grid-row > .Grid-column-4 > .entry-label').scrollIntoView()
        //click deactivate
        cy.get('[ng-if="!vm.patient.archivedAt && vm.doctor.patientDeactivation"] > .ClinicalForm__row > .Grid-row > .Grid-column-8 > .ClinicalForm__deceased-link').click({force: true})
        //confirm action
        cy.get('[class="submit-btn ng-binding"]').click().wait(200) 
    
    })


    it('Reactivate Patient File', function()
    {
        cy.login()

        //goto deactivated tab
        cy.contains('Deactivate').click().wait(200)
        //click reactivate
        cy.get('[class="Patients__unrachive ng-binding ng-scope"]').first().click().wait(200)
    })
    
    
    it('Search Recently Seen Page', function()
    {
        cy.login()
        //open patient file
        //Get Test patient
        cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
        cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry]').click()
        //click the comment entry
        cy.get(':nth-child(2) > .Grid-sm-max-column-last-no-padding').click()
        //Type into the comment text area
        cy.get('.field').type('Cypress verifies the searching patient folder on recently seen worked')
        //click submit button
        cy.get('.form-buttons > .submit-btn').click()
    
    })

    
    it('Apply Filters on Recently seen Page', function()
    {
        cy.login()
        //apply filter
        cy.get(':nth-child(3) > .ng-isolate-scope > .ContentFilter__wrapper > .ContentFilter__opener > .icon-ic_filter').click()
        cy.get('[value="male"] > .Checkbox > .ng-scope > .Checkbox__label-container > .Checkbox__label').click()
        cy.get('.submit-btn').click().wait(200)

    })


    it('apply filter on antenatal care page', function()
    {
        cy.login().wait(1000)
        //view antenatal care tab
        cy.get('.Patients__header > :nth-child(1) > .header-nav-tabs > .ng-scope').last().click().wait(200)
        //add filter(s) on antenatal care page
        cy.get(':nth-child(2) > .ng-isolate-scope > .ContentFilter__wrapper > .ContentFilter__opener > .icon-ic_filter').click().wait(200) 
        cy.get('.slider-track-high').click().wait(200)
        cy.get('.submit-btn').click().wait(200)
        cy.get(':nth-child(6) > .ng-isolate-scope > .ContentFilter__wrapper > .ContentFilter__opener > .icon-ic_filter').click().wait(200)
        cy.get('[value="private"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click().wait(200)
        cy.get('.submit-btn').click().wait(200)
    })

    it('Apply Filter by Doctor and Clinic', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click().wait(500)

        //Apply filter by Doctor/Team
        cy.get(':nth-child(2) > .ContentFilter__wrapper > .ContentFilter__opener > .ContentFilter__opener__label').click().wait(500)
        cy.get(':nth-child(1) > .Checkbox__label-container > .ico-tick').click()
        cy.get(':nth-child(2) > .Checkbox__label-container > .ico-tick').click()
        //Apply the filter
        cy.get('.submit-btn').click().wait(1000)

        //Apply filter by Clinic
        cy.get(':nth-child(3) > .ContentFilter__wrapper > .ContentFilter__opener').click().wait(500)
        cy.get(':nth-child(7) > .Checkbox__label-container > .ico-tick').click()
        cy.get(':nth-child(8) > .Checkbox__label-container > .ico-tick').click()
        cy.get(':nth-child(5) > .Checkbox__label-container > .ico-tick').click()
        cy.get('.submit-btn').click().wait(500)


        
    })




    it('export periodic appointment report', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        //export periodic appointment report
        cy.get('.ScrollableTabs__link--active').click().wait(200)
        cy.get('.CsvExport__link').click()
        
    })


    it('export periodic inpatients report', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        //export periodic inpatients report
        cy.get('.ScrollableTabs__links > :nth-child(2)').click()
        cy.get('.CsvExport__link').click()

    })


    it('export periodic inqueue report', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //export periodic inqueue report
        cy.get('.ScrollableTabs__links > :nth-child(3)').click()
        cy.get('.CsvExport__link').click().wait(200)
    })  

            
    it('export periodic mortality report', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //export periodic mortality report
        cy.get('.ScrollableTabs__links > :nth-child(4)').click()
        cy.get('.CsvExport__link').click().wait(200)
    })  

         it('Export Periodic Pharmacy Inventory Log', function()
         {
             cy.login()
             //view report module
             cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
             //Export Periodic Pharmacy Inventory Log
             cy.get('.ScrollableTabs__links > :nth-child(5)').click()
             cy.get('.ReportsCommon__header > :nth-child(2) > :nth-child(1) > a').click().wait(200)
         }) 


        //  it('Export Periodic Pharmacy Stock in Log', function()
        //  {
        //      cy.login()
        //      //view report module
        //      cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //      //Export Periodic Pharmacy Stock in Log
        //      cy.get('.ScrollableTabs__links > :nth-child(5)').click()
        //      cy.get('.ReportsCommon__header > :nth-child(2) > :nth-child(1) > a').click().wait(200)
        //      cy.get('.submit-btn').click().wait(200)
        //  }) 


        //  it('Export Periodic Pharmacy Stock out Log', function()
        //  {
        //      cy.login()
        //      //view report module
        //      cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //      //Export Periodic Pharmacy Stock out Log
        //      cy.get('.ScrollableTabs__links > :nth-child(5)').click()
        //      cy.get(':nth-child(2) > :nth-child(3) > a').click().wait(200)
        //  }) 
              
        //  it('Export Periodic Pharmacy report', function()
        //  {
        //      cy.login()
        //      //view report module
        //      cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //      //Export Periodic Pharmacy report
        //      cy.get('.ScrollableTabs__links > :nth-child(5)').click()
        //      cy.get('.CsvExport__link').click().wait(200)
        //  }) 


         it('Export Periodic Diagnosis Reports', function()
         {
             cy.login()
             //view report module
             cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
             //Export Periodic Diagnosis Reports
             cy.get('.ScrollableTabs__links > :nth-child(6)').click().wait(200)
             cy.get('.ReportsCommon__header > :nth-child(2) > :nth-child(1) > a').click().wait(200)

         })


    it('Export Periodic Immunizations Reports', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //Export Periodic Immunizations Reports
        cy.get('.ScrollableTabs__links > :nth-child(7)').click().wait(200)
    })


    it('Export Periodic Registrations Reports ', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //Export Periodic Registrations Reports
        cy.get('.ScrollableTabs__links > :nth-child(8)').click().wait(200)
    })


    it('Export Periodic Lab orders Reports', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //Export Periodic Lab orders Reports
        cy.get('.ScrollableTabs__links > :nth-child(9)').click().wait(200)
    })


    it('Export Periodic Referrals Reports', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //Export Periodic Referrals Reports
        cy.get('.ScrollableTabs__links > :nth-child(10)').click().wait(200)
    })


    it('Export Periodic ANC Reports', function()
    {
        cy.login()
        //view report module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click() 
        //Export Periodic ANC Reports
        cy.get('.ScrollableTabs__links > :nth-child(11)').click().wait(200)
    })


})        
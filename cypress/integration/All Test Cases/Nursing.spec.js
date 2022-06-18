describe('Nursing Suite', function()
{

   it('Submit Vitals', function()
   {
      cy.login()
 
      //Open a patient's folder
      cy.get('.TagsList__tags').first().click()

      //Submit An Entry-Vitals
      cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
      cy.get('.NewEntryModal__item__vitals').click()

      cy.get(':nth-child(4) > :nth-child(1) > .EntryFormVitals__input-container > .field').click({force: true}).type('65')
      cy.get(':nth-child(4) > :nth-child(2) > .EntryFormVitals__input-container > .field').click().type('105')
      cy.get('.EntryFormVitals__input-container > .ng-isolate-scope > .field').click().type('120/95')
      cy.get(':nth-child(4) > :nth-child(4) > .EntryFormVitals__input-container > .field').click().type('36.5')

      cy.get(':nth-child(5) > :nth-child(1) > .EntryFormVitals__input-container > .field').click().type('63')
      //cy.get(':nth-child(5) > :nth-child(2) > .EntryFormVitals__input-container > .field').click().type('27')
      cy.get(':nth-child(5) > :nth-child(3) > .EntryFormVitals__input-container > .field').click().type('35')
      //cy.get(':nth-child(5) > :nth-child(4) > .EntryFormVitals__input-container > .field').click().type('25')

     // cy.get(':nth-child(6) > [ng-class="vm.displayLeastOneFieldError()"][style=""] > .EntryFormVitals__input-container > .field').click().type('5')
      cy.get(':nth-child(6) > :nth-child(2) > .EntryFormVitals__input-container > .field').click().type('14')
      //cy.get(':nth-child(6) > :nth-child(3) > .EntryFormVitals__input-container > .field').click().type('17')
      //cy.get(':nth-child(6) > :nth-child(4) > .EntryFormVitals__input-container > .field').click().type('36.5')

      //cy.get(':nth-child(7) > [ng-class="vm.displayLeastOneFieldError()"][style=""] > .EntryFormVitals__input-container > .field').click().type('9')
      cy.get(':nth-child(7) > :nth-child(2) > .EntryFormVitals__input-container > .field').click().type('3')
      //cy.get(':nth-child(7) > :nth-child(3) > .EntryFormVitals__input-container > .field').click().type('0.3')

      cy.get('[placeholder="Include any additional information"]').first().click().type('Cypress adds Notes +Vitals')
      cy.get('.submit-btn').last().click().wait(1000)
 
     
   })


   it('Submit a Comment', function()
   {
      cy.login()

      //Open a patient's folder
      cy.get('.TagsList__tags').first().click()

      //submit a new entry - comment
      //click submit new entry button
      cy.get('[data-cy=NavHeader__submit-new-entry]').click()
      //click the comment entry
      cy.get(':nth-child(2) > .Grid-sm-max-column-last-no-padding').click()
      //Type into the comment text area
      cy.get('.field').type('Cypress submits comment')
      //click submit button
      cy.get('.submit-btn').last().click({force: true})

   })


   it('Forward Patient File - Individual', function()
   {
      cy.login()

      cy.get('.Patients__list > :nth-child(1)').first().click()

      //clicks forward
      cy.get('.icon-ico-top-forward').click()
      cy.get('.ForwardFileModal__body > .field').click()
      cy.get('[class="ForwardFileModal__checkbox"]').last().click()
      cy.get('.ForwardFileModal__add-comment-link').click()
      cy.get('.ForwardFileModal__field-and-label > .field').click().type('Cypress Forwards to Individual')
      cy.get('.ForwardFileModal__forward-button').click()
   })


   it('Forward Patient File - Team', function()
   {
      cy.login()

      cy.get('.Patients__list > :nth-child(1)').first().click()

      //clicks forward
      cy.get('.icon-ico-top-forward').click()
      cy.get('.ForwardFileModal__body > .field').click()
      cy.get('[class="ForwardFileModal__checkbox"]').first().click()
      cy.get('.ForwardFileModal__add-comment-link').click()
      cy.get('.ForwardFileModal__field-and-label > .field').click().type('Cypress Forwards to Team')
      cy.get('.ForwardFileModal__forward-button').click()
 
   })


   it('Forward + Add to Queue - Individual', function()
   {
      cy.login()

      cy.get('.Patients__list > :nth-child(1)').first().click()

      //clicks forward
      cy.get('.icon-ico-top-forward').click()
      cy.get('.ForwardFileModal__body > .field').click()
      cy.get('[class="ForwardFileModal__checkbox"]').last().click()
      cy.get('.ForwardFileModal__add-comment-link').click()
      cy.get('.ForwardFileModal__field-and-label > .field').click().type('Cypress Forward + Individual queue')
      cy.get('.form-link').click()
   })


   it('Forward + Add to Queue - Team', function()
   {
      cy.login()

      cy.get('.Patients__list > :nth-child(1)').first().click()

      //clicks forward
      cy.get('.icon-ico-top-forward').click()
      cy.get('.ForwardFileModal__body > .field').click()
      cy.get('[class="ForwardFileModal__checkbox"]').first().click()
      cy.get('.ForwardFileModal__add-comment-link').click()
      cy.get('.ForwardFileModal__field-and-label > .field').click().type('Cypress Forwards + Team Queue')
      cy.get('.form-link').click()
   })


   it('Enroll for ANC', function()
   {
      cy.login()
      //filter female patients
      cy.get(':nth-child(3) > .ng-isolate-scope > .ContentFilter__wrapper > .ContentFilter__opener > .icon-ic_filter').click()
      cy.get('[value="female"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click()
      cy.get('.submit-btn').click().wait(2000)

      //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)


      //Submit An Entry-
      cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
      cy.get('[data-cy=NewEntryModal__item-antenatal]').click()

      //Select indication for booking
      cy.get('[ng-class="vm.displayError(vm.antenatalForm.indication)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      cy.get('.ui-select-choices-row-inner').first().click()

      //Select name of docctor
      cy.get('.PersonSelectWithSearchInfinite__button').click()
      cy.get('[data-cy=PersonSelectWithSearchInfinite__item]').first().click()

      //Select LMP date
      cy.get('datetimepicker.ng-isolate-scope > .field').click()
      cy.contains('Today').click()

      //LMP info
      cy.get('[ng-class="vm.displayError(vm.antenatalForm.lmpInfoSource)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click()
      cy.get('.ui-select-choices-row-inner').last().click()

      //Fathers name
      cy.get('[ng-class="vm.displayError(vm.antenatalForm.fatherName)"] > .field').click().type('Cypress Tester')

      //Select father blood
      cy.get('[ng-class="vm.displayError(vm.antenatalForm.fatherBloodGroup)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click()
      cy.get('.ui-select-choices-row-inner').first().click()

      //Fill telephone number of father
      cy.get('.TelInput__field').click().type('08169664373')
	  
	  //check father is unknown
	  cy.get('.ico-tick').click()

      //Fill term births
      cy.get('[ng-class="vm.displayError(vm.antenatalForm.termBirths)"] > .field').click().type('1')

      //Fill abortions
      cy.get('[ng-class="vm.displayError(vm.antenatalForm.abortions)"] > .field').click().type('2')

      //fillpreterm births
      cy.get('[ng-class="vm.displayError(vm.antenatalForm.pretermBirths)"] > .field').click().type('1')

      //fill living children
      cy.get('[ng-class="vm.displayError(vm.antenatalForm.livingChildren)"] > .field').click().type('2')

      //click the submit button
      cy.get('.form-buttons > .submit-btn').click()

      //confirm booking
      cy.get('.swal2-confirm').click().wait(500)

   })


   it('Add Prenatal', function()
   {
      cy.login()
      //filter female patients
      cy.get(':nth-child(3) > .ng-isolate-scope > .ContentFilter__wrapper > .ContentFilter__opener > .icon-ic_filter').click()
      cy.get('[value="female"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click()
      cy.get('.submit-btn').click().wait(2000)

      //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

      //click Add Prenatal
      cy.get('.PatientPrenatals__add-new').click()

      //Select Relationship to Brim
      cy.get(':nth-child(1) > :nth-child(1) > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
      cy.get(':nth-child(1) > :nth-child(1) > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(3) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()

      //select Fetal Movement
      cy.get(':nth-child(2) > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
      cy.get(':nth-child(2) > .AlmightyDropdown__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()

      //Input Fundal Height (cm)
      cy.get('[name="fundalHeight"]').click().type('26')

      //Input Fetal Weight (g)
      cy.get('[name="fetalWeight"]').click().type('12')

      //select Fetal Position
      cy.get('[class="multiselect__select"]').last().click()
      cy.get('[class="AlmightyDropdown__option"]').last().click()

      //nput Fetal Heart Rate (bpm) *
      cy.get('[name="fetalHeartRate"]').click().type('20')

      //input Additional Information
      cy.get('[name="additionalInfo"]').click().type('Cypress can add Additional Info')

      //submit entry
      cy.get('.AddPrenatalForm__footer > .submit-btn').click()


   })


   it('Add ANC Notes', function()
   {
      cy.login()
      //filter female patients
      cy.get(':nth-child(3) > .ng-isolate-scope > .ContentFilter__wrapper > .ContentFilter__opener > .icon-ic_filter').click()
      cy.get('[value="female"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click()
      cy.get('.submit-btn').click().wait(2000)

      //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

      //click Notes
      cy.get('.PatientAntenatal > .Tabs > .Tabs__navigation > .Tabs__navigation-list > :nth-child(2)').click()

      //Click + Add new note
      cy.get('.PatientAntenatalNotes__add-new').click()

      //Input note
      cy.get('.AlmightyTextarea__field').click().type('Cypress ANC notes')

      //submit note
      cy.get('.AddAntenatalNoteForm__footer > .submit-btn').click()

   })


   it('Close ANC Enrolment', function()
   {
      cy.login()
      //filter female patients
      cy.get(':nth-child(3) > .ng-isolate-scope > .ContentFilter__wrapper > .ContentFilter__opener > .icon-ic_filter').click()
      cy.get('[value="female"] > .Checkbox > .ng-scope > .Checkbox__label-container > .ico-tick').click()
      cy.get('.submit-btn').click().wait(2000)

      //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

      //click Close Antenatal
      cy.get('.PatientAntenatal__action--remove').click()

      //Select reason
      cy.get('.multiselect__tags').click()
      cy.get('.AlmightyDropdown__option').first().click()

      //Add comments
      cy.get('.AlmightyTextarea__field').click().type('Cypress takes delivery').wait(1000)

      //Close
      cy.get('.remove-btn').click().wait(500)
   })


   it('Add a One-Off Task', function()
   {
      cy.login()

      //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

      //Click on Task
      cy.get('.white > .Tabs__navigation-list > :nth-child(2)').click()

      //Click add Task
      cy.get('.AddTaskButton').click()

      //Input task name
      cy.get('.AlmightyInput__field').click().type('Cypress One-off task')

      //Select task time
      cy.get('.AlmightyDatetimePicker__field').click()
      cy.get('div > :nth-child(40)').click()
      cy.get('#time-picker').click()
      cy.get('.hours > [data-key="18"]').click({force: true})
      cy.get('.minutes > [data-key="00"]').click({force: true})
      cy.get('.AlmightyDatetimeModal__confirm').click({force: true})

      //Click submit
      cy.get('.ClinicalTasksForm__footer > .submit-btn').click()
   })


   it('Complete a One-Off Task', function()
   {
      cy.login()

      //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

      //Click on Task
      cy.get('.white > .Tabs__navigation-list > :nth-child(2)').click()

      //Click Expand button
      cy.get('.ListItemIncompletedHeader__toggle-button').first().click()

      //add a comment
      cy.get('.AlmightyTextarea__field').click().type('Cypress completed')

      //Submit
      cy.get('.ListItemIncompletedForm__actions > div > .submit-btn').click().wait(500)

   })


   it('Add a Recurrent Task', function()
   {
      cy.login()

      //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)


      //Click on Task
      cy.get('.white > .Tabs__navigation-list > :nth-child(2)').click()

      //Click add Task
      cy.get('.AddTaskButton').click()

      //Input task name
      cy.get('.AlmightyInput__field').click().type('Cypress Recurring task')

      //Select task time
      cy.get('.AlmightyDatetimePicker__field').click()
      cy.get('div > :nth-child(40)').click()
      cy.get('#time-picker').click()
      cy.get('.hours > [data-key="18"]').click({force: true})
      cy.get('.minutes > [data-key="00"]').click({force: true})
      cy.get('.AlmightyDatetimeModal__confirm').click({force: true})

      //check recurring
      cy.get('.AlmightyCheckbox__selector').click()

      //input every
      cy.get('[name="every"]').click().type('30')

      //select interval
      cy.get('.multiselect__placeholder').click()
      cy.get(':nth-child(1) > .multiselect__option > :nth-child(1) > .AlmightyDropdown__option').click()

      //input reccurence
      cy.get('[name="recur"]').click().type('2')

      //Click submit
      cy.get('.ClinicalTasksForm__footer > .submit-btn').click().wait(500)
   })


   it('Complete a Recurrent Task', function()
   {
      cy.login()

      //Open a patient's folder
      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)
     
      //Click on Task
      cy.get('.white > .Tabs__navigation-list > :nth-child(2)').click()

      //Click Expand button
      cy.contains('Cypress Recurring task').first().click()

      //submit a vital
      cy.get('.text-btn').last().click()

      //fill and submit temperature
      cy.get(':nth-child(4) > :nth-child(4) > .EntryFormVitals__input-container > .field').click().type('32.6')
      cy.get('.form-buttons > .submit-btn').click()
      //cy.get('[placeholder="Include any additional information"]').first().click().type('Cypress did this')
      cy.get('.form-buttons > .submit-btn')
      
      //add a comment
      cy.get('.AlmightyTextarea__field').click().type('Cypress completed')

      //Submit
      cy.get('.ListItemIncompletedForm__actions > div > .submit-btn').click().wait(500)

   })


   it('Admit a patient', function()
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
      cy.get('.ui-select-choices-row-inner').first().click({force: true})
      //select the 'add working diagnosis' dropdown
      cy.get('.LibraryDataMultiselectInfinite__select').click().wait(200)
      //select an item from the dropdown
      cy.get('.LibraryDataMultiselectInfinite__item').first().click()
      //input 'summary of reason for admission'
      cy.get('.field').click().type('Cypress tester wants to admit')
      //input action plan
      cy.get('.TextareaWithIncludes__textarea').click().type('Cypress admits')
      //click the submit button
      cy.get('.submit-btn').last().click().wait(200)

   })


   it('Add Prescription from Active Medications Tab', function()
   {
      cy.login()

      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(3000)
      
      //Add medication
      cy.get('.AdmissionActiveMedications__add-new-container > .form-link').click()
      //select medication
      cy.get('.LibraryDataSelectInfinite__button').click({force: true})
      cy.get('.LibraryDataSelectInfinite__search').click({force: true}).type('Paracetamol').wait(2000)
      cy.get(':nth-child(3) > .LibraryDataSelectInfinite__item > .ng-binding').wait(200).click({force: true})
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
      cy.get('.ui-select-choices-row-inner').last().click()
      //input duration
      cy.get('.Grid-column-3.Grid-xs-max-column-last > .field').click().type('3')
      //select no of refills dropdown
      cy.get('.Grid-column-2 > .field-ui-singleselect > .ui-select-match > .btn-default').click({force: true})
      //select an item from no of refils dropdown
      cy.get('#ui-select-choices-row-4-1 > .ui-select-choices-row-inner').click()
      //input additional notes
      cy.get('.Grid-column-4 > .field').click().type('Cypress notes')

      //Enter Pharmacy
      cy.get('.Grid-column-8 > .field-ui-singleselect > .ui-select-match > .btn-default').click()
      cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').click().wait(500)

      //submit
      cy.get('.form-buttons > .submit-btn').click().wait(500)

   })


   it('Administer drugs', function()
   {
      cy.login()


      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)
      //Open drug course chat
      cy.contains('Drug Course Chart').click()
      //Select drug to administer
      cy.get('.AdmissionDrugCourseChart__chart-cell--active').first().click()
      //add comment
      cy.get('.Grid-column-12 > .field').click().type('Cypress administered')
      //submit
      cy.get('.AdministerDrugModal__actions > div > .submit-btn').click()

   })


   it('Record Interventions', function()
   {
      cy.login()

      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)
      //Open Interventions tab
      cy.contains('Interventions').click()
      //Click add new
      cy.get('.form-link').first().click()
      //Type intervention
      cy.get('.Grid-column-12 > .field').click().type('Cypress Intervened')
      //submit
      cy.get('.AddInterventionModal__actions > div > .submit-btn').click()
   })


   it('Record Fluid Chart', function()
   {
      cy.login()

      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)
      //Open Fluid Chart tab
      cy.contains('Fluid Chart').click()
      //Add fluid
      cy.get('.form-link').click()
      //add volume
      cy.get('.AddFluidModal__element > :nth-child(2) > :nth-child(1) > .field').click().type('500')
      //select route
      cy.get('.ui-select-match > .btn-default').click()
      cy.get('.ui-select-choices-row-inner').first().click()
      //add fluid type
      cy.get('.AddFluidModal__element > :nth-child(2) > :nth-child(3) > .field').click().type('Dextrose water')
      //Add more fluid
      cy.get('.AddFluidModal__actions > .form-link').click()
      //Select output
      cy.get('[style=""] > :nth-child(1) > .ng-isolate-scope > :nth-child(2) > label > .entry-value').click()
      //input second volume
      cy.get('[style=""] > :nth-child(2) > :nth-child(1) > .field').click().type('200')
      //Select route
      cy.get('[ng-repeat="fluid in vm.fluids"][style=""] > :nth-child(2) > :nth-child(2) > .field-ui-singleselect > .ui-select-match > .btn-default').click()
      cy.get('[class="ui-select-choices-row-inner"]').first().click()
      //add fluid type
      cy.get('[ng-repeat="fluid in vm.fluids"][style=""] > :nth-child(2) > :nth-child(3) > .field').click().type('Urine')
      //submit
      cy.get('.AddFluidModal__actions > div > .submit-btn').click()
   })
   

   it('Edit Diagnosis', function()
   {
      cy.login()

      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)
      //Edit diagn
      cy.get('.PatientInAdmission__link').click()
      cy.get('.LibraryDataMultiselectInfinite__search').click()
      cy.get('.LibraryDataMultiselectInfinite__item').first().wait(200).click()
      cy.get('.EditDiagnosisModal__actions > div > .submit-btn').click()
      
   })


   it('Complete an Active Medication', function()
   {
      cy.login()

      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(2000)
      //Add medication
      cy.get(':nth-child(5) > .Grid-column-12 > .ng-isolate-scope > .entry-label > .icon-pencil').click().wait(500)
      cy.get('.LibraryDataMultiselectInfinite__select').click().wait(1000)
      cy.get(':nth-child(2) > .LibraryDataMultiselectInfinite__item').click().wait(1000)
      cy.get('.LibraryDataMultiselectInfinite__search').click()
      cy.get(':nth-child(3) > .LibraryDataMultiselectInfinite__item').click().wait(1000)
      cy.get(':nth-child(1) > .LibraryDataMultiselectInfinite__selected-item > .LibraryDataMultiselectInfinite__selected-item-close').click().wait(500)
      //Select date
      cy.get('.ng-scope > #ca7c917e-867c-4087-b003-e0bbe4089e2factiveMedications').click().type('2022-03-30')
      cy.get('.pull-right > .btn').click().wait(500)
      //Submit the medication
      cy.get('.ComprehensiveFormRow__actions > .submit-btn').click().wait(2000)
      //Go back to patient file
      cy.get('.ComprehensiveFormsModal__close-btn').click().wait(500)
      //Complete active medication
      cy.get('ng-transclude > .icon-ok-circled-1').last().click({force: true}).wait(2000)
      cy.get('.remove-btn').click()
   })


   it('Discharge Patient', function()
   {
      cy.login()

      //Get Test patient
      cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
      cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)
      //click discharge
      cy.get('.PatientInAdmission__link--red').click().wait(2000)
      //input Reason for discharge
      cy.get('.Grid-row.ng-isolate-scope > .Grid-row > .Grid-column-12 > .field').click().wait(1000).type('Cypress deems patient is fit for discharge')
      //Add action plan
      cy.get('.TextareaWithIncludes__textarea').click().type('Discharge and continue treatment')
      //submit
      cy.get('.form-buttons > .submit-btn').click()
   
   })


   it('Administer Immunization-New Immunization entry', function()
   {
      cy.login()

      //Filter by age
      cy.get(':nth-child(4) > .ng-isolate-scope > .ContentFilter__wrapper > .ContentFilter__opener > .ContentFilter__opener__label > ng-transclude').click()
      //Select Filter for age 2-18
      cy.get('[ng-model="vm.filterData.value[0]"]').click().clear().type('2')
      cy.get('[ng-model="vm.filterData.value[1]"]').click().clear().type('18')
      cy.get('.submit-btn').click().wait(2000)

      
      cy.get('.Patients__list > :nth-child(1)').click().wait(2000)
      //Submit new entry
      cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
      //Select Immunization entry
      cy.get('.NewEntryModal__item__immunization > .ico-new').click()
      //Select 2-18 years
      cy.get('.ui-select-match > .btn-default').click()
      cy.get('.ui-select-search').click().type('Hep').wait(100)
      //Select Hepatities B vacine
      cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').wait(200).click()
   //Fill recieved on date
   cy.get('.Grid-column-5 > .js-date-field > .field').click().type('08-03-2022')
   cy.get('li.ng-scope').should('be.visible')
   cy.get('li.ng-scope').should('contain.text','Today').click()
   //Fill expiry date
   cy.get('.Grid-column-4 > .js-date-field > .field').click().type('28-03-2022')
   cy.get('li.ng-scope').should('be.visible')
   cy.get('li.ng-scope').should('contain.text','Today').click()

   //fill batch
   cy.get('.Grid-column-3 > .field').click().type('cy001')
   
   //Input additional comment
   cy.get('.ta-scroll-window').click().type('Cypress administered')
   //CLick submit
   cy.get('.submit-btn').click()

   })


   it('Administer Immunization-Old Immunization entry', function()
   {
      cy.login()

      //Filter by age
      cy.get(':nth-child(4) > .ng-isolate-scope > .ContentFilter__wrapper > .ContentFilter__opener > .ContentFilter__opener__label > ng-transclude').click()
      //Select Filter for age 4-5
      cy.get('[ng-model="vm.filterData.value[0]"]').click().clear().type('4')
      cy.get('[ng-model="vm.filterData.value[1]"]').click().clear().type('5')
      cy.get('.submit-btn').click().wait(2000)

      cy.get('.Patients__list > :nth-child(1)').click().wait(2000)
      //Submit new entry
      cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
           //Select Immunization entry
           cy.get('.NewEntryModal__item__immunization > .ico-new').click()
           //Select 2-18 years
           cy.get('.ui-select-match > .btn-default').click()
           cy.get('.ui-select-search').click().type('Hep').wait(100)
           //Select Hepatities B vacine
           cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').wait(200).click()
        //Fill recieved on date
        cy.get('.Grid-column-5 > .js-date-field > .field').click().type('08-03-2022')
        cy.get('li.ng-scope').should('be.visible')
        cy.get('li.ng-scope').should('contain.text','Today').click()
        //Fill expiry date
        cy.get('.Grid-column-4 > .js-date-field > .field').click().type('28-03-2022')
        cy.get('li.ng-scope').should('be.visible')
        cy.get('li.ng-scope').should('contain.text','Today').click()
     
        //fill batch
        cy.get('.Grid-column-3 > .field').click().type('cy001')
        
        //Input additional comment
        cy.get('.ta-scroll-window').click().type('Cypress administered')
        //CLick submit
        cy.get('.submit-btn').click()
   })


   it('View vitals', function()
   {
      cy.login()

      cy.get('.Patients__list > :nth-child(1)').click().wait(2000)
      //select vitals filter
      cy.get('[data-cy="PatientFeedFilters__filter vitals"]').click().wait(1000)
      //
      cy.get('.filter-height > label > .FeedVitalsSummary__filter-label').click().wait(1000)
      //
      cy.get('.filter-bloodPressure > label > .FeedVitalsSummary__filter-label').click().wait(1000)
      //
      cy.get('.filter-bodyTemperature > label > .FeedVitalsSummary__filter-label').click().wait(1000)
      //
      cy.get('.filter-pulseRate > label > .FeedVitalsSummary__filter-label').click().wait(1000)
      //
      cy.get('.filter-glasgowComaScale > label > .FeedVitalsSummary__filter-label').click().wait(1000)
      //View vitals as Table
      cy.get('[ng-click="vm.toggleType()"]').click().wait(1000)
      //
      cy.get('[ng-click="vm.toggleType()"]').click()
      //
      cy.get('.filter-weight > label > .FeedVitalsSummary__filter-label').click().wait(1000)
   
   })

})
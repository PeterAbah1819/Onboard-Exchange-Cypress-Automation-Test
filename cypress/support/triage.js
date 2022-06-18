

Cypress.Commands.add('Investigations', () => {
    

        cy.patientTriage('Auto_Test',{delay:1500})
        cy.contains('Clinical Investigations').click()
        // Cypress.waitFor(500)
        // cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI',{delay:200})
        // cy.get('.LabTestsSelectInfinite__item').first().click({force:true})
        // cy.wait(500)
        cy.get('.LabTestsSelectInfinite__container').type('Abdominal MRI')
        cy.get('.LabTestsSelectInfinite__item').first().click({force:true})
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()
        
        // cy.contains('Clinical Investigations')
        // cy.contains('17-OH Progesterone')
        // cy.get('.FeedEntryHeader__status-label').contains('Awaiting Specimen')
        // cy.contains('Take Specimen').click()
        
    

})

Cypress.Commands.add('Prescription', ()=>{
 

        cy.patientTriage()
        cy.contains('Prescriptions').click()
        cy.contains('Select Medication').click('')
        cy.get(':nth-child(1) > .LibraryDataSelectInfinite__item > .ng-binding').first().click({delay:1500})
        // cy.get('[name="prescription_strength"]').type('500')
        // cy.get('blood-pressure-input').type('120/80')
        cy.get('[name="prescription_dose"]').type('3')
        cy.get('[name="prescription_route_0"]').click()
        cy.get('li').first().click()
        cy.get('[name="prescription_frequency_0"]').click()
        cy.contains('Daily').first().click({force:true})
        cy.get('.Grid-column-3 > .field').type('3')
        
        cy.get('.form-buttons').contains('Submit').click()
  
})

Cypress.Commands.add('MedicalNotes', ()=>{
    cy.patientTriage()
    cy.contains('Medical Encounter Note').click({force:true})
    cy.get('.EntryFormEncounter__form-selector-category').click().wait(2500)
    cy.contains('Proceed to Note').should('have.attr','disabled','disabled')
    cy.contains('Initial Visit').should('be.visible')
    cy.get('.entry-value').contains('Initial Visit').first().click()
    cy.contains('Proceed to Note').click()
    cy.contains('You are submitting an Encounter Note').should('be.visible')
    cy.contains('Discard').should('be.visible')
    cy.contains('Save as Draft').should('be.visible')
    cy.get('.form-buttons').contains('Submit').should('be.visible')
    cy.get(':nth-child(2) > form-component.ng-scope > .FormComponent > .row > .Grid-column-12 > .ng-scope > .LibraryDataMultiselectInfinite__container > .LibraryDataMultiselectInfinite__select > .LibraryDataMultiselectInfinite__search').click()
    cy.get(':nth-child(3) > .LibraryDataMultiselectInfinite__item').first().click()
    cy.get(':nth-child(36) > form-component.ng-scope > .FormComponent > .row > .Grid-column-12 > .ng-scope > .LibraryDataMultiselectInfinite__container > .LibraryDataMultiselectInfinite__select > .LibraryDataMultiselectInfinite__search').scrollIntoView()
    cy.get(':nth-child(36) > form-component.ng-scope > .FormComponent > .row > .Grid-column-12 > .ng-scope > .LibraryDataMultiselectInfinite__container > .LibraryDataMultiselectInfinite__select > .LibraryDataMultiselectInfinite__search').click()
    cy.get(':nth-child(3) > .LibraryDataMultiselectInfinite__item').first().click()
    cy.get('.form-buttons').contains('Submit').first().click({timeout:1500})
    cy.reload()
})

Cypress.Commands.add('Vitals', ()=>{
    cy.patientTriage()
    cy.contains('Vitals').click()
    cy.get('[name="weight"]').type('90')
    cy.get('[name="height"]').type('180')
    cy.get('blood-pressure-input').type('120/80')
    cy.get('[name="bodyTemperature"]').type('37.0')
    cy.get('[name="heartRate"]').type('70')
    cy.get('.form-buttons').contains('Submit').click()
})

Cypress.Commands.add('Immunization', ()=>{
    cy.patientTriage()
    cy.contains('Immunization').click()
    cy.get('[name="vaccineImmunization_0"]').click()
    cy.get('.ui-select-choices-row').first().click()
    cy.get('[name="vaccineDose_0"]').type('0.5ml')
    cy.get('datetimepicker>[name="vaccineReceivedOn_0"]').first().click()
    cy.contains('Today').click()
    cy.get('datetimepicker>[name="vaccineExpiryDate_0"]').first().click()
    cy.contains('Today').click()
    cy.get('[name="vaccineBatchNo_0"]').type('BA-012')
    cy.get('.form-buttons').contains('Submit').click()
    cy.reload()
})

Cypress.Commands.add('Admission', ()=>{
    cy.patientTriage()
    
    cy.contains('Admit').click()
    cy.get('[placeholder="Select Room"]').first().click()
    cy.get('.ui-select-choices-row-inner').first().click()
    cy.get('.LibraryDataMultiselectInfinite__search').click()
    cy.get('.LibraryDataMultiselectInfinite__item').first().click()
    cy.get('[name="summary"]').type('poisoned')
    cy.get('.TextareaWithIncludes__buttons-container').contains('Prescription').click()
    cy.contains('Select Medication').click('').get('.LibraryDataSelectInfinite__item').first().click()
    // cy
    // cy.get('[name="prescription_strength"]').type('500')
    // cy.get('blood-pressure-input').type('120/80')
    cy.get('[name="prescription_dose"]').type('3')
    cy.get('[name="prescription_route_0"]').click().contains('PO (by mouth)').click()
    // cy
    cy.get('[name="prescription_frequency_0"]').click()
    cy.contains('Daily').click({force: true})
    cy.get('.Grid-column-3 > .field').type('3')
    cy.get('.form-buttons').contains('Submit').click()
    cy.contains('Discharge Patient').click()
    cy.get('[placeholder="Describe Reason"]').type('Gbe body e')
    cy.get('.form-buttons').contains('Submit').click()
    
})

Cypress.Commands.add('Comment', ()=>{
    cy.patientTriage()
    cy.contains('Comment').click()
    cy.get('[name="comment"]').type('This patient suffers from amnesia')
    cy.get('.form-buttons').contains('Submit').click()
})

Cypress.Commands.add('Discharge', ()=>{
    cy.reload()
    cy.patientTriage()
    cy.contains('Discharge').click({force:true})
     cy.contains('Discharge Patient').click()
        cy.get('[placeholder="Describe Reason"]').type('Gbe body e')
        cy.get('.form-buttons').contains('Submit').click()
})

Cypress.Commands.add('Search', ()=>{
    cy.contains('Search').click()
    cy.get('[placeholder="Type patient\'s name"]').type('Auto')
    cy.get(':nth-child(1) > .SearchModal__patient-info > .SearchModal__patient-name').first().click()
    
})

Cypress.Commands.add('task', ()=>{
        cy.selectPatient()
        cy.get('.AddTaskButton').click()
        cy.get('.AlmightyInput__field').type('Feed')
        cy.get('.ClinicalTasksForm__footer > .submit-btn').click()
        cy.contains('Expand').click()
        cy.get('.AlmightyTextarea__field').type('done')
        cy.get('.ListItemIncompletedForm__actions > div > .submit-btn').click()
    
})

Cypress.Commands.add('Pharmacy', ()=>{
    cy.get('[ng-href="/prescription-orders"] > .NavSidebar__menu-option-label').click()
        
        
    //Expand Prescription order
    cy.get('.subheader-splitted > :nth-child(1) > .header-nav-tabs > .active').click({force:true})
     

     
    // Filter by unbilled prescribed items
    // cy.get('.filter-unbilled > label > .RadioContentFilter__item__label').click()
    // //Filter by unbisbursed prescribed items
    // cy.get('.filter-undisbursed > label > .RadioContentFilter__item__label').click() 
    // //Filter by completed prescibed items
    // cy.get('.filter-completed > label > .RadioContentFilter__item__label').click()
    // //Filter by discarded prescribed items
    // cy.get('.filter-discarded > label > .RadioContentFilter__item__label').click()
    
    
    
  //choose pharmacy
//   cy.get('.ui-select-match-text').click()
//   cy.get('#ui-select-choices-row-0-0 > .ui-select-choices-row-inner').click()
 //Manage inventory
//  cy.get('.subheader-splitted > :nth-child(1) > .header-nav-tabs > [ui-sref="pharmacyInventory"]').click()


    //Select a prescription
    cy.contains('Expand').first().click()
    //Dropdown for drugs
    cy.get('.caret').click()
    //select a drug #first
    cy.get('.ui-select-choices-row-inner').first().click()
    //add quantity
    cy.get('.Grid-column-5 > .field').type('5')
    //Bill
    cy.get('.PrescriptionOrder__submit-btn').click()

    //Select a prescription
    cy.reload()
    cy.contains('Expand').first().click()
    //Disburse prescription
    cy.get('.PrescriptionOrder__submit-btn').click()

 //load more items in inventory
//  cy.contains('Load More')
//  cy.get('.LoadMoreButton__label').click()  

})


Cypress.Commands.add('FilterDrugs',()=>{
    cy.selectPatient()
        cy.get('[data-cy="PatientFeedFilters__filter prescription"]').click()
} )

Cypress.Commands.add('FilterReciepts',()=>{
    cy.selectPatient()
    cy.get('[data-cy="PatientFeedFilters__filter receipt"]').click()
} )


Cypress.Commands.add('FilterLab',()=>{
    cy.selectPatient()
    cy.get('[data-cy="PatientFeedFilters__filter clinical_investigation"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()
} )

Cypress.Commands.add('ForwardFolder',()=>{
    cy.selectPatient()
    cy.get('.icon-ico-top-forward').click()

    cy.get(':nth-child(1) > .ForwardFileModal__name-and-avatar > .ForwardFileModal__checkbox').click()

    cy.get('.ForwardFileModal__forward-button').click()
} )

Cypress.Commands.add('EndorseEntry',()=>{
    cy.selectPatient()
    cy.get('.Feed__entry--first > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__container > feed-entry-header.ng-scope > .FeedEntryHeader__container > .FeedEntryHeader__date-and-link > .FeedEntryHeader__entry-date > div.ng-binding > .ico-dropdown')
    .click()

    cy.get('[ng-click="vm.endorse()"]').click()

    cy.get('.EndorseModal__submit').click()
} )

Cypress.Commands.add('FilterVitals',()=>{
    cy.selectPatient()
   //it filters patient records by Vitals (Graphical view)
   cy.get('[data-cy="PatientFeedFilters__filter vitals"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()

   //to view by weight
   cy.get('.filter-weight > label > .FeedVitalsSummary__filter-label').click()

   //to view by Blood Pressure
   cy.get('.filter-bloodPressure > label > .FeedVitalsSummary__filter-label').click()

   //to view by Body temperature
   cy.get('.filter-bodyTemperature > label > .FeedVitalsSummary__filter-label').click()

    //to view by Heart rate
    cy.get('.filter-pulseRate > label > .FeedVitalsSummary__filter-label').click()

   //click to view vitals as chart
   cy.get('[ng-click="vm.toggleType()"]').click()

   //clicks on hide vitals button
   cy.get('[ng-click="vm.toggle()"]').click()
} )

Cypress.Commands.add('PrintEntry',()=>{
    cy.selectPatient()

    cy.get('.Feed__entry--first > .FeedEntry__main-container > .FeedEntry__box > .FeedEntry__container > feed-entry-header.ng-scope > .FeedEntryHeader__container > .FeedEntryHeader__date-and-link > .FeedEntryHeader__entry-date > div.ng-binding > .ico-dropdown')        .click()

    cy.get('.FeedEntryHeader__dropdown-actions > :nth-child(1)').click()

} )

Cypress.Commands.add('FilterResults',()=>{
    cy.selectPatient()
    cy.get('[data-cy="PatientFeedFilters__filter results"]').click()
} )

Cypress.Commands.add('FilterImmun',()=>{
    cy.selectPatient()
    cy.get('[data-cy="PatientFeedFilters__filter upload"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()
} )

Cypress.Commands.add('Filteruploads',()=>{
    cy.selectPatient()
    cy.get('[data-cy="PatientFeedFilters__filter upload"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()
} )

Cypress.Commands.add('FilterAdmissions',()=>{
    cy.selectPatient()
    cy.get('[data-cy="PatientFeedFilters__filter upload"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()
} )

Cypress.Commands.add('FilterRefs',()=>{
    cy.selectPatient()
    cy.get('[data-cy="PatientFeedFilters__filter referral"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()
} )

Cypress.Commands.add('ANC',()=>{
    cy.selectPatient()
    cy.get('[data-cy="PatientFeedFilters__filter referral"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()


    cy.patientTriage()
        cy.contains('ANC').click()
        cy.get('[ng-class="vm.displayError(vm.$scope.antenatalForm.indication)"] > .field-ui-singleselect > .ui-select-match > .btn-default').type('ro')
        cy.get('#ui-select-choices-row-0-0 > .ui-select-choices-row-inner').first().click()
        cy.get('.PersonSelectWithSearchInfinite__button').click()
        cy.get('[data-cy=PersonSelectWithSearchInfinite__item]').first().click()
        cy.get('datetimepicker.ng-isolate-scope > .field').click()
        cy.contains('Today').click()
        cy.get('[ng-class="vm.displayError(vm.$scope.antenatalForm.lmpInfoSource)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click()
        cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').first().click()
        cy.get('[ng-class="vm.displayError(vm.$scope.antenatalForm.fatherName)"] > .field').type('Edmund Igene')
        cy.get('[ng-class="vm.displayError(vm.$scope.antenatalForm.fatherBloodGroup)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click()
        cy.get('#ui-select-choices-row-2-0 > .ui-select-choices-row-inner').click()
        cy.get('.TelInput__field').type('08098155669')
        cy.get('[ng-class="vm.displayError(vm.$scope.antenatalForm.termBirths)"] > .field').type('1')
        cy.get('[ng-class="vm.displayError(vm.$scope.antenatalForm.pretermBirths)"] > .field').type('0')
        cy.get('[ng-class="vm.displayError(vm.$scope.antenatalForm.abortions)"] > .field').type('0')
        cy.get('[ng-class="vm.displayError(vm.$scope.antenatalForm.livingChildren)"] > .field').type('1')
        cy.get('.form-buttons > .submit-btn').click()
        cy.get('.swal2-confirm').click()
        cy.selectPatient()
        cy.get('.PatientPrenatals__add-new').click()
        //Relationship to Brim *
        cy.get(':nth-child(1) > :nth-child(1) > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
        cy.get('.multiselect__content-wrapper>.multiselect__content>.multiselect__element').first().click()
        //Fetal Movement *
        cy.get(':nth-child(2) > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
        cy.get('.multiselect__content-wrapper>.multiselect__content>.multiselect__element').contains('++').click({force:true})  
        //Fundal Height (cm) *
        cy.get(':nth-child(2) > :nth-child(1) > .AlmightyInput__label > .AlmightyInput__field').type('20')
        //fundal weight
        cy.get(':nth-child(2) > :nth-child(2) > .AlmightyInput__label > .AlmightyInput__field').type('100')
        //Fetal Position *
        cy.get(':nth-child(3) > :nth-child(1) > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
        cy.get('.multiselect__content-wrapper>.multiselect__content>.multiselect__element').contains('Vertex').click({force:true})
        //Fetal Heart Rate
        cy.get(':nth-child(3) > :nth-child(2) > .AlmightyInput__label > .AlmightyInput__field').type('60')
        cy.get('.submit-btn').click()


} )

Cypress.Commands.add('CloseANC',()=>{
    cy.selectPatient()
    Cypress.contains('Close antennatal')

})
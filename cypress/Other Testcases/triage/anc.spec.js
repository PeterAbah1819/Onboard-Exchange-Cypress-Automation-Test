describe('Antenatal', () => {
    it('',()=>{
        cy.login()
        cy.patientTriage()
        cy.contains('ANC').click()
        cy.get('[ng-class="vm.displayError(vm.antenatalForm.indication)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click()
        // cy.get('[ng-class="vm.displayError(vm.antenatalForm.indication)"] > .field-ui-singleselect > .ui-select-match > .btn-default').type('ro')
        cy.get('.ui-select-choices-row-inner').first().click()
        cy.get('.PersonSelectWithSearchInfinite__button').click() 
        cy.get('[data-cy=PersonSelectWithSearchInfinite__item]').first().click()
        cy.get('datetimepicker.ng-isolate-scope > .field').click()
        cy.contains('Today').click()
        //lmp
        cy.get('[ng-class="vm.displayError(vm.antenatalForm.lmpInfoSource)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click()
        cy.get('#ui-select-choices-row-2-0 > .ui-select-choices-row-inner').first().click()
        //father's naqme
        cy.get('[ng-class="vm.displayError(vm.antenatalForm.fatherName)"] > .field').type('Edmund Igene')
        //Blood group
        cy.get('[ng-class="vm.displayError(vm.antenatalForm.fatherBloodGroup)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click()
        cy.get('#ui-select-choices-row-3-0 > .ui-select-choices-row-inner').click()
        //father's Number
        cy.get('.TelInput__field').type('0809815566')
        //terms birth
        cy.get('[ng-class="vm.displayError(vm.antenatalForm.termBirths)"] > .field').type('1')
        //preterm
        cy.get('[ng-class="vm.displayError(vm.antenatalForm.pretermBirths)"] > .field').type('0')
        //abortions
        cy.get('[ng-class="vm.displayError(vm.antenatalForm.abortions)"] > .field').type('0')
        //living children
        cy.get('[ng-class="vm.displayError(vm.antenatalForm.livingChildren)"] > .field').type('0')
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
        cy.get('.AddPrenatalForm__footer > .submit-btn').first().click()
    })
})

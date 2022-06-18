describe('Appointments',()=>{
    it('Reschedule an appointment',() =>{
  
    cy.login()
    cy.selectPatient()
    // cy.findByText('+ Setup New Appointment')
    cy.contains('Reschedule').click()
  
    // cy.get('.PersonSelectWithSearchInfinite__select field-ui-singleselect>.PersonSelectWithSearchInfinite__button>[placeholder="Select Patient"]')
    // cy.get('.PersonSelectWithSearchInfinite__caret').first().click()
    // cy.get('[data-cy="person-select-search-value"]').first().click()
  
    cy.get('.PersonSelectWithSearchInfinite__caret').last().click()
    cy.get('[data-cy="person-select-search-value"]').first().click()
  
    cy.get('[datetime-picker="dd-MM-yyyy"]').first().click()
    cy.contains('Today').click()
  
    cy.get('[ng-class="vm.displayError(vm.form.time)"] > .field-ui-singleselect > .ui-select-match > .btn-default').click()
  
    cy.get('#ui-select-choices-row-0-0 > .ui-select-choices-row-inner').click()
    // cy.contains('Now').click()
  
    cy.clock().tick(5000)
    cy.get('.SetupAppointmentModal__duration-options > :nth-child(1) > .form-radio-label').click()
    // .click()
    // cy.contains('Now').click()
      
    cy.contains('Select Clinic').click()
    cy.contains('GOPD').click()
    
    // cy.contains('Select Visit Reason').first().click()
    // cy.contains('Follow up').click()
  
    cy.contains('Add').click()
  })
})
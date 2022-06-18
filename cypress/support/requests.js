Cypress.Commands.add('PackageRequest', function()
{
    cy.contains('Requests').click()
    cy.contains('Add New Request').click()
    cy.get('.multiselect__tags').click()
    cy.get('li').first().click({force:true})
    cy.get('.AlmightyRadio__group > :nth-child(1)').click()
    cy.get('.AlmightyDropdown__label > .multiselect > .multiselect__select').click()
    cy.get('.multiselect__option > div').click()
    cy.get('.submit-btn').click()
   
})

Cypress.Commands.add('SickLeaveRequestMore3', function()
{
    cy.contains('Requests').click()
    cy.contains('Add New Request').click()
    cy.get('.multiselect__tags').click()
    cy.get('li').first().click({force:true})
    cy.get(':nth-child(2) > .AlmightyRadio__option-label').click()
    cy.get('.AlmightyDatetimePicker__field').click()
    cy.get('div > :nth-child(33)').click()
    cy.get('.AlmightyDatetimeModal__confirm').click()
    cy.get('.AlmightyDropdown__label > .multiselect > .multiselect__select').click()
    cy.get(':nth-child(6) > .multiselect__option > div').click()
    cy.get('.AlmightyTextarea__field').click().type('This patient needs sick leave for several days')
    cy.get('.submit-btn').click()

    //cy.wait('@requests').its('status').should('be', 201);
    //cy.url().should('include', 'patients');

})

Cypress.Commands.add('SickLeaveRequestLess3', function()
{
    cy.contains('Requests').click()
    cy.contains('Add New Request').click()
    cy.get('.multiselect__tags').click()
    cy.get('li').first().click({force:true})
    cy.get(':nth-child(2) > .AlmightyRadio__option-label').click()
    cy.get('.AlmightyDatetimePicker__field').click()
    cy.get('div > :nth-child(33)').click()
    cy.get('.AlmightyDatetimeModal__confirm').click()
    cy.get('.AlmightyDropdown__label > .multiselect > .multiselect__select').click()
    cy.get(':nth-child(2) > .multiselect__option > div').click()
    cy.get('.AlmightyTextarea__field').click().type('This patient needs sick leave for 3days')
    cy.get('.submit-btn').click()

})

Cypress.Commands.add('AprroveSickLeave', function()
{
    cy.get('[ng-href="/requests"] > .NavSidebar__menu-option-label').first().click()
    cy.get('.RequestEntityHeader__expander').first().click()
    cy.get('.AlmightyTextarea__field').click().clear().type('This request will be approved soon')
    cy.get('.submit-btn').click()

})

Cypress.Commands.add('RejectLeave', function()
{
    cy.contains('Requests').click()
    cy.contains('Add New Request').click()
    cy.get('.multiselect__tags').click()
    cy.get('li').first().click()
    cy.get('.AlmightyRadio__group > :nth-child(1)').click()
    cy.get('.AlmightyDropdown__label > .multiselect > .multiselect__select').click()
    cy.get('.multiselect__option > div').click()
    cy.get('.submit-btn').click()
    cy.get('[ng-href="/requests"] > .NavSidebar__menu-option-label').click()
    cy.get('.RequestEntityHeader__expander').first().click()
    cy.get('.AlmightyTextarea__field').click().clear().type('This request will be rejected NOW!!!')
    cy.get('.remove-btn').click({force:true})

})

Cypress.Commands.add('CancelLeave', function()
{
    cy.get('[ng-href="/requests"] > .NavSidebar__menu-option-label').click()
    cy.get('.RequestEntityHeader__expander').first().click()
    cy.get('.AlmightyTextarea__field').click().clear().type('This request will be rejected NOW!!!')
    cy.get('.remove-btn').click()

})

Cypress.Commands.add('ViewApprovedRequest', function()
{
    cy.contains('Requests').click()
    cy.get('.filter-completed > [data-cy=RadioContentFilter__checkbox] > .RadioContentFilter__item__label').click()
})

Cypress.Commands.add('ViewDiscardedRequest', function()
{
    cy.contains('Requests').click()
    cy.get('.filter-discarded > [data-cy=RadioContentFilter__checkbox] > .RadioContentFilter__item__label').click()

})


Cypress.Commands.add('ViewPatientFromRequest', function()
{
    cy.get('[ng-href="/requests"] > .NavSidebar__menu-option-label').click()
    cy.contains('Add New Request').click()
    cy.get('.multiselect__tags').click()
    cy.get('.multiselect__element > .multiselect__option').first().click()
    cy.get('.CreateRequestForm__link-to-profile').click()
    

})

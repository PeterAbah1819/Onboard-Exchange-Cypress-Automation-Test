// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//


Cypress.Commands.add('login', () => {
  cy.fixture('users').then(({ email, password }) => {
    cy.server();
    cy.route('POST', '**/api/doctor/sign-in').as('login');
    cy.visit('/login');
    cy.get('[name="emailOrPhone"]').clear().type('marybassey@hospital.com', { delay: 100 })
    cy.get('[name="password"]').type('password', { delay: 100 })
    cy.get('.Login__submit-btn').click().wait(5000)

 
  });
});

Cypress.Commands.add('registerPatient', ({ sex = 'male' } = {}) => {
  cy.visit('/patient_registration/sign_up');

  cy.fixture('patient-registration-data').then(
    ({ firstName, lastName, phoneNumber }) => {
      cy.server();
      cy.route('POST', '**/api/patients?ignore_matching=false').as('registration');

      cy.get('[data-cy=registration-first-name-input]').type(firstName);

      cy.get('[data-cy=registration-surname-input]').type(
        `${lastName}_${new Date().getTime()}`
      );

      cy.get('[data-cy=registration-sex-radio]')
        .find(`[value=${sex}]`)
        .next()
        .click();

      cy.get('[data-cy=registration-birthday-select]')
        .find('.caret')
        .click();
      cy.get('[data-cy=registration-birthday-select]')
        .find('.ui-select-choices-row-inner')
        .first()
        .click();

      cy.get('[data-cy=registration-birthmonth-select]')
        .find('.caret')
        .click();
      cy.get('[data-cy=registration-birthmonth-select]')
        .find('.ui-select-choices-row-inner')
        .first()
        .click();

      cy.get('[data-cy=registration-birthyear-select]')
        .find('.caret')
        .click();
      cy.get('[data-cy=registration-birthyear-select]')
        .find('.ui-select-choices-row-inner')
        .first()
        .click();

      cy.get('[data-cy=registration-phonenumber-input]')
        .find('.TelInput__field')
        .type(phoneNumber);

      cy.get('[data-cy=registration-submit-button]').click();

      cy.wait('@registration').its('status').should('be', 201);
      cy.url().should('include', 'patients');
    }
  );
});

Cypress.Commands.add('createAppointment', () => {
  
  cy.server()
  cy.visit('/appointments')
  // cy.findByText('+ Setup New Appointment')
  cy.get('.Appointments__subheader>.header-splitted-col>.header-link')
  .first()
  .click()

  // cy.get('.PersonSelectWithSearchInfinite__select field-ui-singleselect>.PersonSelectWithSearchInfinite__button>[placeholder="Select Patient"]')
  cy.get('.PersonSelectWithSearchInfinite__caret').first().click()
  cy.get('[data-cy="person-select-search-value"]').first().click()

  cy.get('.PersonSelectWithSearchInfinite__caret').last().click()
  cy.get('[data-cy="person-select-search-value"]').first().click()

  cy.get('[datetime-picker="dd-MM-yyyy"]').first().click()
  cy.contains('Today').click()

  cy.get('[datetime-picker="hh:mm a"]').first().type('11:00 AM')
  // cy.contains('Now').click()

  cy.clock().tick(5000)
  cy.get('[datetime-picker="hh:mm a"]').last().click()
  // .click()
  // cy.contains('Now').click()

  
  cy.contains('Select Visit Reason').first().click()
  cy.contains('Follow up').click()

  cy.contains('Add').click()
})


Cypress.Commands.add('patientTriage', () => {
  
  cy.get('[class="Patients__content-body fade-in-out ng-scope"]')
  .first()
  .parent()
  .click()
  cy.contains('Submit New Entry').click()
})




// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
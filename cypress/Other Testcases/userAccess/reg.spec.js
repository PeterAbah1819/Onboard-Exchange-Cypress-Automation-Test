const no_of_entries = 1000
var genArr = Array.from({length:no_of_entries},(v,k)=>k+1)

describe('A thousand patients', () => {
    
   
        it('2 Patients', ({ sex = 'male' } = {}) => {
         cy.login()
         cy.wrap(genArr).each((index) => {   
             
             cy.visit('/patient_registration/sign_up');
          
            cy.fixture('patient-registration-data').then(
              ({ firstName, lastName, phoneNumber }) => {
                cy.server();
                cy.route('POST', '**/api/patients?ignore_matching=false').as('registration');
          
                cy.get('[data-cy=registration-first-name-input]').type(firstName);
          
                cy.get('[data-cy=registration-surname-input]').type(
                  `${lastName}_${new Date().getTime()}`
                );
          
                Cypress.on('uncaught:exception', (err, runnable) => {
                  // returning false here prevents Cypress from
                  // failing the test
                  return false
                })
          
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
                cy.get('[id=checkbox_consent]')
                  .click();
          
                cy.get('[data-cy=registration-phonenumber-input]')
                  .find('.TelInput__field')
                  .type(phoneNumber);
          
                cy.get('[data-cy=registration-submit-button]').click();
          
                cy.wait('@registration').its('status').should('be', 201);
                // cy.url().should('include', 'patients');
                // cy.visit('/patient_registration/sign_up');
              }
            );
        
    })
})
})

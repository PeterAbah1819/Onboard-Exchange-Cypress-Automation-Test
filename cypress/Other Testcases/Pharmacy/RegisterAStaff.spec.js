describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('172.31.246.88:8080')
       cy.get('[name="emailOrPhone"]').type('08169664373')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('Register New Staff', function()
    {
        cy.contains('Staff').click()
        cy.contains('Add New Staff').click()
        cy.get('[name="doctor_first_name"]').click().type('Chime')
        cy.get('#last_name').click().type('George')
        cy.get('.TelInput__field').click().type('07033337921')
        cy.get('#job_title').click().type('Medical Doctor')
        cy.get(':nth-child(2) > :nth-child(2) > .StaffNew__form-controls > .field-ui-singleselect > .ui-select-match > .btn-default > .ui-select-placeholder').click()
        cy.get('#ui-select-choices-row-1-1 > .ui-select-choices-row-inner > .ng-binding').click()
        cy.get(':nth-child(2) > :nth-child(1) > .StaffNew__form-controls > .field-ui-singleselect > .ui-select-match > .btn-default > .ui-select-match-text').click()
        cy.get('#ui-select-choices-row-0-1 > .ui-select-choices-row-inner > .ng-binding').click()
        cy.get('.StaffNew__abilities-form > :nth-child(3) > .StaffNew__radio-container > :nth-child(4) > .StaffNew__form-radio-label').click()
        cy.get('#upload_avatar').click()
    })

})
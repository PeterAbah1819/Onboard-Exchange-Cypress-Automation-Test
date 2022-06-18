describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Create Request', function()
    {
        cy.contains('Requests').click()
        cy.contains('Add New Request').click()
        cy.get('.multiselect__tags').click()
        cy.get('[name="name"]').click()
        cy.get('.multiselect__option > span').first().click()
    
    })

    it('SickLeave Request', function()
    {
        cy.contains('Requests').click()
        cy.contains('Add New Request').click()
        cy.get('.multiselect__tags').click()
        cy.get('li').first().click()
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


})
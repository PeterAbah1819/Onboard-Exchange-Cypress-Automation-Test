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

    it('Package Request', function()
    {
        cy.contains('Requests').click()
        cy.contains('Add New Request').click()
        cy.get('.multiselect__tags').click()
        cy.get('li').first().click()
        cy.get('.AlmightyRadio__group > :nth-child(1)').click()
        cy.get('.AlmightyDropdown__label > .multiselect > .multiselect__select').click()
        cy.get('.multiselect__option > div').click()
        cy.get('.submit-btn').click()
       
    })


})
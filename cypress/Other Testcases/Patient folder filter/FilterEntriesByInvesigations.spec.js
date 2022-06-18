describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Filter EncounterNotes ENtry', function()
    {
        cy.get('[data-cy=patients-list-patient]').click()
        cy.get('.Feed__filter-labs > label > .Feed__filter-label').click()
        cy.get('.Feed__filters-radios > :nth-child(2) > label > .Feed__filter-label').click()

    })

 


})
describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Filter EncounterNotes ENtry', function()
    {
        cy.get('[data-cy=patients-list-patient]').click()
        cy.get('.Feed__filters-radios-inner > .Feed__filter-encounter-notes > label > .Feed__filter-label').click()


    })

 


})
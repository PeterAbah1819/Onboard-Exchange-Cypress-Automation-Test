describe('Bill Prescription', function()
{
    beforeEach('login', function()
    {
       // cy.visit('172.31.246.88:8080')
       // cy.get('[name="emailOrPhone"]').type('08169664373')
       // cy.get('[name="password"]').type('password')
       // cy.get('.Login__submit-btn').click()
       cy.login()
    })

    it('Bills prescription', function()
    {
        cy.get('[ng-href="/prescription-orders"]').click()
        cy.contains('Expand').click()
        cy.contains('Select Inventory Item').click()
        cy.get('.ui-select-choices-row-inner').click()
        cy.get('[type="number"]').click().type('0')
        cy.contains('Submit Bill').click()

    })


})
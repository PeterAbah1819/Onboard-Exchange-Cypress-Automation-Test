describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('record patient care', function()
    {
        cy.contains('Patients').click()
        cy.get('.Patients__patient-main-info').click()        
        cy.get('.NavHeader__submit-link > .hidden-xs-max').click()
         cy.get('.NewEntryModal__item__reception').click()
         cy.get('.Grid-row.ng-isolate-scope > .Grid-row > .Grid-column-12 > .field').type('Patient is in recovery')
         cy.get('.form-buttons > .submit-btn').click()
          
        })


})
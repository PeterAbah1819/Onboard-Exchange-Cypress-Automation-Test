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
         cy.get('.Grid-column-6').click()
         cy.get('.EntryFormEncounter__form-selector-categories > :nth-child(2)').click()
         
        cy.get('.EntryFormEncounter__form-selector-forms > :nth-child(2)').click() 
        cy.get('.ladda-label').click()
        cy.get(':nth-child(2) > form-component.ng-isolate-scope > .FormComponent > .row > .Grid-column-12').click()
        cy.get('.ta-scroll-window').click()
        cy.get('.ta-scroll-window').type('patient is on medications')
        cy.get('.submit-btn').click()
    })


})
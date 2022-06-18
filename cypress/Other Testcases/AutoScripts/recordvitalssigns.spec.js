describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('record patient vitals', function()
    {
        cy.contains('Patients').click()
        cy.get('.Patients__patient-main-info').click()        
        cy.get('.NavHeader__submit-link > .hidden-xs-max').click()
         cy.get('.NewEntryModal__item__vitals').click()
         cy.get(':nth-child(4) > :nth-child(1) > .EntryFormVitals__input-container > .field').type('80')
          cy.get(':nth-child(4) > :nth-child(2) > .EntryFormVitals__input-container > .field').type('1.7')
          
           cy.get('.form-buttons>.submit-btn>.ladda-label').click()
        })


})
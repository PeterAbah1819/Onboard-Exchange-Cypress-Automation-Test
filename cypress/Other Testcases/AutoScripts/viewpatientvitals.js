describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('View patient vitals', function()
    {
        cy.contains('Patients').click()
        cy.get('.Patients__patient-main-info').click()        
        cy.get('.Feed__filter-vitals > label > .Feed__filter-label').click()
         
        
    })

})
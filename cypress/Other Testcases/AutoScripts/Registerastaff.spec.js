describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('Registerastaff', function()
    {
        cy.contains('Staff').click()
        cy.get(':nth-child(3) > .header-link').click()
        cy.get('#upload_avatar'). click()
        cy.get('#first_name'). type('George')
        cy.get('#last_name'). type('Chime')
         cy.get('.TelInput__field'). type('08083588604')
        cy.get('#email'). type('chimeg@heliumhealth.ng') 
        cy.get('#job_title') . type('Doctor') 
         cy.get('#department') . type('Clinical team')
         cy.get('#mcds_number'). type('1238')
               

         
        
    })

})
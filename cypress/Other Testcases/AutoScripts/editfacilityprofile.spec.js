describe('Log In', function()
{
    beforeEach('login', function()
    {
      cy.login()
    })

    it('edit profile', function()
    {
        cy.contains('Settings').click()
        cy.contains('Profile'). click()
        

         
        
    })

})
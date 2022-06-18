describe('Log In', function()
{
    beforeEach('',()=>{
        cy.login()
    })

    it('deactivate staff', function()
    {
        cy.contains('Staff').click()
        cy.get('.hidden-xs-max > :nth-child(1)').trigger('mouseover')
        cy.get['class="no-icon Staff__remove-link"'].click()
       

        
        

         
        
    })

})
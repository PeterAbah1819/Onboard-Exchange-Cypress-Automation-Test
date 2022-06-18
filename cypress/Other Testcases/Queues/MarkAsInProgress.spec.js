describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Mark as In progress', function()
    {
        cy.get('.TagsList__patient-name').click()
        cy.get('[ng-if="vm.CurrentDoctor.show().queue"]').click()
        cy.get('.QueueDropdown__patient-badge__counter').click()
        //cy.get('.form-link').click()
    
    })


})
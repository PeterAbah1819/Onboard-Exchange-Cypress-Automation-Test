describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Add to staff queue', function()
    {
        cy.get('.TagsList__patient-name').click()
        cy.get('.icon-ico-top-forward').click()
        cy.get('.ForwardFileModal__unchecked-doctor--last > .ForwardFileModal__name-and-avatar > .ForwardFileModal__checkbox').click()
        cy.get('.form-link').click()
    
    })


})
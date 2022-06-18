describe('Disburse Prescription', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Completed Prescriptions', function()
    {
        cy.get('[ng-href="/prescription-orders"]').click()
        cy.get('.filter-completed > label > .RadioContentFilter__item__label').click()
    })

})
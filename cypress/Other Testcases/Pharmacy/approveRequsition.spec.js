describe('Disburse Prescription', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Appprove requistion', function()
    {
        cy.get('[ng-href="/prescription-orders"]').click()
        cy.get('[ui-sref="pharmacyRequisitions"]').click()
        cy.get(':nth-child(1) > :nth-child(6) > .PharmacyRequisitionsTable__content-actions > [data-cy=RequisitionTable__approve]').click()
        cy.get('[data-cy=FullPageModalActions__submit]').click()

    })

})
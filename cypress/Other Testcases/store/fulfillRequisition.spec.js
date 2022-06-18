describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Fulfill Requisitions', function()
    {
        cy.get('[ng-href="/procurements"]').click()
        cy.get('[ui-sref="storeRequisitions"]').click()
        cy.get('.StoreRequisitionsTable__action-button').click()
        cy.get('.AlmightyCheckbox__selector').click()
        cy.get('.multiselect__select').click()
        cy.get(':nth-child(1) > .multiselect__option > div').click()
        cy.get('.AlmightyInput__field').click().type('300')
        cy.get('.RequisitionModalFooter__approve').click()
    })


})
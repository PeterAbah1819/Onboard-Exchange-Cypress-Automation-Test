describe('Disburse Prescription', function()
{
    it('login', function()
    {
        cy.login()
    })

    it('Create Requisition', function()
    {
        cy.get('[ng-href="/prescription-orders"]').click()
        cy.get('[ui-sref="pharmacyRequisitions"]').click()
        cy.get('[data-cy=PharmacyRequisition__create-link]').click()
        cy.get('[data-cy=PharmacyRequisitionCreateForm__store-selection] > .multiselect > .multiselect__tags').click()
        cy.get('[data-cy=PharmacyRequisitionCreateForm__store-selection] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > div').click()
        cy.get('[data-cy=PharmacyRequisitionCreateForm__pharmacy-selection] > .multiselect > .multiselect__tags').click()
        cy.get('[data-cy=PharmacyRequisitionCreateForm__pharmacy-selection] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > div').click()
        cy.get('[data-cy=PharmacyRequisitionItem__item-selection]').click()
        cy.get('[data-cy=PharmacyRequisitionItem__item-selection] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > div').click()
        cy.get('.AlmightyInput__field').click().type('200')
        cy.get('[data-cy=FullPageModalActions__submit]').click()
    })

})
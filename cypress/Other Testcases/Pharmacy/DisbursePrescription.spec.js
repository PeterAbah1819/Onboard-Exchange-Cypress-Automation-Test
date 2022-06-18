describe('Disburse Prescription', function()
{
    beforeEach('login', function()
    {
        cy.login()
    })

    it('Disburse prescription', function()
    {
        cy.contains('Pharmacy').click()
        cy.contains('Expand').click()
        cy.get('[ng-click="vm.disburse()"]').click()

    })

})
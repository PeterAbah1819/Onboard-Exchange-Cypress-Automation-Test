describe('Add Deposit', () => {

    it('Add Deposit', () => {
        cy.login();

    it('click on PT Folder')
    //it('For Single registered Patient')
        //cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').click()

    //it('multiple registered PT')
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').contains('Caleb').click()

    it('click on Add Deposit Button')
        cy.get('[class="ico-currency PatientDetailsBox__add-deposit-icon ng-scope"]').click()

        cy.get('.field').click().type('10000')

        cy.get('[ng-if="!vm.isRefund"] > :nth-child(2) > .ng-isolate-scope').contains('Bank Transfer').click()

        cy.get('.submit-btn').click()

    })
})
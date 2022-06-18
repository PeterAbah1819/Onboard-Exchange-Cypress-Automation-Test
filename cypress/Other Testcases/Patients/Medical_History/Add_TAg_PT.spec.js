describe('Add Patient Tag', () => {
    it('Add Patient Tag', () => {
        cy.login();

    it('click on PT Folder')
    //it('For Single registered Patient')
        //cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').click()

    //it('multiple registered PT')
    cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').contains('Caleb').click()

    it('click on Add TAg Button')
        cy.get('[class="TagsList__edit ng-scope"]').click()

    it('click on Tag')
        cy.get('.ui-select-search').click()
        cy.get('#ui-select-choices-row-0-6 > .ui-select-choices-row-inner').click()
        cy.get('.submit-btn').click()
    })
})
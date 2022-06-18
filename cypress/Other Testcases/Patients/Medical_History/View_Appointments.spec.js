describe('Comprehensive Summary', () => {

    it('Comprehensive Summary', () => {

        cy.login()

    it('click on PT Folder')
    //it('For Single registered Patient')
        //cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').click()

    //it('multiple registered PT')
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        cy.get('.NavHeader__appointments-link').click()

        cy.get('.AppointmentsDropdown__add-new').click()

    })
})    
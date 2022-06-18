describe('View Notifications Button', () => {

    it('Notifications Button', () => {

        cy.login()

        it('click on PT Folder')
    //it('For Single registered Patient')
        //cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').click()

    //it('multiple registered PT')
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        cy.get('.icon-ico-top-notifications').click()

        cy.get('.NotificationsDropdown__notification-row').click()

    })
})    
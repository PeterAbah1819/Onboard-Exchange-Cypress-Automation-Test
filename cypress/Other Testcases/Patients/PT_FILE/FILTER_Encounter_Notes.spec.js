describe('Filter By Encounter in PT File', () => {

    it('Filter by Encounter', () => {

        cy.login()

        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').contains('Caleb').click()

        cy.get('.Feed__filter-encounter-notes > label > .Feed__filter-label').click()

    })
})
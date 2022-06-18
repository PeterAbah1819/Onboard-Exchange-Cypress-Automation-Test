describe('Filter By OTHER in PT File', () => {

    it('Filter by OTHER', () => {

        cy.login()

        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]').contains('Caleb').click()

        cy.get('.Feed__filter-other > label > .Feed__filter-label').click()

    })
})
describe('Filter by Age', () => {

    it ('Filter by Age', () => {
        cy.login()
        cy.get('[filter-type="age"]').click();

    it('Age Range')
        cy.get('[ng-model="vm.filterData.value[1]"]').click().clear()


        
        .type('35')

        cy.get('.submit-btn').click()

    })
})
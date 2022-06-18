describe('Search Patient', () => {

    it('Search Patient', () => {
        cy.login(),


        cy.get('[class="HeaderSearch__search-field"]').click().type('idoma')

    })
})


describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Add New Item to Inventory', function()
    {
        cy.get('[ng-href="/procurements"]').click()
        cy.get('.subheader-splitted--row-2 > .hidden-xmd-max > :nth-child(1)').click()
        cy.get('[for="vendor"] > .multiselect > .multiselect__select').click()
        cy.get('[for="vendor"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > div').click()
        cy.get('[for="storeId"] > .multiselect > .multiselect__select').click()
        cy.get('[for="storeId"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option > div').click()
        //cy.get('[for="product_name_78216593-b114-453d-9de6-7cb63240254d"] > .multiselect > .multiselect__select').click()
        //
        cy.get('.AlmightyInput__field').click().type('500')
        cy.get('.product_name_ee34e893-a026-4e9f-8578-a6b23ce45369').click()
        //cy.get('[for="unitOfMeasure_78216593-b114-453d-9de6-7cb63240254d"] > .multiselect > .multiselect__select').click()
        //
        cy.get('.v-money').click().type('500')

    })


})
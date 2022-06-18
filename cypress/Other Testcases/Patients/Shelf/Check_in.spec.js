describe('Check in', () => {
    
    it('Check in', () => {
        cy.login();
    
    //it('Checkin for one registered Patient')
        //cy.get('[class="Patients__checkin ng-binding"]').click()
    
    //it('Checkin for multiple registered PT')
    //it('using search patient')
        //cy.get('[class="HeaderSearch__search-field"]').click().type('idoma'),
        //cy.get('[class="Patients__checkin ng-binding"]').click()

    //it('find patient')
        cy.get(':nth-child(2) > .Patients__action > .Patients__checkin').click()
        //.focused('[class="Patients__checkin ng-binding"]').click()
        //.focus(':nth-child(2) > .Patients__action > .Patients__checkin').click()

    it('Patient Checkin Popup')
        cy.get('[class="BillingItemsSelectWithCategories__button"]')
        .type('Paracetamol')
        cy.get('[class="BillingItemsSelectWithCategories__option-row"]').contains('Paracetamol').click()

    it('who to see')
        cy.get(':nth-child(2) > label > .entry-value').click(),
        cy.get('.Grid-column-12 > .field-ui-singleselect > .ui-select-match > .btn-default').click(),
        cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner > .ng-scope').click(),
        cy.get('.submit-btn').click(),
        cy.get('.ForwardFileModal__forward-button').click()
    })
})

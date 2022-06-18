describe('Prescriptions',()=>{
    it('Add prescriptions',()=>{
        cy.login()
        cy.patientTriage()
        cy.contains('Prescriptions').click()
        cy.contains('Select Medication').click('')
        cy.get(':nth-child(1) > .LibraryDataSelectInfinite__item > .ng-binding').first().click()
        cy.get('[name="prescription_strength"]').type('500')
        // cy.get('blood-pressure-input').type('120/80')
        cy.get('[name="prescription_dose"]').type('3')
        cy.get('[name="prescription_route_0"]').click()
        cy.get('li').first().click()
        cy.get('[name="prescription_frequency_0"]').click()
        cy.get('#ui-select-choices-row-1-1 > .ui-select-choices-row-inner').first().click()
        cy.get('[name="prescription_period"]').type('3')
        
        cy.get('.form-buttons').contains('Submit').click()
    })
})
describe('Addmission',()=>{
    it('Admit a patient',()=>{
        cy.login()
        cy.patientTriage()
        cy.contains('Admit').click()
        cy.get('[placeholder="Select Room"]').first().click()
        cy.get('.ui-select-choices-row-inner').first().click()
        cy.get('.LibraryDataMultiselectInfinite__search').click()
        cy.get('.LibraryDataMultiselectInfinite__item').first().click()
        cy.get('[name="summary"]').type('poisoned')
        cy.get('.TextareaWithIncludes__buttons-container').contains('Prescription').click()
        cy.contains('Select Medication').click('').get('.LibraryDataSelectInfinite__item').first().click()
        // cy
        // cy.get('[name="prescription_strength"]').type('500')
        // cy.get('blood-pressure-input').type('120/80')
        cy.get('[name="prescription_dose"]').type('3')
        cy.get('[name="prescription_route_0"]').click().contains('PO (by mouth)').click()
        // cy
        cy.get('[name="prescription_frequency_0"]').click()
        cy.contains('Daily').click({force: true})
        cy.get('.Grid-column-3 > .field').type('3')
        cy.get('.form-buttons').contains('Submit').click()
        cy.contains('Discharge Patient').click()
        cy.get('[placeholder="Describe Reason"]').type('Gbe body e')
        cy.get('.form-buttons').contains('Submit').click()
    })
})


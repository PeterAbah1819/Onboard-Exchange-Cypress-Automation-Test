describe('Vitals',()=>{
    it('Vitals triage',()=>{
        cy.login()
        cy.patientTriage()
        cy.contains('Vitals').click()
        cy.get('[name="weight"]').type('90')
        cy.get('[name="height"]').type('180')
        cy.get('blood-pressure-input').type('120/80')
        cy.get('[name="bodyTemperature"]').type('37.0')
        cy.get('[name="heartRate"]').type('70')
        cy.get('.form-buttons').contains('Submit').click()
    })
})
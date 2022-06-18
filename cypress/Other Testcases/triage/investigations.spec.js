describe('Investigations',()=>{

    beforeEach(() => {
        cy.login()
      })
    it('Investigation triage',()=>{

        cy.patientTriage('Auto_Test')
        cy.contains('Clinical Investigations').click()
        Cypress.waitFor(1500)
        cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI',{delay:1200})
        cy.get('.LabTestsSelectInfinite__item').first().click({force:true})
        cy.wait(1500)
        cy.get('.LabTestsSelectInfinite__container').first().click().type('17-OH Progesterone',{delay:1200})
        cy.get('.LabTestsSelectInfinite__item').first().click({force:true})
        cy.get('.form-buttons').contains('Submit').click()
    })
})
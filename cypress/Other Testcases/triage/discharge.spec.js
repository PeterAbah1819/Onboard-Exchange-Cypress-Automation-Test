// describe('Addmission',()=>{
//     it('Discharge a patient',()=>{
//         cy.login()
//         cy.patientTriage()
//         cy.contains('Discharge').click()
//     })
// })


describe('Addmission',()=>{
    it('Discharge a patient',()=>{
        cy.login()
        cy.selectPatient()
        cy.contains('Discharge Patient').click()
    })
})
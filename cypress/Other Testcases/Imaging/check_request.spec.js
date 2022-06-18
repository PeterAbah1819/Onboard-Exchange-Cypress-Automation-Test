describe('Patient Folder',()=>{

    beforeEach(() => {
        cy.login()
      })
    // it('Check Requested Scan',()=>{
        
    //     cy.selectPatient('George Femi_1602178230376')
    //     cy.contains('Clinical Investigations')
    //     cy.contains('Breast MRI')
    //     cy.contains('Awaiting Capturing')

    // })

    it('Check Requested Scan',()=>{
        
        cy.selectPatient('George Femi_1602178230376')
        cy.contains('Clinical Investigations')
        cy.contains('17-OH Progesterone')
        cy.contains('Awaiting Specimen')

    })
})
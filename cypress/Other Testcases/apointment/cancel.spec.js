describe('Appointments',()=>{
    it('Cancle an appointment',() =>{
    cy.login()
    cy.selectPatient('George Femi_1602178230376')
    cy.contains('Reschedule').click()
    cy.contains('Cancel Appointment').click()
    cy.get('.remove-btn').click()
    
    })
  })
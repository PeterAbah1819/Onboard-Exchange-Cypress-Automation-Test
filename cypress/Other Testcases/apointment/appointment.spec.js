// ng-href="/appointments"


describe('Appointments',()=>{
    it('Create an appointment',() =>{
    cy.login()
    cy.createAppointment()
    
    })
  })
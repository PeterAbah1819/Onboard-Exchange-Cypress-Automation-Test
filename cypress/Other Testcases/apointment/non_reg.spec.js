// ng-href="/appointments"


describe('Appointments',()=>{
    it('Create an appointment for non registered patients',() =>{
    cy.login()
    cy.non_Reg_Appointment()
    
    })
  })
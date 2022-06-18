describe('Log In', function()
{
    it('login', function()
    {
       cy.visit('192.168.225.220:8080')
       cy.get('[name="emailOrPhone"]').type('07033337921')
       cy.get('[name="password"]').type('password')
       cy.get('.Login__submit-btn').click()
    })

    it('record inpatient medication', function()
    {
        cy.contains('Patients').click()
        cy.get('.Patients__patient-main-info').click()
        
        cy.get('.PatientInAdmission__tab--active').click()
        cy.get(':nth-child(1) > :nth-child(4) > [ng-click="vm.administer(item)"]').click()
               
        
        
         cy.get('.AdministerDrugModal__actions > div > .submit-btn').click()
    })

})
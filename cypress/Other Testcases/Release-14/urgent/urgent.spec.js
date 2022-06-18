describe('Urgent Imaging Orders',()=>{

    beforeEach(() => {
        cy.login()
      })
      it('Investigation triage',()=>{

        cy.patientTriage('Auto_Test')
        cy.contains('Clinical Investigations').click()
        cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI',{delay:500})
        cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click({force:true})
        cy.contains('Mark as urgent').click()
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()
    })

    it('Confirm Capture',() =>{

        cy.visit('/imaging-orders?mode=by-orders')
        cy.get('[data-cy="imaging-order-header"]').first().click()
        cy.contains('Breast MRI').should('be','visible')
        cy.contains('Awaiting Capturing').should('be','visible')
        cy.contains('Prof Helium Admin').should('be','visible')
        cy.contains('Confirm Capturing').should('be','visible')
        cy.get('.ImagingOrderHeader__status--urgent').contains('Urgent')
        cy.reload()
      
      })

})


describe('Urgent Lab Orders',()=>{

    beforeEach(() => {
        cy.login()
      })
      it('Investigation triage',()=>{

        cy.patientTriage('Auto_Test')
        cy.contains('Clinical Investigations').click()
        // cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI')
        // cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
        cy.get('.LabTestsSelectInfinite__container').first().click().type('17-OH Progesterone',{delay:200})
        cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click({force:true})
        cy.contains('Mark as urgent').click()
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()
    })

    it('Take Specimen',() =>{
  
    
        cy.visit('/lab-orders?mode=by-orders')
        cy.get('.LabOrder__header').first().contains('Awaiting Specimen')
        cy.get('.LabOrder__header').first().click()
        cy.contains('Take Specimen').should('be','visible')
        cy.get('.LabOrder__status-label--urgent').contains('Urgent')
        cy.contains('Take Specimen').click()
        cy.reload()
      
      })



})

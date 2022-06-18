describe('Lab Orders',()=>{
  beforeEach(() => {
    cy.login()
  })

  it('Investigation triage',()=>{

    cy.patientTriage('Auto_Test')
    cy.contains('Clinical Investigations').click()
    // cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI')
    // cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
    cy.get('.LabTestsSelectInfinite__container').first().click().type('17-OH Progesterone')
    cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click({force:true})

    cy.get('.form-buttons').contains('Submit').click()
    cy.reload()
})

  it('Take Specimen',() =>{
  
    
    cy.visit('/lab-orders?mode=by-orders')
    cy.wait(500)
    cy.get('.LabOrder__header').first().click()
    cy.contains('Take Specimen').should('be','visible')
    cy.contains('Take Specimen').click()
    cy.reload()
    
  
  })
    it('Reject Specimen',() =>{
    cy.visit('/lab-orders?mode=by-orders')
    cy.wait(500)
    cy.get('.LabOrder__header').first().click()

    cy.contains('Receive Specimen').should('be','visible')
    cy.contains('Reject').should('be','visible')
    cy.contains('Reject').click()
      cy.get('[placeholder="Describe reason"]').type('error')
      cy.contains('Confirm').click()
      cy.reload()
  
  })

  it('Take Specimen',() =>{
  
    
    cy.visit('/lab-orders?mode=by-orders')
    cy.wait(500)
    cy.get('.LabOrder__header').first().click()
    cy.contains('Take Specimen').should('be','visible')
    cy.contains('Take Specimen').click()
    cy.reload()
    
  
  })

  it('Recieve Specimen',() =>{
  
    
    cy.visit('/lab-orders?mode=by-orders')
    cy.wait(500)
    cy.get('.LabOrder__header').first().click()

    cy.contains('Receive Specimen').should('be','visible')
    cy.contains('Receive Specimen').click()
    cy.reload()
  
  })

    it('Submit Results',() =>{
  
    // cy.login()
    cy.visit('/lab-orders?mode=by-orders')
    cy.wait(500)
    cy.get('.LabOrder__header').first().click()

    cy.get('[placeholder="Enter Results"]').type('4').click()
    cy.contains('Submit Result').click()
    cy.reload()
  
  })

    it('Approve Results',() =>{
  
    // cy.login()
    cy.visit('/lab-orders?mode=by-orders')
    cy.wait(500)
    cy.get('.LabOrder__header').first().click()
    cy.contains('Approve Results').click()
    cy.reload()
  
  })
})

describe('Lab Orders',()=>{

    beforeEach(() => {
      cy.login()
    })

    it('Investigation triage',()=>{

        cy.patientTriage('Auto_Test')
        cy.contains('Clinical Investigations').click()
        // cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI')
        // cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
        cy.get('.LabTestsSelectInfinite__container').first().click().type('17-OH Progesterone')
        cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click({force:true})
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()
    })
  
      it('Take Specimen',() =>{
    
      
      cy.visit('/lab-orders?mode=by-orders')
      cy.wait(500)
      cy.get('.LabOrder__header').first().click()
      cy.contains('Take Specimen').should('be','visible')
      cy.contains('Take Specimen').click()
      cy.reload()
    
    })
  
  
      it('Recieve Specimen',() =>{
    
      
      cy.visit('/lab-orders?mode=by-orders')
      cy.wait(500)
      cy.get('.LabOrder__header').first().click()
  
      cy.contains('Receive Specimen').should('be','visible')
      cy.contains('Receive Specimen').click()
      cy.reload()
    })
  
      it('Submit Results',() =>{
    
      // cy.login()
      cy.visit('/lab-orders?mode=by-orders')
      cy.wait(500)
      cy.get('.LabOrder__header').first().click()
  
      cy.get('[placeholder="Enter Results"]').type('4').click()
      cy.contains('Submit Result').click()
      cy.reload()
    })

    it('Reject Specimen',() =>{
        cy.visit('/lab-orders?mode=by-orders')
        cy.wait(500)
        cy.get('.LabOrder__header').first().click()
    
        cy.contains('Approve Results').should('be','visible')
        cy.contains('Reject').should('be','visible')
        cy.contains('Reject').click()
          cy.get('[placeholder="Describe reason"]').type('error')
          cy.contains('Confirm').click()
          cy.reload()
      
      })

})
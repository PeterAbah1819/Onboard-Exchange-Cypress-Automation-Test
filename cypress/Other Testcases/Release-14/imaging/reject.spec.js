describe('Report Error Imaging Orders',()=>{

    beforeEach(() => {
        cy.login()
      })

      it('Investigation triage',()=>{

        cy.patientTriage('Auto_Test')
        cy.contains('Clinical Investigations').click()
        cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI',{delay:500})
        cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click({force:true})
        
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()
    })

    it('Confirm Capture',() =>{
  
    cy.visit('/imaging-orders?mode=by-orders')
    cy.wait(500)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI').should('be','visible')
    cy.contains('Awaiting Capturing').should('be','visible')
    cy.contains('Prof Helium Admin').should('be','visible')
    cy.contains('Confirm Capturing').should('be','visible')
    cy.contains('Confirm Capturing').click()
    cy.reload()
  })


  it('Reject Capture',() =>{

    cy.visit('/imaging-orders?mode=by-orders')
    cy.wait(500)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI').should('be','visible')
    cy.contains('Awaiting Capturing').should('be','visible')
    cy.contains('Prof Helium Admin').should('be','visible')
    cy.contains('Confirm Capturing').should('be','visible')
    cy.contains('Report Error').should('be','visible')
    cy.contains('Report Error').click()
    cy.get('[placeholder="Describe Issue"]').type('error')
    cy.contains('Confirm').click()
    cy.reload()
    })

   
})


describe('Imaging Orders',()=>{

  beforeEach(() => {
      cy.login()
    })

    it('Investigation triage',()=>{

        cy.patientTriage('Auto_Test')
        cy.contains('Clinical Investigations').click()
        cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI')
        cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
       
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()
    })

    it('Confirm Capture',() =>{
  
        cy.visit('/imaging-orders?mode=by-orders')
        cy.wait(500)
        cy.get('[data-cy="imaging-order-header"]').first().click()
        cy.contains('Breast MRI').should('be','visible')
        cy.contains('Awaiting Capturing').should('be','visible')
        cy.contains('Prof Helium Admin').should('be','visible')
        cy.contains('Confirm Capturing').should('be','visible')
        cy.contains('Confirm Capturing').click()
        cy.reload()
      
      })
    
        it('Submit Results',() =>{
      
        
        cy.visit('/imaging-orders?mode=by-orders')
        cy.wait(500)
        cy.get('[data-cy="imaging-order-header"]').first().click()
        cy.contains('Breast MRI').should('be','visible')
        cy.contains('Awaiting Capturing').should('be','visible')
        cy.get('[data-placeholder="Enter results for this test here"]').type('all clear')
        const filepath = 'registration-image.png'
    
        cy.get('[data-cy=FileUploader__input]').attachFile(filepath)
    
        cy.contains('Submit Result').should('be','visible')
        cy.contains('Submit Result').click()
        cy.reload()
      
      })
  it('Reject Capture',() =>{

  cy.visit('/imaging-orders?mode=by-orders')
  cy.wait(500)
  cy.get('[data-cy="imaging-order-header"]').first().click()
  cy.contains('Breast MRI').should('be','visible')
  cy.contains('Awaiting Capturing').should('be','visible')
  cy.contains('Prof Helium Admin').should('be','visible')
  cy.contains('Confirm Capturing').should('be','visible')
  cy.contains('Report Error').should('be','visible')
  cy.contains('Report Error').click()
  cy.get('[placeholder="Describe Issue"]').type('error')
  cy.contains('Confirm').click()
  cy.reload()
  })

})

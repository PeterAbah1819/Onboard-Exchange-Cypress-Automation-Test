describe('Patient Folder',()=>{

    beforeEach(() => {
        cy.login()
      })
    
      it('Investigation triage',()=>{

        cy.patientTriage('Auto_Test')
        cy.contains('Clinical Investigations').click()
        cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI',{delay:200})
        cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
        cy.contains('This clinical investigation was requested within the last 7 days. Do you still want to request it?')
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()

    })
    it('Check Requested Scan',()=>{
            
            cy.selectPatient('Auto_Test')
            cy.contains('Clinical Investigations')
            cy.contains('Breast MRI')
            cy.contains('Awaiting Capture')
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

      it('Check Requested Scan',()=>{
            
        cy.selectPatient('Auto_Test')
        cy.contains('Clinical Investigations')
        cy.contains('Breast MRI')
        // cy.contains('Test Result updated')
        cy.contains('No Results Submitted')
        cy.reload()
    })
   

        it('Submit Results',() =>{
  
    
          cy.visit('/imaging-orders?mode=by-orders')
          cy.wait(500)
          cy.get('[data-cy="imaging-order-header"]').first().click()
          cy.contains('Breast MRI').should('be','visible')
          cy.contains('Awaiting Capturing').should('be','visible')
          cy.get('[data-placeholder="Enter results for this test here"]').click().type('all clear')
          const filepath = 'registration-image.png'
      
          cy.get('[data-cy=FileUploader__input]').attachFile(filepath)
      
          cy.contains('Submit Result').should('be','visible')
          cy.contains('Submit Result').click()
          cy.reload()
        
        })

      it('Check Submit Status',()=>{
            
          cy.selectPatient('Auto_Test')
          cy.contains('Clinical Investigations')
          cy.contains('Breast MRI')
          // cy.contains('Test Result updated')
          cy.contains('Awaiting Approval')
          cy.reload()
  
      })

      it('Approve Results',() =>{
  

        cy.visit('/imaging-orders?mode=by-orders')
        cy.wait(500)
        cy.get('[data-cy="imaging-order-header"]').first().click()
        cy.contains('Breast MRI').should('be','visible')
        cy.contains('Awaiting Approval').should('be','visible')
        // cy.get('[data-placeholder="Enter results for this test here"]').type('all clear')
        cy.contains('Approve Results').should('be','visible')
        cy.contains('Approve Results').click()
        cy.reload()
      
      })

      it('Check Ordered test Recieved',()=>{
        
        cy.selectPatient('Auto_Test')
        cy.contains('Clinical Investigations')
        cy.contains('Tests Ordered')
        cy.contains('17-OH Progesterone')
        cy.get('.FeedEntryHeader__status-label').contains('No Results Submitted')
        cy.contains('Captured by')
        cy.contains('Submitted by')
        cy.contains('Approved by')
        cy.reload()
    })

    
})


// 
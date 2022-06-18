describe('Patient Folder',()=>{

    beforeEach(() => {
        cy.login()
      })
    // it('Check Requested Scan',()=>{
        
    //     cy.selectPatient('Auto_Test')
    //     cy.contains('Clinical Investigations')
    //     cy.contains('Breast MRI')
    //     cy.contains('Awaiting Capturing')

    // })
    // it('Investigation triage',()=>{

    //     cy.patientTriage('Auto_Test')
    //     cy.contains('Clinical Investigations').click()
    //     // cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI')
    //     // cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
    //     cy.get('.LabTestsSelectInfinite__container').first().click().type('17-OH Progesterone')
    //     cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
    //     cy.get('.form-buttons').contains('Submit').click()
    //     cy.reload()
    // })

    it('Check Requested test',()=>{
        
        cy.selectPatient('Auto_Test')
        cy.contains('Clinical Investigations')
        cy.contains('17-OH Progesterone')
        cy.get('.FeedEntryHeader__status-label').contains('Awaiting Specimen')

    })

    it('Take Specimen',() =>{
  
    
        cy.visit('/lab-orders?mode=by-orders')
        cy.wait(500)
        cy.get('.LabOrder__header').first().contains('Awaiting Specimen')
        cy.get('.LabOrder__header').first().click()
        cy.contains('Take Specimen').should('be','visible')
        cy.contains('Take Specimen').click()
        cy.reload()
      
      })

      it('Check Ordered test',()=>{
        
        cy.selectPatient('Auto_Test')
        cy.contains('Clinical Investigations')
        cy.contains('Tests Ordered')
        cy.contains('17-OH Progesterone')
        cy.get('.FeedEntryHeader__status-label').contains('Specimen Taken')
        cy.contains('Taken by')
        cy.reload()
    })

    it('Recieve Specimen',() =>{
  
        cy.visit('/lab-orders?mode=by-orders')
        cy.wait(500)
        cy.get('.LabOrder__header').first().click()
        cy.contains('Specimen Taken')
        cy.contains('Receive Specimen').should('be','visible')
        cy.contains('Receive Specimen').click()
        cy.reload()
      })

      it('Check Ordered test Recieved',()=>{
        
        cy.selectPatient('Auto_Test')
        cy.contains('Clinical Investigations')
        cy.contains('Tests Ordered')
        cy.contains('17-OH Progesterone')
        cy.get('.FeedEntryHeader__status-label').contains('No Results Submitted')
        cy.contains('Taken by')
        cy.contains('Received by')
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

      it('Check Ordered test Result',()=>{
        
        cy.selectPatient('Auto_Test')
        cy.contains('Clinical Investigations')
        cy.contains('Tests Ordered')
        cy.contains('17-OH Progesterone')
        cy.get('.FeedEntryHeader__status-label').contains('Awaiting Approval')
        cy.contains('Taken by')
        cy.contains('Received by')
        cy.contains('Submitted by')
        cy.reload()
    })

    it('Approve Results',() =>{
  
        // cy.login()
        cy.visit('/lab-orders?mode=by-orders')
        cy.wait(500)
        cy.get('.LabOrder__header').first().click()
        cy.contains('Approve Results').click()
      
      })
})


// toast toast-success
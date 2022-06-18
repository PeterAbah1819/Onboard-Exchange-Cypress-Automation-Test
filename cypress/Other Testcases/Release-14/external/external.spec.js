describe('External Imaging Orders',()=>{

    beforeEach(() => {
        cy.login()
      })
      it('Investigation triage',()=>{

        cy.patientTriage('Auto_Test')
        cy.contains('Clinical Investigations').click()
        cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI',{delay:500})
        cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click({force:true})
        cy.contains('Mark as external').click()
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()
    })

  it('Check Requested Scan',()=>{
            
    cy.selectPatient('Auto_Test')
    cy.contains('Clinical Investigations')
    cy.contains('Breast MRI')
    cy.contains('External')
    cy.contains('No Results Submitted')
    cy.reload()
})

it('Submit Results',() =>{
  
    
    cy.visit('/imaging-orders?mode=by-orders')
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI').should('be','visible')
    cy.contains('Awaiting Capturing').should('be','visible')
    cy.get('[data-placeholder="Enter results for this test here"]').click().type('all clear')
    const filepath = 'registration-image.png'

    cy.get('[data-cy=FileUploader__input]').attachFile(filepath)

    cy.contains('Submit Result').should('be','visible')
    cy.contains('Submit Result').click()
    
  
  })

    it('Approve Results',() =>{
  

    cy.visit('/imaging-orders?mode=by-orders')
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI').should('be','visible')
    cy.contains('Awaiting Approval').should('be','visible')
    // cy.get('[data-placeholder="Enter results for this test here"]').type('all clear')
    cy.contains('Approve Results').should('be','visible')
    cy.contains('Approve Results').click()
    
  
  })

})


describe('External Lab Orders',()=>{

    

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
        cy.contains('Mark as external').click()
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()
    })

    it('Check Ordered test Recieved',()=>{
        
        cy.selectPatient('Auto_Test')
        cy.contains('Clinical Investigations')
        cy.contains('Tests Ordered')
        cy.contains('17-OH Progesterone')
        cy.contains('External')
        cy.get('.FeedEntryHeader__status-label').contains('No Results Submitted')
        cy.reload()
    })

    it('Submit Results',() =>{
  
        // cy.login()
        cy.visit('/lab-orders?mode=by-orders')
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
        cy.contains('Submitted by')
        cy.reload()
    })

    it('Approve Results',() =>{
  
        // cy.login()
        cy.visit('/lab-orders?mode=by-orders')
        cy.get('.LabOrder__header').first().click()
        cy.contains('Approve Results').click()
      
      })
  
  })
describe('Imaging Orders',()=>{


    it('Confirm Capture', function()
      {
         cy.login()
    cy.visit('/imaging-orders?mode=by-orders').wait(2000)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.get('.AlmightyInput__field').click().type('Auto_Test').wait(1000)
    cy.get('.ImagingOrderFormActions > :nth-child(2)').should("contain.text", "Confirm Capturing").click().wait(1000)
    cy.get('[data-cy="imaging-order-submit"]').click().wait(2000)


    
  
  })

    it('Submit Results', function()
    {
       cy.login()
    cy.visit('/imaging-orders?mode=by-orders').wait(2000)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.get('.AlmightyInput__field').click().type('Auto_Test').wait(1000)
    //cy.get('[data-cy="imaging-orders-list"] > :nth-child(1) > [data-cy="imaging-order-header"]').should("contain.text", "No Results Submitted").wait(1000)
    cy.get('.ImagingOrderFormBody__test-results > .AlmightyTextEditor > .AlmightyTextEditor__label > .ck-editor > .ck-editor__main > .ck-blurred > .ck-placeholder').type('QA Test Result').wait(2000)
    cy.get('.ImagingOrderFormBody__notes > .AlmightyTextEditor > .AlmightyTextEditor__label > .ck-editor > .ck-editor__main > .ck-blurred > .ck-placeholder').type('QA Test Done').wait(2000)
    //const filepath = 'registration-image.png'

    //cy.get('[data-cy=FileUploader__input]').attachFile(filepath)

    cy.get('[data-cy="imaging-order-submit"]').click().wait(2000)
    
  
  })

    it('Approve Results', function()
    {
       cy.login()
    cy.visit('/imaging-orders?mode=by-orders').wait(2000)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.get('.AlmightyInput__field').click().type('Auto_Test').wait(1000)
    //cy.get('[data-cy="imaging-orders-list"] > :nth-child(1) > [data-cy="imaging-order-header"]').should("contain.text", "No Results Submitted").wait(1000)
    cy.get('.ImagingOrderFormBody__notes > .AlmightyTextEditor > .AlmightyTextEditor__label > .ck-editor > .ck-editor__main > .ck-blurred > .ck-placeholder').type('QA Test Done').wait(2000)
    
  
    cy.get('[data-cy="imaging-order-submit"]').click().wait(2000)


  })


  it('Reject Capturing', function()
  {
     cy.login()
  cy.visit('/imaging-orders?mode=by-orders').wait(2000)
  cy.get('[data-cy="imaging-order-header"]').first().click()
  //cy.get('.ImagingOrders__container').should("contain.text", "Awaiting Capture").click().wait(1000)
  cy.get('.ImagingOrderFormActions__discard-btn').click().wait(1000)
  cy.get('[placeholder="Describe Issue"]').type('error')
  cy.contains('Confirm').click()

  })

})

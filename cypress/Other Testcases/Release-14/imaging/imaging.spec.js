describe('Imaging Orders',()=>{

    beforeEach(() => {
        cy.login()
      })
    it('Confirm Capture',() =>{
  
    cy.visit('/imaging-orders?mode=by-orders')
    cy.wait(500)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI')
    cy.contains('Awaiting Capture')
    cy.contains('Prof Helium Admin')
    cy.contains('Confirm Capturing')
    cy.contains('Confirm Capturing').click()
    cy.reload()
  
  })

    it('Submit Results',() =>{
  
    
    cy.visit('/imaging-orders?mode=by-orders')
    cy.wait(500)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI')
    cy.contains('Awaiting Capture')
    cy.get('[data-placeholder="Enter results for this test here"]').type('all clear')
    const filepath = 'registration-image.png'

    cy.get('[data-cy=FileUploader__input]').attachFile(filepath)

    cy.contains('Submit Result')
    cy.contains('Submit Result').click()
    cy.reload()
  
  })

    it('Approve Results',() =>{
  

    cy.visit('/imaging-orders?mode=by-orders')
    cy.wait(500)
    cy.get('[data-cy="imaging-order-header"]').first().click()
    cy.contains('Breast MRI')
    cy.contains('Awaiting Approval')
    // cy.get('[data-placeholder="Enter results for this test here"]').type('all clear')
    cy.contains('Approve Results')
    cy.contains('Approve Results').click()
    cy.reload()
  
  })
})


// describe('Imaging Orders',()=>{

//   beforeEach(() => {
//       cy.login()
//     })
//   it('Reject Capturing',() =>{

//   cy.visit('/imaging-orders?mode=by-orders')
//   cy.wait(500)
//   cy.get('[data-cy="imaging-order-header"]').first().click()
//   cy.contains('Breast MRI')
//   cy.contains('Awaiting Capturing')
//   cy.contains('Prof Helium Admin')
//   cy.contains('Confirm Capturing')
//   cy.contains('Report Error')
//   cy.contains('Report Error').click()
//   cy.get('[placeholder="Describe Issue"]').type('error')
//   cy.contains('Confirm').click()
//   cy.reload()

//   })

// })

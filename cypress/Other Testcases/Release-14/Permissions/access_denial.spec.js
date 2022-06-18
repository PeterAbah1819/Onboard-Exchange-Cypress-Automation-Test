describe('Permissions',()=>{
  beforeEach(() => {
    cy.login()
  })

  // it('Remove Permission',() =>{
  //   cy.contains('Staff').click()
  //   cy.url().should('include', 'staff');
  //   cy.get('.hidden-xs-max > :nth-child(1)').trigger('mouseover')
  //   cy.contains('Edit Staff Member').click({force: true})
  //   cy.contains('Approving Imaging Results').scrollIntoView()
  //   cy.get('[name="doctor[permit_attributes][lab_orders]"]').first().click({multiple: true,force:true})
  //   cy.get('[name="doctor[permit_attributes][imaging_orders]"]').first().click({multiple: true,force:true})
  
  // })

  it('Take Specimen',() =>{
  
    
    cy.visit('/lab-orders?mode=by-orders')
    cy.get('.toast-message').contains('You do not have access to that. Contact your hospital admin.')
    
  
  })

  it('Confirm Capture',() =>{
  
    cy.visit('/imaging-orders?mode=by-orders')
    cy.get('.toast-message').contains('You do not have access to that. Contact your hospital admin.')
    
  
  })

//   it('Investigation triage',()=>{

//     cy.patientTriage('Auto_Test')
//     cy.contains('Clinical Investigations').click()
//     cy.get('.LabTestsSelectInfinite__container').first().click().type('Breast MRI')
//     cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
//     cy.get('.LabTestsSelectInfinite__container').first().click().type('17-OH Progesterone')
//     cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
//     cy.get('.form-buttons').contains('Submit').click()
// })

it('Confrim Lab from Folder',()=>{
        
  cy.selectPatient('Auto_Test')
  cy.contains('Clinical Investigations')
  cy.contains('Breast MRI')
  cy.get('.FeedEntryHeader__status-label').contains('Awaiting Specimen')
  cy.contains('Confirm Capturing').should('have.attr','disabled','disabled')
})

it('Confirm Scan from Folder',()=>{
        
  cy.selectPatient('Auto_Test')
  cy.contains('Clinical Investigations')
  cy.contains('17-OH Progesterone')
  cy.get('.FeedEntryHeader__status-label').contains('Awaiting Specimen')
  cy.contains('Take Specimen').should('have.attr','disabled','disabled')
})

})
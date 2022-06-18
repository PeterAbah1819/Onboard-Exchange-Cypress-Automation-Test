
// describe('Appointments',()=>{
//     it('To Month',() =>{
  
//     cy.login()
//     cy.visit('/appointments')
//   // cy.findByText('+ Setup New Appointment')
  
  
  
//   cy.contains('Month').click()
// //   cy.get('.subheader-splitted > :nth-child(1) > .hidden-xmd-max').click()
  
//     // cy.get('.PersonSelectWithSearchInfinite__caret').last().click()
//     // cy.get('[data-cy="person-select-search-value"]').first().click()
  
//     // cy.get('datetimepicker.ng-isolate-scope > .field').first().click()

//   })
// })

// describe('Appointments',()=>{
//     it('To year/day',() =>{
  
//     cy.login()
//     cy.visit('/appointments')
//   // cy.findByText('+ Setup New Appointment')
  

//   cy.contains('Year').click()
//   cy.contains('Day').click()

//   })
// })


// describe('Appointments',()=>{
//     it('To List',() =>{
  
//     cy.login()
//     cy.visit('/appointments')
//   // cy.findByText('+ Setup New Appointment')
  

//   cy.contains('List').click()
//   cy.contains('By Reason').click()
//   cy.contains('Follow-Up').click()
//   cy.contains('Apply').click()
//   })
// })

// describe('Appointments',()=>{
//     it('Facility calender',() =>{
  
//     cy.login()
//     cy.visit('/appointments')
//   // cy.findByText('+ Setup New Appointment')
  
//   cy.contains('Facility Calendar').click()
//   cy.contains('List').click()
//   cy.contains('By Reason').click()
  
//   cy.contains('Follow-Up').click()
//   cy.contains('Apply').click()
//   cy.contains('By Doctor').click()
//   cy.get('.ico-tick').first().click()
//   cy.contains('Apply').click()
//   })
// })


describe('Appointments',()=>{
    it('Search',() =>{
  
    cy.login()
    cy.visit('/appointments')
  // cy.findByText('+ Setup New Appointment')
    cy.get('.icon-home_search').type('Femi').click()
    cy.contains('List').click()
  
  })
})
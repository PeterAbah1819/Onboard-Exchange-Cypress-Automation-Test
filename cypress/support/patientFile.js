Cypress.Commands.add('FilterEncounter', function()
{
    cy.selectPatient()
    cy.get('.Feed__filters-radios-inner > .Feed__filter-encounter-notes > label > .Feed__filter-label').click({force:true})


})

Cypress.Commands.add('FilterInvestigation', function()
{
    cy.selectPatient()
    cy.get('.Feed__filter-labs > label > .Feed__filter-label').click()
    cy.get('.Feed__filters-radios > :nth-child(2) > label > .Feed__filter-label').click({force:true})

})

Cypress.Commands.add('FilterVital', () => {

    //it clicks on identified Patient NAme
    cy.selectPatient()

    //it filters patient records by Vitals (Graphical view)
    cy.get('.Feed__filter-vitals > label > .Feed__filter-label').click()

    //to view by height
    cy.get('.filter-height > label > .FeedVitalsSummary__filter-label').click()

    //to view by Blood Pressure
    cy.get('.filter-bloodPressure > label > .FeedVitalsSummary__filter-label').click()

    //to view by Body temperature
    cy.get('.filter-bodyTemperature > label > .FeedVitalsSummary__filter-label').click()

     //to view by Heart rate
     cy.get('.filter-pulseRate > label > .FeedVitalsSummary__filter-label').click()

    //click to view vitals as chart
    cy.get('[ng-click="vm.toggleType()"]').click()

    //clicks on hide vitals button
    cy.get('[ng-click="vm.toggle()"]').click()

})

Cypress.Commands.add('FilterReceipts', () => {

    cy.selectPatient()

    cy.get('.Feed__filter-bills > label > .Feed__filter-label').click()

})

Cypress.Commands.add('FilterLab', () => {

    cy.selectPatient()

    cy.get('.Feed__filter-labs > label > .Feed__filter-label').click()

})
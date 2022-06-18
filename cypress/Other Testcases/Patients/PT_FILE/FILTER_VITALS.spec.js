describe('Filter By VITALS in PT File', () => {

    it('Filter by VITALS', () => {

        cy.login()

        //it clicks on identified Patient NAme
        cy.selectPatient()

        //it filters patient records by Vitals (Graphical view)
        cy.get('[data-cy="PatientFeedFilters__filter vitals"] > .PatientFeedFilters__filter-icon-container > .PatientFeedFilters__filter-icon').click()

        //to view by weight
        cy.get('.filter-weight > label > .FeedVitalsSummary__filter-label').click()

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
})
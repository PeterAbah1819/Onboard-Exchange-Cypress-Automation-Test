describe('Staff Activity Log', () => {

    it('Staff Activity Log', () => {

        cy.login(),

        //it clicks on User Login Avatar
        cy.get('[class="NavHeader__doctor-name ng-binding ng-scope"]').click()

        //it clicks on User Activity Logs
        cy.get('.NavHeader__dropdown > .ng-isolate-scope > .NavMenu__main-container > [ui-sref="activityLog"]')
        .click()

         //to view by Encounter Notes
         //cy.get('class="ActivityLog__filter-label ng-binding"').click()

         //to view by Lab
         //cy.get('').click()
 
         //to view by Drugs
         //cy.get('').click()
 
          //to view by Vitals
          //cy.get('').click()
 
         //click to view Receipts
         //cy.get('[]').click()
 
         //clicks on Other 
         //cy.get('[]').click()
    })
})
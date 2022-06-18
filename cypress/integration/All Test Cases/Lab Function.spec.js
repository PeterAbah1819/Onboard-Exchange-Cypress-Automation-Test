describe('Lab Suite', function()
{
    it('Submit Test Result from Patient File', function()
    {
        cy.login()

        //Open patient folder
        //Get Test patient
         cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
         cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        //Submit a new entry - clinical investigation
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry]').click().wait(1000)
        //click the Test result
        cy.get('.NewEntryModal__item__results').click()

        cy.intercept({method: 'POST',url: 'api/lab/tests',}).as('apiCheck')



        //Search for test
        cy.get('.LabTestsSelectInfinite__search').click().type('Malaria')
        cy.get('[class="LabTestsSelectInfinite__item"]').as('lab_test')
        cy.get('@lab_test').should('be.visible').first()
        cy.get(':nth-child(2) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
        //Input sample number
        cy.get(':nth-child(3) > .field').click().type('Cy101')
        //Add collection time
        cy.get(':nth-child(2) > datetimepicker.ng-isolate-scope > .field').click()
        cy.get('[class="btn ng-binding ng-scope btn-sm btn-default"]').first().click().wait(200)
        cy.get('[class="btn ng-binding ng-scope btn-sm btn-default"]').first().click()
        //cy.get('[class="btn ng-binding ng-scope btn-sm btn-default"]').first().click()
        //Additional comment
        cy.get('[class="ta-scroll-window ng-scope ta-text ta-editor form-control"]').first().click().type('Cypress Tester is submitting this Malaria investigation result from Patient file')
        //input result
        cy.get('[class="ta-scroll-window ng-scope ta-text ta-editor form-control"]').last().click().type('Seen ++')
        //Notify patient
        cy.get('.Checkbox__label-container').click()
        //Submit result
        cy.get('.submit-btn').last().click()

        


        
       
    
    })

    it('Search Orders', function()
    {
        cy.login()
        //View lab
        cy.get('[ng-href="/lab-orders?mode=by-orders"]').click().wait(1000)
        //Search orders
        cy.get('#HeaderSearch').type('Malaria').click().wait(2000)
    })


    it('Submit Test Result from Lab Module', function()
    {
        cy.login()
        //Open a patient's folder
        //Get Test patient
         cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
         cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)
        //click submit new entry button
        cy.get('[data-cy=NavHeader__submit-new-entry]').click().wait(1000)
        //click the clinical investigation entry
        cy.get('.NewEntryModal__item__investigation').click()
        //click clinical investigation dropdown
        cy.get('.LabTestsSelectInfinite__search').click({force: true}).type('malaria', { delay: 50 }).wait(1000)
        //select an item from drop down
        cy.get(':nth-child(2) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').click()
        //input additional information
        cy.get('.ta-scroll-window').click().type('Cypress needs this investigation carried out', { delay: 50 })
         //click submit
        cy.get('.submit-btn').last().click()
            
        //View lab
        cy.get('[ng-href="/lab-orders?mode=by-orders"]').click()
        //filter lab order by pending
        cy.get('.filter-undisbursed > label > .RadioContentFilter__item__label').click()
        //Expand desired patient
        cy.get('[class="LabOrder__expand-trigger-icon icon-dropdown2"]').first().click()
        //input sample No
        cy.get('.Grid-column-3 > .field').type(12809)
        //input test result
        //cy.get('[placeholder="Enter Results"]').click().type('positive')
        //submit result
        cy.get('.LabOrder__footer-right > .submit-btn').click()
    
    })


    it('Approve Test Result', function()
    {
        cy.login()
        //View lab
        cy.get('[ng-href="/lab-orders?mode=by-orders"]').click()
        //filter lab order by awaiting approval
        cy.get('.filter-awaiting_approval > label > .RadioContentFilter__item__label').click()
        //Search desired lab order
        //cy.get('#HeaderSearch').type('walk i').click()
        //Expand desired patient
        cy.get('[class="LabOrder__expand-trigger-icon icon-dropdown2"]').first().click()
        //input test result
        //cy.get('[placeholder="Enter Results"]').click().type('positive')
        //submit result
        cy.get('.LabOrder__footer-right > .submit-btn').first().click()
    
    })


    it('View Lab Orders by Category', function()
    {
        cy.login()
        //View lab
        cy.get('[ng-href="/lab-orders?mode=by-orders"]').click()
        //view lab order by categories
        cy.get('.LabOrders__content-header__right > .submit-btn').click()

    })


    it('Filter Lab Orders by Status', function()
    {
        cy.login()
        //View lab
        cy.get('[ng-href="/lab-orders?mode=by-orders"]').click()
        //filter lab order by pending
        cy.get('.filter-undisbursed > label > .RadioContentFilter__item__label').click()
        //filter lab order by awaiting approval
        cy.get('.filter-awaiting_approval > label > .RadioContentFilter__item__label').click()
        //filter lab order by approved
        cy.get('.filter-completed > label').click()
        //filter lab order by discarded
        cy.get('.filter-discarded > label > .RadioContentFilter__item__label').click()
    })


    it('Clear All Pending Orders', function()
    {
        cy.login()
        //View lab
        cy.get('[ng-href="/lab-orders?mode=by-orders"]').click()
        //clear all pending orders
        cy.get('.LabOrders__content-header__counter__clear-all').click()
    })

})
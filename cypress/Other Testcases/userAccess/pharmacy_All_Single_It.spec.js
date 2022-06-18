describe('Pharmacy', function()
{
    beforeEach('login', function()
    {
        cy.login()
    })

    it('Pharmacy Module', function()
    {
        //View pharmacy
        cy.get('[ng-href="/prescription-orders"] > .NavSidebar__menu-option-label').click()
        
        
        //Expand Prescription order
        cy.get('.subheader-splitted > :nth-child(1) > .header-nav-tabs > .active').click({force:true})
         
 
         
        // Filter by unbilled prescribed items
        // cy.get('.filter-unbilled > label > .RadioContentFilter__item__label').click()
        // //Filter by unbisbursed prescribed items
        // cy.get('.filter-undisbursed > label > .RadioContentFilter__item__label').click() 
        // //Filter by completed prescibed items
        // cy.get('.filter-completed > label > .RadioContentFilter__item__label').click()
        // //Filter by discarded prescribed items
        // cy.get('.filter-discarded > label > .RadioContentFilter__item__label').click()
        
        
        
      //choose pharmacy
    //   cy.get('.ui-select-match-text').click()
    //   cy.get('#ui-select-choices-row-0-0 > .ui-select-choices-row-inner').click()
     //Manage inventory
    //  cy.get('.subheader-splitted > :nth-child(1) > .header-nav-tabs > [ui-sref="pharmacyInventory"]').click()
    
    
        //Select a prescription
        cy.contains('Expand').first().click()
        //Dropdown for drugs
        cy.get('.caret').click()
        //select a drug #first
        cy.get('.ui-select-choices-row-inner').first().click()
        //add quantity
        cy.get('.Grid-column-5 > .field').type('5')
        //Bill
        cy.get('.PrescriptionOrder__submit-btn').click()

        //Select a prescription
        cy.reload()
        cy.contains('Expand').first().click()
        //Disburse prescription
        cy.get('.PrescriptionOrder__submit-btn').click()

     //load more items in inventory
    //  cy.contains('Load More')
    //  cy.get('.LoadMoreButton__label').click()  


    })

})
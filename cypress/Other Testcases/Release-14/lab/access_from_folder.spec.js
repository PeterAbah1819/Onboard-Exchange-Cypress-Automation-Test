describe('Investigations',()=>{

    beforeEach(() => {
        cy.login()
      })
    it('Investigation triage',()=>{

        cy.patientTriage('Auto_Test')
        cy.contains('Clinical Investigations').click()
        // cy.wait(500)
        cy.get('.LabTestsSelectInfinite__container').first().click().type('17-OH Progesterone',{delay:20})
        // cy.get(':nth-child(1) > .LabTestsSelectInfinite__item > [ng-bind-html="item.attributes.name | highlight: vm.search"]').first().click()
        cy.get('[style=""] > .LabTestsSelectInfinite__item').click({force:true})
        cy.contains('This clinical investigation was requested within the last 7 days. Do you still want to request it?')
        cy.get('.form-buttons').contains('Submit').click()
        cy.reload()

    })

    it('Check Requested test',()=>{
        
        cy.selectPatient('Auto_Test')
        cy.contains('Clinical Investigations')
        cy.contains('17-OH Progesterone')
        cy.get('.FeedEntryHeader__status-label').contains('Awaiting Specimen')
        cy.contains('Take Specimen').click()
    })
})
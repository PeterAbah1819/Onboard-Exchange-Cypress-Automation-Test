describe('Upload Display Picture', () => {
    it('Upload PT Display Picture', () => {
        
        cy.login(),

    it('search for Patient')
        cy.get('[class="HeaderSearch__search-field"]').click()
        .type('idoma'),

    it('Click on Patient folder')
        cy.get('.Patients__list > :nth-child(3)').click()
        
        //cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        //.click()

    it('Click on DP')
        cy.get('.PatientDetailsBox__box-header > .PatientDetailsBox__avatar > .ng-isolate-scope > .AttachmentsDropzone__avatar-container > .AttachmentsDropzone__avatar__edit-icon-container').click(),

        cy.wait()

    it('click on uplooad btn')
        cy.get('[ng-click="vm.upload()"]').click()
    })
})

describe('Procedures', () => {
    // const date = new Date()
    beforeEach('Login',()=>{
        cy.login()
        cy.procedures()
    })


    

    it('Add Procedure', ()=>{


        cy.contains('Add new Procedure').click()

        // cy.route('**/api/library/surgical_procedure').as('prmodal')
        // cy.wait('@prmodal').its('status')

        cy.get('.AlmightyPatient__label > .multiselect > .multiselect__tags').click({force: true}).get('.AlmightyPatient__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(1) > .multiselect__option > span').first({force: true}).click({force: true})
        // cy

        cy.get(':nth-child(2) > .AlmightyDataLibrary__label > .multiselect > .multiselect__tags').click({force: true})
        cy.get(':nth-child(2) > .AlmightyDataLibrary__label > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option > span').click({force: true})

        cy.contains('Enter Diagnosis').click({force: true}).get('li').first().click()
        // cy

        cy.get(':nth-child(3) > .AlmightyDataLibrary__label > .multiselect > .multiselect__tags').click({force: true}).contains('Helium Admin').click({force: true})
        // cy

        cy.contains('Enter-reason').click().type('Test')
        cy.contains('Create').click({force: true})

    })

    it('Add Note', ()=>{
        cy.contains('Started').click()

        cy.contains('Select Category').click()
        cy.get('Pre-op').click().type('test')

        cy.contains('Select Category').click()
        cy.get('Post-op').click().type('test')

        cy.contains('Enter your notes here').type('Test')
        cy.contains('Add Note').click()


    })

    it('Complete Procedure',()=>{

        cy.contains('Select Category').click()
        cy.get('Procedure-Note').click().type('test')

        cy.contains('Complete Procedure').click()
    })
    
})

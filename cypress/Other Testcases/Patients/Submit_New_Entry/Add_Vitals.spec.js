describe('Add Vitals', () => {

    it('Add Vitals', () => {
        
        cy.login()

        //it clicks on the Patient
        cy.get('[class="TagsList__patient-name ng-binding ng-scope"]')
        .contains('Caleb').click()

        //it clicks on submit new entry
        cy.get('.NavHeader__submit-link').click()

        //it clicks on Vitals
        cy.get('.NewEntryModal__item__vitals').click()

        //it clicks on Weight and types in data
        cy.get(':nth-child(4) > :nth-child(1) > .EntryFormVitals__input-container > .field')
        .click().type('75')

        //it clicks on the height and inputs data
        cy.get(':nth-child(4) > :nth-child(2) > .EntryFormVitals__input-container > .field')
        .click().type('163')

        //it clicks on the Blood pressure and inputs data
        cy.get(':nth-child(4) > :nth-child(3) > .EntryFormVitals__input-container > .field')
        .click().type('100/70')

        cy.get(':nth-child(4) > :nth-child(4) > .EntryFormVitals__input-container > .field')
        .click().type('32.5')

        cy.get(':nth-child(5) > :nth-child(1) > .EntryFormVitals__input-container > .field')
        .click().type('22.5')

        cy.get(':nth-child(5) > :nth-child(2) > .EntryFormVitals__input-container > .field')
        .click().type('22')

        cy.get(':nth-child(5) > :nth-child(3) > .EntryFormVitals__input-container > .field')
        .click().type('7')

        cy.get(':nth-child(5) > :nth-child(4) > .EntryFormVitals__input-container > .field')
        .click().type('23')

        cy.get(':nth-child(6) > :nth-child(1) > .EntryFormVitals__input-container > .field')
        .click().type('10')

        cy.get(':nth-child(6) > :nth-child(2) > .EntryFormVitals__input-container > .field')
        .click().type('9')

        cy.get('.ta-scroll-window')
        .click().type('This is a test to Add Vitals')

        cy.get('.submit-btn').click()


    })
})
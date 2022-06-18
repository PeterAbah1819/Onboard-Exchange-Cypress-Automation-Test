describe('Task', () => {
    beforeEach('',()=>{
        cy.login()
    })
    it('Create & Complete task',()=>{
        //Get Test patient
        cy.get('#HeaderSearchId').click().type('Testing').wait(1000)
        cy.get('.ng-enter > .Patients__list > [data-cy="patients-list-patient checked-in"]').click().wait(500)

        cy.get('.AddTaskButton').click()
        cy.get('.AlmightyInput__field').type('Feed')
        cy.get('.ClinicalTasksForm__footer > .submit-btn').click()
        cy.contains('Expand').click()
        cy.get('.AlmightyTextarea__field').type('done')
        cy.get('.ListItemIncompletedForm__actions > div > .submit-btn').click()
        cy.get('.Tabs__navigation-list > :nth-child(2)').click().wait(1000)
    })
})

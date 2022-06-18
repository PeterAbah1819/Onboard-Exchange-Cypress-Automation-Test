describe('Record', function()
{

   Cypress._.times(200, (k) => {
      it('Add ECN', function(){
      cy.login()

      //cy.get('div.NavSidebar__menu-option').click()
      //cy.get('.SearchModal__field').click().type('olorunfemi')
      //cy.get('.SearchModal__patient-info').as('doctor')
      //cy.get('@doctor').should('be.visible').first().click()


       //Open a patient's folder
       cy.get('.TagsList__tags').first().click().wait(3000)

            
       //Submit an entry-Medical Encounter Note
       cy.get('[data-cy=NavHeader__submit-new-entry] > .hidden-xs-max').click()
       cy.contains('Medical Encounter Note').click({force: true})
       //select general practice category
       cy.get('.EntryFormEncounter__form-selector-category').first().click({force: true}).wait(500)
       //select initial visit note
       cy.get('.EntryFormEncounter__form-selector-form')
       cy.get('.EntryFormEncounter__form-selector-form').first().click().wait(500)
       //confirm selection
       cy.get('.submit-btn').last().click().wait(500)


       cy.get('[class="multiselect__spinner"]').first().click({force: true})
       cy.get('[class="AlmightyDropdown__option"]').first().click({force: true})
       //cy.get('.p').first().click().type('This is a test')

       //select diagnosis
       cy.get('[class="multiselect__tags-wrap"]').first().click({force: true})

       cy.get('[class="AlmightyDropdown__option"]').first().click({force: true})

       cy.get('.GuiFieldDiagnosis__item > .AlmightyDropdown__label > .multiselect > .multiselect__tags')
       cy.get('[class="AlmightyDropdown__option"]').first().click({force: true})


       //select type
       //cy.get('.GuiFieldDiagnosis__item > .AlmightyDropdown__label > .multiselect > .multiselect__tags').click()
       cy.contains('Differential').first().click()
       //cy.get('[for="diagnosis:vzbxv0jdue22qavfh_classify_Rz8xtMklnZQeNddUMIvt"] > .AlmightyRadio__group > :nth-child(1) > .AlmightyRadio__option-label > span').click()
       cy.get('[class="AlmightyRadio__option-label"]').first().click()
       cy.get('[class="AlmightyRadio__option-label"]').last().click()



        //Add investigation
       cy.get('[class="ico-feed ico-feed__investigation ico-included-forms"]').last().click()

        //click clinical investigation dropdown
        cy.get('.LabTestsSelectInfinite__search').click({force: true}).type('malaria').wait(500)
        //select an item from drop down
        cy.get('.LabTestsSelectInfinite__item').first().click()
        //input additional information
        //cy.get('.RichTextInput').last().click().type('Cypress request investigation')
        

       
      
       


       //Add prescription
      cy.get('[class="ico-feed ico-feed__prescription ico-included-forms"]').last().click().wait(500)
      //select pharmacy
      cy.get('.Grid-column-8 > .field-ui-singleselect > .ui-select-match > .btn-default').click()
      cy.get('.ui-select-choices-row-inner').first().click()
      //select medication
      cy.get('.LibraryDataSelectInfinite__button').last().click()
      cy.get('.LibraryDataSelectInfinite__item > .ng-binding').first().click()
      //add strengh
      cy.get('.ng-scope > .field').last().click().type('10 mg')
      //input dose
      cy.get('.Grid-column-2 > .field').click().type('1 vail')
       //cy.get('.Grid-column-7 > .field').click().type('Cypress Notes')

      //Additional note
      //cy.get('.TextareaWithIncludes__textarea').click().type('Cypress prescribed with Encounter note')

      cy.get('.submit-btn').last().click().wait(500)

       

      
       



      // cy.get('div.NavSidebar__menu-option').then('click')
      //cy.get('@post').should('have.property', 'status', 201)

      //  cy.intercept({
      //    method: "GET",
      //    url: "http://my-api.biz/api/**",
      //  }).as("dataGetFirst");
         
   // cy.wait("patients");

      })

     

 
})




}) 


   //Cypress._.times(100, (k) => {
     // it(`typing hello ${k + 1} / 100`, () => {
     // cy.visit('/')
     // cy.get('#enter-text').type('hello').should('have.value', 'hello')
     // })
  // })
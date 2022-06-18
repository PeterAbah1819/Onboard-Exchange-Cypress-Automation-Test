

describe('Patient Folder',()=>{
  it('edit patient',()=>{
    cy.login()
    cy.get('[class="Patients__content-body fade-in-out ng-scope"]')
    .first()
    .parent()
    .click()
    cy.contains('Open Comprehensive Medical History').click()
    cy.get('.ComprehensiveFormRow__row').children().should('has.class','Grid-column-6')
    // cy.get('.Grid-column-6 .ComprehensiveFormRow__add-btn').first().parent().click({force:true})
    cy.get('.Grid-column-6 .ComprehensiveFormRow__add-btn').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        // alert(index)
        if (index === 0) {
            cy.contains('Height').get($el).click({force:true})
            cy.get('.field').type('100',{force:true})
            cy.get('.submit-btn').click({force:true},()=>{
                setTimeout(() => {
                    
                }, 500);
            })
        }
        // cy.contains('Height').get($el).click({force:true})
        // cy.get('.field').type('100',{force:true})
        // cy.get('.submit-btn').click({force:true})
        if (index === 1) {
            // alert('1')
            cy.clock()
            cy.tick(1000)
            console.log('test',$el)
            cy.get($el).contains('+ Add').click({force:true})
            cy.get('.field').type('Aids',{force:true})
            cy.get('.submit-btn').click({force:true})
        }
        
        if (index === 2) {
            
        cy.clock().tick(100)
         cy.get($el).contains('+ Add').click({force:true})
        cy.get('.ui-select-search').type('A+',{force:true})
        cy.get('.submit-btn').click({force:true})   
        }
        
      
        // } 
    })
    
    // .contains('Height').click({force:true})
    //         cy.get('.field').type('100',{force:true})
    //         cy.get('.submit-btn').click({force:true})
  })  
})


describe('Folder', () => {
    beforeEach('',()=>{
                cy.login()
            })
            it('Filter lab',()=>{
              cy.FilterLab()  
            })
        
            it('Filter bill',()=>{
                cy.FilterReciepts()  
              })
        
              it('Filter drugs',()=>{
                cy.FilterDrugs()  
              })
        
              it('Filter vitals',()=>{
                cy.FilterVitals()  
              })
            
              it('Forward Files',()=>{
                cy.ForwardFolder()
                 
                      
              })
        
              it('Endorse Entry ',()=>{
                cy.EndorseEntry()  
              })
        
              it('Print Entry ',()=>{
                cy.PrintEntry()  
              })
        
              it('Filter Immunizations',()=>{
                cy.FilterImmun()  
              })
        
              it('Filter Referals',()=>{
                cy.FilterRefs()  
              })
        
              it('Filter Uploads',()=>{
                cy.Filteruploads()  
              })
        
              it('Filter Resultss',()=>{
                cy.FilterResults()  
              })
        
              it('Filter Uploads',()=>{
                cy.Filteruploads()  
              })
        
})

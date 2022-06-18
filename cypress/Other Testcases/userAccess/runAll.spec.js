describe('Registration',()=>{
    beforeEach(() => {
        cy.login()
      })
    // it('Register Principal',()=>{
    //     cy.registerPrincipal()
    //     cy.reload()
    // })
    // it('Register Patient',()=>{
    //     cy.registerPatient()
    //     cy.reload()
    // })
    // it('Register Guest',()=>{
    //     cy.registerGuest()
    //     cy.reload()
    // })



//     it('Register Spouse',()=>{
//         cy.registerSpouse()
//         cy.reload()
//     })

//     it('Register Child',()=>{
//         cy.registerChild()
//         cy.reload()
//     })

    

//     it('Register Spouse',()=>{
//         cy.registerSpouse()
//     })

// //     // it('Create Appointment',()=>{
// //     //     cy.createAppointment()
// //     // })

// //     // it('Create Non Registered Appointment',()=>{
// //     //     cy.non_Reg_Appointment()
// //     // })
})

describe('Triage',()=>{
    beforeEach(() => {
        cy.login()

        })

    it('Laboratory Investigations',()=>{
        cy.Investigations()
    })

    it('Imaging Investigations',()=>{
        cy.Investigations()
    })

    it('Prescription',()=>{
        cy.Prescription()
        cy.reload()
    })

     it('Search',()=>{
        cy.Search()
        cy.reload()
    })

    it('Task',()=>{
        cy.task()
        cy.reload()
    })

    // it('Medical Note',()=>{
    //     cy.MedicalNotes()
    // })

    it('Vitals',()=>{
        cy.Vitals()
        cy.reload()
    })

    it('Immunization',()=>{
        cy.Immunization()
        cy.reload()
    })
    it('Pharmacy',()=>{
        cy.Pharmacy()
        cy.reload
    })

    it('Admission',()=>{

        cy.Admission()
    })

    it('Discharge',()=>{
        cy.Discharge()
    })
    it('Comment',()=>{
      cy.reload()
        cy.Comment()
    })

    it('Pharmacy',()=>{
      cy.reload
      cy.Pharmacy()
  })

})

describe('Lab Orders',()=>{
    beforeEach(() => {
        cy.reload()
        cy.login()
        
      })

    // it('Take Specimen', ()=>{
    //     cy.TakeSpecimen()
    // })

    // it('Receive Specimen', ()=>{
    //     cy.RecieveSpecimen()
    // })

    it('Submit Results', ()=>{
        cy.SubmitResults()
    })

    // it('Approve Results', ()=>{
    //     cy.ApproveResults()
    // })


    
})

// describe('Image Orders',()=>{
//         beforeEach(() => {
//         cy.login()
//       })

//     it('Take Specimen', ()=>{
//         cy.ConfirmImageCapture()
//     })

//     it('Receive Specimen', ()=>{
//         cy.SubmitImageResults()
//     })


//     it('Approve Results', ()=>{
//         cy.ApproveImageResults()
//     })
// })

// describe('Reject Image Order', () => {
//     beforeEach(()=>{
//         cy.login()
//     })

//     it('Reject Image',()=>{
//         cy.RejectImage()
//     })

//     it('Reject Lab',()=>{
//         cy.RejectLab()
//     })
// })

describe('Appointments', () => {
        beforeEach(()=>{
            cy.login()
        })
    
        it('createAppointment',()=>{
            cy.createAppointment()
            cy.reload()
        })
    
        it('Non Registered Appointment',()=>{
            cy.non_Reg_Appointment()
            cy.reload()
        })

        it('Non Cancel Appointment',()=>{
            cy.CancelAppointment()
            cy.reload()
        })
})

describe('Add Bill', () => {
    beforeEach(()=>{
        cy.login()
    })

    it('Add/Clear Bill',()=>{
        cy.Add_Clear_Bill()
    })

    it('Deposit',()=>{
        cy.Deposit()
    })

    it('Give Discount',()=>{
        cy.Discount()
    })

    it('Settle Bill',()=>{
        cy.SettleBill()
    })


})

describe('Tasks', () => {
    beforeEach(()=>{
        cy.login()
    })
    it('Create Task',()=>{
        cy.task()
    })
})



describe('Setting', () => {
    beforeEach('',()=>{
        cy.login()
    })
    it('Create Room', ()=>{
        cy.CreateRoom()
    })

    it('Create Tag', ()=>{
        cy.Createtag()
    })

    it('DeleteTag', ()=>{
        cy.DeleteTag()
    })

    it('Insurance Toggle', ()=>{
        cy.InsuranceToggle()
    })

    it('Pharmacy Toggle',()=>{
        cy.PharmacyToggle()
    })

    it('Alert Toggle', ()=>{
        cy.AlertToggle()
    })

})

describe('Patient Folder', () => {
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

})


//  describe('Filter', () => {
//                   beforeEach('',()=>{
//                       cy.login()
//                   })
//                   it('Filter Encounter', ()=>{
//                       cy.FilterEncounter()
//                   })
              
//                   it('Filter Investigation', ()=>{
//                       cy.FilterInvestigation()
//                   })
              
//                   it('Filter Vital', ()=>{
//                       cy.FilterVital()
//                   })
              
//                   it('Filter Receipts', ()=>{
//                       cy.FilterReceipts()
//                   })
              
//                   it('Filter Lab',()=>{
//                       cy.FilterLab()
//                   })
//       })

    
describe('ANC ', () => {
    beforeEach('',()=>{
        cy.login()
    })

    it('Open',()=>{
      cy.ANC()  
    })
    it('Close',()=>{
        cy.CloseANC()  
      })
})

describe('Reports', () => {
   beforeEach('',()=>{
     cy.login()
   }) 
   it('',()=>{
     cy.Reports()
   })
})


// describe('Filter', () => {
//         beforeEach('',()=>{
//             cy.login()
//         })
//         it('Filter Encounter', ()=>{
//             cy.FilterEncounter()
//         })
    
//         it('Filter Investigation', ()=>{
//             cy.FilterInvestigation()
//         })
    
//         it('Filter Vital', ()=>{
//             cy.FilterVital()
//         })
    
//         it('Filter Receipts', ()=>{
//             cy.FilterReceipts()
//         })
    
//         it('Filter Lab',()=>{
//             cy.FilterLab()
//         })
    

    
//     })


// describe('Requests', () => {
//     beforeEach('',()=>{
//         cy.login()
//     })

//     it('PackageRequest',()=>{
//         cy.PackageRequest()
//     })

//     it('Sick leave < 3',()=>{
//         cy.SickLeaveRequestMore3()
//     })

//     it('Sick Leave > 3',()=>{
//         cy.SickLeaveRequestLess3()
//     })

//     it('Approve Sick Leave',()=>{
//         cy.AprroveSickLeave()
//     })

//     it('Reject Leave',()=>{
//         cy.TakeSpecimen()
//         cy.RecieveSpecimen()
//         cy.SubmitResults()
//         cy.ApproveResults()
//         cy.RejectLeave()
//     })

//     it('CancelLeave',()=>{
//         cy.CancelLeave()
//     })
    
//     it('View Approved',()=>{
//         cy.ViewApprovedRequest()
//     })

//     it('',()=>{
//         cy.ViewDiscardedRequest()
//     })

//     it('View Patient From Request',()=>{
//         cy.ViewPatientFromRequest()
//     })
// })

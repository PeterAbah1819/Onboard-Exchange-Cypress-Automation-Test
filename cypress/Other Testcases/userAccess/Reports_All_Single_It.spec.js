describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('Reports Module', function()
    {
        //View Appointments Reports
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
     
        //Download List as CSV
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.get('.icon-download-alt').click()
        
        //Appointments Rports Filter-Type
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.get(':nth-child(1) > .ContentFilter__wrapper > .ContentFilter__opener').click()
        cy.get(':nth-child(3) > .Checkbox__label-container > .ico-tick').click()
        cy.get('.submit-btn').click()
        //cy.get('.ContentFilter__popup__header > .icon-close').click()

        //Appointments Rports Filter-Doctor/Team
        cy.get(':nth-child(2) > .ContentFilter__wrapper > .ContentFilter__opener').click()
        cy.get('.ico-tick').first().click()
        cy.get('.submit-btn').click()

        //Appointments Rports Filter-Clinic
        // cy.get(':nth-child(3) > .ContentFilter__wrapper > .ContentFilter__opener ').click()
        // cy.get(':nth-child(2) > .Checkbox__label-container > .ico-tick').click()
        // cy.get('.submit-btn').click()

        //Appointments Rports Filter-Status
        // cy.get(':nth-child(4) > .ContentFilter__wrapper > .ContentFilter__opener').click()
        // cy.get(':nth-child(1) > .Checkbox__label-container > .ico-tick').click()
        // cy.get('.submit-btn').click()

        //Appointment Filter-Today
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Today"]').first().click({force:true})

        //Appointment Filter-Yesterday
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Yesterday"]').first().click({force:true})

        //Appointment Filter-This_Week
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Week"]').first().click({force:true})
    
        //Appointment Filter-Last_Week
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Week"]').first().click({force:true})
    
        //Appointment Filter-This_Month
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Month"]').first().click()
    
        //Appointment Filter-Last_Month
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Month"]').first().click({force:true})

        //Appointment Filter-This_Year
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Year"]').first().click({force:true})
    
        //Appointment Filter-Last_Year'
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Year"]').first().click({force:true})

        //Appointment Filter-Custom_Range
        //Not completed yet
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Custom Range"]').click()
        //cy.get(':nth-child(6) > .weekend.in-range').click()
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click()
        //cy.get('.applyBtn').click()

        //Appointment Filter-Date_All
        cy.get('.Daterange').click()
        cy.get('[data-range-key="All"]').first().click({force:true})

        //reloads page
        cy.reload()
    



        //View Reports Module
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
     
        //View In_Patients Reports
        cy.get('.ScrollableTabs__links > :nth-child(2)').click()
        
        //Download List as CSV
        cy.get('.CsvExport__link').click()

        //In Patients Filter-Date-Today
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Today"]').first().click({force:true})

        //In Patients Filter-Yesterday
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Yesterday"]').first().click({force:true})

        //In Patients Filter-This_Week
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Week"]').first().click({force:true})
    
        //In Patients Filter-Last_Week
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Week"]').first().click({force:true})
    
        //In Patients Filter-This_Month
        cy.get('.Daterange').click()
       cy.get('[data-range-key="This Month"]').first().click({force:true})
    
        //In Patients Filter-Last_Month
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Month"]').first().click({force:true})

        //In Patients Filter-This_Year
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Year"]').first().click({force:true})
    
        //In Patients Filter-Last_Year'
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Year"]').first().click({force:true})

        //In Patients Filter-Custom_Range
        //Not completed yet
        cy.get('.Daterange').click()
        //cy.get('[data-range-key="Custom Range"]').click()
        //cy.get(':nth-child(6) > .weekend.in-range').click()
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click()
        //cy.get('.applyBtn').click()

        //In Patients Filter-Date_All
        cy.get('.Daterange').click()
        cy.get('[data-range-key="All"]').first().click({force:true})

        //reloads page
        cy.reload()




        //View In Queues Reports
        cy.get('.ScrollableTabs__links > :nth-child(3)').click()

        //Download List as CSV
        cy.get('.CsvExport__link').click()

        //In Queues Filter-Date-Today
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Today"]').first().click({force:true})

        //In Queues Filter-Yesterday
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Yesterday"]').first().click({force:true})

        //In Queues Filter-This_Week
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Week"]').first().click({force:true})
    
        //In Queues Filter-Last_Week
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Week"]').first().click({force:true})
    
        //In Queues Filter-This_Month
        cy.get('.Daterange').click()
       cy.get('[data-range-key="This Month"]').first().click({force:true})
    
        //In Queues Filter-Last_Month
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Month"]').first().click({force:true})

        //In Queues Filter-This_Year
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Year"]').first().click({force:true})
    
        //In Queues Filter-Last_Year'
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Year"]').first().click({force:true})

        //In Queues Filter-Custom_Range
        //Not completed yet
        // cy.get('.Daterange').click()
        // cy.get('[data-range-key="Custom Range"]').first().click({force:true})
        // cy.get(':nth-child(6) > .weekend.in-range').click({force:true})
        // cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click({force:true})
        // cy.get('.applyBtn').click({force:true})

        //In Queues Filter-Date_All
        cy.get('.Daterange').click()
        cy.get('[data-range-key="All"]').first().click({force:true})

        //reloads page
        cy.reload()




        //View Mortality Reports
        cy.get('.ScrollableTabs__links > :nth-child(4)').click()

        //Download List as CSV
        cy.get('.CsvExport__link').click()
        
        //Mortality Filter-Today
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Today"]').first().click({force:true})

        //Mortality Filter-Yesterday
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Yesterday"]').first().click({force:true})

        //Mortality Filter-This_Week
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Week"]').first().click({force:true})
    
        //Mortality Filter-Last_Week
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Week"]').first().click({force:true})
    
        //Mortality Filter-This_Month
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Month"]').first().click({force:true})
    
        //Mortality Filter-Last_Month
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Month"]').first().click({force:true})

        //Mortality Filter-This_Year
        cy.get('.Daterange').click()
        //cy.get('[data-range-key="This Year"]').first().click({force:true})
    
        //Mortality Filter-Last_Year'
        cy.get('.Daterange').click()
        //cy.get('[data-range-key="Last Year"]').first().click({force:true})

        //Mortality Filter-Custom_Range
        //Not completed yet
        cy.get('.Daterange').click()
        //cy.get('[data-range-key="Custom Range"]').click()
        //cy.get(':nth-child(6) > .weekend.in-range').click()
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click()
        //cy.get('.applyBtn').click()

        //Mortality Filter-Date_All
        cy.get('.Daterange').click()
        //cy.get('[data-range-key="All"]').first().click({force:true})

        //reloads page
        cy.reload()





        //View Pharmacy Reports
        cy.get('.ScrollableTabs__links > :nth-child(5)').click()

        //Download Pharmacy Inventory Log CSV
        cy.get('.ReportsCommon__header > :nth-child(2) > :nth-child(1) > a').click()
        //cy.get(':nth-child(3) > .Daterange > .field').click(
        cy.get('.submit-btn').click()
        cy.get('.cancel-btn').click()

        //Download Pharmacy Stock In CSV
        cy.get(':nth-child(2) > :nth-child(2) > a').first().click({force: true})
        cy.contains('Download').click({force: true})
        // cy.get('.cancel-btn').click({force: true})

        //Download Pharmacy Stock Out CSV
        cy.get(':nth-child(2) > :nth-child(3) > a').click({force: true})
        cy.contains('Download').click({force: true})
        cy.get('.PharmacyLogModal__buttons > .cancel-btn').first().click({force: true})
        // cy.get('')

        //Download List as CSV
        cy.get('.CsvExport__link').click({force: true})

        //Pharmacy Filter-Today
        cy.get('.Daterange').first().click({force: true})
        cy.get('[data-range-key="Today"]').first().click({force:true})

        //Pharmacy Filter-Yesterday
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Yesterday"]').first().click({force:true})

        //Pharmacy Filter-This_Week
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Week"]').first().click({force:true})
    
        //Pharmacy Filter-Last_Week
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Week"]').first().click({force:true})
    
        //Pharmacy Filter-This_Month
        cy.get('.Daterange').click()
        cy.get('[data-range-key="This Month"]').first().click({force:true})
    
        //Pharmacy Filter-Last_Month
        cy.get('.Daterange').click()
        cy.get('[data-range-key="Last Month"]').first().click({force:true})

        //Pharmacy Filter-This_Year
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Year"]').first().click({force:true})
    
        //Pharmacy Filter-Last_Year
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Year"]').first().click({force:true})

        //Pharmacy Filter-Custom_Range
        //Not completed yet
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Custom Range"]').click()
        //cy.get(':nth-child(6) > .weekend.in-range').click()
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click()
        //cy.get('.applyBtn').click()

        //Pharmacy Filter-Date_All

cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="All"]').first().click({force:true})

        //reloads page
        cy.reload()



      
        //View Diagnosis Reports
        cy.get('.ScrollableTabs__links > :nth-child(6)').click()

         //Download List as CSV
         cy.get('.CsvExport__link').click()

        //Diagnosis Reports Filter-Age
        cy.get(':nth-child(1) > .ContentFilter__wrapper > .ContentFilter__opener').click()
        cy.get('.submit-btn').click()

        //Diagnosis Reports Filter-Gender
        cy.get(':nth-child(2) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        cy.get(':nth-child(2) > .Checkbox__label-container > .Checkbox__label').click({force: true})
        cy.get('.submit-btn').first().click({force:true})

        //Diagnosis Reports Filter-Patient_Tags
        // cy.get(':nth-child(3) > .ContentFilter__wrapper > .ContentFilter__opener ').click()
        // cy.get('.multiselect__select').click()
        // cy.get(':nth-child(2) > .multiselect__option').click()
        // cy.get('.multiselect__select').click()
        // cy.get(':nth-child(1) > .multiselect__option').click()
        // cy.get('.submit-btn').click()

        //Diagnosis Reports Filter-Diagnosis
        // cy.get(':nth-child(4) > .ContentFilter__wrapper > .ContentFilter__opener').click({delay:500})
        // cy.get(':nth-child(1) > .Checkbox__label-container > .ico-tick').click({delay:500})
        // cy.get(':nth-child(5) > .Checkbox__label-container > .ico-tick').click({delay:500})
        // cy.get(':nth-child(9) > .Checkbox__label-container > .ico-tick').click({delay:500})
        // cy.get(':nth-child(3) > .Checkbox__label-container > .ico-tick').click({delay:500})
        // cy.get('.submit-btn').click()

        //Diagnosis Reports Filter-Insurance
        cy.get(':nth-child(5) > .ContentFilter__wrapper > .ContentFilter__opener > .icon-ic_filter').click()
        cy.get('.ico-tick').first().click({force: true})
        cy.get('.submit-btn').first().click({force: true})

        //Diagnosis Filter-Today
  
  cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Today"]').click({force: true})

        //Diagnosis Filter-Yesterday
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Yesterday"]').click({force: true})

        //Diagnosis Filter-This_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Week"]').click({force: true})
    
        //Diagnosis Filter-Last_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Week"]').click({force: true})
    
        //Diagnosis Filter-This_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Month"]').click({force: true})
    
        //Diagnosis Filter-Last_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Month"]').click({force: true})

        //Diagnosis Filter-This_Year
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Year"]').click({force: true})
    
        //Diagnosis Filter-Last_Year'
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Year"]').first().click({force: true})

        //Diagnosis Filter-Custom_Range
        //Not completed yet
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Custom Range"]').click({force: true})
        //cy.get(':nth-child(6) > .weekend.in-range').click({force: true})
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click({force: true})
        //cy.get('.applyBtn').click({force: true})

        //Diagnosis Filter-Date_All
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="All"]').click({force: true})

        //reloads page
        cy.reload()



        //View Immunizations Reports
        cy.get('.ScrollableTabs__links > :nth-child(7)').click({force: true})

         //Download List as CSV
         cy.get('.CsvExport__link').click({force: true})

         //Immunization Reports filter-Patient_Name
         cy.get(':nth-child(1) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
         cy.get('.AlmightyInput__field').click({force: true}).type('Miracle', { delay: 100 })
         cy.get('.submit-btn').click({force: true})

         //Immunization Reports filter-Age
         cy.get(':nth-child(2) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
         cy.get('.submit-btn').first().click({force: true})

         //Immunization Reports filter-Gender
        //  cy.get(':nth-child(3) > .ContentFilter__wrapper > .ContentFilter__opener ').click({force: true})
        //  cy.get(':nth-child(2) > .Checkbox__label-container > .Checkbox__label').first().click({force: true})
        //  cy.get('.submit-btn').click({force: true})

         //Immunization Reports filter-Immunizations
         cy.get(':nth-child(4) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
         cy.get(':nth-child(1) > .Checkbox__label-container > .ico-tick').click({force: true})
         cy.get('.submit-btn').click({force: true})

         //Immunization Reports filter-Insurance
         cy.get(':nth-child(5) > .ContentFilter__wrapper > .ContentFilter__opener > .icon-ic_filter').click({force: true})
         cy.get('.ico-tick').click({force: true})
         cy.get('.submit-btn').click({force: true})

         //Immunization Filter-Toda
         cy.reload()
         
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Today"]').click({force: true})

        //Immunization Filter-Yesterday
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Yesterday"]').click({force: true})

        //Immunization Filter-This_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Week"]').click({force: true})
    
        //Immunization Filter-Last_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Week"]').click({force: true})
    
        //Immunization Filter-This_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Month"]').click({force: true})
    
        //Immunization Filter-Last_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Month"]').click({force: true})

        //Immunization Filter-This_Year
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Year"]').click({force: true})
    
        //Immunization Filter-Last_Year'
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Year"]').first().click({force: true})

        //Immunization Filter-Custom_Range
        //Not completed yet
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Custom Range"]').click({force: true})
        //cy.get(':nth-child(6) > .weekend.in-range').click({force: true})
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click({force: true})
        //cy.get('.applyBtn').click({force: true})

        //Immunization Filter-Date_All
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="All"]').click({force: true})

        //reloads page
        cy.reload()




        //View Registrations Reports
        cy.get('.ScrollableTabs__links > :nth-child(8)').click({force: true})

        //Download List as CSV
        cy.get('.CsvExport__link').click({force: true})

        //Registartions Reports Filter-Patient_Tags
        cy.get(':nth-child(1) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        cy.get('.multiselect__select').click({force: true})
        cy.get(':nth-child(2) > .multiselect__option').click({force: true})
        cy.get('.multiselect__select').click({force: true})
        cy.get(':nth-child(1) > .multiselect__option').click({force: true})
        cy.get('.submit-btn').click({force: true})

        //Registartions Reports filter-Insurance
        cy.get(':nth-child(2) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        cy.get('.ico-tick').first().click({force: true})
        cy.get('.submit-btn').click({force: true})

        //Registrations Filter-Today
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Today"]').click({force: true})

        //Registrations Filter-Yesterday
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Yesterday"]').click({force: true})

        //Registrations Filter-This_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Week"]').click({force: true})
    
        //Registrations Filter-Last_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Week"]').click({force: true})
    
        //Registrations Filter-This_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Month"]').click({force: true})
    
        //Registrations Filter-Last_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Month"]').click({force: true})

        //Registrations Filter-This_Year
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Year"]').click({force: true})
    
        //Registrations Filter-Last _Year'
        cy.reload()
       
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Year"]').first().click({force: true})

        //Registrations Filter-Custom_Range
        //Not completed yet
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Custom Range"]').click({force: true})
        //cy.get(':nth-child(6) > .weekend.in-range').click({force: true})
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click({force: true})
        //cy.get('.applyBtn').click({force: true})

        //Registrations Filter-Date_All
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="All"]').click({force: true})·

        //reloads page
        cy.reload()

       





        //View Lab Orders Reports
        cy.get('.ScrollableTabs__links > :nth-child(9)').click({force: true})

         //Download List as CSV
         cy.get('.CsvExport__link').click({force: true})

        //Lab Orders Reports Filter-Status
        cy.get(':nth-child(1) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        cy.get(':nth-child(6) > .Checkbox__label-container > .ico-tick').click({force: true})
        cy.get('.submit-btn').click({force: true})

        //Lab Orders Reports Filter-Test_Name
        cy.get(':nth-child(2) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        cy.get('.multiselect__select').click({force: true})
        cy.get(':nth-child(2) > .multiselect__option').click({force: true})
        cy.get('.multiselect__select').click({force: true})
        cy.get(':nth-child(1) > .multiselect__option').click({force: true})
        cy.get('.submit-btn').click({force: true})

        //Lab Orders Filter-Today
 
 cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Today"]').click({force: true})

        //Lab Orders Filter-Yesterday
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Yesterday"]').click({force: true})

        //Lab Orders Filter-This_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Week"]').click({force: true})
    
        //Lab Orders Filter-Last_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Week"]').click({force: true})
    
        //Lab Orders Filter-This_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Month"]').click({force: true})
    
        //Lab Orders Filter-Last_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Month"]').click({force: true})

        //Lab Orders Filter-This_Year
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Year"]').click({force: true})
    
        //Lab Orders Filter-Last_Year'
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Year"]').first().click({force: true})

        //Lab Orders Filter-Custom_Range
        //Not completed yet
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Custom Range"]').click({force: true})
        //cy.get(':nth-child(6) > .weekend.in-range').click({force: true})
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click({force: true})
        //cy.get('.applyBtn').click({force: true})

        //Lab Orders Filter-Date_All
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="All"]').click({force: true})

        //reloads page
        cy.reload()



        //View Imaging Reports
        cy.get('.ScrollableTabs__links > :nth-child(10)').click({force: true})

         //Download List as CSV
         cy.get('.CsvExport__link').click({force: true})

         //Imaging Reports Filter-Status
        cy.get(':nth-child(1) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        cy.get(':nth-child(4) > .Checkbox__label-container > .ico-tick').click({force: true})
        cy.get('.submit-btn').click({force: true})

        //Imaging Reports Filter-Test_Name
        cy.get(':nth-child(2) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        cy.get('.multiselect__select').click({force: true})
        cy.get(':nth-child(2) > .multiselect__option').click({force: true})
        cy.get('.multiselect__select').click({force: true})
        cy.get(':nth-child(1) > .multiselect__option').click({force: true})
        cy.get('.submit-btn').click({force: true})

        //Imaging Filter-Today
    
    cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Today"]').click({force: true})

        //Imaging Filter-Yesterday

cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Yesterday"]').click({force: true})

        //Imaging Filter-This_Week

cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Week"]').click({force: true})
    
        //Imaging Filter-Last_Week

cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Week"]').click({force: true})
    
        //Imaging Filter-This_Month
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Month"]').click({force: true})
    
        //Imaging Filter-Last_Month
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Month"]').click({force: true})

        //Imaging Filter-This_Year

cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Year"]').click({force: true})
    
        //Imaging Filter-Last_Year'
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Year"]').first().click({force: true})

        //Imaging Filter-Custom_Range
        //Not completed yet
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Custom Range"]').click({force: true})
        //cy.get(':nth-child(6) > .weekend.in-range').click({force: true})
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click({force: true})
        //cy.get('.applyBtn').click({force: true})

        //Imaging Filter-Date_All
 
 cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="All"]').click({force: true})

        //reloads page
        cy.reload()


        //View Referrals Reports
        cy.get('.ScrollableTabs__links > :nth-child(11)').click({force: true})

         //Download List as CSV
         cy.get('.CsvExport__link').click({force: true})

        //Referrals Reports Filter-Referral_Type
        cy.get(':nth-child(1) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        // cy.get(':nth-child(2) > .Checkbox__label-container > .ico-tick').click({force: true})
        // cy.get('.submit-btn').click({force: true})

        //Referrals Reports filter-Insurance
        cy.get(':nth-child(2) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        cy.get('.ico-tick').first().click({force: true})
        cy.get('.submit-btn').click({force: true})

        //Referrals Filter-Today
  
  cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Today"]').click({force: true})

        //Referrals Filter-Yesterday
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Yesterday"]').click({force: true})

        //Referrals Filter-This_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Week"]').click({force: true})
    
        //Referrals Filter-Last_Week
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Week"]').click({force: true})
    
        //Referrals Filter-This_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Month"]').click({force: true})
    
        //Referrals Filter-Last_Month
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Month"]').click({force: true})

        //Referrals Filter-This_Year
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Year"]').click({force: true})
    
        //Referrals Filter-Last_Year'
        cy.reload()
        
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Year"]').first().click({force: true})

        //Referrals Filter-Custom_Range
        //Not completed yet
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Custom Range"]').click({force: true})
        //cy.get(':nth-child(6) > .weekend.in-range').click({force: true})
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click({force: true})
        //cy.get('.applyBtn').click({force: true})

        //Referrals Filter-Date_All
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="All"]').click({force: true})

        //reloads page
        cy.reload()




        //View Request Reports
        cy.get('.ScrollableTabs__links > :nth-child(12)').click({force: true})

         //Download List as CSV
         cy.get('.CsvExport__link').click({force: true})

         //Request Reports Filter-Request_Type
        cy.get(':nth-child(1) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        // cy.get(':nth-child(2) > .Checkbox__label-container > .ico-tick').click({force: true})
        // cy.get('.submit-btn').click({force: true})

         //Request Reports filter-Gender
        cy.get(':nth-child(2) > .ContentFilter__wrapper > .ContentFilter__opener').click({force: true})
        cy.get(':nth-child(2) > .Checkbox__label-container > .Checkbox__label').click({force: true})
        cy.get('.submit-btn').click({force: true})

        //Request Filter-Today
    
    cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Today"]').click({force: true})

        //Request Filter-Yesterday

cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Yesterday"]').click({force: true})

        //Request Filter-This_Week

cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Week"]').click({force: true})
    
        //Request Filter-Last_Week

cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Week"]').click({force: true})
    
        //Request Filter-This_Month
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Month"]').click({force: true})
    
        //Request Filter-Last_Month
        cy.reload()

        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Month"]').click({force: true})

        //Request Filter-This_Year

cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Year"]').click({force: true})
    
        //Request Filter-Last_Year'
        cy.reload()

        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Last Year"]').first().click({force: true})

        //Request Filter-Custom_Range
        //Not completed yet
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Custom Range"]').click({force: true})
        //cy.get(':nth-child(6) > .weekend.in-range').click({force: true})
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click({force: true})
        //cy.get('.applyBtn').click({force: true})

        //Request Filter-Date_All
 
 cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="All"]').click({force: true})

        //reloads page
        cy.reload()


        //View ANC Reports
        cy.get('.ScrollableTabs__links > :nth-child(13)').click({force: true})

         //Download List as CSV
         cy.get('.CsvExport__link').click({force: true})

        //ANC Filter-Today
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Today"]').click({force: true})

        //ANC Filter-Yesterday
    
    cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Yesterday"]').click({force: true})

        //ANC Filter-This_Week
    
    cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Week"]').click({force: true})
    
        //ANC Filter-Last_Week
    
    cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Week"]').click({force: true})
    
        //ANC Filter-This_Month
   
   cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Month"]').click({force: true})
    
        //ANC Filter-Last_Month
   
   cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Month"]').click({force: true})

        //ANC Filter-This_Year
    
    cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="This Year"]').click({force: true})
    
        //ANC Filter-Last_Year'
   
   cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="Last Year"]').first().click({force: true})

        //ANC Filter-Custom_Range
        //Not completed yet
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        //cy.get('[data-range-key="Custom Range"]').click({force: true})
        //cy.get(':nth-child(6) > .weekend.in-range').click({force: true})
        //cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c3"]').click({force: true})
        //cy.get('.applyBtn').click({force: true})

        //ANC Filter-Date_All
     
     cy.reload()
        cy.get('.Daterange').click({force: true})
        cy.get('[data-range-key="All"]').click({force: true})

    })

})
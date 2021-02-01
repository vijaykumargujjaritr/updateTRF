const { browser, element } = require("protractor");
TaxResponseFiltersPage = function() {

    var elements = {
        lnkAddFilter          : element(by.linkText('Add Filter')),
        cmbSelectedCompany    : element(by.model('inputLabel')),
        cmbCompanyValues      : element.all(by.exactRepeater('node in treeModel')),
        txtFilterComName      : element(by.id('filter-input-companyName')),
        //txtGroupName         : element(by.xpath("//*[@id='bento-combobox-filter-group']//input")),
        txtGroupName          : element(by.id('filter-group')),
        btnSettings           : element(by.className('bento-icon-cog')),
        btnAdd                : element(by.className('bento-icon-add')),
        btnEdit               : element(by.className('bento-icon-edit')),
        editCompany           : element(by.className('bento-icon-edit grid-action-icon edit-button')),
        deleteCompany         : element(by.className('bento-icon-remove grid-action-icon edit-button')),
        buttondelete          : element(by.buttonText('Delete')),
        txtNewGroupName       : element(by.id('newFilterGroup')),
        txtFilterName         : element(by.name('taxResponseEditorName')),
        txtPriority           : element(by.id('filter-priority')),
        txtStartDate          : element(by.name('startDate')),
        //txtEndDate          : element(by.model('indirectAddEditLookupList.basicInformation.endDate')),
        txtDescription        : element(by.id('filter-comment')),
        btnDelete             : element(by.className('bento-icon-remove')),
        btnSave               : element(by.buttonText('Save'))

    };
    //creates filter group with default group name and  adds filter name,priority
    this.addFilter = function(TaxResponseFiltersData){
        var companyName = TaxResponseFiltersData.CompanyName; 
        var groupName = TaxResponseFiltersData.GroupName ;
        var editGroupName = TaxResponseFiltersData.EditGroupName ;                 // variables with values from test data
        var filterName = TaxResponseFiltersData.FilterName;
        var description = TaxResponseFiltersData.Description;
        var priority=TaxResponseFiltersData.Priority
        var startDate = TaxResponseFiltersData.StartDate;
        
        cLog.info('In addFilter function.');
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter'); // clicks on add filter link
        page.Actions.selectByValueIDT(elements.cmbSelectedCompany, elements.cmbCompanyValues, companyName);  //selects company name from the list
        
        // browser.wait(EC.elementToBeClickable(element(by.xpath('.//span[contains(text(),"'+companyName+'")]'))), DATA.WAITFOR,'Failed: No Company is available with '+companyName);
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        description && page.Actions.enterText(elements.txtDescription, description);

        // browser.wait(EC.elementToBeClickable(elements.txtStartDate), DATA.WAITFOR, 'Wait for txtStartDate field to be clickable');
        //page.Actions.ClearAndType(elements.txtStartDate, startDate);
        page.Actions.waitAndClick(elements.btnDelete, 'Waiting for Delete button');
        page.Actions.waitAndClick(elements.btnSave, 'Waiting for Save button');
        
        
        
    
    };
    //creates a new Tax Response filter group  and  adds filter name,priority
   
    this.addNewFilterGroup = function(TaxResponseFiltersData){
        var companyName = TaxResponseFiltersData.CompanyName; 
        var groupName = TaxResponseFiltersData.GroupName ;
        var editGroupName = TaxResponseFiltersData.EditGroupName ;                 // variables with values from test data
        var filterName = TaxResponseFiltersData.FilterName;
        var description = TaxResponseFiltersData.Description;
        var priority=TaxResponseFiltersData.Priority
        var startDate = TaxResponseFiltersData.StartDate;
        
        
        cLog.info('In addFilter function.');
        
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter');
        page.Actions.selectByValueIDT(elements.cmbSelectedCompany, elements.cmbCompanyValues, companyName);
      
        // browser.wait(EC.elementToBeClickable(element(by.xpath('.//span[contains(text(),"'+companyName+'")]'))), DATA.WAITFOR,'Failed: No Company is available with '+companyName);
        page.Actions.waitAndClick(elements.btnSettings,'In Settings');
        if(page.Actions.waitAndClick(elements.btnAdd, 'Add button'))
        {
            browser.wait(EC.elementToBeClickable(elements.txtNewGroupName), DATA.WAITFOR, 'Wait for txtFilterName field to be clickable');
            page.Actions.ClearAndType(elements.txtNewGroupName,groupName);
            page.Actions.enterText(elements.txtNewGroupName,groupName);
            page.Actions.ClearAndType(elements.txtStartDate, startDate);
            page.Actions.waitAndClick(elements.btnSave, 'Add New Group Name');
        }

        
    
        
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        description && page.Actions.enterText(elements.txtDescription, description);

        // browser.wait(EC.elementToBeClickable(elements.txtStartDate), DATA.WAITFOR, 'Wait for txtStartDate field to be clickable');
        //page.Actions.ClearAndType(elements.txtStartDate, startDate);
        page.Actions.waitAndClick(elements.btnDelete, 'Delete button');
        page.Actions.waitAndClick(elements.btnSave, 'Save button');
       
        
        
    
    };
    //Edits Tax Response filter group  and  adds filter name,priority

    this.editFilterGroup = function(TaxResponseFiltersData){
        var companyName = TaxResponseFiltersData.CompanyName; 
        var groupName = TaxResponseFiltersData.GroupName ;
        var editGroupName = TaxResponseFiltersData.EditGroupName ;                 // variables with values from test data
        var filterName = TaxResponseFiltersData.FilterName;
        var description = TaxResponseFiltersData.Description;
        var priority=TaxResponseFiltersData.Priority
        var startDate = TaxResponseFiltersData.StartDate;
         
        
        cLog.info('In EditFilterGroup function.');
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter');
        page.Actions.selectByValueIDT(elements.cmbSelectedCompany, elements.cmbCompanyValues, companyName);
        // browser.wait(EC.elementToBeClickable(element(by.xpath('.//span[contains(text(),"'+companyName+'")]'))), DATA.WAITFOR,'Failed: No Company is available with '+companyName);
        page.Actions.waitAndClick(elements.btnSettings,'waiting for Settings');
        if(page.Actions.waitAndClick(elements.btnEdit, ' Edit button'))
        {
            browser.wait(EC.elementToBeClickable(elements.txtNewGroupName), DATA.WAITFOR, 'Wait for txtFilterName field to be clickable');
            page.Actions.ClearAndType(elements.txtNewGroupName,editGroupName);
            page.Actions.enterText(elements.txtNewGroupName,editGroupName);
            page.Actions.ClearAndType(elements.txtStartDate, startDate);
            page.Actions.waitAndClick(elements.btnSave, 'Save button');
        }
    
        
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        description && page.Actions.enterText(elements.txtDescription, description);

        // browser.wait(EC.elementToBeClickable(elements.txtStartDate), DATA.WAITFOR, 'Wait for txtStartDate field to be clickable');
        //page.Actions.ClearAndType(elements.txtStartDate, startDate);
        page.Actions.waitAndClick(elements.btnDelete, 'Delete button');
        page.Actions.waitAndClick(elements.btnSave, 'Save button');
       
        
        
    
    };
    //Edit and updatation of Tax response filter with name and priority
    this.editFilter=function(editFilterData){
        var company=editFilterData.CompanyName;
        var filterName=editFilterData.FilterName;
        var priority=editFilterData.Priority;
        browser.wait(EC.visibilityOf(elements.txtFilterComName), DATA.WAITFOR, 'Failed: Wait for txtCategoryFilter to be visible at verifyAddStadMapping.');
        elements.txtFilterComName.clear();
        page.Actions.slowType(elements.txtFilterComName, company);
        page.Actions.waitAndClick(elements.editCompany, 'edit button');
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        page.Actions.waitAndClick(elements.btnDelete, 'Delete button');
        page.Actions.waitAndClick(elements.btnSave, 'Save button');
    };
    ////deletes a company associated with filter group and filter name
    this.deleteFilter=function(deleteFilterData){
        var company=deleteFilterData.CompanyName;
        
        browser.wait(EC.visibilityOf(elements.txtFilterComName), DATA.WAITFOR, 'Failed: Wait for txtCategoryFilter to be visible at verifyAddStadMapping.');
        elements.txtFilterComName.clear();
        page.Actions.slowType(elements.txtFilterComName, company);
        page.Actions.waitAndClick(elements.deleteCompany, 'Delete button'); //
        page.Actions.waitAndClick(elements.buttondelete, 'delete button');

    
    };
};
module.exports.TaxResponseFiltersPage = TaxResponseFiltersPage;
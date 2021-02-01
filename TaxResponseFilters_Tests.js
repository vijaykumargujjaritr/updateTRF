describe('Tax Response Filters - Add, Edit, Delete !', function() {

    beforeAll(function () {
        // Passing the username and Credentials from Scripts Details.json
        var scriptName = path.basename(__filename);
        page.Actions.setUserCredsFromJson(scriptName);
        page.LoneStarHomePage.launchLoneStar();
        page.LoneStarHomePage.enterCredentials(browser.params.login);
    
    });

    /**  ITA-385
    Verify creation of Tax response filter group and filter*/
    fit('Add a Filter', function() {
       // page.sitewidepage.clickonTaxResponseFiltersTab(); 
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.addFilter(tData.addTaxResponseFiltersData.addFilters.info); //creates filter group and filter
        
    });
    /** ITA-387
     *   verify the add functionality of new Tax Response Filter Group*/
    it('Add a  new Tax Response Filter Group', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.addNewFilterGroup(tData.addTaxResponseFiltersData.addFilters.info); //Adds new Tax Response filter group
    });
    /*ITA-388
    * verify the edit functionality of an existing 'Tax Response Filter Group*/
    it('Edit a Tax Response Filter Group', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.editFilterGroup(tData.addTaxResponseFiltersData.addFilters.info); //edits existing Tax Response filter group
    });

    /**  ITA-391
    Edit and   Verify update of Tax response filter with name and priority*/
    it('edit a Filter', function() {
         
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');
        page.TaxResponseFiltersPage.editFilter(tData.addTaxResponseFiltersData.editFilters.info); //edits filter name and priority
     });
     //deletes a company associated with filter group and filter name
     it('delete a Filter', function() {
         
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');
        page.TaxResponseFiltersPage.deleteFilter(tData.addTaxResponseFiltersData.deleteFilters.info);
     });

    afterAll(function() {
        page.LoneStarHomePage.signOut();
    });
});
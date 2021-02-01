beforeAll(function() {
    var scriptName = path.basename(__filename);
    page.Actions.setUserCredsFromJson(scriptName);
    logger.info("Start of Login Test Case");
    //Launch Lone star application and enable below code once more test cases are added
    expect(page.LoneStarHomePage.launchLoneStar()).toBe(true);
    expect(page.LoneStarHomePage.enterCredentials(browser.params.login)).toBe(true);
    page.CompaniesPage.verifyThenAddCompany(tData.SiteWide_Data.addCompany,'POWER USER');
    browser.call(page.CompaniesPage.addRoleForCompany, this, tData.SiteWide_Data.addCompany,'CERTIFICATE ADMIN');//verify Existing Company and add a role)
    browser.call(page.CompaniesPage.addRoleForCompany, this, tData.SiteWide_Data.addCompany,'ADVANCED CONFIGURATION ADMIN');//verify Existing Company and add a role)
    browser.call(page.CompaniesPage.addRoleForCompany, this, tData.SiteWide_Data.addCompany,'STANDARD USER');//verify Existing Company and add a role)
    browser.call(page.CompaniesPage.addRoleForCompany, this, tData.SiteWide_Data.addCompany,'REPORTING USER');//verify Existing Company and add a role)
    browser.call(page.CompaniesPage.addRoleForCompany, this, tData.SiteWide_Data.addCompany,'RESEARCH USER');//verify Existing Company and add a role)
    browser.refresh();
    page.sitewidepage.switchToIFrame();
});

describe('Site Wide Navigation.', function() {
    it('Verify the company page is loaded or not.', function () {
        page.sitewidepage.clickOnCompaniesTab('Companies');//
    });

    it('Verify the links under configuration theme.', function () {
        page.sitewidepage.clickonConfiguration('Configuration');
    });

    it('Verify elements after clicking on Certificate Manager tab.',function(){
        page.sitewidepage.clickonCertificateManager('CertificateManager');
    });

    it('Verify elements after clicking on Tools tab.',function(){
        page.sitewidepage.clickonToolsLink('Tools');
    });

    it('Verify elements on clicking Mapping tab.',function(){
        page.sitewidepage.clickonMappingTab('Mapping');
    });

    it('Verify elements click on Basic Setup tab.',function(){
        page.sitewidepage.clickonBasicSetupTab('BasicSetup');
    });

    it('Verify elements click on Advanced Setup tab.',function(){
        page.sitewidepage.clickonAdvancedSetupTab('AdvancedSetup');
    });

    it('Verify elements click on Authorities tab.',function(){
        page.sitewidepage.clickonAutoritiesTab('Authorities');
    });

    it('Verify elements click on Reference tab.',function(){
        page.sitewidepage.clickonReferenceTab('Reference');
    });

    it('Verify elements click on Tax tools tab.',function(){
        page.sitewidepage.clickonTaxToolTab('Tax Tools');
    });

    it('Verify elements click on Standard Mapping tab.',function(){
        page.sitewidepage.clickonStandardMappingsTab('StandardMapping');
    });

    it('Verify elements click on Conditional Mapping tab.',function(){
        page.sitewidepage.clickonConditionalMappingTab('conditionalMapping');
    });

    it('Verify elements click on ERPCode Mapping tab.',function(){
        page.sitewidepage.clickonErpCodeMappingTab('ERPCodeMapping');
    });

    it('Verify elements click on Tax Jurisdictions link tab.',function(){
        page.sitewidepage.clickonTaxjurisidictionTab('Tax Jurisdiction');
    });

    it('Verify elements click on Vat Group Registrations tab.',function(){
        page.sitewidepage.clickOnVatGroupTab('VAT GroupRegistration');
    });

    it('Verify elements click on Custon Fields tab.',function(){
        page.sitewidepage.clickonCustomFieldsTab('CustomFields');
    });

    it('Verify elements click on Custom Proucts tab.',function(){
        page.sitewidepage.clickonCustomProuctsTab('CustomProducts');
    });

    it('Verify elements click on Allocations tab.',function(){
        page.sitewidepage.clickonAllocationTab('Allocations');
    });
     it('Verify elements click on TaxResponseFilters tab.',function(){
         page.sitewidepage.clickonTaxResponseFiltersTab('Tax Response Filters');//
    });

    it('Verify elements click on TransEditors tab.',function(){
        page.sitewidepage.clickonTransEditorTab('TransEditor');
    });

    it('Verify elements click on Certificate Manager configuration tab.',function(){
         page.sitewidepage.clickOnCertificateManagerConfigTab('CerficateManagerConfig');
    });

    it('Verify elements click on Standard Authorities tab.',function(){
        page.sitewidepage.clickonStandardAuthoriotiesTab('StandardAuthorities');
    });

    it('Verify elements click on Custom Authorities tab.',function(){
        page.sitewidepage.clickOnCustomAuthoritiesTab('Customauthority');
    });

    it('Verify elements click on Authority Types tab.',function(){
        page.sitewidepage.clickonAuthoritytypesTab('AuthorityTypes');
    });

    it('Verify elements click on Zones tab.',function(){
        page.sitewidepage.clickonZonesTab('Zones');
    });

    it('Verify elements click on Lookup Lists tab.',function(){
        page.sitewidepage.clickonLookupListsTab('LookupLists');
    });

    it('Verify elements click on Locations tab.',function(){
        page.sitewidepage.clickonLocationsTab('Locations');
    });

    it('Verify elements click on Location Sets tab.',function(){
        page.sitewidepage.clickonLocationSetsTab('Locations');
    });

    it('Verify elements click on Licence Types tab.',function(){
        page.sitewidepage.clickonLicenseTypesTab('LicenceTypes');
    });

    it('Verify elements click on Licence tab.',function(){
        page.sitewidepage.clickonLicensesTab('Licences');
    });

    it('Verify elements click on Administration link tab.',function(){
        page.sitewidepage.clickonAdministrationLink('Administration');
    });

    it('Verify elements click on UOM tab.',function(){
        page.sitewidepage.clickonUOMTab('UOM');
    });

    it('Verify elements click on Model Scenarios tab.',function(){
        page.sitewidepage.clickonModelScenarioTab('ModelScenario');
    });

    it('Verify elements click on One Source Content tab.',function(){
        page.sitewidepage.clickonOnesourceContent('Onesource Content');

    });

     it('Verify elements click on Users and Roles tab',function(){
         page.sitewidepage.clickonUsersandRolesTab('Users and Roles');
     });

     it('Verify elements click on Operating License tab',function(){
         page.sitewidepage.clickonOperatingLicenseTab('Operating Licenses');
     });


    afterAll(function() {
        page.LoneStarHomePage.signOut();
    });
});


const { element, by } = require("protractor");

//1. click compnies, config
sitewidepage= function() {

    var elements = {
        lnkCompanies: element(by.linkText('Companies')),
        lnkConfiguration: element(by.linkText('Configuration')),
        lnkMapping: element(by.cssContainingText('.megamenu-takeover-header', 'Mapping')),
        lnkStandardMapping: element(by.linkText("Standard Mappings")),
        linkConditionalMapping: element(by.linkText("Conditional Mappings")),
        lnkERPCodeMappings: element(by.linkText('ERP Code Mappings')),
        lnkBasicSetup: element(by.cssContainingText('.megamenu-takeover-header', 'Basic Setup')),
        lnkTaxJursidictions: element(by.linkText('Tax Jurisdictions')),
        lnkVATGroupRegistrations: element(by.linkText('VAT Group Registrations')),
        lnkCustomFields: element(by.linkText('Custom Fields')),
        lnkCustomProducts: element(by.linkText('Custom Products')),
        lnkAdvancedSetup: element(by.cssContainingText('.megamenu-takeover-header', 'Advanced Setup')),
        lnkAllocations: element(by.linkText('Allocations')),
        lnkTaxResponseFilters :element(by.linkText('Tax Response Filters')),
        lnkTransEditors: element(by.linkText('Trans Editors')),
        lnkCertificateManagerConfiguration: element(by.linkText('Certificate Manager Configuration')),
        lnkAuthorities: element(by.cssContainingText('.megamenu-takeover-header', 'Authorities')),
        lnkStandardAuthorities:element(by.linkText('Standard Authorities')),
        tabCustomAuth: element(by.linkText('Custom Authorities')),
        lnkAuthorityTypes: element(by.linkText('Authority Types')),
        lnkZones: element(by.linkText('Zones')),
        lnkReferenceData: element(by.cssContainingText('.megamenu-takeover-header', 'Reference Data')),
        lnkLookupLists: element(by.linkText('Lookup Lists')),
        lnkLocations: element(by.linkText('Locations')),
        lnkLocationSets: element(by.linkText('Location Sets')),
        lnkLicenses: element(by.linkText('Licenses')),
        lnkAuthorityOptions:element(by.linkText('Authority Options')),
        lnkLicenseType: element(by.linkText('License Types')),
        lnkUOM: element(by.linkText('Units of Measure')),
        lnkCertificateManager: element(by.linkText('Certificate Manager')),
        lnkExemptionCertificates: element(by.linkText('Exemption Certificate')),
        lnkCustomers: element(by.linkText('Customers')),
        lnkCertificates: element(by.linkText('Certificates')),
        lnkNotifications: element(by.linkText('Notifications')),
        lnkReports:element(by.linkText('Reports')),
        lstAnalytics:element(by.linkText('Reports & Analytics')),
        lnkTools          : element(by.linkText('Tools')),
        lnkTaxTools                 : element(by.cssContainingText('.megamenu-takeover-header','Tax Tools')),
        lnkModelScenarios: element(by.linkText('Model Scenario')),
        lnkOneSourceContent: element(by.linkText('Onesource Content')),
        lnkCompliance: element(by.cssContainingText('.megamenu-takeover-header', 'Compliance')),
        lnkAdministration: element(by.css('span[translate="INDIRECT_CORE.NAVIGATION.ADMINISTRATION"]')),
        lnkUsersAndRoles:element(by.linkText('Users and Roles')),
        lnkPortalAdminConsole: element(by.linkText('Portal Admin Console')),
        lblPortalAdminConsole:element(by.xpath("//h1[@translate='CERTIFICATE_MANAGER.HEADERS.PORTAL_ADMIN_CONSOLE']")),
        lblNotifications :element(by.xpath("//h1[@translate='CERTIFICATE_MANAGER.HEADERS.NOTIFICATIONS']")),
        lblReports :element(by.xpath("//h1[@translate='CERTIFICATE_MANAGER.HEADERS.REPORTS']")),
        lblCompanies: element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.COMPANY']")),
        lblProuctandServices:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.PRODUCTS_SERVICES']")),
        lnkAddCompany  : element(by.linkText("Add Company")),
        lnkAddTaxJurisdiction : element(by.linkText("Add Tax Jurisdiction")),
        lblERPcodeMappings:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.ERP_CODE_MAPPINGS']")),
        lblTaxJurisdiction :  element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.TAX_JURISDICTIONS']")),
        lblVATGroupRegistration:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.VAT_GROUP_REGISTRATIONS']")),
        lblCustomFields:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.CUSTOM_FIELDS']")),
        lblCustomProducts:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.PRODUCTS_SERVICES']")),
        lblAllocations:element(by.xpath("//h1[@class ='ng-binding']")),
        lblTaxResponseFilters:element(by.xpath("//h1[@class ='ng-binding']")),
        
        lblTransEditors:element(by.xpath("//h1[@class ='ng-binding']")),
        lblCertificateManagerGroup:element(by.xpath("//h1[@translate ='CERTIFICATE_MANAGER.HEADERS.SETTINGS']")),
        lblAuthorityTypes:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.AUTHORITY_TYPES']")),
        lblStandardAuthorities:element(by.xpath("//h4[@translate ='INDIRECT.HEADERS.AUTHORITIES']")),
        lblCustomAuthorities:element(by.xpath("//h4[@translate ='INDIRECT.HEADERS.AUTHORITIES']")),
        lblZones:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.ZONES']")),
        lblLookupLists:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.LOOKUP_LISTS']")),
        lblLocations:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.LOCATIONS']")),
        lblLocationSets:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.LOCATION_SETS']")),
        lblLicenseType:element(by.xpath("//h1[@class ='ng-binding']")),
        lblLicenses:element(by.xpath("//h1[@class ='ng-binding']")),
        lblUnitsOfMeasure:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.UNITS_OF_MEASURE']")),
        // lblModelScenario:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.MODEL_SCENARIO']")),
        lblModelScenario:element(by.xpath("//div[contains(text(), 'Model Scenario')]")),
        lblOnesourceContent:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.ONESOURCE_CONTENT']")),
        lblUsersAndRoles:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.USERS_ROLES']")),
        lblCertificates:element(by.xpath("//h1[@translate ='CERTIFICATE_MANAGER.HEADERS.CERTIFICATES']")),
        lblNPCertificates:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.CERTIFICATES']")),
        lblCustomers:element(by.xpath("//h1[@translate ='CERTIFICATE_MANAGER.HEADERS.CUSTOMERS']")),
        lblNPCustomers:element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.CUSTOMERS']")),
        lnkCustom           : element(by.xpath("//span[@translate = 'INDIRECT.HEADERS.CUSTOM']")),
        txtComAtERPage      : element(by.id("select-company")),
        lnkHomeIcon       : element(by.className("bento-icon-home")),
        lnkExportAndImport  :element(by.linkText('Export and Import')),
        lblAuthorityOptions  :element(by.className('bch-header-title ng-binding')),
        lnkOperatingLicense  :element(by.linkText('Operating Licenses')),
        lblOperatingLicense  :element(by.xpath("//h1[@translate ='INDIRECT.HEADERS.OPERATING_LICENSES']")),
        lnkDashBoard               : element(by.linkText('Dashboard')),
        lnkHelpPage          : element(by.linkText('Help')),
        lnkMigrationTool  :element(by.xpath("//a[@translate ='INDIRECT_CORE.NAVIGATION.MIGRATION_TOOL']")),
        //lnkCmReport    : element(by.cssContainingText('.menuItemLink ng-scope', 'Reports')),
        lnkCmReport     : element(by.xpath("//a[@translate='INDIRECT_CORE.NAVIGATION.CERTIFICATE_MANAGER_REPORTS']")),
        lblCmReport    : element(by.xpath("//h1[@translate ='CERTIFICATE_MANAGER.HEADERS.REPORTS']"))
    };

    this.pageElements = elements;

    /* This is the function for clicks on companany link*/
    this.clickOnCompaniesTab=function()
    {
        page.Actions.waitAndClick(elements.lnkCompanies);
        // isElementPresent(elements.lnkAddCompany);
    };

    /* This is the function for clicks on Configuration link*/
    this.clickonConfiguration=function() {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        isElementPresent(elements.lnkMapping);
        isElementPresent(elements.lnkBasicSetup);
        isElementPresent(elements.lnkAdvancedSetup);
        isElementPresent(elements.lnkAuthorities);
        isElementPresent(elements.lnkReferenceData);
    };

    /* This is the function for clicks on certificateManager link*/
    this.clickonCertificateManager=function()
    {
        page.Actions.waitAndClick(elements.lnkCertificateManager);
        isElementPresent(elements.lnkCustomers);
        isElementPresent(elements.lnkCertificates);
        isElementPresent(elements.lnkNotifications);
        isElementPresent(elements.lnkReports);
        // isElementPresent(elements.lnkPortalAdminConsole);
    };

    //This function clicks on Reports link under Certificate Manager.
    this.clickOnReportsTab=function () {
        this.clickonCertificateManager();
        page.Actions.waitAndClick(elements.lnkReports);
        isElementPresent(elements.lblReports);
    };

    //This function clicks on Reports link under Reports.
        this.clickOnReportsAnalytics=function () {
        page.Actions.waitAndClick(elements.lnkReports);
        browser.wait(EC.visibilityOf(elements.lstAnalytics), 5000);
        page.Actions.waitAndClick(elements.lstAnalytics);
    };



    //This function clicks on Notifications link under Certificate Manager.
    this.clickOnNotificationTab=function () {
        this.clickonCertificateManager();
        page.Actions.waitAndClick(elements.lnkNotifications);
        isElementPresent(elements.lblNotifications);
    };

    //This function clicks on Portal Admin Console link under Certificate Manager.
    this.clickOnPortalAdminConsoleTab=function () {
        this.clickonCertificateManager();
        page.Actions.waitAndClick(elements.lnkPortalAdminConsole);
        isElementPresent(elements.lblPortalAdminConsole);
    };

    /* This is the function for clicks on  Tools link*/
    this.clickonToolsLink = function() {
        page.Actions.waitAndClick(elements.lnkTools);
        isElementPresent(elements.lnkTaxTools);
        isElementPresent(elements.lnkCompliance);
        isElementPresent(elements.lnkAdministration);
    };

    /* This is the function for clicks on Mapping link*/
    this.clickonMappingTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkMapping);
        isElementPresent(elements.lnkStandardMapping);
        isElementPresent(elements.linkConditionalMapping);
        isElementPresent(elements.lnkERPCodeMappings);
    };

    /* This is the function for clicks on Basicsetup link*/
    this.clickonBasicSetupTab=function()
    {
        page.Actions.waitAndClick(elements. lnkBasicSetup);
        isElementPresent(elements.lnkTaxJursidictions);
        isElementPresent(elements. lnkVATGroupRegistrations);
        isElementPresent(elements.lnkCustomFields);
        isElementPresent(elements. lnkCustomProducts);

    };

    /* This is the function for clicks on Advancedetup link*/
    this.clickonAdvancedSetupTab=function() {
        page.Actions.waitAndClick(elements.lnkAdvancedSetup);
        isElementPresent(elements.lnkAllocations);
        isElementPresent(elements.lnkTransEditors);
        isElementPresent(elements.lnkCertificateManagerConfiguration);
    };

    /* This is the function for clicks on Authorities link*/
    this.clickonAutoritiesTab=function() {
        page.Actions.waitAndClick(elements.lnkAuthorities);
        isElementPresent(elements.lnkStandardAuthorities);
        isElementPresent(elements.tabCustomAuth);
        isElementPresent(elements.lnkAuthorityTypes);
        isElementPresent(elements.lnkZones);
    };

    /* This is the function for clicks on Reference link*/
    this.clickonReferenceTab=function() {
        page.Actions.waitAndClick(elements.lnkReferenceData);
        isElementPresent(elements.lnkLookupLists);
        isElementPresent(elements.lnkLocations);
        isElementPresent(elements.lnkLocationSets);
        isElementPresent(elements.lnkLicenseType);
        isElementPresent(elements.lnkLicenses);
        isElementPresent(elements.lnkUOM);
    };

    /* This is the function for clicks on TaxTools link*/
    this.clickonTaxToolTab=function(){
        page.Actions.waitAndClick(elements.lnkTools );
        page.Actions.waitAndClick(elements.lnkTaxTools);
        isElementPresent(elements.lnkModelScenarios);
        isElementPresent(elements.lnkOneSourceContent);
    };

    /* This is the function for clicks on Administration link*/
    this.clickonAdministrationLink=function(){
        page.Actions.waitAndClick(elements.lnkTools );
        page.Actions.waitAndClick(elements.lnkAdministration);
        isElementPresent(elements.lnkUsersAndRoles);
    };

    this.clickonExportAndImport = function () {
        page.Actions.waitAndClick(elements.lnkExportAndImport);
    };

    /*This function is used for click on Migration tool list page*/
    this.clickonMigrationToolLink=function(){
        page.Actions.waitAndClick(elements.lnkMigrationTool );
        browser.sleep(5000);
    };
    /* This is the function for clicks on standaradmapping link and verifies the text Product and services present or not*/
    this.clickonStandardMappingsTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkMapping);
        page.Actions.waitAndClick(elements.lnkStandardMapping);
        isElementPresent(elements.lblProuctandServices);

    };

    /* This is the function for clicks on conditionalmapping link*/
    this.clickonConditionalMappingTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkMapping);
        page.Actions.waitAndClick(elements.linkConditionalMapping);
    };

    /* This is the function for clicks on ERPcodemapping link and verifies the text ERP code Mapping present or not*/
    this.clickonErpCodeMappingTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkMapping);
        page.Actions.waitAndClick(elements.lnkERPCodeMappings);
        isElementPresent(elements.lblERPcodeMappings);

    };

    /* This is the function for clicks on TaxJurisdiction link and verifies the text Tax Jurisdiction present or not*/
    this.clickonTaxjurisidictionTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkBasicSetup);
        page.Actions.waitAndClick(elements.lnkTaxJursidictions);
        isElementPresent(elements.lblTaxJurisdiction);
    };

    /* This is the function for clicks on VAT group Registration link and verifies the text VAT group Registration present or not*/
    this.clickOnVatGroupTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkBasicSetup);
        page.Actions.waitAndClick(elements.lnkVATGroupRegistrations);
        isElementPresent(elements.lblVATGroupRegistration);

    };

    /* This is the function for clicks on CustomField link and verifies the text CustomFields present or not*/
    this.clickonCustomFieldsTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkBasicSetup);
        page.Actions.waitAndClick(elements.lnkCustomFields);
        isElementPresent(elements.lblCustomFields);
    };

    /* This is the function for clicks on CustomProduct link and verifies the text CustomProduct present or not*/
    this.clickonCustomProuctsTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkBasicSetup);
        page.Actions.waitAndClick(elements. lnkCustomProducts);
        // isElementPresent(elements.lblCustomProducts);

    };

    /* This is the function for clicks on Allocation link and verifies the text Allocation present or not*/
    this.clickonAllocationTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkAdvancedSetup);
        page.Actions.waitAndClick(elements.lnkAllocations);
        isElementPresent(elements.lblAllocations);

    };
    
    this.clickonTaxResponseFiltersTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkAdvancedSetup);//
        page.Actions.waitAndClick(elements.lnkTaxResponseFilters);
        isElementPresent(elements.lblTaxResponseFilters);

    };

    /* This is the function for clicks on TranEditor link and verifies the text TransEditors present or not*/
    this.clickonTransEditorTab=function()
    {
        browser.sleep(DATA.MINWAIT);
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkAdvancedSetup);
        page.Actions.waitAndClick(elements.lnkTransEditors);
        isElementPresent(elements.lblTransEditors);

    };

    /* This is the function for clicks on CertificateManager link and verifies the text CertificateManager present or not*/
    this.clickOnCertificateManagerConfigTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkAdvancedSetup);
        page.Actions.waitAndClick(elements.lnkCertificateManagerConfiguration);
        isElementPresent(elements.lblCertificateManagerGroup);

    };

    /* This is the function for clicks on Standard Authorities link and verifies the text Standard Authorities present or not*/
    this.clickonStandardAuthoriotiesTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkAuthorities);
        page.Actions.waitAndClick(elements.lnkStandardAuthorities);
        isElementPresent(elements.lblStandardAuthorities);

    };

    /* This is the function for clicks on Custom Authorities link and verifies the text Custom Authorities present or not*/
    this.clickOnCustomAuthoritiesTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration, "lnkConfiguration");
        page.Actions.waitAndClick(elements.lnkAuthorities, "lnkAuthorities");
        page.Actions.waitAndClick(elements.tabCustomAuth, "tabCustomAuth");
        isElementPresent(elements.lblCustomAuthorities);
    };

    this.clickOnAuthorityOptionsTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration, "lnkConfiguration");
        page.Actions.waitAndClick(elements.lnkAuthorities, "lnkAuthorities");
        page.Actions.waitAndClick(elements.lnkAuthorityOptions, "Clicking on the link AuthorityOptions.");
        isElementPresent(elements.lblAuthorityOptions);
    };

    /* This is the function for clicks on Authority types link and verifies the text Standard Authorities present or not*/
    this.clickonAuthoritytypesTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkAuthorities);
        page.Actions.waitAndClick(elements.lnkAuthorityTypes);
        isElementPresent(elements.lblAuthorityTypes);

    };

    this.clickOnCustomAuthorityTypesTab=function()
    {
        page.sitewidepage.clickonAuthoritytypesTab();
        page.Actions.waitAndClick(elements.lnkCustom, "lnkCustom");
        isElementPresent(elements.lblAuthorityTypes);

    };

    /* This is the function for clicks on ZonesTab link and verifies the text Zones present or not*/
    this.clickonZonesTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkAuthorities);
        page.Actions.waitAndClick(elements.lnkZones);
        isElementPresent(elements.lblZones);

    };

    /* This is the function for clicks on Lookuplists link and verifies the text Lookup list present or not*/
    this.clickonLookupListsTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkReferenceData);
        page.Actions.waitAndClick(elements. lnkLookupLists);
        isElementPresent(elements.lblLookupLists);

    };

    /* This is the function for clicks on Locations link and verifies the text Locations present or not*/
    this.clickonLocationsTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkReferenceData);
        page.Actions.waitAndClick(elements.lnkLocations);
        isElementPresent(elements.lblLocations);

    };

    /* This is the function for clicks on LocationSets link and verifies the text LocationSet present or not*/
    this.clickonLocationSetsTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkReferenceData);
        page.Actions.waitAndClick(elements. lnkLocationSets);
        isElementPresent(elements.lblLocationSets);

    };

    /* This is the function for clicks on LicenseTypes link and verifies the text LicencesTypes present or not*/
    this.clickonLicenseTypesTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkReferenceData);
        page.Actions.waitAndClick(elements.lnkLicenseType);
        isElementPresent(elements.lblLicenseType);

    };

    /* This is the function for clicks on Licences link and verifies the text Licences present or not*/
    this.clickonLicensesTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkReferenceData);
        page.Actions.waitAndClick(elements.lnkLicenses);
        isElementPresent(elements.lblLicenses);

    };

    /* This is the function for clicks on UOMlink and verifies the text Units Of Measure present or not*/
    this.clickonUOMTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkReferenceData);
        page.Actions.waitAndClick(elements.lnkUOM);
        isElementPresent(elements.lblUnitsOfMeasure);

    };

    /* This is the function for clicks on ModelScenario link and verifies the text ModelScenario present or not*/
    this.clickonModelScenarioTab=function()
    {
        page.Actions.waitAndClick(elements.lnkTools);
        page.Actions.waitAndClick(elements.lnkTaxTools);
        page.Actions.waitAndClick(elements.lnkModelScenarios);
        isElementPresent(elements.lblModelScenario);

    };

    /* This is the function for clicks on OnesourceContent link and verifies the text OnesourceContent or not*/
    this.clickonOnesourceContent=function()
    {
        page.Actions.waitAndClick(elements.lnkTools);
        page.Actions.waitAndClick(elements.lnkTaxTools);
        page.Actions.waitAndClick(elements.lnkOneSourceContent);
        isElementPresent(elements.lblOnesourceContent);

    };

    /* This is the function for clicks on Users and Roles link and verifies the text Users and Roles present or not*/
    this.clickonUsersandRolesTab=function()
    {
        page.Actions.waitAndClick(elements.lnkTools);
        page.Actions.waitAndClick(elements.lnkAdministration);
        page.Actions.waitAndClick(elements.lnkUsersAndRoles);
        isElementPresent(elements.lblUsersAndRoles);

    };

    function isElementPresent(obj) {

        console.log("Test");
        browser.wait(EC.visibilityOf(obj),DATA.ELEMENTWAIT,"Waiting for the element to be visible");
        expect(obj.isPresent()).toBe(true);
    };

    this.clickOnCustomersCmOrE = function clickOnCustomersCmOrE(){
        browser.wait(EC.visibilityOf(elements.lnkConfiguration), DATA.ELEMENTWAIT, "Menu bar has not loaded.");
        browser.sleep(DATA.MINWAIT);
        EC.visibilityOf(elements.lnkCertificateManager)().then(function(isVisible){
            if(isVisible){
                page.Actions.waitAndClick(elements.lnkCertificateManager);
                page.Actions.waitAndClick(elements.lnkCustomers);
                browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Customers list page is still loading.");
                isElementPresent(elements.lblCustomers);
            }else{
                page.Actions.waitAndClick(elements.lnkExemptionCertificates);
                page.Actions.waitAndClick(elements.lnkCustomers);
                browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Customers list page is still loading.");
                isElementPresent(elements.lblNPCustomers);
            }
        })
    };

 this.clickOnCertificatesTab = function clickOnCertificatesTab(){
        browser.wait(EC.visibilityOf(elements.lnkConfiguration), DATA.ELEMENTWAIT, "Menu bar has not loaded.");
        EC.visibilityOf(elements.lnkCertificateManager)().then(function(isVisible){
            if(isVisible){
               elements.lnkCertificateManager.click();
               elements.lnkCertificates.click();
               browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Certificates list page is still loading.");
               isElementPresent(elements.lblCertificates);
            }else{
                page.Actions.waitAndClick(elements.lnkExemptionCertificates);
                page.Actions.waitAndClick(elements.lnkCertificates);
                browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Certificates list page is still loading.");
                isElementPresent(elements.lblNPCertificates);
            }
        })
    };


    this.clickOnCustomersTab = function clickOnCustomersTab(){
        this.clickOnCustomersCmOrE();
    };

    this.clickOnReports=function () {
        page.Actions.waitAndClick(elements.lnkReports);
    };

    this.clickOnNotificationsTab = function clickOnNotificationsTab() {
        page.Actions.waitAndClick(elements.lnkCertificateManager);
        page.Actions.waitAndClick(elements.lnkNotifications);
        isElementPresent(elements.lblNotifications);
    };

    this.clickOnExportTab = function clickOnExportTab() {
        page.sitewidepage.clickonAdministrationLink();
        page.sitewidepage.clickonExportAndImport();
        browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Export page is still loading.");
    };

    this.clickOnDashboardTab = function clickOnDashboardTab() {
        page.Actions.waitAndClick(elements.lnkDashBoard);
        browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Page is still loading.");
    };

    this.clickOnImportTab = function clickOnImportTab() {
        page.sitewidepage.clickOnDashboardTab();
        page.sitewidepage.clickonAdministrationLink();
        page.sitewidepage.clickonExportAndImport();
        browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Export page is still loading.");
    };

    this.clickOnCMCertificate = function clickOnCMCertificate() {
        page.sitewidepage.clickOnCustomersTab();
        browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "wait for page load");
        page.Actions.waitAndClick(page.AddCustomers.pageElements.lnkCertificateManager);
        page.Actions.waitAndClick(page.AddCustomers.pageElements.lnkCertificates);
        browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "wait for page load");
    };


    this.navigateToExemptReasonsPage = function navigateToExemptReasonsPage(url){
        browser.get(url);
        browser.wait(EC.visibilityOf(elements.lnkHomeIcon), DATA.ELEMENTWAIT,"Waiting for the HOME Icon");
        browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Exempt Reasons page is still loading.");
        //browser.wait(EC.presenceOf(iFrame), DATA.WAITFOR, 'waiting for iframe.');
        //browser.switchTo().frame(iFrame.getWebElement());
        page.sitewidepage.switchToIFrame();
        browser.wait(EC.visibilityOf(elements.txtComAtERPage), DATA.ELEMENTWAIT,"Exempt Reasons page company input field is not visible.");
    };

    /* This is the function for clicks on Operating License link and verifies the text Operating License page present or not*/
    this.clickonOperatingLicenseTab=function()
    {
        page.Actions.waitAndClick(elements.lnkConfiguration);
        page.Actions.waitAndClick(elements.lnkReferenceData);
        page.Actions.waitAndClick(elements.lnkOperatingLicense);
        isElementPresent(elements.lblOperatingLicense);

    };

    this.switchToIFrame = function()
    {
        browser.sleep(DATA.MINWAIT);
        browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Indirect tax homepage took too much time to load.");
        EC.visibilityOf(iFrame)().then(function (isVisible) {
            if(!isVisible){
                browser.refresh();
                browser.sleep(DATA.MINWAIT);
                browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Indirect tax homepage took too much time to load.");
            }
        });
        browser.wait(EC.presenceOf(iFrame), DATA.WAITFOR, 'waiting for iframe.');
        browser.switchTo().frame(iFrame.getWebElement());
    };
    /* This is the function for clicks on Help link */
    this.clickOnHelpPage = function clickOnHelpPage()
    {
        browser.wait(EC.elementToBeClickable(elements.lnkHelpPage),DATA.WAITFOR, "Indirect tax helppage took too much time to load.");
        page.Actions.waitAndClick(elements.lnkHelpPage,"lnkHelpPage");
    };
    /*This is the function for clicks on certificate manager reports*/
    this.clickOnCmReports = function clickOnCmReports() {
        page.Actions.waitAndClick(elements.lnkCertificateManager);
        page.Actions.waitAndClick(elements.lnkCmReport);
        isElementPresent(elements.lblCmReport);
    };

};
module.exports.sitewidepage = sitewidepage;

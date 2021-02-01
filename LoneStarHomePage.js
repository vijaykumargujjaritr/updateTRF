/**
 * Created by U6034904 on 2/11/2016. This is page object model module for Determination & Lone star home page
 */

const crypto = require('asymmetric-crypto');
const { by } = require('protractor');
LoneStarHomePage = function() {

    //Reference to current object which helps in calling internal functions.
    var loneStarHomePageContext = this;

    // Element locators in Home page
    var elements = {

        lnkIndirectTax              : element.all(by.className('app-tile')),
        elmBody                     : element(by.xpath('/html/body')),
        txtUserID                   : element(by.name('txtLogin')),
        txtPassword                 : element(by.name('txtPassword')),
        btnSignIn                   : element(by.buttonText('Sign In')),
        lnkExemptionCertificate     : element(by.linkText('Exemption Certificates')),
        lnkCertificateManager       : element(by.linkText('Certificate Manager')),
        lnkHomepage                 : element(by.linkText('Dashboard')),
        lnkCustomers                : element(by.linkText('Customers')),
        lnkNotifications            : element(by.linkText('Notifications')),
        lnkLicenses                 : element(by.linkText('Licenses')),
        lnkCertificates             : element(by.linkText('Certificates')),
        lnkExemptReasons            : element(by.linkText('Exempt Reasons')),
        lnkTaxResponseFilters       : element(by.linkText('Tax Response Filters')),//
        lnkTaxTools                 : element(by.cssContainingText('.megamenu-takeover-header','Tax Tools')),
        lnkAdministration           : element(by.cssContainingText('.megamenu-takeover-header','Administration')),
        lnkTools                    : element(by.linkText('Tools')),
        lnkZones                    : element(by.linkText('Zones')),
        lnkRateSearch               : element(by.linkText('Rate Search')),
        lnkModelScenarios           : element(by.linkText('Model Scenarios')),
        lnkPostTransaction          : element(by.linkText('Post Transaction')),
        lnkOneSourceContent         : element(by.linkText('ONESOURCE Content')),
        lnkHelp                     : element(by.linkText('Help')),
        lnkText                     : element(by.linkText('About this Page')),
        lnkHelpSearch               : element(by.linkText('Help Search')),
        lnkReporting                : element(by.linkText('Reports')),
        lnkConfiguration            : element(by.linkText('Configuration')),
        lnkCompanies                : element(by.linkText('Companies')),
        lnkTaxJursidictions         : element(by.linkText('Tax Jurisdictions')),
        lnkProductCategories        : element(by.linkText('Products and Services')),
        lnkERPCodeMappings          : element(by.linkText('ERP Code Mappings')),
        lnkCustomFields             : element(by.linkText('Custom Fields')),
        lnkLookupLists              : element(by.linkText('Lookup Lists')),
        lnkLocations                : element(by.linkText('Locations')),
        lnkLicenseType              : element(by.linkText('License Types')),
        lnkUOM                      : element(by.linkText('Units of Measure')),
        lnkAuthorityType            : element(by.linkText('Authority Types')),
        lnkProfile                  : element(by.className('profile-button dropdown-toggle')),
        txtSignOut                  : element(by.id('signOutLink')),
        lnkNewSignOut               : element(by.linkText('Sign Out')),
        objCompany                  : element(by.className('item-inner')),
        lknAddTaxjurusdiction       : element(by.linkText('determination.addTaxJurisdiction')),
        lblBentoBusyLoader          : element(by.className('bento-busyloader-svg')),
        lnkUsersandRoles            : element(by.linkText('Users and Roles')),
        btnAddCompany               : element(by.buttonText('Add Company')),
        lblViewConfigurations		: element(by.className('view-configuration')),
        barMenu						: element(by.className('navbar-nav')),
        lnkTransactionExtract       : element(by.linkText('Transaction Extract')),
        lnkComExtrac                : element(by.linkText('Compliance Extract')),
        lnkUSsummary                : element(by.linkText('U.S. State Summary')),
        lnkUSDocsummary             : element(by.linkText('U.S. Document Details')),
        icoBusyLoader               : element(by.className('bento-busyloader-arc')),
        lnkMapping                  : element(by.cssContainingText('.megamenu-takeover-header','Mapping')),
        lnkBasicSetup               : element(by.cssContainingText('.megamenu-takeover-header','Basic Setup')),
        lnkAdvancedSetup            : element(by.cssContainingText('.megamenu-takeover-header','Advanced Setup')),
        lnkAuthorities              : element(by.cssContainingText('.megamenu-takeover-header','Authorities')),
        lnkReferenceData            : element(by.cssContainingText('.megamenu-takeover-header','Reference Data')),
        lnkCompliance               : element(by.cssContainingText('.megamenu-takeover-header','Compliance')),
        lnkvatGroup                 : element(by.linkText('VAT Registrations')),
        lnkIndirectTile             : element(by.xpath("//span[@class='app-name' and contains(text(),'Indirect Tax‎')]")),
        lnkHelpPage                 : element(by.linkText('Help')),
        lnkInsideHelp               : element(by.xpath("//a[text()='Help']")),
        btnFeedBackClose            :element(by.className("_pendo-close-guide")),
        lnkCmReport                 : element(by.cssContainingText('.menuItemLink ng-scope','Reports'))
        
    };

    this.pageElements = elements;

    // Launches Lonestar application and wait for Angular component load in the login page
    this.launchLoneStar = function() {
        //change password
        browser.getProcessedConfig().then(function(config) {
            console.log(config.capabilities.userDetail);
            browser.call(page.Actions.changePassword,this,tData.changePassword_Data.ChangePasswordData,config.capabilities.userDetail)
        });
        //Maximize the browser
        browser.driver.manage().window().maximize();
        //Launch the browser and navigate through the URL

        return browser.driver.get(browser.params.baseUrl).then(function() {

            cLog.info('************Test Execution starts************');
            cLog.info('URL entered at browser');
            // Wait until the URL contains home-login string
            cLog.info('home-login wait.....');
            //Waiting for the URL to load completely
            return browser.wait(function() {
                return browser.getCurrentUrl().then(function(url) {
                    return /home-login/.test(url);
                });
            }, DATA.WAITFOR , "URL has not changed to Home-Login!!!");
        });
    };

    // This function enters credentials for Lone star application and navigates system to Indirect tax home page.
    this.enterCredentials = function(login) {

        return browser.getProcessedConfig().then(function(config){
            console.log(config.capabilities.userDetail);
            USERNAME = config.capabilities.userDetail;
            var loginData = browser.params.login;
            //Wait for login field and enter credentials
            cLog.info('entering credentials');
            /**
             * calling method to update the user password using Rest Call
             */
            browser.wait(EC.elementToBeClickable(elements.txtUserID),DATA.ELEMENTWAIT,"Failed at waiting for Password");
            // Enter credentials at lone star login page and submit the details
            page.Actions.enterText(elements.txtUserID,config.capabilities.userDetail).then (function() {
                cLog.info('Entering User ID');
                browser.wait(EC.textToBePresentInElementValue($('#txtLogin'), config.capabilities.userDetail), DATA.ELEMENTWAIT);
                expect(elements.txtUserID.getAttribute('value')).toBe(config.capabilities.userDetail);
            });
            page.Actions.enterText(elements.txtPassword,  "Password_"+ page.Actions.getTodayDate());
            page.Actions.waitAndClick(elements.btnSignIn, "btnSignIn");
            /*Handling feedback window*/
            browser.sleep(6000);
            elements.btnFeedBackClose.isPresent().then(function(blnBtnPresent){
                if(blnBtnPresent){
                    page.Actions.waitAndClick(elements.btnFeedBackClose,"Clicking on the Close button in feedback window")
                }
            });
            page.Actions.waitAndClick(elements.lnkIndirectTile,'Indirect Tax tile.');
            page.sitewidepage.switchToIFrame();
            browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Indirect tax homepage took too much time to load.");
            // EC.visibilityOf(elements.lnkHomepage)().then(function (isVisible) {
            //     if(!isVisible){
            //         browser.refresh();
            //         browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, "Indirect tax homepage took too much time to load.");
            //        // page.sitewidepage.switchToIFrame();
            //     }
            // });
            browser.wait(protractor.ExpectedConditions.presenceOf(elements.lnkHomepage), DATA.WAITFOR,"Failed at waiting for Dashboard");
            return true;
        });
    };

// This function enters credentials for Lone star application for the Roles Tests and navigates system to Indirect tax home page.
    this.enterCredentialsForRoles = function(USERNAMEFORROLES) {

        return browser.getProcessedConfig().then(function(config){
            console.log("User Name from Roles " + USERNAMEFORROLES);
            USERNAME = USERNAMEFORROLES;
            browser.wait(EC.elementToBeClickable(elements.txtUserID),DATA.ELEMENTWAIT,"Failed at waiting for Password");
            // Enter credentials at lone star login page and submit the details
            page.Actions.enterText(elements.txtUserID,USERNAMEFORROLES).then (function() {
                cLog.info('Entering User ID');
                browser.wait(EC.textToBePresentInElementValue($('#txtLogin'), USERNAMEFORROLES), DATA.ELEMENTWAIT);
                expect(elements.txtUserID.getAttribute('value')).toBe(USERNAMEFORROLES);
            });
            page.Actions.enterText(elements.txtPassword,  "Password_"+ page.Actions.getTodayDate());
            page.Actions.waitAndClick(elements.btnSignIn, "btnSignIn");
            page.Actions.waitAndClick(elements.lnkIndirectTile,'Indirect Tax tile.');
            page.sitewidepage.switchToIFrame();
            browser.wait(protractor.ExpectedConditions.presenceOf(elements.lnkHomepage), DATA.WAITFOR,"Failed at waiting for Dashboard");
            return true;
        });
    };
    // This function navigates through all the menu options in Indirect tax homepage and validates their presence
    this.SiteNavigation = function() {
        var deferred = protractor.promise.defer();
        var arrMenuList = [];
        //Wait until Homepage, companies links are present in the page
        browser.wait(protractor.ExpectedConditions.presenceOf(elements.lnkHomepage), DATA.WAITFOR,"Failed at waiting for Dashboard");
        browser.wait(EC.presenceOf(elements.lnkCompanies),DATA.ELEMENTWAIT,"Failed at waiting for Companies");
        browser. waitForAngularEnabled(false);
        element.all(by.repeater('entry in $ctrl.menu')).each (function(element){
            element.getText().then(function (text){
                arrMenuList.push(text);
            });
        });
        // Verify Reports tab
        expect(elements.lnkReporting.isPresent()).toBe(true);

        // verify menu option under Configuration
        page.Actions.waitAndClick(elements.lnkConfiguration);
        expect(elements.lnkMapping.isPresent()).toBe(true);
        expect(elements.lnkBasicSetup.isPresent()).toBe(true);
        expect(elements.lnkAdvancedSetup.isPresent()).toBe(true);
        expect(elements.lnkAuthorities.isPresent()).toBe(true);
        expect(elements.lnkReferenceData.isPresent()).toBe(true);

        // Verify the menu options under Certificate Manager
        page.Actions.waitAndClick(elements.lnkCertificateManager);
        expect(elements.lnkCustomers.isPresent()).toBe(true);
        expect(elements.lnkCertificates.isPresent()).toBe(true);
        expect(elements.lnkNotifications.isPresent()).toBe(true);
        expect(elements.lnkCmReport.isPresent()).toBe(true);

        // Verify the menu options under Tools
        page.Actions.waitAndClick(elements.lnkTools);
        expect(elements.lnkTaxTools.isPresent()).toBe(true);
        expect(elements.lnkCompliance.isPresent()).toBe(true);
        expect(elements.lnkAdministration.isPresent()).toBe(true);

        deferred.fulfill(true);
        return deferred.promise;

    };


    //Function to click on required menu options as per the received arguments
    this.NavigateTo = function(argTraverse) {
        //Split the string to an array of menu options
        var arrMenuItems = argTraverse.split('|');
        //Wait until menu options are present
        // browser.wait(EC.presenceOf(elements.lnkHomepage),DATA.WAITFOR);
        //Loop which iterates for each menu option in the array
        //arrMenuItems.forEach(function(entry) {
        loneStarHomePageContext.clickMenu(arrMenuItems[(arrMenuItems.length)-1]);
        browser.wait(EC.invisibilityOf(elements.icoBusyLoader), DATA.WAITFOR, "Page has not loaded.");
        browser.wait(EC.visibilityOf(elements.lnkConfiguration), DATA.WAITFOR, "Configuration link in nav bar is not visible.");
    };

    //Signs out of the application
    this.signOut = function() {
        browser.wait(EC.invisibilityOf(icoBusyLoader), DATA.WAITFOR, 'Bento to be invisible');
        //Switch back to parent frame/window.
        browser.driver.switchTo().defaultContent();
        // Click on the profile link on the top right of the menu bar, this click will pop out sign out drop down option
        page.Actions.waitAndClick(elements.lnkProfile, "lnkProfile");
        //Wait for sign out link to be available to click
        page.Actions.waitAndClick(elements.txtSignOut, "txtSignOut");
    };


    // Wait until all the tiles are loaded and click on the Determination tile
    this.clickDeterminationTile = function() {
    };

    //Switch case to click on Menu options, this will be called by Navigateto Function
    this.clickMenu = function(entry){
        cLog.debug("module name -->"+ entry);
        //browser.wait(EC.presenceOf(elements.lnkHomepage),DATA.WAITFOR);
        var indHomeUrl =browser.params.baseUrl+"indirect/";
        var moduleUrl ;
        var caseElem = entry.toUpperCase();
        browser.driver.controlFlow().execute(function() {
            switch (caseElem){
                case "STANDARD MAPPING"	 :  page.sitewidepage.clickonStandardMappingsTab(); break;
                case "CONDITIONAL MAPPINGS" : page.sitewidepage.clickonConditionalMappingTab(); break;
                case "ERP CODE MAPPING" : page.sitewidepage.clickonErpCodeMappingTab(); break;
                case "TAX JURISDICTIONS" : page.sitewidepage.clickonTaxjurisidictionTab(); break;
                case "VAT GROUP REGISTRATIONS" : page.sitewidepage.clickOnVatGroupTab(); break;
                case "CUSTOM FIELDS" : page.sitewidepage.clickonCustomFieldsTab(); break;
                case "CUSTOM PRODUCTS" : page.sitewidepage.clickonCustomProuctsTab(); break;
                case "ALLOCATIONS" :page.sitewidepage.clickonAllocationTab(); break;
                case "TAX RESPONSE FILTERS":page.sitewidepage.clickonTaxResponseFiltersTab();break;//own
                case "TRANS EDITOR GROUPS" : page.sitewidepage.clickonTransEditorTab(); break;
                case "CERTIFICATE MANAGER CONFIGURATION" : page.sitewidepage.clickOnCertificateManagerConfigTab(); break;
                case "STANDARD AUTHORITIES":  page.sitewidepage.clickonStandardAuthoriotiesTab(); break;
                case "CUSTOM AUTHORITIES":  page.sitewidepage.clickOnCustomAuthoritiesTab(); break;
                case "AUTHORITY TYPES":  page.sitewidepage.clickonAuthoritytypesTab(); break;
                case "AUTHORITY OPTIONS": page.sitewidepage.clickOnAuthorityOptionsTab(); break;
                case "CUSTOM AUTHORITY TYPES": page.sitewidepage.clickOnCustomAuthorityTypesTab(); break;
                case "ZONES": page.sitewidepage.clickonZonesTab(); break;
                case "LOOKUP LISTS": page.sitewidepage.clickonLookupListsTab(); break;
                case "LOCATIONS":page.sitewidepage.clickonLocationsTab(); break;
                case "LOCATION SETS": page.sitewidepage.clickonLocationSetsTab(); break;
                case "LICENSE TYPES": page.sitewidepage.clickonLicenseTypesTab(); break;
                case "LICENSES": page.sitewidepage.clickonLicensesTab(); break;
                case "UNITS OF MEASURE":page.sitewidepage.clickonUOMTab(); break;
                case "CUSTOMERS":page.sitewidepage.clickOnCustomersTab(); break;
                case "CERTIFICATES": page.sitewidepage.clickOnCertificatesTab(); break;
                case "MODEL SCENARIO":page.sitewidepage.clickonModelScenarioTab(); break;
                case "ONESOURCE CONTENT": page.sitewidepage.clickonOnesourceContent(); break;
                case "USERS AND ROLES":page.sitewidepage.clickonUsersandRolesTab(); break;
                case "COMPANIES": page.sitewidepage.clickOnCompaniesTab(); break;
                case "REPORTS":page.sitewidepage.clickOnReportsTab(); break;
                case "NOTIFICATIONS": page.sitewidepage.clickOnNotificationTab(); break;
                case "PORTAL ADMIN CONSOLE": page.sitewidepage.clickOnPortalAdminConsoleTab(); break;
                case "EXEMPT REASONS": page.sitewidepage.navigateToExemptReasonsPage(indHomeUrl+"exemption-certificates/exempt-reasons"); break;
                case "CUSTOM RULES" : page.sitewidepage.clickOnCustomAuthoritiesTab(indHomeUrl+"configuration/authorities/custom"); break;
                //case "RATESANDFEE" : moduleUrl = "configuration/authorities/authorities-details/rates-fees/custom"; break;
                case "HELP" : page.sitewidepage.clickOnHelpPage(); break;
                case "CM REPORTS" : page.sitewidepage.clickOnCmReports(); break;
            }
        });
    };

};

module.exports.LoneStarHomePage = LoneStarHomePage;

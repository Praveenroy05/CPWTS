// Framework - It is a design principle. Set of guidlines.

// POM - Page Object Model 

function login(){
    // fill the username
    // fill the password
    // click on login button
}

// login()

// 1. Reusability - 
// 2. Reduce the duplication
// 3. Less maintenance
// 4. Organise the code - Separation of a logic into different layer


// POM - Page Object Model

// Page Object Model is a design pattern used in the software testing to represent a webpage as an object(class). It is a wayt ot organise and manage the code by creting the proper classes. Properties and methods. 

// Properties - Locators
// methods - loginIntoApplication(), invalidLogin(), 

// POM frameowrk from scratch

// There will be different layers that we have to create.

// 1. PAGE LAYER - Will create a folder with the name as pages. This page layer will consists of locators and methods related to specific page.
// LoginPage.TS - Locators related to Login Page and methods related to login page
// DashboardPage.ts - Locators related to dashboard page
// CartPage.ts - Locators related to cartPage

// 2. TEST LAYER - We already have folder created (tests). Will create multiple test files. These test file should consists of Pure test case (steps of the test case)and assertion. which will be called from PAGE LAYER by creating an object.
// Ex: loginPageTest.spec.ts - Call the different mathods from the PAGE lAYER and write the assertion.
// Ex:- dahboardPageTest.spec.ts


// 3. TEST DATA - Data related to the test case. .json/excel sheet

// 4. REPORT LAYER - HTML/Allure

// 5. CONFIGURATION LAYER - generate the log trace, screenshot, video, timeout 

// 6. UTILS LAYER - get the data from excel, scrollDown(), screenshot()








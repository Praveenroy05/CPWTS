// Import test and expect function
// write the test case by using test()
// create an object for page(Login page) - const loginPage  = new LoginPage()
// Inside the test cases - call the methods - loginPage.loginIntoApplication()
// Assertions - Validation by using expect()


import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

const url = "https://rahulshettyacademy.com/client"
const username  = "test7lYM@gmail.com"
const password  = "Test@123"
const incorrectPassword = "Test"

let loginPage : LoginPage
test.beforeEach(async function({page}){
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
})
test("Login with valid credentials",{tag : ['@regression', '@smoke']}, async function(){
    await loginPage.loginIntoApplication(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})


test("@smoke @regression Invalid login scenario", async function(){
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
})

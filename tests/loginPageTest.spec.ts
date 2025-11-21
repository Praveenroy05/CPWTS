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



test("Login with valid credentials",{tag :'@smoke'}, async function({page}){
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})


test("@regression Invalid login scenario", async function({page}){
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
})

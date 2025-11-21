// Import test and expect function
// write the test case by using test()
// create an object for page(Login page) - const loginPage  = new LoginPage()
// Inside the test cases - call the methods - loginPage.loginIntoApplication()
// Assertions - Validation by using expect()


import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import data from '../TestData/login.json'



let loginPage : LoginPage
test.beforeEach(async function({page}){
    loginPage = new LoginPage(page)
    await loginPage.launchURL(data.url)
})

test.describe("Login Page Test", async ()=>{
    test("Login with valid credentials", async function(){
        test.step("Login into application", async ()=>{
           await loginPage.loginIntoApplication(data.username, data.password)
        })
        test.step("Validte if login is successful or not", async ()=>{
            await expect(loginPage.homePageIdentifier).toBeVisible()
        })
    })


    test("Invalid login scenario", async function(){
        await loginPage.invalidLogin(data.username, data.incorrectPassword)
        await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
    })
})


// const data1 = {
//   url: 'https://rahulshettyacademy.com/client',
//   username: 'test7lYM@gmail.com',
//   password: 'Test@123',
//   incorrectPassword: 'Test'
// }

// console.log(data1.url);
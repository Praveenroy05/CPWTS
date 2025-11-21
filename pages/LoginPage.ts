 // Locator related to login page and


    
 // Locators
 // username
 // password
 // loginBtn 
 // HomePageIdentifier
 // erroMessage
 // Email is required
 // Password is required


 // methods related to login page

   // Valid credentails - loginIntoApplication() - correct username and correct password
   // Invalid credentails - invalidLogin() - Either username or password incorrect
   // Empty crendetils - 

import { Locator, Page } from "playwright";

export class LoginPage{

        // properties - locators

        page : Page
        username :Locator 
        password : Locator
        loginBtn : Locator
        errorMessage : Locator
        homePageIdentifier : Locator
        emailRequired : Locator
        passwordRequired : Locator

        constructor(page :Page){
         this.page = page
         this.username = this.page.getByPlaceholder("email@example.com")
         this.password = this.page.getByPlaceholder("enter your passsword");
         this.loginBtn = this.page.locator("input#login")
         this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/']")
         this.errorMessage = this.page.locator("#toast-container")
         this.emailRequired = this.page.getByText("*Email is required", {exact : true})
         this.passwordRequired = this.page.getByText("*Password is required", {exact : true})

        }
      
      async launchURL(url : string){
         await this.page.goto(url)

      }

      async loginIntoApplication(username: string, password: string){
         await this.username.fill(username)
         await this.password.fill(password)
         await this.loginBtn.click()
      }

      async invalidLogin(username : string, incorrectPassword: string){
          await this.username.fill(username)
          await this.password.fill(incorrectPassword)
          await this.loginBtn.click()
      }


        





        // methods





   }

  


import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import datas from '../TestData/product.json'
// console.log(datas);




let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)

})

for(let data of datas){
    test(`Add the product to cart for ${data.productName}`, async ()=>{
        await  loginPage.launchURL(data.url)
        await loginPage.loginIntoApplication(data.username, data.password)
        await dashboardPage.searchAndAddProductToCart(data.productName)
        await expect(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
    })
}



// Json or Excel

// JSON - Javascript Object Notation

// const datas1 = 
// [
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     username: 'test7lYM@gmail.com',
//     password: 'Test@123',
//     productName: 'IPHONE 13 PRO'
//   },
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     username: 'test7lYM@gmail.com',
//     password: 'Test@123',
//     productName: 'ZARA COAT 3'
//   },
//   {
//     url: 'https://rahulshettyacademy.com/client',
//     username: 'test7lYM@gmail.com',
//     password: 'Test@123',
//     productName: 'ADIDAS ORIGINAL'
//   }
// ]

// for(let data of datas1){
//     console.log(data.productName);
  
// }


// data = {
//     url: 'https://rahulshettyacademy.com/client',
//     username: 'test7lYM@gmail.com',
//     password: 'Test@123',
//     productName: 'IPHONE 13 PRO'
// }

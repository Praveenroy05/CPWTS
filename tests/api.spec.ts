// API - Application Programming Interface

// 3 Layers
// Fornt end
// Back end
// Database


// Request Format:

// API - https://rahulshettyacademy.com/api/ecom/auth/login
// Method - GET/POST/PUT/Delete - POST
// Body - {userEmail: "testnHNk@gmail.com", userPassword: "Testing@1234"}
// Header - authorisation - NO


// Response Format
// Status code - 200 OK
// Header - No
// Response : JSON
/*
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ0Njc1NWFlMmFmZDRjMGI2Mjg2YmMiLCJ1c2VyRW1haWwiOiJ0ZXN0bkhOa0BnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjoxMjM0NTY3ODkwLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzYzNzA5MzA2LCJleHAiOjE3OTUyNjY5MDZ9.rJQoquCYqbtKyz9ulkLEsYPwI2AMmaAqPzFAaZjcxxI",
    "userId": "66d46755ae2afd4c0b6286bc",
    "message": "Login Successfully"
}
*/

import {test, expect, request} from '@playwright/test'

const loginAPI = "https://rahulshettyacademy.com/api/ecom/auth/login"
const loginPayload = {userEmail: "testnHNk@gmail.com", userPassword: "Testing@1234"}
const orderPayload = {orders: [{country: "Bahrain", productOrderedId: "68a961959320a140fe1ca57e"}]}
test("API testing", async ()=>{

    const apiContext = await request.newContext()
    const apiResponse = await apiContext.post(loginAPI, {

        data: loginPayload,

        // headers :{
        //     "authorization " : "sjdhfjfd"
        // }
    })
    await expect(apiResponse.status()).toBe(200)
    const jsonResponse = await apiResponse.json()
    const token = await jsonResponse.token

    console.log(token);

   const orderResponse =  
   await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
    
        data : orderPayload,
        headers :{
            "authorization" : token
        }
    
    })

    expect(orderResponse.status()).toBe(201)

    const orderJsonResponse = await orderResponse.json()
    console.log(await orderJsonResponse.orders[0])




    // API - https://rahulshettyacademy.com/api/ecom/order/create-order
    // Method - POST
    // Body - {orders: [{country: "Bahrain", productOrderedId: "68a961959320a140fe1ca57e"}]}
    // headers : {
   //  "authorization" : token
  //  }

    // Response  - Response status should be 201 
    // //print the order ID

})


test('Mock GET API', async ({page})=>{
    await page.route('**/api/users', async route =>{
        await route.fulfill({
            status : 200,
            contentType: 'application/json',
            body : JSON.stringify({
                users : [
                    {id : 1, name : "Mock User"},
                    {id : 2, name : "Cyient User"},
                    {id : 1, name : "Cyient User2"},
                ]
            })
        })
    })

    await page.goto("https://rahulshettyacademy.com/api/users")
    await page.waitForTimeout(50000)
})


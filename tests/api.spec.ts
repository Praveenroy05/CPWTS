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

test("API testing", async ()=>{

})
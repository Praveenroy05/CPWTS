// Alert/popup - Dialog event appeared on the page

// Alert - Playwright by default handles the alert - by default it dismiss the alert.


import {test, expect} from '@playwright/test'

test("Handling alerts", async function({page}){
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    page.on('dialog', function(dialog){
        const message  = dialog.message() // get the message from the dialog
        expect(message).toBe("Hello , share this practice page and share your knowledge")
        dialog.accept() // Click on Ok button
       // dialog.dismiss() // click on Cancel button
    })

    await page.locator("#alertbtn").click()
    await page.waitForTimeout(2000)
    console.log("Clicked on Alert button");
   
    // await page.locator("#confirmbtn").click()
    // console.log("Clicked on Confirm Alert button");
    // await page.waitForTimeout(2000)

   
})
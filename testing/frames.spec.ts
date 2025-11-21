// Frames - 

// Step by step process:
// Launch the url
// identify the frames by writing the locator for iframe tag - 
// const framePage = page.frameLocator() - Identify the frame page 
// you can perform the action inside the frames by using framePage similar page
// TO come back to the main page you can start using "page"

import {test, expect} from '@playwright/test'

test("Frames handling", async function({page}){
    // frameLocator() - When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe.

    await page.goto("https://demo.automationtesting.in/Frames.html")

    const framePage = await page.frameLocator("#singleframe")

    await framePage.locator("[type='text']").first().fill("Testing")
    await expect(framePage.locator("[type='text']").first()).toHaveValue("Testing")
    
    await page.getByText("Home", {exact: true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()


})
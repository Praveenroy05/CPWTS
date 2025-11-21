// Getting tex from element - 

// innerText()/textContent() - Will return the text value from an element 
// allInnerTexts()/ allTextContexts() - Will return the text value from multiple matching element in the form of array - []

import {test, expect} from '@playwright/test'

test("Get text value from elements", async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    const elementText = await page.locator("div.practice-form-wrapper h1").textContent()
    console.log(elementText);
    await expect(elementText).toBe("Practice Form")

    const allText = await page.locator(".form-label").allTextContents()
    console.log(allText);
})


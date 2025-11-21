// Multiple Windows - 

// Step by step process to handle multiple windows

// Launch the url - page.goto() - page will have a visibility limited to the launch
// Perform the action on the main page and click on "click" button
// Upon clicking on "click" button it will open a new page - popup event
// wait for popup event to appear on this - const newPage  = await  page.waitForEvent("popup")
// By using newPage as avariable/object/fixture you will be able to handle everything on the newly created page
// When you have go back to the main page  - page


import { test, expect} from '@playwright/test'

test("Multiple windows handling", async function({page}){
    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.getByRole('button', {name : 'click'}).click()

    const newPage = await page.waitForEvent('popup')  // popup event

    await newPage.locator("[href='/downloads']").click()
    await expect(newPage.locator("#bindings")).toContainText("WebDriver Language")

    await page.bringToFront()
    await page.getByText("Home", {exact: true}).click()
    
})
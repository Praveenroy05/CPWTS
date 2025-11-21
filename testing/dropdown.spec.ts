// Drop down devloped in 2 ways

// 1. by using select <select> and 
// 2. Non-select, div li, input


// selectOption - select  - By default accepts value as a parameter
// Launch the url
// iidentify the drop down element by writing the locator
// selectOption() - value , text and index 


// Non-select taged drop down

// Launch the url
// Identify the drop down by writing the locator
// Click on the drop down element
// Write the locator for selecting the element from the drop down and click on that element



import {test, expect} from '@playwright/test'

test("Drop down for select tag" , async function({page}){
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption("saab")
    await page.waitForTimeout(2000)

    await page.locator("#cars").selectOption({label: "Audi"})
    await page.waitForTimeout(2000)

    await page.locator("#cars").selectOption({index: 2})
    await page.waitForTimeout(2000)

    await page.locator("#cars").selectOption(["volvo", "opel"])
    await page.waitForTimeout(2000)

    await page.locator("#cars").selectOption([{label: 'Audi'}, {index: 1}])
    await page.waitForTimeout(2000)

    // Non <select> drop down
    await page.locator("div.css-1hwfws3").first().click()
    await page.getByText("A root option", {exact: true}).click()
    await page.waitForTimeout(2000)


})


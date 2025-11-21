// Mouse Operation
// Click - click()
// Double Click - dblclick()
// Right Click - click({button: 'right'})
// Mouse Hover - hover()

import {test, expect} from '@playwright/test'

test("Mouse operations", async function({page}){
    await page.goto("https://demoqa.com/buttons")
    await page.getByText("Double Click Me", {exact : true}).dblclick()
    await expect(page.getByText("You have done a double click")).toBeVisible()

    await page.locator("#rightClickBtn").click({button : 'right'})
    await expect(page.locator("#rightClickMessage")).toHaveText("You have done a right click")

})

test("Hover over an element", async function({page}){
    await page.goto("https://www.spicejet.com/")
    await page.getByText("Add-ons", {exact: true}).hover()
    await expect(page.getByTestId("test-id-SpiceAssurance")).toBeVisible()
})


import {test, expect} from '@playwright/test'

test.only("Valid login validation", async function({page}){
    // goto("url") - It help us in terms of launching the url on the browser
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // page.locator("selector")

    // fill("student")
    // click()

    await expect(await page.locator("input#username")).toBeVisible()
    await page.locator("input#username").fill("student")
    await expect(page.locator("input#username")).toHaveValue("student")
    await page.locator("input[name='password']").fill("Password123")
    await page.locator("button.btn").click()
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    await expect(page.locator("h1.post-title")).toContainText("Successfully")

    // page.locator(".form-control").first()
    // page.locator(".form-control").last()
    // page.locator(".form-control").nth(2) // index starts with 0

    //  page.getByText('Student Registration Form', {exact: true})

    //  // ads adsabc
    //  page.getByText("ads", {exact: true})
    //  page.getByLabel("Username")
    //  page.getByPlaceholder("First Name")
    //  page.getByTitle("Home page link")
    //  page.getByTestId("edit-profile-btn")
    //  page.getByRole("button", {name: 'Login'})

    //  page.getByRole('textbox', { name: 'Username' })


    // toBeVisible() - For any element 
    // toHaveValue() - Only for textbox to check if an input field have exact value
    // toHaveText() - An element have exact text
    // toContainText() - An element contains some text 
    // await expect(page).toHaveURL() - page has URL

    // except(page.locator("")).toBeChecked()
    // 

})

test("Radio button and checbox validation", async function({page}){
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#female").click()
    await expect(page.locator("#female")).toBeChecked()
    await page.locator("#tuesday").click()
    await expect(page.locator("#tuesday")).toBeChecked()
})


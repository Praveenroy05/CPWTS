// Calendar  Selection

import {test, expect} from '@playwright/test'

test("Calendar handling", async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const day = "5"
    const month = "May"
    const year = "2027"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    while((await monthPicker.textContent() != month) || (await yearPicker.textContent() != year)){
        await page.getByText("Next").click()
    }

    await page.getByText(day, {exact: true}).last().click()
    await expect(page.locator("#sixth_date_picker")).toHaveValue(`05/05/2027`)
   
}) 
 
test("Calendar practice", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Datepicker.html")
    await page. locator("//img[@class='imgdp']").click()
    
    const day = "12"
    const month = "February"
    const year = "2027"
    
    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")
    
    while((await monthPicker.textContent()!= month)||(await yearPicker.textContent
    ()!= year) ) {
    await page.getByText("Next").click()
    }
    await page.getByText(day,{exact: true}).last().click()
    await expect(page.locator("#datepicker1")).toHaveValue('02/12/2027')
 
    await page.waitForTimeout(2000)// Wait for 2 seconds for sure
    await page.waitForEvent('popup') //  wait for popup evnt to ppear on the page
    await page.waitForLoadState('networkidle') - //Waits for all netwrok calls to finish
})
 
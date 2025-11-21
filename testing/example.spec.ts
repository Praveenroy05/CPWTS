import {test, expect} from '@playwright/test'

// page - It will auto open the browser and after completion of the test case it will auto close the browser

test("Validate login with valid credentials", async function({page}){


  // JS /TS are asynchrous

  // async - await 

  await page.getByRole('textbox', { name: 'Password' })

  // await launch the url
  // await fill the username
  // await fill the password
  // await click on login button


})

test("invalid login scenario", async function({page}){

})

// page.locator("#id").setInputFiles("C:/Users/prave/Videos/CyientPW/TestData/Banner.png")

// page.locator("#id").setInputFiles(["C:/Users/prave/Videos/CyientPW/TestData/Banner.png, C:/Users/prave/Videos/CyientPW/TestData/bdd.png"])


import {test, expect} from '@playwright/test'

test("File uploads", async function({page}){
 await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

 await page.locator("#filesToUpload").setInputFiles("C:/Users/prave/Videos/CyientPW/TestData/Banner.png")

 await expect(page.locator("#fileList li")).toContainText("Banner.png")

 await page.locator("#filesToUpload").setInputFiles(["C:/Users/prave/Videos/CyientPW/TestData/Banner.png", "C:/Users/prave/Videos/CyientPW/TestData/bdd.png"])

 await expect(page.locator("#fileList li").first()).toContainText("Banner.png")
 await expect(page.locator("#fileList li").last()).toContainText("bdd.png")


})


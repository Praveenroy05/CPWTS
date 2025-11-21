// Hooks - 

// test.beforeAll() - THis will run before executiing all the test inside the file
// test.beforeEach() - THis will run before each and every test case 
// test.afterEach() - This will run after each and every test case
// test.afterAll() - This will run after running all the test cases

import {test} from '@playwright/test'

test.beforeAll(async function(){
    console.log("Before All")
})

test.beforeEach(async function(){
    console.log("Before Each")
})

test.skip("Test1", async ()=>{
    console.log("Test1")
})
test("Test2", async ()=>{
    console.log("Test2")
})
test("Test3", async ()=>{
    console.log("Test3")
})

test.afterEach(async function(){
    console.log("After Each")
})

test.afterAll(async function(){
    console.log("After All")
})


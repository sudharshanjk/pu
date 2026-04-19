import {test, expect} from '@playwright/test';

test('Verify user can able to login', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    const username = page.locator('#username')
    await username.fill('student')

    await page.locator('#password').fill('Password123')

    await page.locator('#user-message').click()
    await page.locator('#user-message').blur()

    await page.locator('.btn').click();
    

});



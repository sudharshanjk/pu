import {test, expect} from '@playwright/test';

test('ToolsQA test', async({page})=>{


    await page.goto('https://demoqa.com/text-box');

    const fullname = page.locator('#userName');
    await fullname.fill('John Doe');
    await expect(fullname).toBeEnabled();

    await page.getByRole('textbox', { name: 'name@example.com' }).fill('raj@gmail.com');
    await expect(page.getByRole('textbox', { name: 'name@example.com' })).toBeEnabled();

    const button = page.getByRole('button', { name: 'Submit' });
    await expect(button).toBeEnabled();
    await button.click();

    await page.getByRole('listitem').filter({ hasText: 'Check Box' }).click();

    const checkbox = page.locator('button[aria-label="Select Home"]');
    await expect(checkbox).toBeEnabled();
    await expect(checkbox).toBeVisible();
    await checkbox.click();
    
    await expect(page.getByText('You have selected :home')).toBeVisible();

});

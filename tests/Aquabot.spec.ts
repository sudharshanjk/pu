import {test, expect} from '@playwright/test';

test('Aquabot test', async({page})=>{

    await page.goto('https://aquabottesting.com/#');
    // await expect(page.getByAltText('Aquabot')).toBeVisible();

    await expect(page.getByText('Automated Testing',))
    
    await expect(page.getByText('DISCOVER')).toBeVisible();
    

    
});
import {test, Expect, expect} from '@playwright/test';

test('test', async({page})=>{

    await page.goto("https://www.opencart.com/index.php?route=cms/demo&member_token=7e3b454a037a600c8cd610db22531258")
    await expect(page).toHaveTitle("OpenCart - Demo")

    await page.getByText("View Store Front").click();

    const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click('Your Store') // element that opens new tab
  ]);

  // Wait until new tab loads
  await newPage.waitForLoadState();

  // Now you are inside the new tab
  console.log(newPage.url());

});



import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/');
  await page.getByRole('textbox', { name: 'Please enter first value' }).click();
  await page.getByRole('textbox', { name: 'Please enter first value' }).fill('11');
  await page.getByRole('textbox', { name: 'Please enter second value' }).click();
  await page.getByRole('textbox', { name: 'Please enter second value' }).fill('11');
  await page.getByRole('button', { name: 'Get Sum' }).click();
  await page.getByText('22').click();
  
});
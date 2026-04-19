import { test, expect } from '@playwright/test';

test.describe('dropdown test', () => {

test('dropdown test', async ({ page }) => {
  
  await page.goto('https://aquabottesting.com/#');
  
  
  const discover = page.getByRole('link', { name: 'DISCOVER' });
  await discover.waitFor({ state: 'visible' });
  await discover.click();

  await page.getByRole('button', { name: 'CHANGE TEXT' }).click();

  const Name = page.getByRole('textbox', { name: 'Name' });
  await expect(Name).toBeVisible();
  await Name.fill('John Doe');

  await page.locator('.nav-link.page-scroll.active').click();
  
  const drop = page.getByRole( 'button', { name: 'Tables'});
  await expect(drop).toBeEnabled();
  await drop.click();

 
    await page.getByRole('link', { name: 'Programming Languages' }).click();
    });
  });

 

// Codegen - Record and Playback tool

// To open codegen - npx playwright codegen "url"

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByText('Gender:')).toBeVisible();
  await expect(page.locator('#HTML5')).toContainText('Dynamic Button');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Testing');
  await expect(page.getByRole('textbox', { name: 'Enter Name' })).toHaveValue('Testing');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('test@test.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('8976546742');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('Hyderabad');
  await page.locator('.form-group > div:nth-child(4)').first().click();
  await page.locator('.form-group > div:nth-child(5)').click();
  await page.getByText('Wednesday').click();
});

// get the text value for from an element and from multiple elements



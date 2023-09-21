import { test, expect } from '@playwright/test';

test('should open The PayPal popup', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const page1Promise = page.waitForEvent('popup');
  await page
    .frameLocator('iframe[name^="__zoid__paypal_buttons"]')
    .getByRole('link', { name: 'PayPal' })
    .click({
      delay: 2000,
    });

  const page1 = await page1Promise;

  await expect(page1.getByPlaceholder('Email or mobile number')).toBeVisible();

  await page1.close();
  await page.close();
});

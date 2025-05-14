// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Weather App");
});

test('input lat and long values and submit', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Fill textboxes
  await page.getByRole('textbox', {name: 'lat'}).fill('45');
  await page.getByRole('textbox', {name: 'long'}).fill('17');

  // Click the submit button.
  await page.getByRole('button', { name: 'Submit' }).click();

  // Expects page to have headings with the name of Weather and Location.
  await expect(page.getByRole('heading', { name: 'Weather' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Location' })).toBeVisible();
});

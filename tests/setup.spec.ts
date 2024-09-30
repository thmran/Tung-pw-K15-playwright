import { test, expect } from '@playwright/test';

test('test setup', async ({ page }) => {
    await page.goto("https://staging-manabie.my.salesforce.com/")
});
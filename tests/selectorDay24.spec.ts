import test from "@playwright/test";

const pageUrl = 'https://staging-manabie.my.salesforce.com/';
const spuAccount = { userName: 'phuc.chau+staffspu1@manabie.com', password: 'Manabie@123' }


test('Link Text - XPATH', async ({ page }) => {
    await page.goto('/');

    //find forgot password link
    const forgotPasswordLocator = await page.locator('//a[contains(text(),"Forgot Your Password?")]');
    await forgotPasswordLocator.click()

    await page.close()

})

test('Link Text - CSS', async ({ page }) => {
    await page.goto('/');

    //find forgot password link // refer other location on playwright
    const forgotPasswordLocator = await page.locator('a:has-text("Forgot Your Password?")');
    await forgotPasswordLocator.click()

    await page.close()

})

test('Link Text2 - CSS', async ({ page }) => {
    await page.goto('https://learner.manabie.net/');

    //find forgot password link // refer other location on playwright
    await page.goto('https://learner.manabie.net/#/auth_search_organization');
    await page.getByPlaceholder('Organization ID').click();
    await page.getByPlaceholder('Organization ID').fill('lmsv2');
    await page.getByPlaceholder('Organization ID').dblclick();



})
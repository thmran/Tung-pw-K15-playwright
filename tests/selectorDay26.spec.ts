import test from "@playwright/test";

const pageUrl = 'https://staging-manabie.my.salesforce.com/';
const spuAccount = { userName: 'phuc.chau+staffspu1@manabie.com', password: 'Manabie@123' }


test('Handle js_alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    //find forgot password link
    const forgotPasswordLocator = await page.locator('//a[contains(text(),"Forgot Your Password?")]');
    await forgotPasswordLocator.click()
    await page.close()

})
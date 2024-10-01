import test from "@playwright/test";

const spuAccount = { userName: 'manhtung.tran+rensei2-uat.platform.user@manabie.com', password: '123456sf' }


test('test create Student', async ({ page }) => {
  await page.goto('https://rensei2--uat.sandbox.my.salesforce.com/');

  //selector login
  const usernameLocator = await page.locator('input[name="username"]');
  const passwordLocator = await page.locator('input[name="pw"]');
  const loginLocator = await page.locator('input[name="Login"]');
  await usernameLocator.fill(spuAccount.userName);
  await passwordLocator.fill(spuAccount.password);
  await loginLocator.click();

  //locator create student
  const newContactButtonLocator = await page.locator('a.forceActionLink[title="New"]');
  const studentRecordRadio = page.getByLabel('New Contact').getByText('Student', { exact: true })
  const parentRecordRadio = page.getByLabel('New Contact').getByText('Parent', { exact: true })
  const staffRecordRadio = page.getByLabel('New Contact').getByText('Student', { exact: true })
  const nextButton = page.getByRole('button', { name: 'Next' })


  //controller 
  await newContactButtonLocator.click();
  await studentRecordRadio.click();
  await nextButton.click();


  //For DEBUG PURPOSE

  await page.waitForTimeout(3000)

})
const { test, expect } = require('@playwright/test'); 

test('UI_Scenario_01 - Clear button should reset the input field', async ({ page }) => {
    
    await page.goto('https://www.swifttranslator.com/');

    const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputField.fill('test message');

    const clearButton = page.locator('button[title="Clear"]').first();
    await clearButton.click();

    const inputValue = await inputField.inputValue();
    expect(inputValue).toBe(''); 
});
const { Builder, By } = require('selenium-webdriver');
const path = require('path');

async function runTest() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {

        const filePath = 'file://' + path.resolve(__dirname, 'index.html');


        await driver.get(filePath);
        await driver.sleep(2000);


        await driver.findElement(By.id('username')).sendKeys('TestUser123');
        await driver.sleep(2000);



        await driver.findElement(By.id('email')).sendKeys('test@example.com');
        await driver.sleep(2000);

        await driver.findElement(By.id('password')).sendKeys('SecurePass456');
        await driver.sleep(2000);


        await driver.findElement(By.id('submitBtn')).click();
        await driver.sleep(500);

        console.log("Form filled and submitted slowly!");

    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        await driver.quit();
    }
}

runTest();
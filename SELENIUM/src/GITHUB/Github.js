import { Builder, By, until } from 'selenium-webdriver';

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        
        await driver.get('https://github.com/Mirriam-Maina');

        await driver.findElement(By.className('vcard-fullname'))
                    .getText().then((value) => { expect(value).to.equal('Mirriam'); });
        await driver.findElement(By.className('vcard-username'))
                    .getText().then((value) => { expect(value).to.equal('Mirriam-Maina'); });

        let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

        console.log(await firstResult.getAttribute('textContent'));
    }
    finally{
        driver.quit();
    }
})();
  
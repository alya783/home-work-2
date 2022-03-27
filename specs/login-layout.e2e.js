// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('should login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        const login = await $('#login').getValue();
        await $('#password').setValue('password');
        await browser.pause(1000);
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 10500 });
        const user = await $('#user-label').getAttribute('title');
        if(login !== user){
            throw new Error('You don`t login into system with right user!!!');
        }

        await browser.pause(3000);

        const navItems = await $$('//*[@id="first-nav-block"]//*[contains(@class, "nav-item")]');        
        for (const item of navItems){
            await item.moveTo();
            await browser.pause(1500);
            let color = await item.getCSSProperty("background-color");
            if(color.value === 'rgba(255,0,0,1)'){
                const text = await item.getText();
                throw new Error(`Item ${text} has wrong color`);
            }
        }         
    });
});



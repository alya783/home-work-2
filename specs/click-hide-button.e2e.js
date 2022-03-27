// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('click on hide button', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await browser.pause(1000);
        await $('button').click();
        const header = await $('header');
        await browser.pause(10000);
        await browser.execute((elem) => elem.remove(), header);
        await browser.pause(5000);
        await $('//*[@id="dashboard"]/div[1]/div/div/button').click();
        await browser.pause(3000);
        await browser.acceptAlert();
        await browser.pause(1000);
    });
});



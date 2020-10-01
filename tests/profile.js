describe('Account Management', () => {
    it('should be able to login by email and password', async() => {
        await page.goto(process.env.MG_HOST)
        await page.click('text="Accept Cookies"')
        await page.click('text="Sign in"')
        expect(page.url()).toBe(`${process.env.MG_HOST}/login`)
        await page.click('text="Use a local user"')
        expect(page.url()).toBe(`${process.env.MG_HOST}/login#`)
        await page.click('input[name="username"]')
        await page.fill('input[name="username"]', process.env.MG_ADMIN_USER)
        await page.press('input[name="username"]', 'Tab')
        await page.fill('input[name="password"]', process.env.MG_ADMIN_PW)
        expect(await page.title()).toBe('Login')
        await page.click('form[role="form"] >> text="Sign in"')
        await page.click('text=/.*Sign out.*/')
    })
})


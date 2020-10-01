describe('Account Management', () => {
    it('should be able to login by email and password', async() => {
        await page.goto(process.env.MG_HOST)
        await page.click('text="Accept Cookies"')
        await page.screenshot({ path: 'screenshots/account-cookie-wall.png' })
        await page.click('text="Sign in"')
        expect(page.url()).toBe(`${process.env.MG_HOST}/login`)
        await page.click('text="Use a local user"')

        // Small delay to account for collapsing transitions while taking
        // screenshots. This is a nice example why CS transitions should be
        // disabled during tests. A common technique is to add a test class
        // to <html> and take some extra measures to style the ui specifically
        // for the test-runner. Typical cases where this is done:
        // * Blurring credential fields
        // * Disabling transitions
        // * Adding styles for instructional purposes
        await new Promise((resolve) => setTimeout(() => resolve(), 500))
        await page.screenshot({ path: 'screenshots/account-login-modal.png' })

        await page.click('input[name="username"]')
        await page.fill('input[name="username"]', process.env.MG_ADMIN_USER)
        await page.press('input[name="username"]', 'Tab')
        await page.fill('input[name="password"]', process.env.MG_ADMIN_PW)
        expect(page.url()).toBe(`${process.env.MG_HOST}/login#`)
        expect(await page.title()).toBe('Login')

        await page.click('form[role="form"] >> text="Sign in"')
        await page.click('text=/.*Sign out.*/')
    })
})


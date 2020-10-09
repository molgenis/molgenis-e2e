const { chromium } = require('playwright')
require('dotenv').config()
const _ = require('./utils.js')

module.exports = async () => {
    const browser = await chromium.launch({
        headless: true
    })

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://playwright.test.molgenis.org/')
    await page.click('text="Sign in"')
    await _.screenshot(page, 'account-login', {nocount: true})
    await page.click('input[name="username"]')
    await page.fill('input[name="username"]', process.env.MG_ADMIN_USER)
    await page.press('input[name="username"]', 'Tab')
    await page.fill('input[name="password"]', process.env.MG_ADMIN_PW)
    await page.click('form[role="form"] >> text="Sign in"')

    const cookies = await context.cookies()
    process.env.COOKIES = JSON.stringify(cookies)
    browser.close()
}
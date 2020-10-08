const _ = require('../utils.js')

describe('Navigator', () => {
    const deserializedCookies = JSON.parse(process.env.COOKIES)
    beforeAll(async() => {
        await context.addCookies(deserializedCookies)
    })

    it('a - navigate to a table', async() => {
        await page.goto(process.env.MG_HOST)
        await page.click('text=/.*Navigator.*/')
        expect(page.url()).toBe(`${process.env.MG_HOST}/menu/main/navigator`)
        await _.screenshot(page, 'navigator-a-module-open')

        await page.click('text=/.*System.*/')
        expect(page.url()).toBe(`${process.env.MG_HOST}/menu/main/navigator/sys`)
        await _.screenshot(page, 'navigator-a-navigate-sys')

        await page.click('table[id="__BVID__36"] >> text=/.*Settings.*/')
        expect(page.url()).toBe(`${process.env.MG_HOST}/menu/main/navigator/sys_set`)
        await _.screenshot(page, 'navigator-a-navigate-settings')

        await page.click('text=/.*StyleSheet.*/')
        expect(page.url()).toBe(`${process.env.MG_HOST}/menu/main/dataexplorer?entity=sys_set_StyleSheet&hideselect=true`)
        await _.screenshot(page, 'navigator-a-navigate-de')
    })
})


let screenshotCount = 1

async function screenshot(page, name, {nocount = false} = {}) {
    if (nocount) {
        await page.screenshot({ path: `screenshots/${name}.png` })
    } else {
        await page.screenshot({ path: `screenshots/${screenshotCount}. ${name}.png` })
        screenshotCount += 1
    }
}

module.exports = {
    screenshot
}
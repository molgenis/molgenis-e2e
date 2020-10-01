module.exports = {
  launchOptions: {
    headless: false
  },
  exitOnPageError: false, // don't exit the test on javascript errors
  contextOptions: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1920,
      height: 1080
    }
  },
  browsers: ['chromium'],
  devices: []
}

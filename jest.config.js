module.exports = {
  preset: 'jest-playwright-preset',
  globalSetup: './setup.js',
  setupFiles: ['dotenv/config'],
  testMatch: [
    '**/tests/**/*.js'
  ]
}

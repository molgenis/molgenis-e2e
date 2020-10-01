module.exports = {
  preset: 'jest-playwright-preset',
  setupFiles: ['dotenv/config'],
  testMatch: [
    '**/tests/**/*.js'
  ]
}

# molgenis-e2e

This is a short tech demo of [Playwright](https://github.com/microsoft/playwright/)
and Github Actions, to illustrate that E2E-testing can be both cheap and fast.
Playwright and [Puppeteer](https://developers.google.com/web/tools/puppeteer/)
are approachable modern browser-testing libraries that only have a few moving parts
between library and the browser. It is somewhat subjective, but it reflects in
having a faster, more reliable and controllable testing environment, when
compared with other E2E-testing libraries like Selenium(Java),
[Cypress](https://www.cypress.io/)(Electron) or [Nightmare.js](http://www.nightmarejs.org/)(Phantomjs).

In this particular example, we'll be testing whether we can login to a remote
environment, make some assumptions about what we expect on the page and take
some screenshots to verify the layout of Molgenis. In practice:

* Github actions workflow with Playwright, Node & Artifacts
* Example Login user story with screenshots
* Credentials workflow using Github actions secrets & dotenv
* Artifact action that makes screenshots available
* Identify testing environments: devices(responsive) & browsers (firefox, webkit/safari, chrome)
* Basic Jest testrunner config

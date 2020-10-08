![.github/workflows/tests.yml](https://github.com/molgenis/molgenis-e2e/workflows/.github/workflows/tests.yml/badge.svg)

# molgenis-e2e

This is a short POC of [Playwright](https://github.com/microsoft/playwright/)
and running E2E tests through Github Actions.

Playwright and [Puppeteer](https://developers.google.com/web/tools/puppeteer/)
are both approachable modern browser-testing libraries that only have a few
moving parts between library and the browser. This reflects in a faster, more
reliable and controllable testing environment, compared with other E2E-testing
libraries like Selenium(Java), [Cypress](https://www.cypress.io/)(Electron)
or [Nightmare.js](http://www.nightmarejs.org/)(Phantomjs).

## Github Actions

We currently use Jenkins for all of our tests. This POC uses Github Actions
instead, to investigate whether it could be benefitial to us. I will highlight
some key points here, which may also be valid for our current Jenkins setup:

* Fast build times (yarn cache)
* Ubuntu, MacOS & Windows containers
* Tight Github integration
* Free CI infrastructure for open-source
* Artifacts - keep screenshots after each run
* Simple settings for secrets (NPM_TOKEN / GH_TOKEN)

## Playwright

Node & Playwright are a good combination to run simple-to-read high-performance
E2E tests; especially since Node supports async/await syntax. Its quite
similar to Puppeteer, but Microsoft seams to pour more resources into the
project at the moment. A major difference between the two, is that Playwright
also supports headless Firefox and Webkit (Safari), besides running headless
Chrom(e/ium). Also, Playwright seems to have more focus on testing responsive
layouts, using different device settings.

## Setup

* Playwright
* Jest as testrunner (too bad it doesn't support native es-modules yet)
* Jest-playwright integration package
* Jest global setup - One-time login, sharing cookies afterwards
* Example navigator user story with screenshots
* Basic Jest testrunner config
* Playwright-cli to generate new tests

## What to test?

* Do not try to test everything
  * Validate test stories as user stories
  * Treat test stories as software functionality and validate with users
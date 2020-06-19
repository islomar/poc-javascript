# Playground for Cypress
* https://docs.cypress.io
* https://github.com/cypress-io/cypress

## Training
* https://docs.cypress.io/examples/media/courses-media.html
* https://egghead.io/playlists/add-e2e-tests-with-cypress-to-a-react-application-7691


## General
* Cypress can test anything that runs in a browser.
* Features: 
    * Time Travel
    * Debuggability
    * Automatic Waiting
    * Spies, Stubs, and Clocks
    * Network Traffic Control
    * Consistent Results
    * Screenshots and Videos
    * Cross browser Testing
* Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as your application.
* Because Cypress operates within your application, that means it has native access to every single object.
* It usese **Mocha** and **Chai**.
* Use ESLint: https://github.com/cypress-io/eslint-plugin-cypress


## How to run Cypress
* `npx cypress open`
* `$(npm bin)/cypress open`
* `npm run cypress:open`

## Bookmark
* https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-1-Start-your-server
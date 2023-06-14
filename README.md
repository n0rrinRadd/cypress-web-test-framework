## Requirements

This project requires node 16. 

## Setup

After cloning this repository run `npm install`

## Run Tests

### Cypress dashboard 
* run `npm run cy:open` to start dashboard instance

### Command line
* run `npm run cy:run`

## Fix Failing Test

* Clone the [cypress-example-kitchen](https://github.com/cypress-io/cypress-example-kitchensink) app locally
* Start the app locally with `cd cypress-example-kitchen && npm start'
* Update app->assests->scripts.js with the following

```
$('.dropdown-toggle').hover(() => {
  $('li.active').addClass('open')
})
```

* Restart the local app with `npm start'
* Update `~/.cypress.config.js` `baseUrl` value with `https://localhost:8080`
* Re-run the tests with `npm run cy:run`

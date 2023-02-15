# Shady Meadows Bed & Breakfast application E2E testing using Cypress

##Description

In the "Shady Meadows Project" with the tests scenarios are covered following features:
- Testing the GUI parts of the homepage
- The ability of the user to book a room (negative and positive scenarios)
- The ability of the admin to verify the booked room
- The ability of the user to send a message via contact form (negative and positive scenarios)
- The ability of the admin to verify the message has been received
- The ability of the admin to log in (negative and positive scenarios)
- The ability of the admin to create, update, publish and delete a room

# Test scenarios

The Manual Test Cases are in the file testScenarious.txt.
Every Manual Test Case has: steps and expected results. 

The Bugs are reported in the file bugReport.txt.
Every Bug has Actual and Expected results.
I reported the Bugs without Steps to reproduce, but every Bug have the info on which step of which Test Case is found.

They are:
- Test Case: TC01 and Bugs: Bug 01 and Bug 02
- Test Case: TC02 and Bugs: Bug 03, Bug 04, Bug 05, Bug 06 and Bug 07
- Test Case: TC03 and Bug: Bug 08
- Test Case: TC04 and Bug: Bug 09
- Test Case: TC05 and Bug: Bug 10
- Test Case: TC06 and Bug: Bug 11
- Test Case: TC07 and Bugs: Bug 12 and Bug 13

The Automated Tests are located in the folder e2e.
All the automated tests are automated by the steps from the manual test cases.
I choose to automate this test scenarios because they are covering the main functionalities of the application.
They are:
- TC01-TestingTheHomepageGUIParts.cy.js
- TC02-BookARoomNegativeScenario.cy.js
- TC06-LogInAsAdmin.cy.js
- TC07-AdminPermissions.cy



## Prerequisites

- Node.js 12 or 14 and above.
- Supported by Cypress [browsers](https://docs.cypress.io/guides/guides/launching-browsers#Browsers) of your choise


## Used urls:

- url1: https://automationintesting.online/#
- url2: https://automationintesting.online/#/admin/


## Get started with e2e tests

- Clone test project: 'git clone https://github.com/katerinaaleksandrova89/ShadyMeadowsProject.git' 
- or 'git clone https://gitlab.com/katerinaaleksandrova89/ShadyMeadowsProject.git'
- cd to cloned project root directory
- From the project's directory run `npm install` to install all required dependencies including Cypress.


## Starting the Cypress test interface

1 Run `npx cypress open` 
Here you can run any test interactively.
- Choose E2E testing and choose preferred browser.
- Click on Start E2E testing in the preferred browser.
- From the folder 'cypress\e2e' you can choose which tests to run.

2 Running all E2E tests 
From Cypress version 11.2.0 a feature flag `experimentalRunAllSpecs` will restore the behavior seen in versions < 10
Below are the steps on how to run all test in single run:
- enable the feature flag experimentalRunAllSpecs:true in cypress.config.js
- run `npx cypress open` and next to E2E specs, there is a button "Run 4 specs"
- click on the button "Run 4 specs"


## Libraries used

- E2E framework [cypress](https://www.cypress.io)
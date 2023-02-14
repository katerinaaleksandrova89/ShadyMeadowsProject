describe('Shady Meadows testing', function () {
  beforeEach(function () {
    cy.visit("https://automationintesting.online/#/admin")
    cy.on('uncaught:exception', (err, runnable) => { return false })
    cy.get('.btn-primary').first().should('have.text', 'Let me hack!').click()
  })

  //Negative and Positive scenarios

  it("TC03- Log in as admin", function () {

    //Catch 403 error
    cy.on('uncaught:exception', (err, runnable) => { return false })

    //Verify Log in form
    cy.get('.order-0').should('exist')
    cy.get('.mx-auto').should('exist')
    cy.get('.mx-auto').find('a').should('have.text', 'B&B Booking Management')
    cy.wait(1000)
    cy.get('#username').should('exist')
    cy.get('#password').should('exist')
    cy.get('#doLogin').should('exist')
    cy.wait(1000)

    cy.get('.mx-auto').find('a').click()
    cy.wait(3000)
    cy.go('back')
    cy.wait(3000)

    //Negative Login scenarios
    cy.get('#username').focus().click().type("1" + '{enter}')
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#password').focus().click().type("1" + '{enter}')
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#username').focus().click().clear()
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#password').focus().click().clear()
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#username').focus().click().type("t" + '{enter}')
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#password').focus().click().type("t" + '{enter}')
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#username').focus().click().type("esting" + '{enter}')
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#password').focus().click().type("esting" + '{enter}')
    cy.get('#doLogin').click()
    cy.wait(1000)

    cy.get('#username').focus().click().clear()
    cy.get('#username').focus().click().type("admin" + '{enter}')
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#password').focus().click().clear()
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#password').focus().click().type("pass" + '{enter}')
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#password').focus().click().type("word" + '{enter}')
    cy.get('#username').focus().click().clear()
    cy.get('#doLogin').click()
    cy.wait(1000)
    cy.get('#username').focus().click().type("adm" + '{enter}')
    cy.get('#doLogin').click()

    //Positive scenario
    cy.get('#username').focus().click().type("in" + '{enter}')
    cy.get('#doLogin').click()
    cy.get('#frontPageLink').should('exist')




    //cy.get('#username').should('exist')
    //cy.get('#username').focus().click().type("admin" + '{enter}')
    //cy.get('#password').should('exist')
    //cy.get('#password').focus().click().type("password" + '{enter}')
    //cy.get('#doLogin').should('exist')
    //cy.get('#doLogin').click()
  })
})
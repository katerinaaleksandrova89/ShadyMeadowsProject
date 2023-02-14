describe('Shady Meadows testing', function () {
  beforeEach(function () {
    cy.visit("https://automationintesting.online/#/admin")
    //Catch 403 error
    cy.on('uncaught:exception', (err, runnable) => { return false })
    cy.get('.btn-primary').first().should('have.text', 'Let me hack!').click()
  })

  it("TC04- Admin permissions", function () {

    //Verify that the user can log in - Positive scenario
    cy.get('#username').should('exist')
    cy.get('#username').focus().click().type("admin" + '{enter}')
    cy.get('#password').should('exist')
    cy.get('#password').focus().click().type("password" + '{enter}')
    cy.get('#doLogin').should('exist')
    cy.get('#doLogin').click()
    cy.get('#frontPageLink').should('exist')
    cy.wait(1000)

    //Adding a room - Negative and Positive scenario
    cy.get('#createRoom').click()
    cy.get('.alert-danger').should('have.text', 'Room name must be setmust be greater than or equal to 1')
    cy.get('#roomName').click().focus().type("102" + '{enter}')
    cy.get('.form-control').eq(1).select('Twin')
    cy.get('.form-control').eq(2).select('true')
    cy.get('#roomPrice').click().focus().type("150" + '{enter}')
    cy.wait(1000)

    cy.get('.form-check-input').check()
    cy.get('.form-check-input').eq(1).check()
    cy.get('.form-check-input').eq(2).check()
    cy.get('.form-check-input').eq(3).check()
    cy.get('.form-check-input').eq(4).check()
    cy.get('.form-check-input').eq(5).check()
    cy.get('#createRoom').click()
    cy.wait(1000)

    // Verify that the room is created
    cy.get('#frontPageLink').click()
    cy.get('[alt="Preview image of room102"]').should('exist')
    cy.get('h3').eq(1).should('have.text', 'Twin')
    cy.get('.col-sm-7').eq(1).should('exist')
    cy.get('.fa-wheelchair').eq(1).should('exist')
    cy.get('.openBooking').eq(1).should('exist')

    //Editing a room - Negative and Positive scenario
    cy.visit("https://automationintesting.online/#/admin")
    cy.get('[data-testid="roomlisting"]').eq(1).click()
    cy.get('.float-right').click()
    cy.wait(1000)

    cy.get('#roomName').clear()
    cy.get('#roomName').click().focus().type("103" + '{enter}')
    cy.get('.form-control').first().select('Double')
    cy.get('.form-control').eq(2).clear()
    cy.get('.form-control').eq(2).click().focus().type("200" + '{enter}')
    cy.get('.form-check-input').eq(3).uncheck()
    cy.get('.form-check-input').eq(4).uncheck()
    cy.get('.form-check-input').eq(5).uncheck()

    cy.get('.form-control').eq(3).clear()
    cy.get('.form-control').eq(3).click().focus().type("Double Room Description")
    cy.get('#update').click()
    cy.wait(1000)

    // Verify that the room is updated
    cy.get('#frontPageLink').click()
    cy.wait(3000)
    cy.get('[alt="Preview image of room102"]').should('not.exist')
    cy.get('[alt="Preview image of room103"]').should('exist')
    cy.get('h3').eq(1).should('have.text', 'Double')
    cy.get('.col-sm-7').eq(1).should('exist')
    cy.get('.fa-wheelchair').eq(1).should('exist')

    cy.get('p').eq(2).should('have.text', 'Double Room Description')
    cy.get('ul>li').eq(3).should('have.text', 'WiFi')
    cy.get('ul>li').eq(4).should('have.text', 'TV')
    cy.get('ul>li').eq(5).should('have.text', 'Radio')

    cy.get('.openBooking').eq(1).should('exist')

    //Delete the Room 
    cy.visit("https://automationintesting.online/#/admin")
    cy.get('.roomDelete').eq(1).click()
    cy.wait(3000)

    // Verify that the room is deleted
    cy.get('#frontPageLink').click()
    cy.get('[alt="Preview image of room103"]').should('not.exist')
    cy.get('h3').eq(1).should('not.exist')
    cy.get('.col-sm-7').eq(1).should('not.exist')
  })
})
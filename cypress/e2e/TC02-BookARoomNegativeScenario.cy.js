describe('Shady Meadows testing', function () {
  beforeEach(function () {
    cy.visit("https://automationintesting.online/")
  })

  //Negative scenario
  it("TC02-Book a room- Negative scenario", function () {

    //Open and verify Booking section
    cy.get('.openBooking').first().should('exist')
    cy.get('.openBooking').first().click()
    cy.wait(1000)

    cy.get('.room-firstname').should('exist')
    cy.get('.fa-id-card').first().should('exist')
    cy.get('.room-lastname').should('exist')
    cy.get('.fa-id-card').eq(1).should('exist')
    cy.get('.room-email').should('exist')
    cy.get('.fa-envelope').first().should('exist')
    cy.get('.room-phone').should('exist')
    cy.get('.fa-phone').first().should('exist')

    cy.get('.book-room').first().should('exist')
    cy.get('.book-room').eq(1).should('exist')
    cy.wait(1000)

    cy.get('.rbc-calendar').should('exist')
    cy.get('.rbc-toolbar').should('exist')
    cy.get('.rbc-btn-group').should('exist')

    cy.get('.book-room').first().click()
    cy.get('.openBooking').first().click()
    cy.get('.book-room').eq(1).click()
    cy.get('.alert-danger').should('exist')

    cy.get('.room-firstname').focus().click().type("1" + '{enter}')
    cy.get('.book-room').eq(1).click()
    cy.get('.room-lastname').focus().click().type("1" + '{enter}')
    cy.get('.book-room').eq(1).click()
    cy.get('.room-email').focus().click().type("1" + '{enter}')
    cy.get('.book-room').eq(1).click()
    cy.get('.room-phone').focus().click().type("1" + '{enter}')
    cy.wait(1000)

    cy.get('.room-firstname').focus().click().type("23" + '{enter}')
    cy.get('.book-room').eq(1).click()
    cy.get('.room-lastname').focus().click().type("23" + '{enter}')
    cy.get('.book-room').eq(1).click()
    cy.get('.room-email').focus().click().type("@testing.com" + '{enter}')
    cy.get('.book-room').eq(1).click()
    cy.get('.room-phone').focus().click().type("23456789123456789" + '{enter}')
    cy.get('.alert-danger').should('exist')
    cy.wait(1000)
  })
})
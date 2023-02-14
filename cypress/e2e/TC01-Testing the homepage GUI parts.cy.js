describe('Shady Meadows testing', function () {
    beforeEach(function () {
        cy.visit("https://automationintesting.online/")
    })

    //Positive scenario

    it("TC01-Testing the homepage GUI parts", function () {
        cy.get('.hotel-logoUrl').should('exist')
        cy.get('.hotel-description').should('exist')
        cy.wait(1000)
        cy.get('.room-header').should('exist')
        cy.wait(1000)
        cy.get('.contact').should('exist')
        cy.wait(1000)
        cy.get('.contact').should('exist')
        cy.wait(1000)
        cy.get('.map').should('exist')
        cy.wait(1000)


        //Verify the Logo section 
        cy.get('.hotel-logoUrl').should('exist')
        cy.get('.hotel-description').should('exist')
        cy.get('.hotel-description').find('p').should('have.text', 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.')
        cy.wait(1000)

        //Verify the Rooms section 
        cy.get('[alt="Preview image of room101"]').should('exist')
        cy.get('.col-sm-7').should('exist')
        cy.get('.fa-wheelchair').first().should('exist')

        cy.get('.openBooking').first().should('exist')
        cy.wait(1000)

        //Verify the Contact section 
        cy.get('.contact').should('exist')
        cy.get('#name').should('exist')
        cy.get('.fa-id-card').should('exist')
        cy.get('#email').should('exist')
        cy.get('.fa-envelope').first().should('exist')
        cy.get('#phone').should('exist')
        cy.get('.fa-phone').first().should('exist')
        cy.get('#subject').should('exist')
        cy.get('.fa-envelope').eq(1).should('exist')
        cy.get('#description').should('exist')
        cy.get('#submitContact').should('exist')
        cy.wait(1000)

        cy.get('.col-sm-5:contains("Shady Meadows B&B")').should('exist')
        cy.get('.fa-home').should('exist')
        cy.get('.col-sm-5:contains("The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S")').should('exist')
        cy.get('.col-sm-5:contains("012345678901")').should('exist')
        cy.get('.fa-phone').eq(1).should('exist')
        cy.get('.col-sm-5:contains("fake@fakeemail.com")').should('exist')
        cy.get('.fa-envelope').eq(2).should('exist')
        cy.wait(1000)

        //Verify the Map section
        cy.get('.pigeon-overlays').should('exist')
        cy.get('.pigeon-click-block').should('exist')
        cy.wait(1000)


    })
})
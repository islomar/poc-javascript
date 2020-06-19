const { cyan } = require("color-name")

describe('/login', () => {
    beforeEach(() => {
        cy.visit('/#/login')
    })

    it('greets with Sign in', () => {
        cy.contains('h1', 'Sign in')
    })

    it('links to #/register', () => {
        cy
        .contains('Need an account?')
        .should('have.attr', 'href', '#/register')
    })    
})
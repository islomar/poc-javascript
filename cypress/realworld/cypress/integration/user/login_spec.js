const { cyan } = require("color-name")

describe('/login', () => {
    beforeEach(() => {
        cy.visit('/#/login')
    })

    it('greets with Sign in', () => {
        cy.contains('h1', 'Sign in')
    })
})
describe('Showheroes Test', () => {
    beforeEach(function () {
        cy.visit('/')
        cy.viewport('macbook-15')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy
            .get('.iubenda-cs-accept-btn')
            .then($cookieAcceptCta => {
                const cookiesCta = $cookieAcceptCta.text()
                cy
                    .log(cookiesCta)
                    .click()
            })

    })

    it('Submits a URL', () => {

        cy
            .get('#js-vast-url')
            .then($textField => {
                const textArea = $textField.text()

                cy
                    .log(textArea)
                    .should('be.visible')
                cy
                    .get('#js-vast-url')
                    .type('https://ads.viralize.tv/vast/?test=1')
            })

        cy
            .get('button#vr-btn-start-test')
            .then($startCta => {
                const startText = $startCta.text()
                cy.log(startText)

                cy
                    .get('#vr-btn-start-test')
                    .should('contain', 'Start test and view log')

                $startCta.click()
            })

        cy.wait(5000)

        cy
            .get('#js-table-row-complete > :nth-child(1)')
            .then($tableCellOne => {
                const tableContentOne = $tableCellOne.text()
                cy
                    .log(tableContentOne)
                    .should('be.empty')
            })

        cy
            .get('#js-table-row-complete > :nth-child(2)')
            .then($tableCellTwo => {
                const tableContentTwo = $tableCellTwo.text()
                cy
                    .log(tableContentTwo)
                    .should('contain', 'Complete')
            })

        cy
            .get('#js-table-row-complete > :nth-child(3)')
            .then($tableCellThree => {
                const tableContentThree = $tableCellThree.text()
                cy
                    .log(tableContentThree)
                    .should('be.empty')
            })

    })

})
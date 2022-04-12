describe('homepage tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/group-resources/');
    });

    it('displays text', () => {
        cy.get('[data-content=main]').contains(/^[a-z]/, {matchCase: false})
    })

    it('displays buttons', () => {
        cy.get('[data-content=buttons]').get('button').should('have.length', 2)
    })

    it('buttons have correct text', () => {
        cy.get('[data-button=members]').should('be.visible').contains('New Member Resources', { matchCase: false } )
        cy.get('[data-button=workshops]').should('be.visible').contains('Workshop Resources', { matchCase: false } )

    })

    it('displays new member resources', () => {
        cy.get('[data-button=members]').click();

        cy.get('[data-resource=new-members]').should('exist');


    })

    it('should have two new member resources', () => {
        cy.get('[data-button=members]').click();
        cy.get('[data-content=card]').its('length').should('be.gte', 2)
    })

    it('displays workshop resources', () => {
        cy.get('[data-button=workshops]').click();
        cy.get('[data-resource=workshops]').should('exist')
    })

    it('should have more than two workshop resources', () => {
        cy.get('[data-button=workshops]').click();
        cy.get('[data-content=card]').its('length').should('be.gte', 3)
    })
})
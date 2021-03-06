
describe('Main page', function() {
it('Visit the main page', function() {
  cy.visit('http://localhost:3000/?validation=3&acc=97')
  cy.get('#first_name')
    .type('firstname')
    .should('have.value', 'firstname')
  cy.get('.btn-ok').click()
  cy.get('#last_name')
    .type('Lastname')
    .should('have.value', 'Lastname')
  cy.get('#email')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
  cy.get('#password')
    .type('12Qwerty')
    .should('have.value', '12Qwerty')
  cy.get('#phone_number')
    .type('633223456')
    .should('have.value', '+1 (633) 223-456')
  cy.get('[type="checkbox"]').check({force: true})
  cy.contains('Get Access Now').first().click({force: true})
  cy.url().should('include', '/?validation=3&acc=97')
  cy.contains('System could not register you. This offer is not available for your country.')
})
})

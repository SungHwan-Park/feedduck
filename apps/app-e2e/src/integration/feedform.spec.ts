
import { getGreeting } from '../support/app.po';

describe('app', () => {
  beforeEach(() => cy.visit('/new'));

  it('should submit a feed', () => {
    // Function helper example, see `../support/app.po.ts` file
    cy.get('#title').contains('How do you feed your ducks?');
    cy.get('#date').click();
    cy.get('.MuiButton-textPrimary:nth-child(2) > .MuiButton-label').click();
    cy.get('#count').type('100');
    cy.get('#quantity').type('20');
    cy.get('#food').type('wheat');
    cy.get('#place').type('yard');
    cy.get('#name').type('John');
    cy.get('form').submit();

    cy.get('#title').contains('Your feed has been submitted!');
  });
});

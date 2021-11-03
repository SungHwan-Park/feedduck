
import { getGreeting } from '../support/app.po';

describe('app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display form page', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('How do you feed your ducks?');
  });
});

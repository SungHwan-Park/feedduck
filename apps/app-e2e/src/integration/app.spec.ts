import { getGreeting } from '../support/app.po';

describe('app', () => {
  beforeEach(() => cy.visit('/app'));

  it('should display list of reports', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('How people feed ducks!');
  });
});
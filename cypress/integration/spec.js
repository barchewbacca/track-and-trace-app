import { navigateTo, getGreeting, getInput, getForm, getPackageNumber, getNoResultsDisclaimer } from '../support';

describe('Track and Trace App tests', () => {
  beforeEach(navigateTo);

  it('should display correct h1', () => {
    getGreeting().contains('Track & Trace');
  });

  it('should have the correct title', () => {
    cy.title().should('include', 'TrackAndTrace');
  });

  describe('on form sumbission', () => {
    it('should show parcel details when finds the parcel with this tracking number in the database', () => {
      cy.fixture('parcel.json').then(parcel => {
        getInput().type(parcel.id);
        getForm().submit();
        cy.url().should('include', `/details/${parcel.id}`);
        getPackageNumber().contains(parcel.packageNumber);
      });
    });

    it('should show error message when does not find the parcel in the database', () => {
      getInput().type('test123');
      getForm().submit();
      getNoResultsDisclaimer().should('exist');
    });
  });
});

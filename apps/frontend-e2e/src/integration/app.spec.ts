import { getListItem, getProductPicture, getSearchButton, getSearchInput } from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should search for products and show its details', () => {
    getSearchInput()
      .should('be.visible')
      .type('test');

    getSearchButton()
      .should('be.visible')
      .click();

    getListItem()
      .should('be.visible')
      .first()
      .click();

    getProductPicture()
      .should('be.visible');
  });
});

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

const baseUrl = 'http://localhost:4200';

export const navigateTo = () => cy.visit(baseUrl);
export const getGreeting = () => cy.get('app-root h1');
export const getInput = () => cy.get('[data-test="input"]');
export const getForm = () => cy.get('[data-test="form"]');
export const getPackageNumber = () => cy.get('[data-test="packageNumber"]');
export const getNoResultsDisclaimer = () => cy.get('[data-test="no-results-disclaimer"]');

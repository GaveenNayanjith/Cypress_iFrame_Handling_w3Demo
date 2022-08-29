/// <reference types="cypress" />

describe('The iframe test', () => {
  beforeEach(() => {
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
  })

  // //Scenario 01
  // it('The iFrame h1 should not be visble', () => {
  //   cy.xpath('//h1[text()="The iframe element"]').should('not.be.visible');
  //   //Cypress will not find this as it is inside an iframe. 
  // })

  // //Scenario 02
  // it('The iFrame h1 should be visble', () => {
  //   cy.xpath('//iframe[@id="iframeResult"]').its('0.contentDocument.body').then(cy.wrap).xpath('//h1[text()="The iframe element"]').should('be.visible');
  //   /*In here we are accessing the document boady throught jQuey and wrapping the result of that (the body of iframe itselt) 
  //   inside the 'cy' element so that we can access it through that. */
  // })

})

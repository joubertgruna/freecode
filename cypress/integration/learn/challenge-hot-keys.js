const selectors = {
  link1:
    '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
  link2:
    '/learn/responsive-web-design/basic-html-and-html5/headline-with-the-h2-element',
  link3:
    '/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page',
  link4:
    '/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form',
  description: '#description',
  instructions: '.instructions-panel',
  learnWrapper: '#learn-app-wrapper',
  editor: '.monaco-editor textarea:first',
  console: '.output-text'
};

describe('The hotkeys should work correctly', () => {
  beforeEach(() => {
    cy.visit(selectors.link1);
  });

  it('should be possible to navigate to the next challenge/projects and previous', () => {
    cy.get(selectors.description).click().type('{esc}');
    cy.get(selectors.learnWrapper).type('n');
    cy.url().should('include', selectors.link2);
    cy.get(selectors.description).click().type('{esc}');
    cy.get(selectors.learnWrapper).type('p');
    cy.url().should('include', selectors.link1);
    cy.visit(selectors.link3);
    cy.get(selectors.learnWrapper).type('{esc}').type('n');
    cy.url().should('include', selectors.link4);
    cy.get(selectors.learnWrapper).type('{esc}').type('p');
    cy.url().should('include', selectors.link3);
  });

  it('should be possible to focus on the editor with pressing "e"', () => {
    cy.get(selectors.editor).type('{esc}');
    cy.get(selectors.description).click().type('e');
    cy.get(selectors.editor).should('have.focus');
  });

  it('should be possible to press ctrl enter to run the test', () => {
    cy.get(selectors.description).click().type('{ctrl}{enter}');
    cy.get(selectors.console).contains('// running tests');
  });

  it('should be possible to go to navigation view by pressing escape', () => {
    cy.get(selectors.editor).type('{esc}');
    cy.get(selectors.editor).should('not.have.focus');
  });

  // it should be possible to focus on the instructions by pressing r
  it('it should be possible to focus on the instructions by pressing r', () => {
    cy.get(selectors.editor).type('{esc}');
    cy.get(selectors.instructions).click().type('r');
    cy.get(selectors.instructions).should('have.focus');
  });
});

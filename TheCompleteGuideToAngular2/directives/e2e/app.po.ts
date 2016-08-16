export class DirectivesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('directives-app h1')).getText();
  }
}

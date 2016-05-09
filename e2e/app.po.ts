export class Ng2AppWithCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}

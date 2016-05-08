export class Ng2AppWithCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-app-with-cli-app h1')).getText();
  }
}

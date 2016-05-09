import { Ng2AppWithCliPage } from './app.po';

describe('ng2-app-with-cli App', function() {
  let page: Ng2AppWithCliPage;

  beforeEach(() => {
    page = new Ng2AppWithCliPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('site works!');
  });
});

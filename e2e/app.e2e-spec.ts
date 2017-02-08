import { GettingintocloudPage } from './app.po';

describe('gettingintocloud App', function() {
  let page: GettingintocloudPage;

  beforeEach(() => {
    page = new GettingintocloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

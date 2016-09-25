import { AmcPage } from './app.po';

describe('amc App', function() {
  let page: AmcPage;

  beforeEach(() => {
    page = new AmcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

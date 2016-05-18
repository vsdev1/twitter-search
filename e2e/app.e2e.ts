import { TwitterSearchPage } from './app.po';

describe('twitter-search App', function() {
  let page: TwitterSearchPage;

  beforeEach(() => {
    page = new TwitterSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('twitter-search works!');
  });
});

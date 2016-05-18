export class TwitterSearchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('twitter-search-app h1')).getText();
  }
}

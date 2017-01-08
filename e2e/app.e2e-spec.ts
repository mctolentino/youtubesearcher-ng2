import { YoutubeSearcherPage } from './app.po';

describe('youtube-searcher App', function() {
  let page: YoutubeSearcherPage;

  beforeEach(() => {
    page = new YoutubeSearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { VoteAppPage } from './app.po';

describe('vote-app App', function() {
  let page: VoteAppPage;

  beforeEach(() => {
    page = new VoteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { SummITWebsitePage } from './app.po';

describe('summ-itwebsite App', () => {
  let page: SummITWebsitePage;

  beforeEach(() => {
    page = new SummITWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { AngularcliAppPage } from './app.po';

describe('angularcli-app App', () => {
  let page: AngularcliAppPage;

  beforeEach(() => {
    page = new AngularcliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

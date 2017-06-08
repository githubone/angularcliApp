import { AngularcliAppPage } from './app.po';

describe('angularcli-app App', () => {
  let page: AngularcliAppPage;

  beforeEach(() => {
    page = new AngularcliAppPage();
  });

  it('should display please sign in message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Please sign in');
  });

  it('should display sign in button', () => {
    expect(page.getSignInButtonElement()).toEqual('Sign in');
  });
});

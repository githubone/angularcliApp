import { browser, element, by } from 'protractor';

export class AngularcliAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h2.form-signin-heading')).getText();
  }

  getCustomLoginHeaderText() {
    return element(by.css('form-signin-heading')).getText();
  }

  getSignInButtonElement() {
    return element(by.css('.btn-u,.btn-u-default,.btn-u-sm,.btn-block')).getText();
  }

}

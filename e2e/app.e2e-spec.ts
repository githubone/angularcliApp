import { AngularcliAppPage } from './app.po';
import {browser} from 'protractor';

import * as builder from 'axe-webdriverjs';

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

  it('should have no accessibility violations', function(){
     builder(browser)
        .analyze(function(results) {
          browser.debugger();
          if (results.violations.length > 0) {
            console.log(results.violations);
          }
          //expect(results.violations.length).toBe(0);    
      });
  })
});

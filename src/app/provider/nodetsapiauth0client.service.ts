import { Injectable } from '@angular/core';
import { AUTH_CONFIG} from '../config/auth.config';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { SessionStorageService } from 'ngx-webstorage';

// NOTE: methods taken from auth0 client code

@Injectable()
export class Nodetsapiauth0clientService {
  auth0 = new auth0.WebAuth({
     clientID: AUTH_CONFIG.clientID,
     domain: AUTH_CONFIG.domain,  
      responseType: AUTH_CONFIG.responseType,
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      redirectUri: 'http://localhost:4200',
      scope: AUTH_CONFIG.scope
  });
  constructor(private router:Router, private storage: SessionStorageService) {}

  public login():void{
      this.auth0.authorize();
  }

  public extractAuth0Login(){
    this.auth0.parseHash((err, authResult)=> 
    {
        //&& authResult.id
        if(authResult && authResult.accessToken ) {
          window.location.hash = '';
          this.setSession(authResult);
        } else if (err){
            console.log(err);
            alert(`Error: ${err.error}. Check the console for further details.`);
        }
    });
  }

  public handleAuthentication():void {
    this.auth0.parseHash((err, authResult)=> 
    {
        //&& authResult.id
        if(authResult && authResult.accessToken ) {
          window.location.hash = '';
          this.setSession(authResult);
          //debugger;
          //this.router.navigate(['/']);
        } else if (err){
           window.location.hash = '';
          //this.router.navigate(['/']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
        }
    });
  }

  public isAuthenticated():boolean {
      const expiresAt = JSON.parse(this.storage.retrieve(AUTH_CONFIG.expiresAt));
      return new Date().getTime() < expiresAt;
  }

  public setSession(authResult) : void {
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      this.storage.store(AUTH_CONFIG.accessToken, authResult.accessToken);
      this.storage.store(AUTH_CONFIG.idToken, authResult.idToken);
      this.storage.store(AUTH_CONFIG.expiresAt, expiresAt);
    
  }

  public logOut(): void {
     // Remove tokens and expiry time from storage
    this.storage.clear(AUTH_CONFIG.accessToken);
    this.storage.clear(AUTH_CONFIG.idToken);
    this.storage.clear(AUTH_CONFIG.expiresAt);
    // Go back to the home route
    //this.router.navigate(['/']);
  }
}

/* old code
const expiresAt = JSON.parse(localStorage.getItem(AUTH_CONFIG.expiresAt));
    localStorage.setItem(AUTH_CONFIG.accessToken, authResult.accessToken);
    localStorage.setItem(AUTH_CONFIG.idToken, authResult.idToken);
    localStorage.setItem(AUTH_CONFIG.expiresAt, expiresAt);
    localStorage.removeItem(AUTH_CONFIG.accessToken);
    localStorage.removeItem(AUTH_CONFIG.idToken);
    localStorage.removeItem(AUTH_CONFIG.expiresAt);
*/
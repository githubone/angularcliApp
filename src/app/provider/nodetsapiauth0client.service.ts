import { Injectable } from '@angular/core';
import { AUTH_CONFIG} from '../config/auth.config';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';


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
  constructor(private router:Router) {}

  public login():void{
      this.auth0.authorize();
  }

  public handleAuthentication():void {
    this.auth0.parseHash((err, authResult)=> 
    {
        if(authResult && authResult.accessToken && authResult.id) {
          window.location.hash = '';
          this.setSession(authResult);
          this.router.navigate(['/home']);
        } else if (err){
           this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
        }
    });
  }

  public isAuthenticated():boolean {
      const expiresAt = JSON.parse(localStorage.getItem(AUTH_CONFIG.expiresAt));
      return new Date().getTime() < expiresAt;
  }

  public setSession(authResult) : void {
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem(AUTH_CONFIG.accessToken, authResult.accessToken);
      localStorage.setItem(AUTH_CONFIG.idToken, authResult.idToken);
      localStorage.setItem(AUTH_CONFIG.expiresAt, expiresAt);
  }

  public logOut(): void {
     // Remove tokens and expiry time from localStorage
    localStorage.removeItem(AUTH_CONFIG.accessToken);
    localStorage.removeItem(AUTH_CONFIG.idToken);
    localStorage.removeItem(AUTH_CONFIG.expiresAt);
    // Go back to the home route
    this.router.navigate(['/']);
  }
}
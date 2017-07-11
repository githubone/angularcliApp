import { Component, OnInit } from '@angular/core';
import { Nodetsapiauth0clientService }  from '../provider/nodetsapiauth0client.service';
//https://github.com/angular/angular/blob/4.1.x/packages/common/src/location/location.ts
import { Location } from '@angular/common';
import { BroadcasterService} from '../provider/broadcaster.service';
import { LOGIN_CONFIG } from '../config/login.config';

@Component({
  selector: 'app-auth0login',
  templateUrl: './auth0login.component.html',
  styleUrls: ['./auth0login.component.css']
})
export class Auth0loginComponent implements OnInit {
  auth0Hash:string;
  userMessage:string;
  constructor(private location: Location,
            private authService: Nodetsapiauth0clientService,
            private broadcaster: BroadcasterService
            )
            { }

  ngOnInit() {
    let auth0Login = this.authService.isAuthenticated();

    if(!auth0Login){
          if (location.hash.length > 0) {
             this.handleInitForAuth0Callback();
          } else {
             this.handleInitForNotLoginAuth0();
        }
    } else {
       if (location.hash.length > 0) {
             this.handleInitForAuth0Callback();
       } 
      this.handleInitForAlreadyLoginAuth0(auth0Login);
    }
   
  }
  handleInitForNotLoginAuth0(){
     this.userMessage = "You are NOT authenticated and will be redirected to the login page";
     this.authService.login();
  }

  handleInitForAuth0Callback() {
      this.userMessage = "You are authenticated. Please wait for the page to load..";
      this.processAuth0Login();
  }

  handleInitForAlreadyLoginAuth0(auth0Login:any){
     this.broadcastAuth0Login(auth0Login);
  }

  processAuth0Login(){
      // this methods extracts token info and persist them into session storage
      this.authService.extractAuth0Login();
      this.broadcastAuth0Login(true);
  }
  broadcastAuth0Login(isAuth0Login:boolean){
      this.broadcaster.broadcast(LOGIN_CONFIG.userKey,isAuth0Login);
  }
  
}
